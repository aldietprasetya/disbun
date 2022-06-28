import React from 'react';
import TextInput from '../../customInput/TextInput';
import SelectInput from '../../customInput/SelectInput';
import ButtonContained from '../../button/ButtonContained';
import TextArea from '../../customInput/TextArea';

const SectionInformasiUmum = () => {
  return (
    <div className="bg-white mt-3 p-7 rounded-md shadow-md">
      <div className="w-[32%]">
        <div className="font-medium mb-1">Nama Daya Tarik Wisata</div>
        <TextInput placeholder="Nama" />
      </div>
      <div className="mt-5">
        <div className="font-medium mb-2">Letak Geografis</div>
        <div className="flex gap-[2%]">
          <TextInput label="Longitude" placeholder="Longitude" />
          <TextInput label="Latitude" placeholder="Latitude" />
          <SelectInput
            label="Kategori Letak Geografis"
            placeholder="Pilih Kategori"
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="font-medium mb-2">Lokasi Administratif</div>
        <div className="flex gap-[2%]">
          <SelectInput label="Kabupaten/Kota" placeholder="Kabupaten/Kota" />
          <SelectInput label="Kecamatan" placeholder="Kecamatan" />
          <SelectInput label="Kelurahan/Desa" placeholder="Kelurahan/Desa" />
        </div>
      </div>
      <div className="mt-5">
        <div className="font-medium mb-1">Alamat</div>
        <TextArea rows={3} placeholder="Alamat" />
      </div>
      <div className="mt-5">
        <div className="font-medium mb-2">Profil Daya Tarik Wisata</div>
        <div className="flex gap-[2%] w-full">
          <TextInput label="Nama Pengelola" placeholder="Nama" />
          <TextInput label="No. HP" placeholder="Ex. 082231456978" />
        </div>
        <div className="flex gap-[2%] w-full mt-5">
          <SelectInput label="Jenis DTW" placeholder="Pilih Jenis DTW" />
          <SelectInput label="Kategori DTW" placeholder="Pilih Kategori DTW" />
        </div>
        <div className="flex gap-[2%] w-full mt-5">
          <TextInput
            label="Jarak Dari Kota/ Kabupaten Terdekat( Km)"
            placeholder="Ex. 38 km"
          />
          <SelectInput
            label="Kondisi Jalan/Aksesibilitas "
            placeholder="Pilih Kondisi"
          />
          <SelectInput
            label="Transportasi Menuju DTW"
            placeholder="Pilih Transportasi"
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="font-medium mb-2">Profil Kunjungan Wisatawan</div>
        <div className="flex gap-[2%]">
          <TextInput
            label="Jumlah Kunjungan Wisatawan Mancanegara"
            placeholder="Jumlah"
          />
          <TextInput
            label="Jumlah Kunjungan Wisatawan Nusantara"
            placeholder="Jumlah"
          />
          <SelectInput label="Tahun Kunjungan" placeholder="Pilih Tahun" />
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

export default SectionInformasiUmum;
