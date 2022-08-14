import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import {useRouter} from 'next/router'
import { useSession } from "next-auth/react";
import axios from 'axios';
import _ from 'lodash';
import { appConfig } from 'src/config';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import InputForm from 'src/components/pages/admin/infografis/InputForm';
import mng from 'src/styles/Managemen.module.scss';
import TableMasterData from './NilaiMasterTable';

const PenilaianPerkebunanPageComponent = () => {
  const { data: session } = useSession();
  if (session) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${session.user.accessToken}`
  }

  const { enqueueSnackbar } = useSnackbar();
  const [selectedTab, setSelectedTab] = useState('PELAPORAN');
  const [searchField, setSearchField] = useState('')

  const router = useRouter()

  ///// table /////
  const [dataMeta, setDataMeta] = useState({});
  const [currPage, setCurrPage] = useState(1);

  const handleChangeLimit = (e) => {
    setLimit(e.target.value);
  };

  const handleNextPage = () => {
    if (dataMeta.page * dataMeta.limit <= dataMeta.total) {
      setCurrPage(currPage+1);
      setDataMeta({...dataMeta, page: currPage+1})
    }
  };
  const handlePrevPage = () => {
    if (dataMeta.page !== 1) {
      setCurrPage(currPage-1);
      setDataMeta({...dataMeta, page: currPage-1})
    }
  };

  const handleAddNew = () => {
    router.push({
      pathname: '/user/penilaian-perkebunan/legalitas/'
    })
  };

  const columns = ['NAMA KEBUN','KOTA / KABUPATEN','ADMINISTRATUR/MANAJER','JENIS PENGAJUAN','TERAKHIR DILIHAT','STATUS PENGAJUAN','AKSI'];

  const [data, setData] = useState([]);

  useEffect(() => {
    if (session) {
      const reports = axios.get(`${appConfig.baseUrl}/evaluations`);
      reports.then(
        function(dt) {
          let dataStore = []

          setDataMeta({
            page: 1,
            limit: 10,
            total: dt.data.data.evaluations.length
          })

          dt.data.data.evaluations.forEach((item, i) => {
            let data = {
              kebun: item.garden_name,
              kota: item.city,
              admin: item.corporate_name,
              jenis: 'Penilaian Perkebunan',
              date: item.updated_at,
              status: (item.state == "Diterima" ? "Approve" : "Draft")
            }
            dataStore.push(data)
          });
          setData(dataStore)
        },
        function(err) {
          console.log(err)
        }
      )
    }
  }, [session])

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
          currentPage={currPage}
          handleChangeLimit={handleChangeLimit}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
    </>
  );
};

export default PenilaianPerkebunanPageComponent;
