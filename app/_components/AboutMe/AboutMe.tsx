import Button from '@/shared/ui/Button/Button'
import Link from 'next/link'
import { FC } from 'react'
import styles from './AboutMe.module.scss'

const AboutMe: FC = () => {
	return (
		<section id='about-me' className={styles['about-me']}>
			<div className='container flex justify-between'>
				<div className={styles['img-block']}>
					<img
						src='about-img.png'
						alt='About me img'
						className={styles['main-img']}
					/>
					<img src='bubble.png' alt='Bubble img' className={styles.bubble} />
				</div>
				<div className={styles.content}>
					<div className={styles.title}>
						<h2 className=''>
							About <br /> me
						</h2>
						<img src='arrow-right.png' alt='Right arrow' />
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
			<img src='points.png' alt='Points img' className={styles['points']} />
		</section>
	)
}

export default AboutMe
