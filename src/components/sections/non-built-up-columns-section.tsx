'use client'

import { motion } from 'framer-motion'

import { HoverEffect } from '@/components/ui/card-hover-effect'
import { useSectionInView } from '@/lib/hooks'
import { nonBuiltUpColumns } from '@/lib/links'

const NonBuiltUpColumnsSection = () => {
	const { ref } = useSectionInView('#non-built-up-columns')

	return (
		<section
			ref={ref}
			id="non-built-up-columns"
			className="relative z-[1] flex min-h-screen items-center justify-center bg-white py-10 dark:bg-[#050506]"
		>
			<motion.div
				className="grid w-full items-center gap-y-2 sm:container lg:grid-cols-2"
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.8,
					ease: 'easeInOut'
				}}
			>
				<div className="mx-2.5 flex h-[97.4%] min-h-72 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white text-center dark:border-white/[0.2] dark:bg-black">
					<h2 className="text-xl font-bold text-card-foreground/75 md:text-4xl">
						{nonBuiltUpColumns.title}
					</h2>
					<p className="mx-auto mt-4 max-w-lg text-muted-foreground/90 md:text-lg">
						{nonBuiltUpColumns.description}
					</p>
				</div>
				<HoverEffect items={nonBuiltUpColumns.calculators} />
			</motion.div>
			<div className="absolute top-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[#050506] dark:bg-[radial-gradient(#15181d_1px,transparent_1px)]" />
		</section>
	)
}

export { NonBuiltUpColumnsSection }
