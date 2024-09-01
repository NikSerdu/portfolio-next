'use client'
import { useActiveMenuItem } from '@/shared/hooks/useActiveMenuItem'
import Button from '@/shared/ui/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './AboutMe.module.scss'

const AboutMe: FC = () => {
	const { ref } = useActiveMenuItem('#about')
	return (
		<section id='about' className={styles['about-me']} ref={ref}>
			<div className='container flex justify-between'>
				<div className={styles['img-block']}>
					<img
						width={620}
						height={620}
						src='/about-img.png'
						alt='About me img'
						className={styles['main-img']}
					/>
					<Image
						width={154}
						height={154}
						src='/bubble.png'
						alt='Bubble img'
						className={styles.bubble}
					/>
				</div>
				<div className={styles.content}>
					<div className={styles.title}>
						<h2 className=''>
							About <br /> me
						</h2>
						<Image
							width={103}
							height={71}
							src='/arrow-right.png'
							alt='Right arrow'
						/>
					</div>
					<div className={styles.description}>
						<p>
							I have been engaged in web development since 2022, with the main
							focus on frontend development. I participate with my team in
							hackathons, where I perform in TeamLead or Fullstack developer
						</p>
						<Link href={'#contact'}>
							<Button className='mt-6'>Contact me</Button>
						</Link>
					</div>
				</div>
			</div>
			<Image
				width={274}
				height={75}
				src='/points.png'
				alt='Points img'
				className={styles['points']}
			/>
		</section>
	)
}

export default AboutMe
