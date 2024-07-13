'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/nscp-2001-code-provisions'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormOutput } from '@/components/ui/form'

const ResultCard = () => {
	const [values] = useAtom(calculatedAtoms)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Results</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
				<FormOutput label="Allowable Stress" symbol="Mpa">
					{values.AllowableStress || 0}
				</FormOutput>
				<FormOutput label="Allowable Capacity" symbol="kN">
					{values.AllowableCapacity || 0}
				</FormOutput>
			</CardContent>
		</Card>
	)
}

export { ResultCard }
