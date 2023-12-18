import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CustomProvider from '@/redux/provider'
import '@/styles/globals.css'
import { Navbar, Footer } from '@/components/common'
import { Setup } from '@/components/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maxicom',
  description: 'Maxicom application that provides jwt authentication.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<CustomProvider>
					<Setup />
					<Navbar />
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8'>
						{children}
					</div>
					<Footer />
				</CustomProvider>
			</body>
		</html>
	)
}
