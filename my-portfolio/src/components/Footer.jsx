const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <a 
              href="#home" 
              className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors mb-4 inline-block"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#home')
              }}
            >
              Andrew<span className="text-white">.</span>
            </a>
            <p className="text-gray-400 mb-4">
              Creating digital experiences that make a difference. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <span className="text-lg">💼</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                <span className="text-lg">🐙</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                <span className="text-lg">📸</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>📍 Nairobi, Kenya</p>
              <p>📧 andrew@example.com</p>
              <p>📱 +254 712 345 678</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Andrew Mutua. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer