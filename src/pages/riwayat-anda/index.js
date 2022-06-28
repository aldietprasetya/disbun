import React, { useState } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Page from '../../components/Page';
import { Icon } from '@iconify/react';
import TableRiwayatAnda from '../../components/pages/riwayatAnda/TableRiwayatAnda';
import { dataPengajuanDTW } from '../../components/temp/dataDTW';
import DrawerDetail from '../../components/pages/riwayatAnda/DrawerDetail';
import DrawerInformasiUmum from '../../components/pages/riwayatAnda/DrawerInformasiUmum';
import DrawerAtraksi from 'src/components/pages/riwayatAnda/DrawerAtraksi';
import DrawerAksebilitas from 'src/components/pages/riwayatAnda/DrawerAksebilitas';
import DrawerAmenitas from 'src/components/pages/riwayatAnda/DrawerAmenitas';
import DrawerLainnya from 'src/components/pages/riwayatAnda/DrawerLainnya';

const RiwayatAndaPage = () => {
  const [drawerDetailOpen, setDrawerDetailOpen] = useState(false);
  const [subDrawer, setSubDrawer] = useState('');

  return (
    <Page sidebar={false}>
      <div className="min-h-full bg-white ">
        <div className="flex items-center justify-between py-6 px-8">
          <div>
            <BreadCrumbs
              links={[{ path: '/riwayat-anda', title: 'Riwayat Anda' }]}
            />
            <div className="mt-3 text-2xl font-semibold">Riwayat Anda</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 items-center justify-center rounded border px-3">
              <Icon icon="prime:filter-slash" className="text-lg" />
            </div>
            <div className="flex h-10 items-center gap-2 rounded border px-3 py-2 text-[#B3B3B3]">
              <Icon icon="akar-icons:search" className="text-lg" />
              <input
                placeholder="Enter keywords ..."
                className="focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div>
          <TableRiwayatAnda
            headerTable={[
              'Nama DTW',
              'Kota/Kabupaten',
              'NIB',
              'Jenis Pengajuan',
              'Waktu Pengajuan',
              'Status Pengajuan',
              'Aksi',
            ]}
            data={dataPengajuanDTW}
            handleOpenDetail={() => setDrawerDetailOpen(!drawerDetailOpen)}
          />
        </div>
      </div>
      <DrawerDetail
        isOpen={drawerDetailOpen}
        handleClose={() => {
          setDrawerDetailOpen(false);
          setSubDrawer(false);
        }}
        handleOpenDetail={(e) => setSubDrawer(e)}
      />
      <DrawerInformasiUmum
        isOpen={subDrawer === 'informasi-umum'}
        handleClose={() => setSubDrawer('')}
      />
      <DrawerAtraksi
        isOpen={subDrawer === 'atraksi'}
        handleClose={() => setSubDrawer('')}
      />
      <DrawerAksebilitas
        isOpen={subDrawer === 'aksebilitas'}
        handleClose={() => setSubDrawer('')}
      />
      <DrawerAmenitas
        isOpen={subDrawer === 'amenitas'}
        handleClose={() => setSubDrawer('')}
      />
      <DrawerLainnya
        isOpen={subDrawer === 'lain-lain'}
        handleClose={() => setSubDrawer('')}
      />
    </Page>
  );
};

export default RiwayatAndaPage;
