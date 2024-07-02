'use client'

import { type usePathname } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'

import { type calculators } from '@/lib/links'
import { type HashType } from '@/lib/types'
import { useActiveSectionContext } from '@/providers/active-section-provider'

type CalculatorType = {
	calculators: typeof calculators
	pathName: ReturnType<typeof usePathname>
}

const useCalculator = ({ calculators, pathName }: CalculatorType) => {
	const { activeSection, activeCalculator, findCalculatorWithHash } =
		useMemo(() => {
			const activeSection = calculators.find((calculator) =>
				calculator.calculators.some(({ link }) => link === pathName)
			)

			const currentCalculator = activeSection?.calculators.find(
				({ link }) => link === pathName
			)

			const findCalculatorWithHash = (hash: HashType) =>
				calculators.find((calculator) => calculator.hash === hash)

			return {
				activeSection,
				activeCalculator: currentCalculator,
				findCalculatorWithHash
			}
		}, [calculators, pathName])

	return { activeSection, activeCalculator, findCalculatorWithHash }
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

export { useCalculator, useSectionInView }
