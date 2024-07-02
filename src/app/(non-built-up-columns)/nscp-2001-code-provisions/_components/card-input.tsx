'use client'

import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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

const CardInput = () => {
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
		trigger()
	}, [trigger])

	useEffect(() => {
		const subscription = watch(() => {
			trigger()
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
				<FormItem label="Yield Strength" errorMessage={errors.Fy?.message}>
					<FormItem.Input type="number" placeholder="MPa" {...register('Fy')} />
				</FormItem>
				<FormItem label="Area" errorMessage={errors.A?.message}>
					<FormItem.Input type="number" placeholder="mm²" {...register('A')} />
				</FormItem>
				<FormItem label="Length of Column" errorMessage={errors.L?.message}>
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
					<FormItem.Input type="number" placeholder="mm" {...register('L')} />
				</FormItem>
				<FormItem
					label="Recomended or Theoretical"
					errorMessage={errors.recommendedOrTheoretical?.message}
				>
					<FormItem.Controller
						control={control}
						name="recommendedOrTheoretical"
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
						control={control}
						name="effectiveLengthFactor"
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
				<FormItem label="Moment of Inertia X" errorMessage={errors.Ix?.message}>
					<FormItem.Input type="number" placeholder="mm⁴" {...register('Ix')} />
				</FormItem>
				<FormItem label="Moment of Inertia Y" errorMessage={errors.Iy?.message}>
					<FormItem.Input type="number" placeholder="mm⁴" {...register('Iy')} />
				</FormItem>
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

export { CardInput }
