'use client'

import { useFormContext } from 'react-hook-form'
import { z } from 'zod'

import { FormItem } from '@/components/form'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { nscp2001CodeProvisionsSchema } from '@/lib/schema'

const ComputationCard = () => {
	const { watch } =
		useFormContext<z.infer<typeof nscp2001CodeProvisionsSchema>>()

	return (
		<Card>
			<CardHeader>
				<CardTitle>Computation Variables</CardTitle>
				<CardDescription>Computation Description</CardDescription>
			</CardHeader>
			<CardContent className="grid grid-cols-2 gap-8">
				<div className='px-6" flex flex-col space-y-4'>
					<FormItem.Output label="Radius of Gyration Rx" placeholder="Rx" />
					<FormItem.Output label="Radius of Gyration Rx" placeholder="MPa" />
					<FormItem.Output label="Minimum, mm" placeholder="rmin" />
					<FormItem.Input type="number" label="Critical SR" placeholder="Cc" />
				</div>
				<div className='px-6" flex flex-col space-y-4'>
					<FormItem.Output label="Radius of Gyration Rx" placeholder="Rx" />
					<FormItem.Output label="Radius of Gyration Rx" placeholder="MPa" />
					<FormItem.Output label="Minimum, mm" placeholder="rmin" />
					<FormItem.Input type="number" label="Critical SR" placeholder="Cc" />
				</div>
			</CardContent>
		</Card>
	)
}

export { ComputationCard }
