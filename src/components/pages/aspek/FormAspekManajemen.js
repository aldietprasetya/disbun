import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import _ from 'lodash';
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormAspekManajemen = () => {
  const [initialLoad, setInitialLoad] = useState(true)

  ////////////////////////// KOMISARIS ////////////////////////////////
  const [komisaris, setKomisaris] = useState([
    {'title':'Komisaris Utama','placeholder':'Nama Komisaris Utama','value':''},
    {'title':'Komisaris','placeholder':'Nama Komisaris','value':''},
  ])

  function handleBtnAddKomisaris() {
    setKomisaris([...komisaris, {'title':'Komisaris','placeholder':'Nama Komisaris','value':''}])
  }

  function komisarisRemoveLabel(i) {
    setKomisaris(komisaris.filter((item, idx) => idx != i))
  }

  function komisarisChange(e, index) {
    addToRowChange(setKomisaris, komisaris, e, index)
  }

  ////////////////////////// DIREKSI ////////////////////////////////

  const [direksi, setDireksi] = useState([
    {'title':'Direktur Utama','placeholder':'Nama Direktur Utama','value':''},
    {'title':'Direktur','placeholder':'Nama Direktur','value':''},
  ])

  function handleBtnAddDirektur() {
    setDireksi([...direksi, {'title':'Direktur','placeholder':'Nama Direktur','value':''}])
  }

  function direkturRemoveLabel(i) {
    setDireksi(direksi.filter((item, idx) => idx != i))
  }

  function direkturChange(e, index) {
    addToRowChange(setDireksi, direksi, e, index)
  }

  ////////////////////////// ADMINISTRASI ////////////////////////////////

  const [administrasi, setAdministrasi] = useState('');

  function administrasiChange(e) {
    setAdministrasi(e.target.value)
  }

  ////////////////////////// TENAGA KERJA ////////////////////////////////

  const [tenagaKerja, setTenagaKerja] = useState([
    {'title':'Administratur','placeholder':'Jumlah','value':''},
    {'title':'Staf','placeholder':'Jumlah','value':''},
    {'title':'Tenaga Kerja Bulanan','placeholder':'Jumlah','value':''},
    {'title':'Tenaga Kerja Harian Tetap','placeholder':'Jumlah','value':''},
    {'title':'Tenaga Kerja Harian Lepas','placeholder':'Jumlah','value':''},
    {'title':'Staf Borongan/Musiman','placeholder':'Jumlah','value':''},
  ])

  function tngKerjaChange(e, index) {
    addToRowChange(setTenagaKerja, tenagaKerja, e, index)
  }
  ////////////////////////// RENCANA INVESTASI ////////////////////////////////

  const [rencanaInvest, setRencanaInvest] = useState([
    [
      {'title':'Kegiatan Investasi/Eksploitasi','type':'text','placeholder':'Nama Kegiatan','value':''},
      {'title':'Tahun','placeholder':'YYYY','type':'number','value':''},
      {'title':'Volume','type':'number','placeholder':'Luas Lahan/Unit Barang','value':''},
      {'title':'Nilai Biaya','type':'number','placeholder':'Masukkan Nilai Biaya','value':''}
    ],
  ])

  function handleBtnAddRencanaInvest() {
    setRencanaInvest([...rencanaInvest,
      [
        {'title':'Kegiatan Investasi/Eksploitasi','type':'text','placeholder':'Nama Kegiatan','value':''},
        {'title':'Tahun','placeholder':'YYYY','type':'number','value':''},
        {'title':'Volume','type':'number','placeholder':'Luas Lahan/Unit Barang','value':''},
        {'title':'Nilai Biaya','type':'number','placeholder':'Masukkan Nilai Biaya','value':''}
      ]
    ])
  }

  function investasiRemoveLabel(i) {
    setRencanaInvest(rencanaInvest.filter((item, idx) => idx != i))
  }

  function investasiChange(e, index, index2) {
    let stet = rencanaInvest
    let set = setRencanaInvest
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

  function addToRowChange(set, stet, e, index) {
    const { value } = e.target;
    const list = [...stet];

    list[index] = { ...list[index], value };
    set(list);
  }

  function checkEachSec(data, cond) {
    let condition = true
    data.forEach((item, i) => {
      if (
        Object.keys(item).some(function(obj) {
          return item[obj] == '' || item[obj] == null;
        })
      ) {
        condition = false
      } else {
        condition = true
      }
    });
    return condition
  }

  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  var dataSubmit = {}

  useEffect(() => {

    let komisarisWasNull = checkEachSec(komisaris)
    let direksiWasNull = checkEachSec(direksi)
    let administrasiWasNull = (administrasi == '' ? false : true)
    let tenagaKerjaWasNull = checkEachSec(tenagaKerja)
    let rencanaInvestWasNull = false

    rencanaInvest.forEach((item, i) => {
      item.forEach((item2, ii) => {
        if (
          Object.keys(item2).some(function(obj) {
            return item2[obj] == '';
          })
        ) {
          rencanaInvestWasNull = false
        } else {
          rencanaInvestWasNull = true
        }
      });
    })

    if (komisarisWasNull && direksiWasNull && administrasiWasNull && tenagaKerjaWasNull && rencanaInvestWasNull) {
      setBtnValid(true)
    } else {
      setBtnValid(false)
    }

    if (initialLoad) {
      let retrievedObject = JSON.parse(localStorage.getItem('dataSubmit'));

      if (!_.isEmpty(retrievedObject)) {
        setAdministrasi(retrievedObject.administrasi)
        setKomisaris(retrievedObject.komisaris)
        setDireksi(retrievedObject.direksi)
        setTenagaKerja(retrievedObject.tenagaKerja)
        setRencanaInvest(retrievedObject.rencanaInvest)
      }
    }
    setInitialLoad(false)

    dataSubmit = {
      'komisaris': komisaris,
      'direksi':direksi,
      'administrasi':administrasi,
      'tenagaKerja':tenagaKerja,
      'rencanaInvest':rencanaInvest,
    }
  }, [komisaris,direksi,administrasi,tenagaKerja,rencanaInvest, handleBtnAddDirektur, handleBtnAddKomisaris, handleBtnAddRencanaInvest, investasiRemoveLabel, direkturRemoveLabel, komisarisRemoveLabel])

  const router = useRouter()

  const storeData = preventDefault(() => {
    localStorage.setItem("dataSubmit", JSON.stringify(dataSubmit));
    router.push({
      pathname: "/beranda/laporan/konfirmasi"
    })
  })

  function clearData() {
    localStorage.setItem("dataSubmit", JSON.stringify({}));
    router.push({
      pathname: "#"
    })
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <form>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Struktur Organisasi dan Nama Pengelola</span>
          <p className={mng.base__formtitle}>Susunan Komisaris</p>
          {
            komisaris.map((item, i) => (
              <label className={mng.base__formlabel} key={i}>
                <span className={mng.base__inputtitle}>
                  {item.title}
                  {
                    i > 1 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondel"]}`} onClick={() => komisarisRemoveLabel(i)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                </span>
                <input className={mng.base__inputbase} type="text" placeholder={item.placeholder} value={item.value} onChange={(e) => komisarisChange(e, i)}/>
              </label>
            ))
          }
          <div className={mng.base__btn} onClick={handleBtnAddKomisaris}>
            + Tambah Komisaris
          </div>
        </div>

        <div className={mng.base__formsection}>
          <p className={mng.base__formtitle}>Susunan Direksi</p>
          {
            direksi.map((item, i) => (
              <label className={mng.base__formlabel} key={i}>
                <span className={mng.base__inputtitle}>
                  {item.title}
                  {
                    i > 1 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondel"]}`} onClick={() => direkturRemoveLabel(i)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                </span>
                <input className={mng.base__inputbase} type="text" placeholder={item.placeholder} value={item.value} onChange={(e) => direkturChange(e, i)}/>
              </label>
            ))
          }
          <div className={mng.base__btn} onClick={handleBtnAddDirektur}>
            + Tambah Direktur
          </div>
        </div>

        <div className={mng.base__formsection}>
          <p className={mng.base__formtitle}>Susunan Administrasi</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Administratur/Manager</span>
            <input type="text" placeholder="Nama Administratur/Manager" value={administrasi} className={mng.base__inputbase} onChange={(e) => administrasiChange(e)}/>
          </label>
        </div>

        <div className={mng.base__formsection}>
          <p className={mng.base__formtitle}>Tenaga Kerja</p>

          <div className="flex flex-row flex-wrap">

            {
              tenagaKerja.map((item, i) => (
                <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_tris"]}`} key={i}>
                  <span className={mng.base__inputtitle}>{item.title}</span>
                  <input className={mng.base__inputbase} type="number" min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tngKerjaChange(e, i)}/>
                </label>
              ))
            }

          </div>

        </div>

        <div className={`${["mng.base__formsection"]} border-b-0`}>
          <span className={mng.base__subtitle}>Rencana Investasi/Eksploitasi</span>

          <div className="flex flex-col">

            {
              rencanaInvest.map((items, i) => (
                <div className={mng.base__formlabel_twin} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => investasiRemoveLabel(i)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => investasiChange(e, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }

          </div>

          <div className={mng.base__btn} onClick={handleBtnAddRencanaInvest}>
            + Tambah Kegiatan Investasi/Eksploitasi
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

export default FormAspekManajemen;
