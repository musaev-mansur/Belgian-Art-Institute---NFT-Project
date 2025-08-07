"use client"

import { Button } from "@/components/ui/button"
import { useWeb3 } from "@/hooks/use-web3"

// The key change is "export default function"
export default function WalletConnect() {
  const { account, connectWallet, disconnectWallet, isConnected } = useWeb3()

  if (!isConnected) {
    return (
      <Button onClick={connectWallet} variant="outline">
        Connect Wallet
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-mono text-gray-600">
        {account?.slice(0, 6)}...{account?.slice(-4)}
      </span>
      <Button onClick={disconnectWallet} variant="secondary" size="sm">
        Disconnect
      </Button>
    </div>
  )
}
