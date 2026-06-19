import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const navItems = [
    "Platform",
    "Solutions",
    "Industries",
    "Pricing"
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="
      fixed
      top-5
      left-0
      right-0
      z-50
      px-6
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        h-16
        px-6
        flex
        items-center
        justify-between
        rounded-2xl
        bg-black/60
        backdrop-blur-xl
        border
        border-white/[0.06]
        shadow-[0_8px_30px_rgba(0,0,0,0.45)]
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-4"
        >
          <div
            className="
            w-11
            h-11
            rounded-xl
            bg-white
            flex
            items-center
            justify-center
            shadow-[0_8px_25px_rgba(255,255,255,0.06)]
            "
          >
            <span
              className="
              text-black
              font-semibold
              text-base
              tracking-[-0.05em]
              "
            >
              UN
            </span>
          </div>

          <div>
            <h1 className="text-lg font-medium tracking-tight text-white">
              Urban Nexus
            </h1>

            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Intelligence Platform
            </p>
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
              relative
              text-sm
              text-zinc-400
              hover:text-white
              transition-all
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[1px]
              after:w-0
              after:bg-red-500
              after:transition-all
              hover:after:w-full
              "
            >
              {item}
            </a>
          ))}

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth"
                })
            }
            className="
            relative
            text-sm
            text-zinc-400
            hover:text-white
            transition-all
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[1px]
            after:w-0
            after:bg-red-500
            after:transition-all
            hover:after:w-full
            "
          >
            Contact
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="
            text-sm
            text-zinc-300
            hover:text-white
            px-4
            py-2
            transition-all
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            className="
            text-sm
            border
            border-white/[0.08]
            hover:border-white/[0.18]
            text-white
            px-4
            py-2
            rounded-xl
            transition-all
            "
          >
            Register
          </Link>

          <Link
            to="/register"
            className="
            text-sm
            bg-red-600
            hover:bg-red-700
            text-white
            px-5
            py-2
            rounded-xl
            font-medium
            shadow-[0_0_20px_rgba(255,0,0,0.25)]
            transition-all
            "
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;