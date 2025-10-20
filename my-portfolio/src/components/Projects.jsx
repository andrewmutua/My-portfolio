const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration, admin dashboard, and real-time inventory management.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      gradient: 'from-blue-500 to-purple-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      image: '✅',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      gradient: 'from-green-500 to-teal-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with interactive maps, forecasts, and location-based recommendations.',
      image: '🌤️',
      technologies: ['React', 'API', 'Chart.js', 'Tailwind'],
      gradient: 'from-purple-500 to-pink-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness tracking application with workout plans, progress analytics, and social features.',
      image: '💪',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      gradient: 'from-orange-500 to-red-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media App',
      description: 'Feature-rich social media platform with real-time messaging, content sharing, and community features.',
      image: '📱',
      technologies: ['React', 'Node.js', 'WebSocket', 'AWS'],
      gradient: 'from-indigo-500 to-blue-600',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with smooth animations and optimized performance.',
      image: '🎨',
      technologies: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
      gradient: 'from-pink-500 to-rose-600',
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Project Image/Icon */}
              <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-80">{project.image}</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:scale-110 transition-transform duration-300"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="text-sm font-medium">Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:scale-110 transition-transform duration-300"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg transition-colors duration-300"
                    onClick={(e) => e.preventDefault()}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 rounded-lg transition-colors duration-300"
                    onClick={(e) => e.preventDefault()}
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group">
            View All Projects
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects