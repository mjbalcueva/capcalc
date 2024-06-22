import { Icons } from '@/components/icons'

const menuItems = [
	{
		content: <Icons.logo className="h-6" />,
		hash: '#home'
	},
	{
		content: 'Bolted Connections',
		hash: '#bolted-connections'
	},
	{
		content: 'Welded Connections',
		hash: '#welded-connections'
	},
	{
		content: 'Non-Built Up Columns',
		hash: '#non-built-up-columns'
	}
] as const

export { menuItems }
