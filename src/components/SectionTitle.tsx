import React from 'react'

const SectionTitle = ({ title, classList }) => {
	return (
		<div
			className={`${classList} m-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center col-span-7 `}>
			<h3 className="slider left">{title}</h3>
		</div>
	)
}

export default SectionTitle
