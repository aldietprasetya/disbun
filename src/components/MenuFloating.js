import React from 'react';

const MenuFloating = ({ isOpen, children }) => {
  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } absolute right-10 z-[1] w-36 flex-col items-center rounded bg-white py-1 shadow-lg`}
    >
      {children}
    </div>
  );
};

export default MenuFloating;
