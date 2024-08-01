'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/balanced-weld-group'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormOutput } from '@/components/ui/form'

const ComputationCard = () => {
	const [values] = useAtom(calculatedAtoms)
	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
				<div className="flex flex-col space-y-4">
					<FormOutput label="Gross Area" symbol="Ag">
						{!isFinite(values.Ag) ? 0 : values.Ag || 0}
					</FormOutput>
				</div>
			</CardContent>
		</Card>
	)
}

export { ComputationCard }