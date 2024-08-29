import { FC } from 'react'
import { projects } from './data'

import Project from './Project/Project'

import Xmark from '@/shared/ui/Xmark/Xmark'
import Image from 'next/image'
import styles from './Projects.module.scss'

const Projects: FC = () => {
	return (
		<section id='projects' className='container'>
			<h2 className={styles.title}>My projects</h2>
			<div className={styles['projects-block']}>
				<Image
					src='points.png'
					alt='Point pattern'
					className={styles['points-top']}
				/>
				<Image
					src='points.png'
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
				{/* <Link href={"/projects"} className={styles.link}>
          See more projects
          <MdOutlineKeyboardDoubleArrowRight />
        </Link> */}
			</div>
		</section>
	)
}

export default Projects
