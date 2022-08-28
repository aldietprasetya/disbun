import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import InputForm from 'src/components/pages/admin/infografis/InputForm';
import mng from 'src/styles/Managemen.module.scss';
import TableMasterData from './TableMasterData';

const MasterBasisData = () => {
  const [filterKeyTabel, setFilterKeyTabel] = useState(false);
  const [selectedTab, setSelectedTab] = useState('PERUSAHAAN PERKEBUNAN');
  const [perusahaanRekap, setPerusahaanRekap] = useState('')
  const [kabKotaRekap, setKapKotaRekap] = useState('')
  const [periodLaporRekap, setPeriodLaporRekap] = useState('')
  const [periodNilaiRekap, setPeriodNilaiRekap] = useState('')
  const [searchField, setSearchField] = useState('')


  ///// table /////
  const [dataMeta, setDataMeta] = useState({
    page: 1,
    limit: 10,
    total: 20
  });
  const [page, setPage] = useState(1);

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

  const tab = [
    {title: 'PERUSAHAAN PERKEBUNAN'},
    {title: 'PENGAJUAN AKUN PERUSAHAAN'}
  ]

  const columns = ['NAMA PERUSAHAAN','NAMA ADMINISTRATUR','KAB/KOTA','USERNAME','WAKTU PENGAJUAN','AKSI'];
  const columns2 = ['NAMA PERUSAHAAN','NAMA ADMINISTRATUR','EMAIL ADMINISTRATUR','NO. TELEPON ADMINISTRATUR','WAKTU PENGAJUAN','AKSI'];

  const data = [
   { perusahaan: "Perusahan A", admin: "Admin PT A", trd: "KOTA BANDUNG", frth: 'ptkebuna', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan B", admin: "Admin PT B", trd: "KOTA BANDUNG", frth: 'ptkebuna', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan C", admin: "Admin PT C", trd: "KOTA BANDUNG", frth: 'ptkebuna', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan D", admin: "Admin PT D", trd: "KOTA BANDUNG", frth: 'ptkebuna', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan E", admin: "Admin PT E", trd: "KAB GARUT", frth: 'ptkebuna', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan F", admin: "Admin PT F", trd: "KAB GARUT", frth: 'ptkebuna', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan G", admin: "Admin PT G", trd: "KAB GARUT", frth: 'ptkebuna', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan H", admin: "Admin PT H", trd: "KAB GARUT", frth: 'ptkebuna', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan I", admin: "Admin PT I", trd: "KAB GARUT", frth: 'ptkebuna', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan J", admin: "Admin PT J", trd: "KAB GARUT", frth: 'ptkebuna', date: '2022-07-05T03:32:11.502Z' }
  ];
  const data2 = [
   { perusahaan: "Perusahan A", admin: "Admin PT A", trd: "admina@gmail.com", frth: '082133624579', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan B", admin: "Admin PT B", trd: "admina@gmail.com", frth: '082133624579', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan C", admin: "Admin PT C", trd: "admina@gmail.com", frth: '082133624579', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan D", admin: "Admin PT D", trd: "admina@gmail.com", frth: '082133624579', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan E", admin: "Admin PT E", trd: "admina@gmail.com", frth: '082133624579', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan F", admin: "Admin PT F", trd: "admina@gmail.com", frth: '082133624579', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan G", admin: "Admin PT G", trd: "admina@gmail.com", frth: '082133624579', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan H", admin: "Admin PT H", trd: "admina@gmail.com", frth: '082133624579', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan I", admin: "Admin PT I", trd: "admina@gmail.com", frth: '082133624579', date: '2022-07-05T03:32:11.502Z' },
   { perusahaan: "Perusahan J", admin: "Admin PT J", trd: "admina@gmail.com", frth: '082133624579', date: '2022-07-05T03:32:11.502Z' }
  ];

  const handleFilter = () => {
    setFilterKeyTabel(!filterKeyTabel)
  };

  const handleRekapSearch = () => {
    alert('search alert')
  };

  return (
    <>
      <div className="flex  justify-end items-center gap-3 px-8 mb-[21px]">

        <div className="flex h-12 items-center gap-2 rounded-md border px-3 py-2 bg-white text-[#B3B3B3]">
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

        <div
          onClick={() => handleFilter()}
          className="h-12 cursor-pointer rounded-md border p-2 flex items-center transition hover:shadow-md bg-primary-gray-6"
        >
          <img src="/icon/filter.svg" className="w-6 mr-2" />
          <span className="text-sm font-bold text-primary-gray-5">Filter Data</span>
        </div>

        <div
          onClick={() => handleDownloadData()}
          className="h-12 cursor-pointer rounded-md border p-2 flex items-center transition hover:shadow-md bg-primary-gray-6"
        >
          <img src="/icon/upload-white.svg" className="w-6 mr-2" />
          <span className="text-sm font-bold text-primary-gray-5">Unduh CSV</span>
        </div>

      </div>

      {
        filterKeyTabel ? (
          <div className="flex flex-col bg-white shadow-md rounded-md	px-5 pb-[26px] mx-8 pt-6 mb-6 transition ">
            <div className="flex items-center text-[20px] font-medium">
              <img src="/images/master/card/icon/pencarian.svg" className="w-12 mr-[21px]" />
              Pencarian
            </div>
            <div className="flex justify-between items-end mt-6">
              <div className="w-[260px]">
                <InputForm
                  titleForm="Perusahaan"
                  titleName="Perusahaan"
                  onChange={(e) => setPerusahaanRekap(e.target.value)}
                  type="text"
                  values={perusahaanRekap}
                  placeholder="Semua Perusahaan"
                  className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                  selectionArea={true}
                />
              </div>
              <div className="w-[260px]">
                <InputForm
                  titleForm="Kab/Kota"
                  titleName="Kab/Kota"
                  onChange={(e) => setKapKotaRekap(e.target.value)}
                  type="text"
                  values={kabKotaRekap}
                  placeholder="Semua Kab/Kota"
                  className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                  selectionArea={true}
                />
              </div>
              <div className="w-[260px]">
                <InputForm
                  titleForm="Jenis Pengajuan"
                  titleName="Jenis Pengajuan"
                  onChange={(e) => setPeriodLaporRekap(e.target.value)}
                  type="text"
                  values={periodLaporRekap}
                  placeholder="Pilih Pengajuan"
                  className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                  selectionArea={true}
                />
              </div>
              <div className="w-[260px]">
                <InputForm
                  titleForm="Status Pengajuan"
                  titleName="Status Pengajuan"
                  onChange={(e) => setPeriodNilaiRekap(e.target.value)}
                  type="text"
                  values={periodNilaiRekap}
                  placeholder="Pilih Status"
                  className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                  selectionArea={true}
                />
              </div>
              <div>
                <div
                  onClick={() => handleRekapSearch()}
                  className="h-12 w-12 cursor-pointer rounded-md border p-2 flex items-center justify-center transition hover:shadow-md bg-primary-gray-6"
                >
                  <img src="/icon/search.svg" className="w-[18px]" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )
      }

      <div>
        <div className="text-2xl font-semibold mb-[38px]">Akun Perusahaan Perkebunan</div>

        <div className='flex'>
          {tab.map((tabs, i) => {
            return (
              <div
                className={`
                  ${selectedTab == tabs.title ? 'bg-primary-dark-green-1 text-white' : 'bg-primary-green-1 text-primary-black-2'}
                  cursor-pointer h-[42px] px-[51px] flex justify-center items-center rounded-t-lg
                `}
                onClick={(e) => setSelectedTab(tabs.title)}
              >
                {tabs.title}
              </div>
            );
          })}
        </div>

        <TableMasterData
          headerTable={selectedTab == 'PERUSAHAAN PERKEBUNAN' ? columns : columns2}
          data={selectedTab == 'PERUSAHAAN PERKEBUNAN' ? data : data2}
          selectedTab={selectedTab}
          dataMeta={dataMeta}
          currentPage={page}
          handleChangeLimit={handleChangeLimit}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
    </>
  );
};

export default MasterBasisData;
