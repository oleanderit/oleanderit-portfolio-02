import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SingleProject from "./components/SingleProject/SingleProject";
import SingleService from "./components/SingleService/SingleService";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/projects/Projects";
import Services from "./pages/Services/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from "./components/Extra/Spinner";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 1200);
	return (
		<>
			{/* spinner */}
			{isLoading && <Spinner />}
			{!isLoading && (
				<>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/services" element={<Services />} />
						<Route path="/service/details/:id" element={<SingleService />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/project/details/:id" element={<SingleProject />} />
						<Route path="/blogs" element={<Blogs />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
