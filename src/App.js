import React from 'react';
import DeviceList from './DeviceList';  // 適切なパスに変更してください

function App() {
    const devices = [
        {
            id: '1',
            name: 'Device 1',
            pressure: '1013 hPa',
            altitude: '100 m'
        },
        {
            id: '2',
            name: 'Device 2',
            pressure: '1010 hPa',
            altitude: '105 m'
        },
        // ... 他のデバイスデータ
    ];

    return (
        <div className="container mt-5">
            <DeviceList devices={devices} />
        </div>
    );
}

export default App;
