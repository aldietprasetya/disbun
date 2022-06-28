import React from 'react';
import InputFileButton from 'src/components/customInput/InputFileButton';

const CustomFileButton = ({ title, format }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div>
        <div className="mb-1 text-xs font-medium">{title}</div>
        <div className="text-[11px] text-[#B3B3B3]">
          Format gambar: {format}
        </div>
      </div>
      <InputFileButton />
    </div>
  );
};

export default CustomFileButton;
