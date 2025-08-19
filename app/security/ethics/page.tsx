"use client"

import { ethicsText } from "@/lib/content"

export default function EthicsPage() {
  return (
    <div className="min-h-screen bg-[#1b1b1b] text-white">
      <div className="container max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">
            Ethics & Confidentiality
          </h1>
          <p className="text-lg text-gray-300">
            Principles of Responsible Research and Engagement
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-[#282828] p-8 rounded-lg shadow-custom-inset">
            <p className="text-lg leading-relaxed text-gray-300">
              At the Belgian Art Institute, we believe that the study, conservation, and interpretation of artworks is not only an academic or technical endeavor — it is an ethical responsibility. Every engagement with a work of art carries implications for legacy, ownership, memory, and trust.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              Our Institute operates at the intersection of cultural sensitivity and scholarly rigor. Whether working with private collections, sensitive provenance records, or unpublished archival material, we adhere to a framework grounded in confidentiality, professional integrity, and accountability.
            </p>
          </div>

          {/* Section 1: Confidentiality */}
          <div className="bg-[#282828] p-8 rounded-lg shadow-custom-inset">
            <h2 className="text-2xl font-medium mb-6 text-white">1. Confidentiality as Ethical Commitment</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              Many of the artworks studied by the Institute are held in private collections or entrusted to us through discrete networks of collectors, foundations, and heirs. In these cases, discretion is not a courtesy — it is a core condition of trust.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              We are committed to protecting the privacy of individuals and families who give us access to works that are not publicly known. Where confidentiality agreements are in place, we refrain from publishing names, locations, or identifying details without explicit written consent.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              In cases where images cannot be shared publicly, we clearly indicate this with standard phrasing, such as:
            </p>
            <ul className="text-lg leading-relaxed text-gray-300 space-y-2 ml-6">
              <li>• "Image not available for public display at the request of the owner."</li>
              <li>• "Private collection, identity withheld."</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              We view such statements not as limitations, but as part of a respectful and professional approach to the complexity of ownership, legacy, and discretion in the art world.
            </p>
          </div>

          {/* Section 2: Standards of Ethical Research */}
          <div className="bg-[#282828] p-8 rounded-lg shadow-custom-inset">
            <h2 className="text-2xl font-medium mb-6 text-white">2. Standards of Ethical Research</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              All research conducted by the Belgian Art Institute — whether technical, historical, or interpretive — is grounded in ethical principles and scholarly transparency. This includes:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Methodological transparency</h3>
                <p className="text-gray-300 leading-relaxed">
                  All scientific processes (e.g., radiocarbon dating, pigment analysis, IR reflectography) are performed in partnership with accredited institutions. Method notes are preserved in our internal archive.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Attribution integrity</h3>
                <p className="text-gray-300 leading-relaxed">
                  We avoid absolute claims where evidence is inconclusive. Attribution is presented along a calibrated spectrum ("studio of", "circle of", "attributed to") and reviewed across disciplines with input from independent experts.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Conservation ethics</h3>
                <p className="text-gray-300 leading-relaxed">
                  We follow internationally accepted standards (ICOM-CC, European Network for Conservation-Restoration), including principles of reversibility, minimal intervention, and traceable documentation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Provenance sensitivity</h3>
                <p className="text-gray-300 leading-relaxed">
                  For works with uncertain or contested provenance — especially in cases of displacement due to war or coercion — we conduct rigorous archival research and consult restitution specialists where appropriate.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Responsible Communication */}
          <div className="bg-[#282828] p-8 rounded-lg shadow-custom-inset">
            <h2 className="text-2xl font-medium mb-6 text-white">3. Responsible Communication</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              We recognize that language and imagery used in public-facing and scholarly communication carry institutional weight. Therefore:
            </p>
            <ul className="text-lg leading-relaxed text-gray-300 space-y-2 ml-6 mb-4">
              <li>• All publications (digital and print) are reviewed for compliance with legal, scholarly, and ethical standards.</li>
              <li>• We avoid sensationalism, premature attribution, or speculative value claims.</li>
              <li>• We strive to balance clarity and scholarly nuance, particularly in materials intended for public engagement.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-300">
              When we present research or discoveries, we situate them within broader historical and cultural narratives — not simply as singular events, but as contributions to the evolving understanding of art, time, and memory.
            </p>
          </div>

          {/* Section 4: Collaboration and Consent */}
          <div className="bg-[#282828] p-8 rounded-lg shadow-custom-inset">
            <h2 className="text-2xl font-medium mb-6 text-white">4. Collaboration and Consent</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              Ethical research is, by its nature, collaborative. Our work is often conducted alongside professionals from museums, universities, conservation labs, auction houses, and private collections.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              All such collaborations are guided by mutual respect, shared objectives, and informed consent. When we draw on external expertise — whether scientific, academic, or curatorial — we attribute credit fully and invite co-authorship or formal acknowledgment where appropriate.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 font-medium">
              We do not appropriate discoveries. We amplify them.
            </p>
          </div>

          {/* Section 5: Our Commitment to the Future */}
          <div className="bg-[#282828] p-8 rounded-lg shadow-custom-inset">
            <h2 className="text-2xl font-medium mb-6 text-white">5. Our Commitment to the Future</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              Ethics in art historical research is not a static code — it is a living process. As new technologies, ownership models (such as NFTs and digital provenance), and cultural responsibilities emerge, the Belgian Art Institute commits to revisiting and refining its protocols.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              We believe that discretion and transparency are not opposites, but complementary principles. It is through their balance that we hope to serve the academic community, private collectors, and the broader public with integrity — and to earn the trust required to preserve cultural heritage with dignity and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
