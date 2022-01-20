import React from 'react';
import styled from '@emotion/styled';
import {
  useTable,
  useBlockLayout,
  useResizeColumns,
  usePagination,
  useSortBy,
} from 'react-table';
import { Theme, Box, Pagination } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const TableContainer = styled.div<{ theme?: Theme }>`
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  overflow: auto;
  background-color: ${({ theme }) => theme.palette.common.white};
`;
const TableData = styled.div<{ theme?: Theme }>`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
  p {
    display: flex;
    justify-content: center;

    svg {
      font-size: 17px;
    }
  }
`;

const TableHead = styled.div<{ theme?: Theme }>`
  height: 50px;
  ${TableData} {
    background-color: ${({ theme }) => theme.palette.grey[500]};
    color: ${({ theme }) => theme.palette.common.white};
  }

  .resizer {
    display: inline-block;
    background: ${({ theme }) => theme.palette.grey[400]};
    width: 4px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(50%);
    z-index: 1;
    ${'' /* prevents from scrolling while dragging on touch devices */}
    touch-action:none;

    &.isResizing {
      background: red;
    }
  }
`;

const TableRow = styled.div<{ theme?: Theme }>`
  border-bottom: 2px solid ${({ theme }) => theme.palette.grey[400]};
  border-left: 2px solid ${({ theme }) => theme.palette.grey[400]};
  border-right: 2px solid ${({ theme }) => theme.palette.grey[400]};
  ${TableData} {
    border-right: 2px solid ${({ theme }) => theme.palette.grey[400]};
    height: 50px;

    &:last-child {
      border-right: none;
    }
  }
`;

const TableBody = styled.tbody<{ theme?: Theme }>`
  position: relative;
  ${TableRow} {
    &:nth-child(odd) {
      ${TableData} {
        background-color: ${({ theme }) => theme.palette.common.white};
      }
    }

    &:nth-child(even) {
      ${TableData} {
        background-color: ${({ theme }) => theme.palette.grey[100]};
      }
    }
  }
`;

const Table = styled.div`
  min-width: 100%;
  position: relative;
`;

export default function DragTable({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    resetResizing,
    gotoPage,
    pageOptions,
    state: { pageIndex },
    page,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useBlockLayout,
    useResizeColumns,
    useSortBy,
    usePagination
  );

  return (
    <TableContainer>
      {/* <button onClick={resetResizing}>Reset Resizing</button> */}
      <Table {...getTableProps()}>
        {headerGroups.map((headerGroup, i) => (
          <TableHead {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map(
              (
                {
                  getHeaderProps,
                  getResizerProps,
                  isResizing,
                  render,
                  canResize,
                  isSortedDesc,
                  isSorted,
                  getSortByToggleProps,
                },
                i
              ) => (
                <TableData {...getHeaderProps(getSortByToggleProps())} key={i}>
                  <p>
                    {render('Header')}
                    <>
                      {isSorted ? (
                        isSortedDesc ? (
                          <ArrowDownwardIcon />
                        ) : (
                          <ArrowUpwardIcon />
                        )
                      ) : (
                        <ArrowDownwardIcon />
                      )}
                    </>
                  </p>
                  {/* Use column.getResizerProps to hook up the events correctly */}

                  {canResize && (
                    <div
                      {...getResizerProps()}
                      className={`resizer ${isResizing ? 'isResizing' : ''}`}
                    />
                  )}
                </TableData>
              )
            )}
          </TableHead>
        ))}

        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} key={i}>
                {row.cells.map((cell, i) => {
                  return (
                    <TableData {...cell.getCellProps()} key={i}>
                      <p> {cell.render('Cell')}</p>
                    </TableData>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
        <Box
          sx={{
            margin: '30px auto 20px',
            width: 'fit-content',
            textAlign: 'center',
          }}
        >
          <Pagination
            count={pageOptions.length == 1 ? 0 : pageOptions.length}
            variant="outlined"
            color="primary"
            onChange={(e, value) => gotoPage(value)}
          />
          <span style={{ marginTop: '20px', display: 'inline-block' }}>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
        </Box>

        {/* <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre> */}
      </Table>
    </TableContainer>
  );
}
