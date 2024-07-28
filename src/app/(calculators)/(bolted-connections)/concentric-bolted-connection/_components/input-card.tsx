'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { useFormContext } from 'react-hook-form'

import { inputAtom } from '@/atoms/concentric-bolted-connection'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

import {
	typeOfConsiderationChoices,
	typeOfShearingChoices,
	type inputType
} from '@/lib/schemas/concentric-bolted-connection'

const InputCard = () => {
	const [, setInput] = useAtom(inputAtom)
	const form = useFormContext<inputType>()

	const typeOfConsideration = form.getValues('typeOfConsideration')

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
						name="typeOfConsideration"
						defaultValue="gross"
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
										{Object.entries(typeOfConsiderationChoices).map(([key, value]) => (
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

					{(typeOfConsideration === undefined || typeOfConsideration === 'gross' || typeOfConsideration === 'net') && (
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
					)}

					{(typeOfConsideration === undefined ||
						typeOfConsideration === 'gross' ||
						typeOfConsideration === 'net' ||
						typeOfConsideration === 'bearing') && (
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
					)}

					{(typeOfConsideration === undefined || typeOfConsideration === 'gross') && (
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

					{(typeOfConsideration === 'net' ||
						typeOfConsideration === 'shearing' ||
						typeOfConsideration === 'bearing') && (
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
					)}

					{typeOfConsideration === 'net' && (
						<FormField
							control={form.control}
							name="N"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Bolts That Can Be Passed Through</FormLabel>
									<FormControl>
										<Input placeholder="N" type="number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					)}

					{(typeOfConsideration === 'shearing' || typeOfConsideration === 'bearing') && (
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
					)}

					{(typeOfConsideration === 'net' || typeOfConsideration === 'bearing') && (
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

					{typeOfConsideration === 'shearing' && (
						<FormField
							control={form.control}
							name="Fv"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Allowable Shearing Stress</FormLabel>
									<FormControl>
										<Input placeholder="MPa - Fv" type="number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					)}

					{typeOfConsideration === 'shearing' && (
						<FormField
							control={form.control}
							name="typeOfShearing"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Type of Shearing</FormLabel>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select an option" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{Object.entries(typeOfShearingChoices).map(([key, value]) => (
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
					)}
				</Form>
			</CardContent>

			<CardFooter className="flex flex-col">
				<Button
					className="w-full"
					disabled={form.formState.isSubmitting}
					onClick={() => {
						form.reset({
							typeOfConsideration: form.watch('typeOfConsideration'),
							Wg: '' as unknown as undefined,
							t: '' as unknown as undefined,
							Fy: '' as unknown as undefined,
							db: '' as unknown as undefined,
							N: '' as unknown as undefined,
							n: '' as unknown as undefined,
							An: '' as unknown as undefined,
							Fu: '' as unknown as undefined,
							Fv: '' as unknown as undefined,
							typeOfShearing: form.watch('typeOfShearing')
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
