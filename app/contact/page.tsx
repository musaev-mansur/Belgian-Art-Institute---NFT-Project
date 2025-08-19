import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { BackButton } from "@/components/back-button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#212121]">
      <div className="container max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <BackButton href="/" />
        </div>

        <div className="bg-[#282828] rounded-lg p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-300 text-lg">
              Get in touch with the Belgian Art Institute
            </p>
          </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* NFT Project Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">NFT Project Inquiries</h3>
                      <a 
                        href="mailto:nft@belgianart.institute" 
                        className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                      >
                        nft@belgianart.institute
                      </a>
                      <p className="text-gray-400 text-sm mt-1">
                        For questions about the BACON NFT project and digital assets
                      </p>
                    </div>
                  </div>

                  {/* General Institute Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="text-green-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">General Inquiries</h3>
                      <a 
                        href="mailto:contact@belgianart.institute" 
                        className="text-green-400 hover:text-green-300 transition-colors break-all"
                      >
                        contact@belgianart.institute
                      </a>
                      <p className="text-gray-400 text-sm mt-1">
                        For general questions about the Institute and its activities
                      </p>
                    </div>
                  </div>

                  {/* Curator Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Curatorial Services</h3>
                      <a 
                        href="mailto:curator@belgianart.institute" 
                        className="text-purple-400 hover:text-purple-300 transition-colors break-all"
                      >
                        curator@belgianart.institute
                      </a>
                      <p className="text-gray-400 text-sm mt-1">
                        For curatorial consultations and art authentication services
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Additional Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-gray-400" size={20} />
                    <span className="text-gray-300">Response time: 24-48 hours</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-gray-400" size={20} />
                    <span className="text-gray-300">Based in Belgium</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="bg-[#1b1b1b] rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 bg-[#282828] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-[#282828] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-3 py-2 bg-[#282828] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="nft">NFT Project Inquiry</option>
                    <option value="general">General Inquiry</option>
                    <option value="curatorial">Curatorial Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-3 py-2 bg-[#282828] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-900 bg-opacity-20 rounded-md">
                <p className="text-sm text-blue-300">
                  <strong>Note:</strong> For immediate assistance, please use the appropriate email address above. 
                  This contact form is for general inquiries only.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
  )
}
