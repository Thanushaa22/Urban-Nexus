import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CityVisualization from "./CityVisualization";

function Hero() {
  const navigate = useNavigate();

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <section
      onMouseMove={(e) =>
        setPosition({
          x: e.clientX,
          y: e.clientY
        })
      }
      className="
      relative
      min-h-screen
      bg-black
      overflow-hidden
      text-white
      "
    >
      {/* Premium Mouse Glow */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          left: position.x - 180,
          top: position.y - 180,
          width: "360px",
          height: "360px",
          background:
            "radial-gradient(circle, rgba(255,40,40,0.08), transparent)",
          filter: "blur(80px)"
        }}
      />

      {/* Subtle Grid */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
        bg-[size:80px_80px]
        "
      />

      {/* Main Glow */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 60, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 16
        }}
        className="
        absolute
        top-0
        right-0
        w-[700px]
        h-[700px]
        bg-red-600/10
        blur-[220px]
        rounded-full
        "
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-14 pt-40">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div
                className="
                inline-flex
                items-center
                border
                border-white/10
                bg-white/[0.02]
                backdrop-blur-xl
                px-5
                py-2
                rounded-full
                text-xs
                uppercase
                tracking-[0.3em]
                text-zinc-400
                mb-10
                "
              >
                SMART CITY INTELLIGENCE PLATFORM
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
              font-light
              tracking-tight
              leading-[0.92]
              text-6xl
              md:text-8xl
              xl:text-[120px]
              "
            >
              Intelligence
              <br />
              for the future
              <br />

              <span className="italic text-red-500">
                of cities.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="
              mt-10
              max-w-2xl
              text-xl
              text-zinc-400
              leading-relaxed
              "
            >
              AI-powered urban intelligence for traffic,
              healthcare, emergency systems and predictive
              city-scale analytics.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("platform")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="
                bg-white
                text-black
                px-8
                py-4
                rounded-xl
                font-medium
                hover:scale-105
                transition-all
                "
              >
                Explore Platform
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("demo")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="
                border
                border-white/10
                bg-white/[0.02]
                px-8
                py-4
                rounded-xl
                hover:bg-white/[0.05]
                transition-all
                "
              >
                View Demo
              </button>

              <button
                onClick={() => navigate("/login")}
                className="
                border
                border-red-500/20
                text-red-400
                px-8
                py-4
                rounded-xl
                hover:bg-red-500
                hover:text-white
                transition-all
                "
              >
                Sign In
              </button>
            </motion.div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-3 gap-5 max-w-2xl">

              {[
                ["14M+", "Citizens Connected"],
                ["500+", "Hospitals Live"],
                ["1200+", "Traffic Sensors"]
              ].map((stat, index) => (
                <div
                  key={index}
                  className="
                  bg-white/[0.02]
                  border
                  border-white/5
                  backdrop-blur-xl
                  rounded-2xl
                  p-6
                  "
                >
                  <h2 className="text-4xl font-light text-white">
                    {stat[0]}
                  </h2>

                  <p className="text-zinc-500 mt-2 text-sm">
                    {stat[1]}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex justify-center items-center">
            <CityVisualization />
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        text-zinc-500
        "
      >
        <FaArrowDown size={20} />
      </motion.div>

    </section>
  );
}

export default Hero;