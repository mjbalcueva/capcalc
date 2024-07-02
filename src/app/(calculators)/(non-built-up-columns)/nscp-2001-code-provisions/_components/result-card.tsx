'use client'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

const ResultCard = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Result</CardTitle>
				<CardDescription>Result Description</CardDescription>
			</CardHeader>
			<CardContent>
				{/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
			</CardContent>
		</Card>
	)
}

export { ResultCard }
