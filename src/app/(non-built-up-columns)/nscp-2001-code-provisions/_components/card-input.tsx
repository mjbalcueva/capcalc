'use client'

import { watch } from 'fs'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
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
	effectiveLengthFactorChoices,
	nscp2001CodeProvisionsSchema,
	recommendedOrTheoreticalChoices
} from './schema'

const CardInput = () => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		watch
	} = useForm<z.infer<typeof nscp2001CodeProvisionsSchema>>({
		resolver: zodResolver(nscp2001CodeProvisionsSchema),
		defaultValues: {
			Fy: undefined,
			A: undefined,
			L: undefined,
			supportsMidspan: false,
			recommendedOrTheoretical: undefined,
			effectiveLengthFactor: undefined,
			Ix: undefined,
			Iy: undefined
		}
	})

	const onSubmit = (values: z.infer<typeof nscp2001CodeProvisionsSchema>) => {
		console.log(values)
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Input Variables</CardTitle>
				<CardDescription>Input Description</CardDescription>
			</CardHeader>

			<form onSubmit={handleSubmit(onSubmit)}>
				<CardContent className="flex flex-col space-y-4">
					<FormItem label="Yield Strength" errorMessage={errors.Fy?.message}>
						<Input
							id="Fy"
							type="number"
							placeholder="MPa"
							{...register('Fy')}
						/>
					</FormItem>
					<FormItem label="Area" errorMessage={errors.A?.message}>
						<Input type="number" placeholder="mm²" {...register('A')} />
					</FormItem>
					<FormItem label="Length of Column" errorMessage={errors.L?.message}>
						<Controller
							control={control}
							name="supportsMidspan"
							render={({ field }) => (
								<Switch
									checked={field.value}
									onCheckedChange={field.onChange}
									className="absolute right-0"
								/>
							)}
						/>
						<Input type="number" placeholder="mm" {...register('L')} />
					</FormItem>
					<FormItem errorMessage={errors.recommendedOrTheoretical?.message}>
						<Controller
							control={control}
							name="recommendedOrTheoretical"
							render={({ field }) => (
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<SelectTrigger>
										<SelectValue placeholder="Choose Effective Length Factor" />
									</SelectTrigger>
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
							)}
						/>
					</FormItem>
					<FormItem errorMessage={errors.effectiveLengthFactor?.message}>
						<Controller
							control={control}
							name="effectiveLengthFactor"
							render={({ field }) => (
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<SelectTrigger>
										<SelectValue placeholder="Choose Effective Length Factor" />
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
					</FormItem>
					<FormItem
						label="Moment of Inertia X"
						errorMessage={errors.Ix?.message}
					>
						<Input type="number" placeholder="mm⁴" {...register('Ix')} />
					</FormItem>
					<FormItem
						label="Moment of Inertia Y"
						errorMessage={errors.Iy?.message}
					>
						<Input type="number" placeholder="mm⁴" {...register('Iy')} />
					</FormItem>
					<Separator />
					<p>{JSON.stringify(watch(), null, 2)}</p>
				</CardContent>
				<CardFooter className="flex flex-col">
					<Button type="submit" disabled={isSubmitting} className="w-full">
						Submit
					</Button>
				</CardFooter>
			</form>
		</Card>
	)
}

export { CardInput }
