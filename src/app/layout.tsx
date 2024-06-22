import '@/styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import { Header } from '@/components/header'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/provider/theme-provider'

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
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Header />
					{children}
					<TailwindIndicator />
					<ThemeToggle />
				</ThemeProvider>
			</body>
		</html>
	)
}
