import React from "react";

const SingleServiceCard = (props) => {
	const { packages } = props.singleService;

	return (
		<>
			{packages.map((singlePackage) => (
				<div
					key={singlePackage._id}
					className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8"
				>
					<h3 className="mb-4 text-2xl font-semibold">{singlePackage.packageName}</h3>
					<p className="font-light text-gray-500 sm:text-lg">
						{singlePackage.desc}
					</p>
					<div className="flex justify-center items-baseline my-8">
						<span className="mr-2 text-5xl font-extrabold">${singlePackage.usdPrice}</span>
						<span className="text-gray-600">/ BDT- {singlePackage.bdtPrice}</span>
					</div>
					{/* List */}
					<ul className="mb-8 space-y-4 text-left">
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
							<span>{singlePackage.feature01}</span>
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
							<span>{singlePackage.feature02}</span>
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
								<span className="font-semibold">{singlePackage.feature03}</span>
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
							<span><span className="font-semibold">{singlePackage.feature04}</span>
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
								<span className="font-semibold">{singlePackage.feature05}</span>
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
								<span className="font-semibold">{singlePackage.feature06}</span>
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
								<span className="font-semibold">{singlePackage.feature07}</span>
							</span>
						</li>
					</ul>
					<a
						href="/"
						className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>
						Get started
					</a>
				</div>
			))}
		</>
	);
};

export default SingleServiceCard;
