'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/balanced-weld-group'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormOutput } from '@/components/ui/form'

const ResultCard = () => {
	const [values] = useAtom(calculatedAtoms)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Results</CardTitle>
			</CardHeader>

			<CardContent className="gap-4 text-center sm:gap-8 sm:text-start">
				<div className="flex flex-col">
					<FormOutput label="Allowable Capacity based on Gross Area" symbol="N">
						{!isFinite(values.P1) ? 0 : values.P1 || 0}
					</FormOutput>
				</div>
			</CardContent>
		</Card>
	)
}

export { ResultCard }
