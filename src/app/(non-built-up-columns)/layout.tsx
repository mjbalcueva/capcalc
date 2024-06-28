'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { Separator } from '@/components/ui/separator'
import { nonBuiltUpColumns } from '@/lib/links'
import { useActiveSectionContext } from '@/providers/active-section-provider'

type Props = {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	const pathName = usePathname()
	const { setActiveSection } = useActiveSectionContext()

	const page = nonBuiltUpColumns.calculators.find(
		(calculator) => calculator.link === pathName
	)

	useEffect(() => {
		setActiveSection('#non-built-up-columns')
	}, [setActiveSection])

	return (
		<div className="relative min-h-screen bg-white antialiased dark:bg-[#09090b]">
			<div className="absolute min-h-[40vh] w-screen bg-white bg-grid-[#f0f1f3] dark:bg-[#09090b] dark:bg-grid-[#171a1e]">
				<div className="absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-[#09090b] dark:to-transparent" />
				<div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-[#09090b] dark:via-transparent dark:to-[#09090b]" />
			</div>
			<motion.main
				className="relative px-4 pt-24 sm:container"
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.8,
					ease: 'easeInOut'
				}}
			>
				<div className="flex flex-col gap-4">
					<h1 className="text-3xl font-bold">{page!.title}</h1>
					<p className="text-muted-foreground">{page!.description}</p>
				</div>
				<Separator className="mb-8 mt-8 sm:mb-12 lg:mb-14 lg:mt-10" />
				{children}
			</motion.main>
		</div>
	)
}
