'use client'
import { FC } from 'react'
import { projects } from './data'

import Project from './Project/Project'

import { useActiveMenuItem } from '@/shared/hooks/useActiveMenuItem'
import Xmark from '@/shared/ui/Xmark/Xmark'
import Image from 'next/image'
import styles from './Projects.module.scss'

const Projects: FC = () => {
	const { ref } = useActiveMenuItem('#projects')
	return (
		<section id='projects' className='container' ref={ref}>
			<h2 className={styles.title}>My projects</h2>
			<div className={styles['projects-block']}>
				<Image
					width={274}
					height={75}
					src='/points.png'
					alt='Point pattern'
					className={styles['points-top']}
				/>
				<Image
					width={274}
					height={75}
					src='/points.png'
					alt='Points pattern'
					className={styles['points-bottom']}
				/>
				<Xmark className={styles.xmark} />
				{projects.map((project, index) => {
					return (
						<Project
							project={project}
							orientation={index % 2 === 0 ? 'left' : 'right'}
							key={project.previewUrl}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default Projects
