import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const FormItem = ({
	label,
	errorMessage,
	children
}: {
	label?: string
	errorMessage?: string
	children: React.ReactNode
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

export { FormItem }
