import '@/styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import Header from '@/components/header'
import { TailwindIndicator } from '@/components/tailwind-indicator'

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
			<body className="relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36">
				<div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
				<div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

				<Header />
				{children}

				<TailwindIndicator />
			</body>
		</html>
	)
}
