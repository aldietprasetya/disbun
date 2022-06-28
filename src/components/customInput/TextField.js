import React from 'react';

const TextField = ({ name, type = 'text', placeholder, value, onChange }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
      value={value}
      onChange={onChange}
    />
  );
};

export default TextField;
