'use client'
import { KeyboardBackspace } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from './ToBack.module.scss'
const ToBack: FC = () => {
	const router = useRouter()
	return (
		<KeyboardBackspace
			onClick={() => router.push('/#projects')}
			className={styles['to-back']}
			fontSize='large'
		/>
	)
}

export default ToBack
