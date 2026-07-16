import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import Alerts from "./Alerts";
import Hospitals from "./Hospitals";
import TrafficChart from "../components/TrafficChart";
import CityMap from "../components/CityMap";

import {
  FaCity,
  FaHospital,
  FaTrafficLight,
  FaExclamationTriangle
} from "react-icons/fa";

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [activeSection, setActiveSection] = useState("Overview");

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "/login";
    }

}, []);

  if (!stats) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <h1 className="text-3xl text-red-500">
          Initializing City Intelligence...
        </h1>
      </div>
    );
  }

  const cards = [
    {
      title: "Connected Cities",
      value: "12",
      icon: <FaCity />,
      color: "text-red-500"
    },
    {
      title: "Hospitals Online",
      value: "486",
      icon: <FaHospital />,
      color: "text-green-400"
    },
    {
      title: "Traffic Sensors",
      value: "3248",
      icon: <FaTrafficLight />,
      color: "text-yellow-400"
    },
    {
      title: "Critical Alerts",
      value: "18",
      icon: <FaExclamationTriangle />,
      color: "text-red-500"
    }
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">

      <Sidebar
        active={activeSection}
        setActive={setActiveSection}
      />

      <main className="ml-72 flex-1 px-10 py-8">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-5xl font-light">
            City Intelligence
            <span className="text-red-500"> Command Center</span>
          </h1>

          <p className="text-zinc-500 mt-3">
            Real-time Smart City Monitoring Platform
          </p>
        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-4 gap-5 mb-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#0B0B0B] p-6 rounded-2xl border border-white/5"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-zinc-500 text-sm">
                    {card.title}
                  </p>

                  <h2 className="text-4xl mt-4">
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
            <div className="mb-8">
              <CityMap />
            </div>

            <Alerts />

            <div className="mt-8">
              <TrafficChart />
            </div>
          </>
        )}

        {/* ANALYTICS */}
        {activeSection === "Analytics" && (
          <TrafficChart />
        )}

        {/* CITIES */}
        {activeSection === "Cities" && (
          <CityMap />
        )}

        {/* HEALTHCARE */}
        {activeSection === "Healthcare" && (
          <Hospitals />
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