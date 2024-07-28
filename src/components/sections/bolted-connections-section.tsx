'use client'

import { motion } from 'framer-motion'

import { useFindCalculatorWithHash } from '@/lib/hooks/useFindCalculator'
import { useSectionInView } from '@/lib/hooks/useSectionInView'

import { CardHoverEffect } from '../ui/card-hover-effect'

const BoltedConnectionsSection = () => {
	const { ref } = useSectionInView('#bolted-connections')
	const boltedConnectionsCalculator = useFindCalculatorWithHash('#bolted-connections')

	return (
		<section
			ref={ref}
			id="bolted-connections"
			className="relative z-[1] flex h-full min-h-screen items-center justify-center bg-white py-10 dark:bg-[#050506]"
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
				<div className="mx-2.5 flex h-[97.4%] min-h-72 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white text-center dark:border-white/[0.2] dark:bg-[#000505]">
					<h2 className="text-xl font-bold text-card-foreground/75 md:text-4xl">
						{/* {nonBuiltUpCalculators?.title} */}
						Bolted Connections Section
					</h2>
					<p className="mx-auto mt-4 max-w-lg text-muted-foreground/90 md:text-lg">
						{/* {nonBuiltUpCalculators?.description} */}
					</p>
				</div>
				<CardHoverEffect items={boltedConnectionsCalculator?.calculators ?? []} className="max-w-full" />
			</motion.div>
		</section>
	)
}

export { BoltedConnectionsSection }
