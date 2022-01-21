import React, { forwardRef, useState, useEffect } from 'react';
import Dashboard from '../../layout/dashboard';
import AdvancedTable from '../../components/tables/dragTable';
import { Column } from 'react-table';
import IconButton from '@mui/material/IconButton';
import { Stack, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
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
      width: 40,
      Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
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
      disableResizing: true,
      Cell: ({ cell }) => {
        return (
          <>
            <Stack direction="row" spacing={1}>
              <Tooltip title="edit">
                <IconButton aria-label="delete">
                  <ModeEditOutlineIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="delete">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </>
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
      .catch(() => {
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
