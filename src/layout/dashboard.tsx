import React, { ReactNode, useState } from 'react';
import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '../components/dashboardLayout/appBar';
import Drawer from '../components/dashboardLayout/drawer';

interface Props {
  children: ReactNode;
}

function Dashboard({ children }: Props) {
  const [openDrawer, setopenDrawer] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', background: theme.palette.grey.A100 }}
    >
      <Drawer
        open={openDrawer}
        handleOpenDrawer={() => setopenDrawer(!openDrawer)}
      />
      <Box
        sx={{
          width: !openDrawer
            ? '100%'
            : !matches
            ? '100%'
            : 'calc(100% - 240px)',
          overflow: 'hidden',
          marginLeft: !openDrawer ? '0' : !matches ? '0' : '240px',
          height: '100vh',
        }}
      >
        <AppBar handleOpenDrawer={() => setopenDrawer(!openDrawer)} />
        <Box sx={{ paddingY: 3, overflow: 'auto', height: '100%' }}>
          <Container>{children}</Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
