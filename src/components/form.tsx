import * as React from 'react'
import { type TooltipProps } from '@radix-ui/react-tooltip'
import { Controller } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { Input } from './ui/input'

const Form = ({
	children,
	...props
}: React.HTMLAttributes<HTMLFormElement>) => {
	return <form {...props}>{children}</form>
}

const FormController = Controller
Form.Controller = FormController

type FormItemProps = {
	label?: string
	errorMessage?: string
	children: React.ReactNode
}
const FormItem: React.FC<FormItemProps> = ({
	label,
	errorMessage,
	children
}) => {
	return (
		<div className="relative space-y-2">
			{label && (
				<Label className={cn(errorMessage && 'font-medium')}>{label}</Label>
			)}
			{children}
			{errorMessage && (
				<h4 className="text-sm font-medium text-destructive">{errorMessage}</h4>
			)}
		</div>
	)
}
Form.Item = FormItem

const FormInput = React.forwardRef<
	React.ElementRef<typeof Input>,
	React.ComponentPropsWithoutRef<typeof Input>
>(({ ...props }, ref) => <Input ref={ref} {...props} />)
FormInput.displayName = 'FormInput'
Form.Input = FormInput

// type FormSelectProps = {
// 	choices: Record<string, string>
// 	placeHolder: string
// }
// const FormSelect = ({ choices, placeHolder, ...props }: FormSelectProps) => {
// 	return (
// 		<Select {...props}>
// 			<SelectTrigger>
// 				<SelectValue placeholder={placeHolder} />
// 			</SelectTrigger>
// 			<SelectContent>
// 				{Object.entries(choices).map(([key, value]) => (
// 					<SelectItem key={key} value={key}>
// 						{value}
// 					</SelectItem>
// 				))}
// 			</SelectContent>
// 		</Select>
// 	)
// }
// FormSelect.displayName = 'FormSelect'
// Form.Select = FormSelect

type FormSelectProps = {
	choices: Record<string, string>
	placeHolder: string
} & React.ComponentPropsWithoutRef<typeof Select> & {
		ref: React.RefObject<React.ElementRef<typeof Select>>
	}

const FormSelect = React.forwardRef<
	React.ElementRef<typeof Select>,
	FormSelectProps
>(({ choices, placeHolder, ...props }) => {
	return (
		<Select {...props}>
			<SelectTrigger>
				<SelectValue placeholder={placeHolder} />
			</SelectTrigger>
			<SelectContent>
				{Object.entries(choices).map(([key, value]) => (
					<SelectItem key={key} value={key}>
						{value}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
})
FormSelect.displayName = 'FormSelect'
Form.Select = FormSelect

const FormSwitch = React.forwardRef<
	React.ElementRef<typeof Switch>,
	React.ComponentPropsWithoutRef<typeof Switch>
>(({ className, ...props }, ref) => (
	<Switch
		ref={ref}
		className={cn(
			(className =
				'ring-[#afafaf] ring-offset-[3px] ring-offset-background hover:ring-1'),
			className
		)}
		{...props}
	/>
))
FormSwitch.displayName = 'FormSwitch'
Form.Switch = FormSwitch

const FormTooltip = ({
	children,
	...props
}: { children: React.ReactNode } & TooltipProps) => {
	return (
		<TooltipProvider>
			<Tooltip {...props}>{children}</Tooltip>
		</TooltipProvider>
	)
}
Form.Tooltip = FormTooltip

const FormTooltipTrigger = ({ children }: { children: React.ReactNode }) => {
	return (
		<TooltipTrigger asChild>
			<div>{children}</div>
		</TooltipTrigger>
	)
}
Form.TooltipTrigger = FormTooltipTrigger

const FormTooltipContent = ({ description }: { description: string }) => {
	return (
		<TooltipContent className="bg-black bg-opacity-25 text-gray-500 backdrop-blur-[0.5rem]">
			<p>{description}</p>
		</TooltipContent>
	)
}
Form.TooltipContent = FormTooltipContent

export { Form }
