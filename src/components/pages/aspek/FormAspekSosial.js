import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import _ from 'lodash';
import axios from 'axios';
import { appConfig } from 'src/config';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'
import ChildStore from './store/sosial'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormAspekSosial = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isError, setIsError] = useState(false);

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState({})

  ////////////////////////// PAJAK RESTRIBUSI ////////////////////////////////

  const [pajakRestribusi, setPajakRestribusi] = useState([])

  function handleBtnAddPajakRestribusi() {
    setPajakRestribusi([...pajakRestribusi,[ {'title':'Jenis Pajak/Retribusi','type':'text','placeholder':'Jenis Pajak/Retrbusi','value':''}, {'title':'Nilai (Rp)','placeholder':'Nilai Pajak/Retribusi','type':'number','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]])
  }

  ////////////////////////// KAWASAN LINDUNG ////////////////////////////////

  const [kawasanLindung, setKawasanLindung] = useState([])

  ////////////////////////// KONSERVASI ////////////////////////////////

  const [konservasi, setKonservasi] = useState([])

  function handleBtnAddKonservasi() {
    setKonservasi([...konservasi,[ {'title':'Jenis Kegiatan Konservasi','type':'text','placeholder':'Jenis Pajak/Retrbusi','value':''}, {'title':'Luas (Ha)','placeholder':'Luas Lahan dalam Ha','type':'number','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]])
  }

  ////////////////////////// PENGAWASAN LINGKUNGAN ////////////////////////////////

  const [pengawasan, setPengawasan] = useState([])

  function handleBtnAddPengawasan() {
    setPengawasan([...pengawasan,[ {'title':'Masalah Lingkungan','type':'text','placeholder':'Jenis Masalah Lingkungan','value':'', 'isOpt':false}, {'title':'Waktu kejadian','placeholder':'DD/MM/YYYY','type':'text','value':'', 'isOpt':'cal'}, {'title':'Frekuensi (kali)','type':'number','placeholder':'Jumlah','value':'', 'isOpt':false}, {'title':'Upaya Penyelesaian','type':'text','placeholder':'Deskripsi Upaya','value':'', 'isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'', 'isOpt':false} ]])
  }

  ////////////////////////// KEMITRAAN USAHA ////////////////////////////////

  const [kemitraan, setKemitraan] = useState([])

  function handleBtnAddKemitraan() {
    setKemitraan([...kemitraan,[ {'title':'Nama Kelompok Tani','type':'text','placeholder':'Nama Poktan','value':'', 'isOpt':false}, {'title':'Nomor','placeholder':'Nomor','type':'text','value':'', 'isOpt':false}, {'title':'Waktu Perjanjian','type':'text','placeholder':'DD/MM/YYYY','value':'', 'isOpt':'cal'}, {'title':'Lamanya perjanjian','type':'number','placeholder':'Durasi','value':'', 'isOpt':false}, {'title':'Jenis perjanjian','type':'text','placeholder':'Jenis Perjanjian','value':'', 'isOpt':false} ]])
  }

  ////////////////////////// OTHER FUNCTION ////////////////////////////////

  function removeLabel(i,state,setState) {
    setState(state.filter((item, idx) => idx != i))
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

  useEffect(() => {
    if (initialLoad) {
      let retrievedObject = JSON.parse(localStorage.getItem('sosialReport'));

      if (!_.isEmpty(retrievedObject)) {

        setPajakRestribusi(retrievedObject.retribution)
        setKawasanLindung(retrievedObject.protectedArea)
        setKonservasi(retrievedObject.conservation)
        setPengawasan(retrievedObject.environmentalMonitoring)
        setKemitraan(retrievedObject.businessPartnership)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {
    setDataSubmit({
      'retribution': pajakRestribusi,
      'protectedArea':kawasanLindung,
      'conservation':konservasi,
      'environmentalMonitoring':pengawasan,
      'businessPartnership':kemitraan
    })

  }, [pajakRestribusi,kawasanLindung,konservasi,pengawasan,kemitraan])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(() => {
    localStorage.setItem("generalSocial", JSON.stringify(dataSubmit));
    let data = {
      retribution: [],
      protectedArea: [],
      conservation: [],
      environmentalMonitoring: [],
      businessPartnership: [],
    }

    pajakRestribusi.forEach((item, i) => {
      let legalInv = {}
      item.forEach(() => {
        legalInv.retributionType = item[0].value
        legalInv.value = Number(item[1].value)
        legalInv.description = item[2].value
      });
      data.retribution.push(legalInv)
    });

    konservasi.forEach((item, i) => {
      let legalInv = {}
      item.forEach(() => {
        legalInv.conservationType = item[0].value
        legalInv.area = Number(item[1].value)
        legalInv.description = item[2].value
      });
      data.conservation.push(legalInv)
    });

    pengawasan.forEach((item, i) => {
      let legalInv = {}
      item.forEach(() => {
        legalInv.problem = item[0].value
        legalInv.dateOccurency = item[1].value
        legalInv.frequency = Number(item[2].value)
        legalInv.effort = item[3].value
        legalInv.description = item[4].value
      });
      data.environmentalMonitoring.push(legalInv)
    });

    kemitraan.forEach((item, i) => {
      let legalInv = {}
      item.forEach(() => {
        legalInv.groupName = item[0].value
        legalInv.agreementNumber = item[1].value
        legalInv.agreementDate = item[2].value
        legalInv.duration = Number(item[3].value)
        legalInv.agreementType = item[4].value
      });
      data.businessPartnership.push(legalInv)
    });

    kawasanLindung.forEach((item, i) => {
      let legalInv = {}
      item.forEach(() => {
        legalInv.area = Number(item[0].value)
        legalInv.year = Number(item[1].value)
        legalInv.effort = item[2].value
      });
      data.protectedArea = legalInv
    });

    localStorage.setItem("dataSubmitSosial", JSON.stringify(data));

    const postReport = axios.post(
      `${appConfig.baseUrl}/reports/${localStorage.getItem('reportId')}/others`,
      data
    );

    postReport.then(
      function(dt) {

        if (dt.data.status == 'success') {
          router.push({
            pathname: "/user/pelaporan-perkebunan/konfirmasi/"
          })
        }

      },
      function(err) {

        enqueueSnackbar('', {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          content: (key, message) => (
            <CustomComponent
              id={key}
              message="Mohon pastikan form yang anda isi telah lengkap."
              variant="error"
              title="Gagal Submit!"
            />
          ),
        });

      }
    )

    console.log('Data Send Sosial')
    console.log('=========================================================')
    console.log(data)
    console.log('=========================================================')
  })

  return (
    <>
      <ChildStore/>

      <form>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Pajak dan Retribusi</span>

          <div className="flex flex-col">
            {
              pajakRestribusi.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, pajakRestribusi, setPajakRestribusi)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, pajakRestribusi, setPajakRestribusi, i, ii)}/>
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
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, kawasanLindung, setKawasanLindung, i, ii)}/>
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
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, konservasi, setKonservasi)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, konservasi, setKonservasi, i, ii)}/>
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
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kemitraan, setKemitraan)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == "cal" ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, kemitraan, setKemitraan, i, ii)}
                              type="date"
                              values={item.value}
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } ${mng["base__inputbase"]} w-full rounded  bg-white-2 py-2 px-3 text-sm uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, kemitraan, setKemitraan, i, ii)}/>
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
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, pengawasan, setPengawasan)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == "cal" ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, pengawasan, setPengawasan, i, ii)}
                              type="date"
                              values={item.value}
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } ${mng["base__inputbase"]} w-full rounded  bg-white-2 py-2 px-3 text-sm uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, pengawasan, setPengawasan, i, ii)}/>
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

          <button className={`${mng["base__btnsimpan"]} ${"float-right mt-1"}`} onClick={storeData}>
            Simpan dan Lanjutkan
          </button>
        </div>

      </form>
    </>
  )
};

export default FormAspekSosial;
