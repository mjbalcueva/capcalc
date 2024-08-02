'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/shear-and-bending'

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
					<FormOutput label="Moment" symbol="M">
						{!isFinite(values.M) ? 0 : values.M || 0}
					</FormOutput>

					<FormOutput label="Half of Length" symbol="C">
						{!isFinite(values.C) ? 0 : values.C || 0}
					</FormOutput>

					<FormOutput label="Moment of Inertia" symbol="I">
						{!isFinite(values.I) ? 0 : values.I || 0}
					</FormOutput>
				</div>

				<div className="flex flex-col space-y-4">
					<FormOutput label="Bending Stress" symbol="fb">
						{!isFinite(values.fb) ? 0 : values.fb || 0}
					</FormOutput>

					<FormOutput label="Shearing Stress" symbol="fv">
						{!isFinite(values.fv) ? 0 : values.fv || 0}
					</FormOutput>
				</div>
			</CardContent>
		</Card>
	)
}

export { ComputationCard }
