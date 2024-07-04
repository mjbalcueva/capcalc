import { CalculatorProvider } from '@/providers/calculator-providert'
import { ComputationCard } from './_components/computation-card'
import { InputCard } from './_components/input-card'
import { ResultCard } from './_components/result-card'

export default function NSCP_2001_CodeProvisionsPage() {
	return (
		<CalculatorProvider
			initialState={{
				Rx: 0,
				Ry: 0,
				rMin: 0,
				Cc: 0,
				SRx: 0,
				SRy: 0,
				SRmax: 0,
				ColumnType: '',
				Fs: 0,
				AllowableStress: 0,
				AllowableCapacity: 0
			}}
		>
			<main className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr]">
				<section className="flex flex-col">
					<InputCard />
				</section>
				<section className="flex flex-col gap-4">
					<ResultCard />
					<ComputationCard />
				</section>
			</main>
		</CalculatorProvider>
	)
}
