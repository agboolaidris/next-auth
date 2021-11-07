import Dashboard from '../../layout/dashboard';
import Grid from '@mui/material/Grid';
import { PieChart } from '../../components/charts/pie';
import {
  VerticalBarChart,
  HorizontalBarChart,
  StackedBarChart,
} from '../../components/charts/bar';
import { Stack } from '@mui/material';

const BasicChart = () => {
  return (
    <Dashboard>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            <VerticalBarChart />
            <HorizontalBarChart />
            <StackedBarChart />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <PieChart />
          </Stack>
        </Grid>
      </Grid>
    </Dashboard>
  );
};
export default BasicChart;
