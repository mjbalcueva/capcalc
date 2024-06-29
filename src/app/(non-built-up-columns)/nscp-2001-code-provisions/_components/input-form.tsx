'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import { useServerActionMutation } from '@/lib/hooks'
import { produceNewMessageAction } from './action'
import { produceNewMessageSchema } from './schema'

const InputForm = () => {
	const form = useForm<z.infer<typeof produceNewMessageSchema>>({
		resolver: zodResolver(produceNewMessageSchema),
		defaultValues: {
			name: '',
			age: 0
		}
	})

	const { mutate, isPending, data } = useServerActionMutation(
		produceNewMessageAction
	)

	async function onSubmit(values: z.infer<typeof produceNewMessageSchema>) {
		mutate(values)
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
					<FormField
						control={form.control}
						name="age"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Age</FormLabel>
								<FormControl>
									<Input placeholder="age" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="cursor-pointer">
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

export { InputForm }
