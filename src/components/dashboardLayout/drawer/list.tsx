import React, { ReactNode } from 'react';
import Link from 'next/link';
import List from '@mui/material/List';
import { useTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

interface itemProps {
  name: string;
  icon: ReactNode;
  path?: string;
  children?: { name: string; icon: ReactNode; path: string }[];
}

interface Props {
  items: itemProps[];
}

const SubMenu = ({ item }: { item: itemProps }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{ color: theme.palette.primary.contrastText }}
      >
        <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.name} sx={{ color: 'inherit' }} />
        {open ? (
          <ExpandLess sx={{ color: 'inherit' }} />
        ) : (
          <ExpandMore sx={{ color: 'inherit' }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ color: theme.palette.primary.contrastText }}
        >
          {item.children.length &&
            item.children.map((item, i) => (
              <Link href={item.path} passHref key={i}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon sx={{ color: 'inherit' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} sx={{ color: 'inherit' }} />
                </ListItemButton>
              </Link>
            ))}
        </List>
      </Collapse>
    </>
  );
};

function MenuList({ items }: Props) {
  const theme = useTheme();
  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<Divider sx={{ marginBottom: '20px' }} />}
    >
      {items.map((item, i) => {
        if (!item.children) {
          return (
            <Link href={item.path} passHref key={i}>
              <ListItemButton
                sx={{ color: theme.palette.primary.contrastText }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          );
        } else {
          return <SubMenu item={item} key={i} />;
        }
      })}
    </List>
  );
}

export default MenuList;
