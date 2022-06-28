import React from 'react';
import TextInput from '../../customInput/TextInput';
import SelectInput from '../../customInput/SelectInput';
import ButtonContained from '../../button/ButtonContained';
import TextArea from '../../customInput/TextArea';

const SectionAmenitas = () => {
  return (
    <div className="bg-white mt-3 p-7 rounded-md shadow-md">
      <div className="">
        <div className="flex gap-[2%]">
          <SelectInput placeholder="Toilet" label="Amenitas" />
          <TextInput
            label="Ketersediaan"
            placeholder="Ex: Ada, 3 tempat ibadah"
          />
          <TextInput label="Petunjuk Jalan" placeholder="Ex: Warung Makan" />
        </div>
      </div>
      <div className="mt-8">
        <div className="w-[66%] flex gap-[3.5%]">
          <TextInput
            label="Kondisi"
            placeholder="Ex. Kurang baik, butuh perawatan"
          />
          <TextInput label="Jumlah/Kapasitas" placeholder="Ex. 25 Kamar" />
        </div>
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

export default SectionAmenitas;
