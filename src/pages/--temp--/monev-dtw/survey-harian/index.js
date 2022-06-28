import React from 'react';
import SelectInput from '../../../../components/customInput/SelectInput';
import TextInput from '../../../../components/customInput/TextInput';
import Page from '../../../../components/Page';
import ButtonContained from '../../../../components/button/ButtonContained';
import BreadCrumbs from '../../../../components/BreadCrumbs';

const SurveyHarianPage = () => {
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
              path: '/master-basis-data/monev-dtw/survey-harian',
              title: 'Survey Harian',
            },
          ]}
        />
      </div>
      <div className="bg-white mt-3 px-9 py-8 rounded-md shadow-md">
        <div className="text-center font-semibold">
          Destinasi Wisata dengan jenis Hotel cukup mengisi survey pada pukul
          15.00 WIB. Sedangkan Destinasi Wisata dengan jenis DTW dan
          Restoran/Rumah makan/Kafe wajib mengisi survey pada pukul 10.00,
          12.00, dan 15.00 WIB
        </div>
        <div className="mt-12">
          <div className="w-full flex gap-[2%]">
            <TextInput
              label="Jumlah Pengunjung"
              placeholder="0"
              subLabel="(DTW/Hotel/Resto/Kafe)"
            />
            <TextInput
              label="Jumlah Scan Peduli Lindungi"
              placeholder="0"
              marginTop="mt-[28px]"
            />
            <TextInput
              label="Jumlah Kamar/Kursi Terisi"
              placeholder="0"
              subLabel="(Hotel/Resto/Kafe)"
            />
          </div>
          <div className="mt-7 flex w-[66%] flex gap-[3.5%]">
            <TextInput label="Jumlah Kendaraan Parkir" placeholder="0" />
            <TextInput label="Jumlah Petugas Satgas COVID-19" placeholder="0" />
          </div>
          <div className="mt-7">
            <div className="flex gap-9 mt-4">
              <div className="w-1/4">
                <div>Foto Screenshot Peduli Lindungi</div>
                <div className="border w-full h-40 rounded-md mt-4"></div>
              </div>
              <div className="w-1/4">
                <div>Foto Pelaksanaan Protokol Kesehatan</div>
                <div className="border w-full h-40 rounded-md mt-4"></div>
              </div>
              <div className="w-1/4">
                <div>Foto Kerumunan di Spot Favorit</div>
                <div className="border w-full h-40 rounded-md mt-4"></div>
              </div>
            </div>
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

export default SurveyHarianPage;
