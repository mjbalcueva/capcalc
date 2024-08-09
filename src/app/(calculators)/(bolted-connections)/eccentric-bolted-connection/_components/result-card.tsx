'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/eccentric-bolted-connection'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormOutput } from '@/components/ui/form'

const ResultCard = () => {
	const [values] = useAtom(calculatedAtoms)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Results</CardTitle>
			</CardHeader>

			<CardContent>
				<pre>{JSON.stringify(values, null, 2)}</pre>
			</CardContent>

			{/* <CardContent className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
				{typeOfTensileCapacityChoices === 'getCapacity' && (
					<div className="flex flex-col gap-4">
						<FormOutput label="P Based on Gross Area" symbol="P1">
							{!isFinite(values.P1) ? 0 : values.P1 || 0}
						</FormOutput>

						<FormOutput label="P Based on Net Area" symbol="P2">
							{!isFinite(values.P2) ? 0 : values.P2 || 0}
						</FormOutput>
					</div>
				)}

				{typeOfTensileCapacityChoices === 'getP' && (
					<FormOutput label="P Based on Block Shear" symbol="An">
						{!isFinite(values.P3) ? 0 : values.P3 || 0}
					</FormOutput>
				)}

				{typeOfTensileCapacityChoices === 'getCapacity' && (
					<FormOutput label="Capacity" symbol="P">
						{!isFinite(values.smallestP) ? 0 : values.smallestP || 0}
					</FormOutput>
				)} 
			</CardContent> */}
		</Card>
	)
}

export { ResultCard }
