import { useState } from "react";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data);

alert("Login Successful!");

window.location.href = "/dashboard";

    } catch (err) {
      alert("Invalid Credentials");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white grid lg:grid-cols-2">

      {/* LEFT PANEL */}
      <div className="flex items-center justify-center px-10 py-10">

        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="flex items-center gap-5 mb-14">

            <div
              className="
              w-24
              h-24
              rounded-[28px]
              bg-white
              flex
              items-center
              justify-center
              shadow-[0_0_40px_rgba(255,255,255,0.08)]
              "
            >
              <span className="text-black text-4xl font-bold">
                UN
              </span>
            </div>

            <div>
              <h1 className="text-4xl font-light tracking-tight">
                Urban Nexus
              </h1>

              <p className="text-zinc-500 text-sm uppercase tracking-[0.28em] mt-2">
                Intelligence Platform
              </p>
            </div>

          </div>

          {/* Heading */}
          <div className="mb-12">

            <h2 className="text-6xl font-light leading-tight">
              Welcome back.
            </h2>

            <p className="text-zinc-500 mt-5 text-lg leading-relaxed">
              Sign in to access your smart city command center.
            </p>

          </div>

          {/* Form Container */}
          <div
            className="
            bg-white/[0.02]
            border
            border-white/[0.05]
            rounded-[28px]
            p-8
            backdrop-blur-xl
            "
          >

            <form onSubmit={loginUser} className="space-y-7">

              {/* Email */}
              <div>

                <label className="text-[11px] uppercase tracking-[0.28em] text-zinc-600">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                  w-full
                  mt-4
                  bg-[#0B0B0B]
                  border
                  border-white/[0.06]
                  px-5
                  py-4
                  rounded-2xl
                  outline-none
                  text-white
                  placeholder:text-zinc-600
                  focus:border-red-500/40
                  transition-all
                  "
                  required
                />

              </div>

              {/* Password */}
              <div>

                <label className="text-[11px] uppercase tracking-[0.28em] text-zinc-600">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                  w-full
                  mt-4
                  bg-[#0B0B0B]
                  border
                  border-white/[0.06]
                  px-5
                  py-4
                  rounded-2xl
                  outline-none
                  text-white
                  placeholder:text-zinc-600
                  focus:border-red-500/40
                  transition-all
                  "
                  required
                />

              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                w-full
                bg-red-600
                text-white
                py-4
                rounded-2xl
                font-medium
                hover:bg-red-500
                transition-all
                shadow-[0_0_35px_rgba(255,0,0,0.22)]
                "
              >
                Sign In
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* RIGHT PANEL */}
      <div
        className="
        hidden
        lg:flex
        items-center
        justify-center
        relative
        overflow-hidden
        border-l
        border-white/[0.04]
        "
      >

        {/* Red Glow */}
        <div
          className="
          absolute
          w-[800px]
          h-[800px]
          bg-red-500/[0.08]
          blur-[180px]
          rounded-full
          "
        />

        {/* Grid */}
        <div
          className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.04)_1px,transparent_1px)]
          bg-[size:80px_80px]
          "
        />

        {/* Content */}
        <div className="relative z-10 max-w-xl px-12">

          <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-600 mb-8">
            Smart City Intelligence
          </p>

          <h1 className="text-7xl font-light leading-[0.95]">
            Intelligence
            <br />
            for modern
            <br />
            <span className="text-red-500 italic">
              cities.
            </span>
          </h1>

          <p className="mt-8 text-lg text-zinc-500 leading-relaxed">
            Monitor traffic, hospitals, emergency alerts,
            and urban infrastructure from a single
            AI-powered command center.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;