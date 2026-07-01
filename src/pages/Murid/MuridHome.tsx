import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const data = {
  labels: ["Minggu 1", "Minggu 2", "Minggu 3"],
  datasets: [
    {
      label: "Progress Belajar",
      data: [20, 40, 60],
      borderColor: "#42a5f5",
      backgroundColor: "rgba(66,165,245,0.2)",
      tension: 0.3,
      fill: true,
    },
  ],
};

export default function MuridDashboard() {
  return (
    <div className="p-6">
      <h3 className="text-center mb-6 text-xl font-semibold">
        Dashboard Murid
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Progress Belajar Card */}
        <div className="bg-blue-50 shadow-sm rounded-lg border border-transparent">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-t-lg font-semibold">
            Progress Belajar
          </div>
          <div className="p-4">
            {/* Progress bar */}
            <div className="w-full bg-blue-100 rounded-full h-3 mb-3">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>

            {/* Chart */}
            <Line data={data} />

            {/* Badge */}
            <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded mt-2">
              60% modul selesai
            </span>
          </div>
        </div>

        {/* Kelas Mendatang Card */}
        <div className="bg-orange-50 shadow-sm rounded-lg border border-transparent">
          <div className="bg-orange-500 text-white px-4 py-2 rounded-t-lg font-semibold">
            Kelas Mendatang
          </div>
          <div className="p-4">
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <b>Matematika</b> - Zoom Room (Besok)
              </li>
              <li>
                <b>Fisika</b> - Zoom Room (Rabu)
              </li>
            </ul>

            <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded mt-2">
              2 kelas terjadwal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
