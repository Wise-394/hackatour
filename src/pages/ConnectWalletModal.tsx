import React from "react";
import { Wallet, Download, Info, BookOpen, X } from "lucide-react";
import { useWallet } from "@suiet/wallet-kit";

interface LinkItem {
  href: string;
  text: string;
  icon: React.ReactNode;
}

type ConnectWalletModalProps = {
  show: boolean;
  onClose: () => void;
};

export default function ConnectWalletModal({
  show,
  onClose,
}: ConnectWalletModalProps): JSX.Element | null {
  const { connected, account, status, select, detectedWallets } = useWallet();

  const slushDetected = detectedWallets?.some((w) => w.name === "Slush");

  // Auto-close when connected
  React.useEffect(() => {
    if (connected) onClose();
  }, [connected, onClose]);

  const handleConnectWallet = async (): Promise<void> => {
    try {
      await select("Slush");
      console.log("Wallet connected successfully");
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="connect-wallet-title"
    >
      <div className="relative w-full max-w-md sm:max-w-sm max-w-[90%] p-6 sm:p-8 md:p-10 border shadow-2xl bg-white/80 backdrop-blur-md rounded-3xl border-white/60">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal-gray hover:text-optimistic-yellow"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Branding */}
        <div className="mb-6 text-center">
          <h1
            id="connect-wallet-title"
            className="text-4xl sm:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-vibrant to-[#6C63FF] drop-shadow-md"
          >
            Hackatour
          </h1>
          <p className="mt-1 text-xs font-medium sm:text-sm text-charcoal-gray/70">
            Your Web3‑Powered Tour Companion
          </p>
        </div>

        {/* Wallet Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full shadow-inner bg-ocen-blue/60">
            <Wallet size={48} strokeWidth={1.5} className="text-charcoal-gray" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-xl font-bold text-center sm:text-2xl text-charcoal-gray">
          {connected ? "Wallet Connected" : "Connect Slush Wallet"}
        </h2>
        <p className="mt-2 text-sm text-center text-charcoal-gray/70">
          {connected
            ? `Connected to ${account?.address?.slice(0, 6)}...${account?.address?.slice(-4)}`
            : "Secure access to this Sui Network through Slush."}
        </p>

        {/* Warning if extension not found */}
        {!slushDetected && !connected && (
          <p className="mt-4 text-center text-red-600">
            Slush Wallet extension not detected. Please{" "}
            <a
              href="https://chromewebstore.google.com/detail/slush-%E2%80%94-a-sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
            >
              install it here
            </a>
            .
          </p>
        )}

        {/* Connect Button */}
        <button
          onClick={handleConnectWallet}
          disabled={status === "connecting" || connected || !slushDetected}
          className="group relative flex items-center justify-center w-full py-4 mt-6 text-base sm:text-lg font-bold text-white transition-all duration-300 ease-in-out rounded-full bg-gradient-to-r from-[#66D9ED] to-[#6C63FF] hover:bg-[#FFD700] hover:text-charcoal-gray hover:bg-none hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#66D9ED]/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          aria-label={connected ? "Wallet Connected" : "Connect Slush Wallet"}
        >
          <Wallet size={22} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
          {status === "connecting"
            ? "Connecting..."
            : connected
            ? "Connected ✓"
            : "Connect Slush Wallet"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-charcoal-gray/20" />
          <span className="mx-3 text-sm text-charcoal-gray/50">or</span>
          <div className="flex-grow h-px bg-charcoal-gray/20" />
        </div>

        {/* Secondary Links */}
        <div className="grid gap-3">
          {([
            {
              href: "https://slush.app",
              text: "Download Slush Wallet",
              icon: <Download size={18} className="text-[#6C63FF]" />,
            },
            {
              href: "https://sui.io/get-started",
              text: "Learn about Sui",
              icon: <Info size={18} className="text-[#6C63FF]" />,
            },
            {
              href: "https://blog.sui.io/sui-wallets",
              text: "How to create a Sui wallet",
              icon: <BookOpen size={18} className="text-[#6C63FF]" />,
            },
          ] as LinkItem[]).map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3 transition-all duration-200 ease-in-out bg-white/90 rounded-xl shadow-sm hover:shadow-md hover:bg-[#FFD700] hover:text-charcoal-gray focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/40"
              aria-label={link.text}
            >
              <div className="mr-3">{link.icon}</div>
              <span className="text-sm font-medium">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
