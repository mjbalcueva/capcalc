'use client'

import { useFormContext } from 'react-hook-form'
import { type z } from 'zod'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { type nscp2001CodeProvisionsSchema } from '@/lib/schema'

const ResultCard = () => {
	const { watch } =
		useFormContext<z.infer<typeof nscp2001CodeProvisionsSchema>>()

	return (
		<Card>
			<CardHeader>
				<CardTitle>Result</CardTitle>
				<CardDescription>Result Description</CardDescription>
			</CardHeader>
			<CardContent>
				<pre>{JSON.stringify(watch(), null, 2)}</pre>
			</CardContent>
		</Card>
	)
}

export { ResultCard }
