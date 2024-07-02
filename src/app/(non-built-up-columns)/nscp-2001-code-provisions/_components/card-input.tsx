'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { type z } from 'zod'

import { Form } from '@/components/form'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'
import {
	effectiveLengthFactorChoices,
	nscp2001CodeProvisionsSchema,
	recommendedOrTheoreticalChoices
} from './schema'

const CardInput = () => {
	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
		watch
	} = useForm<z.infer<typeof nscp2001CodeProvisionsSchema>>({
		resolver: zodResolver(nscp2001CodeProvisionsSchema),
		defaultValues: {
			Fy: undefined,
			A: undefined,
			L: undefined,
			supportsMidspan: false,
			recommendedOrTheoretical: 'recommended',
			effectiveLengthFactor: 'fixed-fixed',
			Ix: undefined,
			Iy: undefined
		}
	})

	const onSubmit = (values: z.infer<typeof nscp2001CodeProvisionsSchema>) => {
		console.log(values)
		reset()
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Input Variables</CardTitle>
				<CardDescription>Input Description</CardDescription>
			</CardHeader>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Item label="Yield Strength" errorMessage={errors.Fy?.message}>
					<Input type="number" placeholder="MPa" {...register('Fy')} />
				</Form.Item>

				<Form.Item label="Area" errorMessage={errors.A?.message}>
					<Input type="number" placeholder="mm²" {...register('A')} />
				</Form.Item>

				<Form.Item label="Length of Column" errorMessage={errors.L?.message}>
					<TooltipProvider>
						<div className="absolute -top-[6px] right-0">
							<Controller
								control={control}
								name="supportsMidspan"
								render={({ field }) => (
									<Tooltip delayDuration={200}>
										<TooltipTrigger asChild>
											<div>
												<Switch
													checked={field.value}
													onCheckedChange={field.onChange}
													className="ring-[#afafaf] ring-offset-[3px] ring-offset-background hover:ring-1"
												/>
											</div>
										</TooltipTrigger>
										<TooltipContent className="bg-black bg-opacity-25 text-gray-500 backdrop-blur-[0.5rem]">
											<p>Midspan Support</p>
										</TooltipContent>
									</Tooltip>
								)}
							/>
						</div>
					</TooltipProvider>
					<Input type="number" placeholder="mm" {...register('L')} />
				</Form.Item>

				<Form.Item
					label="Recomended or Theoretical"
					errorMessage={errors.recommendedOrTheoretical?.message}
				>
					<Controller
						control={control}
						name="recommendedOrTheoretical"
						render={({ field }) => (
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<SelectTrigger>
									<SelectValue placeholder="Recommended or Theoretical" />
								</SelectTrigger>
								<SelectContent>
									{Object.entries(recommendedOrTheoreticalChoices).map(
										([key, value]) => (
											<SelectItem
												key={key}
												value={key}
												className="text-muted-foreground"
											>
												{value}
											</SelectItem>
										)
									)}
								</SelectContent>
							</Select>
						)}
					/>
				</Form.Item>

				<Form.Item
					label="Effective Length Factor"
					errorMessage={errors.effectiveLengthFactor?.message}
				>
					<Controller
						control={control}
						name="effectiveLengthFactor"
						render={({ field }) => (
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<SelectTrigger>
									<SelectValue placeholder="Effective Length Factor" />
								</SelectTrigger>
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
						)}
					/>
				</Form.Item>

				<Form.Item
					label="Moment of Inertia X"
					errorMessage={errors.Ix?.message}
				>
					<Input type="number" placeholder="mm⁴" {...register('Ix')} />
				</Form.Item>
				<Form.Item
					label="Moment of Inertia Y"
					errorMessage={errors.Iy?.message}
				>
					<Input type="number" placeholder="mm⁴" {...register('Iy')} />
				</Form.Item>

				<Separator />
				<p>{JSON.stringify(watch(), null, 2)}</p>
			</Form>
			<CardFooter className="flex flex-col">
				<Button className="w-full" disabled={isSubmitting}>
					Clear
				</Button>
			</CardFooter>
		</Card>
	)
}

export { CardInput }
