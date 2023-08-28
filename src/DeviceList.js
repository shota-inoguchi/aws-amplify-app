import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './styles.css';


const LIST_DEVICES = gql`
  query ListDevices {
    listDevices {
      id
      name
    }
  }
`;

function DeviceList() {
  const { loading, error, data } = useQuery(LIST_DEVICES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.listDevices.map(device => (
        <DeviceCard device={device} key={device.id} />
      ))}
    </div>
  );
}
