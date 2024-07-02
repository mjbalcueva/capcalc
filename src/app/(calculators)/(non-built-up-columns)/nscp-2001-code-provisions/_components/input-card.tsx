'use client'

import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { type z } from 'zod'

import { FormItem } from '@/components/form'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import {
	effectiveLengthFactorChoices,
	recommendedOrTheoreticalChoices,
	type nscp2001CodeProvisionsSchema
} from '@/lib/schema'

const InputCard = () => {
	const {
		control,
		register,
		reset,
		trigger,
		watch,
		formState: { errors, isSubmitting }
	} = useFormContext<z.infer<typeof nscp2001CodeProvisionsSchema>>()

	useEffect(() => {
		void trigger()
	}, [trigger])

	useEffect(() => {
		const subscription = watch(() => {
			void trigger()
		})
		return () => subscription.unsubscribe()
	}, [watch, trigger])

	return (
		<Card>
			<CardHeader>
				<CardTitle>Input Variables</CardTitle>
				<CardDescription>Input Description</CardDescription>
			</CardHeader>

			<CardContent className='px-6" flex flex-col space-y-4'>
				<FormItem.Input
					label="Yield Strength"
					placeholder="MPa"
					errorMessage={errors.Fy?.message}
					{...register('Fy', {
						valueAsNumber: true
					})}
				/>

				<FormItem.Input
					label="Area"
					placeholder="mm²"
					errorMessage={errors.A?.message}
					{...register('A', {
						valueAsNumber: true
					})}
				/>

				<FormItem.Input
					label="Length of Column"
					placeholder="mm"
					errorMessage={errors.L?.message}
					{...register('L', {
						valueAsNumber: true
					})}
				>
					<FormItem.Tooltip delayDuration={450}>
						<FormItem.Controller
							name="supportsMidspan"
							control={control}
							defaultValue={false}
							render={({ field }) => (
								<div className="absolute -top-[6px] right-0">
									<FormItem.TooltipTrigger>
										<FormItem.Switch
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormItem.TooltipTrigger>
									<FormItem.TooltipContent description="Enable Midspan Support" />
								</div>
							)}
						/>
					</FormItem.Tooltip>
				</FormItem.Input>

				<FormItem
					label="Recomended or Theoretical"
					errorMessage={errors.recommendedOrTheoretical?.message}
				>
					<FormItem.Controller
						name="recommendedOrTheoretical"
						control={control}
						render={({ field }) => (
							<FormItem.Select
								onValueChange={field.onChange}
								defaultValue={field.value}
								placeHolder="Select an option"
								choices={recommendedOrTheoreticalChoices}
							/>
						)}
					/>
				</FormItem>

				<FormItem
					label="Effective Length Factor"
					errorMessage={errors.effectiveLengthFactor?.message}
				>
					<FormItem.Controller
						name="effectiveLengthFactor"
						control={control}
						render={({ field }) => (
							<FormItem.Select
								onValueChange={field.onChange}
								defaultValue={field.value}
								placeHolder="Select an option"
								choices={effectiveLengthFactorChoices}
							/>
						)}
					/>
				</FormItem>

				<FormItem.Input
					label="Moment of Inertia X"
					placeholder="mm⁴"
					errorMessage={errors.Ix?.message}
					{...register('Ix', {
						valueAsNumber: true
					})}
				/>

				<FormItem.Input
					label="Moment of Inertia Y"
					placeholder="mm⁴"
					errorMessage={errors.Iy?.message}
					{...register('Iy', {
						valueAsNumber: true
					})}
				/>
			</CardContent>

			<CardFooter className="flex flex-col">
				<Button
					className="w-full"
					disabled={isSubmitting}
					onClick={() => reset()}
				>
					Reset
				</Button>
			</CardFooter>
		</Card>
	)
}

export { InputCard }
