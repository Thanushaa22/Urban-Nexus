import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function TrafficChart() {
  const data = {
    labels: [
      "North Zone",
      "East Zone",
      "Central",
      "South Zone",
      "West Zone"
    ],

    datasets: [
      {
        label: "Traffic Density",
        data: [72, 91, 64, 88, 54],

        backgroundColor: [
          "rgba(255,45,45,0.95)",
          "rgba(255,45,45,0.85)",
          "rgba(255,45,45,0.75)",
          "rgba(255,45,45,0.65)",
          "rgba(255,45,45,0.55)"
        ],

        borderRadius: 14,
        borderSkipped: false,
        barThickness: 42
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    animation: {
      duration: 1400,
      easing: "easeOutQuart"
    },

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#0B0B0B",
        borderColor: "rgba(255,255,255,0.08)",
        borderWidth: 1,
        padding: 14
      }
    },

    scales: {
      x: {
        ticks: {
          color: "#71717a",
          font: {
            size: 12
          }
        },

        grid: {
          display: false,
        },
      },

      y: {
        ticks: {
          color: "#71717a",
        },

        grid: {
          color: "rgba(255,255,255,0.04)",
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">

        <div>
          <h2 className="text-3xl font-light text-white">
            Traffic Intelligence
          </h2>

          <p className="text-zinc-500 mt-2">
            Real-time mobility analytics across city zones
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>

          <span className="text-sm text-zinc-400">
            Live Monitoring
          </span>
        </div>

      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Chart */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
          lg:col-span-2
          bg-[#0D0D0D]
          border
          border-white/5
          rounded-[28px]
          p-8
          h-[420px]
          "
        >
          <Bar data={data} options={options} />
        </motion.div>

        {/* Intelligence Panel */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
          bg-[#0D0D0D]
          border
          border-white/5
          rounded-[28px]
          p-8
          "
        >
          <div className="space-y-8">

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                Traffic Status
              </p>

              <h3 className="text-4xl mt-4 font-light text-red-500">
                High Congestion
              </h3>
            </div>

            <div className="h-px bg-white/5" />

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                Most Active Zone
              </p>

              <h3 className="text-2xl mt-4 font-light text-white">
                East Zone
              </h3>
            </div>

            <div className="h-px bg-white/5" />

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                Recommendation
              </p>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                Increase monitoring and optimize signal timing
                during peak hours to reduce congestion and improve
                overall traffic flow.
              </p>
            </div>

            <div className="h-px bg-white/5" />

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                Predicted Improvement
              </p>

              <h3 className="text-3xl mt-4 font-light text-white">
                +18%
              </h3>
            </div>

          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default TrafficChart;