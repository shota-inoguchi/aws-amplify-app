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

const AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-northeast-1' // あなたのリージョンを指定
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'MetcomDevices-5m76m43vvjdg5pl23rdq2begum-dev', // あなたのテーブル名
  // 他のクエリパラメータ（必要に応じて）
};

dynamoDB.scan(params, (err, data) => {
  if (err) {
    console.error('データの取得に失敗:', JSON.stringify(err, null, 2));
  } else {
    console.log('データの取得に成功:', JSON.stringify(data, null, 2));
  }
});