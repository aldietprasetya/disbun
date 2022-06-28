import React from 'react';
import CustomFileButton from './CustomFileButton';

const OptionSecurityAndSafety = () => {
  return (
    <>
      <div className="my-4 w-full">
        <CustomFileButton
          title="Foto fasilitas mitigasi bencana"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-4 w-full">
        <CustomFileButton
          title="Foto pelatihan simulasi nencana"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-7 w-full">
        <CustomFileButton
          title="Foto peta jalur evakuasi"
          format=".jpg .jpeg .png. "
        />
      </div>
    </>
  );
};

export default OptionSecurityAndSafety;
