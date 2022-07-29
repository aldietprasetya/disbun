import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Icon } from '@iconify/react';
import InputForm from 'src/components/pages/admin/infografis/InputForm';
import mng from 'src/styles/Managemen.module.scss';
import TableInfografis from './TableInfografis';

const TableRekapPeriod = () => {
  const [filterKeyTabel, setFilterKeyTabel] = useState(false);
  const [selectedTab, setSelectedTab] = useState('PELAPORAN');
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
    {title: 'PELAPORAN'},
    {title: 'PENILAIAN'}
  ]

  const columns = ['NAMA PERUSAHAAN','NAMA KEBUN','KAB/KOTA','Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  const columns2 = ['NAMA PERUSAHAAN','NAMA KEBUN','KAB/KOTA','2008','2011','2014','2017','2020','2023','2026','2029','2032','2035','2038','2041'];

  const data = [
   { perusahaan: "PTPN VIII", kebun: "Nama Kebun A", kabKota: "KAB BANDUNG", data1: 'Diterima', data2: 'Diterima', data3: 'Ditunda', data4: 'Diterima', data5: 'Ditunda', data6: 'Diterima', data7: 'Diterima', data8: 'Diterima', data9: 'Ditunda', data10: 'Diterima', data11: 'Belum Ada Data', data12: 'Belum Ada Data' },
   { perusahaan: "PTPN VIII", kebun: "Nama Kebun A", kabKota: "KAB TASIKMALAYA", data1: 'Diterima', data2: 'Diterima', data3: 'Ditunda', data4: 'Diterima', data5: 'Ditunda', data6: 'Diterima', data7: 'Diterima', data8: 'Diterima', data9: 'Ditunda', data10: 'Diterima', data11: 'Belum Ada Data', data12: 'Belum Ada Data' },
   { perusahaan: "PTPN VIII", kebun: "Nama Kebun A", kabKota: "KAB INDRAMAYU", data1: 'Diterima', data2: 'Diterima', data3: 'Ditunda', data4: 'Diterima', data5: 'Ditunda', data6: 'Diterima', data7: 'Diterima', data8: 'Diterima', data9: 'Ditunda', data10: 'Diterima', data11: 'Belum Ada Data', data12: 'Belum Ada Data' },
   { perusahaan: "PTPN VIII", kebun: "Nama Kebun A", kabKota: "KOTA GARUT", data1: 'Diterima', data2: 'Diterima', data3: 'Ditunda', data4: 'Diterima', data5: 'Ditunda', data6: 'Diterima', data7: 'Diterima', data8: 'Diterima', data9: 'Ditunda', data10: 'Diterima', data11: 'Belum Ada Data', data12: 'Belum Ada Data' },
   { perusahaan: "PTPN VIII", kebun: "Nama Kebun A", kabKota: "KOTA GARUT", data1: 'Diterima', data2: 'Diterima', data3: 'Ditunda', data4: 'Diterima', data5: 'Ditunda', data6: 'Diterima', data7: 'Diterima', data8: 'Diterima', data9: 'Ditunda', data10: 'Diterima', data11: 'Belum Ada Data', data12: 'Belum Ada Data' },
   { perusahaan: "PTPN VIII", kebun: "Nama Kebun A", kabKota: "KOTA GARUT", data1: 'Diterima', data2: 'Diterima', data3: 'Ditunda', data4: 'Diterima', data5: 'Ditunda', data6: 'Diterima', data7: 'Diterima', data8: 'Diterima', data9: 'Ditunda', data10: 'Diterima', data11: 'Belum Ada Data', data12: 'Belum Ada Data' },
   { perusahaan: "PTPN VIII", kebun: "Nama Kebun A", kabKota: "KOTA GARUT", data1: 'Diterima', data2: 'Diterima', data3: 'Ditunda', data4: 'Diterima', data5: 'Ditunda', data6: 'Diterima', data7: 'Diterima', data8: 'Diterima', data9: 'Ditunda', data10: 'Diterima', data11: 'Belum Ada Data', data12: 'Belum Ada Data' },
   { perusahaan: "PTPN VIII", kebun: "Nama Kebun A", kabKota: "KOTA GARUT", data1: 'Diterima', data2: 'Diterima', data3: 'Ditunda', data4: 'Diterima', data5: 'Ditunda', data6: 'Diterima', data7: 'Diterima', data8: 'Diterima', data9: 'Ditunda', data10: 'Diterima', data11: 'Belum Ada Data', data12: 'Belum Ada Data' },
   { perusahaan: "PTPN VIII", kebun: "Nama Kebun A", kabKota: "KOTA TASIKMALAYA", data1: 'Diterima', data2: 'Diterima', data3: 'Ditunda', data4: 'Diterima', data5: 'Ditunda', data6: 'Diterima', data7: 'Diterima', data8: 'Diterima', data9: 'Ditunda', data10: 'Diterima', data11: 'Belum Ada Data', data12: 'Belum Ada Data' },
  ];

  const handleFilter = () => {
    setFilterKeyTabel(!filterKeyTabel)
  };

  const handleRekapSearch = () => {
    alert('search alert')
  };

  return (
    <>
      <div className="text-[24px] font-semibold leading-9 mt-[27px]">Tabel Rekapitulasi Periodik</div>

      <div className="flex  justify-end items-center gap-3 mb-[21px]">

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
          <div className="flex flex-col bg-white rounded-md	px-5 pb-[26px] pt-6 mb-6 transition">
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
                  titleForm="Periode Pelaporan"
                  titleName="Periode Pelaporan"
                  onChange={(e) => setPeriodLaporRekap(e.target.value)}
                  type="text"
                  values={periodLaporRekap}
                  placeholder="Pilih Tahun"
                  className={`w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                  selectionArea={true}
                />
              </div>
              <div className="w-[260px]">
                <InputForm
                  titleForm="Periode Penilaian"
                  titleName="Periode Penilaian"
                  onChange={(e) => setPeriodNilaiRekap(e.target.value)}
                  type="text"
                  values={periodNilaiRekap}
                  placeholder="Pilih Interval"
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
        <div className='flex'>
          {tab.map((tabs, i) => {
            return (
              <div
                className={`
                  ${selectedTab == tabs.title ? 'bg-primary-dark-green-1 text-white' : 'bg-primary-green-1 text-primary-black-2'}
                  cursor-pointer w-[151px] h-[42px] flex justify-center items-center rounded-t-lg font-bold
                `}
                onClick={(e) => setSelectedTab(tabs.title)}
              >
                {tabs.title}
              </div>
            );
          })}
        </div>

        <TableInfografis
          headerTable={selectedTab == 'PELAPORAN' ? columns : columns2}
          data={data}
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

export default TableRekapPeriod;
