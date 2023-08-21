import React from 'react';
import DeviceCard from './DeviceCard';

const App = () => {
  const deviceData = [
    {
      deviceId: '123456',
      deviceName: 'デバイスA',
      pressure: 1013.25,
      groundHeight: 100
    },
    // 他のデバイス情報
  ];

  return (
    <div>
      {deviceData.map((device, index) => (
        <DeviceCard
          key={index}
          deviceId={device.deviceId}
          deviceName={device.deviceName}
          pressure={device.pressure}
          groundHeight={device.groundHeight}
        />
      ))}
    </div>
  );
};

export default App;
