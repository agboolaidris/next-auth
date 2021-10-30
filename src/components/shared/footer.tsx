import React from 'react';
import Link from 'next/link';

interface Props {
  value: number;
}

function Footer({ value }: Props) {
  return (
    <div>
      {value} {value < 2 ? 'todo' : 'todos'}
      <Link href="/about"> About Page</Link>
    </div>
  );
}

export default Footer;
