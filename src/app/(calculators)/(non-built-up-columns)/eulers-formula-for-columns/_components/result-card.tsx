'use client'

import { useAtom } from 'jotai'

import { Calculator } from '@/components/calculator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { calculatedAtoms } from './atom'

const ResultCard = () => {
	const [values] = useAtom(calculatedAtoms)
	return (
		<Card>
			<CardHeader>
				<CardTitle>Results</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-8">
				<Calculator.Output
					label="Allowable Stress (Mpa)"
					value={values.AllowableStress || 0}
				/>
				<Calculator.Output
					label="Allowable Capacity (kN)"
					value={values.AllowableCapacity || 0}
				/>
			</CardContent>
		</Card>
	)
}

export { ResultCard }
