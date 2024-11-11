import { Trophy, Crosshair, Timer, Users } from "lucide-react";
import { useEffect, useState } from "react";

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
}

const StatItem = ({ icon, label, value, suffix = "" }: StatItemProps) => (
  <div className="flex flex-col items-center p-4 bg-gaming-gray rounded-lg animate-fade-up">
    <div className="text-gaming-red mb-2">{icon}</div>
    <div className="text-3xl font-bold mb-1">{value}{suffix}</div>
    <div className="text-gray-400 text-sm">{label}</div>
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
        icon={<Trophy size={24} />}
        label="Wins"
        value={animated ? 342 : 0}
      />
      <StatItem
        icon={<Crosshair size={24} />}
        label="K/D Ratio"
        value={animated ? 2.45 : 0}
      />
      <StatItem
        icon={<Timer size={24} />}
        label="Hours Played"
        value={animated ? 1200 : 0}
      />
      <StatItem
        icon={<Users size={24} />}
        label="Squad Wins"
        value={animated ? 156 : 0}
      />
    </div>
  );
};

export default Stats;