import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import _ from 'lodash';
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'
import ChildStore from './store/manajemen'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormAspekManajemen = () => {

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState({})

  ////////////////////////// KOMISARIS ////////////////////////////////
  const [komisaris, setKomisaris] = useState([])

  function handleBtnAddKomisaris() {
    setKomisaris([...komisaris, {'title':'Komisaris','placeholder':'Nama Komisaris','value':''}])
  }

  ////////////////////////// DIREKSI ////////////////////////////////

  const [direksi, setDireksi] = useState([])

  function handleBtnAddDirektur() {
    setDireksi([...direksi, {'title':'Direktur','placeholder':'Nama Direktur','value':''}])
  }

  ////////////////////////// ADMINISTRASI ////////////////////////////////

  const [administrasi, setAdministrasi] = useState('');

  function administrasiChange(e) {
    setAdministrasi(e.target.value)
  }

  ////////////////////////// TENAGA KERJA ////////////////////////////////

  const [tenagaKerja, setTenagaKerja] = useState([])

  ////////////////////////// RENCANA INVESTASI ////////////////////////////////

  const [rencanaInvest, setRencanaInvest] = useState([])

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

  ////////////////////////// OTHER FUNCTION ////////////////////////////////

  function removeLabel(i,state,setState) {
    setState(state.filter((item, idx) => idx != i))
  }

  function formOneRowChange(e, state, setState, index) {
    const { name, value } = e.target;
    const list = [...state];
    list.forEach((item, i) => {
      if (i == index) {
        item.value = value
      }
    });
    setState(list);
  }

  function formRegularChange(e, state, setState, index, index2) {
    const { name, value } = e.target;
    const list = [...state];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    setState(list);
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

  useEffect(() => {
    if (initialLoad) {
      let retrievedObject = JSON.parse(localStorage.getItem('manajementReport'));

      if (!_.isEmpty(retrievedObject)) {
        setAdministrasi(retrievedObject.administrasi)
        setKomisaris(retrievedObject.komisaris)
        setDireksi(retrievedObject.direksi)
        setTenagaKerja(retrievedObject.tenagaKerja)
        setRencanaInvest(retrievedObject.rencanaInvest)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

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

    setDataSubmit({
      'komisaris': komisaris,
      'direksi':direksi,
      'administrasi':administrasi,
      'tenagaKerja':tenagaKerja,
      'rencanaInvest':rencanaInvest
    })

  }, [komisaris,direksi,administrasi,tenagaKerja,rencanaInvest])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(() => {
    localStorage.setItem("manajementReport", JSON.stringify(dataSubmit));
    let data = {
      commissioner: [{}],
      director: [],
      investment: [],
      administrator: [],
    }

    data.administrator = [{
      "administratorName": administrasi,
      "administratorCount": tenagaKerja[0].value,
      "staffCount": tenagaKerja[1].value,
      "monthlyLaborCount": tenagaKerja[2].value,
      "freelanceDailyLaborCount": tenagaKerja[3].value,
      "permanentDailyLaborCount": tenagaKerja[4].value,
      "projectLaborCount": tenagaKerja[5].value
    }]

    komisaris.forEach((item, i) => {
      let setObj = {
        [(item.title == 'Komisaris Utama' ? 'majorCommissionerName' : 'commisionerName'+i)]: item.value
      }
      data.commissioner[0] = {...data.commissioner[0], ...setObj}
    });

    direksi.forEach((item, i) => {
      let setObj = {
        [(item.title == 'Direktur Utama' ? 'majorDirectorName' : 'directorName'+i)]: item.value
      }
      data.director[0] = {...data.director[0], ...setObj}
    });

    rencanaInvest.forEach((item, i) => {
      let rencanaInv = {}
      item.forEach(() => {
        rencanaInv.activity = item[0].value
        rencanaInv.year = item[1].value
        rencanaInv.volume = item[2].value
        rencanaInv.value = item[3].value
      });
      data.investment.push(rencanaInv)
    });

    localStorage.setItem("dataSubmit", JSON.stringify(data));

    console.log('Data Send Manajemen')
    console.log('=========================================================')
    console.log(data)
    console.log('=========================================================')

    router.push({
      pathname: "/user/pelaporan-perkebunan/aspek-kebun/"
    })
  })

  function clearData() {
    localStorage.setItem("manajementReport", JSON.stringify(dataSubmit.manajemen={}));
    router.push({
      // pathname: "/pelaporan-perkebunan/aspek-manajemen/"
    })
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>

      <ChildStore/>

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
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondel"]}`} onClick={() => removeLabel(i, komisaris, setKomisaris)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                </span>
                <input className={mng.base__inputbase} type="text" placeholder={item.placeholder} value={item.value} onChange={(e) => formOneRowChange(e, komisaris, setKomisaris, i)}/>
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
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondel"]}`} onClick={() => removeLabel(i, direksi, setDireksi)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                </span>
                <input className={mng.base__inputbase} type="text" placeholder={item.placeholder} value={item.value} onChange={(e) => formOneRowChange(e, direksi, setDireksi, i)}/>
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
                  <input className={mng.base__inputbase} type="number" min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formOneRowChange(e, tenagaKerja, setTenagaKerja, i)}/>
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
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, rencanaInvest, setRencanaInvest)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, rencanaInvest, setRencanaInvest, i, ii)}/>
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
          <div className={`${mng["base__btnclear"]} ${"mt-1"}`} onClick={clearData}>
            <span className="ml-1.5">Clear data</span>
          </div>

          <button className={`${mng["base__btnsimpan"]} ${"float-right mt-1"}`} onClick={storeData} disabled={!btnValid}>
            Simpan dan Lanjutkan
          </button>
        </div>

      </form>
    </>
  );
};

export default FormAspekManajemen;
