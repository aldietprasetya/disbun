import React from 'react';
import CustomFileButton from './CustomFileButton';

const OptionFasilitasInformasiPariwisata = () => {
  return (
    <>
      <div className="my-4 w-full">
        <CustomFileButton
          title="Foto papan petunjuk arah yang sudah terpasang"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-4 w-full">
        <CustomFileButton
          title="Foto papan informasi pariwisata yang sudah terpasang"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-4 w-full">
        <CustomFileButton
          title="Foto peta pariwisata yang sudah terpasang"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-4 w-full">
        <CustomFileButton
          title="Foto papan peringatan bahaya yang sudah terpasang"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-4 w-full">
        <CustomFileButton
          title="Foto papan imbauan yang sudah terpasang"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-7 w-full">
        <CustomFileButton
          title="Foto papan interpretasi yang sudah terpasang"
          format=".jpg .jpeg .png. "
        />
      </div>
    </>
  );
};

export default OptionFasilitasInformasiPariwisata;
