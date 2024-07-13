'use client'

import { useEffect } from 'react'
import { useAtom } from 'jotai'
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
import { useDebounce } from '@/lib/hooks/useDebounce'
import {
	effectiveLengthFactorChoices,
	recommendedOrTheoreticalChoices,
	type NonBuiltUpColumnsSchemaType
} from '@/lib/schemas/nonBuiltUpColumnsSchema'
import { inputAtom } from './atom'

const InputCard = () => {
	const [, setInput] = useAtom(inputAtom)
	const {
		control,
		formState: { errors, isSubmitting },
		register,
		reset,
		trigger,
		watch
	} = useFormContext<NonBuiltUpColumnsSchemaType>()

	const debouncedSubmit = useDebounce((values: NonBuiltUpColumnsSchemaType) => {
		setInput(values)
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
								recommendedOrTheoretical: watch('recommendedOrTheoretical'),
								effectiveLengthFactor: watch('effectiveLengthFactor'),
								Ix: '' as unknown as undefined,
								Iy: '' as unknown as undefined
							})
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
