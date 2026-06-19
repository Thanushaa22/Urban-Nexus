import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function CityMap() {
  const hospitals = [
    {
      name: "Manipal Hospital",
      position: [12.9352, 77.6245]
    },
    {
      name: "Apollo Hospital",
      position: [12.8975, 77.5963]
    },
    {
      name: "Fortis Hospital",
      position: [12.9279, 77.5831]
    },
    {
      name: "Narayana Health",
      position: [12.8421, 77.6638]
    }
  ];

  const trafficZones = [
    {
      name: "Outer Ring Road",
      position: [12.9560, 77.7010]
    },
    {
      name: "Silk Board Junction",
      position: [12.9177, 77.6238]
    },
    {
      name: "Hebbal Flyover",
      position: [13.0352, 77.5970]
    },
    {
      name: "Majestic Circle",
      position: [12.9784, 77.5723]
    }
  ];

  const alerts = [
    {
      name: "Flood Risk Zone",
      position: [12.9900, 77.6100]
    },
    {
      name: "Power Grid Failure",
      position: [12.8840, 77.6450]
    }
  ];

  return (
    <MapContainer
      center={[12.9716, 77.5946]}
      zoom={11}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "24px"
      }}
      zoomControl={false}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />

      {/* Central Command Hub */}
      <Marker position={[12.9716, 77.5946]}>
        <Popup>
          <div>
            <h3 className="font-semibold">Urban Nexus</h3>
            <p>Central Command Center</p>
          </div>
        </Popup>
      </Marker>

      {/* Hospitals */}
      {hospitals.map((hospital, index) => (
        <>
          <Circle
            key={`hospital-circle-${index}`}
            center={hospital.position}
            radius={500}
            pathOptions={{
              color: "#22c55e",
              fillColor: "#22c55e",
              fillOpacity: 0.07,
              weight: 1
            }}
          />

          <Marker
            key={`hospital-marker-${index}`}
            position={hospital.position}
          >
            <Popup>
              <div>
                <h3 className="font-semibold">
                  {hospital.name}
                </h3>
                <p>Healthcare Node</p>
              </div>
            </Popup>
          </Marker>
        </>
      ))}

      {/* Traffic Zones */}
      {trafficZones.map((zone, index) => (
        <>
          <Circle
            key={`traffic-circle-${index}`}
            center={zone.position}
            radius={750}
            pathOptions={{
              color: "#ff2d2d",
              fillColor: "#ff2d2d",
              fillOpacity: 0.10,
              weight: 1
            }}
          />

          <Marker
            key={`traffic-marker-${index}`}
            position={zone.position}
          >
            <Popup>
              <div>
                <h3 className="font-semibold">
                  {zone.name}
                </h3>
                <p>High Traffic Density</p>
              </div>
            </Popup>
          </Marker>
        </>
      ))}

      {/* Alert Zones */}
      {alerts.map((alert, index) => (
        <>
          <Circle
            key={`alert-circle-${index}`}
            center={alert.position}
            radius={1100}
            pathOptions={{
              color: "#ef4444",
              fillColor: "#ef4444",
              fillOpacity: 0.18,
              weight: 2
            }}
          />

          <Marker
            key={`alert-marker-${index}`}
            position={alert.position}
          >
            <Popup>
              <div>
                <h3 className="font-semibold text-red-500">
                  {alert.name}
                </h3>
                <p>Active Monitoring Area</p>
              </div>
            </Popup>
          </Marker>
        </>
      ))}
    </MapContainer>
  );
}

export default CityMap;