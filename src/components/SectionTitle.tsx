import React from 'react'

const SectionTitle = ({ title, classList }) => {
	return (
		<div
			className={`m-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center col-span-7 ${classList}`}>
			<h3>{title}</h3>
		</div>
	)
}

export default SectionTitle
