
import DeviceList from './DeviceList';  // 適切なパスに変更してください


import React, { useEffect, useState } from 'react';
import AWSAppSyncClient from 'aws-appsync';
import { graphql } from 'graphql-tag';

const GET_DEVICES = graphql`
    query ListDevices {
        listDevices {
            id
            name
            pressure
            altitude
        }
    }
`;


function DeviceList() {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const client = new AWSAppSyncClient({
            url: 'https://jvgy2cnbljeopbngyjyv5zxzw4.appsync-api.ap-northeast-1.amazonaws.com/graphql',
            region: 'ap-northeast-1',
            
        });

        client.query({ query: GET_DEVICES }).then(response => {
            setDevices(response.data.listDevices);
        });
    }, []);
    
    
    useEffect(() => {
        client.query({ query: GET_DEVICES }).then(response => {
            setDevices(response.data.listDevices);
        });
    }, []);

    return (
        <div className="d-flex flex-wrap justify-content-around">
            {devices.map(device => (
                <DeviceCard key={device.id} device={device} />
            ))}
        </div>
    );
}

const DeviceCard({ device }) {
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
}

export default DeviceList;
