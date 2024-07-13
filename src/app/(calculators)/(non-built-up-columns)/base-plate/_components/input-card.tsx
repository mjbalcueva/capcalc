import { useAtom } from 'jotai'
import { useFormContext } from 'react-hook-form'

import { inputAtom } from '@/atoms/base-plate'
import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { inputType } from '@/lib/schemas/base-plate'

const InputCard = () => {
	const [, setInput] = useAtom(inputAtom)
	const form = useFormContext<inputType>()
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
