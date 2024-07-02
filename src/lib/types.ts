import { type calculators, type menuItems } from '@/lib/links'

type HashType = (typeof menuItems)[number]['hash']

type CalculatorType = typeof calculators
type CalculatorItemType = (typeof calculators)[number]['calculators'][number]

export type { HashType, CalculatorItemType, CalculatorType }
