import React from 'react';
import { Box, Theme, IconButton, Toolbar, Stack } from '@mui/material';
import Image from 'next/image';

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
  width: 300px;
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

  ${({ theme }) => theme.breakpoints.down('md')} {
    position: fixed;
    z-index: 11;
    transform: translate(-100%);
    width: 240px;
    ${({ open }) =>
      !open &&
      css`
        transform: translate(0%);
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
            justifyContent="space-between"
            sx={{
              color: theme.palette.primary.contrastText,
              width: '100%',
            }}
          >
            <Image alt="Idris Agboola" src="/zeit.svg" width={85} height={25} />

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                display: { sm: 'block', md: 'none' },
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
