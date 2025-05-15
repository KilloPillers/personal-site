import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { format } from 'date-fns';

const KeyLoggerGraph = () => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    // TODO: Fetch metrics from backend api
    const getMetricData = async () => {
      const response = await axios.get(
        `${process.env.PUBLIC_API_URL}:${process.env.PUBLIC_API_PORT}/keylogger/24hr`,
      );

      const rawData = response.data;

      const dataPoints = rawData.map((entry) => {
        return {
          timestamp: format(new Date(entry.batch_time), 'HH:mm'),
          button_right_presses: entry.button_right_presses ?? 0,
          button_left_presses: entry.button_left_presses ?? 0,
          mouse_distance: entry.mouse_distance ?? 0,
          button_middle_presses: entry.button_middle_presses ?? 0,
          key_presses: entry.key_presses ?? 0,
        };
      });

      dataPoints.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      setDataPoints(dataPoints);
    };

    getMetricData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={200}
        data={dataPoints}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip
          contentStyle={{
            background: 'var(--mui-bg-paper)',
            borderRadius: '8px',
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="button_right_presses"
          name="R-Clicks"
          stroke="#8884d8"
          strokeWidth={1}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="button_left_presses"
          name="L-Clicks"
          stroke="#82ca9d"
          strokeWidth={1}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="button_middle_presses"
          name="M-Clicks"
          stroke="#ffc658"
          strokeWidth={1}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="mouse_distance"
          name="Mouse Distance (inch)"
          stroke="#ff7300"
          strokeWidth={1}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="key_presses"
          name="Key presses"
          stroke="#387908"
          strokeWidth={1}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default KeyLoggerGraph;
