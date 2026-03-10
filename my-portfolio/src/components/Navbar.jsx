import { useState } from 'react'
import profilePhoto from '../assets/portfolio2.png'

const Navbar = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-800 bg-opacity-95 z-50 shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Profile Section */}
        <div className="flex items-center space-x-3">
           <img
              src={profilePhoto}
              alt="Profile"
              className="w-11 h-11 rounded-full object-cover object-top border-2 border-white"
            />
          <div>
            <h1 className="text-lg font-bold text-white">Andrew Mutua</h1>
            <p className="text-xs font-bold text-blue-200">Software Developer</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-base font-bold tracking-wide ${
                activeSection === link.href.substring(1)
                  ? 'text-blue-200'
                  : 'text-white hover:text-blue-300'
              } transition-colors duration-300 relative py-1`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-200 transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'scale-x-100'
                    : 'scale-x-0'
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-blue-700 px-6 py-4 transition-all duration-300 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-base font-bold tracking-wide ${
                activeSection === link.href.substring(1)
                  ? 'text-blue-200'
                  : 'text-white'
              } hover:text-blue-300 transition-colors duration-300 py-1`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
