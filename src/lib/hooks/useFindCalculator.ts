'use client'

import { type usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { calculators } from '@/lib/links'
import { type HashType } from '@/lib/types'

const useFindCalculatorWithPathName = ({
	pathName
}: {
	pathName: ReturnType<typeof usePathname>
}) => {
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

const useFindCalculatorWithHash = (hash: HashType) => {
	return useMemo(() => {
		return calculators.find((calculator) => calculator.hash === hash)
	}, [hash])
}

export { useFindCalculatorWithPathName, useFindCalculatorWithHash }
