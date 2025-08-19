"use client"

import Image from "next/image"

export default function ClubPage() {
  return (
    <div className="min-h-screen bg-[#1b1b1b] text-white">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light mb-4">
            Friends of the Belgian Art Institute Club
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The Friends of the Institute Club is a private community uniting those who have become part of our mission through participation in the BACON NFT project. Membership in the Club is open to those who hold one or more of the Institute's digital assets.
          </p>
        </div>

        {/* Club Emblem */}
        <div className="flex justify-center mb-12">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/images/2_logo.png"
              alt="CLUB DE L'INSTITUT BELGE D'ARTS - Heraldic Crest"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/images/1_logo.png"
              alt="CLUB DE L'INSTITUT BELGE D'ARTS - Heraldic Crest"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/images/3_logo.png"
              alt="CLUB DE L'INSTITUT BELGE D'ARTS - Heraldic Crest"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-lg leading-relaxed">
              The Friends of the Institute Club is a private community uniting those who have become part of our mission through participation in the BACON NFT project. Membership in the Club is open to those who hold one or more of the Institute's digital assets.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-3xl font-light mb-4">Eligibility</h2>
            <p className="text-lg leading-relaxed">
              Anyone who has acquired at least one digital fragment of Francis Bacon's self-portrait, issued in the name of the Belgian Art Institute, may join the Club.
            </p>
          </section>

          {/* Levels of Affiliation */}
          <section>
            <h2 className="text-3xl font-light mb-4">Levels of Affiliation</h2>
            <div className="overflow-x-auto shadow-custom-inset">
              <table className="w-full border-collapse border border-gray-700">
                <thead>
                  <tr className="bg-[#282828]">
                    <th className="border border-gray-700 p-4 text-left shadow-custom-inset">Category</th>
                    <th className="border border-gray-700 p-4 text-left shadow-custom-inset">Eligibility</th>
                    <th className="border border-gray-700 p-4 text-left shadow-custom-inset">Access & Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-700 p-4 font-medium">Friend of the Institute</td>
                    <td className="border border-gray-700 p-4">Ownership of one or more fragments</td>
                    <td className="border border-gray-700 p-4">General access, participation in dialogue</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="border border-gray-700 p-4 font-medium">Ally–Curator</td>
                    <td className="border border-gray-700 p-4">Ownership of a complete set of 5 NFTs from different collections</td>
                    <td className="border border-gray-700 p-4">Participation in discussions on new initiatives</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-700 p-4 font-medium">Advisor to the Institute</td>
                    <td className="border border-gray-700 p-4">Invitation for outstanding service to the Institute</td>
                    <td className="border border-gray-700 p-4">Advisory role in determining future directions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Member Privileges */}
          <section>
            <h2 className="text-3xl font-light mb-4">Member Privileges</h2>
            <div className="space-y-4">
              <div className="bg-[#282828] p-6 rounded-lg shadow-custom-inset">
                <h3 className="text-xl font-medium mb-3">1. Access to Future Collections</h3>
                <p className="text-gray-300">
                  Members are the first to explore new archives, research materials, and works in preparation.
                </p>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg shadow-custom-inset">
                <h3 className="text-xl font-medium mb-3">2. Participation in Shaping the Institute's Initiatives</h3>
                <p className="text-gray-300">
                  Curators and Advisors are invited to collaborate in defining the Institute's scholarly and exhibition programs.
                </p>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg shadow-custom-inset">
                <h3 className="text-xl font-medium mb-3">3. Viewing of Rare Materials</h3>
                <p className="text-gray-300">
                  Selected excerpts from expert reports, technical studies, and supporting documentation will be made available to Club members through secure viewing.
                </p>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg shadow-custom-inset">
                <h3 className="text-xl font-medium mb-3">4. Participation in Private Gatherings</h3>
                <p className="text-gray-300">
                  We plan to host regular gatherings, including virtual lectures, discussions, and consultations with scholars, art historians, and collectors.
                </p>
              </div>

              <div className="bg-[#282828] p-6 rounded-lg shadow-custom-inset">
                <h3 className="text-xl font-medium mb-3">5. Special Gifts</h3>
                <p className="text-gray-300">
                  At its discretion, the Institute may offer members digital tokens of appreciation, unreleased archival fragments, or artistic images inspired by the archives.
                </p>
              </div>
            </div>
          </section>

          {/* Principle */}
          <section className="bg-[#282828] p-8 rounded-lg shadow-custom-inset">
            <h2 className="text-2xl font-light mb-4">Principle</h2>
            <p className="text-lg leading-relaxed">
              We are building a club of friends — people who share the belief that art is not a commodity, but a testimony of the human spirit. Its preservation, interpretation, and transmission demand collective effort, conviction, and inner discipline.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
