import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'
import '../dist/output.css'

import alaska_1 from '../images/alaska-1.jpg'
import alaska_2 from '../images/alaska-2.jpg'
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
// Components
// import Image from '../components/Image'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import ImageContainer from '../components/ImageContainer'
import Navbar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
const IndexPage: React.FC<PageProps> = () => {
	const gap = 4
	return (
		<>
			<body className="text-white bg-black min-h-screen pb-48 max-w-[1700px] m-auto xl:px-8">
				<section className="wrapper grid grid-cols-7 px-2">
					<Navbar />
					<section className="hero relative grid grid-cols-7 col-span-7 mb-12">
						<img src={bird} className="relative -z-0 col-span-6 col-start-2" />
						<section className="intro col-start-1 mb-20 absolute glass px-4 py-2 left-[32px] xl:px-8 xl:py-4">
							<h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-4">
								TAS Photography
							</h1>
							<p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
								Capturing <span className="text-blue-900">memories</span> for
								over 20 years
							</p>
						</section>
					</section>
					<section className={`relative nature col-span-7 grid gap-4`}>
						<img src={fox_image} alt="" />
						<h2 className="absolute text-2xl md:text-3xl lg:text-4xl xl:text-6xl  translate-y-1/2 px-8 glass">
							Nature
						</h2>
						<section className={`nature--pictures grid grid-cols-7 gap-6`}>
							<img className={'col-span-7'} src="../images/bird-2.jpg" alt="" />
							<SectionTitle title={'From Yosemite'} classList={'mt-[-1rem]'} />

							<ImageContainer
								classList={'col-span-7 place-self-center  '}
								src={yosemite}
								alt=""
								before={'Yosemite'}
								after={'El Capitan'}
							/>

							<div className={`column col-span-4 grid gap-${gap} col-start-1`}>
								<ImageContainer
									classList={`column col-span-4 col-start-1`}
									src={tree_image_2}
									alt=""
									before={'Yosemite'}
									after={'Sequoia Tree'}
								/>
								<section className={'title-wrapper col-span-4'}>
									<SectionTitle title={'To Alaska'} />
									<FontAwesomeIcon
										icon={faArrowDown}
										className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl m-auto self-center justify-self-center"
									/>
								</section>
							</div>

							<div className={`column grid col-span-3 gap-4`}>
								<ImageContainer
									classList={`column grid col-span-3`}
									src={rock_image}
									alt=""
									before={'Yosemite'}
									// after={'Boulder'}
								/>
								<ImageContainer
									classList={`column grid col-span-3`}
									src={tree_image_1}
									alt=""
									before={'Yosemite'}
									// after={'Seqouia'}
								/>
							</div>
							<section className={`alaska col-span-7 grid gap-${gap}`}>
								<ImageContainer
									src={alaska_1}
									classList={'col-span-7'}
									before={'Alaska'}
									after={"Ranier's Pass"}
								/>
								<ImageContainer
									src={alaska_2}
									classList={'col-span-7'}
									before={'Yosemite'}
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
									classList={`column col-span-4 gap-${gap} self-center`}
									src={flower_1}
									alt=""
									before={'Yosemite'}
									// after={'Seqouia'}
								/>
								<ImageContainer
									classList={`column grid col-span-3 gap-${gap}`}
									src={flower_3}
									alt=""
									before={'Yosemite'}
									// after={'Seqouia'}
								/>
								<ImageContainer
									classList={`column grid col-span-3 gap-${gap} self-center`}
									src={flower_4}
									alt=""
									before={'Yosemite'}
									// after={'Seqouia'}
								/>
								<ImageContainer
									classList={`column grid col-span-4 self-center`}
									src={flower_2}
									alt=""
									before={'Yosemite'}
									// after={'Seqouia'}
								/>
							</section>
						</section>
					</section>
				</section>
			</body>{' '}
		</>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
