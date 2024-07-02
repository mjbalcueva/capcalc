import { z } from 'zod'

export const recommendedOrTheoretical = ['recommended', 'theoretical'] as const

export type RecommendedOrTheoretical = (typeof recommendedOrTheoretical)[number]

export const recommendedOrTheoreticalChoices: {
	[key in RecommendedOrTheoretical]: string
} = { recommended: 'Recommended', theoretical: 'Theoretical' }

export const effectiveLengthFactor = [
	'fixed-fixed',
	'fixed-pinned',
	'pinned-pinned'
] as const

export type EffectiveLengthFactor = (typeof effectiveLengthFactor)[number]

export const effectiveLengthFactorChoices: {
	[key in EffectiveLengthFactor]: string
} = {
	'fixed-fixed': 'Fixed-Fixed',
	'fixed-pinned': 'Fixed-Pinned',
	'pinned-pinned': 'Pinned-Pinned'
}

export const nscp2001CodeProvisionsSchema = z.object({
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
