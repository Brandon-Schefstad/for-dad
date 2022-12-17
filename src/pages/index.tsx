import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'
import '../dist/output.css'

import alaska_1 from '../images/alaska-1.jpg'
import alaska_2 from '../images/alaska-2.jpg'
import auto_hero from '../images/auto-hero.jpg'
import bird from '../images/bird-hero.png'
import flower_1 from '../images/flower-1.jpg'
import flower_2 from '../images/flower-2.jpg'
import flower_3 from '../images/flower-3.jpg'
import flower_4 from '../images/flower-4.jpg'
import fox_image from '../images/fox.jpg'
import rock_image from '../images/rock-1.jpg'
import tree_image_1 from '../images/tree-1.jpg'
import tree_image_2 from '../images/tree-2.jpg'
import yosemite from '../images/yosemite-1.jpg'
// import car_long from '../images/car-long.jpg'
import mecum_1 from '../images/mecum-1.jpg'
import mecum_2 from '../images/mecum-2.jpg'
import mecum_3 from '../images/mecum-3.jpg'
import mecum_4 from '../images/mecum-4.jpg'
import sunset_1 from '../images/sunset-1.jpg'
import sunset_2 from '../images/sunset-2.jpg'
import sunset_3 from '../images/sunset-3.jpg'

// Components
// import Image from '../components/Image'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import ImageContainer from '../components/ImageContainer'
import Navbar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
const IndexPage: React.FC<PageProps> = () => {
	const scrollOffset = 250

	return (
		<>
			<body className="text-white bg-black min-h-screen pt-6 px-2 mb-24 max-w-[90%] m-auto xl:px-8">
				<section className="wrapper grid gap-2 ">
					<Navbar />
					<section className="hero relative grid grid-cols-7 gap-[1.25rem] col-span-7 mb-4 ">
						<img src={bird} className="relative -z-0 col-span-7 col-start-1" />
						<section className="intro col-start-1 mb-20 absolute glass px-4 py-2 xl:ml-[-12rem] xl:px-8 xl:py-4">
							<h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-4">
								TAS Photography
							</h1>
							<p className="text-md md:text-xl lg:text-3xl xl:text-4xl">
								Capturing <span className="text-blue-900">memories</span> for
								over 20 years
							</p>
						</section>
					</section>
					<section
						id="Nature"
						className={`relative nature col-span-7 grid gap-4`}>
						<img src={fox_image} alt="" />
						<h2 className="absolute text-2xl md:text-3xl lg:text-4xl xl:text-6xl  translate-y-1/2 px-8 glass">
							Nature
						</h2>
						<section className={`nature--pictures grid grid-cols-7 gap-6`}>
							<img className={'col-span-7'} src="../images/bird-2.jpg" alt="" />
							<SectionTitle title={'From Yosemite'} classList={' mt-[-1rem]'} />
							<ImageContainer
								classList={'col-span-7 place-self-center'}
								src={yosemite}
								alt=""
								before={''}
								after={''}
							/>

							<div className={`column col-span-4 grid col-start-1`}>
								<ImageContainer
									classList={`column col-span-4 col-start-1`}
									src={tree_image_2}
									alt=""
									before={''}
									after={'Sequoia Tree'}
								/>
								<section className={'title-wrapper col-span-4'}>
									<SectionTitle title={'To Alaska'} />
									<FontAwesomeIcon
										icon={faArrowDown}
										className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl block m-auto mt-2 "
									/>
								</section>
							</div>

							<div className={`column grid col-span-3 gap-4`}>
								<ImageContainer
									classList={`column grid col-span-3`}
									src={rock_image}
									alt=""
									before={''}
									// after={'Boulder'}
								/>
								<ImageContainer
									classList={`column grid col-span-3`}
									src={tree_image_1}
									alt=""
									before={''}
									// after={'Seqouia'}
								/>
							</div>
							<section className={`alaska col-span-7 gap-4 mt-[-0.5rem] grid `}>
								<ImageContainer
									src={alaska_1}
									classList={'col-span-7'}
									before={'Alaska'}
									after={"Ranier's Pass"}
								/>
								<ImageContainer
									src={alaska_2}
									classList={'col-span-7'}
									before={''}
									after={"'God Smiling on St. Andrews'"}
								/>
							</section>

							<section
								className={`florida col-span-7 grid gap-6 xl:gap-8 align-center`}>
								<SectionTitle
									title={'And Back To Florida'}
									classList={'mt-[-0.5rem]'}
								/>
								<ImageContainer
									classList={`column col-span-4  self-center`}
									src={flower_1}
									alt=""
									before={''}
									// after={'Seqouia'}
								/>
								<ImageContainer
									classList={`column grid col-span-3 `}
									src={flower_3}
									alt=""
									before={''}
									// after={'Seqouia'}
								/>
								<ImageContainer
									classList={`column grid col-span-3  self-center`}
									src={flower_4}
									alt=""
									before={''}
									// after={'Seqouia'}
								/>
								<ImageContainer
									classList={`column grid col-span-4 self-center`}
									src={flower_2}
									alt=""
									before={''}
									// after={'Seqouia'}
								/>
							</section>
						</section>
					</section>
					<section id="Auto" className="relative nature col-span-7 grid gap-4">
						<img src={auto_hero} alt="" />
						<h2 className="absolute right-0 text-2xl md:text-3xl lg:text-4xl xl:text-6xl  translate-y-1/2 px-8 glass">
							Automotive
						</h2>

						<section className={`auto--pictures grid grid-cols-7 gap-6`}>
							<SectionTitle title={'Mecum Auto Auction'} classList={''} />

							<ImageContainer
								classList={'col-span-7 place-self-center  '}
								src={mecum_1}
								alt=""
								before={''}
								after={''}
							/>
							<ImageContainer
								classList={'col-span-4 place-self-center  '}
								src={mecum_2}
								alt=""
								before={''}
								after={''}
							/>
							<ImageContainer
								classList={'col-span-3 col-start-5 place-self-center  '}
								src={mecum_4}
								alt=""
								before={''}
								after={''}
							/>
							<ImageContainer
								classList={'col-span-7 place-self-center  '}
								src={mecum_3}
								alt=""
								before={''}
								after={''}
							/>
						</section>
						<section className={`auto--pictures grid grid-cols-7 gap-6`}>
							<SectionTitle title={'Sunset Walk 2021'} classList={''} />

							<ImageContainer
								classList={'col-span-7 place-self-center  '}
								src={sunset_1}
								alt=""
								before={''}
								after={''}
							/>
							<ImageContainer
								classList={'col-span-4 place-self-center  '}
								src={sunset_2}
								alt=""
								before={''}
								after={''}
							/>
							<ImageContainer
								classList={'col-span-3 col-start-5 place-self-center  '}
								src={sunset_3}
								alt=""
								before={''}
								after={''}
							/>
						</section>
					</section>
				</section>
			</body>{' '}
		</>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
