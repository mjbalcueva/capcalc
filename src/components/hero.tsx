'use client'

import { motion } from 'framer-motion'
import { AuroraBackground } from '@/components/ui/aurora-background'

const HeroSection = () => {
	return (
		<AuroraBackground>
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut'
				}}
				className="relative flex flex-col items-center justify-center gap-4 px-4"
			>
				<div className="text-center text-3xl font-bold dark:text-white md:text-7xl">
					Welcome to CapCalc.
				</div>
				<div className="py-4 text-base font-extralight dark:text-neutral-200 md:text-4xl">
					A simple engineering calculator project.
				</div>
			</motion.div>
		</AuroraBackground>
	)
}

export { HeroSection }
