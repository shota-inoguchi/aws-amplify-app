const AWS = require('aws-sdk');
AWS.config.update({region: 'your-region'});
const dynamodb = new AWS.DynamoDB.DocumentClient();

const paramsDevices = {
  TableName: "MetcomDevices-5m76m43vvjdg5pl23rdq2begum-dev",
};

const paramsLocations = {
  TableName: "Metcom3DLocations-5m76m43vvjdg5pl23rdq2begum-dev",
};

// デバイスデータの取得
dynamodb.scan(paramsDevices, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    // dataを使用してカードを表示
  }
});

// カードコンポーネントの例
function DeviceCard({ device }) {
  return (
    <div onClick={() => showGraph(device)}>
      <h3>{device.deviceName}</h3>
      <p>ID: {device.deviceId}</p>
      <p>気圧値: {device.pressure}</p>
      <p>地上高: {device.HAT}</p>
    </div>
  );
}

function showGraph(device) {
  // 過去24時間分のデータを取得
  const params = {
    TableName: "Metcom3DLocations-5m76m43vvjdg5pl23rdq2begum-dev",
    KeyConditionExpression: "deviceId = :id",
    ExpressionAttributeValues: {
      ":id": device.deviceId,
    },
  };

  dynamodb.query(params, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // dataを使用してグラフを表示
    }
  });
}