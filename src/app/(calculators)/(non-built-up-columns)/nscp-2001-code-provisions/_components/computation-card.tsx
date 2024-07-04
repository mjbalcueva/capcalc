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

const ComputationCard = () => {
	const { state } = useCalculatorContext<CalculatorState>()

	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
				<CardDescription>Computation Description</CardDescription>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-8">
				<div className='px-6" flex flex-col space-y-4'>
					<FormItem.Output
						value={state.Rx.toFixed(3)}
						label="Radius of Gyration Rx"
						placeholder="Rx"
					/>
					<FormItem.Output
						value={state.Ry.toFixed(3)}
						label="Radius of Gyration Ry"
						placeholder="mm"
					/>
					<FormItem.Output
						value={state.rMin.toFixed(3)}
						label="Minimum, Rmin"
						placeholder="mm"
					/>
					<FormItem.Output
						value={state.Cc.toFixed(3)}
						type="number"
						label="Critical SR"
						placeholder="Cc"
					/>
				</div>
				<div className='px-6" flex flex-col space-y-4'>
					<FormItem.Output
						value={state.SRx.toFixed(3)}
						label="Slenderness Ratio SRx"
						placeholder="SRx"
					/>
					<FormItem.Output
						value={state.SRy.toFixed(3)}
						label="Slenderess Ratio SRy"
						placeholder="SRy"
					/>
					<FormItem.Output
						value={state.SRmax.toFixed(3)}
						label="Maximum, SRmax"
						placeholder="SRmax"
					/>
					<FormItem.Output
						type="text"
						value={state.ColumnType.toString()}
						label="Column Type"
						placeholder="Cc"
					/>
					<FormItem.Output
						value={Number(state.Fs).toFixed(3)}
						label="Factor of Safety"
						placeholder="Fs"
					/>
				</div>
			</CardContent>
		</Card>
	)
}

export { ComputationCard }
