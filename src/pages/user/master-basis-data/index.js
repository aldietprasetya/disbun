import React, { useCallback, useEffect, useState } from 'react';
import BreadCrumbs from 'src/components/BreadCrumbs';
import Page from 'src/components/Page';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import axiosInstance from 'src/lib/axios';
import MasterBasisData from 'src/components/pages/user/masterBasisData/MasterBasisData';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import table from 'src/styles/Table.module.scss';
import eventBus from "src/state";

const Detail = ({ item }) => {
  function changeState(e) {
    if (e == 'Diajukan') {
      return <div className="bg-[#FEF6F6] inline-flex px-[8px] py-[2px] items-center justify-center rounded text-[#EE5C52] font-medium text-xs">
      <span className="w-[6px] h-[6px] bg-[#EE5C52] mr-1.5 rounded-sm"></span>{e}
      </div>
    }
    if (e == 'Ditunda') {
      return <div className="bg-[#FFF6E3] inline-flex px-[8px] py-[2px] items-center justify-center rounded text-[#FCBD0F] font-medium text-xs">
      <span className="w-[6px] h-[6px] bg-[#FCBD0F] mr-1.5 rounded-sm"></span>{e}
      </div>
    }
    if (e == 'Diterima') {
      return <div className="bg-[#ECF8F1] inline-flex px-[8px] py-[2px] items-center justify-center rounded text-[#27AE60] font-medium text-xs">
      <span className="w-[6px] h-[6px] bg-[#27AE60] mr-1.5 rounded-sm"></span>{e}
      </div>
    }
  }

  const closeDisplay = (item) => {
    eventBus.dispatch("detilApply", item);
  };

  let [laporanPerkebunan, setLaporanPerkebunan] = useState([
    {title: 'Aspek Umum',link: '#'},
    {title: 'Aspek Manajemen',link: '#'},
    {title: 'Aspek Kebun',link: '#'},
    {title: 'Aspek Pengolahan',link: '#'},
    {title: 'Aspek Sosial Ekonomi dan Lingkungan',link: '#'},
  ])
  let [nilaiPerkebunan, setNilaiPerkebunan] = useState([
    {title: 'Legalitas',skor:0,link: '#'},
    {title: 'Manajemen',skor:0,link: '#'},
    {title: 'Kebun',skor:0,link: '#'},
    {title: 'Pengolahan Hasil',skor:0,link: '#'},
    {title: 'Sosial',skor:0,link: '#'},
    {title: 'Ekonomi Wilayah',skor:0,link: '#'},
    {title: 'Lingkungan',skor:0,link: '#'},
    {title: 'Pelaporan',skor:0,link: '#'},
  ])

  return (
    <div className="w-full fixed h-full block z-10 top-0 left-0 bg-black/[.4]">
      <div className="w-full h-full absolute z-10"></div>
      <div className="w-[480px] bg-white ml-auto h-full relative z-20 pl-6 pr-10 py-4 overflow-y-auto">
        <div className="flex border-b border-[#E9EDF5] pb-4">
          <div className="text-xl	font-semibold h-[48px] flex items-center">Detail</div>
          <img src="/icon/close.svg" className="w-6 ml-auto cursor-pointer" onClick={() => { closeDisplay(null) }}/>
        </div>
        <div className="border-b border-[#E9EDF5] py-4">
          <div className="text-[#3267E3]">Detail Pengajuan</div>
          <div className="flex mt-3">
            <span className="text-xs text-[#9E9E9E] min-w-[122px] mr-2">Nama Perusahaan</span>
            <span className="text-xs text-[#9E9E9E]">:</span>
            <span className="text-xs font-semibold ml-2">{item.perusahaan}</span>
          </div>
          <div className="flex mt-[15px]">
            <span className="text-xs text-[#9E9E9E] min-w-[122px] mr-2">Nama Kebun</span>
            <span className="text-xs text-[#9E9E9E]">:</span>
            <span className="text-xs font-semibold ml-2">{item.kebun}</span>
          </div>
          <div className="flex mt-[15px]">
            <span className="text-xs text-[#9E9E9E] min-w-[122px] mr-2">Kota/Kab</span>
            <span className="text-xs text-[#9E9E9E]">:</span>
            <span className="text-xs font-semibold ml-2">{item.kabKota}</span>
          </div>
          <div className="flex mt-[15px]">
            <span className="text-xs text-[#9E9E9E] min-w-[122px] mr-2">Jenis Pengajuan</span>
            <span className="text-xs text-[#9E9E9E]">:</span>
            <span className="text-xs font-semibold ml-2">{item.jenis == 'Kuesioner Penilaian' ? 'Penilaian Perkebunan' : item.jenis}</span>
          </div>
          <div className="flex mt-[15px]">
            <span className="text-xs text-[#9E9E9E] min-w-[122px] mr-2">Waktu Pengajuan</span>
            <span className="text-xs text-[#9E9E9E]">:</span>
            <span className="text-xs ml-2 bg-[#E9EDF5] rounded px-[10px] h-[20px] flex items-center">
              {item.date}
            </span>
          </div>
          <div className="flex mt-[15px]">
            <span className="text-xs text-[#9E9E9E] min-w-[122px] mr-2">Status Pengajuan</span>
            <span className="text-xs text-[#9E9E9E]">:</span>
            <span className="text-xs font-semibold ml-2">{changeState(item.status)}</span>
          </div>
        </div>
        <div className="py-4">
          <div className="text-[#3267E3] mb-3">Data Laporan Perkebunan</div>
          <table className={table.table}>
            <thead className={table.table__head}>
            {
              item.jenis == 'Laporan Perkebunan' ? (
                <tr className={table.table__head_row}>
                  <th className={`${table.table__head_col}`}>
                    ASPEK PELAPORAN
                  </th>
                  <th className={`${table.table__head_col} text-center`}>
                    AKSI
                  </th>
                </tr>
              ) : (
                <tr className={table.table__head_row}>
                  <th className={`${table.table__head_col}`}>
                    ASPEK PENILAIAN
                  </th>
                  <th className={`${table.table__head_col} text-center`}>
                    SKOR
                  </th>
                  <th className={`${table.table__head_col} text-center`}>
                    AKSI
                  </th>
                </tr>
              )
            }
            </thead>
            <tbody>
            {
              item.jenis == 'Laporan Perkebunan' ? (
                <>
                  {
                    laporanPerkebunan.map((items, i) => (
                      <tr key={i}>
                        <td className={`${table.table__body_col}`}>
                          {items.title}
                        </td>
                        <td className={`${table.table__body_col}`}>
                          <span className="text-xs text-[#038575] border rounded border-[#038575] block w-[102px] text-center py-1 mx-auto">Detail</span>
                        </td>
                      </tr>
                    ))
                  }
                </>
              ) : (
                <>
                  {
                    nilaiPerkebunan.map((items, i) => (
                      <tr key={i}>
                        <td className={`${table.table__body_col}`}>
                          {items.title}
                        </td>
                        <td className={`${table.table__body_col}`}>
                          <span className="flex justify-center items-center text-center w-full block bg-[#E9EDF5] text-xs rounded w-[39px] h-5 mx-auto">
                            {items.skor < 1 ? '-' : items.skor}
                          </span>
                        </td>
                        <td className={`${table.table__body_col}`}>
                          <span className="text-xs text-[#038575] border rounded border-[#038575] block w-[102px] text-center py-1 mx-auto">Detail</span>
                        </td>
                      </tr>
                    ))
                  }
                </>
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const MasterBasisDataPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [dataDtwControl, setDataDtwControl] = useState(null);
  const [dataMeta, setDataMeta] = useState();
  const [searchField, setSearchField] = useState('');
  const [keywordSearch, setKeywordSearch] = useState('');
  const [limit, setLimit] = useState(10);
  const [dataItem, setDataItem] = useState(null);

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

  useEffect(() => {
    eventBus.on("detilApply", (data, dt) =>
      setDataItem(data)
    );
    return function cleanup () {
      eventBus.remove("detilApply");
    }
  },[])

  const closeDisplay = (dt) => {
    console.log(dt);
  };

  const handleDownloadData = async () => {
    try {
      const res = await axiosInstance.get('/dtw-control/v1/generate-excel');
      if (res.data.status == 'success') {
        window.open(res.data.data.excel, '_blank');
      }
    } catch (error) {
      enqueueSnackbar(error.message, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        content: (key, message) => (
          <CustomComponent
            id={key}
            message={message}
            variant="error"
            title="Download Gagal"
          />
        ),
      });
    }
  };

  return (
    <>
      <Page sidebar={false} backdrop adminMode>
        <div className="bg-white">
          <div className="items-center justify-between py-6 px-8">
            <div>
              <BreadCrumbs
                links={[
                  {
                    path: '/user/master-basis-data',
                    title: 'Master Basis Data',
                  },
                ]}
              />
              <div className="mt-3 text-2xl font-semibold">Master Basis Data</div>
            </div>
          </div>
          <div className="items-center gap-3">
            <MasterBasisData/>
          </div>
        </div>
      </Page>
      {
        dataItem != null ? (
          <Detail item={dataItem} closeDisplay={closeDisplay}/>
        ) : (
          <></>
        )
      }
    </>
  );
};

export default MasterBasisDataPage;
