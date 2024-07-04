'use client'

import { FormItem } from '@/components/form'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { useCalculatorContext } from '@/providers/calculator-providert'
import { CalculatorState } from './type'

const ResultCard = () => {
	const { state } = useCalculatorContext<CalculatorState>()

	return (
		<Card>
			<CardHeader>
				<CardTitle>Result</CardTitle>
				<CardDescription>Result Description</CardDescription>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-8">
				<FormItem.Output
					label="Allowable Stress"
					placeholder="Mpa"
					value={state.AllowableStress.toFixed(3)}
				/>
				<FormItem.Output
					label="Allowable Capacity"
					placeholder="kN"
					value={state.AllowableCapacity.toFixed(3)}
				/>
			</CardContent>
		</Card>
	)
}

export { ResultCard }
