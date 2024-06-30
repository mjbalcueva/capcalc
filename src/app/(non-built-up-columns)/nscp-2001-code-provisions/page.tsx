import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { CardInputBody } from './_components/card-input-body'

export default function NSCP_2001_CodeProvisionsPage() {
	return (
		<main className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr]">
			<section className="flex flex-col">
				<Card>
					<CardHeader>
						<CardTitle>Input Variables</CardTitle>
						<CardDescription>Input Description</CardDescription>
					</CardHeader>
					<CardInputBody />
				</Card>
			</section>
			<section className="flex flex-col gap-4">
				<Card>
					<CardHeader>
						<CardTitle>Result</CardTitle>
						<CardDescription>Result Description</CardDescription>
					</CardHeader>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Computation Variables</CardTitle>
						<CardDescription>Computation Description</CardDescription>
					</CardHeader>
				</Card>
			</section>
		</main>
	)
}
