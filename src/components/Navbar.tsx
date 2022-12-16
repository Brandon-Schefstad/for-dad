import React from 'react'

const Navbar = () => {
	return (
		<>
			{' '}
			<nav className="bg-black z-30 col-span-7 left-0 pt-2 xl:pt-4 fixed w-full grid">
				<ul className="grid place-items-center gap-6 grid-cols-3 w-full text-center">
					<li className="w-full text-sm btn hover:text-white  rounded-none hover:bg-black bg-slate-200 text-black">
						Nature
					</li>
					<li className="w-full text-sm btn hover:text-white rounded-none hover:bg-black bg-slate-200 text-black">
						Auto
					</li>
					<li className="w-full text-sm btn hover:text-white rounded-none hover:bg-black bg-slate-200 text-black">
						Family
					</li>

					<img className="max-h-16 w-32" src="../images/logo.png" alt="" />
				</ul>
			</nav>
		</>
	)
}

export default Navbar
