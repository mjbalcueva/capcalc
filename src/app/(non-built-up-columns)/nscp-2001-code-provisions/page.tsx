import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

export default function NSCP_2001_CodeProvisionsPage() {
	return (
		<main className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr]">
			<InputSection />
			<OutputSection />
		</main>
	)
}

const InputSection = () => {
	return (
		<section className="flex flex-col">
			<Card>
				<CardHeader>
					<CardTitle>Input Variables</CardTitle>
					<CardDescription>Input Description</CardDescription>
				</CardHeader>
				<CardFooter className="flex flex-row-reverse">
					<Button variant="destructive">Clear</Button>
				</CardFooter>
			</Card>
		</section>
	)
}

const OutputSection = () => {
	return (
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
	)
}
