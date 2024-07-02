'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { type z } from 'zod'

import { nscp2001CodeProvisionsSchema } from '@/lib/schema'
import { ComputationCard } from './_components/computation-card'
import { InputCard } from './_components/input-card'
import { ResultCard } from './_components/result-card'

export default function NSCP_2001_CodeProvisionsPage() {
	const form = useForm<z.infer<typeof nscp2001CodeProvisionsSchema>>({
		resolver: zodResolver(nscp2001CodeProvisionsSchema)
	})

	return (
		<FormProvider {...form}>
			<main className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_2fr]">
				<section className="flex flex-col">
					<InputCard />
				</section>
				<section className="flex flex-col gap-4">
					<ResultCard />
					<ComputationCard />
				</section>
			</main>
		</FormProvider>
	)
}
