import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeviceCard = ({ device }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '20rem' }}>
            <div className="card-header">ID: {device.id}</div>
            <div className="card-body">
                <h5 className="card-title">{device.name}</h5>
                <p className="card-text">気圧: {device.pressure}</p>
                <p className="card-text">地上高: {device.altitude}</p>
            </div>
        </div>
    );
};

const DeviceList = ({ devices }) => {
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {devices.map(device => (
                <DeviceCard key={device.id} device={device} />
            ))}
        </div>
    );
};

export default DeviceList;
