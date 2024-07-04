'use client'

import { FormItem } from '@/components/form'
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
				<CardTitle>Result</CardTitle>
				<CardDescription>Result Description</CardDescription>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-8">
				<FormItem.Output
					type="number"
					label="Allowable Stress"
					placeholder="Mpa"
					value={AllowableStress}
				/>
				<FormItem.Output
					type="number"
					label="Allowable Capacity"
					placeholder="kN"
					value={AllowableCapacity}
				/>
			</CardContent>
		</Card>
	)
}

export { ResultCard }
