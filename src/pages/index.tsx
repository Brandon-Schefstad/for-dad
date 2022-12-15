import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'
import '../dist/output.css'

import alaska_1 from '../images/alaska-1.jpg'
import alaska_2 from '../images/alaska-2.jpg'
import bird from '../images/bird-hero.png'
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
const IndexPage: React.FC<PageProps> = () => {
	const gap = 4
	return (
		<>
			<body className="text-white bg-black min-h-screen pb-48">
				<Navbar />
				<section className="wrapper grid grid-cols-7">
					<section className="hero relative grid grid-cols-7 col-span-7 mb-12">
						<img src={bird} className="relative -z-0 col-span-6 col-start-2" />
						<section className="intro col-start-1 mb-20 absolute glass px-4 py-2 left-[32px]">
							<h1 className="text-2xl mb-4">TAS Photography</h1>
							<p>
								Capturing <span className="text-blue-900">memories</span> for
								over 20 years
							</p>
						</section>
					</section>
					<section className={`relative nature col-span-7 grid gap-${gap}`}>
						<img src={fox_image} alt="" />
						<h2 className="absolute text-3xl translate-y-1/2 px-8 glass">
							Nature
						</h2>
						<section className={`nature--pictures grid grid-cols-7 gap-${gap}`}>
							<img className={'col-span-7'} src="../images/bird-2.jpg" alt="" />
							<h3
								className={' col-start-1 col-span-7 text-center text-2xl mb-2'}>
								From Yosemite
							</h3>
							<ImageContainer
								classList={'col-span-7 place-self-center  '}
								src={yosemite}
								alt=""
								before={'Yosemite'}
								after={'El Capitan'}
							/>

							<div className={`column col-span-4 grid gap-${gap} col-start-1`}>
								<ImageContainer
									classList={`column col-span-4 grid gap-${gap} col-start-1`}
									src={tree_image_2}
									alt=""
									before={'Yosemite'}
									after={'Sequoia Tree'}
								/>
								<section
									className={
										'title-wrapper grid place-items-center mx-auto col-start-2 col-span-2'
									}>
									<h3 className={'text-center text-2xl mt-[-20px] '}>
										To Alaska
									</h3>
									<FontAwesomeIcon
										icon={faArrowDown}
										className="m-auto text-2xl"
									/>
								</section>
							</div>

							<div className={`column grid col-span-3 gap-${gap}`}>
								<ImageContainer
									classList={`column grid col-span-3 gap-${gap}`}
									src={rock_image}
									alt=""
									before={'Yosemite'}
									after={'Boulder'}
								/>
								<ImageContainer
									classList={`column grid col-span-3 gap-${gap}`}
									src={tree_image_1}
									alt=""
									before={'Yosemite'}
									after={'Seqouia'}
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
							<section className={`florida col-span-7 grid gap-${gap}`}>
								<h1 className={`col-span-7 text-center text-3xl`}>
									{' '}
									And Back To Florida{' '}
								</h1>
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
