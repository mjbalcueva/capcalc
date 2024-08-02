import { z } from 'zod'

const typeOfTensileCapacity = ['getCapacity', 'getP'] as const
type TypeOfConsideration = (typeof typeOfTensileCapacity)[number]
const typeOfTensileCapacityChoices: {
	[key in TypeOfConsideration]: string
} = {
	getCapacity: 'Get Capacity',
	getP: 'Get P Based on Block Shear'
}

const inputSchema = z.object({
	typeofTensileCapacity: z.enum(['getCapacity', 'getP'], {
		message: 'Please select an option'
	}),
	Fy: z.coerce.number().nonnegative(),
	Fu: z.coerce.number().nonnegative(),
	Wg: z.coerce.number().nonnegative(),
	t: z.coerce.number().nonnegative(),
	u: z.coerce.number().nonnegative(),
	tp: z.coerce.number().nonnegative(),
	Lv: z.coerce.number().nonnegative(),
	Lt: z.coerce.number().nonnegative()
})

type inputType = z.infer<typeof inputSchema>

export { typeOfTensileCapacityChoices, inputSchema, type inputType }
