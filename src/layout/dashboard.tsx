import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import Toobar from '../components/dashboardLayout/toolbar';
interface StyleProps {
  primary?: string;
  theme: Theme;
}

const Wrapper = styled(Box)<StyleProps>`
  background: ${({ theme }) => theme.palette.primary.main};
  padding: 20px;
`;

interface Props {
  children: ReactNode;
}

function Dashboard({ children }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toobar />
      <Grid container sx={{ pb: '50px' }}>
        <Grid item lg={4}>
          HHHHH
        </Grid>
        <Grid item lg={8}>
          XL
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
