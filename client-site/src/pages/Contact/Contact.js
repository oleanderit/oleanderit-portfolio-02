import emailjs from "@emailjs/browser";
import { useState } from "react";
import swal from "sweetalert";
import FAQs from "../../components/FAQs/FAQs";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [error, setError] = useState(false);
	const [message, setMessage] = useState("");

	const submitHandler = (event) => {
		event.preventDefault();
		if (!formData.name) {
			setError(true);
			setMessage("Name is required");
		} else if (!formData.email) {
			setError(true);
			setMessage("Email is required");
		} else if (!formData.subject) {
			setError(true);
			setMessage("Subject is required");
		} else if (!formData.message) {
			setError(true);
			setMessage("Message is required");
		} else {
			setError(false);
			setMessage("We will contact with you as soon as possible...");
		}

		emailjs
			.sendForm(
				"service_36f22ph",
				"template_y3vziub",
				event.target,
				"NWS5TAkjxdA2opJMB"
			)
			.then(
				(result) => {
					console.log(result.text);
					swal("Good job!", "We received your message", "success");
				},
				(error) => {
					console.log(error.text);
					swal("Good job!", error.text, "error");
				}
			);

		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.currentTarget.name]: event.currentTarget.value,
		});
	};

	const handleAlerts = () => {
		if (error && message) {
			return (
				<div className="bg-red-500 text-white px-5 py-3 mt-4">{message}</div>
			);
		} else if (!error && message) {
			return (
				<div className="bg-green-500 text-white px-5 py-3 mt-4">{message}</div>
			);
		} else {
			return null;
		}
	};

	return (
		<>
			<div id="eng">
				<div className="container mx-auto px-4 md:px:8 lg:px-12 py-8 md:py-10 lg:py-12">
					<div className="lg:flex">
						<div className="xl:w-2/5 lg:w-2/5 bg-indigo-600 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
							<div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
								<h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
									Get in touch
								</h1>
								<p className="text-base text-white pb-8 leading-relaxed font-normal lg:pr-4">
									Got a question about us? Are you interested in partnering with
									us? Have some suggestions or just want to say Hi? Just contact
									us. We are here to asset you.
								</p>
								<div className="flex pb-4 items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="icon icon-tabler icon-tabler-phone-call"
											width={20}
											height={20}
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="#ffffff"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" />
											<path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
											<path d="M15 7a2 2 0 0 1 2 2" />
											<path d="M15 3a6 6 0 0 1 6 6" />
										</svg>
									</div>
									<p className="pl-4 text-white text-base">+1 (308) 321 321</p>
								</div>
								<div className="flex items-center">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="icon icon-tabler icon-tabler-mail"
											width={20}
											height={20}
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="#FFFFFF"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" />
											<rect x={3} y={5} width={18} height={14} rx={2} />
											<polyline points="3 7 12 13 21 7" />
										</svg>
									</div>
									<p className="pl-4 text-white text-base">info.oleanderit@gmail.com</p>
								</div>
								<p className="text-base text-white pt-10 tracking-wide">
									545, Street 11, Block F <br />
									Dean Boulevard, Ohio
								</p>
							</div>
						</div>
						<div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
							<form
								onSubmit={submitHandler}
								id="contact"
								className="bg-white py-4 px-8 rounded-tr rounded-br"
							>
								<h1 className="text-4xl text-indigo-600 font-extrabold mb-6">
									Enter Details
								</h1>
								<div className="block xl:flex w-full flex-wrap justify-between mb-6">
									<div className="w-full lg:w-2/5 mb-6 xl:mb-0">
										<div className="flex flex-col w-full">
											<label
												htmlFor="name"
												className="text-indigo-600 text-sm font-semibold leading-tight tracking-normal mb-2"
											>
												Your Name
											</label>
											<input
												required
												id="name"
												name="name"
												type="text"
												onChange={handleChange}
												value={formData.name}
												className="focus:outline-none focus:border focus:border-indigo-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
											/>
										</div>
									</div>
									<div className="w-full lg:w-2/5 xl:flex xl:justify-end">
										<div className="flex flex-col w-full">
											<label
												htmlFor="email"
												className="text-indigo-600 text-sm font-semibold leading-tight tracking-normal mb-2"
											>
												Your Email
											</label>
											<input
												required
												id="email"
												name="email"
												type="email"
												onChange={handleChange}
												value={formData.email}
												className="focus:outline-none focus:border focus:border-indigo-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
											/>
										</div>
									</div>
								</div>
								<div className="block xl:flex w-full flex-wrap justify-between mb-6">
									<div className="w-full mb-6 xl:mb-0">
										<div className="flex flex-col w-full w-full">
											<label
												htmlFor="subject"
												className="text-indigo-600 text-sm font-semibold leading-tight tracking-normal mb-2"
											>
												Subject
											</label>
											<input
												required
												id="subject"
												name="subject"
												type="text"
												onChange={handleChange}
												value={formData.subject}
												className="focus:outline-none focus:border focus:border-indigo-600 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
											/>
										</div>
									</div>
								</div>
								<div className="w-full mt-6 pb-2">
									<div className="flex flex-col w-full">
										<label
											className="text-sm font-semibold text-indigo-600 mb-2"
											htmlFor="message"
										>
											Your Message
										</label>
										<textarea
											name="message"
											className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-600"
											rows={8}
											id="message"
											onChange={handleChange}
											value={formData.message}
										/>
									</div>
									<button
										type="submit"
										name="submit"
										value="Submit"
										className="focus:outline-none bg-indigo-600 transition duration-150 ease-in-out hover:bg-gray-600 rounded text-white px-8 py-3 text-sm leading-6 capitalize"
									>
										Send message
									</button>
								</div>
								{handleAlerts()}
							</form>
						</div>
					</div>
				</div>
				<FAQs />
			</div>
		</>
	);
};

export default Contact;
