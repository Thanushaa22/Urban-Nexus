import { motion } from "framer-motion";

function IntelligenceNetwork() {
  return (
    <section
      className="
      relative
      bg-black
      text-white
      py-40
      overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        bg-red-500/10
        blur-[250px]
        rounded-full
        "
      />

      <div className="max-w-7xl mx-auto px-10 relative z-10">

        <h2
          className="
          text-7xl
          lg:text-8xl
          font-light
          leading-none
          "
        >
          From raw data
          <br />

          to

          <span className="text-red-500 italic">
            {" "}intelligence.
          </span>
        </h2>

        <p
          className="
          text-gray-400
          text-xl
          mt-10
          max-w-3xl
          "
        >
          Traffic feeds, hospital networks,
          weather streams and citizen reports
          are transformed into actionable city decisions.
        </p>

        <div className="mt-24 relative h-[600px]">

          {/* Center AI Core */}

          <motion.div
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 4
            }}
            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-52
            h-52
            rounded-full
            bg-gradient-to-br
            from-red-500
            to-red-700
            shadow-[0_0_120px_rgba(255,0,0,0.5)]
            flex
            items-center
            justify-center
            text-3xl
            font-bold
            "
          >
            AI
          </motion.div>

          {/* Floating Cards */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
            absolute
            left-0
            top-10
            bg-white/5
            border
            border-red-500/20
            backdrop-blur-xl
            p-8
            rounded-3xl
            w-72
            "
          >
            <h3 className="text-red-400 text-xl">
              Traffic Analytics
            </h3>

            <p className="text-gray-500 mt-3">
              Real-time congestion intelligence.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
            absolute
            left-20
            bottom-10
            bg-white/5
            border
            border-red-500/20
            backdrop-blur-xl
            p-8
            rounded-3xl
            w-72
            "
          >
            <h3 className="text-red-400 text-xl">
              Hospital Network
            </h3>

            <p className="text-gray-500 mt-3">
              Emergency capacity monitoring.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
            absolute
            right-0
            top-16
            bg-green-500/5
            border
            border-green-500/20
            backdrop-blur-xl
            p-8
            rounded-3xl
            w-72
            "
          >
            <h3 className="text-green-400 text-xl">
              Risk Prediction
            </h3>

            <p className="text-gray-500 mt-3">
              AI generated urban forecasts.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="
            absolute
            right-20
            bottom-0
            bg-green-500/5
            border
            border-green-500/20
            backdrop-blur-xl
            p-8
            rounded-3xl
            w-72
            "
          >
            <h3 className="text-green-400 text-xl">
              Resource Allocation
            </h3>

            <p className="text-gray-500 mt-3">
              Optimize city operations automatically.
            </p>
          </motion.div>

          {/* Connection Lines */}

          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 600"
          >
            <line
              x1="280"
              y1="120"
              x2="600"
              y2="300"
              stroke="#ff2d55"
            />

            <line
              x1="280"
              y1="500"
              x2="600"
              y2="300"
              stroke="#ff2d55"
            />

            <line
              x1="920"
              y1="140"
              x2="600"
              y2="300"
              stroke="#00ff88"
            />

            <line
              x1="900"
              y1="520"
              x2="600"
              y2="300"
              stroke="#00ff88"
            />
          </svg>

        </div>
      </div>
    </section>
  );
}

export default IntelligenceNetwork;