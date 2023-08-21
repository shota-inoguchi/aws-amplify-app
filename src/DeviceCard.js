import React from 'react';

const DeviceCard = ({ deviceId, deviceName, pressure, groundHeight }) => {
  return (
    <div className="device-card">
      <h3>デバイス名: {deviceName}</h3>
      <p>Device ID: {deviceId}</p>
      <p>気圧値: {pressure} hPa</p>
      <p>地上高（HAT）: {groundHeight} m</p>
    </div>
  );
};

export default DeviceCard;
