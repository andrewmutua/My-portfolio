import { useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Rental Management System',
      description: 'A comprehensive rental management platform for property owners and tenants. Features include property listings, tenant management, rent tracking, maintenance requests, and payment processing.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop',
      technologies: ['Express.js', 'MySQL', 'Tailwind CSS', 'Vite', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Marketing Website',
      description: 'A high-conversion marketing website with SEO optimization, lead generation forms, analytics integration, and responsive design for optimal user experience across all devices.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Google Analytics', 'SEO'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'REST API Service',
      description: 'A scalable RESTful API service with authentication, rate limiting, and comprehensive documentation for third-party integration.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop',
      technologies: ['Node.js', 'Express', 'JWT', 'MongoDB', 'Swagger'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'backend'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'frontend'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with multiple rooms, file sharing, and user presence indicators using WebSocket technology.',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop',
      technologies: ['Socket.io', 'React', 'Node.js', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'fullstack'
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="min-h-screen py-20 bg-[#EFF6FF]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-4">
          My Projects
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience 
          in web development and software engineering.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 shadow-md hover:shadow-lg hover:bg-blue-50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
                    title="Live Demo"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
                    title="View Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-5 h-5" />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects