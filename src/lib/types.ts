import { type menuItems } from '@/lib/links'

type SectionHashType = (typeof menuItems)[number]['hash']

type NonBuiltUpColumnsItemsType = {
	title: string
	description: string
	link: string
}[]

export type { SectionHashType, NonBuiltUpColumnsItemsType }
