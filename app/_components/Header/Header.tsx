'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'

import { DarkModeSwitch } from 'react-toggle-dark-mode'
import styles from './Header.module.scss'

import { useColorMode } from '@/shared/hooks/useColorMode'
import Button from '@/shared/ui/Button/Button'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'
import cn from 'clsx'
import Link from 'next/link'

export const menuData = [
	{
		name: 'Home',
		href: '#',
	},
	{
		name: 'Skills',
		href: '#skills',
	},
	{
		name: 'Projects',
		href: '#projects',
	},
	{
		name: 'Contact',
		href: '#contact',
	},
]

const Header: FC = () => {
	const [activeMenuItem, setActiveMenuItem] = useState<string>('#')
	const { colorMode, handleChange } = useColorMode()

	useEffect(() => {
		setActiveMenuItem(window.location.hash || '#')
	}, [])

	return (
		<>
			<header className={cn('container', styles.header)}>
				<Link href={'/'} className={styles.name}>
					Nikolay S.
				</Link>
				<nav>
					<ul>
						{menuData.map(item => (
							<li
								key={item.name + item.href}
								onClick={() => setActiveMenuItem(item.href)}
							>
								<a href={item.href}>{item.name}</a>
								<AnimatePresence>
									{activeMenuItem === item.href && (
										<motion.div
											initial={{ scaleX: 0 }}
											animate={{ scaleX: 1 }}
											exit={{ scaleX: 0 }}
											style={{ transformOrigin: 'center' }}
											transition={{ duration: 0.3 }}
										></motion.div>
									)}
								</AnimatePresence>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles['switch-theme']}>
					<span>Light</span>
					<Checkbox isChecked={colorMode === 'dark'} onChange={handleChange} />
					<span>Dark</span>
				</div>
				<a href='#contact' className=''>
					<Button className='font-bold dark:bg-opacity-50'>Contact me</Button>
				</a>
			</header>

			<header className={styles['mobile-header']}>
				<nav>
					<ul>
						{menuData.map(item => (
							<li key={item.name + item.href}>
								<a
									href={item.href}
									onClick={() => setActiveMenuItem(item.href)}
								>
									{item.name}
								</a>
								<AnimatePresence>
									{activeMenuItem === item.href && (
										<motion.div
											initial={{ scaleX: 0 }}
											animate={{ scaleX: 1 }}
											exit={{ scaleX: 0 }}
											style={{ transformOrigin: 'center' }}
											transition={{ duration: 0.3 }}
										></motion.div>
									)}
								</AnimatePresence>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles['switch-theme']} onClick={handleChange}>
					<DarkModeSwitch
						checked={colorMode === 'dark'}
						onChange={handleChange}
						size={27}
					/>
				</div>
			</header>
		</>
	)
}

export default Header
