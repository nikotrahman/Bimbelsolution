import { useState } from "react";

export default function ZoomRoom() {
  const [teachers] = useState(["Guru Niko", "Guru Budi", "Guru Sari"]);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="p-6 bg-gray-200 min-h-screen">
      <h3 className="text-green-600 mb-6 text-xl font-semibold">
        Murid - Zoom Room
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Zoom Room Section */}
        <div className="md:col-span-2">
          <div className="bg-gray-900 text-white rounded-lg shadow">
            <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg font-semibold">
              Zoom Room
            </div>
            <div className="p-4">
              <div className="w-full h-96 bg-gray-700 flex items-center justify-center rounded-lg">
                {subscribed ? "Zoom Room Active" : "Please Subscribe to Join"}
              </div>
              {!subscribed && (
                <button
                  className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  onClick={() => setSubscribed(true)}
                >
                  Subscribe & Join Room
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Teacher List Section */}
        <div>
          <div className="bg-white rounded-lg shadow">
            <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg font-semibold">
              List of Teachers
            </div>
            <div className="p-4 space-y-2">
              {teachers.map((t, i) => (
                <div key={i} className="text-gray-800">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
