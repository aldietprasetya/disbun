import React from 'react';

const TextArea = ({ rows, placeholder, label, subLabel }) => {
  return (
    <div className="w-full">
      {label && <div className="text-sm">{label}</div>}
      {subLabel && <div className="text-sm mt-[2px]">{subLabel}</div>}
      <textarea
        className="border w-full py-2 px-3 rounded-md focus:outline-none mt-[8px] placeholder:text-sm"
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
};

export default TextArea;
