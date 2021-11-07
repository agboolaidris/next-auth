import { Card } from '@mui/material';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '@mui/material';

const VerticalBar = () => {
  const theme = useTheme();
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
      {
        label: 'Net profit',
        data: [-29, 12, 12, -4, 2, 9],
        backgroundColor: theme.palette.secondary.main,

        borderColor: theme.palette.secondary.light,

        borderWidth: 1,
      },
      {
        label: 'Cross profit',
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

export default VerticalBar;
