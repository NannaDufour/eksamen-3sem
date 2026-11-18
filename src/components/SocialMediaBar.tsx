type props = {
  className?: string;
};

import { FaFacebookF } from "react-icons/fa6";
import { FaSnapchatGhost, FaInstagram } from "react-icons/fa";

const SocialMediaBar = ({ className }: props) => {
  return (
    <div className={`flex flex-row gap-4 ${className ?? ""}`}>
      <FaFacebookF className="border-2 border-white h-10 w-10 text-white p-2" />
      <FaSnapchatGhost className="border-2 border-white h-10 w-10 text-white p-2" />
      <FaInstagram className="border-2 border-white h-10 w-10 text-white p-2" />
    </div>
  );
};

export default SocialMediaBar;
