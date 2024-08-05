'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { useFormContext } from 'react-hook-form'

import { inputAtom } from '@/atoms/eccentric-loading'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { type inputType } from '@/lib/schemas/eccentric-loading'

const InputCard = () => {
	const [, setInput] = useAtom(inputAtom)
	const form = useFormContext<inputType>()

	console.log(form.watch())

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
					<div className="flex flex-col space-y-2">
						<h2 className="text-sm font-medium tracking-wider">Applied Loads</h2>
						<div className="flex space-x-2">
							<FormField
								control={form.control}
								name="Fx"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input placeholder="N - Fx" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="Fy"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input placeholder="N - Fy" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>

					<div className="flex flex-col space-y-2">
						<h2 className="text-sm font-medium tracking-wider">Length of Weld</h2>
						<div className="flex space-x-2">
							<FormField
								control={form.control}
								name="La"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input placeholder="mm - La" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="Lb"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input placeholder="mm - Lb" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>

					<FormField
						control={form.control}
						name="x"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Distance From Weld to Applied Load</FormLabel>
								<FormControl>
									<Input placeholder="mm - x" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="tp"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Thickness of Plate</FormLabel>
								<FormControl>
									<Input placeholder="mm - tp" type="number" {...field} />
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
							La: '' as unknown as undefined,
							Lb: '' as unknown as undefined,
							x: '' as unknown as undefined,
							tp: '' as unknown as undefined
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
