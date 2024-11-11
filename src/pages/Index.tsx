import Stats from "@/components/Stats";
import Setup from "@/components/Setup";
import SocialLinks from "@/components/SocialLinks";
import Highlights from "@/components/Highlights";
import { Gamepad, ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gaming-dark/90 pointer-events-none" />
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gaming-red p-4 rounded-full animate-pulse">
              <Gamepad size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl mb-6 glow-text tracking-tight">WARZONE ELITE</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Professional Warzone Player & Content Creator
          </p>
          <SocialLinks />
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gaming-red" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl mb-12 text-center glow-text">Combat Statistics</h2>
        <Stats />
      </div>

      {/* Highlights Section */}
      <div className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-gaming-dark/50 backdrop-blur-sm -skew-y-2" />
        <div className="relative">
          <h2 className="text-4xl md:text-5xl mb-12 text-center glow-text">Recent Highlights</h2>
          <Highlights />
        </div>
      </div>

      {/* Setup Section */}
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl mb-12 text-center glow-text">Gaming Setup</h2>
        <Setup />
      </div>
    </div>
  );
};

export default Index;