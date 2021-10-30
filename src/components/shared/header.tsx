import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Header({ children }: Props) {
  return (
    <>
      <h1>{children}</h1>
      <h3>Landing Page</h3>
    </>
  );
}

export default Header;
