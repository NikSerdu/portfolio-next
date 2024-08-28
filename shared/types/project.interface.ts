export interface IProject {
	id: number
	name: string
	date: string
	previewUrl: string
	width: number
	height: number
	stack: string[]
	images: {
		src: string
		alt: string
	}[]
	githubUrl: string
}
