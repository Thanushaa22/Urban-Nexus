import { useState } from "react";

function Admin() {
  const [city, setCity] = useState("");
  const [hospital, setHospital] = useState("");
  const [alert, setAlert] = useState("");

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-light mb-10">
        Admin Control Panel
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Add City */}
        <div className="bg-[#0B0B0B] border border-white/5 rounded-3xl p-8">
          <h2 className="text-2xl mb-6">Add City</h2>

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="w-full p-4 bg-black border border-zinc-800 rounded-xl"
          />

          <button className="mt-5 bg-red-600 px-6 py-3 rounded-xl w-full">
            Add City
          </button>
        </div>

        {/* Add Hospital */}
        <div className="bg-[#0B0B0B] border border-white/5 rounded-3xl p-8">
          <h2 className="text-2xl mb-6">Add Hospital</h2>

          <input
            type="text"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            placeholder="Enter hospital name"
            className="w-full p-4 bg-black border border-zinc-800 rounded-xl"
          />

          <button className="mt-5 bg-red-600 px-6 py-3 rounded-xl w-full">
            Add Hospital
          </button>
        </div>

        {/* Create Alert */}
        <div className="bg-[#0B0B0B] border border-white/5 rounded-3xl p-8">
          <h2 className="text-2xl mb-6">Create Alert</h2>

          <input
            type="text"
            value={alert}
            onChange={(e) => setAlert(e.target.value)}
            placeholder="Enter alert title"
            className="w-full p-4 bg-black border border-zinc-800 rounded-xl"
          />

          <button className="mt-5 bg-red-600 px-6 py-3 rounded-xl w-full">
            Create Alert
          </button>
        </div>

      </div>
    </div>
  );
}

export default Admin;