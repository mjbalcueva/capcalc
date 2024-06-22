import '@/styles/globals.css'

import { GeistSans } from 'geist/font/sans'

import { Header } from '@/components/header'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeToggle } from '@/components/theme-toggle'
import { ActiveSectionProvider } from '@/providers/active-section-provider'
import { ThemeProvider } from '@/providers/theme-provider'

export const metadata = {
	title: 'CapCalc',
	description: 'A simple engineering calculator project',
	icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${GeistSans.variable}`}>
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<ActiveSectionProvider>
						<Header />
						{children}
						<TailwindIndicator />
						<ThemeToggle />
					</ActiveSectionProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
