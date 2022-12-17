import React from 'react'

const Navbar = () => {
	return (
		<>
			{' '}
			{/* <nav className="bg-black z-30  glass fixed bottom-0 left-0 col-span-4 px-4 xl:pt-4 border-2 border-white  border-solid grid">
				<ul className="grid grid-cols-3 col-span-4 place-items-center text-center"> */}
			{/* <li className="w-20 text-sm btn  hover:text-white  rounded-none hover:bg-black bg-slate-200 text-black">
						Nature
					</li>
					<li className="w-20 text-sm btn hover:text-white rounded-none hover:bg-black bg-slate-200 text-black">
						Auto
					</li>
					<li className="w-20 text-sm btn hover:text-white rounded-none hover:bg-black bg-slate-200 text-black">
						Family
					</li> */}
			<div className="btm-nav bg-black z-30  glass fixed bottom-0 left-0 col-span-4 px-4 pt-[-1rem]xl:pt-4 border-2 border-white  border-solid grid grid-cols-3 gap-8 ">
				<a href="#Nature">
					<div className="nav-item text-sm btn w-1/2  hover:text-white  rounded-none hover:bg-black bg-slate-200 text-black">
						Nature
					</div>
				</a>
				<a href="#Auto">
					<div className="nav-item text-sm btn w-1/2  hover:text-white  rounded-none hover:bg-black bg-slate-200 text-black">
						Auto
					</div>
				</a>
				<a href="#Family">
					<div className="nav-item text-sm btn w-1/2  hover:text-white  rounded-none hover:bg-black bg-slate-200 text-black">
						Family
					</div>
				</a>
			</div>
			{/* <img className="max-h-16 w-32" src="../images/logo.png" alt="" />
				</ul>
			</nav> */}
		</>
	)
}

export default Navbar
