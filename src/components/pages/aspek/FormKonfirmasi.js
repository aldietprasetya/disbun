import React, { useState, useRef } from 'react';
import Image from 'next/image'
import { useReactToPrint } from 'react-to-print';
import mng from '../../../styles/Managemen.module.scss'
import { ComponentToPrint } from './print';

const konfirmasi = (props) => {

  const componentRef = useRef();
  const handleBtnPreview = useReactToPrint({
    content: () => componentRef.current,
  });

  function handleBtnDraft() {
    alert('Simpan di Draft')
  }
  function handleBtnAjukan() {
    alert('Ajukan')
  }

  return (
    <>
      <p className='mt-10'>
        Dengan mengisi laporan perkebunan di atas, Anda mengakui kebenaran data usaha perkebunan yang akan diserahkan pada Dinas Perkebunan Provinsi Jawa Barat.<br/><br/>
        Apabila Anda belum yakin untuk melakukan pengiriman laporan sila pilih opsi Simpan di Draft, jika sebaliknya sila pilih opsi Ajukan. Anda dapat melihat status pengajuan Laporan Perkebunan melalui Menu Master Basis Data. Klik Lihat Preview Laporan untuk melihat tampilan Laporan Perkebunan dalam bentuk PDF.<br/><br/>
        Terima kasih.
      </p>
      <div className='flex justify-end items-center mt-9 pt-0.5'>
        <button className={`${mng["base__btnpreview"]} ${"mt-1"}`} onClick={handleBtnPreview}>
          <Image src="/icon/icon-export.svg" alt="Export Icon" width={16} height={16} />
          <span className="ml-1.5">Lihat Preview Laporan</span>
        </button>
        <button className={`${mng["base__btndraft"]} ${"mt-1"}`} onClick={handleBtnDraft}>
          Simpan di Draft
        </button>
        <button className={`${mng["base__btnajukan"]} ${"mt-1"}`} onClick={handleBtnAjukan}>
          Ajukan
        </button>
      </div>


      <ComponentToPrint ref={componentRef} />
        <div className='absolute top-0 opacity-0 z-0 scale-0'>
        <ComponentToPrint ref={componentRef} />
        </div>
    </>
  );
};

export default konfirmasi;
