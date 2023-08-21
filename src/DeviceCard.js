function DeviceCard({ device }) {
  return (
    <div className="device-card">
      <h3>{device.deviceName}</h3>
      <p>ID: {device.deviceId}</p>
      <p>気圧値: {device.pressureValue}</p>
      <p>地上高（HAT）: {device.heightAboveTerrain}</p>
    </div>
  );
}
