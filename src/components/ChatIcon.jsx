import { useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi"; // Using react-icons for a chat icon

const ChatIcon = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/66f966534cbc4814f7e0a257/1i8v3feh2";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  // Function to open the chat on button click
  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize(); // Opens the Tawk.to chat widget
    }
  };

  return (
    <button
      onClick={openChat}
      className="fixed bottom-4 right-4 bg-slate-950 text-white p-4 rounded-full shadow-lg z-50"
      aria-label="Chat with us"
    >
      <FiMessageCircle className="text-2xl" />
    </button>
  );
};

export default ChatIcon;
