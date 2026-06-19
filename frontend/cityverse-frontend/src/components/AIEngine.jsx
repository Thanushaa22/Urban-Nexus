import { motion } from "framer-motion";
import {
  FaFileContract,
  FaClipboardList,
  FaDatabase,
  FaGavel,
  FaChartLine,
  FaLightbulb,
  FaCheckCircle,
  FaBrain
} from "react-icons/fa";

function AIEngine() {
  const inputs = [
    { icon: <FaFileContract />, title: "Contracts" },
    { icon: <FaClipboardList />, title: "Project Specs" },
    { icon: <FaDatabase />, title: "Field Data" },
    { icon: <FaGavel />, title: "Policies" },
  ];

  const outputs = [
    {
      icon: <FaChartLine />,
      title: "Project Forecast",
      value: "94% On-Time Delivery",
    },
    {
      icon: <FaLightbulb />,
      title: "Recommendations",
      value: "Optimize Resource Usage",
    },
    {
      icon: <FaCheckCircle />,
      title: "Evaluation",
      value: "Risk Level: Low",
    },
  ];

  return (
    <section
      id="ai-engine"
      className="relative bg-black text-white py-48 px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-red-500/5 blur-[220px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <h2 className="text-7xl font-light mb-32">
          AI-powered
          <span className="italic text-red-500">
            {" "}decision engine.
          </span>
        </h2>

        <div className="grid grid-cols-3 gap-20 items-center">

          {/* LEFT */}
          <div className="space-y-10">

            {inputs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-5"
              >
                <div className="text-red-500 text-2xl">
                  {item.icon}
                </div>

                <div>
                  <p className="text-gray-500 uppercase text-xs tracking-[0.2em]">
                    Input
                  </p>

                  <h3 className="text-2xl">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}

          </div>

          {/* CENTER */}
          <div className="relative flex justify-center">

            <svg
              className="absolute w-[600px] h-[500px]"
              viewBox="0 0 600 500"
            >
              <path
                d="M0 100 Q300 250 600 100"
                stroke="#ff2d55"
                strokeWidth="1"
                fill="none"
                opacity="0.2"
              />

              <path
                d="M0 250 Q300 250 600 250"
                stroke="#ff2d55"
                strokeWidth="1"
                fill="none"
                opacity="0.2"
              />

              <path
                d="M0 400 Q300 250 600 400"
                stroke="#ff2d55"
                strokeWidth="1"
                fill="none"
                opacity="0.2"
              />
            </svg>

            <div className="relative">

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="
                w-40
                h-40
                rounded-full
                bg-gradient-to-br
                from-red-500
                to-red-700
                flex
                items-center
                justify-center
                shadow-[0_0_120px_rgba(255,0,0,0.6)]
                "
              >
                <FaBrain size={60} />
              </motion.div>

              <div className="absolute inset-0 border border-red-500/20 rounded-full scale-150" />
              <div className="absolute inset-0 border border-red-500/10 rounded-full scale-[2]" />

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-12">

            {outputs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="
                border
                border-white/10
                p-6
                rounded-2xl
                bg-white/[0.03]
                "
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-red-500">
                    {item.icon}
                  </span>

                  <h3 className="text-xl">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-400">
                  {item.value}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default AIEngine;