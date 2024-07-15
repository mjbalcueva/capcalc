'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { useFormContext } from 'react-hook-form'

import { inputAtom } from '@/atoms/base-plate'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { type inputType } from '@/lib/schemas/base-plate'

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
					<div className="flex flex-col space-y-2">
						<h2 className="text-sm font-medium tracking-wider">Dimension of Concrete Column</h2>
						<div className="flex space-x-2">
							<FormField
								control={form.control}
								name="W"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input placeholder="mm - W" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="H"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input placeholder="mm - H" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>

					<div className="flex flex-col space-y-2">
						<h2 className="text-sm font-medium tracking-wider">Dimension of Steel Plate</h2>
						<div className="flex space-x-2">
							<FormField
								control={form.control}
								name="B"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input placeholder="mm - B" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="N"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input placeholder="mm - N" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="t"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input placeholder="mm - t" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>

					<div className="flex flex-col space-y-2">
						<h2 className="text-sm font-medium tracking-wider">Dimension of Steel Column</h2>
						<div className="flex space-x-2">
							<FormField
								control={form.control}
								name="bf"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input placeholder="mm - bf" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="d"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormControl>
											<Input placeholder="mm - d" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>

					<FormField
						control={form.control}
						name="fC"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Specified Stress of Concrete</FormLabel>
								<FormControl>
									<Input placeholder="MPa - f'c" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="fY"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Yield Steel Strength</FormLabel>
								<FormControl>
									<Input placeholder="MPa - fy" type="number" {...field} />
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
							W: '' as unknown as undefined,
							H: '' as unknown as undefined,
							B: '' as unknown as undefined,
							N: '' as unknown as undefined,
							t: '' as unknown as undefined,
							bf: '' as unknown as undefined,
							d: '' as unknown as undefined,
							fC: '' as unknown as undefined,
							fY: '' as unknown as undefined
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
