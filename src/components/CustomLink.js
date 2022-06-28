import React from 'react';
import Link from 'next/link';

const CustomLink = ({ children, href }) => {
  return (
    <div>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </div>
  );
};

export default CustomLink;
