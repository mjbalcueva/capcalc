'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from '@/components/ui/tooltip'
import {
	effectiveLengthFactorChoices,
	recommendedOrTheoreticalChoices,
	type eulersFormulaType
} from '@/lib/schemas/eulers-formula-for-columns'
import { inputAtom } from './atom'

const InputCard = () => {
	const [, setInput] = useAtom(inputAtom)
	const form = useFormContext<eulersFormulaType>()

	useEffect(() => {
		return form.watch((values) => {
			setInput(values as eulersFormulaType)
			void form.trigger()
		}).unsubscribe
	}, [form, setInput])

	return (
		<Card>
			<CardHeader>
				<CardTitle>Input Variables</CardTitle>
			</CardHeader>

			<CardContent className='px-6" flex flex-col space-y-4'>
				<Form {...form}>
					<FormField
						control={form.control}
						name="Fy"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Yield Strength</FormLabel>
								<FormControl>
									<Input placeholder="MPa" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="A"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Area</FormLabel>
								<FormControl>
									<Input placeholder="mm²" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="L"
						render={({ field }) => (
							<FormItem className="relative">
								<FormLabel>Length of Column</FormLabel>
								<FormControl>
									<Input placeholder="mm" type="number" {...field} />
								</FormControl>
								<FormMessage />

								<FormField
									control={form.control}
									name="supportsMidspan"
									defaultValue={false}
									render={({ field }) => (
										<FormControl>
											<div className="absolute -top-1.5 right-0">
												<Tooltip delayDuration={400}>
													<TooltipTrigger asChild>
														<div>
															<Switch
																checked={field.value}
																onCheckedChange={field.onChange}
																className="ring-[#afafaf] ring-offset-[3px] ring-offset-background hover:ring-1"
															/>
														</div>
													</TooltipTrigger>
													<TooltipContent className="bg-white/10 text-xs font-medium text-gray-500 backdrop-blur-[0.08rem] dark:bg-black/10 dark:text-gray-400">
														Enable Midspan Support
													</TooltipContent>
												</Tooltip>
											</div>
										</FormControl>
									)}
								/>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="recommendedOrTheoretical"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Recomended or Theoretical</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select an option" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{Object.entries(recommendedOrTheoreticalChoices).map(
											([key, value]) => (
												<SelectItem key={key} value={key}>
													{value}
												</SelectItem>
											)
										)}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="effectiveLengthFactor"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Effective Length Factor</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select an option" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{Object.entries(effectiveLengthFactorChoices).map(
											([key, value]) => (
												<SelectItem key={key} value={key}>
													{value}
												</SelectItem>
											)
										)}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="Ix"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Moment of Inertia X</FormLabel>
								<FormControl>
									<Input placeholder="mm⁴" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="Iy"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Moment of Inertia Y</FormLabel>
								<FormControl>
									<Input placeholder="mm⁴" type="number" {...field} />
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
							Fy: '' as unknown as undefined,
							A: '' as unknown as undefined,
							L: '' as unknown as undefined,
							supportsMidspan: false,
							recommendedOrTheoretical: form.watch('recommendedOrTheoretical'),
							effectiveLengthFactor: form.watch('effectiveLengthFactor'),
							Ix: '' as unknown as undefined,
							Iy: '' as unknown as undefined
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
