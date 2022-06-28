import React from 'react';
import Page from '../../../../components/Page';
import TablePengajuan from '../../../../components/pages/pengajuan/TablePengajuan';
import { dataPengajuanDTW } from '../../../../components/temp/dataDTW';

const PengajuanDTWBaruPage = () => {
  return (
    <Page>
      <TablePengajuan
        headerTable={[
          'Nama DTW',
          'Kota/Kabupaten',
          'NIB',
          'Jenis DTW',
          'Nama Pengelola',
          'Status Pengajuan',
          'Aksi',
        ]}
        data={dataPengajuanDTW}
      />
    </Page>
  );
};

export default PengajuanDTWBaruPage;
