import { useState, useEffect } from 'react'

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState([])

  const technicalSkills = [
    { name: 'HTML/CSS', level: 95, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 90, color: 'bg-blue-500' },
    { name: 'React', level: 85, color: 'bg-blue-500' },
    { name: 'Next.js', level: 80, color: 'bg-blue-500' },
    { name: 'Node.js', level: 80, color: 'bg-blue-500' },
    { name: 'Express.js', level: 75, color: 'bg-blue-500' },
    { name: 'MySQL', level: 70, color: 'bg-blue-500' }
  ]

  const professionalSkills = [
    { name: 'Problem Solving', level: 95, color: 'bg-blue-500' },
    { name: 'Team Collaboration', level: 90, color: 'bg-blue-500' },
    { name: 'Communication', level: 85, color: 'bg-blue-500' },
    { name: 'Project Management', level: 80, color: 'bg-blue-500' }
  ]

  const tools = [
    { name: 'Git', icon: '🔧' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Docker', icon: '🐳' },
    { name: 'GitHub', icon: '☁️' },
    { name: 'Postman', icon: '📬' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedSkills([
              ...technicalSkills.map((s) => s.name),
              ...professionalSkills.map((s) => s.name)
            ])
          }
        })
      },
      { threshold: 0.3 }
    )

    const skillsSection = document.getElementById('skills')
    if (skillsSection) observer.observe(skillsSection)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="min-h-screen py-20 bg-[#EFF6FF]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-600 text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-3 overflow-hidden">
                    <div
                      className={`${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: animatedSkills.includes(skill.name)
                          ? `${skill.level}%`
                          : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-600 text-center lg:text-left">
              Professional Skills
            </h3>
            <div className="space-y-6">
              {professionalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-3 overflow-hidden">
                    <div
                      className={`${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: animatedSkills.includes(skill.name)
                          ? `${skill.level}%`
                          : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-600">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white p-4 rounded-lg flex flex-col items-center justify-center hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 group shadow-md"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <span className="text-sm text-gray-700 font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
