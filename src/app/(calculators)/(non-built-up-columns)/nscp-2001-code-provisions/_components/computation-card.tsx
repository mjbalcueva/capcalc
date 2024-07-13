'use client'

import { useAtom } from 'jotai'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormOutput } from '@/components/ui/form'
import { calculatedAtoms } from './atom'

const ComputationCard = () => {
	const [values] = useAtom(calculatedAtoms)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
				<div className="flex flex-col space-y-4">
					<FormOutput label="Radius of Gyration" symbol="Rx">
						{values.Rx == Infinity ? 0 : values.Rx || 0}
					</FormOutput>
					<FormOutput label="Radius of Gyration" symbol="Ry">
						{values.Ry == Infinity ? 0 : values.Ry || 0}
					</FormOutput>
					<FormOutput label="Minimum Radius" symbol="Rmin">
						{values.rMin == Infinity ? 0 : values.rMin || 0}
					</FormOutput>
					<FormOutput label="Critical Stress" symbol="Cc">
						{values.Cc == Infinity ? 0 : values.Cc || 0}
					</FormOutput>
				</div>
				<div className="flex flex-col space-y-4">
					<FormOutput label="Slenderness Ratio" symbol="SRx">
						{values.SRx == Infinity ? 0 : values.SRx || 0}
					</FormOutput>
					<FormOutput label="Slenderness Ratio" symbol="SRy">
						{values.SRy == Infinity ? 0 : values.SRy || 0}
					</FormOutput>
					<FormOutput label="Maximum" symbol="SRmax">
						{values.SRmax == Infinity ? 0 : values.SRmax || 0}
					</FormOutput>
					<FormOutput label="Column Type" symbol="">
						{values.ColumnType || 'None'}
					</FormOutput>
					<FormOutput label="Factor of Safety" symbol="Fs">
						{values.Fs == -1 ? 'N/A' : values.Fs || 0}
					</FormOutput>
				</div>
			</CardContent>
		</Card>
	)
}

export { ComputationCard }
