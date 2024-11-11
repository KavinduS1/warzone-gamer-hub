import { Trophy, Crosshair, Timer, Users } from "lucide-react";
import { useEffect, useState } from "react";

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
}

const StatItem = ({ icon, label, value, suffix = "" }: StatItemProps) => (
  <div className="glass-effect flex flex-col items-center p-8 rounded-lg animate-fade-up hover:scale-105 transition-transform">
    <div className="text-gaming-red mb-4">{icon}</div>
    <div className="text-4xl font-bold mb-2 glow-text">{value}{suffix}</div>
    <div className="text-gray-400 text-sm uppercase tracking-wider">{label}</div>
  </div>
);

const Stats = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="stats-grid">
      <StatItem
        icon={<Trophy size={32} />}
        label="Wins"
        value={animated ? 342 : 0}
      />
      <StatItem
        icon={<Crosshair size={32} />}
        label="K/D Ratio"
        value={animated ? 2.45 : 0}
      />
      <StatItem
        icon={<Timer size={32} />}
        label="Hours Played"
        value={animated ? 1200 : 0}
      />
      <StatItem
        icon={<Users size={32} />}
        label="Squad Wins"
        value={animated ? 156 : 0}
      />
    </div>
  );
};

export default Stats;