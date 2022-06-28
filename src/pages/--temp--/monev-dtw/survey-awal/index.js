import React from 'react';
import SelectInput from '../../../../components/customInput/SelectInput';
import TextInput from '../../../../components/customInput/TextInput';
import Page from '../../../../components/Page';
import ButtonContained from '../../../../components/button/ButtonContained';
import BreadCrumbs from '../../../../components/BreadCrumbs';

const SurveyAwalPage = () => {
  return (
    <Page>
      <div className="pt-2 pb-5">
        <BreadCrumbs
          links={[
            {
              path: '/master-basis-data',
              title: 'Master Basis Data',
            },
            {
              path: '/master-basis-data/monev-dtw',
              title: 'Monev DTW',
            },
            {
              path: '/master-basis-data/monev-dtw/survey-awal',
              title: 'Survey Awal',
            },
          ]}
        />
      </div>
      <div className="bg-white mt-3 px-9 py-8 rounded-md shadow-md">
        <div className="text-center font-semibold">
          Survey Awal Destinasi Pariwisata ditujukan untuk pendataan identitas
          dan informasi setiap daya tarik wisata di Provinsi Jawa Barat.
          Silahkan lengkapi formulir berikut dengan data yang sebenar-benarnya.
        </div>
        <div className="mt-12">
          <div className="w-full flex gap-[3.5%]">
            <SelectInput
              label="Input Ketersediaan Fasilitas Protokol Kesehatan"
              placeholder="Wastafel & Sabun"
            />
            <SelectInput label="Adanya Himbauan Prokes" placeholder="Ya" />
          </div>
          <div className="mt-7">
            <div>
              Input Foto Ketersediaan Fasilitas Protokol Kesehatan (Max 4 Foto)
            </div>
            <div className="flex gap-5 mt-4">
              <div className="border w-1/4 h-40 rounded-md"></div>
              <div className="border w-1/4 h-40 rounded-md"></div>
              <div className="border w-1/4 h-40 rounded-md"></div>
              <div className="border w-1/4 h-40 rounded-md"></div>
            </div>
          </div>
          <div className="mt-7 flex gap-[2%]">
            <TextInput
              label="Jumlah Pegawai/Pengelola Tempat"
              placeholder="0"
              marginTop="mt-[28px]"
            />
            <TextInput
              label="Jumlah Pegawai/Pengelola Tempat yang Sudah Divaksin"
              placeholder="0"
            />
            <TextInput
              label="Kapasitas Total Pengunjung (DTW & Resto)"
              placeholder="0"
              marginTop="mt-[28px]"
            />
          </div>
          <div className="mt-7 flex gap-[2%]">
            <TextInput
              label="Kapasitas Total Parkir Kendaraan"
              placeholder="0"
              marginTop="mt-[28px]"
            />
            <TextInput
              label="Kapasitas Total Parkir Kendaraan"
              placeholder="0"
              marginTop="mt-[28px]"
            />
            <TextInput
              label="Jumlah Petugas Satgas COVID-19"
              placeholder="0"
              marginTop="mt-[28px]"
            />
          </div>
          <div className="flex justify-end mt-7">
            <div className="flex gap-3">
              <ButtonContained color="secondary">Batal</ButtonContained>
              <ButtonContained color="primary">
                Simpan Perubahan
              </ButtonContained>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default SurveyAwalPage;
