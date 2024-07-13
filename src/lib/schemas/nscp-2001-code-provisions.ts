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

const nscp2001CodeProvisionsSchema = z.object({
	Fy: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	A: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	L: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	supportsMidspan: z.boolean(),
	recommendedOrTheoretical: z.enum(recommendedOrTheoretical, {
		message: 'Please select an option'
	}),
	effectiveLengthFactor: z.enum(effectiveLengthFactor, {
		message: 'Please select an option'
	}),
	Ix: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	Iy: z.coerce.number().positive('Input must be greater than 0')
})
type nscp2001CodeProvisionsType = z.infer<typeof nscp2001CodeProvisionsSchema>

export {
	recommendedOrTheoreticalChoices,
	effectiveLengthFactorChoices,
	nscp2001CodeProvisionsSchema,
	type nscp2001CodeProvisionsType
}
