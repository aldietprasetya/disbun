import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import {useRouter} from 'next/router'
import InputForm from 'src/components/pages/admin/infografis/InputForm';
import mng from 'src/styles/Managemen.module.scss';
import TableMasterData from './NilaiMasterTable';

const PenilaianPerkebunanPageComponent = () => {
  const [selectedTab, setSelectedTab] = useState('PELAPORAN');
  const [searchField, setSearchField] = useState('')

  const router = useRouter()


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

  const handleAddNew = () => {
    router.push({
      pathname: "/penilaian-perkebunan/legalitas/"
    })
  };

  const columns = ['NAMA KEBUN','KOTA / KABUPATEN','ADMINISTRATUR/MANAJER','JENIS PENGAJUAN','TERAKHIR DILIHAT','STATUS PENGAJUAN','AKSI'];

  const data = [
   { kebun: "Kebun A", kota: "Kabupaten Bandung Barat", admin: "Asep", jenis: 'Penilaian Perkebunan', date: '2022-07-05T03:32:11.502Z', status: 'Draft' },
   { kebun: "Kebun B", kota: "Kabupaten Bogor", admin: "Mirna", jenis: 'Penilaian Perkebunan', date: '2022-07-05T03:32:11.502Z', status: 'Draft' },
   { kebun: "Kebun C", kota: "Kabupaten Bandung Barat", admin: "Udin", jenis: 'Penilaian Perkebunan', date: '2022-07-05T03:32:11.502Z', status: 'Draft' },
   { kebun: "Kebun D", kota: "Kota Cimahi", admin: "Fahmi", jenis: 'Penilaian Perkebunan', date: '2022-07-05T03:32:11.502Z', status: 'Draft' },
   { kebun: "Kebun E", kota: "Kabupaten Bandung Barat", admin: "Dina", jenis: 'Penilaian Perkebunan', date: '2022-07-05T03:32:11.502Z', status: 'Draft' },
   { kebun: "Kebun F", kota: "Kabupaten Bandung Barat", admin: "HIdayat", jenis: 'Penilaian Perkebunan', date: '2022-07-05T03:32:11.502Z', status: 'Draft' },
   { kebun: "Kebun G", kota: "Kabupaten Bandung Barat", admin: "Haidar", jenis: 'Penilaian Perkebunan', date: '2022-07-05T03:32:11.502Z', status: 'Draft' },
   { kebun: "Kebun H", kota: "Kabupaten Bandung Barat", admin: "Haris", jenis: 'Penilaian Perkebunan', date: '2022-07-05T03:32:11.502Z', status: 'Draft' },
   { kebun: "Kebun I", kota: "Kabupaten Bandung Barat", admin: "Mega", jenis: 'Penilaian Perkebunan', date: '2022-07-05T03:32:11.502Z', status: 'Draft' },
   { kebun: "Kebun J", kota: "Kabupaten Bandung Barat", admin: "Firman", jenis: 'Penilaian Perkebunan', date: '2022-07-05T03:32:11.502Z', status: 'Draft' },
  ];

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

        <div>
          <button className=" rounded-md bg-gradient-to-b from-[#119F90] to-[#048577] py-4 px-6 text-xs text-white" onClick={() => handleAddNew()}>
            <div className="flex items-center gap-1">
              <Icon icon="akar-icons:plus" className="text-md text-white" />
              <div>Buat Baru</div>
            </div>
          </button>
        </div>

      </div>

      <div>
        <TableMasterData
          headerTable={columns}
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

export default PenilaianPerkebunanPageComponent;
