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
						{!isFinite(values.Rx) ? 0 : values.Rx || 0}
					</FormOutput>
					<FormOutput label="Radius of Gyration" symbol="Ry">
						{!isFinite(values.Ry) ? 0 : values.Ry || 0}
					</FormOutput>
					<FormOutput label="Minimum Radius" symbol="Rmin">
						{!isFinite(values.rMin) ? 0 : values.rMin || 0}
					</FormOutput>
				</div>
				<div className="flex flex-col space-y-4">
					<FormOutput label="Slenderness Ratio" symbol="SRx">
						{!isFinite(values.SRx) ? 0 : values.SRx || 0}
					</FormOutput>
					<FormOutput label="Slenderness Ratio" symbol="SRy">
						{!isFinite(values.SRy) ? 0 : values.SRy || 0}
					</FormOutput>
					<FormOutput label="Maximum" symbol="SRmax">
						{!isFinite(values.SRmax) ? 0 : values.SRmax || 0}
					</FormOutput>
				</div>
			</CardContent>
		</Card>
	)
}

export { ComputationCard }
