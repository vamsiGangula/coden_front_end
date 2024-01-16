import logo from './logo.svg';
import './App.css';
import Register from './pages/register';
import Charts from './pages/charts';

function App() {
  const dummyData = {
    result: {
      status: true,
      statusCode: 200,
      isTokenExpired: false,
      data: [
        {
          "_id": "65a4bdfa0b1925d3855a8bc0",
          "userId": "uid1",
          "user_name": "User 1",
          "user_email": "user1@example.com",
          "user_phone": "1234567890",
          "coordinates": [
            { "latitude": 17.448294, "longitude": 78.391487, "timestamp": "2024-01-15T05:09:14.365Z" },
            { "latitude": 17.449, "longitude": 78.392, "timestamp": "2024-01-15T05:10:00.000Z" },
            { "latitude": 17.45, "longitude": 78.393, "timestamp": "2024-01-15T05:11:00.000Z" }
          ]
        },
        {
          "_id": "65a4bdfa0b1925d3855a8bc1",
          "userId": "uid2",
          "user_name": "User 2",
          "user_email": "user2@example.com",
          "user_phone": "9876543210",
          "coordinates": [
            { "latitude": 17.448294, "longitude": 78.391487, "timestamp": "2024-01-15T05:09:14.365Z" },
            { "latitude": 17.447, "longitude": 78.390, "timestamp": "2024-01-15T05:10:00.000Z" },
            { "latitude": 17.446, "longitude": 78.389, "timestamp": "2024-01-15T05:11:00.000Z" }
          ]
        },{
          "_id": "65a4bdfa0b1925d3855a8bc0",
          "userId": "uid1",
          "user_name": "User 1",
          "user_email": "user1@example.com",
          "user_phone": "1234567890",
          "coordinates": [
            { "latitude": 17.448294, "longitude": 78.391487, "timestamp": "2024-01-15T05:09:14.365Z" },
            { "latitude": 17.449, "longitude": 78.392, "timestamp": "2024-01-15T05:10:00.000Z" },
            { "latitude": 17.45, "longitude": 78.393, "timestamp": "2024-01-15T05:11:00.000Z" }
          ]
        },
        {
          "_id": "65a4bdfa0b1925d3855a8bc1",
          "userId": "uid2",
          "user_name": "User 2",
          "user_email": "user2@example.com",
          "user_phone": "9876543210",
          "coordinates": [
            { "latitude": 17.448294, "longitude": 78.391487, "timestamp": "2024-01-15T05:09:14.365Z" },
            { "latitude": 17.447, "longitude": 78.390, "timestamp": "2024-01-15T05:10:00.000Z" },
            { "latitude": 17.446, "longitude": 78.389, "timestamp": "2024-01-15T05:11:00.000Z" }
          ]
        },{
          "_id": "65a4bdfa0b1925d3855a8bc0",
          "userId": "uid1",
          "user_name": "User 1",
          "user_email": "user1@example.com",
          "user_phone": "1234567890",
          "coordinates": [
            { "latitude": 17.448294, "longitude": 78.391487, "timestamp": "2024-01-15T05:09:14.365Z" },
            { "latitude": 17.449, "longitude": 78.392, "timestamp": "2024-01-15T05:10:00.000Z" },
            { "latitude": 17.45, "longitude": 78.393, "timestamp": "2024-01-15T05:11:00.000Z" }
          ]
        },
        {
          "_id": "65a4bdfa0b1925d3855a8bc1",
          "userId": "uid2",
          "user_name": "User 2",
          "user_email": "user2@example.com",
          "user_phone": "9876543210",
          "coordinates": [
            { "latitude": 17.448294, "longitude": 78.391487, "timestamp": "2024-01-15T05:09:14.365Z" },
            { "latitude": 17.447, "longitude": 78.390, "timestamp": "2024-01-15T05:10:00.000Z" },
            { "latitude": 17.446, "longitude": 78.389, "timestamp": "2024-01-15T05:11:00.000Z" }
          ]
        },
        {
          "_id": "65a4bdfa0b1925d3855a8bc0",
          "userId": "uid1",
          "user_name": "User 1",
          "user_email": "user1@example.com",
          "user_phone": "1234567890",
          "coordinates": [
            { "latitude": 17.448294, "longitude": 78.391487, "timestamp": "2024-01-15T05:09:14.365Z" },
            { "latitude": 17.449, "longitude": 78.392, "timestamp": "2024-01-15T05:10:00.000Z" },
            { "latitude": 17.45, "longitude": 78.393, "timestamp": "2024-01-15T05:11:00.000Z" }
          ]
        },
        {
          "_id": "65a4bdfa0b1925d3855a8bc1",
          "userId": "uid2",
          "user_name": "User 2",
          "user_email": "user2@example.com",
          "user_phone": "9876543210",
          "coordinates": [
            { "latitude": 17.448294, "longitude": 78.391487, "timestamp": "2024-01-15T05:09:14.365Z" },
            { "latitude": 17.447, "longitude": 78.390, "timestamp": "2024-01-15T05:10:00.000Z" },
            { "latitude": 17.446, "longitude": 78.389, "timestamp": "2024-01-15T05:11:00.000Z" }
          ]
        },{
          "_id": "65a4bdfa0b1925d3855a8bc0",
          "userId": "uid1",
          "user_name": "User 1",
          "user_email": "user1@example.com",
          "user_phone": "1234567890",
          "coordinates": [
            { "latitude": 17.448294, "longitude": 78.391487, "timestamp": "2024-01-15T05:09:14.365Z" },
            { "latitude": 17.449, "longitude": 78.392, "timestamp": "2024-01-15T05:10:00.000Z" },
            { "latitude": 17.45, "longitude": 78.393, "timestamp": "2024-01-15T05:11:00.000Z" }
          ]
        },
        {
          "_id": "65a4bdfa0b1925d3855a8bc1",
          "userId": "uid2",
          "user_name": "User 2",
          "user_email": "user2@example.com",
          "user_phone": "9876543210",
          "coordinates": [
            { "latitude": 17.448294, "longitude": 78.391487, "timestamp": "2024-01-15T05:09:14.365Z" },
            { "latitude": 17.447, "longitude": 78.390, "timestamp": "2024-01-15T05:10:00.000Z" },
            { "latitude": 17.446, "longitude": 78.389, "timestamp": "2024-01-15T05:11:00.000Z" }
          ]
        },{
          "_id": "65a4bdfa0b1925d3855a8bc0",
          "userId": "uid1",
          "user_name": "User 1",
          "user_email": "user1@example.com",
          "user_phone": "1234567890",
          "coordinates": [
            { "latitude": 17.448294, "longitude": 78.391487, "timestamp": "2024-01-15T05:09:14.365Z" },
            { "latitude": 17.449, "longitude": 78.392, "timestamp": "2024-01-15T05:10:00.000Z" },
            { "latitude": 17.45, "longitude": 78.393, "timestamp": "2024-01-15T05:11:00.000Z" }
          ]
        },
        {
          "_id": "65a4bdfa0b1925d3855a8bc1",
          "userId": "uid2",
          "user_name": "User 2",
          "user_email": "user2@example.com",
          "user_phone": "9876543210",
          "coordinates": [
            { "latitude": 17.448294, "longitude": 78.391487, "timestamp": "2024-01-15T05:09:14.365Z" },
            { "latitude": 17.447, "longitude": 78.390, "timestamp": "2024-01-15T05:10:00.000Z" },
            { "latitude": 17.446, "longitude": 78.389, "timestamp": "2024-01-15T05:11:00.000Z" }
          ]
        }
      ]
    }
  };

  return (
    <div>
      {/* <Register/> */}
      <Charts trajectoryData={dummyData.result.data} />
    </div>
  );
}

export default App;
