import React from "react";
import liveSite from "../../assets/images/live-site.svg";
import code from "../../assets/images/code.svg";
import server from "../../assets/images/server.svg";

const ProjectsCard = (props) => {
	const { id, name, image, liveLink, codeLink, serverLink, category } =
		props.project;

	return (
		<>
			<div
				key={id}
				className="group group-hover:bg-opacity-100 transition duration-500 relative bg-indigo-500 flex justify-center items-center shadow-xl"
			>
				<img
					className="group-hover:opacity-80 transition duration-500"
					src={image}
					alt={name}
				/>
				<div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2 bg-slate-100 px-5 py-3 rounded-md">
					<div>
						<p className="group-hover:opacity-90 transition duration-500 text-xl font-semibold leading-5 text-gray-700">
							{name}
						</p>
					</div>
					<div>
						<p className="group-hover:opacity-90 transition duration-500 text-sm font-normal text-gray-700 leading-5 capitalize">
							<span className="font-semibold">category:</span> {category}
						</p>
					</div>
				</div>
				<div className="flex flex-row items-center justify-center top-3/4 absolute opacity-0 group-hover:opacity-100 transition duration-500 gap-5">
					<a
						href={liveLink}
						target="_blank"
						className="bg-indigo-500 hover:bg-indigo-800 p-2 rounded-full transition-all ease-linear duration-300"
					>
						<img className="h-6 w-6" src={liveSite} alt="icon" />
					</a>
					<a
						href={codeLink}
						target="_blank"
						className="bg-indigo-500 hover:bg-indigo-800 p-2 rounded-full transition-all ease-linear duration-300"
					>
						<img className="h-6 w-6" src={code} alt="icon" />
					</a>
					<a
						href={serverLink}
						target="_blank"
						className="bg-indigo-500 hover:bg-indigo-800 p-2 rounded-full transition-all ease-linear duration-300"
					>
						<img className="h-6 w-6" src={server} alt="icon" />
					</a>
				</div>
			</div>
		</>
	);
};

export default ProjectsCard;
