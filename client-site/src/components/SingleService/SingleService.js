import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleService = () => {
	const [singleService, setSingleService] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const url = `https://true-syrup-08129.herokuapp.com/services/${id}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setSingleService(data));
	}, [id]);

	return (
		<>
			<section id="eng" className="bg-white">
				<div className="container mx-auto px-4 md:px:14 lg:px-24 py-12 md:py-16 lg:py-24">
					<div className="">
						<h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
							{singleService?.name} service pricing
						</h2>
						<p className="mb-5 font-light text-gray-500 sm:text-lg">
							Here at Oleander IT we focus on markets where technology,
							innovation, and capital can unlock long-term value and drive
							economic growth.
						</p>
					</div>
					<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 mt-10">
						{/* Pricing Card */}
						<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
							<h3 className="mb-4 text-2xl font-semibold">Starter</h3>
							<p className="font-light text-gray-500 sm:text-lg">
								Best option for personal use & for your next project.
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-5xl font-extrabold">$29</span>
								<span className="text-gray-500text-gray-400">/month</span>
							</div>
							{/* List */}
							<ul role="list" className="mb-8 space-y-4 text-left">
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>Individual configuration</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>No setup, or hidden fees</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>
										Team size:{" "}
										<span className="font-semibold">1 developer</span>
									</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>
										Premium support:{" "}
										<span className="font-semibold">6 months</span>
									</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>
										Free updates:{" "}
										<span className="font-semibold">6 months</span>
									</span>
								</li>
							</ul>
							<a
								href="#"
								className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							>
								Get started
							</a>
						</div>
						{/* Pricing Card */}
						<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
							<h3 className="mb-4 text-2xl font-semibold">Company</h3>
							<p className="font-light text-gray-500 sm:text-lg">
								Relevant for multiple users, extended & premium support.
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-5xl font-extrabold">$99</span>
								<span className="text-gray-500">/month</span>
							</div>
							{/* List */}
							<ul role="list" className="mb-8 space-y-4 text-left">
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>Individual configuration</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>No setup, or hidden fees</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>
										Team size:{" "}
										<span className="font-semibold">10 developers</span>
									</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>
										Premium support:{" "}
										<span className="font-semibold">24 months</span>
									</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>
										Free updates:{" "}
										<span className="font-semibold">24 months</span>
									</span>
								</li>
							</ul>
							<a
								href="#"
								className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							>
								Get started
							</a>
						</div>
						{/* Pricing Card */}
						<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
							<h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
							<p className="font-light text-gray-500 sm:text-lg">
								Best for large scale uses and extended redistribution rights.
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-5xl font-extrabold">$499</span>
								<span className="text-gray-500">/month</span>
							</div>
							{/* List */}
							<ul role="list" className="mb-8 space-y-4 text-left">
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>Individual configuration</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>No setup, or hidden fees</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>
										Team size:{" "}
										<span className="font-semibold">100+ developers</span>
									</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>
										Premium support:{" "}
										<span className="font-semibold">36 months</span>
									</span>
								</li>
								<li className="flex items-center space-x-3">
									{/* Icon */}
									<svg
										className="flex-shrink-0 w-5 h-5 text-green-500"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>
										Free updates:{" "}
										<span className="font-semibold">36 months</span>
									</span>
								</li>
							</ul>
							<a
								href="#"
								className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							>
								Get started
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SingleService;
