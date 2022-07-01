import { HashLink } from "react-router-hash-link";

const Service = (props) => {
	const { _id, name, imgUrl, desc, badge } = props.service;
	return (
		<>
			<div
				className="group px-4 py-5 lg:w-1/3 md:w-1/2 w-full single-service transition ease-linear rounded mb-5"
				key={_id}
			>
				<HashLink to={`/service/details/${_id}#eng`} smooth>
					<div className="h-full overflow-hidden text-center">
						<div className="rounded-full border-2 border-dotted group-hover:border-purple-600 transition-all ease-linear duration-200 inline-block p-5">
							<img
								className="h-16 w-16 mx-auto object-cover object-center rounded-md"
								src={imgUrl}
								alt={name}
							/>
						</div>
						<div className="px-6 pt-3">
							<h1 className="title-font text-xl font-semibold text-gray-900 mb-2">
								{name}
							</h1>
							{/* <h1 className="title-font text-xl font-semibold text-gray-900 mb-2">
								${pricing}
							</h1> */}
							<p className="font-light text-sm text-justify">
								{desc} <span className="text-red-500">{badge}</span>
							</p>
						</div>
					</div>
				</HashLink>
			</div>
		</>
	);
};

export default Service;
