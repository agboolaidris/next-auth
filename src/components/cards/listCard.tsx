import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItemAvatar, Card } from '@mui/material';

function ListCard() {
  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        //border: '1px solid red',
      }}
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader id="nested-list-subheader">
          Most Recent Users
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>AG</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Idris Agboola" secondary="Jan 9, 2014" />
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>AG</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Idris Agboola" secondary="Jan 9, 2014" />
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>AG</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Idris Agboola" secondary="Jan 9, 2014" />
      </ListItemButton>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>AG</Avatar>
        </ListItemAvatar>
        <ListItemText primary="Idris Agboola" secondary="Jan 9, 2014" />
      </ListItemButton>
    </List>
  );
}

export default ListCard;
