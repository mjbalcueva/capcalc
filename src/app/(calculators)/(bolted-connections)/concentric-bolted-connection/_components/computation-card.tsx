'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/concentric-bolted-connection'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormOutput } from '@/components/ui/form'

const ComputationCard = () => {
	const [values] = useAtom(calculatedAtoms)
	const typeOfConsideration = values.typeOfConcentricBoltedConnection
	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
				<div className="flex flex-col space-y-4">
					{(typeOfConsideration === 'gross' || typeOfConsideration === 'net') && (
						<FormOutput label="Gross Area" symbol="Ag">
							{!isFinite(values.Ag) ? 0 : values.Ag || 0}
						</FormOutput>
					)}

					{typeOfConsideration === 'net' && (
						<FormOutput label="Bolt Diameter" symbol="dh">
							{!isFinite(values.dh) ? 0 : values.dh || 0}
						</FormOutput>
					)}

					{typeOfConsideration === 'net' && (
						<FormOutput label="Effective Diameter" symbol="de">
							{!isFinite(values.de) ? 0 : values.de || 0}
						</FormOutput>
					)}

					{typeOfConsideration === 'net' && (
						<FormOutput label="Net Area" symbol="An">
							{!isFinite(values.An) ? 0 : values.An || 0}
						</FormOutput>
					)}

					{typeOfConsideration === 'shearing' && (
						<FormOutput label="Shearing Area" symbol="Av">
							{!isFinite(values.Av) ? 0 : values.Av || 0}
						</FormOutput>
					)}

					{typeOfConsideration === 'bearing' && (
						<FormOutput label="" symbol="">
							None
						</FormOutput>
					)}
				</div>
			</CardContent>
		</Card>
	)
}

export { ComputationCard }
