import React from 'react';
import CustomFileButton from './CustomFileButton';

const OptionPusatInformasiPariwisata = () => {
  return (
    <>
      <div className="my-4 w-full">
        <CustomFileButton
          title="Foto ruang di dalam pusat informasi pariwisata"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-4 w-full">
        <CustomFileButton
          title="Foto fasilitas di pusat informasi pariwisata"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-7 w-full">
        <CustomFileButton
          title="Data fasilitas di pusat informasi pariwisata"
          format=".jpg .jpeg .png. "
        />
      </div>
    </>
  );
};

export default OptionPusatInformasiPariwisata;
