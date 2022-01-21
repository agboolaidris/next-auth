import React from 'react';
import { alpha, Theme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

const SearchWrapper = styled.div<{ theme?: Theme }>`
  position: relative;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  background-color: ${({ theme }) => theme.palette.grey[300]};
  width: '100%';
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  svg {
    color: ${({ theme }) => alpha(theme.palette.grey[400], 0.9)};
  }
  &:hover {
    background-color: ${({ theme }) => alpha(theme.palette.grey[400], 0.7)};
  }
`;

const StyledInputBase = styled.input<{ theme?: Theme }>`
  color: inherit;
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;
interface Props {
  onChange?: (string: string) => void;
}
function Search({ onChange }: Props) {
  return (
    <SearchWrapper>
      <SearchIcon />

      <StyledInputBase
        placeholder="Search…"
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </SearchWrapper>
  );
}

export default Search;
