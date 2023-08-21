import React from 'react';
import DeviceCard from './DeviceCard';
import './App.css';

const App = () => {
  // 仮のデータ
  const devices1 = [
    { deviceID: '123', deviceName: 'Device 1', pressure: 1013, hat: 200 },
    { deviceID: '456', deviceName: 'Device 2', pressure: 1005, hat: 150 },
  ];
    // 他のデバイスデータ
    const devices2 = [
      { deviceID: '123', deviceName: 'Device 1', pressure: 1013, hat: 200 },
      { deviceID: '456', deviceName: 'Device 2', pressure: 1005, hat: 150 },
  ];

  return (
    <div className="App">
      {devices.map((device, index) => (
        <DeviceCard key={index} device={device} />
      ))}
    </div>
  );
};

export default App;
