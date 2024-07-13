'use client'

import { useAtom } from 'jotai'

import { calculatedAtoms } from '@/atoms/base-plate'

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
				<div className="flex flex-col space-y-4">
					<FormOutput label="" symbol="m">
						{!isFinite(values.m) ? 0 : values.m || 0}
					</FormOutput>
					<FormOutput label="" symbol="n">
						{!isFinite(values.n) ? 0 : values.n || 0}
					</FormOutput>
					<FormOutput label="" symbol="x">
						{!isFinite(values.x) ? 0 : values.x || 0}
					</FormOutput>
				</div>
				<div className="flex flex-col space-y-4">
					<FormOutput label="" symbol="Fb">
						{!isFinite(values.Fb) ? 0 : values.Fb || 0}
					</FormOutput>
					<FormOutput label="Steel Plate Allowable Stress" symbol="Fp1">
						{!isFinite(values.Fp1) ? 0 : values.Fp1 || 0}
					</FormOutput>
					<FormOutput label="Steel Plate Load" symbol="P1">
						{!isFinite(values.P1) ? 0 : values.P1 || 0}
					</FormOutput>
				</div>
			</CardContent>
		</Card>
	)
}

export { ResultCard }
