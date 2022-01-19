import React, { forwardRef, useRef, useState, useEffect } from 'react';
import Dashboard from '../../layout/dashboard';
import AdvancedTable from '../../components/tables/advancedTable';
import { Column } from 'react-table';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DropDownMenu from '../../components/shared/dropdown';
import { MenuItem } from '@mui/material';
import axios from 'axios';

function Index() {
  const [data, setData] = useState([]);
  const IndeterminateCheckbox = forwardRef<HTMLInputElement>(
    ({ indeterminate, ...rest }: any, ref) => {
      const defaultRef = useRef();
      const resolvedRef = ref || defaultRef;

      useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      );
    }
  );
  IndeterminateCheckbox.displayName = 'Paragraph';
  const columns: Column[] = [
    {
      Header: ({ getToggleAllPageRowsSelectedProps }) => (
        <div>
          <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
        </div>
      ),
      accessor: ' ',
      disableSortBy: true,
      disableFilters: true,
      Cell: ({ row }) => (
        <div>
          <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
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

  useEffect(() => {
    axios
      .get('/user.json')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Dashboard>
      <AdvancedTable columns={columns} data={data} />
    </Dashboard>
  );
}

export default Index;
