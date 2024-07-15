'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { useFormContext } from 'react-hook-form'

import { inputAtom } from '@/atoms/concentric-bolted-connection'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { type inputType } from '@/lib/schemas/concentric-bolted-connection'

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

			<pre>{JSON.stringify(form.watch(), null, 2)}</pre>

			<CardContent className='px-6" flex flex-col space-y-4'>
				<Form {...form}>
					<FormField
						control={form.control}
						name="Wg"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Gross Width</FormLabel>
								<FormControl>
									<Input placeholder="mm - Wg" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="t"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Thickness</FormLabel>
								<FormControl>
									<Input placeholder="mm - t" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="Fy"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Yield Strength</FormLabel>
								<FormControl>
									<Input placeholder="MPa - Fy" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="db"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Bolt Diameter</FormLabel>
								<FormControl>
									<Input placeholder="mm - db" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="n"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Number of Bolts</FormLabel>
								<FormControl>
									<Input placeholder="n" type="number" {...field} />
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
							Wg: '' as unknown as undefined,
							t: '' as unknown as undefined,
							Fy: '' as unknown as undefined,
							db: '' as unknown as undefined,
							n: '' as unknown as undefined,
							An: '' as unknown as undefined,
							Fu: '' as unknown as undefined,
							Fv: '' as unknown as undefined
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
