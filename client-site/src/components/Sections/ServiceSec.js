import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
import serviceData from "../../assets/data/services.JSON";

const ServiceSec = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch(serviceData)
			.then((res) => res.json())
			.then((data) => setServices(data.slice(0, 6)));
	}, []);

	return (
		<>
			<div className="bg-slate-50">
				<div className="container mx-auto px-4 md:px:14 lg:px-24 py-8 md:py-10 lg:py-12">
					<div className="text-center">
						<p className="text-xl">Services</p>
						<h1 className="text-lg md:text-xl lg:text-3xl font-extrabold mt-2 mb-6 md:mb-8 lg:mb-16">
							We're an agency tailored to all <br /> clients' needs that always
							delivers
						</h1>
					</div>
					<div className="flex flex-wrap">
						{services.map((service) => (
							<Service service={service} />
						))}
					</div>
					<div className="mt-10 text-center">
						<div className="inline-block">
							<Link
								to="/services"
								className="text-lg capitalize text-white bg-indigo-600 hover:bg-indigo-800 transition-all ease-linear px-5 py-2 border border-indigo-600 rounded-md lg:mr-3 mr-0"
							>
								Explore more
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceSec;
