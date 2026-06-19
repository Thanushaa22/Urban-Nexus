import { motion } from "framer-motion";
import {
  FaTrafficLight,
  FaHospital,
  FaBell,
  FaBrain
} from "react-icons/fa";

function CityVisualization() {
  return (
    <div className="relative w-full h-[700px] flex items-center justify-center">

      {/* Background Glow */}
      <div
        className="
        absolute
        w-[700px]
        h-[700px]
        rounded-full
        bg-red-500/10
        blur-[180px]
        "
      />

      {/* Grid */}
      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:40px_40px]
        "
      />

      {/* Left Node */}
      <motion.div
        animate={{
          y: [0, -15, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="
        absolute
        left-10
        top-1/2
        -translate-y-1/2
        bg-black/60
        border
        border-red-500/30
        backdrop-blur-xl
        p-6
        rounded-2xl
        "
      >
        <FaTrafficLight
          size={40}
          className="text-red-500"
        />

        <p className="text-white mt-3">
          Traffic Data
        </p>
      </motion.div>

      {/* Top Node */}
      <motion.div
        animate={{
          y: [0, -12, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="
        absolute
        top-16
        bg-black/60
        border
        border-red-500/30
        backdrop-blur-xl
        p-6
        rounded-2xl
        "
      >
        <FaHospital
          size={40}
          className="text-red-500"
        />

        <p className="text-white mt-3">
          Hospitals
        </p>
      </motion.div>

      {/* Right Node */}
      <motion.div
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 6
        }}
        className="
        absolute
        right-10
        top-1/2
        -translate-y-1/2
        bg-black/60
        border
        border-red-500/30
        backdrop-blur-xl
        p-6
        rounded-2xl
        "
      >
        <FaBell
          size={40}
          className="text-red-500"
        />

        <p className="text-white mt-3">
          Alerts
        </p>
      </motion.div>

      {/* SVG Network */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 700"
      >
        <line
          x1="180"
          y1="350"
          x2="400"
          y2="350"
          stroke="#ff2d55"
          strokeWidth="2"
        />

        <line
          x1="400"
          y1="120"
          x2="400"
          y2="350"
          stroke="#ff2d55"
          strokeWidth="2"
        />

        <line
          x1="620"
          y1="350"
          x2="400"
          y2="350"
          stroke="#ff2d55"
          strokeWidth="2"
        />
      </svg>

      {/* Center AI Core */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="
        relative
        z-10
        w-44
        h-44
        rounded-full
        bg-gradient-to-br
        from-red-500
        via-pink-600
        to-red-700
        flex
        items-center
        justify-center
        shadow-[0_0_120px_rgba(255,0,0,0.6)]
        "
      >
        <FaBrain
          size={70}
          className="text-white"
        />
      </motion.div>

      {/* Floating Labels */}
      <div
        className="
        absolute
        bottom-24
        text-center
        "
      >
        <p className="text-red-400 uppercase tracking-[0.3em] text-xs">
          AI DECISION ENGINE
        </p>

        <h3 className="text-white text-2xl mt-2">
          Processing City Intelligence
        </h3>
      </div>

    </div>
  );
}

export default CityVisualization;