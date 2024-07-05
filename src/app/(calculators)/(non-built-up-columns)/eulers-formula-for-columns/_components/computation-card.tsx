import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ComputationCard = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
			</CardHeader>
			<CardContent className="grid gap-4 sm:grid-cols-2 sm:gap-8"></CardContent>
		</Card>
	)
}

export { ComputationCard }
