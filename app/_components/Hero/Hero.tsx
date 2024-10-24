'use client'
import { useActiveMenuItem } from '@/shared/hooks/useActiveMenuItem'
import Xmark from '@/shared/ui/Xmark/Xmark'
import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { IoCodeDownload } from 'react-icons/io5'
import styles from './Hero.module.scss'
const Hero: FC = () => {
	const { ref } = useActiveMenuItem('#')
	return (
		<section id='home' className={styles.hero} ref={ref}>
			<Image
				src='/lines.png'
				alt='Lines'
				width={46}
				height={291}
				className='absolute left-0'
			/>
			<div className={cn('container', styles.content)}>
				<div className={styles['content__text']}>
					<h2>Full-Stack web developer</h2>
					<h1>Serduchenko Nikolay</h1>
					<h3>I&#39;m a full-stack web developer and I really like my job.</h3>
				</div>
				<div className={styles['content__img']}>
					<Image
						src='/hero.png'
						width={740}
						height={471}
						alt='Lines'
						className={styles.lines}
					/>
					<Image
						src='/tag.png'
						width={500}
						height={500}
						alt='HTML tag'
						className={styles.tag}
					/>
					<Image
						width={154}
						height={154}
						src='/bubble.png'
						alt='Lines'
						className={styles.bubble}
					/>
				</div>
			</div>
			<Xmark className={styles['xmark-first']} />
			<Xmark className={styles['xmark-second']} />
			<div className={styles.cv}>
				<div className={styles['circle-first']}></div>
				<div className={styles['circle-second']}></div>
				<a
					href='https://hh.ru/resume/c0ff4c90ff0dda8cc60039ed1f533749784450'
					className={styles.link}
				>
					<IoCodeDownload />
					<p>CV</p>
				</a>
			</div>
		</section>
	)
}

export default Hero
