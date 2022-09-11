import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import { useSession } from "next-auth/react";
import _ from 'lodash';
import axios from 'axios';
import { appConfig } from 'src/config';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormKebun = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { data: session } = useSession();

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState({})

  const kriteriaOpt = [
    { id:1, value: 'Memiliki visi dan misi tertulis', label: 'Memiliki visi dan misi tertulis' },
    { id:2, value: 'Memiliki visi dan misi tidak tertulis', label: 'Memiliki visi dan misi tidak tertulis' },
    { id:3, value: 'Tidak memiliki visi dan misi ', label: 'Tidak memiliki visi dan misi ' }
  ];

  ////////////////////////// Identitas Perusahaan/Kebun ////////////////////////////////

  const [sertifikasiTanam, setSertifikasiTanam] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [manfaatLahan, setManfaatLahan] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [fisikTanaman, setFisikTanaman] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [jenisPupuk, setJenisPupuk] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [dosisPupuk, setDosisPupuk] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [amatOpt, setAmatOpt] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [kendaliOpt, setKendaliOpt] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [hayati, setHayati] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [produktivitas, setProduktivitas] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])

  ////////////////////////// OTHER FUNCTION ////////////////////////////////

  function formRegularChange(e, state, setState, index, index2) {
    const list = [...state];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = e
          }
        });
      }
    });
    setState(list);
  }

  useEffect(() => {
    if (initialLoad) {
      let retrievedObject = JSON.parse(localStorage.getItem('skoringKebun'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
          "sertifikasiTanam": [],
          "manfaatLahan": [],
          "fisikTanaman": [],
          "jenisPupuk": [],
          "dosisPupuk": [],
          "amatOpt": [],
          "kendaliOpt": [],
          "hayati": [],
          "produktivitas": [],
        }

        const formsertifikasiTanam = _.cloneDeep(sertifikasiTanam)
        formsertifikasiTanam.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.sertifikasiTanam.push(dtFrm)
        })
        const formmanfaatLahan = _.cloneDeep(manfaatLahan)
        formmanfaatLahan.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[1].criteriaId
          dtFrm[1].value = retrievedObject[1].subCategoryId
          replicateData.manfaatLahan.push(dtFrm)
        })
        const formfisikTanaman = _.cloneDeep(fisikTanaman)
        formfisikTanaman.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[2].criteriaId
          dtFrm[1].value = retrievedObject[2].subCategoryId
          replicateData.fisikTanaman.push(dtFrm)
        })
        const formjenisPupuk = _.cloneDeep(jenisPupuk)
        formjenisPupuk.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[3].criteriaId
          dtFrm[1].value = retrievedObject[3].subCategoryId
          replicateData.jenisPupuk.push(dtFrm)
        })
        const formdosisPupuk = _.cloneDeep(dosisPupuk)
        formdosisPupuk.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[4].criteriaId
          dtFrm[1].value = retrievedObject[4].subCategoryId
          replicateData.dosisPupuk.push(dtFrm)
        })
        const formamatOpt = _.cloneDeep(amatOpt)
        formamatOpt.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[5].criteriaId
          dtFrm[1].value = retrievedObject[5].subCategoryId
          replicateData.amatOpt.push(dtFrm)
        })
        const formkendaliOpt = _.cloneDeep(kendaliOpt)
        formkendaliOpt.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[6].criteriaId
          dtFrm[1].value = retrievedObject[6].subCategoryId
          replicateData.kendaliOpt.push(dtFrm)
        })
        const formhayati = _.cloneDeep(hayati)
        formhayati.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[7].criteriaId
          dtFrm[1].value = retrievedObject[7].subCategoryId
          replicateData.hayati.push(dtFrm)
        })
        const formproduktivitas = _.cloneDeep(produktivitas)
        formproduktivitas.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[8].criteriaId
          dtFrm[1].value = retrievedObject[8].subCategoryId
          replicateData.produktivitas.push(dtFrm)
        })

        setSertifikasiTanam(replicateData.sertifikasiTanam)
        setManfaatLahan(replicateData.manfaatLahan)
        setFisikTanaman(replicateData.fisikTanaman)
        setJenisPupuk(replicateData.jenisPupuk)
        setDosisPupuk(replicateData.dosisPupuk)
        setAmatOpt(replicateData.amatOpt)
        setKendaliOpt(replicateData.kendaliOpt)
        setHayati(replicateData.hayati)
        setProduktivitas(replicateData.produktivitas)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {
    let data = []

    sertifikasiTanam.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    manfaatLahan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    fisikTanaman.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    jenisPupuk.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    dosisPupuk.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    amatOpt.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    kendaliOpt.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    hayati.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    produktivitas.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });

    setDataSubmit(data)

  }, [sertifikasiTanam,manfaatLahan,fisikTanaman,jenisPupuk,dosisPupuk,amatOpt,kendaliOpt,hayati,produktivitas])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(async () => {
    localStorage.setItem("skoringKebun", JSON.stringify(dataSubmit));

    let data = _.cloneDeep(dataSubmit);

    data.forEach((item, i) => {
      item.criteriaId = item.criteriaId.id
    });

    const res = axios.post(
      `${appConfig.baseUrl}/evaluations/${localStorage.getItem('evaluationId')}/scorings/${localStorage.getItem('scoringId')}/gardens`,
      {
        score: data
      }
    );

    res.then(
      function(dt) {

        if (dt.data.status == 'success') {
          router.push({
            pathname: "/admin/master-basis-data/pengolahan"
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

  })

  return (
    <>
      <form>

        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Kelompok A: Bahan Tanaman</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Sertifikasi Bahan Tanaman</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Izin Usaha Perkebunan, HGU, HGB, Izin Prinsip dan Izin Tetap BKPM (untuk yang mendapatkan fasilitas pemerintah), Izin Gangguan (HO), K3 (Kesehatan dan Keselamatan Kerja).
            </div>
          </div>

          <div className="flex flex-col">
            {
              sertifikasiTanam.map((items, i) => (
                <div className={`${mng["base__formlabel_report"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} float-right mb-6`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, sertifikasiTanam, setSertifikasiTanam, i, ii)}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={kriteriaOpt}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_report-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, sertifikasiTanam, setSertifikasiTanam, i, ii)}/>
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
        </div>
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Kelompok B: Lahan</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Pemanfaatan Lahan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Realisasi pemanfaatan lahan yang dapat ditanami
            </div>
          </div>

          <div className="flex flex-col">
            {
              manfaatLahan.map((items, i) => (
                <div className={`${mng["base__formlabel_report"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} float-right mb-6`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, manfaatLahan, setManfaatLahan, i, ii)}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={kriteriaOpt}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_report-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, manfaatLahan, setManfaatLahan, i, ii)}/>
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
        </div>
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Kelompok C: Pemeliharaan Tanaman</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Kondisi fisik tanaman</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Kesesuaian dengan standar kerapatan tanaman
            </div>
          </div>

          <div className="flex flex-col">
            {
              fisikTanaman.map((items, i) => (
                <div className={`${mng["base__formlabel_report"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} float-right mb-6`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, fisikTanaman, setFisikTanaman, i, ii)}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={kriteriaOpt}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_report-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, fisikTanaman, setFisikTanaman, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 2: Jenis Pupuk </p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Organik dan anorganik
            </div>
          </div>

          <div className="flex flex-col">
            {
              jenisPupuk.map((items, i) => (
                <div className={`${mng["base__formlabel_report"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} float-right mb-6`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, jenisPupuk, setJenisPupuk, i, ii)}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={kriteriaOpt}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_report-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, jenisPupuk, setJenisPupuk, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 3: Dosis dan waktu pemupukan </p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Dosis dan waktu pemupukan yang dilaksanakan dibandingkan dengan dosis anjuran dari Puslit
            </div>
          </div>

          <div className="flex flex-col">
            {
              dosisPupuk.map((items, i) => (
                <div className={`${mng["base__formlabel_report"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} float-right mb-6`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, dosisPupuk, setDosisPupuk, i, ii)}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={kriteriaOpt}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_report-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, dosisPupuk, setDosisPupuk, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 4: Pengamatan OPT </p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Waktu Pengamatan
            </div>
          </div>

          <div className="flex flex-col">
            {
              amatOpt.map((items, i) => (
                <div className={`${mng["base__formlabel_report"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} float-right mb-6`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, amatOpt, setAmatOpt, i, ii)}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={kriteriaOpt}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_report-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, amatOpt, setAmatOpt, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 5: Pengendali-an OPT </p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Teknik pengendalian OPT
            </div>
          </div>

          <div className="flex flex-col">
            {
              kendaliOpt.map((items, i) => (
                <div className={`${mng["base__formlabel_report"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} float-right mb-6`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, kendaliOpt, setKendaliOpt, i, ii)}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={kriteriaOpt}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_report-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, kendaliOpt, setKendaliOpt, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 6: Laboratori-um agensia hayati </p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Keberadaan dan fungsi
            </div>
          </div>

          <div className="flex flex-col">
            {
              hayati.map((items, i) => (
                <div className={`${mng["base__formlabel_report"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} float-right mb-6`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, hayati, setHayati, i, ii)}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={kriteriaOpt}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_report-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, hayati, setHayati, i, ii)}/>
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
        </div>
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Kelompok D: Produktivitas Tanaman</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Produktivitas tanaman</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Produktivitas yang dicapai dibandingkan dengan standar dari Puslit
            </div>
          </div>

          <div className="flex flex-col">
            {
              produktivitas.map((items, i) => (
                <div className={`${mng["base__formlabel_report"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} float-right mb-6`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, produktivitas, setProduktivitas, i, ii)}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={kriteriaOpt}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_report-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, produktivitas, setProduktivitas, i, ii)}/>
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
        </div>

        <div className='flex justify-end items-center mt-9 pt-0.5'>
          <button className={`${mng["base__btnsimpan"]} ${"float-right mt-1"}`} onClick={storeData}>
            Simpan dan Lanjutkan
          </button>
        </div>

      </form>
    </>
  );
};
export default FormKebun;
