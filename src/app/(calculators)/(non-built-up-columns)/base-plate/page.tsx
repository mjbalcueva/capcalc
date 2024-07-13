import { ComputationCard } from './_components/computation-card'
import { InputCard } from './_components/input-card'
import { ResultCard } from './_components/result-card'

export default function BasePlatePage() {
	return (
		<main className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr]">
			<InputCard />
			<section className="flex flex-col gap-4">
				<ResultCard />
				<ComputationCard />
			</section>
		</main>
	)
}
