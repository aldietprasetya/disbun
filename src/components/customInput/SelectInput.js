import React from 'react';

const SelectInput = ({ label, placeholder }) => {
  return (
    <div className="w-full">
      {label && <div className="text-sm">{label}</div>}
      <select className="invalid:text-gray-400  border w-full py-2 px-3 mt-[8px] rounded-md focus:outline-none">
        <option value="">{placeholder}</option>
        <option>dia</option>
        <option>kamu</option>
        <option>mereka</option>
      </select>
    </div>
  );
};

export default SelectInput;
