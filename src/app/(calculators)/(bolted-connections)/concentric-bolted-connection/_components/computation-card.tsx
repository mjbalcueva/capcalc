'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/concentric-bolted-connection'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormOutput } from '@/components/ui/form'

const ComputationCard = () => {
	const [values] = useAtom(calculatedAtoms)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
			</CardHeader>
			<CardContent>
				<pre>{JSON.stringify(values, null, 2)}</pre>
			</CardContent>
			<CardContent className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
				<div className="flex flex-col space-y-4">
					<FormOutput label="Gross Area" symbol="Ag">
						{!isFinite(values.Ag) ? 0 : values.Ag || 0}
					</FormOutput>
					<FormOutput label="" symbol="P1">
						{!isFinite(values.P1) ? 0 : values.P1 || 0}
					</FormOutput>
					<FormOutput label="Bolt Diameter" symbol="dh">
						{!isFinite(values.dh) ? 0 : values.dh || 0}
					</FormOutput>
					<FormOutput label="Bolt Diameter" symbol="de">
						{!isFinite(values.de) ? 0 : values.de || 0}
					</FormOutput>
					<FormOutput label="Net Area" symbol="An">
						{!isFinite(values.An) ? 0 : values.An || 0}
					</FormOutput>
				</div>
			</CardContent>
		</Card>
	)
}

export { ComputationCard }
