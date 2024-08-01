import { z } from 'zod'

const inputSchema = z.object({
	useMaximumSize: z.boolean(),
	tp: z.coerce.number().nonnegative(),
	useUltimateStress: z.boolean(),
	Fv: z.coerce.number().nonnegative(),
	La: z.coerce.number().nonnegative(),
	Lb: z.coerce.number().nonnegative(),
	Lc: z.coerce.number().nonnegative()
})

type inputType = z.infer<typeof inputSchema>

export { inputSchema, type inputType }
