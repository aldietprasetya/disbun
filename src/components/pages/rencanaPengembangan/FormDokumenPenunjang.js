import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FormDokumenPenunjang = () => {
  const onDrop = useCallback((acceptedFiles) => {}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <>
      <div className="py-5">
        <div className="font-light text-[#3267E3]">
          Upload Dokumen Penunjang
        </div>
        <div className="mt-4">
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">NIB</div>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="flex h-44 w-full flex-col items-center justify-center rounded-md border  border-dashed px-2 pt-1 pb-2 text-[#B3B3B3]">
                <img src="/icon/document-upload.svg" className="w-8" />
                <div className="mt-3">
                  Format dokumen : .jpg .jpeg .png .pdf.
                </div>
                <div className="">
                  Pilih dokumen atau tarik dan letakkan 1 atau lebih sekaligus
                  di sini.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7 flex w-full justify-end">
        <button className="rounded-md bg-primary-green py-3 px-5 text-white">
          Simpan dan Lanjutkan
        </button>
      </div>
    </>
  );
};

export default FormDokumenPenunjang;
