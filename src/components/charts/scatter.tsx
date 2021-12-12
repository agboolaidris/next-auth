import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Card } from '@mui/material';

const rand = () => Math.round(Math.random() * 20 - 10);

const data = {
  datasets: [
    {
      label: 'A dataset',
      data: [
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
        { x: rand(), y: rand() },
      ],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

export const ScatterChart = () => (
  <Card sx={{ padding: 3 }}>
    <Scatter
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: 'Radar Chart statistics',
            align: 'start',
            font: {
              size: 20,
            },
          },
          legend: {
            align: 'start',
            labels: {
              usePointStyle: true,
              boxWidth: 6,
            },
          },
        },
      }}
    />
  </Card>
);
