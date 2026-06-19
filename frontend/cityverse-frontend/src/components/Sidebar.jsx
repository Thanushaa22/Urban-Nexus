import {
  FaHome,
  FaCity,
  FaHospital,
  FaTrafficLight,
  FaBell,
  FaSignOutAlt,
  FaChartLine
} from "react-icons/fa";

function Sidebar({ active, setActive }) {
  const menuItems = [
    { icon: <FaHome />, name: "Overview" },
    { icon: <FaChartLine />, name: "Analytics" },
    { icon: <FaCity />, name: "Cities" },
    { icon: <FaHospital />, name: "Healthcare" },
    { icon: <FaTrafficLight />, name: "Traffic" },
    { icon: <FaBell />, name: "Alerts" }
  ];

  return (
    <aside
      className="
      fixed
      left-0
      top-0
      h-screen
      w-64
      bg-[#050505]
      border-r
      border-[#141414]
      flex
      flex-col
      text-white
      "
    >
      {/* Logo */}
      <div className="px-7 py-8 border-b border-[#141414]">
        <div className="flex items-center gap-3">
          <div
            className="
            w-12
            h-12
            rounded-xl
            bg-white
            flex
            items-center
            justify-center
            shadow-[0_10px_40px_rgba(255,255,255,0.06)]
            "
          >
            <span
              className="
              text-black
              font-semibold
              text-lg
              tracking-[-0.04em]
              "
            >
              UN
            </span>
          </div>

          <div>
            <h1 className="text-lg font-medium tracking-tight text-white">
              Urban Nexus
            </h1>

            <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-600">
              Command System
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-8">
        <div className="px-7 mb-6">
          <p
            className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-zinc-600
            "
          >
            Navigation
          </p>
        </div>

        <div className="space-y-1 px-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`
              relative
              w-full
              flex
              items-center
              gap-4
              px-4
              py-3
              rounded-lg
              transition-all
              duration-300
              hover:translate-x-1
              ${
                active === item.name
                  ? "bg-[#101010] text-white border border-white/[0.04]"
                  : "text-zinc-400 hover:bg-[#0d0d0d] hover:text-white"
              }
              `}
            >
              {active === item.name && (
                <div
                  className="
                  absolute
                  left-0
                  top-2
                  bottom-2
                  w-[3px]
                  bg-red-600
                  rounded-full
                  "
                />
              )}

              <span className="text-sm">{item.icon}</span>

              <span className="text-sm font-medium">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="
        p-5
        border-t
        border-[#141414]
        "
      >
        <div className="mb-4">
          <p className="text-xs text-zinc-500">
            System Status
          </p>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm text-zinc-300">
              Operational
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="
          w-full
          py-3
          rounded-lg
          border
          border-[#1c1c1c]
          hover:border-red-500/30
          hover:bg-[#0d0d0d]
          hover:text-red-500
          transition-all
          duration-300
          flex
          items-center
          justify-center
          gap-3
          "
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;