import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormAspekKebun = () => {
  const [isError, setIserror] = useState(false);

  ////////////////////////// PEMANFAATAN LAHAN HGU ////////////////////////////////

  const [tanaman, setTanaman] = useState([
    [ {'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':'','isOpt':false}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
  ])

  function handleBtnAddTanaman() {
    setTanaman([...tanaman,[ {'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':'','isOpt':false}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  function tanamanRemoveLabel(i) {
    setTanaman(tanaman.filter((item, idx) => idx != i))
  }

  function tanamanChange(e, index, index2) {
    let stet = tanaman
    let set = setTanaman
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

  ////////////////////////// PEMBIBITAN ////////////////////////////////

  const [bibit, setBibit] = useState([
    [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
  ])

  function handleBtnAddBibit() {
    setBibit([...bibit,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  function bibitRemoveLabel(i) {
    setBibit(bibit.filter((item, idx) => idx != i))
  }

  function bibitChange(e, index, index2) {
    let stet = bibit
    let set = setBibit
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

  ////////////////////////// KEBUN INDUK ENTRES ////////////////////////////////

  const [kebun, setKebun] = useState([
    [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
  ])

  function handleBtnAddKebun() {
    setKebun([...kebun,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  function kebunRemoveLabel(i) {
    setKebun(kebun.filter((item, idx) => idx != i))
  }

  function kebunChange(e, index, index2) {
    let stet = kebun
    let set = setKebun
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

  ////////////////////////// EMPLASMEN ////////////////////////////////

  const [emplasmen, setEmplasmen] = useState([
    [ {'title':'Jenis Emplasmen','placeholder':'Pilih Jenis Emplasmen','type':'text','value':'','isOpt':true}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]
  ])

  function handleBtnAddEmplasmen() {
    setEmplasmen([...emplasmen,[ {'title':'Jenis Emplasmen','placeholder':'Pilih Jenis Emplasmen','type':'text','value':'','isOpt':true}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]])
  }

  function emplasmenRemoveLabel(i) {
    setEmplasmen(emplasmen.filter((item, idx) => idx != i))
  }

  function emplasmenChange(e, index, index2) {
    let stet = emplasmen
    let set = setEmplasmen
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

  ////////////////////////// JALAN JEMBATAN ////////////////////////////////

  const [jalanJembatan, setJalanJembatan] = useState([
    [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
  ])

  function handleBtnAddJalanJembatan() {
    setJalanJembatan([...jalanJembatan,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  function jalanJembatanRemoveLabel(i) {
    setJalanJembatan(jalanJembatan.filter((item, idx) => idx != i))
  }

  function jalanJembatanChange(e, index, index2) {
    let stet = jalanJembatan
    let set = setJalanJembatan
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

  ////////////////////////// AREAL CADANGAN ////////////////////////////////

  const [cadangan, setCadangan] = useState([
    [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
  ])

  function handleBtnAddCadangan() {
    setCadangan([...cadangan,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  function cadanganRemoveLabel(i) {
    setCadangan(cadangan.filter((item, idx) => idx != i))
  }

  function cadanganChange(e, index, index2) {
    let stet = cadangan
    let set = setCadangan
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

  ////////////////////////// AREAL KONSERVASI ////////////////////////////////

  const [konservasi, setKonservasi] = useState([
    [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
  ])

  function handleBtnAddKonservasi() {
    setKonservasi([...konservasi,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
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

  ////////////////////////// Areal Tidak Mungkin Ditanami (TMD) ////////////////////////////////

  const [tmd, setTmd] = useState([
    [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
  ])

  function handleBtnAddTmd() {
    setKonservasi([...konservasi,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  function tmdRemoveLabel(i) {
    setKonservasi(konservasi.filter((item, idx) => idx != i))
  }

  function tmdChange(e, index, index2) {
    let stet = tmd
    let set = setTmd
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

  ////////////////////////// Areal Sawah ////////////////////////////////

  const [sawah, setSawah] = useState([
    [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
  ])

  function handleBtnAddSawah() {
    setSawah([...sawah,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  function sawahRemoveLabel(i) {
    setSawah(sawah.filter((item, idx) => idx != i))
  }

  function sawahChange(e, index, index2) {
    let stet = sawah
    let set = setSawah
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

  ////////////////////////// Pihak Ketiga ////////////////////////////////

  const [pihakKetiga, setPihakKetiga] = useState([
    [ {'title':'Jenis Pihak Ketiga','placeholder':'Pilih Jenis Pihak Ketiga','type':'text','value':'','isOpt':true}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]
  ])

  function handleBtnAddPihakKetiga() {
    setPihakKetiga([...pihakKetiga,[ {'title':'Jenis Pihak Ketiga','placeholder':'Pilih Jenis Pihak Ketiga','type':'text','value':'','isOpt':true}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]])
  }

  function pihakKetigaRemoveLabel(i) {
    setPihakKetiga(pihakKetiga.filter((item, idx) => idx != i))
  }

  function pihakKetigaChange(e, index, index2) {
    let stet = pihakKetiga
    let set = setPihakKetiga
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

  ////////////////////////// Lain-lain ////////////////////////////////

  const [lainnya, setLainnya] = useState([
    [ {'title':'Jenis Areal Lain-lain','placeholder':'Jenis Areal','type':'text','value':'','isOpt':false}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]
  ])

  function handleBtnAddLainnya() {
    setLainnya([...lainnya,[ {'title':'Jenis Areal Lain-lain','placeholder':'Jenis Areal','type':'text','value':'','isOpt':false}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]])
  }

  function lainnyaRemoveLabel(i) {
    setLainnya(lainnya.filter((item, idx) => idx != i))
  }

  function lainnyaChange(e, index, index2) {
    let stet = lainnya
    let set = setLainnya
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

  ////////////////////////// Topografi ////////////////////////////////

  const [topografi, setTopografi] = useState([
    [ { 'sectionTitle': 'Lereng Datar (0-8 %)', 'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Landai (8-15 %)', 'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Agak Curam (15-24 %)', 'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Curam (24-45 %)', 'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Sangat Curam (>45 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tipe Iklim','type':'text','placeholder':'Tipe Iklim','value':''}, {'title':'Curah Hujan (mm)','type':'text','placeholder':'Jumlah','value':''}, {'title':'Waktu Laporan','type':'text','placeholder':'MM/YYYY','value':''}, ] } ]
  ])

  function handleBtnAddTopografi() {
    setTopografi([...topografi,[ { 'sectionTitle': 'Lereng Datar (0-8 %)', 'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Landai (8-15 %)', 'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Agak Curam (15-24 %)', 'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Curam (24-45 %)', 'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Sangat Curam (>45 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tipe Iklim','type':'text','placeholder':'Tipe Iklim','value':''}, {'title':'Curah Hujan (mm)','type':'text','placeholder':'Jumlah','value':''}, {'title':'Waktu Laporan','type':'text','placeholder':'MM/YYYY','value':''}, ] } ]])
  }

  function topografiRemoveLabel(i) {
    setTopografi(topografi.filter((item, idx) => idx != i))
  }

  function topografiChange(e, index, index2, index3) {
    let stet = topografi
    let set = setTopografi
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.sectionData.forEach((item3, iii) => {
              if (iii == index3) {
                item3.value = value
              }
            });
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// Penanaman Baru ////////////////////////////////

  const [tanamBaru, setTanamBaru] = useState([
    [ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Tahun Tanam','placeholder':'YYYY','type':'text','value':'','isOpt':false}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Jumlah Pohon','type':'text','placeholder':'Jumlah','value':'','isOpt':false} ]
  ])

  function handleBtnAddTanamBaru() {
    setTanamBaru([...tanamBaru,[ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Tahun Tanam','placeholder':'YYYY','type':'text','value':'','isOpt':false}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Jumlah Pohon','type':'text','placeholder':'Jumlah','value':'','isOpt':false} ]])
  }

  function tanamBaruRemoveLabel(i) {
    setTanamBaru(tanamBaru.filter((item, idx) => idx != i))
  }

  function tanamBaruChange(e, index, index2) {
    let stet = tanamBaru
    let set = setTanamBaru
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

  ////////////////////////// Komposisi Tanaman ////////////////////////////////

  const [komposisi, setKomposisi] = useState([
    [ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'TBM (Ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':'','isOpt':false}, {'title':'TM (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'TTR (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false} ]
  ])

  function handleBtnAddKomposisi() {
    setKomposisi([...komposisi,[ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'TBM (Ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':'','isOpt':false}, {'title':'TM (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'TTR (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false} ]])
  }

  function komposisiRemoveLabel(i) {
    setKomposisi(komposisi.filter((item, idx) => idx != i))
  }

  function komposisiChange(e, index, index2) {
    let stet = komposisi
    let set = setKomposisi
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

  ////////////////////////// Pemupukan ////////////////////////////////

  const [pemupukan, setPemupukan] = useState([
    [ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Luas yang Dipupuk (Ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':'','isOpt':false}, {'title':'Jenis pupuk','type':'text','placeholder':'Jenis Pupuk','value':'','isOpt':false}, {'title':'Dosis (kg/Ha)','type':'text','placeholder':'Jumlah Dosis','value':'','isOpt':false}, {'title':'Jumlah pupuk (Kg)','type':'text','placeholder':'Jumlah Pupuk','value':'','isOpt':false} ]
  ])

  function handleBtnAddPemupukan() {
    setPemupukan([...pemupukan,[ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Luas yang Dipupuk (Ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':'','isOpt':false}, {'title':'Jenis pupuk','type':'text','placeholder':'Jenis Pupuk','value':'','isOpt':false}, {'title':'Dosis (kg/Ha)','type':'text','placeholder':'Jumlah Dosis','value':'','isOpt':false}, {'title':'Jumlah pupuk (Kg)','type':'text','placeholder':'Jumlah Pupuk','value':'','isOpt':false} ]])
  }

  function pemupukanRemoveLabel(i) {
    setPemupukan(pemupukan.filter((item, idx) => idx != i))
  }

  function pemupukanChange(e, index, index2) {
    let stet = pemupukan
    let set = setPemupukan
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

  ////////////////////////// Pengendalian Hama Penyakit ////////////////////////////////

  const [hamaKendali, setHamaKendali] = useState([
    [ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':''}, {'title':'Jenis Hama Penyakit','type':'text','placeholder':'Jenis Hama Penyakit','value':''}, {'title':'Luas Serangan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Luas yang dikendalikan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, ] }, { 'sectionTitle': 'Luas Cara Pengendalian', 'sectionData': [ {'title':'Chemical (ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Hayati (ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Mekanis (ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''} ] } ]
  ])

  function handleBtnAddHamaKendali() {
    setHamaKendali([...hamaKendali,[ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':''}, {'title':'Jenis Hama Penyakit','type':'text','placeholder':'Jenis Hama Penyakit','value':''}, {'title':'Luas Serangan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Luas yang dikendalikan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, ] }, { 'sectionTitle': 'Luas Cara Pengendalian', 'sectionData': [ {'title':'Chemical (ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Hayati (ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Mekanis (ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''} ] } ]])
  }

  function hamaKendaliRemoveLabel(i) {
    setHamaKendali(hamaKendali.filter((item, idx) => idx != i))
  }

  function hamaKendaliChange(e, index, index2, index3) {
    let stet = hamaKendali
    let set = setHamaKendali
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.sectionData.forEach((item3, iii) => {
              if (iii == index3) {
                item3.value = value
              }
            });
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// Diversifikasi Usaha Tani ////////////////////////////////

  const [disertifikasi, setDisertifikasi] = useState([
    [ {'title':'Cabang Diversifikasi','placeholder':'Jenis Diversifikasi','type':'text','value':'','isOpt':false}, {'title':'Luas/volume','placeholder':'Luas/Volume','type':'text','value':'','isOpt':false}, {'title':'Produksi (Ton)','type':'text','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'Nilai (Rp)','type':'text','placeholder':'Nilai dalam Rupiah','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]
  ])

  function handleBtnAddDisertifikasi() {
    setDisertifikasi([...disertifikasi,[ {'title':'Cabang Diversifikasi','placeholder':'Jenis Diversifikasi','type':'text','value':'','isOpt':false}, {'title':'Luas/volume','placeholder':'Luas/Volume','type':'text','value':'','isOpt':false}, {'title':'Produksi (Ton)','type':'text','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'Nilai (Rp)','type':'text','placeholder':'Nilai dalam Rupiah','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]])
  }

  function disertifikasiRemoveLabel(i) {
    setDisertifikasi(disertifikasi.filter((item, idx) => idx != i))
  }

  function disertifikasiChange(e, index, index2) {
    let stet = disertifikasi
    let set = setDisertifikasi
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

  ////////////////////////// Produksi dan Produktivitas ////////////////////////////////

  const [produksiProduktivitas, setProduksiProduktivitas] = useState([
    [ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Luas TM (ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':'','isOpt':false}, {'title':'Luas yang dipanen (ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Produksi mentah (kg)','type':'text','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'produksi kering (kg)','type':'text','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'Produktivitas (kg/ha/tahun)','type':'text','placeholder':'Nilai Produktivitas','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]
  ])

  function handleBtnAddProduksiProduktivitas() {
    setProduksiProduktivitas([...produksiProduktivitas,[ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Luas TM (ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':'','isOpt':false}, {'title':'Luas yang dipanen (ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Produksi mentah (kg)','type':'text','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'produksi kering (kg)','type':'text','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'Produktivitas (kg/ha/tahun)','type':'text','placeholder':'Nilai Produktivitas','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]])
  }

  function produksiProduktivitasRemoveLabel(i) {
    setProduksiProduktivitas(produksiProduktivitas.filter((item, idx) => idx != i))
  }

  function produksiProduktivitasChange(e, index, index2) {
    let stet = produksiProduktivitas
    let set = setProduksiProduktivitas
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

          <span className={mng.base__subtitle}>Pemanfaatan Lahan HGU</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tanaman</p>

          <div className="flex flex-col">
            {
              tanaman.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => tanamanRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => tanamanChange(e, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tanamanChange(e, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddTanaman}>
            + Tambah Data Komoditas
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pembibitan</p>
          <div className="flex flex-col mt-3">
            {
              bibit.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => bibitRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => bibitChange(e, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => bibitChange(e, i, ii)}/>
                          </label>
                        )
                      }
                    </>

                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddBibit}>
            + Tambah Data Jenis Tanaman
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Kebun Induk Entres</p>
          <div className="flex flex-col mt-3">
            {
              kebun.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => kebunRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => kebunChange(e, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => kebunChange(e, i, ii)}/>
                          </label>
                        )
                      }
                    </>

                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddKebun}>
            + Tambah Data Jenis Tanaman
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Emplasmen</p>

          <div className="flex flex-col">
            {
              emplasmen.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => emplasmenRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => emplasmenChange(e, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => emplasmenChange(e, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddEmplasmen}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Jalan/Jembatan</p>
          <div className="flex flex-col mt-3">
            {
              jalanJembatan.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => jalanJembatanRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => jalanJembatanChange(e, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => jalanJembatanChange(e, i, ii)}/>
                          </label>
                        )
                      }
                    </>

                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddJalanJembatan}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Areal Cadangan</p>
          <div className="flex flex-col mt-3">
            {
              cadangan.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => cadanganRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => cadanganChange(e, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => cadanganChange(e, i, ii)}/>
                          </label>
                        )
                      }
                    </>

                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddCadangan}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Areal Konservasi</p>
          <div className="flex flex-col mt-3">
            {
              konservasi.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
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
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => konservasiChange(e, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => konservasiChange(e, i, ii)}/>
                          </label>
                        )
                      }
                    </>

                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddKonservasi}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Areal Tidak Mungkin Ditanami (TMD)</p>
          <div className="flex flex-col mt-3">
            {
              tmd.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => tmdRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => tmdChange(e, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tmdChange(e, i, ii)}/>
                          </label>
                        )
                      }
                    </>

                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddTmd}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Areal Sawah</p>
          <div className="flex flex-col mt-3">
            {
              sawah.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => sawahRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => sawahChange(e, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => sawahChange(e, i, ii)}/>
                          </label>
                        )
                      }
                    </>

                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddSawah}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pihak Ketiga</p>

          <div className="flex flex-col">
            {
              pihakKetiga.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => pihakKetigaRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => pihakKetigaChange(e, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => pihakKetigaChange(e, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddPihakKetiga}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Lain-lain</p>

          <div className="flex flex-col">
            {
              lainnya.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => lainnyaRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => lainnyaChange(e, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => lainnyaChange(e, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddLainnya}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Topografi</span>
          <div className="flex flex-col">
            {
              topografi.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => topografiRemoveLabel(i)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`flex flex-wrap`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => topografiChange(e, i, ii, iii)}/>
                            </label>
                          ))
                        }
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))
            }

          </div>

          <div className={mng.base__btn} onClick={handleBtnAddTopografi}>
            + Tambah Data Jenis Cabang Usaha Tani
          </div>

        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Penanaman Baru</span>

          <div className="flex flex-col">
            {
              tanamBaru.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => tanamBaruRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tanamBaruChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddTanamBaru}>
            + Tambah Jenis Penanaman Baru
          </div>
        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Komposisi Tanaman</p>

          <div className="flex flex-col">
            {
              komposisi.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]} ${mng["base__formlabel_unique3-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => komposisiRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => komposisiChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddKomposisi}>
            + Tambah Jenis Penanaman Baru
          </div>
        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pemupukan</p>

          <div className="flex flex-col">
            {
              pemupukan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => pemupukanRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => pemupukanChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddPemupukan}>
            + Tambah Jenis Penanaman Baru
          </div>
        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pengendalian Hama Penyakit</p>

          <div className="flex flex-col">
            {
              hamaKendali.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => hamaKendaliRemoveLabel(i)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_unique3-secnormal"]}`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_unique3"]} ${mng["base__formlabel_unique3-firstfull"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => hamaKendaliChange(e, i, ii, iii)}/>
                            </label>
                          ))
                        }
                        </div>
                      </div>
                    ))
                  }
                </div>
              ))
            }

          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddHamaKendali}>
            + Tambah Jenis Penanaman Baru
          </div>
        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Diversifikasi Usaha Tani</p>

          <div className="flex flex-col">
            {
              disertifikasi.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => disertifikasiRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => disertifikasiChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddDisertifikasi}>
            + Tambah Jenis Penanaman Baru
          </div>
        </div>

        <div className={`${["mng.base__formsection"]} border-b-0`}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Produksi dan Produktivitas</p>

          <div className="flex flex-col">
            {
              produksiProduktivitas.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => produksiProduktivitasRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => produksiProduktivitasChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddProduksiProduktivitas}>
            + Tambah Jenis Penanaman Baru
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
  );
};

export default FormAspekKebun;
