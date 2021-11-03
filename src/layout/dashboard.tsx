import React, { ReactNode, useState } from 'react';
import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AppBar from '../components/dashboardLayout/appBar';
import Drawer from '../components/dashboardLayout/drawer';

interface Props {
  children: ReactNode;
}

function Dashboard({ children }: Props) {
  const [openDrawer, setopenDrawer] = useState(true);
  const theme = useTheme();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        background: theme.palette.grey.A100,
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Drawer
        open={openDrawer}
        handleOpenDrawer={() => setopenDrawer(!openDrawer)}
      />
      <Box sx={{ width: '100%', overflow: 'hidden', height: '100vh' }}>
        <AppBar handleOpenDrawer={() => setopenDrawer(!openDrawer)} />
        <Box sx={{ overflow: 'auto', height: '100%' }}>
          <Container sx={{ paddingBottom: '100px', paddingTop: 3 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
