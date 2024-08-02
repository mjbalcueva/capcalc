'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { useFormContext } from 'react-hook-form'

import { inputAtom } from '@/atoms/shear-and-bending'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { type inputType } from '@/lib/schemas/shear-and-bending'

const InputCard = () => {
	const [, setInput] = useAtom(inputAtom)
	const form = useFormContext<inputType>()

	useEffect(() => {
		return form.watch((values) => {
			setInput(values as inputType)
			void form.trigger()
		}).unsubscribe
	}, [form, setInput])

	return (
		<Card className="h-fit">
			<CardHeader>
				<CardTitle>Input Variables</CardTitle>
			</CardHeader>

			<CardContent className='px-6" flex flex-col space-y-4'>
				<Form {...form}>
					<FormField
						control={form.control}
						name="P"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Applied Load</FormLabel>
								<FormControl>
									<Input placeholder="N - P" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="e"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Eccentricity</FormLabel>
								<FormControl>
									<Input placeholder="mm - e" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="L"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Length of Weld</FormLabel>
								<FormControl>
									<Input placeholder="mm - L" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</Form>
			</CardContent>

			<CardFooter className="flex flex-col">
				<Button
					className="w-full"
					disabled={form.formState.isSubmitting}
					onClick={() => {
						form.reset({
							P: '' as unknown as undefined,
							e: '' as unknown as undefined,
							L: '' as unknown as undefined
						})
					}}
				>
					Reset
				</Button>
			</CardFooter>
		</Card>
	)
}

export { InputCard }
