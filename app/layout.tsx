import { darkTheme } from '@/shared/utils/darkTheme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Nik S. | Project',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<body className={montserrat.className}>
					<div className='dark:bg-black dark:text-white bg-white '>
						{children}
					</div>
				</body>
			</ThemeProvider>
		</html>
	)
}
