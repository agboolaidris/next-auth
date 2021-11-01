import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';

export const drawerItem = [
  {
    name: 'Dashboard',
    icon: <InboxIcon />,
    path: '/',
  },
  {
    name: 'Table',
    icon: <DraftsIcon />,
    path: '/',
    children: [
      {
        name: 'Dashboard',
        icon: <InboxIcon />,
        path: '/',
      },
      {
        name: 'Dashboard',
        icon: <SendIcon />,
        path: '/',
      },
    ],
  },
  {
    name: 'Chart',
    icon: <InboxIcon />,
    path: '/',
  },
  {
    name: 'Users',
    icon: <DraftsIcon />,
    path: '/',
    children: [
      {
        name: 'Dashboard',
        icon: <InboxIcon />,
        path: '/',
      },
      {
        name: 'Dashboard',
        icon: <SendIcon />,
        path: '/',
      },
    ],
  },
];
