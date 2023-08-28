import React, { useEffect, useState } from 'react';
import { fetchItems } from './path-to-your-helper';
import DeviceCard from './DeviceCard'; // DeviceCardのインポート

function DeviceList() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchItems();
      setDevices(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {devices.map(device => (
        <DeviceCard key={device.DeviceId} device={device} />
      ))}
    </div>
  );
}

export default DeviceList;
