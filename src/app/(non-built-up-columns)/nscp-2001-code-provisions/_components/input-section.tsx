'use client'

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { CardBody } from './card-body'

const InputSection = () => {
	return (
		<section className="flex flex-col">
			<Card>
				<CardHeader>
					<CardTitle>Input Variables</CardTitle>
					<CardDescription>Input Description</CardDescription>
				</CardHeader>
				<CardBody />
			</Card>
		</section>
	)
}

export { InputSection }
