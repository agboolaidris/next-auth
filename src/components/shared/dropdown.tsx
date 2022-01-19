import React, { ReactNode, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';

import Box from '@mui/material/Box';

interface Props {
  handleMobileMenuClose?: () => void;
  close: boolean;
  children: ReactNode;
  menuTitle: ReactNode;
  tooltip?: string;
  pointer?: boolean;
}

function DropDownMenu({
  handleMobileMenuClose,
  close,
  children,
  menuTitle,
  tooltip,
  pointer,
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    if (handleMobileMenuClose) {
      handleMobileMenuClose();
    }
  };

  useEffect(() => {
    handleMenuClose();
  }, [close]);

  return (
    <>
      <Tooltip title={tooltip}>
        <Box
          sx={{ display: 'flex', alignItems: 'center' }}
          onClick={handleProfileMenuOpen}
        >
          {menuTitle}
        </Box>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        keepMounted
        PaperProps={{
          elevation: 0,
          sx: pointer && {
            overflow: 'visible',
            left: '0px',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {children}
      </Menu>
    </>
  );
}

export default DropDownMenu;
