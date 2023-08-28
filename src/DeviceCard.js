import React from 'react';
import './DeviceCard.css'; // スタイルシートのインポート

function DeviceCard({ device }) {
  return (
    <div className="device-card">
      <div className="device-id">
        <strong>ID:</strong> {device.DeviceId}
      </div>
      <div className="device-name">
        <strong>Name:</strong> {device.DeviceName}
      </div>
      <div className="device-pressure">
        <strong>Pressure:</strong> {device.PressureValue}
      </div>
      <div className="device-altitude">
        <strong>Altitude:</strong> {device.Altitude}
      </div>
    </div>
  );
}

export default DeviceCard;
