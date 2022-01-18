import React from 'react';
import { useTable, Column } from 'react-table';
import styled from '@emotion/styled';

export type StatementData = {
  col1: string;
  col2: string;
};

const TableContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export default function AdvancedTable() {
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ data, columns });

  return (
    <TableContainer {...getTableProps()}>
      <thead>
        {headerGroups.map(({ getHeaderGroupProps, headers }, index) => (
          <tr {...getHeaderGroupProps()} key={index}>
            {headers.map(({ getHeaderProps, render }, i) => (
              <th key={i} {...getHeaderProps()}>
                {render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={i}>
              {row.cells.map((cell, i) => {
                return (
                  <td key={i} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
}
