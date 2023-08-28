import { useState } from 'react';
import { Line } from 'react-chartjs-2'; // For line chart

import styles from './DeviceCard.module.css';

function DeviceCard({ device }) {
  return (
    <div className={styles.card} onClick={() => setShowGraph(!showGraph)}>
      ...
    </div>
  );
}


function DeviceCard({ device }) {
  const [showGraph, setShowGraph] = useState(false);

  return (
    <div onClick={() => setShowGraph(!showGraph)}>
      <h3>{device.name}</h3>
      {showGraph && <PressureGraph data={device.pressureData} />}
    </div>
  );
}

function PressureGraph({ data }) {
  const chartData = {
    labels: data.map(d => d.timestamp),
    datasets: [{
      data: data.map(d => d.value),
      label: 'Pressure over time',
      borderColor: '#3333ff',
      fill: false
    }]
  };

  return <Line data={chartData} />;
}
