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
	Fy: z.coerce.number().positive(),
	A: z.coerce.number().positive(),
	L: z.coerce.number().positive(),
	supportsMidspan: z.boolean(),
	recommendedOrTheoretical: z.enum(recommendedOrTheoretical),
	effectiveLengthFactor: z.enum(effectiveLengthFactor),
	Ix: z.coerce.number().positive(),
	Iy: z.coerce.number().positive()
})
