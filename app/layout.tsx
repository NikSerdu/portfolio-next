import { darkTheme } from '@/shared/utils/darkTheme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from './_components/Footer/Footer'
import Header from './_components/Header/Header'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Nik S. | Portfolio',
	description: 'Portfolio of fullstack developer',
}

export default function RootLayout({
	children,
	project,
}: Readonly<{
	children: React.ReactNode
	project: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<body className={montserrat.className}>
					<div className='dark:bg-black dark:text-white bg-white pt-5'>
						<Header />
						{children}
						{project}
						<Footer />
					</div>
				</body>
			</ThemeProvider>
		</html>
	)
}
