import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-blue-50 text-black pt-16 relative"
    >
      {/* Intro Text */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, my name is{" "}
        <span className="text-blue-600">Andrew Mutua</span>
      </motion.h1>

      {/* Typing Animation */}
      <motion.div
        className="flex items-center justify-center text-2xl md:text-3xl text-blue-700 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span>I am a&nbsp;</span>
        <ReactTyped
          strings={[
            "Software Developer...",
            "Web Designer...",
            "Problem Solver...",
          ]}
          typeSpeed={50}   // slow typing
          backSpeed={30}   // slow deletion
          backDelay={2000} // pause 2s before deleting
          loop={true}      // keeps looping
          showCursor={true}
          cursorChar="|"   // blinking cursor style
        />
      </motion.div>

      {/* Description */}
      <motion.p
        className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        I build interactive, modern web applications and beautiful user interfaces that solve real-world problems.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none"></div>
    </section>
  );
}
