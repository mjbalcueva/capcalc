'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { BackgroundBeams } from '@/components/ui/background-beams'
import { useActiveSectionContext } from '@/providers/active-section-provider'

type Props = {
	children: React.ReactNode
}

export default function Layout({ children }: Props) {
	const { setActiveSection } = useActiveSectionContext()

	useEffect(() => {
		setActiveSection('#non-built-up-columns')
	}, [setActiveSection])

	return (
		<main>
			<BackgroundBeams />
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.8,
					ease: 'easeInOut'
				}}
				className="pt-24"
			>
				{children}
			</motion.div>
		</main>
	)
}
