'use client'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
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
				<CardFooter>
					<Button type="submit" className="w-full">
						Compute
					</Button>
				</CardFooter>
			</Card>
		</section>
	)
}

export { InputSection }
