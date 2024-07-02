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

const useCalculatorWithPathName = ({ pathName }: CalculatorType) => {
	return useMemo(() => {
		const activeCalculator = calculators.find((calculator) =>
			calculator.calculators.some(({ link }) => link === pathName)
		)
		const activeCalculatorItem = activeCalculator?.calculators.find(
			({ link }) => link === pathName
		)
		return {
			activeCalculator,
			activeCalculatorItem
		}
	}, [pathName])
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

export { useCalculatorWithPathName, useCalculatorWithHash, useSectionInView }
