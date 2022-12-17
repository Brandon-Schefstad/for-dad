import React from 'react'

const ImageContainer = ({ src, alt, classList, before, after }) => {
	let textBGClass
	if (after && after.length > 1) {
		textBGClass =
			' after:absolute after:inset-1 after:mt-20 after:z-[20] after:w-[80%] after:m-auto after:bg-black after:bg-opacity-20 after:content-[attr(after)] after:text-white after:grid after:place-items-center after:hover:bg-opacity-50 after:hover:place-items-center after:hover:mt-8 after:hover:text-red-200 after:text-xl after:md:text-2xl after:lg:text-3xl after:xl:text-5xl after:h-24 after:hover:h-12'
	}

	return (
		<div
			// before={before}
			after={after}
			className={
				classList +
				textBGClass +
				' ' +
				` relative before:absolute before:inset-0 before:z-[10] bg:h-full before:bg-black before:bg-opacity-10 before:content-[attr(before)] before:text-white before:grid before:text-3xl before:place-items-center  bg:h-full bg:w-full  before:hover:bg-opacity-0  before:hover:place-items-start  before:hover:text-red-200 before:hover:text- `
			}>
			<img src={src} alt={alt} />
		</div>
	)
}

export default ImageContainer
