import { z } from 'zod'

const typeOfConsideration = ['gross', 'net', 'shearing', 'bearing'] as const
type TypeOfConsideration = (typeof typeOfConsideration)[number]
const typeOfConsiderationChoices: {
	[key in TypeOfConsideration]: string
} = {
	gross: 'Based on Gross Area',
	net: 'Based on Net Area',
	shearing: 'Based on Shearing of Bolts',
	bearing: 'Based on Bearing of Plates'
}

const typeOfShearing = ['single', 'double'] as const
type TypeOfShearing = (typeof typeOfShearing)[number]
const typeOfShearingChoices: {
	[key in TypeOfShearing]: string
} = { single: 'Single Shear', double: 'Double Shear' }

const inputSchema = z.object({
	typeOfConsideration: z.enum(['gross', 'net', 'shearing', 'bearing'], {
		message: 'Please select an option'
	}),
	Wg: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	t: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	Fy: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	db: z.coerce
		.number()
		.min(12)
		.refine((val) => [12, 16, 20, 22, 25].includes(val) || val >= 28, {
			message: 'Input must be 12, 16, 20, 22, 25 or any number from 28+'
		}),
	N: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	n: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	An: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	Fu: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	Fv: z.coerce.number().positive({ message: 'Input must be greater than 0' }),
	typeOfShearing: z.enum(['single', 'double'], {
		message: 'Please select an option'
	})
})

type inputType = z.infer<typeof inputSchema>

export { typeOfConsiderationChoices, typeOfShearingChoices, inputSchema, type inputType }
