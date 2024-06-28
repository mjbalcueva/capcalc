'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useServerAction } from 'zsa-react'

import { produceNewMessageAction } from '@/actions/produce-new-message-action'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { produceNewMessageSchema } from '@/schemas/non-built-up-column-schemas'

const NSCPInputForm = () => {
	const { isPending, execute, data } = useServerAction(produceNewMessageAction)

	const form = useForm<z.infer<typeof produceNewMessageSchema>>({
		resolver: zodResolver(produceNewMessageSchema),
		defaultValues: {
			name: ''
		}
	})

	async function onSubmit(values: z.infer<typeof produceNewMessageSchema>) {
		const [data, err] = await execute(values)

		if (err) {
			// show a toast or something
			return
		}

		console.log('Data:', data)
		form.reset({ name: '' })
	}

	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex flex-row-reverse">
						<Button disabled={isPending} type="submit" variant={'destructive'}>
							{isPending ? 'Saving...' : 'Save'}
						</Button>
					</div>
				</form>
			</Form>
			{data && <div>Message: {data}</div>}
		</>
	)
}

export { NSCPInputForm }
