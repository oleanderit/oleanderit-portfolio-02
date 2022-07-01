import { useEffect, useState } from "react";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const url = `http://localhost:4000/projects`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setProjects(data));
	}, []);

	return (
		<>
			<div className="bg-slate-50">
				<div className="container mx-auto px-4 md:px:14 lg:px-24 pt-8 md:pt-10 lg:pt-12">
					<div className="text-center mt-10">
						<p className="text-xl">Projects</p>
						<h1 className="text-lg md:text-xl lg:text-3xl font-extrabold mt-2">
							Here are some latest projects <br /> that we have recently done
						</h1>
					</div>
				</div>
				<div className="container mx-auto px-4 md:px:14 lg:px-24 pb-8 md:pb-10 lg:pb-12">
					<div className="flex flex-col">
						{/* <div className="flex flex-col justify-center">
					<div className="relative">
						<img
							className="hidden sm:block w-full"
							src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png"
							alt="sofa"
						/>
						<img
							className="sm:hidden w-full"
							src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png"
							alt="sofa"
						/>
						<div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
							<p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">
								Range Comfort Sofas
							</p>
						</div>
					</div>
				</div> */}
						<div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
							{projects.map((project) => (
								<ProjectsCard project={project} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
