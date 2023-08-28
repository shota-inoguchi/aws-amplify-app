import Amplify from 'aws-amplify';
import { AmplifyAPI, AmplifyPubSub } from '@aws-amplify/api';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
Amplify.register(AmplifyAPI, AmplifyPubSub);

import AWS from 'aws-sdk';

// AWSの設定
AWS.config.update({
  region: 'your-region',  // 例: 'us-west-2'
  // 本番環境の認証情報はここに直接記述しないでください。代わりにIAM rolesやAmazon Cognitoを使用するなどの方法を検討してください。
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_KEY'
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

// データを取得する関数
export const fetchItems = async () => {
  const params = {
    TableName: "MetcomDevices-5m76m43vvjdg5pl23rdq2begum-dev"
  };

  try {
    const data = await dynamoDb.scan(params).promise();
    return data.Items;
  } catch (error) {
    console.error("Error fetching data from DynamoDB", error);
  }
};


import React, { useEffect, useState } from 'react';
import { fetchItems } from './path-to-your-helper';

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
        <div key={device.DeviceId}>
          {/* ここに各デバイスのデータを表示するコードを書く */}
          {device.someAttribute}
        </div>
      ))}
    </div>
  );
}

export default DeviceList;

