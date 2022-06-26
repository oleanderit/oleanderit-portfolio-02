import FAQs from "../../components/FAQs/FAQs";
import HeroSec from "../../components/Sections/HeroSec";
import ServiceSec from "../../components/Sections/ServiceSec";
import Testimonial from "../../components/Sections/Testimonial";
import "./Home.css";

const Home = () => {
	return (
		<>
			<HeroSec />
			<ServiceSec />
			<FAQs />
			<Testimonial />
		</>
	);
};

export default Home;
