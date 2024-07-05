'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEulersFormulaForColumnStore } from '@/store/eulersFormulaForColumnStore'

const ResultCard = () => {
	const { values } = useEulersFormulaForColumnStore()
	return (
		<Card>
			<CardHeader>
				<CardTitle>Results</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-8">
				<pre>{JSON.stringify(values, null, 2)}</pre>
			</CardContent>
		</Card>
	)
}

export { ResultCard }
