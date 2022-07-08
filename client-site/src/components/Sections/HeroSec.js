import { Link } from "react-router-dom";
// import Modal from "../Extra/Modal";
import Slider from "react-slick";
import banner01 from "../../assets/images/banner/1.png";
import banner02 from "../../assets/images/banner/2.png";

const HeroSec = () => {
	// function SampleNextArrow(props) {
	// 	const { className, style, onClick } = props;
	// 	return (
	// 		<div
	// 			className={className}
	// 			style={{
	// 				...style,
	// 				display: "block",
	// 				padding: "3px",
	// 				// backgroundColor: "#5850ec",
	// 				height: "25px",
	// 				width: "25px",
	// 				borderRadius: "50%",
	// 			}}
	// 			onClick={onClick}
	// 		/>
	// 	);
	// }

	// function SamplePrevArrow(props) {
	// 	const { className, style, onClick } = props;
	// 	return (
	// 		<div
	// 			className={className}
	// 			style={{
	// 				...style,
	// 				display: "block",
	// 				padding: "3px",
	// 				// backgroundColor: "#5850ec",
	// 				height: "25px",
	// 				width: "25px",
	// 				borderRadius: "50%",
	// 			}}
	// 			onClick={onClick}
	// 		/>
	// 	);
	// }

	const settings = {
		dots: false,
		infinite: true,
		speed: 800,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		cssEase: "linear",
	};

	const bannerData = [
		{
			id: 1,
			img: banner01,
			titleSlice01: "Build Your",
			titleSlice02: "Website",
			offer: "Exclusive Offer -40% Off This Week",
			desc: "Design and develop intelligent, sustainable, innovative technology solutions and services across multiple platforms.",
			path: "/services#eng",
			extra: "",
		},
		{
			id: 2,
			img: banner02,
			titleSlice01: "Grow Your",
			titleSlice02: "Business",
			offer: "Exclusive Offer -20% Off This Week",
			desc: "Grow your business with us. We are good at digital marketing and SEO. We will help you to boost your business properly.",
			path: "/services#eng",
			extra: "",
		},
	];

	return (
		<div className="h-screen flex justify-between items-center bg-white">
			<div className="container mx-auto px-4 md:px:14 lg:px-24 pt-20 md:pt-20 lg:pt-20 lg:pb-8">
				<Slider {...settings}>
					{bannerData.map((data, index) => (
						<div key={index + data.id}>
							<div className="grid lg:grid-cols-2 m-auto justify-center items-center">
								<div className="p-5">
									<h3 className="text-lg">{data.offer}</h3>
									<h1 className="lg:text-[4rem] text-[3.5rem] leading-[1.1] uppercase py-5 font-semibold">
										<span className="text-indigo-600">{data.titleSlice01}</span>{" "}
										<span>{data.titleSlice02}</span>
									</h1>
									<p className="text-base">{data.desc}</p>
									<div className="mt-10 flex lg:flex-row flex-col items-center">
										<Link
											to={data.path}
											className="text-lg capitalize text-indigo-600 px-6 py-2 border border-indigo-600 rounded-md lg:mr-3 mr-0"
										>
											Explore more
										</Link>
										{/* <div>
											<Modal />
										</div> */}
									</div>
								</div>
								<div className="ml-auto p-10">
									<img
										className="rounded-full"
										src={data.img}
										alt={data.titleSlice02}
									/>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default HeroSec;
