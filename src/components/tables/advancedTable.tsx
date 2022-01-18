import React, { useEffect, forwardRef, useRef, useState } from 'react';
import {
  useTable,
  Column,
  useSortBy,
  usePagination,
  useRowSelect,
} from 'react-table';
import styled from '@emotion/styled';
import { alpha, Theme, Pagination, Box, Select, MenuItem } from '@mui/material';

export type StatementData = {
  col1: string;
  col2: string;
};

const TableContainer = styled.div<{ theme?: Theme }>`
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  overflow: auto;
  background-color: ${({ theme }) => theme.palette.common.white};
`;

const Table = styled.table`
  width: max-content;
  border-collapse: collapse;
`;

const TableHead = styled.thead<{ theme?: Theme }>``;

const TableRow = styled.tr<{ theme?: Theme }>`
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[400]};
`;
const TableData = styled.td<{ theme?: Theme }>`
  padding: 20px 20px 20px 10px;
`;

const TableBody = styled.tbody<{ theme?: Theme }>`
  ${TableData} {
    padding: 10px;
  }
  ${TableRow} {
    &:nth-child(even) {
      background-color: ${({ theme }) =>
        alpha(theme.palette.grey['A100'], 0.8)};
    }
    &:hover {
      background-color: ${({ theme }) => alpha(theme.palette.grey['300'], 0.8)};
    }
  }
`;

export default function AdvancedTable() {
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

  const [entry, setEntry] = useState(200);

  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () =>
      [
        {
          Header: 'Column 1',
          accessor: 'col1', // accessor is the "key" in the data
        },
        {
          Header: 'Column 2',
          accessor: 'col2',
        },
        {
          Header: 'Column 1',
          accessor: 'col3', // accessor is the "key" in the data
        },
        {
          Header: 'Column 2',
          accessor: 'col4',
        },
        {
          Header: 'Column 1',
          accessor: 'col5', // accessor is the "key" in the data
        },
        {
          Header: 'Column 2',
          accessor: 'col6',
        },
        {
          Header: 'Column 1',
          accessor: 'col7', // accessor is the "key" in the data
        },
        {
          Header: 'Column 2',
          accessor: 'col8',
        },
        {
          Header: 'Column 1',
          accessor: 'col9', // accessor is the "key" in the data
        },
        {
          Header: 'Column 2',
          accessor: 'col10',
        },
      ] as Column<StatementData>[],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    { data, columns },
    useSortBy,
    usePagination,
    useRowSelect,

    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
        {
          id: 'action',
          Header: () => <span>Action</span>,
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
      ]);
    }
  );

  return (
    <TableContainer>
      <Box sx={{ padding: '10px' }}>
        <Box>
          
          <Select
            value={entry}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setEntry(Number(e.target.value));
            }}
            sx={{ height: '40px' }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {[10, 20, 30, 40, 50, 200].map((pageSize) => (
              <MenuItem key={pageSize} value={pageSize}>
                Show {pageSize} Entries
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map(({ getHeaderGroupProps, headers }, index) => (
            <TableRow {...getHeaderGroupProps()} key={index}>
              {headers.map(
                ({ getHeaderProps, render, getSortByToggleProps }, i) => (
                  <TableData
                    key={i}
                    {...getHeaderProps(getSortByToggleProps())}
                  >
                    {render('Header')}
                  </TableData>
                )
              )}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} key={i}>
                {row.cells.map((cell, i) => {
                  return (
                    <TableData key={i} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableData>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Box sx={{ margin: '20px auto', width: 'fit-content' }}>
        <Pagination
          count={10}
          variant="outlined"
          color="primary"
          onChange={(e, value) => gotoPage(value)}
        />
      </Box>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <pre>
          <code>
            {JSON.stringify(
              {
                selectedRowIds: selectedRowIds,
                'selectedFlatRows[].original': selectedFlatRows.map(
                  (d) => d.original
                ),
              },
              null,
              2
            )}
          </code>
        </pre>
      </div>
    </TableContainer>
  );
}
