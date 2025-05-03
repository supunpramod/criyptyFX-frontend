import React from "react";
import Logo from "../assets/logo.png"; // Adjust path based on your project structure
import SolanaLogo from "../assets/solana-logo.png"; // Ensure these files exist in src/assets/
import BitcoinLogo from "../assets/bitcoin-logo.png";
import EthereumLogo from "../assets/ethereum-logo.png";
import XrpLogo from "../assets/xrp-logo.png";
import Logoipsum1 from "../assets/logoipsum1-logo.png";
import Logoipsum2 from "../assets/logoipsum2-logo.png";
import Logoipsum3 from "../assets/logoipsum3-logo.png";
import Logoipsum4 from "../assets/logoipsum4-logo.png";
import Logoipsum5 from "../assets/logoipsum5-logo.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white px-4 sm:px-20 py-4">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-4 sm:px-8 py-4">
        <div className="flex items-center">
          <div>
            <img src={Logo} className="h-8" alt="Website Logo" />
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <button className="text-white hover:text-yellow-400 cursor-pointer whitespace-nowrap">
            Buy Crypto
          </button>
          <button className="text-white hover:text-yellow-400 cursor-pointer whitespace-nowrap">
            Trade
          </button>
          <button className="text-white hover:text-yellow-400 cursor-pointer whitespace-nowrap">
            NFT
          </button>
          <button className="text-white hover:text-yellow-400 cursor-pointer whitespace-nowrap">
            More
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-transparent border border-cyan-500 text-cyan-500 px-4 py-1.5 rounded-full hover:bg-cyan-500/10 transition cursor-pointer whitespace-nowrap">
            Select Language
          </button>
          <button className="flex items-center space-x-2 bg-transparent border border-cyan-500 text-cyan-500 px-4 py-1.5 rounded-full hover:bg-cyan-500/10 transition cursor-pointer whitespace-nowrap">
            Sign In
          </button>
          <div className="bg-cyan-500/20 rounded-full p-0.5 flex">
            <button className="bg-cyan-500 text-white px-6 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap">
              Real
            </button>
            <button className="text-white px-6 py-1.5 hover:text-cyan-400 transition cursor-pointer whitespace-nowrap">
              Demo
            </button>
          </div>
          <button className="bg-cyan-500 text-white px-6 py-1.5 rounded-full hover:bg-cyan-600 transition flex items-center space-x-2 cursor-pointer whitespace-nowrap">
            <i className="fas fa-download"></i>
            <span>Download App</span>
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center px-4 sm:px-8 py-16 md:py-24 overflow-hidden">
        {/* Left Content */}
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Empowering Your <br />
            <span className="text-yellow-500">Financial Journey</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl">
            Join the world's biggest & trusted Exchange. Trade in Bitcoin, Ethereum,
            Ripple, and many more currencies.
          </p>
          <button className="bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition cursor-pointer whitespace-nowrap">
            START TRADING
          </button>
          <div className="bg-transparent pl-0 absolute m-3 flex flex-col mx-auto">
            {/* First Row with 5 items */}
            <div className="flex flex-row justify-around gap-6 mb-4">
              <img src={SolanaLogo} alt="Solana Logo" className="h-6 w-auto" />
              <img src={BitcoinLogo} alt="Bitcoin Logo" className="h-6 w-auto" />
              <img src={EthereumLogo} alt="Ethereum Logo" className="h-6 w-auto" />
              <img src={XrpLogo} alt="XRP Logo" className="h-6 w-auto" />
              <img src={Logoipsum1} alt="Logoipsum 1" className="h-6 w-auto" />
            </div>
            {/* Second Row with 4 items */}
            <div className="flex flex-row justify-around gap-6">
              <img src={Logoipsum2} alt="Logoipsum 2" className="h-6 w-auto" />
              <img src={Logoipsum3} alt="Logoipsum 3" className="h-6 w-auto" />
              <img src={Logoipsum4} alt="Logoipsum 4" className="h-6 w-auto" />
              <img src={Logoipsum5} alt="Logoipsum 5" className="h-6 w-auto" />
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative w-full h-[500px] overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Modern%20cryptocurrency%20trading%20app%20interface%20on%20smartphone%20with%20floating%20gold%20bitcoin%2C%20ethereum%20and%20other%20crypto%20coins%20around%20it.%20Dark%20blue%20gradient%20background%20with%20glowing%20effects.%20Realistic%203D%20rendering%20of%20mobile%20trading%20platform&width=600&height=800&seq=123&orientation=portrait"
              alt="Cryptocurrency Trading App Interface"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* Scroll Down Button */}
      <div className="flex justify-center mb-8">
        <button className="bg-gray-800 rounded-full p-3 hover:bg-gray-700 transition cursor-pointer">
          <i className="fas fa-arrow-down text-white"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;