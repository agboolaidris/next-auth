import Dashboard from '../layout/dashboard';
import Grid from '@mui/material/Grid';
import Piechart from '../components/charts/pie';
import Areachart from '../components/charts/area';
import ImageList from '@mui/material/ImageList';

const Home = () => {
  return (
    <Dashboard>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={8}>
          <Areachart />
          <Areachart />
        </Grid>
        <Grid item xs={12} md={4}>
          <Piechart />
          <Piechart />
        </Grid>
      </Grid>
    </Dashboard>
  );
};
export default Home;
