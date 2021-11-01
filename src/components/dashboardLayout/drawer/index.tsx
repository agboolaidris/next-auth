import React from 'react';
import { Box, Theme, IconButton, Avatar, Toolbar, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuList from './list';
import { drawerItem } from '../../../../fixtures/drawer';

interface Props {
  open: boolean;
  handleOpenDrawer: () => void;
}

interface StyledProps {
  theme?: Theme;
  open?: boolean;
}

const DrawerStyled = styled.div<StyledProps>`
  width: 240px;
  min-height: 100vh;
  transition: all 0.3s ease-in;
  background: ${({ theme }) => theme.palette.primary.main};
  transition: width 0.3s ease-in-out;
  overflow: hidden;
  ${({ open }) =>
    !open &&
    css`
      transform: translate(-100%);
      width: 0;
    `}

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: fixed;
    z-index: 11;
    transform: translate(-100%);
    ${({ open }) =>
      !open &&
      css`
        transform: translate(0%);
        width: 240px;
      `}
  }
`;

function Drawer({ open, handleOpenDrawer }: Props) {
  const theme = useTheme();

  return (
    <DrawerStyled open={open}>
      <Box>
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ color: theme.palette.grey.A100 }}
          >
            <Avatar
              alt="Idris Agboola"
              src="/react.png"
              sx={{ width: 40, height: 40, mr: 5 }}
            />
            <span>I_AM_IDRIS</span>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                display: { sm: 'block', md: 'none' },
                marginLeft: '5px',
              }}
              onClick={handleOpenDrawer}
            >
              <ArrowBackIcon />
            </IconButton>
          </Stack>
        </Toolbar>
        <MenuList items={drawerItem} />
      </Box>
    </DrawerStyled>
  );
}

export default Drawer;
