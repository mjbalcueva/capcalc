import { z } from 'zod'

const inputSchema = z.object({
	Fy: z.coerce.number().nonnegative(),
	Fx: z.coerce.number().nonnegative(),
	La: z.coerce.number().nonnegative(),
	Lb: z.coerce.number().nonnegative(),
	x: z.coerce.number().nonnegative(),
	tp: z.coerce.number().nonnegative()
})

type inputType = z.infer<typeof inputSchema>

export { inputSchema, type inputType }
