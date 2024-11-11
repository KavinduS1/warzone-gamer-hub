import { Twitch, Youtube, Twitter } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a href="https://twitch.tv/username" className="social-icon" target="_blank" rel="noopener noreferrer">
        <Twitch size={24} />
      </a>
      <a href="https://youtube.com/username" className="social-icon" target="_blank" rel="noopener noreferrer">
        <Youtube size={24} />
      </a>
      <a href="https://twitter.com/username" className="social-icon" target="_blank" rel="noopener noreferrer">
        <Twitter size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;