import Dashboard from '../layout/dashboard';
import Grid from '@mui/material/Grid';
import { PieChart } from '../components/charts/pie';
import { VerticalBarChart } from '../components/charts/bar';
import BasicCard from '../components/cards/basicCard';
import ListCard from '../components/cards/listCard';
import { Stack } from '@mui/material';
import BasicTable from '../components/tables/basicTable';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GitHubIcon from '@mui/icons-material/GitHub';

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
          <BasicCard
            title="Total users"
            description="number of all client registered with us"
            count={1200}
            icon={<GroupAddIcon />}
            type="warning"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasicCard
            title="Total contributor"
            description="number of all the contributor to this project"
            count={76}
            icon={<GitHubIcon />}
            type="success"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasicCard
            type="primary"
            title="Total sponsors"
            description="number of all sponsor of this project"
            count={15}
            icon={<GroupAddIcon />}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasicCard
            title="Total technologies"
            description="number of all technologies used in building this project"
            count={145}
            icon={<GroupAddIcon />}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            <VerticalBarChart />
            <BasicTable />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <PieChart />
            <ListCard />
          </Stack>
        </Grid>
      </Grid>
    </Dashboard>
  );
};
export default Home;
