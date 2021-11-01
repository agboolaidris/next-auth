import React, { ReactNode } from 'react';
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
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{ color: theme.palette.grey.A100 }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.name}
          sx={{ color: theme.palette.grey.A100 }}
        />
        {open ? (
          <ExpandLess sx={{ color: theme.palette.grey.A100 }} />
        ) : (
          <ExpandMore sx={{ color: theme.palette.grey.A100 }} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children.length &&
            item.children.map((item, i) => (
              <ListItemButton sx={{ pl: 4 }} key={i}>
                <ListItemIcon sx={{ color: theme.palette.grey.A100 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ color: theme.palette.grey.A100 }}
                />
              </ListItemButton>
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
            <ListItemButton sx={{ color: theme.palette.grey.A100 }} key={i}>
              <ListItemIcon sx={{ color: theme.palette.grey.A100 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          );
        } else {
          return <SubMenu item={item} key={i} />;
        }
      })}
    </List>
  );
}

export default MenuList;
