import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { ReactHookForm } from './_components/input-form'

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
				<CardContent className="flex flex-col gap-4">
					<ReactHookForm />
				</CardContent>
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
