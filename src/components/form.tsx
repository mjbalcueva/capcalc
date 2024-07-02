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

type FormItemProps = {
	label?: string
	errorMessage?: string
	children: React.ReactNode
}
const FormItem = ({ label, errorMessage, children }: FormItemProps) => {
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

const FormController = Controller
FormItem.Controller = FormController

type FormInputProps = React.ComponentPropsWithoutRef<typeof Input> & {
	label?: string
	errorMessage?: string
}
const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
	({ label, errorMessage, children, ...props }, ref) => {
		return (
			<FormItem label={label} errorMessage={errorMessage}>
				{children}
				<Input ref={ref} {...props} />
			</FormItem>
		)
	}
)
FormInput.displayName = 'FormInput'
FormItem.Input = FormInput

type FormSelectProps = {
	choices: Record<string, string>
	placeHolder: string
} & React.ComponentPropsWithoutRef<typeof Select>
const FormSelect = ({ choices, placeHolder, ...props }: FormSelectProps) => {
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
}
FormSelect.displayName = 'FormSelect'
FormItem.Select = FormSelect

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
FormItem.Switch = FormSwitch

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
FormItem.Tooltip = FormTooltip

const FormTooltipTrigger = ({ children }: { children: React.ReactNode }) => {
	return (
		<TooltipTrigger asChild>
			<div>{children}</div>
		</TooltipTrigger>
	)
}
FormItem.TooltipTrigger = FormTooltipTrigger

const FormTooltipContent = ({ description }: { description: string }) => {
	return (
		<TooltipContent className="bg-white/10 text-xs font-medium text-gray-500 backdrop-blur-[0.08rem] dark:bg-black/10 dark:text-gray-400">
			<p>{description}</p>
		</TooltipContent>
	)
}
FormItem.TooltipContent = FormTooltipContent

export { FormItem }
