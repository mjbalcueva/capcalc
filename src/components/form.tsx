import { type HTMLAttributes } from 'react'

import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

type FormProps = HTMLAttributes<HTMLFormElement>

const Form = ({ children, ...props }: FormProps) => {
	return (
		<form {...props}>
			<div className="flex flex-col space-y-4 px-6">{children}</div>
		</form>
	)
}

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

export { Form }
