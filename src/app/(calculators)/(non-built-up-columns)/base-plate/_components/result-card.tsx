'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ResultCard = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Results</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-8"></CardContent>
		</Card>
	)
}

export { ResultCard }
