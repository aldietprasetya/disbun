import React from 'react';
import TextInput from '../../customInput/TextInput';
import SelectInput from '../../customInput/SelectInput';
import ButtonContained from '../../button/ButtonContained';
import TextArea from '../../customInput/TextArea';

const SectionAksesibilitas = () => {
  return (
    <div className="bg-white mt-3 p-7 rounded-md shadow-md">
      <div className="flex gap-[2%] w-full">
        <TextArea
          placeholder="Ex: Ibukota Prov: 99 km (2 jam 40 menit); Kota Terdekat: Tasikmalaya, 37 km (1 jam); Keramaian Terdekat: Panjalu, area wisata"
          label="Jarak dan Waktu Tempuh"
          subLabel="(Pisahkan dengan ; semicolon)"
          rows={6}
        />
        <TextArea
          placeholder="Ex: Puncak baros (6 km); Curug Tujuh (10 km); Astana Gede Kawali (16 km)"
          label="Destinasi Terdekat"
          subLabel="(Pisahkan dengan ; semicolon)"
          rows={6}
        />
      </div>
      <div className="mt-8">
        <div className="flex gap-[2%]">
          <TextInput
            label="Transportasi Publik"
            placeholder="Ex: Ada, angkutan antar kota dan menuju BIJB"
          />
          <TextInput label="Status Jalan" placeholder="Ex: Jln. Provinsi" />
          <TextInput label="Lebar Jalan" placeholder="Ex: 6 Meter" />
        </div>
      </div>
      <div className="mt-8">
        <div className="flex gap-[2%]">
          <TextInput label="Tipe Pengerasan" placeholder="Ex: Aspal Hotmix" />
          <TextInput
            label="Kondisi Jalan"
            placeholder="Ex: Baik tidak berlubang"
          />
          <TextInput
            label="Petunjuk Jalan"
            placeholder="Ex: Ada beberapa di jalan utama"
          />
        </div>
      </div>
      <div className="mt-8">
        <div className="w-[66%] flex gap-[3.5%]">
          <SelectInput placeholder="Ada" label="Jalur Evakuasi" />
          <SelectInput placeholder="Ada" label="Akses Difabel" />
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

export default SectionAksesibilitas;
