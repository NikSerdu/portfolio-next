import { useMenuStore } from '@/store/menuStore'
import { useEffect } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'

export const useActiveMenuItem = (url: string) => {
	const { isIntersecting, ref } = useIntersectionObserver({
		threshold: 0.1,
	})
	const { setActiveMenuItem } = useMenuStore()
	useEffect(() => {
		if (isIntersecting) {
			setActiveMenuItem(url)
		}
	}, [isIntersecting])
	return {
		ref,
	}
}
