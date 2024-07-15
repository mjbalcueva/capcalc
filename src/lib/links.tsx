import { Icons } from '@/components/shared/icons'

const calculators = [
	{
		hash: '#bolted-connections',
		title: 'Bolted Connections Calculator',
		description:
			'Explore our suite of calculators designed for bolted connections, which are essential structural elements used to join two or more components together.',
		calculators: []
	},
	{
		hash: '#welded-connections',
		title: 'Welded Connections Calculator',
		description:
			'Explore our suite of calculators designed for welded connections, which are essential structural elements used to join two or more components together.',
		calculators: []
	},
	{
		hash: '#non-built-up-columns',
		title: 'Non-Built Up Columns Calculator',
		description:
			'Explore our suite of calculators designed for non-built up columns, which are essential structural elements made from single-piece rolled steel sections.',
		calculators: [
			{
				title: "Euler's Formula for Columns",
				description:
					"Euler's formula gives the maximum load that a long, slender, ideal column can carry without buckling. The formula is given by: P = π²EI / L² where P is the maximum load, E is the modulus of elasticity, I is the area moment of inertia, and L is the length of the column.",
				link: '/eulers-formula-for-columns'
			},
			{
				title: 'NSCP 2001 Code Provisions',
				description:
					'The National Structural Code of the Philippines (NSCP) 2001 provides the design requirements for non-built up columns. The code provisions are based on the principles of mechanics and the results of extensive research.',
				link: '/nscp-2001-code-provisions'
			},
			{
				title: 'Base Plate',
				description:
					'The base plate is used to calculate the thickness of the base plate for a non-built up column. The formula is given by: t = √(P / (0.6 * f * B)) where t is the thickness of the base plate, P is the axial load, f is the allowable stress, and B is the width of the base plate.',
				link: '/base-plate'
			}
		]
	}
]

const menuItems = [
	{
		content: <Icons.logo className="h-6" />,
		hash: '#home'
	},
	...calculators.map((calculator) => ({
		content: calculator.title?.slice(0, -11),
		hash: calculator.hash
	}))
] as const

export { menuItems, calculators }
