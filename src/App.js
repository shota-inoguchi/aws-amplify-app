import React from 'react';
import DeviceCard from './DeviceCard';

function App() {
  const devices = [
    { name: 'デバイス 1', description: 'これはデバイス 1 です' },
    { name: 'デバイス 2', description: 'これはデバイス 2 です' },
    { name: 'デバイス 3', description: 'これはデバイス 3 です' },
    // 他のデバイスを追加
  ];

  return (
    <div>
      <h1>デバイス一覧</h1>
      <div>
        {devices.map((device, index) => (
          <DeviceCard key={index} device={device} />
        ))}
      </div>
    </div>
  );
}

export default App;

