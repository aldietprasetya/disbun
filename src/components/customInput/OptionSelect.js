import React from 'react';

const OptionSelect = ({ onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
    >
      {children}
    </div>
  );
};

export default OptionSelect;
