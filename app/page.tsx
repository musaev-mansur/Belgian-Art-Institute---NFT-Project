"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function HomePage() {

  return (
    <div className="bg-[#212121] text-white-800">
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
            The BACON NFT Project
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            A scientifically authenticated self-portrait by Francis Bacon (1956–57). Acquire one of the 5,555 unique fragments and become a unique participant in preserving this masterpiece.
          </p>
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="aspect-square rounded-lg overflow-hidden shadow-custom-inset">
              <Image
                src="/images/bacon-nft-main.png"
                alt="Fragmented self-portrait of Francis Bacon"
                fill
                className="object-cover"
                priority
              />
              {/* OpenSea Link Overlay */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <a
                  href=" https://opensea.io/0x3f8bd5d927d40d637055f86e31d6c200432dd753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 hover:bg-white text-black px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 opacity-0 hover:opacity-100"
                >
                  <span>View on OpenSea</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* NFT Information Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#282828] rounded-lg p-8 mb-8 shadow-custom-inset">
            <h2 className="text-2xl font-light text-white mb-4">
              Fragmented Masterpiece
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              This scientifically authenticated self-portrait by Francis Bacon has been digitally fragmented into 5,555 unique pieces. Each fragment represents a piece of art history and can be owned as an NFT.
            </p>
            
            <div className="grid gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5 555</div>
                <div className="text-gray-400">Total Fragments</div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://opensea.io/0x3f8bd5d927d40d637055f86e31d6c200432dd753"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-custom-inset"
              >
                <span>View Collection on OpenSea</span>
                <ExternalLink size={18} />
              </a>

              <a
                href="https://www.baconnft.art/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-custom-inset"
              >
                <span>BACON NFT COLLECTION — WHITE SERIES</span>
                <ExternalLink size={18} />
              </a>
            </div>


          </div>
        </div>
      </main>
    </div>
  )
}
