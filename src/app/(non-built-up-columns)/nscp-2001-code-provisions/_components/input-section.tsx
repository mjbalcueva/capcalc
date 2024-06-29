'use client'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { InputForm } from './input-form'

const InputSection = () => {
	return (
		<section className="flex flex-col">
			<Card>
				<CardHeader>
					<CardTitle>Input Variables</CardTitle>
					<CardDescription>Input Description</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<InputForm />
				</CardContent>
			</Card>
		</section>
	)
}

export { InputSection }
