'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { useFormContext } from 'react-hook-form'

import { inputAtom } from '@/atoms/eccentric-bolted-connection'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { type inputType } from '@/lib/schemas/eccentric-bolted-connection'

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
						name="Fx"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Applied Load (x-direction)</FormLabel>
								<FormControl>
									<Input placeholder="kN - Fx" type="number" {...field} />
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
								<FormLabel>Applied Load (y-direction)</FormLabel>
								<FormControl>
									<Input placeholder="kN - Fy" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex space-x-2">
						<FormField
							control={form.control}
							name="x1"
							render={({ field }) => (
								<FormItem>
									<FormLabel>x₁</FormLabel>
									<FormControl>
										<Input placeholder="mm - x₁" type="number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="x2"
							render={({ field }) => (
								<FormItem>
									<FormLabel>x₂</FormLabel>
									<FormControl>
										<Input placeholder="mm - x₂" type="number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="flex space-x-2">
						<FormField
							control={form.control}
							name="y1"
							render={({ field }) => (
								<FormItem>
									<FormLabel>y₁</FormLabel>
									<FormControl>
										<Input placeholder="mm - y₁" type="number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="y2"
							render={({ field }) => (
								<FormItem>
									<FormLabel>y₂</FormLabel>
									<FormControl>
										<Input placeholder="mm - y₂" type="number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="db"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Diameter of Bar</FormLabel>
								<FormControl>
									<Input placeholder="mm - db" type="number" {...field} />
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
							Fx: '' as unknown as undefined,
							Fy: '' as unknown as undefined,
							x1: '' as unknown as undefined,
							x2: '' as unknown as undefined,
							y1: '' as unknown as undefined,
							y2: '' as unknown as undefined,
							db: '' as unknown as undefined
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
