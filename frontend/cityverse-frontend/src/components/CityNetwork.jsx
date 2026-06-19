import { motion } from "framer-motion";
import {
  FaTrafficLight,
  FaHospital,
  FaBell,
  FaBrain,
  FaShieldAlt,
  FaChartLine
} from "react-icons/fa";

function CityNetwork() {
  return (
    <section
      className="
      relative
      bg-black
      py-40
      px-10
      text-white
      overflow-hidden
      "
    >

      {/* Background Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[900px]
        h-[900px]
        bg-red-500/5
        blur-[250px]
        rounded-full
        "
      />

      <div className="max-w-7xl mx-auto relative z-10">

        <h2
          className="
          text-8xl
          font-light
          mb-24
          "
        >
          Connected city

          <span className="text-red-500 italic">
            {" "}intelligence.
          </span>
        </h2>

        <div className="grid grid-cols-3 items-center">

          {/* LEFT */}

          <div className="space-y-10">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
              bg-white/5
              p-6
              rounded-2xl
              flex
              items-center
              gap-4
              "
            >
              <FaTrafficLight
                size={28}
                className="text-red-500"
              />

              <span>Traffic Sensors</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
              bg-white/5
              p-6
              rounded-2xl
              flex
              items-center
              gap-4
              "
            >
              <FaHospital
                size={28}
                className="text-green-500"
              />

              <span>Hospitals</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
              bg-white/5
              p-6
              rounded-2xl
              flex
              items-center
              gap-4
              "
            >
              <FaBell
                size={28}
                className="text-yellow-500"
              />

              <span>Emergency Alerts</span>
            </motion.div>

          </div>

          {/* CENTER */}

          <div className="relative flex justify-center">

            {/* Animated Lines */}

            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                repeat: Infinity,
                duration: 2
              }}
              className="
              absolute
              w-[350px]
              h-[2px]
              bg-gradient-to-r
              from-red-500
              to-transparent
              right-1/2
              "
            />

            <motion.div
              animate={{
                scale: [1, 1.1, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 3
              }}
              className="
              w-52
              h-52
              rounded-full
              bg-gradient-to-br
              from-red-500
              via-pink-600
              to-red-700
              flex
              items-center
              justify-center
              shadow-[0_0_120px_rgba(255,0,0,0.4)]
              "
            >
              <FaBrain size={80} />
            </motion.div>

          </div>

          {/* RIGHT */}

          <div className="space-y-10">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
              bg-green-500/5
              p-6
              rounded-2xl
              flex
              items-center
              gap-4
              "
            >
              <FaShieldAlt
                size={28}
                className="text-green-500"
              />

              <span>Risk Prediction</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
              bg-blue-500/5
              p-6
              rounded-2xl
              flex
              items-center
              gap-4
              "
            >
              <FaChartLine
                size={28}
                className="text-blue-500"
              />

              <span>Traffic Optimization</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
              bg-purple-500/5
              p-6
              rounded-2xl
              flex
              items-center
              gap-4
              "
            >
              <FaBrain
                size={28}
                className="text-purple-500"
              />

              <span>AI Insights</span>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CityNetwork;