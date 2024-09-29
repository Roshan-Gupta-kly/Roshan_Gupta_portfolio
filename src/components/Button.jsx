import { useState } from "react";
import resume from "../assets/files/resume.pdf"; // Correct the import path if necessary

const Button = ({ label, imgURL, download, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true); // Show loader

    // Simulate a small delay before triggering the download
    setTimeout(() => {
      setIsLoading(false); // Hide loader

      // Create a hidden anchor element to trigger the download
      const link = document.createElement("a");
      link.href = resume; // Set the resume PDF URL
      link.download = "Roshan_Gupta_Resume.pdf"; // Set the download filename
      document.body.appendChild(link);
      link.click(); // Trigger the download
      document.body.removeChild(link); // Remove the anchor element
    }, 500);
  };

  const handleClick = () => {
    if (download) {
      handleDownload(); // Handle download if the download prop is passed
    } else if (onClick) {
      onClick(); // Handle custom onClick if it's provided
    }
  };

  return (
    <button
      onClick={handleClick}
      className="relative px-6 py-2 bg-gradient-to-r from-blue-400 via-slate-500 to-blue-950 flex items-center justify-center sm:gap-2 rounded-md hover:scale-105 transition-transform duration-200 ease-in-out group"
      disabled={isLoading}
    >
      <span className="text-white font-semibold italic sm:w-full">{label}</span>

      {imgURL && (
        <div
          className={`${
            download
              ? "ml-1"
              : "inline-block absolute transition-transform duration-200 ease-in-out group-hover:translate-x-1 xs:w-8 w-6 xs:top-[9%] xs:-right-[20%] top-[18%] -right-[15%]"
          }`}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8l4 4"
              />
            </svg>
          ) : (
            <img src={imgURL} width={30} height={30} alt="Right Arrow" />
          )}
        </div>
      )}
    </button>
  );
};

export default Button;
