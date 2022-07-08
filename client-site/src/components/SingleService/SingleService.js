import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Spinner from "../Extra/Spinner";
import SingleServiceCard from "./SingleServiceCard";

const SingleService = () => {
	// const [allData, setAllData] = useState([]);
	const [singleService, setSingleService] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { id } = useParams();

	// console.log(id);

	// if (singleService.length > 0) {
	// 	setIsLoading(true);
	// }

	useEffect(() => {
		const url = `https://true-syrup-08129.herokuapp.com/services/${id}`;
		// const url = `/services.JSON`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setSingleService(data);
				setIsLoading(false);
			});
	}, [id]);

	// if (!isLoading) {
	// 	console.log(singleService.packages);
	// }

	// useEffect(() => {
	// 	const singleService = allData.filter((data) => data.id === id);
	// 	console.log(singleService);
	// }, [id]);

	// console.log(allData);

	return (
		<>
			<section id="eng" className="bg-white">
				<div className="container mx-auto px-4 md:px:14 lg:px-24 pt-20 md:pt-20 lg:pt-20 lg:pb-8">
					{/* spinner */}
					{isLoading && (
						<div className="flex justify-center items-center h-[80vh]">
							<svg
								role="status"
								class="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-indigo-500"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
						</div>
					)}
					{!isLoading && (
						<>
							{/* Breadcrumb */}
							<nav
								class="flex py-3 text-indigo-500 mb-5"
								aria-label="Breadcrumb"
							>
								<ol class="inline-flex items-center space-x-1 md:space-x-3">
									<li class="inline-flex items-center">
										<Link
											to="/"
											class="inline-flex items-center text-sm font-medium text-indigo-500 hover:text-indigo-700"
										>
											<svg
												class="mr-2 w-4 h-4"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
											</svg>
											Home
										</Link>
									</li>
									<li>
										<div class="flex items-center">
											<svg
												class="w-6 h-6 text-gray-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
													clip-rule="evenodd"
												></path>
											</svg>
											<Link
												to="/services"
												class="ml-1 text-sm font-medium text-indigo-500 hover:text-indigo-700 md:ml-2 "
											>
												Services
											</Link>
										</div>
									</li>
									<li aria-current="page">
										<div class="flex items-center">
											<svg
												class="w-6 h-6 text-gray-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
												{singleService?.name}
											</span>
										</div>
									</li>
								</ol>
							</nav>

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
								{singleService.packages && (
									<SingleServiceCard singleService={singleService} />
								)}
							</div>
						</>
					)}
				</div>
			</section>
			{!isLoading && (
				<div className="bg-gray-50">
					<div className="max-w-7xl mx-auto py-12 px-14 lg:py-16 lg:px-24 lg:flex lg:items-center lg:justify-between">
						<h2 className="text-lg md:text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							<span className="block my-3">
								Do you want to place a custom order?
							</span>
							<span className="block my-3 text-gray-800">
								Just leave a message for us
							</span>
						</h2>
						<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
							<div className="inline-flex rounded-md shadow">
								<HashLink
									to="/contact#eng"
									className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 transition-all ease-linear duration-300 hover:shadow-lg hover:shadow-indigo-400"
								>
									Contact now
								</HashLink>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default SingleService;
