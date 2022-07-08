import React from "react";
import spinner from "../../assets/images/spinner.svg";

const Spinner = () => {
	return (
		<>
			<div className="h-screen flex justify-center items-center animate-pulse">
				{/* <svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-24 h-24 text-indigo-500 animate-spin"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1"
						d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
					/>
				</svg> */}
				<img src={spinner} className="h-52 w-52" alt="spinner" />
			</div>
		</>
	);
};

export default Spinner;
