'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/base-plate'

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
					<FormOutput label="Effective Concrete Base" symbol="C">
						{!isFinite(values.C) ? 0 : values.C || 0}
					</FormOutput>
					<FormOutput label="Area of Steel Plate" symbol="A1">
						{!isFinite(values.A1) ? 0 : values.A1 || 0}
					</FormOutput>
					<FormOutput label="Area of Concrete Column" symbol="A2">
						{!isFinite(values.A2) ? 0 : values.A2 || 0}
					</FormOutput>
				</div>
				<div className="flex flex-col space-y-4">
					<FormOutput label="Concrete Column Allowable Stress" symbol="Fp2">
						{!isFinite(values.Fp2) ? 0 : values.Fp2 || 0}
					</FormOutput>
					<FormOutput label="Steel Plate Allowable Load" symbol="P2">
						{!isFinite(values.P2) ? 0 : values.P2 || 0}
					</FormOutput>
				</div>
			</CardContent>
		</Card>
	)
}

export { ComputationCard }
