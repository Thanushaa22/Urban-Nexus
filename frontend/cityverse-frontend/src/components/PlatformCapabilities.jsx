import { motion } from "framer-motion";
import {
  FaTrafficLight,
  FaHospital,
  FaBell,
  FaChartLine
} from "react-icons/fa";

function PlatformCapabilities() {

  const cards = [
    {
      icon: <FaTrafficLight />,
      title: "Traffic Intelligence",
      desc: "Monitor congestion and optimize urban mobility."
    },
    {
      icon: <FaHospital />,
      title: "Healthcare Analytics",
      desc: "Track hospital capacity and emergency readiness."
    },
    {
      icon: <FaBell />,
      title: "Emergency Response",
      desc: "Real-time alerting and incident coordination."
    },
    {
      icon: <FaChartLine />,
      title: "Predictive AI",
      desc: "Forecast risks before they impact citizens."
    }
  ];

  return (
    <section
      className="
      bg-black
      py-40
      px-8
      text-white
      "
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="
          text-7xl
          font-light
          mb-20
          "
        >
          Platform

          <span className="italic text-red-500">
            {" "}capabilities.
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10
              }}
              className="
              bg-white/[0.03]
              border
              border-white/10
              rounded-3xl
              p-10
              backdrop-blur-xl
              "
            >

              <div className="text-red-500 text-4xl mb-6">
                {card.icon}
              </div>

              <h3 className="text-3xl mb-4">
                {card.title}
              </h3>

              <p className="text-gray-400 text-lg">
                {card.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default PlatformCapabilities;