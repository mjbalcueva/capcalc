import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

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

export { OutputSection }
