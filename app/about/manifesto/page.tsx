"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-[#1b1b1b] text-white">
      <div className="container max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link 
          href="/about/institute" 
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to About
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light mb-4">
            Belgian Art Institute in Web3: Manifesto & Mission Statement
          </h1>
          <h2 className="text-2xl font-light text-gray-300">
            From Canvas to Code — Preserving Artistic Heritage through NFT
          </h2>
        </div>

        {/* Manifesto Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h3 className="text-2xl font-medium mb-4">I. Who We Are</h3>
            <p className="text-lg leading-relaxed">
              The Belgian Art Institute (BAI), founded in 2014, is an independent cultural and scientific institution dedicated to the preservation, authentication, and recontextualization of European painting. With a focus on Impressionism and 20th-century masterworks, BAI operates at the intersection of art history, technical expertise, and public scholarship.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-medium mb-4">II. Why We Enter Web3</h3>
            <p className="text-lg leading-relaxed mb-4">
              Digital technologies offer powerful new tools for preserving and reinterpreting art — but they also pose aesthetic risks. In the early days of NFTs, digital art was often dominated by speculative and anti-aesthetic tendencies. The visual culture of the NFT boom was shaped not by connoisseurship, but by hype: crude avatars, derivative projects, market-driven memes.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              This rupture occurred, in part, because those who cherish traditional art — collectors, curators, scholars — often viewed NFTs as antithetical to true aesthetic value. As a result, the digital space evolved without the participation of those with authentic cultural insight.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Today, after the speculative bubble has burst, NFTs are entering a new phase of reflection, rebuilding, and reinvention. We believe this is the right moment to return aesthetic dignity to the digital realm.
            </p>
            <p className="text-lg leading-relaxed">
              Our entrance into Web3 is a cultural intervention. We seek to bring the depth, discipline, and transcendence of classical painting into the language of the blockchain — not simply to sell, but to preserve, to recontextualize, and to inspire.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-medium mb-4">III. Our Mission in the Digital World</h3>
            <p className="text-lg leading-relaxed mb-4">We aim to:</p>
            <ul className="text-lg leading-relaxed space-y-2 ml-6">
              <li>• Digitally revive masterworks of painting with full historical and scientific fidelity;</li>
              <li>• Use NFTs not merely as collectibles, but as vessels of cultural memory;</li>
              <li>• Reintroduce aesthetic excellence into digital art through curation, restoration, and education;</li>
              <li>• Connect great works of the past with the digital present — so that future generations, who may encounter art primarily through screens, are not deprived of humanity's finest creations;</li>
              <li>• Ensure that beauty, meaning, and heritage remain vital forces in the emerging digital world.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-medium mb-4">IV. What Makes Us Different</h3>
            <p className="text-lg leading-relaxed mb-4">
              BAI is not a marketplace. We do not offer editions, fan tokens, or speculative avatars.
            </p>
            <p className="text-lg leading-relaxed mb-4">We offer proof.</p>
            <ul className="text-lg leading-relaxed space-y-2 ml-6 mb-4">
              <li>• Proof that an artwork is authentic.</li>
              <li>• Proof that cultural objects can be preserved in the digital realm.</li>
              <li>• Proof that NFTs can carry scholarly and historical value.</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Our first major project, BACON NFT, features a scientifically authenticated self-portrait by Francis Bacon (1956–57), fragmented into 5,555 unique parts. Each carries not only a piece of the image, but a trace of the artist's legacy, supported by verifiable documentation from leading experts. The full portrait will only be revealed upon completion of the five-stage release.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-medium mb-4">V. Our Values</h3>
            <ul className="text-lg leading-relaxed space-y-2 ml-6">
              <li>• <strong>Transparency:</strong> All documentation open to NFT holders.</li>
              <li>• <strong>Integrity:</strong> No stealth mints. No wash trading. No market manipulation.</li>
              <li>• <strong>Education:</strong> Each drop is a lesson in art history, conservation, and meaning.</li>
              <li>• <strong>Curation:</strong> Every work we release is selected with scholarly care and long-term significance.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-medium mb-4">VI. Looking Ahead</h3>
            <p className="text-lg leading-relaxed mb-4">Our future projects will include:</p>
            <ul className="text-lg leading-relaxed space-y-2 ml-6">
              <li>• NFT collections directly linked to masterpieces by great artists, supported by verifiable, evidence-based authentication;</li>
              <li>• A strong focus on quality over quantity, ensuring each release meets rigorous standards of scholarship and cultural importance;</li>
              <li>• The creation of a unique environment for collectors and communities who share a refined understanding of beauty, legacy, and artistic excellence.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-medium mb-4">VII. Join Us</h3>
            <p className="text-lg leading-relaxed mb-4">
              To collectors, curators, scholars, and visionaries:
            </p>
            <p className="text-lg leading-relaxed mb-4">
              This is not a call to speculation — but to stewardship.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Let us build together a digital museum — rooted in the past, living in the present, and open to the future.
            </p>
            <p className="text-xl font-medium text-center">
              Belgian Art Institute
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
