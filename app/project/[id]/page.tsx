'use client'
import { projects } from '@/app/_components/Projects/data'
import { IProject } from '@/shared/types/project.interface'
import { GitHub } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Page({ params }: { params: { id: string } }) {
	const { githubUrl, images, name, stack, description } = projects[
		+params.id - 1
	] as IProject

	const { back } = useRouter()

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'flex-start',
					padding: 3,
					color: '#a1a1a1',
					backgroundColor: '#131313',
					gap: '30px',
					'@media (max-width: 1024px)': {
						flexDirection: 'column',
					},
				}}
			>
				<Box className='max-lg:w-4/5 w-1/2 max-lg:mx-auto max-[850px]:w-full'>
					<Swiper
						modules={[Navigation, A11y, Pagination]}
						slidesPerView={1}
						navigation
						autoHeight
						centeredSlides
						pagination={{ clickable: true }}
						style={{ width: '100%' }}
					>
						{images.map(img => {
							return (
								<SwiperSlide key={img.src}>
									<Image
										src={img.src}
										alt={img.alt}
										width={1000}
										height={1000}
										style={{
											objectFit: 'cover',
											marginRight: 20,
											borderRadius: 8,
										}}
									/>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</Box>

				<Box>
					<Typography
						variant='h4'
						gutterBottom
						style={{ color: '#ffffff' }}
						fontWeight={900}
					>
						{name}
					</Typography>
					<Typography variant='h6' gutterBottom style={{ color: '#a1a1a1' }}>
						{description}
					</Typography>
					<Typography variant='h6' gutterBottom style={{ color: '#a1a1a1' }}>
						<strong>Stack: </strong>
						{stack.join(', ')}
					</Typography>
					<Box>
						{githubUrl !== '' && (
							<IconButton>
								<a href={githubUrl} target='_blank' rel='noopener noreferrer'>
									<GitHub sx={{ fontSize: '2em' }} />
								</a>
							</IconButton>
						)}
					</Box>
				</Box>
			</Box>
		</>
	)
}
