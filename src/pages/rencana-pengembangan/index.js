import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Page from '../../components/Page';
import { Icon } from '@iconify/react';
import { rencanaPengembangan } from '../../components/temp/dataDTW';
import { useRouter } from 'next/router';
import TableRencanaPengembangan from 'src/components/pages/rencanaPengembangan/TableRencanaPengembangan';

const RencanaPengembanganPage = () => {
  const router = useRouter();
  return (
    <Page sidebar={false} backdrop>
      <div className="bg-white">
        <div className="flex items-center justify-between py-6 px-8">
          <div>
            <BreadCrumbs
              links={[
                {
                  path: '/rencana-pengembangan',
                  title: 'Rencana Pengembangan',
                },
              ]}
            />
            <div className="mt-3 text-2xl font-semibold">
              Rencana Pengembangan
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 items-center gap-2 rounded border px-3 py-2 text-[#B3B3B3]">
              <Icon icon="akar-icons:search" className="text-lg" />
              <input
                placeholder="Enter keywords ..."
                className="focus:outline-none"
              />
            </div>
            <div>
              <button
                onClick={() =>
                  router.push('/element-dtw/buat-baru/informasi-umum')
                }
                className=" rounded-md bg-gradient-to-b from-[#119F90] to-[#048577] py-2 px-6 text-xs  text-white"
              >
                <div className="flex items-center gap-1">
                  <Icon icon="akar-icons:plus" className="text-md text-white" />
                  <div>Buat Baru</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div>
          <TableRencanaPengembangan
            headerTable={[
              'Nama DTW',
              'Kota/Kabupaten',
              'NIB',
              'Jenis DTW',
              'Terakhir Dilihat',
              'Status CHSE',
              'Aksi',
            ]}
            data={rencanaPengembangan}
          />
        </div>
      </div>
    </Page>
  );
};

export default RencanaPengembanganPage;
