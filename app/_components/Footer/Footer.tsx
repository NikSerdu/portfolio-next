'use client'
import Link from 'next/link'
import { FC } from 'react'
import { menuData } from '../Header/Header'

const Footer: FC = () => {
	return (
		<footer className='container border-t border-primary py-5 mt-5 flex md:justify-between max-[768px]:flex-col items-center max-[1024px]:pb-20'>
			<Link
				href={'/'}
				className='font-bold text-2xl dark:text-white text-black py-3'
			>
				Nikolay S.
			</Link>
			<nav className='text-gray-500 text-lg font-extrathin'>
				<ul className='flex items-center gap-8 max-[768px]:flex-col'>
					{menuData.map(item => (
						<li key={'footer' + item.name}>
							<a href={`/${item.href}`}>{item.name}</a>
						</li>
					))}
				</ul>
			</nav>
		</footer>
	)
}

export default Footer
