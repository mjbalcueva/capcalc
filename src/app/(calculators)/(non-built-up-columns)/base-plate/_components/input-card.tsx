import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

const InputCard = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Input Variables</CardTitle>
				<CardDescription>Input Description</CardDescription>
			</CardHeader>
			<CardFooter className="flex flex-col">
				<Button className="w-full">Reset</Button>
			</CardFooter>
		</Card>
	)
}

export { InputCard }
