"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "KushalAide",
        role: "Flutter Developer",
        period: "OCT 2024 - May 2025",
        description: "Managing a team of 5 members, able to divide and assign works to them.\nDeveloped and maintained scalable mobile applications using Flutter, ensuring smooth performance and responsive UI/UX.\nCollaborated with backend teams to integrate RESTful APIs, enabling real-time data handling and seamless user interactions.\nDesigned and implemented clean, maintainable architecture (MVVM/Provider) to improve code quality and scalability.\nBuilt key features such as authentication, notifications, and dynamic dashboards, enhancing overall user experience.\nOptimized app performance by reducing load time and improving state management, leading to a more efficient and stable application.",
    },
    {
        company: "Code CarftMan.club",
        role: "Flutter Developer Intern",
        period: "Mar 2024 - Aug 2024",
        description: "Built and contributed to a developer-focused platform/community aimed at sharing knowledge and improving coding skills.\nDesigned and developed interactive UI components and responsive layouts for better user engagement.\nImplemented features for content sharing, learning resources, and collaboration among developers.\nFocused on clean code practices and modern web technologies to create a smooth and efficient user experience.",
    },
];

export default function Experience() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-20 tracking-tighter text-white text-center"
                >
                    Career Timeline
                </motion.h2>

                <div className="relative border-l border-white/20 ml-4 md:ml-0 md:pl-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                            <div className="text-sm text-gray-500 font-mono mb-2 uppercase tracking-widest">{exp.period}</div>
                            <h3 className="text-3xl font-bold text-white mb-1">{exp.company}</h3>
                            <h4 className="text-xl text-gray-400 mb-4">{exp.role}</h4>
                            <div className="text-gray-300 leading-relaxed max-w-2xl">
                                {exp.description.includes('\n') ? (
                                    <ul className="list-disc list-outside ml-5 space-y-2">
                                        {exp.description.split('\n').map((item, i) => (
                                            <li key={i}>{item.trim()}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{exp.description}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
