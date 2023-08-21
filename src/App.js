const params = {
  TableName: 'MetcomDevices-5m76m43vvjdg5pl23rdq2begum-dev'
};

docClient.scan(params, function(err, data) {
  if (err) {
    console.error('Error', JSON.stringify(err, null, 2));
  } else {
    console.log('Success', data.Items);
  }
});

const params = {
  TableName: 'Metcom3DLocations-5m76m43vvjdg5pl23rdq2begum-dev'
};

docClient.scan(params, function(err, data) {
  if (err) {
    console.error('Error', JSON.stringify(err, null, 2));
  } else {
    console.log('Success', data.Items);
  }
});

import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

const DevicesList = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: 'MetcomDevices-5m76m43vvjdg5pl23rdq2begum-dev'
    };

    docClient.scan(params, function(err, data) {
      if (err) {
        console.error('Error', JSON.stringify(err, null, 2));
      } else {
        setDevices(data.Items);
      }
    });
  }, []);

  return (
    <div>
      {devices.length > 0 ? (
        devices.map((device, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>{device.deviceName}</h3>
            <p>Device ID: {device.deviceId}</p>
            <p>気圧値: {device.pressureValue}</p>
            <p>地上高（HAT）: {device.heightAboveTerrain}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DevicesList;

