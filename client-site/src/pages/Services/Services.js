import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Spinner from "../../components/Extra/Spinner";
import Service from "../../components/Service/Service";

const Services = () => {
	const [services, setServices] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const url = `https://true-syrup-08129.herokuapp.com/services`;
		// const url = `/services.JSON`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
				setIsLoading(false);
			});
	}, []);

	// console.log(services);

	return (
		<>
			<div
				id="eng"
				className="container mx-auto px-4 md:px:14 lg:px-24 pt-20 md:pt-20 lg:pt-20 lg:pb-8"
			>
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
						<div className="text-center">
							<p className="text-xl">Services</p>
							<h1 className="text-lg md:text-xl lg:text-3xl font-extrabold mt-2 mb-6 md:mb-8 lg:mb-16">
								We're an agency tailogray to all <br /> clients' needs that
								always delivers
							</h1>
						</div>
						<div className="flex flex-wrap">
							{services.map((service) => (
								<Service key={service._id} service={service} />
							))}
						</div>
					</>
				)}
			</div>
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

export default Services;
