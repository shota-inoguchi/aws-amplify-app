import { API, graphqlOperation } from 'aws-amplify';
import { listDevices } from './graphql/queries';

function ListDevices() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const deviceData = await API.graphql(graphqlOperation(listDevices));
      setDevices(deviceData.data.listDevices.items);
    } catch (err) {
      console.error('Error fetching devices:', err);
    }
  };

  return (
    <div>
      {devices.map(device => (
        <div key={device.id}>
          <h3>{device.name}</h3>
          <p>{device.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ListDevices;
