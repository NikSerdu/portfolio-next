import Image from 'next/image'
import { FC } from 'react'
import styles from './Contact.module.scss'
import { data } from './data'

const Contact: FC = () => {
	return (
		<section id='contact' className={styles.contact}>
			<Image
				src='arc.png'
				alt='Arc'
				className={styles.arc}
				width={300}
				height={200}
			/>
			<Image src='points.png' alt='Points' className={styles.points} />
			<div className='container'>
				<h2 className='text-center'>Contact me</h2>
				<div className={styles['contact-block']}>
					{data.map(item => (
						<a
							href={item.href}
							className={styles['contact-block__link']}
							key={item.href}
						>
							{item.icon}
							{item.text}
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default Contact
