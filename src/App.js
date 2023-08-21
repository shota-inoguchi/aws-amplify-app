import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import DeviceCard from './DeviceCard';

function DeviceList() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: 'MetcomDevices-5m76m43vvjdg5pl23rdq2begum-dev',
    };

    dynamodb.scan(params, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      setDevices(data.Items);
    });
  }, []);

  const handleCardClick = (device) => {
    // ここで該当デバイスの気圧値の過去24時間分のデータを取得して表示します
  };

  return (
    <div>
      {devices.map((device) => (
        <DeviceCard key={device.deviceID} device={device} onClick={handleCardClick} />
      ))}
    </div>
  );
}
export default DeviceList;

import React from 'react';
import { Line } from 'react-chartjs-2';

function PressureGraph({ data }) {
  const chartData = {
    labels: data.map(item => item.timestamp),
    datasets: [
      {
        label: '気圧値',
        data: data.map(item => item.pressure),
        // 他のグラフの設定もここに追加できます
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}

export default PressureGraph;



