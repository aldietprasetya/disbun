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

const FormSosial = () => {
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

  const [faskesSekitar, setFaskesSekitar] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [faspenSekitar, setFaspenSekitar] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [fasibSekitar, setFasibSekitar] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [fasjalSekitar, setFasjalSekitar] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [fasorSekitar, setFasorSekitar] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [faseniSekitar, setFaseniSekitar] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [luasKebun, setLuasKebun] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [kualitasKebun, setKualitasKebun] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [binaKebun, setBinaKebun] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [mitraMasyarakat, setMitraMasyarakat] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [mitraKaryawan, setMitraKaryawan] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [lembagaEkonom, setLembagaEkonom] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [bantuanSedia, setBantuanSedia] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [pelatihan, setPelatihan] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [beasiswa, setBeasiswa] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [gotongRoyong, setGotongRoyong] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [acaraAdat, setAcaraAdat] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [konflik, setKonflik] = useState([
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
      let retrievedObject = JSON.parse(localStorage.getItem('skoringSosial'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
          "faskesSekitar": [],
          "faspenSekitar": [],
          "fasibSekitar": [],
          "fasjalSekitar": [],
          "fasorSekitar": [],
          "faseniSekitar": [],
          "luasKebun": [],
          "kualitasKebun": [],
          "binaKebun": [],
          "mitraMasyarakat": [],
          "mitraKaryawan": [],
          "lembagaEkonom": [],
          "bantuanSedia": [],
          "pelatihan": [],
          "beasiswa": [],
          "gotongRoyong": [],
          "acaraAdat": [],
          "konflik": [],
        }

        const formfaskesSekitar = _.cloneDeep(faskesSekitar)
        formfaskesSekitar.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.faskesSekitar.push(dtFrm)
        })
        const formfaspenSekitar = _.cloneDeep(faspenSekitar)
        formfaspenSekitar.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[1].criteriaId
          dtFrm[1].value = retrievedObject[1].subCategoryId
          replicateData.faspenSekitar.push(dtFrm)
        })
        const formfasibSekitar = _.cloneDeep(fasibSekitar)
        formfasibSekitar.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[2].criteriaId
          dtFrm[1].value = retrievedObject[2].subCategoryId
          replicateData.fasibSekitar.push(dtFrm)
        })
        const formfasjalSekitar = _.cloneDeep(fasjalSekitar)
        formfasjalSekitar.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[3].criteriaId
          dtFrm[1].value = retrievedObject[3].subCategoryId
          replicateData.fasjalSekitar.push(dtFrm)
        })
        const formfasorSekitar = _.cloneDeep(fasorSekitar)
        formfasorSekitar.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[4].criteriaId
          dtFrm[1].value = retrievedObject[4].subCategoryId
          replicateData.fasorSekitar.push(dtFrm)
        })
        const formfaseniSekitar = _.cloneDeep(faseniSekitar)
        formfaseniSekitar.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[5].criteriaId
          dtFrm[1].value = retrievedObject[5].subCategoryId
          replicateData.faseniSekitar.push(dtFrm)
        })
        const formluasKebun = _.cloneDeep(luasKebun)
        formluasKebun.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[6].criteriaId
          dtFrm[1].value = retrievedObject[6].subCategoryId
          replicateData.luasKebun.push(dtFrm)
        })
        const formkualitasKebun = _.cloneDeep(kualitasKebun)
        formkualitasKebun.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[7].criteriaId
          dtFrm[1].value = retrievedObject[7].subCategoryId
          replicateData.kualitasKebun.push(dtFrm)
        })
        const formbinaKebun = _.cloneDeep(binaKebun)
        formbinaKebun.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[8].criteriaId
          dtFrm[1].value = retrievedObject[8].subCategoryId
          replicateData.binaKebun.push(dtFrm)
        })
        const formmitraMasyarakat = _.cloneDeep(mitraMasyarakat)
        formmitraMasyarakat.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[9].criteriaId
          dtFrm[1].value = retrievedObject[9].subCategoryId
          replicateData.mitraMasyarakat.push(dtFrm)
        })
        const formmitraKaryawan = _.cloneDeep(mitraKaryawan)
        formmitraKaryawan.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[10].criteriaId
          dtFrm[1].value = retrievedObject[10].subCategoryId
          replicateData.mitraKaryawan.push(dtFrm)
        })
        const formlembagaEkonom = _.cloneDeep(lembagaEkonom)
        formlembagaEkonom.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[11].criteriaId
          dtFrm[1].value = retrievedObject[11].subCategoryId
          replicateData.lembagaEkonom.push(dtFrm)
        })
        const formbantuanSedia = _.cloneDeep(bantuanSedia)
        formbantuanSedia.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[12].criteriaId
          dtFrm[1].value = retrievedObject[12].subCategoryId
          replicateData.bantuanSedia.push(dtFrm)
        })
        const formpelatihan = _.cloneDeep(pelatihan)
        formpelatihan.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[13].criteriaId
          dtFrm[1].value = retrievedObject[13].subCategoryId
          replicateData.pelatihan.push(dtFrm)
        })
        const formbeasiswa = _.cloneDeep(beasiswa)
        formbeasiswa.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[14].criteriaId
          dtFrm[1].value = retrievedObject[14].subCategoryId
          replicateData.beasiswa.push(dtFrm)
        })
        const formgotongRoyong = _.cloneDeep(gotongRoyong)
        formgotongRoyong.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[15].criteriaId
          dtFrm[1].value = retrievedObject[15].subCategoryId
          replicateData.gotongRoyong.push(dtFrm)
        })
        const formacaraAdat = _.cloneDeep(acaraAdat)
        formacaraAdat.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[16].criteriaId
          dtFrm[1].value = retrievedObject[16].subCategoryId
          replicateData.acaraAdat.push(dtFrm)
        })
        const formkonflik = _.cloneDeep(konflik)
        formkonflik.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[17].criteriaId
          dtFrm[1].value = retrievedObject[17].subCategoryId
          replicateData.konflik.push(dtFrm)
        })

        setFaskesSekitar(replicateData.faskesSekitar)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {
    let data = []

    faskesSekitar.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    faspenSekitar.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    fasibSekitar.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    fasjalSekitar.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    fasorSekitar.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    faseniSekitar.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    luasKebun.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    kualitasKebun.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    binaKebun.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    mitraMasyarakat.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    mitraKaryawan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    lembagaEkonom.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    bantuanSedia.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    pelatihan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    beasiswa.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    gotongRoyong.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    acaraAdat.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    konflik.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });

    setDataSubmit(data)

  }, [faskesSekitar,faspenSekitar,fasibSekitar,fasjalSekitar,fasorSekitar
    ,faseniSekitar,luasKebun,kualitasKebun,binaKebun,mitraMasyarakat,mitraKaryawan
    ,lembagaEkonom,bantuanSedia,pelatihan,beasiswa,gotongRoyong,acaraAdat,konflik])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(async () => {
    localStorage.setItem("skoringSosial", JSON.stringify(dataSubmit));

    let data = _.cloneDeep(dataSubmit);

    data.forEach((item, i) => {
      item.criteriaId = item.criteriaId.id
    });

    const res = axios.post(
      `${appConfig.baseUrl}/evaluations/${localStorage.getItem('evaluationId')}/scorings/${localStorage.getItem('scoringId')}/socials`,
      {
        score: data
      }
    );

    res.then(
      function(dt) {

        if (dt.data.status == 'success') {
          router.push({
            pathname: "/admin/master-basis-data/ekonomi"
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
          <span className={mng.base__subtitle}>Kelompok A: Sosial</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Fasilitas kesehatan untuk masyarakat sekitar</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Bangunan, tenaga medis dan obat-obatan
            </div>
          </div>

          <div className="flex flex-col">
            {
              faskesSekitar.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, faskesSekitar, setFaskesSekitar, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, faskesSekitar, setFaskesSekitar, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 2: Fasilitas pendidikan untuk masyarakat sekitar </p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Bangunan dan tenaga pendidik
            </div>
          </div>

          <div className="flex flex-col">
            {
              faspenSekitar.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, faspenSekitar, setFaspenSekitar, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, faspenSekitar, setFaspenSekitar, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 3: Fasilitas ibadah untuk masyarakat sekitar </p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Fasilitas ibadah
            </div>
          </div>

          <div className="flex flex-col">
            {
              fasibSekitar.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, fasibSekitar, setFasibSekitar, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, fasibSekitar, setFasibSekitar, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 4: Fasilitas jalan & jembatan untuk masyarakat sekitar</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Fasilitas jalan umum & jembatan
            </div>
          </div>

          <div className="flex flex-col">
            {
              fasjalSekitar.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, fasjalSekitar, setFasjalSekitar, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, fasjalSekitar, setFasjalSekitar, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 5: Fasilitas olah raga untuk masyarakat sekitar</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Fasilitas olah raga
            </div>
          </div>

          <div className="flex flex-col">
            {
              fasorSekitar.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, fasorSekitar, setFasorSekitar, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, fasorSekitar, setFasorSekitar, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 6: Fasilitas seni dan budaya untuk masyarakat sekitar</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Fasilitas seni budaya
            </div>
          </div>

          <div className="flex flex-col">
            {
              faseniSekitar.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, faseniSekitar, setFaseniSekitar, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, faseniSekitar, setFaseniSekitar, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok B: Pembangunan kebun untuk masyarakat sekitar</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Luas kebun</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Luas kebun masyarakat sekitar yang dibangun perusahaan
            </div>
          </div>

          <div className="flex flex-col">
            {
              luasKebun.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, luasKebun, setLuasKebun, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, luasKebun, setLuasKebun, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 2: Kualitas kebun</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Kualitas kebun masyarakat sekitar yang dibangun perusahaan
            </div>
          </div>

          <div className="flex flex-col">
            {
              kualitasKebun.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, kualitasKebun, setKualitasKebun, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, kualitasKebun, setKualitasKebun, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 3: Pembinaan kebun masyarakat</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Pelaksanaan pembinaan kebun masyarakat yang dibangun oleh perusahaan
            </div>
          </div>

          <div className="flex flex-col">
            {
              binaKebun.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, binaKebun, setBinaKebun, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, binaKebun, setBinaKebun, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok C: Kemitraan usaha dengan masyarakat</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Kemitraan usaha dengan koperasi masyarakat dan/atau kelompok tani</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Belanja perusahaan yang melibatkan koperasi masyarakat dan/atau kelompok tani
            </div>
          </div>

          <div className="flex flex-col">
            {
              mitraMasyarakat.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, mitraMasyarakat, setMitraMasyarakat, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, mitraMasyarakat, setMitraMasyarakat, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 2: Kemitraan usaha dengan koperasi karyawan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Keberadaan dan kelancaran kemitraan
            </div>
          </div>

          <div className="flex flex-col">
            {
              mitraKaryawan.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, mitraKaryawan, setMitraKaryawan, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, mitraKaryawan, setMitraKaryawan, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 3: Penumbuhan & pembinaan lembaga ekonomi masyarakat sekitar</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Jumlah lembaga ekonomi/koperasi masyarakat sekitar yang dibina perusahaan dalam 3 tahun terakhir
            </div>
          </div>

          <div className="flex flex-col">
            {
              lembagaEkonom.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, lembagaEkonom, setLembagaEkonom, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, lembagaEkonom, setLembagaEkonom, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 4: Bantuan penyediaan benih/ bibit unggul & sarana produksi untuk kebun masyarakat</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Pola bantuan
            </div>
          </div>

          <div className="flex flex-col">
            {
              bantuanSedia.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, bantuanSedia, setBantuanSedia, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, bantuanSedia, setBantuanSedia, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 5: Penyelenggaraan pelatihan bagi masyarakat sekitar</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Jumlah peserta pelatihan selama 3 tahun terakhir
            </div>
          </div>

          <div className="flex flex-col">
            {
              pelatihan.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, pelatihan, setPelatihan, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, pelatihan, setPelatihan, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 6: Pemberian beasiswa untuk masyarakat</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Jumlah penerima beasiswa selama 3 tahun terakhir
            </div>
          </div>

          <div className="flex flex-col">
            {
              beasiswa.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, beasiswa, setBeasiswa, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, beasiswa, setBeasiswa, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 7: Dukungan perusahaan dalam kegiatan gotong royong masyarakat</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
            Jumlah kegiatan gotong royong masyarakat sekitar yang diikuti atau didukung oleh perusahaan dalam waktu 3 tahun terakhir
            </div>
          </div>

          <div className="flex flex-col">
            {
              gotongRoyong.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, gotongRoyong, setGotongRoyong, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, gotongRoyong, setGotongRoyong, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 8: Dukungan perusahaan dalam acara adat/keagamaan masyarakat sekitar</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Jumlah kegiatan adat/keagamaan masyarakat sekittar yang didukung oleh perusahaan dalam waktu 3 tahun terakhir
            </div>
          </div>

          <div className="flex flex-col">
            {
              acaraAdat.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, acaraAdat, setAcaraAdat, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, acaraAdat, setAcaraAdat, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok D: Konflik perusahaan dengan masyarakat sekitar</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Kemunculan dan penyelesaian konflik</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Bentuk penyelesaian konflik dalam waktu 3 tahun terakhir
            </div>
          </div>

          <div className="flex flex-col">
            {
              konflik.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, konflik, setKonflik, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, konflik, setKonflik, i, ii)}/>
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
export default FormSosial;
