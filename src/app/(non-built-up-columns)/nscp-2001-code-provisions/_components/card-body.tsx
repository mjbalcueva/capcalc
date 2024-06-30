'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type z } from 'zod'

import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { useServerActionMutation } from '@/lib/hooks'
import { nscp2001CodeProvisionsAction } from './action'
import {
	EffectiveLengthFactor,
	effectiveLengthFactorChoices,
	nscp2001CodeProvisionsSchema,
	RecommendedOrTheoretical,
	recommendedOrTheoreticalChoices
} from './schema'

const CardBody = () => {
	const form = useForm<z.infer<typeof nscp2001CodeProvisionsSchema>>({
		resolver: zodResolver(nscp2001CodeProvisionsSchema),
		defaultValues: {
			Fy: '' as unknown as number,
			A: '' as unknown as number,
			Lx: '' as unknown as number,
			Ly: '' as unknown as number,
			recommendedOrTheoretical: '' as RecommendedOrTheoretical,
			effectiveLengthFactor: '' as EffectiveLengthFactor,
			Ix: '' as unknown as number,
			Iy: '' as unknown as number
		}
	})

	const { mutate, data } = useServerActionMutation(nscp2001CodeProvisionsAction)

	async function onSubmit(
		values: z.infer<typeof nscp2001CodeProvisionsSchema>
	) {
		mutate(values)
		form.reset()
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<CardContent className="flex flex-col gap-4">
					<FormField
						control={form.control}
						name="Fy"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Yield Strength</FormLabel>
								<FormControl>
									<Input placeholder="MPa" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="A"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Area</FormLabel>
								<FormControl>
									<Input placeholder="mm²" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="Lx"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Length X</FormLabel>
								<FormControl>
									<Input placeholder="mm" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="Ly"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Length Y</FormLabel>
								<FormControl>
									<Input placeholder="mm" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="recommendedOrTheoretical"
						render={({ field }) => (
							<FormItem>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Choose Recommended or Theoretical" />
										</SelectTrigger>
									</FormControl>
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
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="effectiveLengthFactor"
						render={({ field }) => (
							<FormItem>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Choose Effective Length Factor" />
										</SelectTrigger>
									</FormControl>
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
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="Ix"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Moment of Inertia X</FormLabel>
								<FormControl>
									<Input placeholder="mm⁴" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="Iy"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Moment of Inertia Y</FormLabel>
								<FormControl>
									<Input placeholder="mm⁴" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</CardContent>
				<CardFooter>
					<Button type="submit" className="w-full">
						Compute
					</Button>
				</CardFooter>
			</form>
		</Form>
	)
}

export { CardBody }
