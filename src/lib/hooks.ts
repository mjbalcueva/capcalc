'use client'

import { type usePathname } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'

import { calculators } from '@/lib/links'
import { type HashType } from '@/lib/types'
import { useActiveSectionContext } from '@/providers/active-section-provider'

type CalculatorType = {
	pathName: ReturnType<typeof usePathname>
}

const useCalculator = ({ pathName }: CalculatorType) => {
	const { activeSection, activeCalculator } = useMemo(() => {
		const activeSection = calculators.find((calculator) =>
			calculator.calculators.some(({ link }) => link === pathName)
		)
		const activeCalculator = activeSection?.calculators.find(
			({ link }) => link === pathName
		)
		return {
			activeSection,
			activeCalculator
		}
	}, [pathName])

	return { activeSection, activeCalculator }
}

const useCalculatorWithHash = (hash: HashType) => {
	return useMemo(() => {
		return calculators.find((calculator) => calculator.hash === hash)
	}, [hash])
}

const useSectionInView = (sectionHash: HashType, threshold = 0.75) => {
	const { ref, inView } = useInView({ threshold })
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionHash)
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionHash])
	return { ref }
}

export { useCalculator, useCalculatorWithHash, useSectionInView }
