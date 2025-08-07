import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-[#1b1b1b] text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold mb-2 text-white">Belgian Art Institute</h2>
          <p className="text-gray-300 mb-4 max-w-md">
            Preserving artistic heritage through scholarship, conservation, and digital innovation.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/about/institute" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/security/ethics" className="hover:text-white transition-colors">
              Ethics
            </Link>
            <a 
              href="https://www.instagram.com/belgian.art.institute?igsh=MThkZTFieDlwZ3o3Yw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Instagram size={16} />
              <span>Instagram</span>
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-8">
            © {new Date().getFullYear()} Belgian Art Institute ASBL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
