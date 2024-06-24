'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { menuItems } from '@/lib/links'
import { cn } from '@/lib/utils'
import { useActiveSectionContext } from '@/providers/active-section-provider'

const Header = () => {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext()

	return (
		<header className="relative z-[999]">
			<motion.div
				className="fixed left-1/2 top-0 h-[4.5rem] w-screen rounded-none border-b border-white border-opacity-10 bg-white bg-opacity-45 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-gray-600/30 dark:bg-black dark:bg-opacity-35 sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full sm:border"
				initial={{ y: -100, x: '-50%', opacity: 0 }}
				animate={{ y: 0, x: '-50%', opacity: 1 }}
			></motion.div>

			<nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
				<ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-screen sm:flex-nowrap sm:gap-5">
					{menuItems.map((menuItem) => (
						<motion.li
							className="relative flex h-3/4 items-center justify-center"
							key={menuItem.hash}
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
						>
							<Link
								className={cn(
									'flex w-full items-center justify-center px-3 py-3 text-center transition hover:text-gray-950 dark:hover:text-gray-300',
									`${menuItem.hash === activeSection ? 'text-gray-950 dark:text-gray-200' : 'text-gray-500 dark:text-gray-500'}`
								)}
								href={`/${menuItem.hash}`}
								onClick={() => {
									setActiveSection(menuItem.hash)
									setTimeOfLastClick(Date.now())
								}}
							>
								{menuItem.content}
								{menuItem.hash === activeSection && (
									<motion.span
										className="absolute inset-0 -z-10 rounded-full bg-gray-200 bg-opacity-55 dark:bg-gray-700 dark:bg-opacity-30"
										layoutId="activeSection"
										transition={{
											type: 'spring',
											stiffness: 380,
											damping: 30
										}}
									></motion.span>
								)}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export { Header }
