import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_DEVICES = gql`
  query GetDevices {
    getDevices {
      id
      name
      type
      // 他のフィールドも追加できます
    }
  }
`;

function DeviceCards() {
  const { loading, error, data } = useQuery(GET_DEVICES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.getDevices.map(device => (
        <div key={device.id} className="device-card">
          <h2>{device.name}</h2>
          <p>Type: {device.type}</p>
          {/* 他のデータも表示できます */}
        </div>
      ))}
    </div>
  );
}

export default DeviceCards;
