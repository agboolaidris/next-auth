import { Card } from '@mui/material';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useTheme } from '@mui/material';

export const PieChart = () => {
  const theme = useTheme();
  const data = {
    labels: [
      'React',
      'Emotion',
      'Typescript',
      'MaterialUI',
      'React-chart',
      'Next',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [6, 5, 9, 6, 3, 10],
        backgroundColor: [
          theme.palette.secondary.main,
          theme.palette.primary.main,
          theme.palette.secondary.dark,
          theme.palette.warning.main,
          theme.palette.primary.light,
          theme.palette.error.light,
        ],
        borderColor: [
          theme.palette.secondary.light,
          theme.palette.primary.light,
          theme.palette.secondary.light,
          theme.palette.warning.light,
          theme.palette.primary.dark,
          theme.palette.error.dark,
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card variant="outlined" sx={{ padding: 2 }}>
      <Pie
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Technology used',
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
};

export const MultiSeriesPieChart = () => {
  const theme = useTheme();
  const data = {
    labels: [
      'React',
      'Emotion',
      'Typescript',
      'MaterialUI',
      'React-chart',
      'Next',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [6, 5, 9, 6, 3, 10],
        backgroundColor: [
          theme.palette.secondary.main,
          theme.palette.primary.main,
          theme.palette.secondary.dark,
          theme.palette.warning.main,
          theme.palette.primary.light,
          theme.palette.error.light,
        ],
        borderColor: [
          theme.palette.secondary.light,
          theme.palette.primary.light,
          theme.palette.secondary.light,
          theme.palette.warning.light,
          theme.palette.primary.dark,
          theme.palette.error.dark,
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card variant="outlined" sx={{ padding: 2 }}>
      <Pie
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Technology used',
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
};
