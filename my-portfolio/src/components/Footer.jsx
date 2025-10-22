import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Contact (+254 799933938)', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-blue-800 text-gray-200 shadow-inner">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Follow Me */}
        <div className="text-center md:text-left">
          <h3 className="text-base font-bold text-white mb-3">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/andrew.mutua.833798"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
              title="Facebook"
            >
              <FaFacebookF className="text-white text-xl hover:text-blue-400" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/andrewiz_mutua"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
              title="Instagram"
            >
              <FaInstagram className="text-white text-xl hover:text-pink-400" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/andrew-mutua-657675350"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
              title="LinkedIn"
            >
              <FaLinkedinIn className="text-white text-xl hover:text-blue-400" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/andrewmutua"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:scale-110 transition-transform duration-300"
              title="GitHub"
            >
              <FaGithub className="text-white text-xl hover:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-base font-bold text-white mb-3">Quick Links</h3>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-blue-100 hover:text-white transition-colors duration-300 text-sm"
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

        {/* Copyright */}
        <div className="text-center md:text-right text-blue-100 text-sm">
          <p>© {currentYear} Andrew Mutua. All rights reserved.</p>
          <p className="text-blue-300 text-xs mt-1">
            Developed and designed by <span className="font-semibold">@dev mutu</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
