import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { type CalculatorItemType } from '@/lib/types'
import { cn, truncateText } from '@/lib/utils'

const CardHoverEffect = ({
	items,
	className
}: {
	items: CalculatorItemType[]
	className?: string
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1',
				className
			)}
		>
			{items.map((item, idx) => (
				<Link
					href={item?.link}
					key={item?.link}
					className="group relative block h-full w-full p-2"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 block h-full w-full rounded-3xl bg-gray-200 bg-opacity-55 dark:bg-gray-700 dark:bg-opacity-30"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 }
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 }
								}}
							/>
						)}
					</AnimatePresence>
					<Card>
						<CardTitle>{item.title}</CardTitle>
						<CardDescription>
							{truncateText(item.description, 180)}
						</CardDescription>
					</Card>
				</Link>
			))}
		</div>
	)
}

const Card = ({
	className,
	children
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<div
			className={cn(
				'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 dark:border-white/[0.2] dark:bg-[#000505] dark:group-hover:border-zinc-700',
				className
			)}
		>
			<div className="relative z-50">
				<div className="p-4">{children}</div>
			</div>
		</div>
	)
}

const CardTitle = ({
	className,
	children
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<h4
			className={cn(
				'mt-4 text-lg font-bold tracking-wide text-card-foreground/75',
				className
			)}
		>
			{children}
		</h4>
	)
}

const CardDescription = ({
	className,
	children
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<p
			className={cn(
				'mt-6 text-sm leading-relaxed tracking-wide text-muted-foreground/90',
				className
			)}
		>
			{children}
		</p>
	)
}

export { Card, CardDescription, CardTitle, CardHoverEffect }
