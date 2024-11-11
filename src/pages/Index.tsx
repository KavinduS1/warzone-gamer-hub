import Stats from "@/components/Stats";
import Setup from "@/components/Setup";
import SocialLinks from "@/components/SocialLinks";
import Highlights from "@/components/Highlights";
import { Gamepad, ChevronDown } from "lucide-react";
import { Parallax } from 'react-scroll-parallax';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen">
        <Parallax translateY={[-20, 20]} className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gaming-dark/90" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <Parallax translateY={[-40, 40]} className="text-center">
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
          </Parallax>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gaming-red" />
          </div>
        </div>
      </div>

      {/* Stats Section with Parallax */}
      <div className="relative py-24">
        <Parallax translateY={[-15, 15]} className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-12 text-center glow-text">Combat Statistics</h2>
          <Stats />
        </Parallax>
      </div>

      {/* Highlights Section with Parallax */}
      <div className="relative py-24">
        <Parallax translateY={[-20, 20]} className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751110-97427bbecf7a?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed opacity-30" />
        </Parallax>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl mb-12 text-center glow-text">Recent Highlights</h2>
          <Highlights />
        </div>
      </div>

      {/* Setup Section with Parallax */}
      <div className="relative py-24">
        <Parallax translateY={[-15, 15]} className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-12 text-center glow-text">Gaming Setup</h2>
          <Setup />
        </Parallax>
      </div>
    </div>
  );
};

export default Index;