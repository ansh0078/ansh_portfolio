"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-white"
                >
                    Let's Talk
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto"
                >
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="mailto:anshraj0078@gmail.com"
                        className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full md:w-auto"
                    >
                        Say Hello
                    </a>
                    <a
                        href="https://docs.google.com/document/d/1wunRYxAa9r79u8s4dOUyD5TtHrRUvC0Sbcr8NL7DDZs/edit?usp=sharing"
                        download="Ansh_Raj_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors shadow-[0_0_20px_rgba(147,51,234,0.3)] w-full md:w-auto"
                    >
                        Download Resume
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ansh-raj-13137416a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all w-full md:w-auto"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/ansh0078"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all w-full md:w-auto"
                    >
                        GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
