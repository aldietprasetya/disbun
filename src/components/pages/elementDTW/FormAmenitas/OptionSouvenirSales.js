import React from 'react';
import CustomFileButton from './CustomFileButton';

const OptionSouvenirSales = () => {
  return (
    <>
      <div className="my-4 w-full">
        <CustomFileButton
          title="Foto kondisi fasilitas penjualan cendera mata"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-4 w-full">
        <CustomFileButton
          title="Foto barang cendera mata yang dijual"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-7 w-full">
        <CustomFileButton
          title="Foto kemasan barang cendera mata"
          format=".jpg .jpeg .png. "
        />
      </div>
    </>
  );
};

export default OptionSouvenirSales;
