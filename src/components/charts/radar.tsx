import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

import { Card } from '@mui/material';
import { useTheme } from '@mui/material';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function RadarChart() {
  const theme = useTheme();
  const data = {
    labels: [
      'Javascript',
      'React',
      'Typescript',
      'MaterialUI',
      'Nodejs',
      'Next',
    ],
    datasets: [
      {
        label: 'Technology',
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: theme.palette.warning.light,
        borderColor: theme.palette.warning.main,
        borderWidth: 1,
      },
    ],
  };
  return (
    <Card sx={{ padding: 3 }}>
      <Radar
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
      ;
    </Card>
  );
}
