import { Link } from "react-router-dom";
import Modal from "../Extra/Modal";

const HeroSec = () => {
	return (
		<div className="hero-sec h-screen flex justify-between items-center">
			<div className="container mx-auto px-3">
				<div className="grid lg:grid-cols-2 m-auto">
					<div className="p-5">
						<h3 className="text-lg">Exclusive Offer -20% Off This Week</h3>
						<h1 className="lg:text-[4rem] text-[3.5rem] leading-[1.1] uppercase py-5 font-semibold">
							<span className="text-indigo-600">Build your</span>{" "}
							<span>website</span>
						</h1>
						<p className="text-base">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae a
							asperiores atque voluptates nam
						</p>
						<div className="mt-10 flex lg:flex-row flex-col items-center">
							<Link
								to="/services"
								className="text-lg capitalize text-indigo-600 px-6 py-2 border border-indigo-600 rounded-md lg:mr-3 mr-0"
							>
								Explore more
							</Link>
							<div>
								<Modal />
							</div>
						</div>
					</div>
					<div className="bg-green-600 p-5 hidden"></div>
				</div>
			</div>
		</div>
	);
};

export default HeroSec;
