'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { FormProvider, useForm } from 'react-hook-form'
import { type z } from 'zod'

import { FooterSection } from '@/components/sections/footer-section'
import { Separator } from '@/components/ui/separator'
import { useFindCalculatorWithPathName } from '@/lib/hooks/useFindCalculator'
import { basePlateSchema } from '@/lib/schemas/base-plate'
import { eulersFormulaSchema } from '@/lib/schemas/eulers-formula-for-columns'
import { nscp2001CodeProvisionsSchema } from '@/lib/schemas/nscp-2001-code-provisions'
import { useActiveSectionContext } from '@/providers/active-section-provider'

const pageToSchemaMapping = {
	// non-built-up-columns
	'/nscp-2001-code-provisions': nscp2001CodeProvisionsSchema,
	'/eulers-formula-for-columns': eulersFormulaSchema,
	'/base-plate': basePlateSchema
}
type PagePath = keyof typeof pageToSchemaMapping

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathName = usePathname()
	const { setActiveSection } = useActiveSectionContext()
	const { activeCalculator, activeCalculatorItem } = useFindCalculatorWithPathName({
		pathName
	})

	const currentSchema = pageToSchemaMapping[pathName as PagePath]
	const form = useForm<z.infer<typeof currentSchema>>({
		resolver: zodResolver(currentSchema)
	})

	useEffect(() => {
		if (activeCalculator) setActiveSection(activeCalculator.hash)
	}, [activeCalculator, setActiveSection])

	return (
		<div className="relative min-h-screen bg-white antialiased dark:bg-[#09090b]">
			<div className="absolute min-h-[50vh] w-screen bg-white bg-grid-[#f0f1f3] dark:bg-[#09090b] dark:bg-grid-[#171a1e]">
				<div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent to-30% dark:from-[#09090b] dark:to-transparent" />
				<div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50 dark:from-[#09090b] dark:via-transparent dark:to-[#09090b]" />
			</div>
			<motion.div
				className="relative min-h-[87vh] px-4 pt-24 sm:container sm:pt-32 md:px-16 md:pt-40"
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.8,
					ease: 'easeInOut'
				}}
			>
				<section className="flex flex-col gap-4 text-center sm:gap-6 sm:text-start md:gap-8">
					<h1 className="bg-opacity-50 bg-gradient-to-b from-muted-foreground/90 to-foreground/90 bg-clip-text text-3xl font-bold text-transparent dark:from-muted-foreground/90 dark:to-foreground/90 sm:text-4xl md:text-5xl">
						{activeCalculatorItem?.title}
					</h1>
					<p className="max-w-5xl text-muted-foreground sm:text-lg">{activeCalculatorItem?.description}</p>
				</section>
				<Separator className="mb-8 mt-8 sm:mb-12 sm:mt-14 lg:mb-14 lg:mt-20" />
				<FormProvider {...form}>{children}</FormProvider>
			</motion.div>
			<FooterSection className="dark:!bg-[#09090b]" />
		</div>
	)
}
