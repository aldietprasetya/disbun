import React from 'react';
import Page from '../../../components/Page';
import TableKoleksiDTW from '../../../components/pages/koleksiDTW/TableKoleksiDTW';
import { dataDTW } from '../../../components/temp/dataDTW';

const KoleksiDtw = () => {
  return (
    <Page>
      <div className="flex justify-between items-center mb-6">
        <div className="font-semibold text-[18px]">Data Daya Tarik Wisata</div>
        <div className="flex gap-4 py-3">
          <div className="flex text-[#038575] gap-2 border py-2 px-4 border-[#038575] rounded-lg">
            <img
              src="/icon/filter-icon.svg"
              alt="filter-icon"
              className="w-4"
            />
            <div>Filter</div>
          </div>
          <div className="flex text-white gap-2 border py-2 px-4 bg-[#038575] rounded-lg">
            <img src="/icon/cross-icon.svg" alt="filter-icon" className="w-3" />
            <div>Tambah DTW</div>
          </div>
        </div>
      </div>
      <TableKoleksiDTW
        headerTable={[
          'Nama DTW',
          'Kota/Kabupaten',
          'NIB',
          'Jenis DTW',
          'Nama Pengelola',
          'Status CHSE',
          'Aksi',
        ]}
        data={dataDTW}
      />
    </Page>
  );
};

export default KoleksiDtw;
