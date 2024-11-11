import { Monitor, Cpu, Gamepad, Headphones } from "lucide-react";

const SetupItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start space-x-4 p-4 bg-gaming-gray rounded-lg animate-fade-up">
    <div className="text-gaming-red">{icon}</div>
    <div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const Setup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SetupItem
        icon={<Monitor size={24} />}
        title="Display"
        description="ASUS ROG Swift 360Hz PG259QN"
      />
      <SetupItem
        icon={<Cpu size={24} />}
        title="CPU"
        description="AMD Ryzen 9 5950X"
      />
      <SetupItem
        icon={<Gamepad size={24} />}
        title="Controller"
        description="SCUF Instinct Pro"
      />
      <SetupItem
        icon={<Headphones size={24} />}
        title="Headset"
        description="Astro A50 Wireless"
      />
    </div>
  );
};

export default Setup;