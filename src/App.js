import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

import { listMetcomDevices } from './graphql/queries';


import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

function App() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const deviceData = await API.graphql(graphqlOperation(listMetcomDevices));
        setDevices(deviceData.data.listMetcomDevices.items);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {devices.map(device => (
        <div key={device.id}>
          <h3>{device.name}</h3>
          <p>{device.location}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
