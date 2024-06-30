import { CardComputationVariables } from './_components/card-computation-variables'
import { CardInput } from './_components/card-input'
import { CardInputBody } from './_components/card-input-body-orig'
import { CardResult } from './_components/card-result'

export default function NSCP_2001_CodeProvisionsPage() {
	return (
		<main className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr]">
			<section className="flex flex-col">
				<CardInput />
				{/* <CardInputBody /> */}
			</section>
			<section className="flex flex-col gap-4">
				<CardResult />
				<CardComputationVariables />
			</section>
		</main>
	)
}
