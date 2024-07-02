import { type ZodSchema } from 'zod'

import { menuItems } from '@/lib/links'

type HashType = (typeof menuItems)[number]['hash']

type CalculatorItemType = {
	title: string
	description: string
	link: string
	schema?: ZodSchema
}

type CalculatorSectionType = {
	hash: string
	title: string
	description: string
	calculators: CalculatorItemType[]
}

type CalculatorType = CalculatorSectionType[]

export type { HashType, CalculatorItemType, CalculatorType }
