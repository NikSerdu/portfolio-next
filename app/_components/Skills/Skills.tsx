'use client'
import { useActiveMenuItem } from '@/shared/hooks/useActiveMenuItem'
import Image from 'next/image'
import { FC } from 'react'
import { data } from './data'
import Skill from './Skill/Skill'
import styles from './Skills.module.scss'
const Skills: FC = () => {
	const { ref } = useActiveMenuItem('#skills')
	return (
		<section id='skills' className='container' ref={ref}>
			<div className={styles.title}>
				<h2>My skills</h2>
				<Image
					width={544}
					height={71}
					src='/arrow-left.png'
					alt='Arrow to left'
				/>
			</div>
			<div className={styles['skills-block']}>
				{data.map(item => (
					<Skill icon={item.icon} name={item.name} key={item.name} />
				))}
			</div>
		</section>
	)
}

export default Skills
