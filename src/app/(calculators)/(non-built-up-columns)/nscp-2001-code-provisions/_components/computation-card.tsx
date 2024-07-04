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

const ComputationCard = () => {
	const { values } = useNSCP2001CodeProvisionStore()
	const Rx = values.Rx || 0
	const Ry = values.Ry || 0
	const rMin = values.rMin || 0
	const Cc = values.Cc || 0
	const SRx = values.SRx || 0
	const SRy = values.SRy || 0
	const SRmax = values.SRmax || 0
	const ColumnType = values.ColumnType || 'Intermediate'
	const Fs = values.Fs || 0

	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
				<CardDescription>Computation Description</CardDescription>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-8">
				<div className='px-6" flex flex-col space-y-4'>
					<FormItem.Output
						value={Rx || ''}
						label="Radius of Gyration Rx"
						placeholder="Rx"
					/>
					<FormItem.Output
						value={Ry || ''}
						label="Radius of Gyration Ry"
						placeholder="mm"
					/>
					<FormItem.Output
						value={rMin || ''}
						label="Minimum, Rmin"
						placeholder="mm"
					/>
					<FormItem.Output
						value={Cc || ''}
						type="number"
						label="Critical SR"
						placeholder="Cc"
					/>
				</div>
				<div className='px-6" flex flex-col space-y-4'>
					<FormItem.Output
						value={SRx || ''}
						label="Slenderness Ratio SRx"
						placeholder="SRx"
					/>
					<FormItem.Output
						value={SRy || ''}
						label="Slenderess Ratio SRy"
						placeholder="SRy"
					/>
					<FormItem.Output
						value={SRmax || ''}
						label="Maximum, SRmax"
						placeholder="SRmax"
					/>
					<FormItem.Output
						type="text"
						value={ColumnType || ''}
						label="Column Type"
						placeholder="Cc"
					/>
					<FormItem.Output
						type="text"
						value={Fs == -1 ? 'N/A' : Fs || ''}
						label="Factor of Safety"
						placeholder="Fs"
					/>
				</div>
			</CardContent>
		</Card>
	)
}

export { ComputationCard }
