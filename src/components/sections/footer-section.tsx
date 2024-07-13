import { cn } from '@/lib/utils'

const FooterSection = ({ className }: { className?: string }) => {
	return (
		<footer
			className={cn(
				'flex items-center justify-center bg-white py-10 dark:bg-[#050506]',
				className
			)}
		>
			<p className="text-gray-500">
				© {new Date().getFullYear()}. All rights reserved.
			</p>
		</footer>
	)
}

export { FooterSection }
