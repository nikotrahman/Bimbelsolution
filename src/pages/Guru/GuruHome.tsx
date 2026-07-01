
const GuruDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h3 className="text-center mb-6 text-xl font-semibold">Dashboard Guru</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Materi Card */}
        <div className="bg-blue-50 shadow-sm rounded-lg border border-transparent">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
            Materi
          </div>
          <div className="p-4">
            <h4 className="text-2xl font-bold">10</h4>
            <p className="text-gray-600">Materi diunggah</p>

            <div className="w-full bg-blue-100 rounded-full h-2 mt-2 mb-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>

            <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded">
              Progress Upload
            </span>
          </div>
        </div>

        {/* Kelas Aktif Card */}
        <div className="bg-green-50 shadow-sm rounded-lg border border-transparent">
          <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg">
            Kelas Aktif
          </div>
          <div className="p-4">
            <h4 className="text-2xl font-bold">5</h4>
            <p className="text-gray-600">Kelas minggu ini</p>

            <div className="w-full bg-green-100 rounded-full h-2 mt-2 mb-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>

            <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded">
              Sedang Berjalan
            </span>
          </div>
        </div>

        {/* Sesi Zoom Card */}
        <div className="bg-orange-50 shadow-sm rounded-lg border border-transparent">
          <div className="bg-orange-500 text-white px-4 py-2 rounded-t-lg">
            Sesi Zoom
          </div>
          <div className="p-4">
            <h4 className="text-2xl font-bold">2</h4>
            <p className="text-gray-600">Terjadwal hari ini</p>

            <div className="w-full bg-orange-100 rounded-full h-2 mt-2 mb-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>

            <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded">
              Upcoming
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuruDashboard;
