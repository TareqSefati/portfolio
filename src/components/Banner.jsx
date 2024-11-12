import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCode, faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';

export default function Banner() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<div className="p-5 flex flex-col items-center justify-between lg:flex-row md:flex-row">
				<div className="space-y-5 w-3/5">
					<div className="text-center">
						<div className="text-4xl font-bold text-slate-700">
							I am, <br />
							Tareq Sefati
						</div>
						<div className="mt-5 text-2xl text-slate-500">
							A Full-Stack Java Developer.
						</div>
					</div>
					<div className="text-center">
						<a href="/files/Tareq-Resume.pdf" download="Tareq-Resume.pdf" className="btn btn-outline">
							<FontAwesomeIcon icon={faFileDownload} size="lg" />
							Download CV
						</a>
					</div>
					<div className="text-center space-x-5">
						<a href="https://www.linkedin.com/in/tareq-sefati-104b44b4" target="_blank" className="">
							<FontAwesomeIcon icon={faLinkedin} size="2x" className="text-gray-500 hover:text-blue-700 transition-colors duration-300" />
						</a>
						<a href="https://github.com/TareqSefati" target="_blank" className="">
							<FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-500 hover:text-black transition-colors duration-300" />
						</a>
						<a href="https://leetcode.com/u/TareqSefati/" target="_blank" className="">
							<FontAwesomeIcon icon={faCode} size="2x" className="text-gray-500 hover:text-yellow-500 transition-colors duration-300" />
						</a>
						<a href={`mailto:tareq.sefati@gmail.com`} className="">
							<FontAwesomeIcon icon={faEnvelope} size="2x" className="text-gray-500 hover:text-blue-400 transition-colors duration-300" />
						</a>
					</div>
				</div>
				<img

					src="/images/developer.svg"
					className="w-4/5"
				/>
			</div>
		</motion.section>
	);
}
