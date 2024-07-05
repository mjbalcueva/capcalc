'use client'

import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormItem } from '@/components/calculator'
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
	calculateAllowableCapacity,
	calculateLValues,
	calculateRmin,
	calculateRx,
	calculateRy,
	calculateSRmax,
	calculateSRx,
	calculateSRy,
	calculateUpdatedI,
	getKValues
} from '@/lib/calculatorToolKit'
import { useDebounce } from '@/lib/hooks/useDebounce'
import {
	effectiveLengthFactorChoices,
	recommendedOrTheoreticalChoices,
	type NonBuiltUpColumnsSchemaType
} from '@/lib/schemas/nonBuiltUpColumnsSchema'
import { useEulersFormulaForColumnStore } from '@/store/eulersFormulaForColumnStore'

const InputCard = () => {
	const { setValues, resetValues } = useEulersFormulaForColumnStore()
	const {
		control,
		formState: { errors, isSubmitting },
		register,
		reset,
		trigger,
		watch
	} = useFormContext<NonBuiltUpColumnsSchemaType>()

	const debouncedSubmit = useDebounce((values: NonBuiltUpColumnsSchemaType) => {
		const {
			A,
			L,
			supportsMidspan,
			recommendedOrTheoretical,
			effectiveLengthFactor,
			Ix,
			Iy
		} = values
		const updatedIx = calculateUpdatedI(Ix)
		const updatedIy = calculateUpdatedI(Iy)
		const { Lx, Ly } = calculateLValues(L, supportsMidspan)
		const { Kx, Ky } = getKValues(
			recommendedOrTheoretical,
			effectiveLengthFactor
		)
		const Rx = calculateRx({ updatedIx, A })
		const Ry = calculateRy({ updatedIy, A })
		const rMin = calculateRmin({ Rx, Ry })
		const SRx = calculateSRx({ Kx, Lx, Rx })
		const SRy = calculateSRy({ Ky, Ly, Ry })
		const SRmax = calculateSRmax({ SRx, SRy })
		const calculateAllowableStress = (SRmax: number) => {
			return parseFloat(((Math.PI ** 2 * 200000) / SRmax ** 2).toFixed(3))
		}
		const AllowableStress = calculateAllowableStress(SRmax)
		const AllowableCapacity = calculateAllowableCapacity({
			AllowableStress,
			A
		})

		setValues({
			Rx: isFinite(Rx) ? Rx : 0,
			Ry: isFinite(Ry) ? Ry : 0,
			rMin: isFinite(rMin) ? rMin : 0,
			SRx: isFinite(SRx) ? SRx : 0,
			SRy: isFinite(SRy) ? SRy : 0,
			SRmax: isFinite(SRmax) ? SRmax : 0,
			AllowableStress: isFinite(AllowableStress) ? AllowableStress : 0,
			AllowableCapacity: isFinite(AllowableCapacity) ? AllowableCapacity : 0
		})
	})

	useEffect(() => {
		return watch((values) => {
			debouncedSubmit(values as NonBuiltUpColumnsSchemaType)
			void trigger()
		}).unsubscribe
	}, [watch, debouncedSubmit, trigger])

	return (
		<section className="flex flex-col">
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
						{...register('Fy')}
					/>

					<FormItem.Input
						label="Area"
						placeholder="mm²"
						errorMessage={errors.A?.message}
						{...register('A')}
					/>

					<FormItem.Input
						label="Length of Column"
						placeholder="mm"
						errorMessage={errors.L?.message}
						{...register('L')}
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
						{...register('Ix')}
					/>

					<FormItem.Input
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
						onClick={() => {
							reset({
								Fy: '' as unknown as undefined,
								A: '' as unknown as undefined,
								L: '' as unknown as undefined,
								supportsMidspan: false,
								Ix: '' as unknown as undefined,
								Iy: '' as unknown as undefined
							})
							resetValues()
						}}
					>
						Reset
					</Button>
				</CardFooter>
			</Card>
		</section>
	)
}

export { InputCard }
