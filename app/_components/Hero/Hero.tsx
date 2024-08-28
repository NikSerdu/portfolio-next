import { FC } from 'react'
import { IoCodeDownload } from 'react-icons/io5'

import Xmark from '@/shared/ui/Xmark/Xmark'
import cn from 'clsx'
import styles from './Hero.module.scss'
const Hero: FC = () => {
	return (
		<section id='home' className={styles.hero}>
			<img src='lines.png' alt='Lines' className='absolute left-0' />
			<div className={cn('container', styles.content)}>
				<div className={styles['content__text']}>
					<h2>Full-Stack web developer</h2>
					<h1>Serduchenko Nikolay</h1>
					<h3>I&#39;m a full-stack web developer and I really like my job.</h3>
				</div>
				<div className={styles['content__img']}>
					<img src='hero.png' alt='Lines' className={styles.lines} />
					<img src='bubble.png' alt='Lines' className={styles.bubble} />
				</div>
			</div>
			<Xmark className={styles['xmark-first']} />
			<Xmark className={styles['xmark-second']} />
			<div className={styles.cv}>
				<div className={styles['circle-first']}></div>
				<div className={styles['circle-second']}></div>
				{/* TODO add link to CV */}
				<a href='#' download className={styles.link}>
					<IoCodeDownload />
					<p>CV</p>
				</a>
			</div>
		</section>
	)
}

export default Hero
