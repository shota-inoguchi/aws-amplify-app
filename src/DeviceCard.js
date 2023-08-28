const devices = [
  {
    id: 1,
    name: "Device A",
    pressure: "1013 hPa",
    altitude: "10 m"
  },
  {
    id: 2,
    name: "Device B",
    pressure: "1010 hPa",
    altitude: "20 m"
  },
  // ... 他のデバイスデータ
];

import React from 'react';

const DeviceCard = ({ device }) => {
  return (
    <div className="device-card">
      <h3>{device.name}</h3>
      <p><strong>ID:</strong> {device.id}</p>
      <p><strong>Pressure:</strong> {device.pressure}</p>
      <p><strong>Altitude:</strong> {device.altitude}</p>
    </div>
  );
}

const DeviceList = ({ devices }) => {
  return (
    <div className="device-list">
      {devices.map(device => <DeviceCard key={device.id} device={device} />)}
    </div>
  );
}

// 使用例
function App() {
  return (
    <div className="App">
      <h1>Devices</h1>
      <DeviceList devices={devices} />
    </div>
  );
}

export default App;
