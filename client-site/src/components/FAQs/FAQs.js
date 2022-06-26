import questions from "./Data";
import Question from "./Question";

const FAQs = () => {
	return (
		<main>
			<div className="container mx-auto px-4 md:px:14 lg:px-24 py-10 md:py-12 lg:py-16">
				<div className="text-center">
					<p className="text-xl">FAQs</p>
					<h1 className="text-lg md:text-xl lg:text-3xl font-extrabold mt-2 mb-6 md:mb-8 lg:mb-16">
						If you want to learn more about us <br /> then read ours all FAQs
					</h1>
				</div>
				<div className="mx-auto">
					{questions.map((question) => (
						<Question key={question.id} {...question} />
					))}
				</div>
			</div>
		</main>
	);
};

export default FAQs;
