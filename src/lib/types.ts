import { type menuItems } from '@/lib/links'

type SectionHashType = (typeof menuItems)[number]['hash']

type CalculatorItemType = {
	title: string
	description: string
	link: string
}

type CalculatorSectionType = {
	title: string
	description: string
	calculators: CalculatorItemType[]
}

export type { SectionHashType, CalculatorItemType, CalculatorSectionType }
