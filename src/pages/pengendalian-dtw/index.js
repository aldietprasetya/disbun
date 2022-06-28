import React, { useCallback, useEffect, useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import TablePengendalianDtw from 'src/components/pages/pengendalianDTW/TablePengendalianDtw';
import axiosInstance from 'src/lib/axios';

const PengendalianDtwPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [dataDtwControl, setDataDtwControl] = useState(null);
  const [dataMeta, setDataMeta] = useState();
  const [searchField, setSearchField] = useState('');
  const [keywordSearch, setKeywordSearch] = useState('');
  const [limit, setLimit] = useState(10);

  const getDataPengendalianDtw = useCallback(async () => {
    const res = await axiosInstance.get(
      `/dtw-control/v1/history?limit=${limit}&page=${page}&keyword=${keywordSearch}`,
    );
    setDataDtwControl(res.data.data.dtwControl);
    setDataMeta(res.data.data.meta);
  }, [page, keywordSearch, limit]);

  useEffect(() => {
    getDataPengendalianDtw();
  }, [getDataPengendalianDtw]);

  const handleChangeLimit = (e) => {
    setLimit(e.target.value);
  };

  const handleNextPage = () => {
    if (dataMeta.page * dataMeta.limit <= dataMeta.total) {
      setPage(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (dataMeta.page !== 1) {
      setPage(page - 1);
    }
  };

  return (
    <Page sidebar={false} backdrop>
      <div className="bg-white">
        <div className="flex items-center justify-between py-6 px-8">
          <div>
            <BreadCrumbs
              links={[
                {
                  path: '/pengendalian-dtw',
                  title: 'Pengendalian Daya Tarik Wisata',
                },
              ]}
            />
            <div className="mt-3 text-2xl font-semibold">
              Pengendalian Daya Tarik Wisata
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 items-center gap-2 rounded border px-3 py-2 text-[#B3B3B3]">
              <Icon icon="akar-icons:search" className="text-lg" />
              <input
                placeholder="Enter keywords ..."
                className="text-black focus:outline-none"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
                onKeyDown={(e) =>
                  e.key === 'Enter' && setKeywordSearch(searchField)
                }
              />
            </div>
            <div>
              <button
                onClick={() => router.push('/pengendalian-dtw/buat-baru')}
                className=" rounded-md bg-gradient-to-b from-[#119F90] to-[#048577] py-3 px-6 text-xs  text-white"
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
          <TablePengendalianDtw
            headerTable={[
              'Nama DTW',
              'Kota/Kabupaten',
              'NIB',
              'Jenis Pengendalian',
              'Terakhir Dilihat',
              'Status Pengendalian',
              'Aksi',
            ]}
            data={dataDtwControl}
            dataMeta={dataMeta}
            currentPage={page}
            handleChangeLimit={handleChangeLimit}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </div>
      </div>
    </Page>
  );
};

export default PengendalianDtwPage;
