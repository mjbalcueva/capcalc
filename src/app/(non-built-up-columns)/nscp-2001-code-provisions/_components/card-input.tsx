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

const CardInput = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Input Variables</CardTitle>
				<CardDescription>Input Description</CardDescription>
			</CardHeader>
			<CardContent>
				<div>
					<h1>Hello Love</h1>
				</div>
			</CardContent>
			<CardFooter className="flex flex-col">
				<Button className="w-full">Clear</Button>
			</CardFooter>
		</Card>
	)
}

export { CardInput }
