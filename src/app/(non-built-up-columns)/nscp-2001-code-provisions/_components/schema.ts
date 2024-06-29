import { z } from 'zod'

export const produceNewMessageSchema = z.object({
	name: z.string().min(5, {
		message: 'Name must be at least 5 characters.'
	}),
	age: z.coerce.number().int().positive()
})
