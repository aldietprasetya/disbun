import React from 'react';

const TextInput = ({ label, placeholder, marginTop, subLabel }) => {
  return (
    <div className={`w-full`}>
      {label && <div className="text-sm">{label}</div>}
      {subLabel && <div className="text-sm mt-[2px]">{subLabel}</div>}
      <input
        className={`border w-full py-2 px-3 rounded-md focus:outline-none ${
          marginTop ? marginTop : 'mt-[8px]'
        } placeholder:text-sm`}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
