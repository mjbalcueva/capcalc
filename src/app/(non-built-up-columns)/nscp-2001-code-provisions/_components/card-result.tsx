'use client'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

const CardResult = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Result</CardTitle>
				<CardDescription>Result Description</CardDescription>
			</CardHeader>
			<CardContent>
				<div>
					<h1>Hello Love</h1>
				</div>
			</CardContent>
		</Card>
	)
}

export { CardResult }
