import React from 'react';
import { Icon } from '@iconify/react';

const FileUploadedCard = ({ fileName, handleRemove }) => {
  return (
    <div className="mb-2 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/icon/images.svg" className="w-5" />
        <div className="text-xs">{fileName}</div>
      </div>
      <Icon
        onClick={handleRemove}
        icon="ep:circle-close-filled"
        className="cursor-pointer text-[#9E9E9E]"
      />
    </div>
  );
};

export default FileUploadedCard;
