import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    alert('Thank you for your message! I will get back to you soon.')
  }

  const contactInfo = [
  {
    icon: '📍',
    title: 'Location',
    value: 'Mombasa, Kenya',
    link: '#' // you can leave it as # if you don't want it clickable
  },
  {
    icon: '📧',
    title: 'Email',
    value: 'developer.mutu@gmail.com',
    link: 'mailto:developer.mutu@gmail.com'
  },
  {
    icon: '📱',
    title: 'Phone',
    value: '+254 799 933 938',
    link: 'tel:+254799933938'
  }
]

  const socialLinks = [
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://www.linkedin.com/in/your-linkedin-username', // replace with your LinkedIn URL
    color: 'hover:bg-blue-500'
  },
  {
    name: 'GitHub',
    icon: '🐙',
    url: 'https://github.com/your-github-username', // replace with your GitHub URL
    color: 'hover:bg-gray-600'
  },
  {
    name: 'Twitter',
    icon: '🐦',
    url: 'https://twitter.com/your-twitter-username', // replace with your Twitter URL
    color: 'hover:bg-blue-400'
  },
  {
    name: 'Instagram',
    icon: '📸',
    url: 'https://www.instagram.com/your-instagram-username', // replace with your Instagram URL
    color: 'hover:bg-pink-500'
  }
]


  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Let's Talk</h3>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              I'm currently available for freelance work or full-time opportunities. 
              If you have a project that you want to get started, think you need my help 
              with something, or just want to say hello, then get in touch.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start group hover:translate-x-2 transition-transform duration-300"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="text-2xl mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold mb-4 text-white">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-white">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-white">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-white">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-white">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Hello Andrew, I would like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact