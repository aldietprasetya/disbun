import React from 'react';
import CustomFileButton from './CustomFileButton';

const OptionCleanWater = () => {
  return (
    <>
      <div className="my-7 w-full">
        <CustomFileButton
          title="Gambar skema jaringan air bersih di dalam DTW"
          format=".jpg .jpeg .png. "
        />
      </div>
    </>
  );
};

export default OptionCleanWater;
