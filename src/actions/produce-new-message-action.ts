'use server'

import { createServerAction } from 'zsa'

import { produceNewMessageSchema } from '@/schemas/non-built-up-column-schemas'

export const produceNewMessageAction = createServerAction()
	.input(produceNewMessageSchema)
	.handler(async ({ input }) => {
		await new Promise((resolve) => setTimeout(resolve, 500))
		return 'Hello, ' + input.name
	})
