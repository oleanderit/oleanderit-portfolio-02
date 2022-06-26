import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<div className="w-full fixed z-50 bg-gray-50 shadow">
				<div className="container px-4 md:px:6 lg:px-8 py-3 mx-auto">
					<div className="relative flex items-center justify-between">
						<NavLink to="/" className="inline-flex items-center">
							<span className="text-blue-600 text-2xl">Oleander IT</span>
						</NavLink>
						<ul className="flex items-center hidden space-x-8 lg:flex gap-4">
							<li>
								<NavLink
									to="/about"
									className="text-base font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-gray-900"
									activeClassName="text-gray-900"
								>
									About us
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/services"
									className="text-base font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-gray-900"
									activeClassName="text-gray-900"
								>
									Services
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/projects"
									className="text-base font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-gray-900"
									activeClassName="text-gray-900"
								>
									Projects
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/blogs"
									className="text-base font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-gray-900"
									activeClassName="text-gray-900"
								>
									Blogs
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact"
									className="text-base font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-gray-900"
									activeClassName="text-gray-900"
								>
									Contact
								</NavLink>
							</li>
							{/* <li>
								<NavLink
									to="/home"
									className="text-base font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-gray-900"
									activeClassName="text-gray-900"
								>
									Admin
								</NavLink>
							</li> */}
						</ul>
						{/* <ul className="flex items-center hidden space-x-4 lg:flex">
							<li>
								<NavLink
									to="/login"
									className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-800 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
								>
									<span>Log in</span>
									<span className="mt-1 ml-2">
										<i className="fas fa-sign-in-alt"></i>
									</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/register"
									className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded border border-gray-300 hover:border-gray-700 focus:shadow-outline focus:outline-none"
									
								>
									Register
								</NavLink>
							</li>
						</ul> */}
						<div className="lg:hidden">
							<button
								className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
								onClick={() => setIsMenuOpen(true)}
							>
								<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
									/>
									<path
										fill="currentColor"
										d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
									/>
									<path
										fill="currentColor"
										d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
									/>
								</svg>
							</button>
							{isMenuOpen && (
								<div className="absolute top-0 left-0 w-full z-50">
									<div className="p-5 bg-white border rounded shadow-sm">
										<div className="flex items-center justify-between mb-4">
											<div className="block mx-auto">
												<NavLink to="/" className="inline-flex items-center">
													<span className="text-blue-600 text-2xl">
														Oleander IT
													</span>
												</NavLink>
											</div>
											<div>
												<button
													className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
													onClick={() => setIsMenuOpen(false)}
												>
													<svg
														className="w-5 text-gray-600"
														viewBox="0 0 24 24"
													>
														<path
															fill="currentColor"
															d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
														/>
													</svg>
												</button>
											</div>
										</div>
										<nav>
											<ul className="space-y-4 text-center">
												<li className="pt-5 pb-3">
													<NavLink
														to="/about"
														className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-gray-900"
														activeClassName="text-gray-900"
													>
														About us
													</NavLink>
												</li>
												<li className="py-3">
													<NavLink
														to="/services"
														className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-gray-900"
														activeClassName="text-gray-900"
													>
														Services
													</NavLink>
												</li>
												<li className="py-3">
													<NavLink
														to="/projects"
														className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-gray-900"
														activeClassName="text-gray-900"
													>
														Projects
													</NavLink>
												</li>
												<li className="py-3">
													<NavLink
														to="/blogs"
														className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-gray-900"
														activeClassName="text-gray-900"
													>
														Blogs
													</NavLink>
												</li>
												<li className="py-3">
													<NavLink
														to="/contact"
														className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-gray-900"
														activeClassName="text-gray-900"
													>
														Contact
													</NavLink>
												</li>
												{/* <li className="py-3">
													<NavLink
														to="/home"
														
														className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-gray-900"
														activeClassName="text-gray-900"
													>
														Admin
													</NavLink>
												</li> */}
												{/* <li>
													<NavLink
														to="/register"
														className="inline-flex items-center justify-center w-3/4 h-10 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded border border-gray-300 hover:border-gray-700 focus:shadow-outline focus:outline-none"
													
													>
														Register
													</NavLink>
												</li> */}
												{/* <li>
													<NavLink
														to="/login"
														className="inline-flex items-center justify-center w-3/4 h-10 px-5 font-medium tracking-wide text-white transition duration-200 rounded bg-gray-800 hover:bg-gray-600 focus:shadow-outline focus:outline-none"
													>
														<span>Log in</span>
														<span className="mt-1 ml-2">
															<i className="fas fa-sign-in-alt"></i>
														</span>
													</NavLink>
												</li> */}
											</ul>
										</nav>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
