import { z } from 'zod'

const basePlateSchema = z.object({
	W: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	H: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	B: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	N: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	t: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	bf: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	d: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	fC: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	fY: z.coerce.number().positive({ message: 'Input must be greater than 0' })
})

type basePlateType = z.infer<typeof basePlateSchema>

export { basePlateSchema, type basePlateType }
