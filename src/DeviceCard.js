import React from 'react';

function DeviceCard({ device }) {
  return (
    <div className="card">
      <h2>{device.name}</h2>
      <p>{device.description}</p>
      {/* 他のデバイス情報をここに表示 */}
    </div>
  );
}

export default DeviceCard;
