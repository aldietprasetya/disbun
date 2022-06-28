import React from 'react';
import CustomFileButton from './CustomFileButton';

const OptionWorkship = () => {
  return (
    <>
      <div className="my-4 w-full">
        <CustomFileButton
          title="Foto fasilitas ibadah"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-7 w-full">
        <div className="mb-2 text-xs font-medium">
          Data lokasi dan luas fasilitas ibadah
        </div>
        <textarea
          rows={6}
          name="nib"
          type="text"
          placeholder="Tulis data lokasi dan luas fasilitas ibadah di area DTW"
          className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
        />
      </div>
    </>
  );
};

export default OptionWorkship;
