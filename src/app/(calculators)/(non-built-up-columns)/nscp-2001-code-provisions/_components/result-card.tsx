'use client'

import { Calculator } from '@/components/calculator'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { useNSCP2001CodeProvisionStore } from '@/store/nscp2001CodeProvisionStore'

const ResultCard = () => {
	const { values } = useNSCP2001CodeProvisionStore()

	const AllowableStress = values.AllowableStress || 0
	const AllowableCapacity = values.AllowableCapacity || 0

	return (
		<Card>
			<CardHeader>
				<CardTitle>Results</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-8">
				<Calculator.Output
					label="Allowable Stress (Mpa)"
					value={AllowableStress}
				/>
				<Calculator.Output
					label="Allowable Capacity (kN)"
					value={AllowableCapacity}
				/>
			</CardContent>
		</Card>
	)
}

export { ResultCard }
