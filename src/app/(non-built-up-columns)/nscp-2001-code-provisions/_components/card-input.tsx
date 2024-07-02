'use client'

import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form } from '@/components/form'
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
				<Form.Item label="Yield Strength" errorMessage={errors.Fy?.message}>
					<Form.Input type="number" placeholder="MPa" {...register('Fy')} />
				</Form.Item>

				<Form.Item label="Area" errorMessage={errors.A?.message}>
					<Form.Input type="number" placeholder="mm²" {...register('A')} />
				</Form.Item>

				<Form.Item label="Length of Column" errorMessage={errors.L?.message}>
					<Form.Tooltip delayDuration={450}>
						<Form.Controller
							control={control}
							name="supportsMidspan"
							render={({ field }) => (
								<div className="absolute -top-[6px] right-0">
									<Form.TooltipTrigger>
										<Form.Switch
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</Form.TooltipTrigger>
									<Form.TooltipContent description="Enable Midspan Support" />
								</div>
							)}
						/>
					</Form.Tooltip>
					<Form.Input type="number" placeholder="mm" {...register('L')} />
				</Form.Item>

				<Form.Item
					label="Recomended or Theoretical"
					errorMessage={errors.recommendedOrTheoretical?.message}
				>
					<Form.Controller
						control={control}
						name="recommendedOrTheoretical"
						render={({ field }) => (
							<Form.Select
								onValueChange={field.onChange}
								defaultValue={field.value}
								placeHolder="Select an option"
								choices={recommendedOrTheoreticalChoices}
							/>
						)}
					/>
				</Form.Item>

				<Form.Item
					label="Effective Length Factor"
					errorMessage={errors.effectiveLengthFactor?.message}
				>
					<Form.Controller
						control={control}
						name="effectiveLengthFactor"
						render={({ field }) => (
							<Form.Select
								onValueChange={field.onChange}
								defaultValue={field.value}
								placeHolder="Select an option"
								choices={effectiveLengthFactorChoices}
							/>
						)}
					/>
				</Form.Item>

				<Form.Item
					label="Moment of Inertia X"
					errorMessage={errors.Ix?.message}
				>
					<Form.Input type="number" placeholder="mm⁴" {...register('Ix')} />
				</Form.Item>

				<Form.Item
					label="Moment of Inertia Y"
					errorMessage={errors.Iy?.message}
				>
					<Form.Input type="number" placeholder="mm⁴" {...register('Iy')} />
				</Form.Item>
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
