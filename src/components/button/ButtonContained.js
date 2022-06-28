import React from 'react';

const ButtonContained = ({ children, onClick, variant, color }) => {
  return (
    <button
      className={`border w-52 h-10 text-white rounded-md ${
        color === 'primary'
          ? 'bg-[#048577]'
          : color === 'secondary'
          ? 'bg-[#EB5757]'
          : 'inherit'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonContained;
