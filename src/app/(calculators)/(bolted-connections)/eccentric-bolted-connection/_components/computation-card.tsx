'use client'

// import { useAtom } from 'jotai'

// import { calculatedAtoms } from '@/atoms/eccentric-bolted-connection'
import { useFormContext } from 'react-hook-form'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { type inputType } from '@/lib/schemas/eccentric-bolted-connection'

// import { FormOutput } from '@/components/ui/form'

const ComputationCard = () => {
	// const [values] = useAtom(calculatedAtoms)
	const form = useFormContext<inputType>()

	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
			</CardHeader>

			<CardContent>
				<pre>{JSON.stringify(form.getValues(), null, 2)}</pre>
			</CardContent>

			{/* <CardContent className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
				{typeOfTensileCapacityChoices === 'getCapacity' && (
					<>
						<FormOutput label="Gross Area" symbol="Ag">
							{!isFinite(values.Ag) ? 0 : values.Ag || 0}
						</FormOutput>

						<FormOutput label="Net Area" symbol="An">
							{!isFinite(values.An) ? 0 : values.An || 0}
						</FormOutput>
					</>
				)}

				{typeOfTensileCapacityChoices === 'getP' && (
					<>
						<FormOutput label="Area of Weld Parallel to the load" symbol="Ag">
							{!isFinite(values.Av) ? 0 : values.Av || 0}
						</FormOutput>

						<FormOutput label="Area of Weld Transverse to the load" symbol="An">
							{!isFinite(values.At) ? 0 : values.At || 0}
						</FormOutput>
					</>
				)}
			</CardContent> */}
		</Card>
	)
}

export { ComputationCard }
