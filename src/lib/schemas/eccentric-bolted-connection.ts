import { z } from 'zod'

const inputSchema = z.object({
	Fx: z.coerce.number().nonnegative(),
	Fy: z.coerce.number().nonnegative(),
	x1: z.coerce.number().nonnegative(),
	x2: z.coerce.number().nonnegative(),
	y1: z.coerce.number().nonnegative(),
	y2: z.coerce.number().nonnegative(),
	db: z.coerce.number().nonnegative()
})

type inputType = z.infer<typeof inputSchema>

export { inputSchema, type inputType }
