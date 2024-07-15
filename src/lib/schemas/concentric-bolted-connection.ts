import { z } from 'zod'

const inputSchema = z.object({
	Wg: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	t: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	Fy: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	db: z.coerce
		.number()
		.min(12)
		.refine((val) => [12, 16, 20, 22, 25].includes(val) || val >= 28, {
			message: 'Input must be 12, 16, 20, 22, 25 or any number from 28+'
		}),
	n: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	An: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	Fu: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	Fv: z.coerce.number().positive({ message: 'Input must be greater than 0' })
})

type inputType = z.infer<typeof inputSchema>

export { inputSchema, type inputType }
