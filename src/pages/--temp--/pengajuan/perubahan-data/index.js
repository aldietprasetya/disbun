import React from 'react';
import Page from '../../../../components/Page';
import TablePengajuan from '../../../../components/pages/pengajuan/TablePengajuan';
import { dataPerubahanDTW } from '../../../../components/temp/dataDTW';

const PerubahanDataDTWPage = () => {
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
        data={dataPerubahanDTW}
      />
    </Page>
  );
};

export default PerubahanDataDTWPage;
