'use server'

import { createServerAction } from 'zsa'

import { nscp2001CodeProvisionsSchema } from './schema'

export const nscp2001CodeProvisionsAction = createServerAction()
	.input(nscp2001CodeProvisionsSchema)
	.handler(async ({ input }) => {
		return input
	})
