import Stats from "@/components/Stats";
import Setup from "@/components/Setup";
import SocialLinks from "@/components/SocialLinks";
import Highlights from "@/components/Highlights";
import { Gamepad } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-gaming-red p-3 rounded-full">
            <Gamepad size={32} className="text-white" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl mb-4">WARZONE ELITE</h1>
        <p className="text-xl text-gray-400 mb-8">Professional Warzone Player & Content Creator</p>
        <SocialLinks />
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl mb-8 text-center">Combat Statistics</h2>
        <Stats />
      </div>

      {/* Highlights Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl mb-8 text-center">Recent Highlights</h2>
        <Highlights />
      </div>

      {/* Setup Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl mb-8 text-center">Gaming Setup</h2>
        <Setup />
      </div>
    </div>
  );
};

export default Index;