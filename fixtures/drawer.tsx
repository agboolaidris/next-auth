import DashboardIcon from '@mui/icons-material/Dashboard';
import AddchartIcon from '@mui/icons-material/Addchart';
import BarChartIcon from '@mui/icons-material/BarChart';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';

export const drawerItem = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/',
  },
  {
    name: 'Chart',
    icon: <AddchartIcon />,
    children: [
      {
        name: 'Basic',
        icon: <BarChartIcon />,
        path: '/chart/basic',
      },
      {
        name: 'Advanced',
        icon: <WaterfallChartIcon />,
        path: '/',
      },
    ],
  },
];
