import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";

function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAlerts = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/alerts");

      const sortedAlerts = res.data.sort((a, b) => b.id - a.id);

      setAlerts(sortedAlerts);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Failed to load alerts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlerts();

    const interval = setInterval(() => {
      fetchAlerts();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityClass = (severity) => {
    switch (severity?.toUpperCase()) {
      case "HIGH":
        return {
          text: "text-red-500",
          dot: "bg-red-500",
          badge: "bg-red-500/10 border-red-500/20",
        };

      case "MEDIUM":
        return {
          text: "text-orange-400",
          dot: "bg-orange-400",
          badge: "bg-orange-400/10 border-orange-400/20",
        };

      default:
        return {
          text: "text-zinc-400",
          dot: "bg-zinc-500",
          badge: "bg-zinc-500/10 border-zinc-500/20",
        };
    }
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
            Live Threat Feed
          </h2>

          <p className="text-zinc-500 mt-2">
            Real-time AI detected incidents and emergency events
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />

          <span className="text-sm text-zinc-400">
            Monitoring Live
          </span>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-20 text-zinc-500">
          Loading alerts...
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="text-center py-20 text-red-500">
          {error}
        </div>
      )}

      {/* Alerts Feed */}
      {!loading && !error && (
        <div className="space-y-4">
          {alerts.map((alert, index) => {
            const severity = getSeverityClass(alert.severity);

            return (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="
                bg-[#0D0D0D]
                border
                border-white/5
                rounded-[28px]
                p-7
                hover:border-white/10
                transition-all
                duration-300
                "
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">

                    {/* Severity */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-2 h-2 rounded-full ${severity.dot}`}
                      />

                      <span
                        className={`
                        px-3
                        py-1.5
                        rounded-full
                        border
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        ${severity.badge}
                        ${severity.text}
                        `}
                      >
                        {alert.severity} Priority
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-light text-white">
                      {alert.title}
                    </h3>

                    {/* Location */}
                    <p className="text-zinc-500 mt-3 text-sm">
                      {alert.location}
                    </p>

                    {/* Description */}
                    <p className="text-zinc-400 mt-5 leading-relaxed max-w-2xl">
                      {alert.description}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="text-right ml-8">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                      Status
                    </p>

                    <p className={`mt-3 font-medium ${severity.text}`}>
                      Active
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Empty State */}
          {alerts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
              bg-[#0D0D0D]
              border
              border-white/5
              rounded-[28px]
              p-14
              text-center
              "
            >
              <h3 className="text-2xl font-light text-white">
                No Active Alerts
              </h3>

              <p className="text-zinc-500 mt-4">
                City systems are operating normally.
              </p>
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default Alerts;