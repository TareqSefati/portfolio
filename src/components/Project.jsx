import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"
import { motion } from 'framer-motion';


export default function Project() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/files/projects.json')
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            })
    }, [])
    return (

        <section>
            <div className="mb-5 mt-10">
                <h1
                    className="text-center font-semibold text-5xl mb-5"
                >
                    Projects<br />
                </h1>
                <hr className="w-3/4 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2">
                {projects?.map((project) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            key={project.id} className="card bg-base-100 shadow-xl hover:cursor-pointer"
                        >
                            <figure className="">
                                <img
                                    className="h-48 rounded-md mt-2"
                                    src={`/images/${project.imageUrl}`}
                                    alt="project Img"
                                />
                            </figure>
                            <div className="card-body">
                                <div className="">
                                    <h2 className="card-title font-semibold text-xl">
                                        {project.name}
                                        <div className="badge badge-accent">{project.projectTrack}</div>
                                    </h2>
                                </div>
                                <p>{project.description}</p>

                                <div className="card-actions justify-center gap-5">
                                    <a href={project.githubUrl} target="_blank" className="">
                                        <FontAwesomeIcon icon={faGithub} size="lg" className="text-gray-500 hover:text-black transition-colors duration-300" />
                                    </a>
                                    <a href={project.liveUrl} target="_blank" className="">
                                        <FontAwesomeIcon icon={faLink} size="lg" className="text-blue-500 hover:text-blue-700 transition-colors duration-300" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })
                    ||
                    <>
                        <div className="text-center col-span-full">
                            <p>No data found. Could not load data from database!</p>
                        </div>
                    </>
                }
            </div>

            {/* 
            This is server project information - not added in project.json file.
            {
                "id": "2",
                "name": "Online Book Shop Server",
                "imageUrl": "",
                "description": "It is a simple node server for online book shop project",
                "projectTrack": "Node.js",
                "technologyUsed": "Express.js, MongoDB",
                "liveUrl": "https://online-book-shop-server.onrender.com",
                "githubUrl": "https://github.com/TareqSefati/online-book-shop-server"
            },
            {
                "id": "4",
                "name": "Code Course Academy Server",
                "imageUrl": "",
                "description": "Simple node server for code-course-academy project",
                "projectTrack": "Node.js",
                "technologyUsed": "Express.js",
                "liveUrl": "https://code-course-academy-server.vercel.app/",
                "githubUrl": "https://github.com/TareqSefati/code-course-academy-server"
            }, */}
        </section>
    )
}
