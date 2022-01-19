import React, { useMemo } from 'react';
import {
  useTable,
  Column,
  useSortBy,
  usePagination,
  useRowSelect,
  useGlobalFilter,
} from 'react-table';
import styled from '@emotion/styled';
import {
  alpha,
  Theme,
  Pagination,
  Box,
  Select,
  MenuItem,
  Skeleton,
  Stack,
} from '@mui/material';
import Search from '../dashboardLayout/appBar/search';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface Props {
  columns: Column[];
  data: object[];
  loading: boolean;
}
const Button = styled.button<{ theme?: Theme }>`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 0;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  outline: none;
  height: 25px;
  min-width: 80px;
  cursor: pointer;
  svg {
    width: 18px;
  }
`;
const TableContainer = styled.div<{ theme?: Theme }>`
  width: 100%;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  overflow: auto;
  background-color: ${({ theme }) => theme.palette.common.white};
`;

const Table = styled.table`
  min-width: 100%;
  overflow: auto;
  border-collapse: collapse;
`;

const TableHead = styled.thead<{ theme?: Theme }>``;
const TableData = styled.td<{ theme?: Theme }>`
  padding: 20px 20px 20px 10px;
`;
const TableRow = styled.tr<{ theme?: Theme }>`
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[400]};
  ${TableData} {
    &:first-child {
      ${Button} {
        min-width: 30px;
      }
    }
  }
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

export default function AdvancedTable({ data, columns, loading }: Props) {
  const tableData = useMemo(() => data, [data]);

  const tableColumns = useMemo(() => columns, [columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageOptions,
    gotoPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    { data: tableData, columns: tableColumns, initialState: { pageIndex: 2 } },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
  );

  return (
    <TableContainer>
      {loading ? (
        <Skeleton variant="rectangular" width="100%" height="90vh">
          <Box sx={{ width: '1200px' }}></Box>
        </Skeleton>
      ) : (
        <>
          <Box sx={{ padding: '10px', display: 'flex', width: '100%' }}>
            <Select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
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

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ width: '300px' }}>
              <Search onChange={(value) => setGlobalFilter(value)} />
            </Box>
          </Box>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map(({ getHeaderGroupProps, headers }, index) => (
                <TableRow {...getHeaderGroupProps()} key={index}>
                  {headers.map(
                    (
                      {
                        getHeaderProps,
                        render,
                        getSortByToggleProps,
                        isSorted,
                        isSortedDesc,
                      },
                      i
                    ) => (
                      <TableData
                        key={i}
                        {...getHeaderProps(getSortByToggleProps())}
                      >
                        <Button>
                          {render('Header')}
                          {
                            <span>
                              {isSorted ? (
                                isSortedDesc ? (
                                  <ArrowDownwardIcon />
                                ) : (
                                  <ArrowUpwardIcon />
                                )
                              ) : (
                                ''
                              )}
                            </span>
                          }
                        </Button>
                      </TableData>
                    )
                  )}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {page.map((row, i) => {
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
          <Box
            sx={{
              margin: '20px auto',
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
        </>
      )}
    </TableContainer>
  );
}
