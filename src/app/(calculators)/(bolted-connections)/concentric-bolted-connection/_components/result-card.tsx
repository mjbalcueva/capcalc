'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/concentric-bolted-connection'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormOutput } from '@/components/ui/form'

const ResultCard = () => {
	const [values] = useAtom(calculatedAtoms)
	const typeOfConsideration = values.typeOfConcentricBoltedConnection

	return (
		<Card>
			<CardHeader>
				<CardTitle>Results</CardTitle>
			</CardHeader>

			<CardContent className="gap-4 text-center sm:gap-8 sm:text-start">
				<div className="flex flex-col">
					{typeOfConsideration === 'gross' && (
						<FormOutput label="Allowable Capacity based on Gross Area" symbol="N">
							{!isFinite(values.P1) ? 0 : values.P1 || 0}
						</FormOutput>
					)}

					{typeOfConsideration === 'net' && (
						<FormOutput label="Allowable Capacity based on Net Area" symbol="N">
							{!isFinite(values.P2) ? 0 : values.P2 || 0}
						</FormOutput>
					)}

					{typeOfConsideration === 'shearing' && (
						<FormOutput label="Allowable Capacity based on Shearing of Bolts" symbol="N">
							{!isFinite(values.P3) ? 0 : values.P3 || 0}
						</FormOutput>
					)}

					{typeOfConsideration === 'bearing' && (
						<FormOutput label="Allowable Capacity based on Bearing of Plates" symbol="N">
							{!isFinite(values.P4) ? 0 : values.P4 || 0}
						</FormOutput>
					)}
				</div>
			</CardContent>
		</Card>
	)
}

export { ResultCard }
