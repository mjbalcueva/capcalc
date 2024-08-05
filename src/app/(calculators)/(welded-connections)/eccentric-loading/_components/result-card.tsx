'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/eccentric-loading'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormOutput } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'

const ResultCard = () => {
	const [values] = useAtom(calculatedAtoms)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Results</CardTitle>
			</CardHeader>

			<Separator />

			<CardContent>
				<CardTitle className="py-4">Shearing Stress</CardTitle>
				<div className="grid gap-4 text-center sm:grid-cols-2 sm:gap-8 sm:text-start">
					<div className="flex flex-col gap-4">
						<FormOutput label="Shearing Stress" symbol="fv 1">
							{!isFinite(values.fv.fv1) ? 0 : values.fv.fv1 || 0}
						</FormOutput>

						<FormOutput label="Shearing Stress" symbol="fv 2">
							{!isFinite(values.fv.fv2) ? 0 : values.fv.fv2 || 0}
						</FormOutput>
					</div>

					<div className="flex flex-col gap-4">
						<FormOutput label="Shearing Stress" symbol="fv 3">
							{!isFinite(values.fv.fv3) ? 0 : values.fv.fv3 || 0}
						</FormOutput>

						<FormOutput label="Shearing Stress" symbol="fv 4">
							{!isFinite(values.fv.fv4) ? 0 : values.fv.fv4 || 0}
						</FormOutput>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export { ResultCard }
