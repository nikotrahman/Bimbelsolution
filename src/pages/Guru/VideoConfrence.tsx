import { useState } from "react";

export default function ZoomConference() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    [],
  );
  const [chatInput, setChatInput] = useState("");
  const [participants] = useState(["Murid A", "Murid B", "Murid C"]);

  const sendMessage = () => {
    if (chatInput.trim()) {
      setMessages([...messages, { sender: "Guru", text: chatInput }]);
      setChatInput("");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h3 className="text-blue-600 mb-6 text-xl font-semibold">
        Guru - Zoom Conference
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Video Conference Section */}
        <div className="md:col-span-2">
          <div className="bg-gray-900 text-white rounded-lg shadow">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg font-semibold">
              Video Conference
            </div>
            <div className="p-4">
              <div className="w-full h-96 bg-black flex items-center justify-center rounded-lg">
                Guru Video Placeholder
              </div>
              <div className="mt-3 space-x-2">
                <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                  Mute
                </button>
                <button className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700">
                  Stop Video
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chat + Participants Section */}
        <div className="space-y-6">
          {/* Chat */}
          <div className="bg-white rounded-lg shadow">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg font-semibold">
              Chat
            </div>
            <div className="p-4">
              <div className="h-48 overflow-y-auto border border-gray-300 mb-3 p-2 rounded">
                {messages.map((msg, i) => (
                  <div key={i} className="text-sm mb-1">
                    <b>{msg.sender}:</b> {msg.text}
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type message..."
                className="w-full border rounded px-2 py-1 mb-2"
              />
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>

          {/* Participants */}
          <div className="bg-white rounded-lg shadow">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg font-semibold">
              Participants
            </div>
            <div className="p-4">
              {participants.map((p, i) => (
                <div key={i} className="text-sm mb-1">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
