import { Briefcase, FolderGit2, Users, GraduationCap, Code2, Globe, Award, Clock } from "lucide-react";
import profilePhoto from "../assets/portfolio.png";

const About = () => {
  const stats = [
    { 
      icon: <Briefcase className="w-8 h-8 text-blue-600 mx-auto" />, 
      label: "Experience", 
      value: "2 Years",
      description: "Professional development"
    },
    { 
      icon: <Code2 className="w-8 h-8 text-purple-600 mx-auto" />, 
      label: "Projects", 
      value: "50+ Completed",
      description: "Diverse applications"
    },
    { 
      icon: <Users className="w-8 h-8 text-green-600 mx-auto" />, 
      label: "Clients", 
      value: "30+ Worldwide",
      description: "Global reach"
    },
    { 
      icon: <GraduationCap className="w-8 h-8 text-orange-600 mx-auto" />, 
      label: "Education", 
      value: "Information Technology", // ✅ Updated here
      description: "Strong academic background"
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-[#EFF6FF]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-16">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-lg overflow-hidden">
              <div className="w-full h-full bg-[#EFF6FF] rounded-full overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Andrew Mutua"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-[#EFF6FF]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">
              A passionate developer dedicated to crafting digital excellence
            </h3>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                I'm a software developer specializing in building exceptional digital experiences. 
                With a strong foundation in Information Technology and hands-on experience, 
                I bring ideas to life through clean, efficient code and innovative solutions.
              </p>

              <p className="text-lg leading-relaxed">
                My journey in tech started with a curiosity about how things work, which evolved 
                into a passion for creating solutions that make a difference. I thrive on challenges 
                and enjoy the process of turning complex problems into simple, beautiful designs.
              </p>

              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-gray-800 font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
