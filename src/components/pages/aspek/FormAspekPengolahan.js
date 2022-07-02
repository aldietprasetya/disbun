import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}


const FormAspekPengolahan = () => {
  const [isError, setIsError] = useState(false);

  ////////////////////////// Jenis dan Kapasitas ////////////////////////////////

  const [jenisKapasitas, setJenisKapasitas] = useState([
    [ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis UPH','type':'text','placeholder':'Jenis UPH','value':''}, {'title':'Jumlah (unit)','type':'text','placeholder':'Luas/Volume','value':''}, {'title':'Luas bangunan (m2)','type':'text','placeholder':'Luas','value':''}, ] }, { 'sectionTitle': 'Total Kapasitas', 'sectionData': [ {'title':'Terpasang (kg/hari)','type':'text','placeholder':'Jumlah','value':''}, {'title':'terpakai (kg/hari)','type':'text','placeholder':'Jumlah','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}, ] }, ]
  ])

  function handleBtnAddJenisKapasitas() {
    setJenisKapasitas([...jenisKapasitas,[ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis UPH','type':'text','placeholder':'Jenis UPH','value':''}, {'title':'Jumlah (unit)','type':'text','placeholder':'Luas/Volume','value':''}, {'title':'Luas bangunan (m2)','type':'text','placeholder':'Luas','value':''}, ] }, { 'sectionTitle': 'Total Kapasitas', 'sectionData': [ {'title':'Terpasang (kg/hari)','type':'text','placeholder':'Jumlah','value':''}, {'title':'terpakai (kg/hari)','type':'text','placeholder':'Jumlah','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}, ] }, ]])
  }

  function jenisKapasitasRemoveLabel(i) {
    setJenisKapasitas(jenisKapasitas.filter((item, idx) => idx != i))
  }

  function jenisKapasitasChange(e, index, index2, index3) {
    let stet = jenisKapasitas
    let set = setJenisKapasitas
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

  ////////////////////////// Sumber Bahan Baku ////////////////////////////////

  const [bahanBaku, setBahanBaku] = useState([[ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis UPH','type':'text','placeholder':'Jenis Tanaman','value':'','isOpt':false}, ] }, { 'sectionTitle': 'Asal Bahan Baku', 'sectionData': [ {'title':'Kab/Kota','type':'text','placeholder':'Pilih Kab/Kota','value':'','isOpt':true}, {'title':'Volume','type':'text','placeholder':'Volume','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ] }, ]])

  function handleBtnAddJenisBahanBaku() {
    setBahanBaku([...bahanBaku,[ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis UPH','type':'text','placeholder':'Jenis Tanaman','value':'','isOpt':false}, ] }, { 'sectionTitle': 'Asal Bahan Baku', 'sectionData': [ {'title':'Kab/Kota','type':'text','placeholder':'Pilih Kab/Kota','value':'','isOpt':true}, {'title':'Volume','type':'text','placeholder':'Volume','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ] }, ]])
  }

  function bahanBakuRemoveLabel(i) {
    setBahanBaku(bahanBaku.filter((item, idx) => idx != i))
  }

  function bahanBakuChange(e, index, index2, index3) {
    let stet = bahanBaku
    let set = setBahanBaku
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

  ////////////////////////// Pemasaran ////////////////////////////////

  const [pemasaran, setPemasaran] = useState([
    [ {'title':'Komoditas','placeholder':'Jenis Komoditas','type':'text','value':'','isOpt':false}, {'title':'Jenis Mutu','placeholder':'Jenis Mutu','type':'text','value':'','isOpt':false}, {'title':'Lokal/Ekspor','type':'text','placeholder':'Pilih Jenis Pemasaran','value':'','isOpt':true}, {'title':'Biaya Produksi (Rp/Kg)','type':'text','placeholder':'Nilai Produksi','value':'','isOpt':false}, {'title':'Harga Jual (Rp/Kg)','type':'text','placeholder':'Nilai Jual','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
  ])

  function handleBtnAddPemasaran() {
    setPemasaran([...pemasaran,[ {'title':'Komoditas','placeholder':'Jenis Komoditas','type':'text','value':'','isOpt':false}, {'title':'Jenis Mutu','placeholder':'Jenis Mutu','type':'text','value':'','isOpt':false}, {'title':'Lokal/Ekspor','type':'text','placeholder':'Pilih Jenis Pemasaran','value':'','isOpt':true}, {'title':'Biaya Produksi (Rp/Kg)','type':'text','placeholder':'Nilai Produksi','value':'','isOpt':false}, {'title':'Harga Jual (Rp/Kg)','type':'text','placeholder':'Nilai Jual','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  function pemasaranRemoveLabel(i) {
    setPemasaran(pemasaran.filter((item, idx) => idx != i))
  }

  function pemasaranChange(e, index, index2) {
    let stet = pemasaran
    let set = setPemasaran
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

  ////////////////////////// Jenis Mutu Akhir ////////////////////////////////

  const [mutu, setMutu] = useState([
    [
      {
        'sectionTitle': '',
        'sectionData': [
          {'title':'Jenis UPH','type':'text','placeholder':'Jenis Tanaman','value':''}
        ]
      },
      {
        'sectionTitle': 'Asal Bahan Baku (Kg)',
        'sectionData': [
          {'title':'Sendiri (Kg)','type':'text','placeholder':'Jumlah','value':''},
          {'title':'Kebun Seinduk (Kg)','type':'text','placeholder':'Jumlah','value':''},
          {'title':'Beli (kg)','type':'text','placeholder':'Jumlah','value':''},
        ]
      },
      {
        'sectionTitle': 'Hasil Olah',
        'sectionData': [
          {'title':'Jenis Mutu Akhir','type':'text','placeholder':'Jumlah','value':''},
          {'title':'Volume Produksi (kg)','type':'text','placeholder':'Volume','value':''}
        ]
      },
    ]
  ])

  function handleBtnAddMutu() {
    setMutu([...mutu,[
      {
        'sectionTitle': '',
        'sectionData': [
          {'title':'Jenis UPH','type':'text','placeholder':'Jenis Tanaman','value':''}
        ]
      },
      {
        'sectionTitle': 'Asal Bahan Baku (Kg)',
        'sectionData': [
          {'title':'Sendiri (Kg)','type':'text','placeholder':'Jumlah','value':''},
          {'title':'Kebun Seinduk (Kg)','type':'text','placeholder':'Jumlah','value':''},
          {'title':'Beli (kg)','type':'text','placeholder':'Jumlah','value':''},
        ]
      },
      {
        'sectionTitle': 'Hasil Olah',
        'sectionData': [
          {'title':'Jenis Mutu Akhir','type':'text','placeholder':'Jumlah','value':''},
          {'title':'Volume Produksi (kg)','type':'text','placeholder':'Volume','value':''}
        ]
      },
    ]])
  }

  function mutuRemoveLabel(i) {
    setMutu(mutu.filter((item, idx) => idx != i))
  }

  function mutuChange(e, index, index2, index3) {
    let stet = mutu
    let set = setMutu
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

  ////////////////////////// Hasil Olah ////////////////////////////////

  const [olah, setOlah] = useState([
    [
      {
        'sectionTitle': 'Hasil Olah',
        'sectionData': [
          {'title':'Jenis Mutu Akhir','type':'text','placeholder':'Jumlah','value':''},
          {'title':'Volume Produksi (kg)','type':'text','placeholder':'Volume','value':''},
        ]
      },
    ]
  ])

  function handleBtnAddOlah() {
    setOlah([...olah,[
      {
        'sectionTitle': 'Hasil Olah',
        'sectionData': [
          {'title':'Jenis Mutu Akhir','type':'text','placeholder':'Jumlah','value':''},
          {'title':'Volume Produksi (kg)','type':'text','placeholder':'Volume','value':''},
        ]
      },
    ]])
  }

  function olahRemoveLabel(i) {
    setOlah(olah.filter((item, idx) => idx != i))
  }

  function olahChange(e, index, index2, index3) {
    let stet = olah
    let set = setOlah
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
          <span className={mng.base__subtitle}>Jenis dan Kapasitas</span>

          <div className="flex flex-col">
            {
              jenisKapasitas.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => jenisKapasitasRemoveLabel(i)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]} ${mng["base__formlabel_twin-sec2-lastfull"]}`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => jenisKapasitasChange(e, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddJenisKapasitas}>
            + Tambah Jenis Penanaman Baru
          </div>
        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Sumber Bahan Baku</p>

          <div className="flex flex-col">
            {
              bahanBaku.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => bahanBakuRemoveLabel(i)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_unique3-secnormal"]} ${mng["base__formlabel_unique3-firstfull-one"]} ${mng["base__formlabel_unique3-firstfull"]}`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_unique3"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <>
                              {
                                child.isOpt ? (
                                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                                    <InputForm
                                      titleForm={child.title}
                                      titleName={child.title}
                                      onChange={(e) => bahanBakuChange(e, i, ii)}
                                      type="text"
                                      placeholder={child.placeholder}
                                      className={`${
                                        isError && 'border-primary-red-1 bg-primary-red-2'
                                      }`}
                                      selectionArea={true}
                                    />
                                  </label>
                                ) : (
                                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                                    <span className={mng.base__inputtitle}>{child.title}</span>
                                    <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => bahanBakuChange(e, i, ii, iii)}/>
                                  </label>
                                )
                              }
                            </>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddJenisBahanBaku}>
            + Tambah Jenis Penanaman Baru
          </div>
        </div>

        <div className={`${["mng.base__formsection"]} border-b-0`}>
          <span className={mng.base__subtitle}>Jenis Mutu Akhir</span>

          <div className="flex flex-col">
            {
              mutu.map((items, i) => (
                <div className={`${mng["base__formlabel_unique5"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => mutuRemoveLabel(i)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_unique5-condition"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_unique5"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => mutuChange(e, i, ii, iii)}/>
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
          <div className={`${mng["base__btn"]} mb-6`} onClick={handleBtnAddMutu}>
            + Tambah Hasil Olah Lainnya
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddMutu}>
            + Tambah Jenis Mutu Akhir UPH Lainnya
          </div>
        </div>

        <div className={`${["mng.base__formsection"]} border-b-0`}>
          <span className={mng.base__subtitle}>Pemasaran</span>

          <div className="flex flex-col">
            {
              pemasaran.map((items, i) => (
                <div className={`${mng["base__formlabel_custom-diamond"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => pemasaranRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => pemasaranChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddPemasaran}>
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
  )
};

export default FormAspekPengolahan;
