import React from 'react';

function LoginTitle({ title = '', subTitle = '' }) {
  return (
    <div className="mt-10 border-b py-4 tall:mt-6">
      <div className="text-3xl font-bold text-primary-black-2">{title}</div>
      <div className="mt-3 text-xl italic text-primary-gray-1">{subTitle}</div>
    </div>
  );
}

export default LoginTitle;
