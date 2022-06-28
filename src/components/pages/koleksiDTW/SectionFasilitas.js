import React from 'react';
import SelectInput from '../../customInput/SelectInput';
import TextInput from '../../customInput/TextInput';
import ButtonContained from '../../button/ButtonContained';

const SectionFasilitas = () => {
  return (
    <div className="bg-white mt-3 p-7 rounded-md shadow-md">
      <div className="w-[66%] flex gap-[3.5%]">
        <SelectInput placeholder="Tempat Cuci Tangan" label="Fasilitas" />
        <TextInput
          placeholder="Ex. Ada, dalam area wisata"
          label="Ketersediaan"
        />
      </div>
      <div className="flex justify-end mt-7">
        <div className="flex gap-3">
          <ButtonContained color="secondary">Batal</ButtonContained>
          <ButtonContained color="primary">Simpan Perubahan</ButtonContained>
        </div>
      </div>
    </div>
  );
};

export default SectionFasilitas;
