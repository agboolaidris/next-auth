import Dashboard from '../layout/dashboard';
import Grid from '@mui/material/Grid';
import Piechart from '../components/charts/pie';
import Areachart from '../components/charts/area';
import BasicCard from '../components/cards/basicCard';
import ListCard from '../components/cards/listCard';
import { Stack } from '@mui/material';
import BasicTable from '../components/tables/basicTable';

const Home = () => {
  return (
    <Dashboard>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ paddingBottom: 3 }}
      >
        <Grid item xs={12} md={3}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasicCard />
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            <Areachart />
            <BasicTable />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <Piechart />
            <ListCard />
          </Stack>
        </Grid>
      </Grid>
    </Dashboard>
  );
};
export default Home;
