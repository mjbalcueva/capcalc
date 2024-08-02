'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { useFormContext } from 'react-hook-form'

import { inputAtom } from '@/atoms/balanced-weld-group'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import { type inputType } from '@/lib/schemas/balanced-weld-group'

const InputCard = () => {
	const [, setInput] = useAtom(inputAtom)
	const form = useFormContext<inputType>()

	const { useMaximumSize, useUltimateStress } = form.watch()

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

			{/* <pre>{JSON.stringify(form.watch(), null, 2)}</pre> */}

			<CardContent className='px-6" flex flex-col space-y-4'>
				<Form {...form}>
					<FormField
						control={form.control}
						name="tp"
						render={({ field }) => (
							<FormItem>
								<FormLabel> {useMaximumSize ? 'Maximum Size of Fillet Weld' : 'Size of Fillet Weld'}</FormLabel>
								<FormControl>
									<Input placeholder={useMaximumSize ? 'mm - tw' : 'mm - tp'} type="number" {...field} />
								</FormControl>
								<FormMessage />

								<FormField
									control={form.control}
									name="useMaximumSize"
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
														{useMaximumSize
															? 'Use the size of the fillet weld'
															: 'Use the maximum size of the fillet weld'}
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
						name="Fv"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{useUltimateStress ? 'Ultimate Stress' : 'Shear Stress'}</FormLabel>
								<FormControl>
									<Input placeholder={useUltimateStress ? 'MPa - Fu' : 'MPa - Fv'} type="number" {...field} />
								</FormControl>
								<FormMessage />
								<FormField
									control={form.control}
									name="useUltimateStress"
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
														{useUltimateStress ? 'Use the shear stress' : 'Use the ultimate stress'}
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
						name="La"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Length of Weld A</FormLabel>
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
							<FormItem>
								<FormLabel>Length of Weld B</FormLabel>
								<FormControl>
									<Input placeholder="mm - Lb" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="Lc"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Length of Weld C</FormLabel>
								<FormControl>
									<Input placeholder="mm - Lc" type="number" {...field} />
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
							useMaximumSize: useMaximumSize,
							tp: '' as unknown as undefined,
							useUltimateStress: useUltimateStress,
							Fv: '' as unknown as undefined,
							La: '' as unknown as undefined,
							Lb: '' as unknown as undefined,
							Lc: '' as unknown as undefined
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
