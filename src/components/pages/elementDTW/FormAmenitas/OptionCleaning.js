import React from 'react';
import CustomFileButton from './CustomFileButton';

const OptionCleaning = () => {
  return (
    <>
      <div className="my-4 w-full">
        <CustomFileButton
          title="Foto tempat sampah"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-4 w-full">
        <CustomFileButton
          title="Foto tempat pengelolaan sampah"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-7 w-full">
        <CustomFileButton
          title="Gambar skema pengelolaan sampah"
          format=".jpg .jpeg .png. "
        />
      </div>
    </>
  );
};

export default OptionCleaning;
