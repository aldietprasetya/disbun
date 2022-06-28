import React from 'react';
import TextField from 'src/components/customInput/TextField';
import CustomFileButton from './CustomFileButton';

const OptionParkingLot = () => {
  return (
    <>
      <div className="mb-4 flex w-full gap-3">
        <div className="w-full">
          <div className="mb-2 text-xs font-medium">
            Kapasitas Parkir Kendaraan Roda 4
          </div>
          <TextField name="wisatawanMancanegara" placeholder="Masukan jumlah" />
        </div>
        <div className="w-full">
          <div className="mb-2 text-xs font-medium">
            Kapasitas Parkir Kendaraan Roda 2
          </div>
          <TextField name="wisatawanDomestik" placeholder="Masukan jumlah" />
        </div>
      </div>
      <div className="my-4 w-full">
        <CustomFileButton
          title="Foto Fasilitas Parkir"
          format=".jpg .jpeg .png. "
        />
      </div>
      <div className="mb-7 w-full">
        <div className="mb-2 text-xs font-medium">
          Data lokasi dan luas fasilitas parkir mobil, motor, bus
        </div>
        <textarea
          rows={6}
          name="nib"
          type="text"
          placeholder="Tulis data lokasi dan luas fasilitas parkir mobil, motor, bus di area DTW"
          className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
        />
      </div>
    </>
  );
};

export default OptionParkingLot;
