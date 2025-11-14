import { useState, useRef } from 'react'
import { MapPin, Mail, Phone, Linkedin, Facebook, Instagram } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import  {displayToast} from '../utils/DisplayToast'

const Contact = () => {
  const form = useRef()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)

    emailjs.sendForm(
      'service_vq8n26r',       // Your Service ID
      'template_7nzp3li',      // Your Template ID
      form.current,            // Reference to the form
      'tl7Ix-yi-UGGHkLam'     // Your Public Key
    )
    .then((result) => {
      console.log('✅ Email sent successfully:', result.text)
      displayToast('success', 'Message sent successfully! I will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    })
    .catch((error) => {
      console.error('❌ Error sending email:', error)
      displayToast('error', 'Failed to send message. Please try again later.')
    })
    .finally(() => {
      setIsSending(false)
    })
  }

  const contactInfo = [
    { icon: <MapPin className="w-6 h-6" />, title: 'Location', value: 'Mombasa, Kenya', link: '#' },
    { icon: <Mail className="w-6 h-6" />, title: 'Email', value: 'developer.mutu@gmail.com', link: 'mailto:developer.mutu@gmail.com' },
    { icon: <Phone className="w-6 h-6" />, title: 'Phone', value: '+254 799 933 938', link: 'tel:+254799933938' }
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/andrew-mutua-657675350', color: 'hover:bg-blue-500 hover:text-white' },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com/andrew.mutua.833798', color: 'hover:bg-blue-600 hover:text-white' },
    { name: 'WhatsApp', icon: <FaWhatsapp className="w-5 h-5" />, url: 'https://wa.me/254799933938', color: 'hover:bg-green-500 hover:text-white' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/andrewiz_mutua', color: 'hover:bg-pink-500 hover:text-white' }
  ]

  return (
    <section id="contact" className="min-h-screen py-20 bg-[#EFF6FF]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-800">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Let's Talk</h3>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
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
                  className="flex items-start group hover:translate-x-2 transition-transform duration-300 p-3 rounded-lg hover:bg-white hover:shadow-md"
                >
                  <span className="text-blue-600 mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-110 text-gray-600 ${social.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-900">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-900">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-gray-900">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-gray-900">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Button with spinner */}
              <button
                type="submit"
                disabled={isSending}
                className={`w-full font-medium px-6 py-4 rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white ${
                  isSending
                    ? 'bg-blue-300 cursor-not-allowed text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white hover:scale-105'
                }`}
              >
                {isSending ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
