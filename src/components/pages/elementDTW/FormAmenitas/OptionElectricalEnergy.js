import React from 'react';
import TextField from 'src/components/customInput/TextField';
import CustomFileButton from './CustomFileButton';

const OptionElectricalEnergy = () => {
  return (
    <>
      <div className="mb-4 w-full">
        <div className="mb-2 text-xs font-medium">
          Data sumber energi listrik
        </div>
        <textarea
          rows={6}
          name="nib"
          type="text"
          placeholder="Tulis data sumber energi listrik di area DTW"
          className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
        />
      </div>
      <div className="mb-4 flex w-full gap-3">
        <div className="w-full">
          <div className="mb-2 text-xs font-medium">
            Kapasitas listrik berdasarkan jenisnya
          </div>
          <TextField
            name="wisatawanMancanegara"
            placeholder="Tulis Kapasitas Listrik"
          />
        </div>
      </div>
      <div className="my-7 w-full">
        <CustomFileButton
          title="Gambar skema jaringan listrik di dalam DTW"
          format=".jpg .jpeg .png. "
        />
      </div>
    </>
  );
};

export default OptionElectricalEnergy;
