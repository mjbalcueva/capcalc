'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { useFormContext } from 'react-hook-form'

import { inputAtom } from '@/atoms/tension-forces-on-welded-sections'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

import { typeOfTensileCapacityChoices, type inputType } from '@/lib/schemas/tension-forces-on-welded-sections'

const InputCard = () => {
	const [, setInput] = useAtom(inputAtom)
	const form = useFormContext<inputType>()

	const typeofTensileCapacity = form.watch('typeofTensileCapacity')

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
						name="typeofTensileCapacity"
						defaultValue="getCapacity"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Type of Consideration</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select an option" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{Object.entries(typeOfTensileCapacityChoices).map(([key, value]) => (
											<SelectItem key={key} value={key}>
												{value}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="w-full py-2">
						<Separator />
					</div>

					{(typeofTensileCapacity === undefined || typeofTensileCapacity === 'getCapacity') && (
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
					)}

					{(typeofTensileCapacity === undefined ||
						typeofTensileCapacity === 'getCapacity' ||
						typeofTensileCapacity === 'getP') && (
						<FormField
							control={form.control}
							name="Fu"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Ultimate Strength</FormLabel>
									<FormControl>
										<Input placeholder="MPa - Fu" type="number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					)}

					{(typeofTensileCapacity === undefined || typeofTensileCapacity === 'getCapacity') && (
						<>
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
								name="u"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Reduction Factor</FormLabel>
										<FormControl>
											<Input placeholder="MPa - u" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</>
					)}

					{typeofTensileCapacity === 'getP' && (
						<>
							<FormField
								control={form.control}
								name="tp"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Thickness of Gusset Plate</FormLabel>
										<FormControl>
											<Input placeholder="mm - tp" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="Lv"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Length of Weld Parallel to the Load</FormLabel>
										<FormControl>
											<Input placeholder="mm - Lv" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="Lt"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Length of Weld Transverse to the Load</FormLabel>
										<FormControl>
											<Input placeholder="mm - Lt" type="number" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</>
					)}
				</Form>
			</CardContent>

			<CardFooter className="flex flex-col">
				<Button
					className="w-full"
					disabled={form.formState.isSubmitting}
					onClick={() => {
						form.reset({
							typeofTensileCapacity: typeofTensileCapacity,
							Fy: '' as unknown as undefined,
							Fu: '' as unknown as undefined,
							Wg: '' as unknown as undefined,
							t: '' as unknown as undefined,
							u: '' as unknown as undefined,
							tp: '' as unknown as undefined,
							Lv: '' as unknown as undefined,
							Lt: '' as unknown as undefined
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
