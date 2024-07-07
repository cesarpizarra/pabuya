import { FiX } from "react-icons/fi";

interface VideoProps {
  onClose: () => void;
  videoKey: string;
}

const Video: React.FC<VideoProps> = ({ videoKey, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-5 font-sans backdrop-contrast-100 backdrop-grayscale backdrop-filter">
      <iframe
        width="800"
        height="500"
        src={`https://www.youtube.com/embed/${videoKey}`}
      ></iframe>

      <button
        onClick={onClose}
        className="mb-[30rem] rounded-full bg-darkPrimary bg-opacity-50 p-1 text-white transition duration-300 hover:bg-danger"
      >
        <FiX size={24} />
      </button>
    </div>
  );
};

export default Video;
