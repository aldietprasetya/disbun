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

const FormLingkungan = () => {
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

  const [kelembagaan, setKelembagaan] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [sarana, setSarana] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [pelaksanaan, setPengelolaan] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [pengawasan, setPengawasan] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [pembukaan, setPembukaan] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [orgKebakaran, setOrgKebakaran] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [peringatanDini, setPeringatanDini] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [pengolahanLahan, setPengolahanLahan] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [pantauLingkungan, setPantauLingkungan] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [pelaporan, setPelaporan] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [isoLingkungan, setIsoLingkungan] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [limbahPadat, setLimbahPadat] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [limbahCair, setLimbahCair] = useState([
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
      let retrievedObject = JSON.parse(localStorage.getItem('skoringLingkungan'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
          "kelembagaan": [],
          "sarana": [],
          "pelaksanaan": [],
          "pengawasan": [],
          "pembukaan": [],
          "orgKebakaran": [],
          "peringatanDini": [],
          "pengolahanLahan": [],
          "pantauLingkungan": [],
          "pelaporan": [],
          "isoLingkungan": [],
          "limbahPadat": [],
          "limbahCair": [],
        }

        const formkelembagaan = _.cloneDeep(kelembagaan)
        formkelembagaan.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.kelembagaan.push(dtFrm)
        })
        const formsarana = _.cloneDeep(sarana)
        formsarana.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[1].criteriaId
          dtFrm[1].value = retrievedObject[1].subCategoryId
          replicateData.sarana.push(dtFrm)
        })
        const formpelaksanaan = _.cloneDeep(pelaksanaan)
        formpelaksanaan.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[2].criteriaId
          dtFrm[1].value = retrievedObject[2].subCategoryId
          replicateData.pelaksanaan.push(dtFrm)
        })
        const formpengawasan = _.cloneDeep(pengawasan)
        formpengawasan.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[3].criteriaId
          dtFrm[1].value = retrievedObject[3].subCategoryId
          replicateData.pengawasan.push(dtFrm)
        })
        const formpembukaan = _.cloneDeep(pembukaan)
        formpembukaan.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[4].criteriaId
          dtFrm[1].value = retrievedObject[4].subCategoryId
          replicateData.pembukaan.push(dtFrm)
        })
        const formorgKebakaran = _.cloneDeep(orgKebakaran)
        formorgKebakaran.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[5].criteriaId
          dtFrm[1].value = retrievedObject[5].subCategoryId
          replicateData.orgKebakaran.push(dtFrm)
        })
        const formperingatanDini = _.cloneDeep(peringatanDini)
        formperingatanDini.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[6].criteriaId
          dtFrm[1].value = retrievedObject[6].subCategoryId
          replicateData.peringatanDini.push(dtFrm)
        })
        const formpengolahanLahan = _.cloneDeep(pengolahanLahan)
        formpengolahanLahan.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[7].criteriaId
          dtFrm[1].value = retrievedObject[7].subCategoryId
          replicateData.pengolahanLahan.push(dtFrm)
        })
        const formpantauLingkungan = _.cloneDeep(pantauLingkungan)
        formpantauLingkungan.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[8].criteriaId
          dtFrm[1].value = retrievedObject[8].subCategoryId
          replicateData.pantauLingkungan.push(dtFrm)
        })
        const formpelaporan = _.cloneDeep(pelaporan)
        formpelaporan.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[9].criteriaId
          dtFrm[1].value = retrievedObject[9].subCategoryId
          replicateData.pelaporan.push(dtFrm)
        })
        const formisoLingkungan = _.cloneDeep(isoLingkungan)
        formisoLingkungan.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[10].criteriaId
          dtFrm[1].value = retrievedObject[10].subCategoryId
          replicateData.isoLingkungan.push(dtFrm)
        })
        const formlimbahPadat = _.cloneDeep(limbahPadat)
        formlimbahPadat.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[11].criteriaId
          dtFrm[1].value = retrievedObject[11].subCategoryId
          replicateData.limbahPadat.push(dtFrm)
        })
        const formlimbahCair = _.cloneDeep(limbahCair)
        formlimbahCair.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[12].criteriaId
          dtFrm[1].value = retrievedObject[12].subCategoryId
          replicateData.limbahCair.push(dtFrm)
        })

        setKelembagaan(replicateData.kelembagaan)
        setSarana(replicateData.sarana)
        setPengelolaan(replicateData.pelaksanaan)
        setPengawasan(replicateData.pengawasan)
        setPembukaan(replicateData.pembukaan)
        setOrgKebakaran(replicateData.orgKebakaran)
        setPeringatanDini(replicateData.peringatanDini)
        setPengolahanLahan(replicateData.pengolahanLahan)
        setPantauLingkungan(replicateData.pantauLingkungan)
        setPelaporan(replicateData.pelaporan)
        setIsoLingkungan(replicateData.isoLingkungan)
        setLimbahPadat(replicateData.limbahPadat)
        setLimbahCair(replicateData.limbahCair)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {
    let data = []

    kelembagaan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    sarana.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    pelaksanaan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    pengawasan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    pembukaan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    orgKebakaran.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    peringatanDini.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    pengolahanLahan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    pantauLingkungan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    pelaporan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    isoLingkungan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    limbahPadat.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    limbahCair.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });

    setDataSubmit(data)

  }, [kelembagaan,sarana,pelaksanaan,pengawasan
    ,pembukaan,orgKebakaran,peringatanDini,pengolahanLahan
    ,pantauLingkungan,pelaporan,isoLingkungan,limbahPadat,limbahCair])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(async () => {
    localStorage.setItem("skoringLingkungan", JSON.stringify(dataSubmit));

    let data = _.cloneDeep(dataSubmit);

    data.forEach((item, i) => {
      item.criteriaId = item.criteriaId.id
    });

    const res = axios.post(
      `${appConfig.baseUrl}/evaluations/${localStorage.getItem('evaluationId')}/scorings/${localStorage.getItem('scoringId')}/environments`,
      {
        score: data
      }
    );

    res.then(
      function(dt) {

        if (dt.data.status == 'success') {
          router.push({
            pathname: "/admin/master-basis-data/pelaporan"
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
          <span className={mng.base__subtitle}>Kelompok A: AMDAL</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Kelembagaan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Organisasi dan petugas
            </div>
          </div>

          <div className="flex flex-col">
            {
              kelembagaan.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, kelembagaan, setKelembagaan, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, kelembagaan, setKelembagaan, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 2: Sarana dan prasana</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Keberadaan sarana dan prasarana
            </div>
          </div>

          <div className="flex flex-col">
            {
              sarana.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, sarana, setSarana, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, sarana, setSarana, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 3: Pelaksanaan pengelolaan lingkungan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Realisasi pengelolaan lingkungan dibandingkan rencana
            </div>
          </div>

          <div className="flex flex-col">
            {
              pelaksanaan.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, pelaksanaan, setPengelolaan, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, pelaksanaan, setPengelolaan, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok B: Kawasan lindung, sumber air, sungai dan rehabilitasi lahan kritis</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Pengawasan kawasan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Pelaksanaan pengawasan
            </div>
          </div>

          <div className="flex flex-col">
            {
              pengawasan.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, pengawasan, setPengawasan, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, pengawasan, setPengawasan, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok C: Pembakaran dan kebakaran lahan dan kebun</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Pembukaan dan pembersihan lahan serta peremajaan tanaman</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Teknik yang digunakan
            </div>
          </div>

          <div className="flex flex-col">
            {
              pembukaan.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, pembukaan, setPembukaan, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, pembukaan, setPembukaan, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 2: Organisasi dan petugas kebakaran</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Keberadaan organisasi dan petugas
            </div>
          </div>

          <div className="flex flex-col">
            {
              orgKebakaran.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, orgKebakaran, setOrgKebakaran, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, orgKebakaran, setOrgKebakaran, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 3: Sistem peringatan dini kebakaran</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Keberadaan sistem peringatan dini
            </div>
          </div>

          <div className="flex flex-col">
            {
              peringatanDini.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, peringatanDini, setPeringatanDini, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, peringatanDini, setPeringatanDini, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok D: Pemanfaatan Lahan</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Pengolahan dan penggunaan lahan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Teknik pengolahan dan pemanfaatan lahan
            </div>
          </div>

          <div className="flex flex-col">
            {
              pengolahanLahan.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, pengolahanLahan, setPengolahanLahan, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, pengolahanLahan, setPengolahanLahan, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok E: Pelaporan dan pemantauan lingkungan </span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Pemantauan lingkungan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Pelaksanaan pemantauan lingkungan
            </div>
          </div>

          <div className="flex flex-col">
            {
              pantauLingkungan.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, pantauLingkungan, setPantauLingkungan, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, pantauLingkungan, setPantauLingkungan, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 2: Pelaporan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Pelaksanaan pelaporan
            </div>
          </div>

          <div className="flex flex-col">
            {
              pelaporan.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, pelaporan, setPelaporan, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, pelaporan, setPelaporan, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok F: ISO 14000</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Penerapan manajemen lingkungan (ISO 14000)</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Penerapan manajemen lingkungan (ISO 14000)
            </div>
          </div>

          <div className="flex flex-col">
            {
              isoLingkungan.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, isoLingkungan, setIsoLingkungan, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, isoLingkungan, setIsoLingkungan, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok G: Pengolahan Limbah</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Pengolahan limbah padat</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Pengolahan dan pemanfaatan
            </div>
          </div>

          <div className="flex flex-col">
            {
              limbahPadat.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, limbahPadat, setLimbahPadat, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, limbahPadat, setLimbahPadat, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 2: Pengolahan limbah cair</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Pengolahan
            </div>
          </div>

          <div className="flex flex-col">
            {
              limbahCair.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, limbahCair, setLimbahCair, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, limbahCair, setLimbahCair, i, ii)}/>
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
export default FormLingkungan;
