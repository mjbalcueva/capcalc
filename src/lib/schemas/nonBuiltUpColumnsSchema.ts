import { z } from 'zod'

const recommendedOrTheoretical = ['recommended', 'theoretical'] as const

type RecommendedOrTheoretical = (typeof recommendedOrTheoretical)[number]

const recommendedOrTheoreticalChoices: {
	[key in RecommendedOrTheoretical]: string
} = { recommended: 'Recommended', theoretical: 'Theoretical' }

const effectiveLengthFactor = [
	'fixed-fixed',
	'fixed-pinned',
	'pinned-pinned'
] as const

type EffectiveLengthFactor = (typeof effectiveLengthFactor)[number]

const effectiveLengthFactorChoices: {
	[key in EffectiveLengthFactor]: string
} = {
	'fixed-fixed': 'Fixed-Fixed',
	'fixed-pinned': 'Fixed-Pinned',
	'pinned-pinned': 'Pinned-Pinned'
}

const nonBuiltUpColumnsSchema = z.object({
	Fy: z.coerce.number().positive({
		message: 'Input must be greater than 0'
	}),
	A: z.coerce.number().positive({
		message: 'Input must be greater than 0'
	}),
	L: z.coerce.number().positive({
		message: 'Input must be greater than 0'
	}),
	supportsMidspan: z.boolean(),
	recommendedOrTheoretical: z.enum(recommendedOrTheoretical, {
		message: 'Please select an option'
	}),
	effectiveLengthFactor: z.enum(effectiveLengthFactor, {
		message: 'Please select an option'
	}),
	Ix: z.coerce.number().positive({
		message: 'Input must be greater than 0'
	}),
	Iy: z.coerce.number().positive('Input must be greater than 0')
})

type NonBuiltUpColumnsSchemaType = z.infer<typeof nonBuiltUpColumnsSchema>

export {
	recommendedOrTheoreticalChoices,
	effectiveLengthFactorChoices,
	nonBuiltUpColumnsSchema,
	type NonBuiltUpColumnsSchemaType
}
