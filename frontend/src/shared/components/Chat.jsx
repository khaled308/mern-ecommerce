import { useState } from "react";
import { BsFillChatDotsFill, BsFillXCircleFill } from "react-icons/bs";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    // Handle message submission logic
    console.log("Submitted message:", message);
    setMessage("");
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className="bg-blue-500 text-white p-4 rounded-full flex justify-center items-center cursor-pointer transition-transform duration-300 hover:translate-x-0 absolute bottom-0 right-0"
        onClick={handleToggleChat}
      >
        {isOpen ? (
          <BsFillXCircleFill className="text-2xl" />
        ) : (
          <BsFillChatDotsFill className="text-2xl" />
        )}
      </div>

      {isOpen && (
        <div className="bg-white border border-gray-300 rounded-lg w-72 p-4 absolute right-16 bottom-0">
          <div className="h-80 overflow-y-auto mb-4">
            {/* Chat messages go here */}
          </div>
          <form onSubmit={handleSubmitMessage} className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={handleChangeMessage}
              className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-none"
              placeholder="Write a message..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-1 rounded"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
