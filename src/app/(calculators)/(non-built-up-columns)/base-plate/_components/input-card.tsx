import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const InputCard = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Input Variables</CardTitle>
			</CardHeader>
			<CardFooter className="flex flex-col">
				<Button className="w-full">Reset</Button>
			</CardFooter>
		</Card>
	)
}

export { InputCard }
