'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { CardHoverEffect } from '@/components/ui/card-hover-effect'
import { ParticlesBackground } from '@/components/ui/particles-background'

import { useFindCalculatorWithHash } from '@/lib/hooks/useFindCalculator'
import { useSectionInView } from '@/lib/hooks/useSectionInView'

const WeldedConnectionsSection = () => {
	const { ref } = useSectionInView('#welded-connections')
	const nonBuiltUpCalculators = useFindCalculatorWithHash('#welded-connections')

	const { theme } = useTheme()
	const [color, setColor] = useState('#ffffff')

	useEffect(() => {
		setColor(theme === 'dark' ? '#ffffff' : '#000000')
	}, [theme])

	return (
		<section
			ref={ref}
			id="welded-connections"
			className="relative z-[1] flex h-full min-h-screen items-center justify-center bg-[#f1f2f4] py-10 dark:bg-[#09090b]"
		>
			<motion.div
				className="z-50 flex w-full flex-col items-center gap-y-2 sm:container"
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.8,
					ease: 'easeInOut'
				}}
			>
				<div className="row-start-1 mx-2.5 flex h-[97.4%] min-h-72 flex-grow flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white text-center backdrop-blur-[0.3rem] dark:border-white/[0.2] dark:bg-black/60 sm:w-[98.5%]">
					<h2 className="text-xl font-bold text-card-foreground/75 md:text-4xl">{nonBuiltUpCalculators?.title}</h2>
					<p className="mx-auto mt-4 max-w-lg text-muted-foreground/90 md:text-lg">
						{nonBuiltUpCalculators?.description}
					</p>
				</div>
				<CardHoverEffect items={nonBuiltUpCalculators?.calculators ?? []} className="w-full lg:w-[50%]" />
			</motion.div>
			<ParticlesBackground className="absolute inset-0" quantity={200} ease={80} color={color} refresh />
		</section>
	)
}

export { WeldedConnectionsSection }
