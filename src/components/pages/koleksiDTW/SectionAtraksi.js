import React from 'react';
import TextInput from '../../customInput/TextInput';
import SelectInput from '../../customInput/SelectInput';
import ButtonContained from '../../button/ButtonContained';
import TextArea from '../../customInput/TextArea';

const SectionAtraksi = () => {
  return (
    <div className="bg-white mt-3 p-7 rounded-md shadow-md">
      <div className="">
        <div className="flex gap-[2%]">
          <SelectInput label="Pilih Atraksi" placeholder="Hiking" />
          <TextInput label="Potensi" placeholder="Ex: Wahana Air" />
          <TextInput
            label="Kondisi"
            placeholder="Ex: Perlu perawatan dan penataan"
          />
        </div>
      </div>
      <div className="mt-8">
        <div className="flex gap-[2%]">
          <TextInput
            label="Tingkat Keunikan"
            placeholder="Ex: Terdapat juga di tempat lain"
          />
          <TextInput
            label="Tingkat Keaslian"
            placeholder="Ex: Tidak orisinil, ada modifikasi"
          />
          <TextInput label="Waktu Operasi" placeholder="Ex: 24 Jam" />
        </div>
      </div>
      <div className="mt-8">
        <div className="flex gap-[2%]">
          <TextArea
            rows={6}
            label="Kapasitas Pengunjung"
            subLabel="(Pisah dengan ; semicolon)"
            placeholder="Ex: Area situs <100 orang; luar situs >1000 orang"
          />
          <TextArea
            rows={6}
            label="Rata-Rata Pengunjung"
            subLabel="(Pisah dengan ; semicolon)"
            placeholder="Ex: Weekday 5000 orang; weekend 7000 orang"
          />
          <TextArea
            rows={6}
            label="Harga Tiket Masuk"
            subLabel="(Pisah dengan ; semicolon)"
            placeholder="Ex: Weekday: Rp4.000/org; Weekend: Rp6000/org; Perahu: Rp10.000"
          />
        </div>
      </div>
      <div className="mt-8">
        <div className="flex gap-[2%]">
          <TextArea
            rows={6}
            label="Profile Pengunjung"
            subLabel="(Pisah dengan ; semicolon)"
            placeholder="Ex: Kategori: Jamaah, Kel Organisasi; Asal: Dominan dari Jawa Timur dan Jawa Tengah; Aktifitas: Ziarah, Ritual, Tawasulan"
          />
          <TextInput
            label="Musim Kunjungan"
            placeholder="Ex: Libur panjang dan hari besar agama islam"
            marginTop="mt-[28px]"
          />
          <TextInput
            label="Lain-lain"
            placeholder="Ex: Event nyangku, setiap maulid"
            marginTop="mt-[28px]"
          />
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

export default SectionAtraksi;
