import React, { forwardRef, useState, useEffect } from 'react';
import Dashboard from '../../layout/dashboard';
import AdvancedTable from '../../components/tables/advancedTable';
import { Column } from 'react-table';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DropDownMenu from '../../components/shared/dropdown';
import { MenuItem } from '@mui/material';
import axios from 'axios';
import Checkbox from '../../components/tables/checkBox';
function Index() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns: Column[] = [
    {
      Header: ({ getToggleAllPageRowsSelectedProps }) => (
        <Checkbox {...getToggleAllPageRowsSelectedProps()} />
      ),
      accessor: 'check',
      disableSortBy: true,
      disableFilters: true,
      Cell: ({ row }) => (
        <div>
          <Checkbox {...row.getToggleRowSelectedProps()} />
        </div>
      ),
    },
    {
      Header: 'First Name',
      accessor: 'firstname',
    },
    {
      Header: 'Last Name',
      accessor: 'lastname', // accessor is the "key" in the data
    },
    {
      Header: 'Email',
      accessor: 'email', // accessor is the "key" in the data
    },
    {
      Header: 'Role',
      accessor: 'role', // accessor is the "key" in the data
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
      Header: 'Country',
      accessor: 'country',
    },

    {
      Header: 'Action',
      accessor: '',
      disableSortBy: true,
      disableFilters: true,
      Cell: ({ cell }) => {
        const [close, setClose] = useState(false);
        return (
          <DropDownMenu
            tooltip="more details"
            menuTitle={
              <IconButton
                aria-label="more"
                id="long-button"
                aria-haspopup="true"
              >
                <MoreVertIcon />
              </IconButton>
            }
            close={close}
          >
            <MenuItem
              onClick={() => {
                setClose(!close);
                console.log(cell.row.values);
              }}
            >
              <DeleteForeverIcon /> Profile
            </MenuItem>
          </DropDownMenu>
        );
      },
    },
  ];

  const Search = forwardRef<HTMLInputElement>((props, ref) => {
    return <input ref={ref} type="search" />;
  });

  Search.displayName = 'app';

  useEffect(() => {
    axios
      .get('/user.json')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Dashboard>
      <AdvancedTable columns={columns} data={data} loading={loading} />
    </Dashboard>
  );
}

export default Index;
