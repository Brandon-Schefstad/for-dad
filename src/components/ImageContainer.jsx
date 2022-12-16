import React from 'react'

const ImageContainer = ({ src, alt, classList, before, after }) => {
	return (
		<div
			// before={before}
			after={after}
			className={
				classList +
				' ' +
				` relative before:absolute before:inset-0 before:z-[10] bg:h-full bg:w-full before:bg-black before:bg-opacity-30 before:content-[attr(before)] before:text-white before:grid before:text-3xl before:place-items-center after:absolute after:inset-1 after:mt-20 after:z-[20] bg:h-full bg:w-full  after:bg-opacity-40 after:content-[attr(after)] after:text-white after:grid after:place-items-center before:hover:bg-opacity-0 after:hover:bg-opacity-0 before:hover:place-items-start after:hover:place-items-start after:hover:mt-8 before:hover:text-red-200 before:hover:text- after:hover:text-red-200 after:text-xl after:md:text-2xl after:lg:text-3xl after:xl:text-5xl`
			}>
			<img src={src} alt={alt} />
		</div>
	)
}

export default ImageContainer
