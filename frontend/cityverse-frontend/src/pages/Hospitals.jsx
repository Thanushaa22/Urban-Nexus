import { useEffect, useState } from "react";
import api from "../services/api";

function Hospitals() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const res = await api.get("/api/hospitals");
        console.log(res.data); // check browser console
        setHospitals(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchHospitals();
  }, []);

  return (
    <div className="text-white">
      <h2 className="text-3xl font-light mb-8">
        Healthcare Network
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {hospitals.length > 0 ? (
          hospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-[#0B0B0B] border border-white/5 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-light">
                {hospital.hospitalName}
              </h3>

              <p className="text-zinc-400 mt-4">
                Total Beds: {hospital.totalBeds}
              </p>

              <p className="text-green-400 mt-2">
                Available Beds: {hospital.availableBeds}
              </p>

              <p className="text-red-400 mt-2">
                ICU Beds: {hospital.icuBeds}
              </p>

              <p className="text-zinc-500 mt-3">
                City: {hospital.city?.cityName || "Not Assigned"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-zinc-500">No hospitals found.</p>
        )}
      </div>
    </div>
  );
}

export default Hospitals;