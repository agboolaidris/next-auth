import { Card } from '@mui/material';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '@mui/material';

export const VerticalBarChart = () => {
  const theme = useTheme();
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
      {
        label: 'Female',
        data: [29, 12, 12, 4, 2, 9],
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.light,
        borderWidth: 1,
      },
      {
        label: 'Male',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.light,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card sx={{ padding: 3 }}>
      <Bar
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Active Gender per Month',
              align: 'start',
              font: {
                size: 20,
              },
            },
          },
        }}
      />
    </Card>
  );
};

export const HorizontalBarChart = () => {
  const theme = useTheme();
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
      {
        label: 'Net Profit',
        data: [-292, -1202, -12, -2936, 265, 455],
        backgroundColor: theme.palette.secondary.main,

        borderColor: theme.palette.secondary.light,

        borderWidth: 1,
      },
      {
        label: 'Cross Profit',
        data: [922, -619, 2770, -50, 836, 929],
        backgroundColor: theme.palette.primary.main,

        borderColor: theme.palette.primary.light,

        borderWidth: 1,
      },
    ],
  };

  return (
    <Card sx={{ padding: 3 }}>
      <Bar
        data={data}
        options={{
          indexAxis: 'y',
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Horizontal Bar chart',
              align: 'start',
              font: {
                size: 20,
              },
            },
          },
        }}
      />
    </Card>
  );
};

export const StackedBarChart = () => {
  const theme = useTheme();
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
      {
        label: 'Net Profit',
        data: [-292, -1202, -12, -2936, 265, 455],
        backgroundColor: theme.palette.secondary.main,

        borderColor: theme.palette.secondary.light,

        borderWidth: 1,
      },
      {
        label: 'Cross Profit',
        data: [922, -619, 2770, -50, 836, 929],
        backgroundColor: theme.palette.primary.main,

        borderColor: theme.palette.primary.light,

        borderWidth: 1,
      },
    ],
  };

  return (
    <Card sx={{ padding: 3 }}>
      <Bar
        data={data}
        options={{
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: 'Stacked Bar chart',
              align: 'start',
              font: {
                size: 20,
              },
            },
          },
        }}
      />
    </Card>
  );
};
