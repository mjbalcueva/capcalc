'use client'

import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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
import { Separator } from '@/components/ui/separator'
import {
	effectiveLengthFactorChoices,
	nscp2001CodeProvisionsSchema,
	recommendedOrTheoreticalChoices
} from './schema'

const InputCard = () => {
	const {
		control,
		register,
		reset,
		trigger,
		watch,
		formState: { errors, isSubmitting }
	} = useForm<z.infer<typeof nscp2001CodeProvisionsSchema>>({
		resolver: zodResolver(nscp2001CodeProvisionsSchema),
		defaultValues: {
			supportsMidspan: false
		}
	})

	useEffect(() => {
		void trigger()
	}, [trigger])

	useEffect(() => {
		const subscription = watch(() => {
			void trigger()
			console.log('watch', watch())
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
					type="number"
					label="Yield Strength"
					placeholder="MPa"
					errorMessage={errors.Fy?.message}
					{...register('Fy')}
				/>

				<FormItem.Input
					type="number"
					label="Area"
					placeholder="mm²"
					errorMessage={errors.A?.message}
					{...register('A')}
				/>

				<FormItem.Input
					type="number"
					label="Length of Column"
					placeholder="mm"
					errorMessage={errors.L?.message}
					{...register('L')}
				>
					<FormItem.Tooltip delayDuration={450}>
						<FormItem.Controller
							control={control}
							name="supportsMidspan"
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
					type="number"
					label="Moment of Inertia X"
					placeholder="mm⁴"
					errorMessage={errors.Ix?.message}
					{...register('Ix')}
				/>

				<FormItem.Input
					type="number"
					label="Moment of Inertia Y"
					placeholder="mm⁴"
					errorMessage={errors.Iy?.message}
					{...register('Iy')}
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

			<Separator />
			<pre>{JSON.stringify(watch(), null, 2)}</pre>
		</Card>
	)
}

export { InputCard }
