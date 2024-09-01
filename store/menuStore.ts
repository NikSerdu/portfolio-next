import { create } from 'zustand'
interface MenuState {
	activeMenuItem: string
	setActiveMenuItem: (url: string) => void
}
export const useMenuStore = create<MenuState>(set => ({
	activeMenuItem: '#',
	setActiveMenuItem: url => set(() => ({ activeMenuItem: url })),
}))
