"use client"

import { useState, useEffect } from "react"
import { useWeb3 } from "@/hooks/use-web3"
import { useContract } from "@/hooks/use-contract"

interface Fragment {
  id: number
  isMinted: boolean
}

// The key change is "export default function"
export default function FragmentGrid() {
  const { isConnected } = useWeb3()
  const { mintFragment } = useContract()
  const [fragments, setFragments] = useState<Fragment[]>([])
  const [loading, setLoading] = useState(true)
  const [mintingId, setMintingId] = useState<number | null>(null)

  useEffect(() => {
    const generateFragments = () => {
      // This is still using the old project's logic as a placeholder
      const fragmentsData: Fragment[] = Array.from({ length: 500 }, (_, i) => ({
        id: i + 1,
        isMinted: Math.random() < 0.2, // 20% minted for demo
      }))
      setFragments(fragmentsData)
      setLoading(false)
    }
    generateFragments()
  }, [])

  const handleMint = async (fragmentId: number) => {
    if (!isConnected) {
      alert("Please connect your wallet first.")
      return
    }
    setMintingId(fragmentId)
    try {
      // This is a placeholder and won't actually mint
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log(`Minting fragment #${fragmentId}`)
      setFragments((prev) => prev.map((f) => (f.id === fragmentId ? { ...f, isMinted: true } : f)))
    } catch (error) {
      console.error("Mint failed:", error)
      alert("Minting failed. See console for details.")
    } finally {
      setMintingId(null)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-10 md:grid-cols-20 lg:grid-cols-25 gap-1">
        {fragments.map((fragment) => (
          <div
            key={fragment.id}
            className={`
              aspect-square cursor-pointer transition-all duration-150
              ${fragment.isMinted ? "bg-gray-400" : "bg-gray-200 hover:bg-blue-300"}
            `}
            title={`Fragment #${fragment.id}`}
            onClick={() => !fragment.isMinted && handleMint(fragment.id)}
          >
            {mintingId === fragment.id && (
              <div className="w-full h-full flex items-center justify-center bg-blue-400">
                <div className="animate-spin rounded-full h-3 w-3 border-b border-white" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>This is a placeholder grid. Click an available fragment to simulate minting.</p>
        {!isConnected && <p className="mt-2 text-red-600">Please connect your wallet to mint fragments.</p>}
      </div>
    </div>
  )
}
