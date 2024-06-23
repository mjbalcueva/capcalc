import { menuItems } from '@/lib/links'

type SectionHash = (typeof menuItems)[number]['hash']

type NonBuiltUpColumnsItemsType = {
	title: string
	description: string
	link: string
}[]

export type { SectionHash, NonBuiltUpColumnsItemsType }
