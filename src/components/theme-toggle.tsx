'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

const ThemeToggle = () => {
	const { setTheme, theme } = useTheme()

	return (
		<Button
			variant="outline"
			size="icon"
			className="fixed bottom-5 right-5 z-[999] flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-10 bg-white bg-opacity-70 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-gray-600/30 dark:bg-black dark:bg-opacity-25 dark:text-gray-300"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}

export { ThemeToggle }
