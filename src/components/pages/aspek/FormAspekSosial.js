import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormAspekSosial = () => {
  const [isError, setIsError] = useState(false);

  ////////////////////////// PAJAK RESTRIBUSI ////////////////////////////////

  const [pajakRestribusi, setPajakRestribusi] = useState([
    [ {'title':'Jenis Pajak/Retribusi','type':'text','placeholder':'Jenis Pajak/Retrbusi','value':''}, {'title':'Nilai (Rp)','placeholder':'Nilai Pajak/Retribusi','type':'text','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]
  ])

  function handleBtnAddPajakRestribusi() {
    setPajakRestribusi([...pajakRestribusi,[ {'title':'Jenis Pajak/Retribusi','type':'text','placeholder':'Jenis Pajak/Retrbusi','value':''}, {'title':'Nilai (Rp)','placeholder':'Nilai Pajak/Retribusi','type':'text','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]])
  }

  function pajakRestribusiRemoveLabel(i) {
    setPajakRestribusi(pajakRestribusi.filter((item, idx) => idx != i))
  }

  function pajakRestribusiChange(e, index, index2) {
    let stet = pajakRestribusi
    let set = setPajakRestribusi
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// KAWASAN LINDUNG ////////////////////////////////

  const [kawasanLindung, setKawasanLindung] = useState([
    [ {'title':'Luas Kawasan Lindung (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Dikelola Sejak tahun','placeholder':'YYYY','type':'text','value':''}, {'title':'Usaha Pelestarian','type':'textarea','placeholder':'Tulis usaha pelestarian yang dilakukan.','value':''} ]
  ])

  function kawasanLindungChange(e, index, index2) {
    let stet = kawasanLindung
    let set = setKawasanLindung
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// KONSERVASI ////////////////////////////////

  const [konservasi, setKonservasi] = useState([
    [ {'title':'Jenis Kegiatan Konservasi','type':'text','placeholder':'Jenis Pajak/Retrbusi','value':''}, {'title':'Luas (Ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]
  ])

  function handleBtnAddKonservasi() {
    setKonservasi([...konservasi,[ {'title':'Jenis Kegiatan Konservasi','type':'text','placeholder':'Jenis Pajak/Retrbusi','value':''}, {'title':'Luas (Ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]])
  }

  function konservasiRemoveLabel(i) {
    setKonservasi(konservasi.filter((item, idx) => idx != i))
  }

  function konservasiChange(e, index, index2) {
    let stet = konservasi
    let set = setKonservasi
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// PENGAWASAN LINGKUNGAN ////////////////////////////////

  const [pengawasan, setPengawasan] = useState([
    [ {'title':'Masalah Lingkungan','type':'text','placeholder':'Jenis Masalah Lingkungan','value':''}, {'title':'Waktu kejadian','placeholder':'DD/MM/YYYY','type':'text','value':''}, {'title':'Frekuensi (kali)','type':'text','placeholder':'Jumlah','value':''}, {'title':'Upaya Penyelesaian','type':'text','placeholder':'Deskripsi Upaya','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]
  ])

  function handleBtnAddPengawasan() {
    setPengawasan([...pengawasan,[ {'title':'Masalah Lingkungan','type':'text','placeholder':'Jenis Masalah Lingkungan','value':''}, {'title':'Waktu kejadian','placeholder':'DD/MM/YYYY','type':'text','value':''}, {'title':'Frekuensi (kali)','type':'text','placeholder':'Jumlah','value':''}, {'title':'Upaya Penyelesaian','type':'text','placeholder':'Deskripsi Upaya','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]])
  }

  function pengawasanRemoveLabel(i) {
    setPengawasan(pengawasan.filter((item, idx) => idx != i))
  }

  function pengawasanChange(e, index, index2) {
    let stet = pengawasan
    let set = setPengawasan
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// KEMITRAAN USAHA ////////////////////////////////

  const [kemitraan, setKemitraan] = useState([
    [ {'title':'Nama Kelompok Tani','type':'text','placeholder':'Nama Poktan','value':''}, {'title':'Nomor','placeholder':'Nomor','type':'text','value':''}, {'title':'Waktu Perjanjian','type':'text','placeholder':'DD/MM/YYYY','value':''}, {'title':'Lamanya perjanjian','type':'text','placeholder':'Durasi','value':''}, {'title':'Jenis perjanjian','type':'text','placeholder':'Jenis Perjanjian','value':''} ]
  ])

  function handleBtnAddKemitraan() {
    setKemitraan([...kemitraan,[ {'title':'Nama Kelompok Tani','type':'text','placeholder':'Nama Poktan','value':''}, {'title':'Nomor','placeholder':'Nomor','type':'text','value':''}, {'title':'Waktu Perjanjian','type':'text','placeholder':'DD/MM/YYYY','value':''}, {'title':'Lamanya perjanjian','type':'text','placeholder':'Durasi','value':''}, {'title':'Jenis perjanjian','type':'text','placeholder':'Jenis Perjanjian','value':''} ]])
  }

  function kemitraanRemoveLabel(i) {
    setKemitraan(kemitraan.filter((item, idx) => idx != i))
  }

  function kemitraanChange(e, index, index2) {
    let stet = kemitraan
    let set = setKemitraan
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// OTHER FUNCTION ////////////////////////////////

  const [btnValid, setBtnValid] = useState(false)

  const router = useRouter()

  const storeData = preventDefault(() => {
    localStorage.setItem("dataSubmit", JSON.stringify(dataSubmit));
    router.push({
      pathname: "/beranda/laporan/konfirmasi"
    })
  })

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <form>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Pajak dan Retribusi</span>

          <div className="flex flex-col">
            {
              pajakRestribusi.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => pajakRestribusiRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => pajakRestribusiChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddPajakRestribusi}>
            + Tambah Jenis Pajak dan Retribusi Lainnya
          </div>
        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Kawasan Lindung (Hutan Lindung, Sungai, Danau, dsb.)</span>

          <div className="flex flex-col">
            {
              kawasanLindung.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => kawasanLindungChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>
        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Konservasi</span>

          <div className="flex flex-col">
            {
              konservasi.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => konservasiRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => konservasiChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddKonservasi}>
            + Tambah Jenis Pajak dan Retribusi Lainnya
          </div>
        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Pengawasan Lingkungan</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Perjanjian Kerjasama</p>

          <div className="flex flex-col mt-3">
            {
              kemitraan.map((items, i) => (
                <div className={`${mng["base__formlabel_unique4"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => kemitraanRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => kemitraanChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddKemitraan}>
            + Tambah Data Jenis Tanaman
          </div>
        </div>

        <div className={`${["mng.base__formsection"]} border-b-0`}>
          <span className={mng.base__subtitle}>Kemitraan Usaha Dengan Petani Perkebunan Rakyat</span>

          <div className="flex flex-col">
            {
              pengawasan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => pengawasanRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => pengawasanChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddPengawasan}>
            + Tambah Jenis Pajak dan Retribusi Lainnya
          </div>
        </div>

        <div className='flex justify-end items-center mt-9 pt-0.5'>
          {/*
            <div className={`${mng["base__btnclear"]} ${"mt-1"}`} onClick={clearData}>
              <span className="ml-1.5">Clear data</span>
            </div>
          */}

          <button className={`${mng["base__btnsimpan"]} ${"float-right mt-1"}`} onClick={storeData} disabled={!btnValid}>
            Simpan dan Lanjutkan
          </button>
        </div>

      </form>
    </>
  )
};

export default FormAspekSosial;
