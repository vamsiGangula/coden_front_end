import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Styles from '../styles/chart.module.scss';
import { _GetTrajectoryData } from '../utils/api/TrajectoryApiCalls';
import NextCookies from 'next-cookies';

function Charts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await _GetTrajectoryData(NextCookies('ctx'));
        console.log(resp, '=====');
        const formattedData = resp?.data?.result?.data.map((item) => ({
          timestamp: new Date(item.timestamp).toLocaleDateString('en-GB'),
          latitude: item.coordinates[0]?.latitude,
          longitude: item.coordinates[0]?.longitude,
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={Styles.chartmain}>
      <div className={Styles.chart1}>
        <Container component="main" maxWidth="xs">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div>
                <h1 className={Styles.chart2}>Line Graph With Multiple Trajectories</h1>
              </div>
            </Grid>

            <Grid item xs={12}>
              <LineChart
                width={window.innerWidth > 600 ? 730 : window.innerWidth - 20}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="latitude" stroke="#8832d8" />
                <Line type="monotone" dataKey="longitude" stroke="#82ca9d" />
              </LineChart>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Charts;
