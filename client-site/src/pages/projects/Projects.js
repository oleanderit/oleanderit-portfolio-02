import { useEffect, useState } from "react";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";

const Projects = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const url = `https://true-syrup-08129.herokuapp.com/projects`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setProjects(data));
	}, []);

	return (
		<>
			<div id="eng" className="bg-slate-50">
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
						<div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
							{projects.map((project) => (
								<ProjectsCard key={project._id} project={project} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
