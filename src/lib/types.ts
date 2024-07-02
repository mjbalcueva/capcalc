import { type ZodSchema } from 'zod'

import { type menuItems } from '@/lib/links'

type SectionHashType = (typeof menuItems)[number]['hash']

type CalculatorItemType = {
	title: string
	description: string
	link: string
	schema?: ZodSchema
}

type CalculatorSectionType = {
	title: string
	description: string
	hash?: SectionHashType
	calculators: CalculatorItemType[]
}

type CalculatorType = CalculatorSectionType[]

export type { SectionHashType, CalculatorItemType, CalculatorType }
