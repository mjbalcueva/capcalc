import { z } from 'zod'

const inputSchema = z.object({
	P: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	e: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	L: z.coerce.number().positive({ message: 'Input must be greater than 0' })
})

type inputType = z.infer<typeof inputSchema>

export { inputSchema, type inputType }
