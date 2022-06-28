import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const InputFileButton = ({ acceptFileType, handleImage, maxFiles = 1 }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: maxFiles,
    accept: acceptFileType,
    onDrop: (acceptedFiles) => {
      handleImage(acceptedFiles);
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="flex w-fit items-end gap-2 rounded-md border border-primary-green px-2 pt-1 pb-2 text-primary-green">
        <img src="/icon/upload-green.svg" className="w-5" />
        <div className="text-xs font-medium">Unggah</div>
      </div>
    </div>
  );
};

export default InputFileButton;
