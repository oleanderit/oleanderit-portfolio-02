import FAQs from "../../components/FAQs/FAQs";
import HeroSec from "../../components/Sections/HeroSec";
import ServicesClientsData from "../../components/Sections/ServicesClientsData";
import ServiceSec from "../../components/Sections/ServiceSec";
import Testimonial from "../../components/Sections/Testimonial";
import "./Home.css";

const Home = () => {
	return (
		<>
			<div id="eng">
				<HeroSec />
				<ServiceSec />
				<FAQs />
				<ServicesClientsData />
				<Testimonial />
			</div>
		</>
	);
};

export default Home;
