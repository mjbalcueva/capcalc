'use client'

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
import { useCalculatorContext } from '@/providers/calculator-providert'

const InputCard = () => {
	const { setState } = useCalculatorContext()
	const {
		control,
		handleSubmit,
		register,
		formState: { errors, isSubmitting }
	} = useFormContext<z.infer<typeof nscp2001CodeProvisionsSchema>>()

	const onSubmit = (values: z.infer<typeof nscp2001CodeProvisionsSchema>) => {
		const {
			Fy,
			A,
			L,
			supportsMidspan,
			recommendedOrTheoretical,
			effectiveLengthFactor
		} = values
		let { Ix, Iy } = values

		Ix = Ix * 10 ** 6
		Iy = Iy * 10 ** 6
		const Lx = L
		const Ly = supportsMidspan ? L / 2 : L

		const kValues = {
			recommended: {
				'fixed-fixed': { Kx: 0.6, Ky: 0.8 },
				'fixed-pinned': { Kx: 1.0, Ky: 1.0 },
				'pinned-pinned': { Kx: 0.8, Ky: 0.8 }
			},
			theoretical: {
				'fixed-fixed': { Kx: 0.5, Ky: 0.7 },
				'fixed-pinned': { Kx: 1.0, Ky: 1.0 },
				'pinned-pinned': { Kx: 0.7, Ky: 0.7 }
			}
		}
		const kValueCategory = kValues[recommendedOrTheoretical] || {}
		const { Kx, Ky } = kValueCategory[effectiveLengthFactor] || {
			Kx: 1.0,
			Ky: 1.0
		}

		const Rx = Math.sqrt(Ix / A)
		const Ry = Math.sqrt(Iy / A)
		const rMin = Math.min(Rx, Ry)
		const Cc = Math.sqrt((Math.PI ** 2 * (4 * 10 ** 5)) / Fy)

		const SRx = (Kx * Lx) / Rx
		const SRy = (Ky * Ly) / Ry
		const SRMax = Math.max(SRx, SRy)

		const ColumnType = SRMax > Cc ? 'Long' : 'Intermediate'

		const Fs =
			ColumnType === 'Intermediate'
				? 5 / 3 + (3 / 8) * (SRMax / Cc) - SRMax ** 3 / (8 * Cc ** 3)
				: 'N/A'

		const AllowableStress = (Math.PI ** 2 * 200000) / SRMax ** 2
		const AllowableCapacity = (AllowableStress * A) / 1000

		setState({
			Rx,
			Ry,
			rMin,
			Cc,
			SRx,
			SRy,
			SRMax,
			ColumnType,
			Fs,
			AllowableStress,
			AllowableCapacity
		})
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Input Variables</CardTitle>
				<CardDescription>Input Description</CardDescription>
			</CardHeader>

			<form onChange={handleSubmit(onSubmit)}>
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
			</form>

			<CardFooter className="flex flex-col">
				<Button
					className="w-full"
					disabled={isSubmitting}
					onClick={() => window.location.reload()}
				>
					Reset
				</Button>
			</CardFooter>
		</Card>
	)
}

export { InputCard }
