import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";

import Sidebar from "../components/Sidebar";
import Alerts from "./Alerts";
import TrafficChart from "../components/TrafficChart";
import CityMap from "../components/CityMap";

import {
  FaCity,
  FaHospital,
  FaTrafficLight,
  FaExclamationTriangle,
  FaRobot
} from "react-icons/fa";

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [activeSection, setActiveSection] = useState("Overview");

  useEffect(() => {
    api
      .get("/api/dashboard")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!stats) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold text-red-500"
        >
          Initializing City Intelligence...
        </motion.h1>
      </div>
    );
  }

const cards = [
  {
    title: "Connected Cities",
    value: "12",
    icon: <FaCity />,
    color: "text-red-500",
  },
  {
    title: "Hospitals Online",
    value: "486",
    icon: <FaHospital />,
    color: "text-green-400",
  },
  {
    title: "Traffic Sensors",
    value: "3,248",
    icon: <FaTrafficLight />,
    color: "text-yellow-400",
  },
  {
    title: "Critical Alerts",
    value: "18",
    icon: <FaExclamationTriangle />,
    color: "text-red-500",
  },
];

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar
        active={activeSection}
        setActive={setActiveSection}
      />

      <main className="ml-72 flex-1 px-10 py-8 bg-[#050505] min-h-screen">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-start mb-12"
        >
          <div>
            <h1 className="text-6xl font-light">
              City Intelligence
              <span className="text-red-500 italic">
                {" "}Command Center
              </span>
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Real-time Smart City Monitoring Platform
            </p>
          </div>

          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-600">
              System Status
            </p>

            <div className="flex items-center justify-end gap-2 mt-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>

              <span className="text-zinc-300">
                Operational
              </span>
            </div>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-5 mb-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-[#0B0B0B] border border-white/[0.04] rounded-[28px] p-7 hover:border-red-500/20 transition-all"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                    {card.title}
                  </p>

                  <h2 className="text-5xl font-light mt-5">
                    {card.value}
                  </h2>
                </div>

                <div className={`text-3xl ${card.color}`}>
                  {card.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* OVERVIEW */}
        {activeSection === "Overview" && (
          <>
            <div className="grid grid-cols-3 gap-6 mb-10">

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="col-span-2 bg-[#0B0B0B] border border-white/[0.04] rounded-[32px] p-8"
              >
                <h3 className="text-2xl font-light mb-6">
                  Live City Map
                </h3>

                <div className="h-[500px] overflow-hidden rounded-[24px]">
                  <CityMap />
                </div>
              </motion.div>

              {/* AI Predictions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#0B0B0B] border border-white/[0.04] rounded-[32px] p-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <h3 className="text-xl font-medium">
                    Predictions
                  </h3>
                </div>

                <div className="space-y-4">

                  {[
                    { title: "Traffic Risk", value: "84%" },
                    { title: "Emergency Readiness", value: "92%" },
                    { title: "Flood Probability", value: "Low" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="bg-[#101010] border border-white/[0.04] rounded-2xl p-5"
                    >
                      <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                        {item.title}
                      </p>

                      <h4 className="text-4xl font-light mt-3">
                        {item.value}
                      </h4>
                    </motion.div>
                  ))}

                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Alerts />
            </motion.div>

            <div className="mt-12">
              <TrafficChart />
            </div>
          </>
        )}

        {/* ANALYTICS */}
        {activeSection === "Analytics" && (
          <div className="grid grid-cols-3 gap-6">
            {[
              ["Traffic Risk", "84%"],
              ["Response Readiness", "92%"],
              ["Infrastructure Score", "A+"]
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-[#0B0B0B] border border-white/[0.04] rounded-[28px] p-8"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  {item[0]}
                </p>

                <h2 className="text-6xl font-light mt-5">
                  {item[1]}
                </h2>
              </motion.div>
            ))}
          </div>
        )}

        {/* CITIES */}
        {activeSection === "Cities" && (
          <div className="grid grid-cols-3 gap-6">
            {[
              "Bangalore",
              "Mysore",
              "Mangalore",
              "Hubli",
              "Belgaum",
              "Tumkur"
            ].map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="bg-[#0B0B0B] border border-white/[0.04] rounded-[28px] p-7"
              >
                <h3 className="text-2xl font-light">
                  {city}
                </h3>

                <p className="text-zinc-500 mt-3">
                  Operational
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* HEALTHCARE */}
        {activeSection === "Healthcare" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#0B0B0B] border border-white/[0.04] rounded-[32px] p-8"
          >
            <h2 className="text-3xl font-light mb-10">
              Healthcare Network
            </h2>

            <div className="space-y-8">

              <div>
                <p className="mb-4 text-zinc-500">
                  Hospital Capacity
                </p>

                <div className="w-full h-3 bg-[#101010] rounded-full">
                  <div className="w-[92%] h-3 bg-white rounded-full"></div>
                </div>
              </div>

              <div>
                <p className="mb-4 text-zinc-500">
                  Emergency Beds
                </p>

                <div className="w-full h-3 bg-[#101010] rounded-full">
                  <div className="w-[85%] h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* TRAFFIC */}
        {activeSection === "Traffic" && (
          <TrafficChart />
        )}

        {/* ALERTS */}
        {activeSection === "Alerts" && (
          <Alerts />
        )}

      </main>
    </div>
  );
}

export default Dashboard;