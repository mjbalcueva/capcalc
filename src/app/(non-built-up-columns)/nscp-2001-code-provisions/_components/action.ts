'use server'

import { createServerAction } from 'zsa'

import { produceNewMessageSchema } from './schema'

export const produceNewMessageAction = createServerAction()
	.input(produceNewMessageSchema)
	.handler(async ({ input }) => {
		return 'Hello, ' + input.name + ', Age: ' + input.age
	})
