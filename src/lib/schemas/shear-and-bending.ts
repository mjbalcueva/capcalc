import { z } from 'zod'

const inputSchema = z.object({
	Wg: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	t: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	Fy: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	db: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	n: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	An: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	Fu: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	Fv: z.coerce.number().positive({ message: 'Input must be greater than 0' })
})

type inputType = z.infer<typeof inputSchema>

export { inputSchema, type inputType }
