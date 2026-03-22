"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Hello Chat App",
        category: "Real-Time Communication Platform",
        description: "HelloChat is an AI-powered real-time communication platform for organizations, enabling messaging, group collaboration, and smart note sharing.",
        tech: "Flutter, Firebase, Gemini",
        image: "/projects/hello.png",
        githubUrl: "https://github.com/ansh0078/Hello_Chat_App",
        demoUrl: "https://ansh0078.github.io/HelloWeb/"
    },
    {
        title: "Deshi Mart (Grocery)",
        category: "E-Commerce Platform",
        description: "Deshi Mart is a full-stack grocery e-commerce platform with an admin dashboard for managing products, categories, and user interactions.",
        tech: "Flutter, Firebase",
        image: "/projects/deshiMart.png",
        githubUrl: "https://github.com/ansh0078/DeshiMart",
        demoUrl: "https://ansh0078.github.io/DeshiMart/#/auth"
    },
    {
        title: "Airbnb (Clone)",
        category: "Real Estate Platform",
        description: "Airbnb clone is a real estate platform that allows users to search for and book accommodations.",
        tech: "Node Js, Express Js, Mongo DB, React Js",
        image: "/projects/radix.png",
        githubUrl: "https://github.com/ansh0078/Airbnb-clone",
        demoUrl: "https://majorproject-fcn3.onrender.com/listings"
    },
    {
        title: "Roket Pod AI",
        category: "AI Chat App",
        description: "Rocket Chat is an open-source communication platform that enables secure real-time messaging.",
        tech: "Flutter, Gemini Api",
        image: "/projects/max-life.png",
        githubUrl: "https://github.com/ansh0078/Rocket-Pod-AI-Chat-Box",
        demoUrl: ""
    },
];

export default function Projects() {
    return (
        <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold mb-20 tracking-tighter text-white"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer h-[500px] flex flex-col justify-end"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-89 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />
                            </div>

                            <div className="relative z-10 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-[#121212] uppercase bg-[#ededed] rounded-full shadow-lg">
                                        {project.category}
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/30 rounded-full backdrop-blur-md">
                                        {project.tech}
                                    </span>
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-3 drop-shadow-md">{project.title}</h3>
                                <p className="text-gray-200 text-lg leading-relaxed drop-shadow-md mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4 items-center">
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/30 rounded-full backdrop-blur-md">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 font-semibold transition-colors flex items-center gap-2 text-sm z-20 relative">
                                                GitHub
                                            </a>
                                        )}
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/30 rounded-full backdrop-blur-md">
                                        {project.demoUrl && (
                                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 font-semibold transition-colors flex items-center gap-2 text-sm z-20 relative">
                                                Live Demo
                                            </a>
                                        )}
                                    </span>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
