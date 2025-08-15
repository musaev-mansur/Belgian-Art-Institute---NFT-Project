"use client"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#1b1b1b] text-white">
      <div className="container max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">
            FAQ — Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-300">
            Belgian Art Institute
          </p>
        </div>

        {/* FAQ Content */}
        <div className="space-y-8">
          {/* About the Institute */}
          <section>
            <h2 className="text-2xl font-medium mb-6 text-gray-200">ABOUT THE INSTITUTE</h2>
            
            <div className="space-y-6">
              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">1. What is the Belgian Art Institute?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Founded in 2014, the Belgian Art Institute is an independent organization uniting collectors, researchers, and connoisseurs of art. We are dedicated to the study, preservation, and interpretation of artistic heritage, combining classical methodologies with contemporary technologies.
                </p>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">2. What does the Institute do?</h3>
                <p className="text-gray-300 leading-relaxed">
                  The Institute focuses on the attribution of artworks, technical analysis, provenance research, and the re-evaluation of forgotten or misinterpreted works. Special attention is given to late 19th–early 20th century painting, particularly Impressionism.
                </p>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">3. Why do you work with Web3 and NFTs?</h3>
                <p className="text-gray-300 leading-relaxed">
                  We see Web3 not as a passing trend, but as a culturally necessary extension of our institutional mission. Through blockchain and decentralized infrastructures, we ensure the preservation and authenticity of artworks in the digital age.
                </p>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">4. Why was your work not public before?</h3>
                <p className="text-gray-300 leading-relaxed">
                  For many years, the Institute operated discreetly, serving private collections and guaranteeing anonymity to their owners. Today, we are opening part of our archives and case studies to a wider audience through educational and digital projects.
                </p>
              </div>
            </div>
          </section>

          {/* About the BACON NFT Project */}
          <section>
            <h2 className="text-2xl font-medium mb-6 text-gray-200">ABOUT THE BACON NFT PROJECT</h2>
            
            <div className="space-y-6">
              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">5. What is BACON NFT?</h3>
                <p className="text-gray-300 leading-relaxed">
                  BACON NFT is a project for the digital tokenization of an authentic self-portrait by Francis Bacon (1909–1992) bearing the dedication "To Ron Francis." The project is carried out by the Belgian Art Institute and combines rigorous scientific verification with Web3 technology.
                </p>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">6. What does the collection include?</h3>
                <p className="text-gray-300 leading-relaxed mb-3">The project consists of:</p>
                <ul className="text-gray-300 leading-relaxed space-y-2 ml-6">
                  <li>• 5 collections of 1,111 fragments each (5,555 NFTs in total), each representing one-fifth of the painting. Each collection is named after the dominant color tone of its fragments: White, Grey, Purple, Orange, Blue. The release of these collections will gradually reveal the complete self-portrait.</li>
                  <li>• 1 unique 1/1 NFT of the dedication inscription (to be raffled after the third collection).</li>
                  <li>• 1 unique 1/1 NFT of the complete digital version of the painting (to be raffled after the fifth collection).</li>
                </ul>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">7. How is the authenticity of the painting verified?</h3>
                <p className="text-gray-300 leading-relaxed mb-3">The painting has undergone the following expert procedures:</p>
                <ul className="text-gray-300 leading-relaxed space-y-2 ml-6">
                  <li>• Graphological analysis of the inscription (Debora Jaffe, UK Law Society)</li>
                  <li>• Technical and chemical analysis with dating (Royal Institute for Cultural Heritage, Belgium)</li>
                  <li>• Radiocarbon analysis (Royal Institute for Cultural Heritage, Belgium)</li>
                  <li>• Documented provenance (Gummesons Gallery, Sweden)</li>
                  <li>• Independent expert valuation (MAES, Belgium)</li>
                </ul>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">8. Where is the original painting kept?</h3>
                <p className="text-gray-300 leading-relaxed">
                  The original Francis Bacon self-portrait is stored in a secure facility in Belgium.
                </p>
              </div>
            </div>
          </section>

          {/* Rights & Licensing */}
          <section>
            <h2 className="text-2xl font-medium mb-6 text-gray-200">RIGHTS & LICENSING</h2>
            
            <div className="space-y-6">
              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">9. What does an NFT buyer receive?</h3>
                <p className="text-gray-300 leading-relaxed mb-3">Each NFT grants the holder:</p>
                <ul className="text-gray-300 leading-relaxed space-y-2 ml-6">
                  <li>• Ownership of the token linked to a specific fragment of the painting</li>
                  <li>• Non-exclusive commercial rights to the image of that fragment (for publications, merchandise, licensing, etc.) with attribution to: BACON NFT, Belgian Art Institute</li>
                  <li>• The right to personal, non-commercial use of the full painting after it has been fully revealed</li>
                  <li>• Access to expert documentation: authenticity reports, provenance, analyses</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-3">
                  Ownership of an NFT does not confer rights to the physical painting. The original remains the property of its current owner and is managed by the Belgian Art Institute within an established legal structure.
                </p>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">10. Can the image of the entire painting be used?</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  After the release of all five collections, the painting will be fully revealed. All fragment owners will have:
                </p>
                <ul className="text-gray-300 leading-relaxed space-y-2 ml-6">
                  <li>• The right to personal, non-commercial use of the full image (for publications, social media)</li>
                  <li>• The right to display it in private and educational contexts</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-3">
                  Commercial use of the full image is not permitted and remains the exclusive right of the Institute.
                </p>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">11. Who receives the rights to the unique 1/1 NFTs?</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-2">
                      🔹 NFT with Bacon's dedication inscription (raffled after the third collection):
                    </p>
                    <p className="text-gray-300 leading-relaxed ml-4">
                      The winner receives non-exclusive personal and public, non-commercial rights to the image.
                    </p>
                    <p className="text-gray-300 leading-relaxed ml-4">
                      Eligibility: at the time of the raffle, holders must own at least one NFT from each of the first three collections.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-2">
                      🔹 NFT with the full digital version of the painting (raffled after the fifth collection):
                    </p>
                    <p className="text-gray-300 leading-relaxed ml-4">
                      The winner receives non-exclusive personal and public, non-commercial rights to the full image of the painting.
                    </p>
                    <p className="text-gray-300 leading-relaxed ml-4">
                      Eligibility: holders must own at least one NFT from each of the five collections.
                    </p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    🛑 Commercial use of the full image remains with the Belgian Art Institute.
                  </p>
                </div>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">12. Can NFTs be transferred or resold?</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Yes, but with temporary restrictions:
                </p>
                <ul className="text-gray-300 leading-relaxed space-y-2 ml-6">
                  <li>• Secondary market sales are prohibited until the end of the 48-hour sale period of the fifth (final) collection, i.e., until 2 November 2025</li>
                  <li>• After that date, all restrictions will be lifted, and NFT owners may freely trade their tokens</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-3">
                  This is to prevent speculation, price manipulation, and to preserve the ethical balance of the Institute's non-commercial mission.
                </p>
              </div>
            </div>
          </section>

          {/* Public Release & Participation */}
          <section>
            <h2 className="text-2xl font-medium mb-6 text-gray-200">PUBLIC RELEASE & PARTICIPATION</h2>
            
            <div className="bg-[#282828] p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium mb-3">Project Timeline:</h3>
              <ul className="text-gray-300 leading-relaxed space-y-2 ml-6">
                <li>• 4 September 2025 — Launch of the first collection (White) on OpenSea</li>
                <li>• 4–5 September 2025 — 48-hour recognition window for early supporters. During this time, each purchase of one NFT will be matched with a second NFT as a gift — a gesture of gratitude and trust</li>
                <li>• 18 September 2025 — Launch of the second collection (Grey)</li>
                <li>• 2 October 2025 — Launch of the third collection (Purple)</li>
                <li>• 4 October 2025 — Raffle of the unique 1/1 NFT with Francis Bacon's dedication inscription (eligibility: ownership of at least one NFT from each of the first three collections)</li>
                <li>• 16 October 2025 — Launch of the fourth collection (Orange)</li>
                <li>• 30 October 2025 — Launch of the fifth collection (Blue)</li>
                <li>• 2 November 2025 — Lifting of all resale restrictions on the secondary market</li>
                <li>• 2 November 2025 — Raffle of the unique 1/1 NFT with the complete digital version of the painting (eligibility: ownership of at least one NFT from each of the five collections)</li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">13. Where and when can NFTs be purchased?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Digital fragments of the painting are released on OpenSea in stages: each collection of 1,111 fragments is issued at two-week intervals. The first collection will be available from 4 September 2025.
                </p>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">14. What recognition do early supporters receive?</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  The Belgian Art Institute does not use pre-sale registration or closed access lists. We deliberately reject whitelist systems, aiming to create an open environment for those who share our values of cultural preservation and interpretation.
                </p>
                <p className="text-gray-300 leading-relaxed mb-3">
                  As a token of gratitude for participation within the first 48 hours after the start of a collection's public release, the Institute will gift a second digital asset (NFT) to each early purchaser. This gesture is symbolic recognition and support — not a market mechanism — and reflects the ethics of reciprocity and trust at the core of the project.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This model allows us to emphasize that we appeal not to consumer impulse, but to intellectual and cultural engagement.
                </p>
              </div>
            </div>
          </section>

          {/* Partnership & Contacts */}
          <section>
            <h2 className="text-2xl font-medium mb-6 text-gray-200">PARTNERSHIP & CONTACTS</h2>
            
            <div className="space-y-6">
              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">15. Can I submit a painting for authentication?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes. We accept requests from private collectors, galleries, and institutions. Preliminary applications can be submitted through the form on our website.
                </p>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-3">16. How can I contact you?</h3>
                <p className="text-gray-300 leading-relaxed">
                  📩 contact@belgianart.institute
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We respond within 48 hours. Follow our updates on X (Twitter) and Instagram.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-[#282828] p-8 rounded-lg text-center">
            <h2 className="text-2xl font-medium mb-4">Didn't find your question?</h2>
            <p className="text-gray-300 leading-relaxed">
              Write to us — we will update this section. The Belgian Art Institute operates in a spirit of open dialogue, scholarly transparency, and cultural responsibility.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
