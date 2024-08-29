import { IProject } from '@/shared/types/project.interface'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Project.module.scss'

type TypeProps = {
	project: IProject
	orientation: 'left' | 'right'
}

const Project: FC<TypeProps> = ({ orientation, project }) => {
	const { date, height, previewUrl, name, width, id } = project
	return (
		<>
			{orientation === 'left' ? (
				<Link
					href={`/project/${id}`}
					className={cn(styles['project-left'], styles.project)}
				>
					<Image src={previewUrl} alt='' width={width} height={height} />
					<div className={styles['project-left__title']}>
						<h3>{name}</h3>
						<span className={styles['project__date']}>{date}</span>
					</div>
				</Link>
			) : (
				<Link
					href={`/project/${id}`}
					className={cn(styles['project-right'], styles.project)}
				>
					<Image src={previewUrl} alt='' width={width} height={height} />
					<div className={styles['project-right__title']}>
						<h3>{name}</h3>
						<span className={styles['project__date']}>{date}</span>
					</div>
				</Link>
			)}
		</>
	)
}

export default Project
