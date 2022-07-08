import { useState } from "react";
import Spinner from "../../components/Extra/Spinner";
import ServicesClientsData from "../../components/Sections/ServicesClientsData";

const About = () => {
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 1000);

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
						<div className="flex flex-col lg:flex-row justify-between gap-8">
							<div className="w-full lg:w-5/12 flex flex-col justify-center">
								<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
									About Us
								</h1>
								<p className="font-normal text-base leading-6 text-gray-600 md:mb-0 mb-5">
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its layout.
									The point of using Lorem Ipsum.In the first place we have
									granted to God, and by this our present charter confirmed for
									us and our heirs forever that the English Church shall be
									free, and shall have her rights entire, and her liberties
									inviolate; and we will that it be thus observed; which is
									apparent from
								</p>
							</div>
							<div className="w-full lg:w-8/12 ">
								<img
									className="w-full h-full"
									src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
									alt="A group of People"
								/>
							</div>
						</div>

						<div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
							<div className="w-full lg:w-5/12 flex flex-col justify-center">
								<h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
									Our Story
								</h1>
								<p className="font-normal text-base leading-6 text-gray-600 ">
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its layout.
									The point of using Lorem Ipsum.In the first place we have
									granted to God, and by this our present charter confirmed for
									us and our heirs forever that the English Church shall be
									free, and shall have her rights entire, and her liberties
									inviolate; and we will that it be thus observed; which is
									apparent from
								</p>
							</div>
							<div className="w-full lg:w-8/12 lg:pt-8">
								<div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
									<div className="p-4 pb-6 flex justify-center flex-col items-center">
										<img
											className="md:block hidden"
											src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
											alt="Alexa featured Img"
										/>
										<img
											className="md:hidden block"
											src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
											alt="Alexa featured Img"
										/>
										<p className="font-medium text-xl leading-5 text-gray-800 mt-4">
											Alexa
										</p>
									</div>
									<div className="p-4 pb-6 flex justify-center flex-col items-center">
										<img
											className="md:block hidden"
											src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
											alt="Olivia featured Img"
										/>
										<img
											className="md:hidden block"
											src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
											alt="Olivia featured Img"
										/>
										<p className="font-medium text-xl leading-5 text-gray-800 mt-4">
											Olivia
										</p>
									</div>
									<div className="p-4 pb-6 flex justify-center flex-col items-center">
										<img
											className="md:block hidden"
											src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
											alt="Liam featued Img"
										/>
										<img
											className="md:hidden block"
											src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
											alt="Liam featued Img"
										/>
										<p className="font-medium text-xl leading-5 text-gray-800 mt-4">
											Liam
										</p>
									</div>
									<div className="p-4 pb-6 flex justify-center flex-col items-center">
										<img
											className="md:block hidden"
											src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
											alt="Elijah featured img"
										/>
										<img
											className="md:hidden block"
											src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
											alt="Elijah featured img"
										/>
										<p className="font-medium text-xl leading-5 text-gray-800 mt-4">
											Elijah
										</p>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
			{!isLoading && <ServicesClientsData />}
		</>
	);
};

export default About;
