import { GeistSans } from 'geist/font/sans'

import { Header } from '@/components/header'
import { TailwindIndicator } from '@/components/shared/tailwind-indicator'
import { ThemeToggle } from '@/components/theme-toggle'
import { ActiveSectionProvider } from '@/providers/active-section-provider'
import { ThemeProvider } from '@/providers/theme-provider'

import '@/styles/globals.css'

import ReactQueryProvider from '@/providers/react-query-provider'

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
		<html
			lang="en"
			className={`${GeistSans.variable} !scroll-smooth`}
			suppressHydrationWarning={true}
		>
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<ActiveSectionProvider>
						<Header />
						<ReactQueryProvider>{children}</ReactQueryProvider>
						<TailwindIndicator />
						<ThemeToggle />
					</ActiveSectionProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
