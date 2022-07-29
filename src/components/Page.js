import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './sidebar/Sidebar';
import StickyBox from "react-sticky-box";
import Head from 'next/head';
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

  return (
    <div className="w-full fixed h-full block z-10 top-0 left-0 bg-black/[.4]">
      <div className="w-full h-full absolute z-10"></div>
      <div className="w-[480px] bg-white ml-auto h-full relative z-20 pl-6 pr-10 py-4">
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
            <span className="text-xs font-semibold ml-2">{item.jenis}</span>
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
        <div className="border-b border-[#E9EDF5] py-4">
          <div className="text-[#3267E3] mb-3">Data Laporan Perkebunan</div>
          <table className={table.table}>
            <thead className={table.table__head}>
              <tr className={table.table__head_row}>
                <th className={`${table.table__head_col}`}>
                  ASPEK PELAPORAN
                </th>
                <th className={`${table.table__head_col} text-center`}>
                  AKSI
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${table.table__body_col}`}>
                  Aspek Umum
                </td>
                <td className={`${table.table__body_col}`}>
                  <span className="text-xs text-[#038575] border rounded border-[#038575] block w-[102px] text-center py-1 mx-auto">Detail</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Page = ({
  children,
  sidebar = true,
  backdrop,
  navListSidebar,
  sidebarWithIcon,
  sidebarOnePage,
  onChangeSidebar,
  isActiveSidebar,
  isActiveConfirmPage,
  onChangeSidebarConfirm,
  backdropHeight = 'h-[50%]',
  isInfografis,
  adminMode,
}) => {
  const [dataItem, setDataItem] = useState(null);

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

  return (
    <div className="relative h-screen overflow-x-hidden  bg-gray-100 ">
      <Head>
        <title>Dinas Pekebunan</title>
        <meta name="description" content="ini test dashboard" />
        <link rel="icon" href="/favicondis.ico" />
      </Head>
      <Navbar backdrop={isInfografis ? false : true} />
      <div className="relative flex bg-gray-100 min-h-screen">
        <div
          className={`${
            backdrop ? 'block' : 'hidden'
          } ${adminMode ? 'h-[260px]' : 'h-[340px]'} fixed z-0 w-full ${backdropHeight}`}
        >
          <img
            src="/images/background-page.png"
            className="h-full w-full object-cover"
          />
        </div>
        {sidebar ? (
          <div className="container mx-20 mt-[100px] mb-5 flex justify-between min-h-[85vh] text-sm mx-auto flex items-start">
            <StickyBox offsetTop={100}>
              <Sidebar
                navList={navListSidebar}
                icon={sidebarWithIcon}
                onePage={sidebarOnePage}
                handleChangePath={onChangeSidebar}
                isActive={isActiveSidebar}
                isActiveConfirm={isActiveConfirmPage}
                handleChangePathConfirm={onChangeSidebarConfirm}
              />
            </StickyBox>
            <div className="w-[calc(100%-280px)] flex min-h-full bg-white px-10 py-6 ml-auto">
              {children}
            </div>
          </div>
        ) : (
          <div
            className={`container mx-auto ${
              backdrop ? 'z-[1] my-[96px]' : 'pt-[90px]'
            } flex-1 text-sm`}
          >
            {children}
          </div>
        )}
      </div>
      {
        dataItem != null ? (
          <Detail item={dataItem} closeDisplay={closeDisplay}/>
        ) : (
          <></>
        )
      }
      <Footer />
    </div>
  );
};

export default Page;
