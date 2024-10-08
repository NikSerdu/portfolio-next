import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Nik S. | Project',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <div className='bg-black pt-5'>{children}</div>
}
