import React from 'react';

const RadioButtonCustom = ({
  value,
  checked,
  onChange,
  id,
  label,
  type = 'basic',
}) => {
  if (type === 'basic') {
    return (
      <input
        type="radio"
        value={value}
        className="focus:outline-none"
        checked={checked}
        onChange={onChange}
      />
    );
  }
  return (
    <>
      <input
        id={id}
        type="radio"
        value={value}
        className="hidden focus:outline-none"
        checked={checked}
        onChange={onChange}
      />
      <label
        className="flex h-14 w-14 items-center justify-center rounded-full border text-[#9E9E9E]"
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
};

export default RadioButtonCustom;
