import React from 'react'

const Navbar = () => {
	return (
		<>
			{' '}
			<nav className="bg-black z-10 flex justify-end col-span-7 pb-4 pt-2">
				<ul className="grid place-items-center gap-6 grid-cols-7 justify-evenly w-full text-center">
					<li className="w-full col-start-3 btn rounded-none bg-slate-200 text-black">
						Nature
					</li>
					<li className="w-full col-start-4 btn rounded-none bg-slate-200 text-black">
						Auto
					</li>
					<li className="w-full col-start-5 btn rounded-none bg-slate-200 text-black">
						Travel
					</li>
					<li className="w-full col-start-6 btn rounded-none bg-slate-200 text-black">
						Highlights
					</li>
					<img className="max-h-16 w-32" src="../images/logo.png" alt="" />
				</ul>
			</nav>
		</>
	)
}

export default Navbar
