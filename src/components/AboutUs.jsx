import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";

export default function AboutUs() {
	return (
		<section>
			<Helmet>
				<title>About</title>
			</Helmet>
			<div className="mb-5 mt-10">
				<h1
					className="text-center font-semibold text-5xl mb-5"
				>
					About Me
				</h1>
				<hr className="w-3/4 mx-auto" />
			</div>

			<div className="shadow-xl rounded-lg ">
				<section className="py-24 relative">
					<div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
						<div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
							<div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
								<div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
									<h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
										Md. Tareq Sefati
									</h2>
									<h4 className="text-gray-900 text-2xl font-semibold font-manrope leading-normal lg:text-start text-center">
										Full Stack Java Developer
									</h4>
									<p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
										As an experienced software engineer, I have expertise on core web and enterprise application development using Java, Spring Boot, Spring MVC, Spring Security, NextJs and Microservices platform as well as databases and REST web services. I possess a robust grasp of SDLC and Agile Methodology, coupled with exceptional analytical skills to transform business requirements into successful project deployments.
										<br /><br />
										Besides my extensive web development experience, I have dedicated over five years to specializing in JavaFX, focusing on crafting intuitive desktop applications.
										<br /><br />
										♣ Development experience in Java, Spring Boot, JavaFX, NextJs and JavaScript.<br />
										♣ Experience with REST micro-services based architecture.<br />
										♣ Strong problem solving and coding skills.<br />
										♣ Experience with software development best practices (clean code, code re-usability, testing, reviews).<br />
										♣ Passionate to learn new technologies to improve my skills to take new challenges.
									</p>
								</div>
								<div className="flex flex-row items-center gap-5">
									<a href="https://www.linkedin.com/in/tareq-sefati-104b44b4" target="_blank" className="">
										<FontAwesomeIcon icon={faLinkedin} size="2x" className="text-gray-500 hover:text-blue-700 transition-colors duration-300" />
									</a>
									<a href="https://leetcode.com/u/TareqSefati/" target="_blank" className="">
										<FontAwesomeIcon icon={faCode} size="2x" className="text-gray-500 hover:text-yellow-500 transition-colors duration-300" />
									</a>
									<a href="https://github.com/TareqSefati" target="_blank" className="">
										<FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-500 hover:text-black transition-colors duration-300" />
									</a>
									<a href={`mailto:tareq.sefati@gmail.com`} className="">
										<FontAwesomeIcon icon={faEnvelope} size="2x" className="text-gray-500 hover:text-blue-400 transition-colors duration-300" />
									</a>
								</div>
							</div>
							<img
								className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
								src="/images/my-profile.jpg"
								alt="Tareq Sefati - image"
							/>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
