import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
interface VideoProps {
  onClose: () => void;
  videoKey: string;
}

const Video: React.FC<VideoProps> = ({ videoKey, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-5 font-sans backdrop-contrast-100 backdrop-grayscale backdrop-filter">
      <motion.div
        initial={{ x: "100vw", y: "100vh", scale: 1 }}
        animate={{ x: 0, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="relative flex w-full max-w-4xl items-center justify-center"
      >
        <iframe
          className="h-64 w-full md:h-96 lg:h-[500px] xl:h-[500px]"
          src={`https://www.youtube.com/embed/${videoKey}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-full bg-darkPrimary bg-opacity-50 p-1 text-white transition duration-300 hover:bg-danger"
        >
          <FiX size={24} />
        </button>
      </motion.div>
    </div>
  );
};

export default Video;
