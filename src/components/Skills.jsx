import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

export default function Skills() {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('/files/skills.json')
            .then((res) => res.json())
            .then((data) => {
                setSkills(data);
            })
    }, [])
    return (
        <section>
            <div className="mb-5 mt-10">
                <h1
                    className="text-center font-semibold text-5xl mb-5"
                >
                    Skills & Tools
                </h1>
                <hr className="w-3/4 mx-auto" />
            </div>

            {/* bg-base-200 shadow-xl rounded-lg */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 p-2"> 
                {skills?.map((skill, index) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            key={index} 
                            className="card bg-base-100 shadow-xl hover:cursor-pointer"
                        >
                            <div className="card-body text-center">
                                <p>{skill.name}</p>
                            </div>
                        </motion.div>
                    );
                })
                    ||
                    <>
                        <div className="text-center col-span-full">
                            <p>No data found.</p>
                        </div>
                    </>
                }
            </div>
        </section>
    )
}
