import { nonBuiltUpColumns } from '@/lib/links'

export default function Nscp2001CodeProvisionsPage() {
	const nscp = nonBuiltUpColumns.calculators[0]
	return (
		<>
			<div>
				<h1>{nscp!.title}</h1>
				<p>{nscp!.description}</p>
			</div>
		</>
	)
}
