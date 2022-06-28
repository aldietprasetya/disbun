import React from 'react';
import CustomFileButton from './CustomFileButton';

const OptionCulinary = () => {
  return (
    <>
      <div className="my-4 w-full">
        <CustomFileButton
          title="Foto kondisi fasilitas makan dan minum"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-4 w-full">
        <CustomFileButton
          title="Foto menu fasilitas makan dan minum"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-7 w-full">
        <CustomFileButton
          title="Sertifikat laik hygiene sanitasi pangan"
          format=".jpg .jpeg .png. "
        />
      </div>
    </>
  );
};

export default OptionCulinary;
