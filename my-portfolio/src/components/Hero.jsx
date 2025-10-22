import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Home() {
  // Floating particles configuration
  const particles = [...Array(20)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 5,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-900 pt-16 px-6 relative overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-blue-400/50 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 80],
              y: [0, (Math.random() - 0.5) * 80],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center space-y-8">
          {/* Greeting and Name */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello, my name is{" "}
              <span className="text-blue-700 block mt-3 font-bold tracking-tight">
                Andrew Mutua
              </span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              className="flex items-center justify-center text-lg sm:text-xl md:text-2xl font-medium mt-3 min-h-[2.5rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <span className="mr-2">I'm a</span>
              <ReactTyped
                strings={[
                  "Software Developer",
                  "Web Designer",
                  "Problem Solver",
                  "Tech Enthusiast",
                ]}
                typeSpeed={60}
                backSpeed={35}
                backDelay={2200}
                loop
                cursorChar="|"
                className="text-blue-600"
              />
            </motion.div>
          </motion.div>

          {/* Underline */}
          <motion.div
            className="h-1 w-16 bg-blue-500 mx-auto my-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 1.5, duration: 1 }}
          />

          {/* Description */}
          <motion.p
            className="mt-4 text-base sm:text-lg md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            I build modern, responsive, and scalable web applications with a focus
            on performance, usability, and clean design. Passionate about turning
            ideas into meaningful digital solutions.
          </motion.p>

          {/* Availability and Location */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-blue-100 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Open to new projects
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-blue-100 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Based in Kenya
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-14 flex flex-col items-center gap-2 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <span className="text-xs font-mono tracking-wide">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-9 border-2 border-gray-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-blue-600 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
