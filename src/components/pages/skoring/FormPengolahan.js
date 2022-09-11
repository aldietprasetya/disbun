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

const FormPengolahan = () => {
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

  const [kapasitasTerpasang, setKapasitasTerpasang] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [kapasitasTerpakai, setKapasitasTerpakai] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [efisiensi, setEfisiensi] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [penolong, setPenolong] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [produkPrimer, setProdukPrimer] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [hasilSamping, setHasilSamping] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [limbahCair, setLimbahCair] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [hasilProduk, setHasilProduk] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [standarMutu, setStandarMutu] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [capaiMutu, setCapaiMutu] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [energi, setEnergi] = useState([
    [ {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true}, {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false} ]
  ])
  const [mitraOlah, setMitraOlah] = useState([
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
      let retrievedObject = JSON.parse(localStorage.getItem('skoringOlahHasil'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
          "kapasitasTerpasang": [],
          "kapasitasTerpakai": [],
          "efisiensi": [],
          "penolong": [],
          "produkPrimer": [],
          "hasilSamping": [],
          "limbahCair": [],
          "hasilProduk": [],
          "standarMutu": [],
          "capaiMutu": [],
          "energi": [],
          "mitraOlah": [],
        }

        const formkapasitasTerpasang = _.cloneDeep(kapasitasTerpasang)
        formkapasitasTerpasang.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.kapasitasTerpasang.push(dtFrm)
        })
        const formkapasitasTerpakai = _.cloneDeep(kapasitasTerpakai)
        formkapasitasTerpakai.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.kapasitasTerpakai.push(dtFrm)
        })
        const formefisiensi = _.cloneDeep(efisiensi)
        formefisiensi.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.efisiensi.push(dtFrm)
        })
        const formpenolong = _.cloneDeep(penolong)
        formpenolong.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.penolong.push(dtFrm)
        })
        const formprodukPrimer = _.cloneDeep(produkPrimer)
        formprodukPrimer.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.produkPrimer.push(dtFrm)
        })
        const formhasilSamping = _.cloneDeep(hasilSamping)
        formhasilSamping.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.hasilSamping.push(dtFrm)
        })
        const formlimbahCair = _.cloneDeep(limbahCair)
        formlimbahCair.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.limbahCair.push(dtFrm)
        })
        const formhasilProduk = _.cloneDeep(hasilProduk)
        formhasilProduk.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.hasilProduk.push(dtFrm)
        })
        const formstandarMutu = _.cloneDeep(standarMutu)
        formstandarMutu.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.standarMutu.push(dtFrm)
        })
        const formcapaiMutu = _.cloneDeep(capaiMutu)
        formcapaiMutu.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.capaiMutu.push(dtFrm)
        })
        const formenergi = _.cloneDeep(energi)
        formenergi.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.energi.push(dtFrm)
        })
        const formmitraOlah = _.cloneDeep(mitraOlah)
        formmitraOlah.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.mitraOlah.push(dtFrm)
        })

        setKapasitasTerpasang(replicateData.kapasitasTerpasang)
        setKapasitasTerpakai(replicateData.kapasitasTerpakai)
        setEfisiensi(replicateData.efisiensi)
        setPenolong(replicateData.penolong)
        setProdukPrimer(replicateData.produkPrimer)
        setHasilSamping(replicateData.hasilSamping)
        setLimbahCair(replicateData.limbahCair)
        setHasilProduk(replicateData.hasilProduk)
        setStandarMutu(replicateData.standarMutu)
        setCapaiMutu(replicateData.capaiMutu)
        setEnergi(replicateData.energi)
        setMitraOlah(replicateData.mitraOlah)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {
    let data = []

    kapasitasTerpasang.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    kapasitasTerpakai.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    efisiensi.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    penolong.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    produkPrimer.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    hasilSamping.forEach((item, i) => {
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
    hasilProduk.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    standarMutu.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    capaiMutu.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    energi.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });
    mitraOlah.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });

    setDataSubmit(data)

  }, [kapasitasTerpasang,kapasitasTerpakai,efisiensi
    ,penolong,produkPrimer,hasilSamping,limbahCair
    ,hasilProduk,standarMutu,capaiMutu,energi,mitraOlah])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(async () => {
    localStorage.setItem("skoringOlahHasil", JSON.stringify(dataSubmit));

    let data = _.cloneDeep(dataSubmit);

    data.forEach((item, i) => {
      item.criteriaId = item.criteriaId.id
    });

    const res = axios.post(
      `${appConfig.baseUrl}/evaluations/${localStorage.getItem('evaluationId')}/scorings/${localStorage.getItem('scoringId')}/result-processings`,
      {
        score: data
      }
    );

    res.then(
      function(dt) {

        if (dt.data.status == 'success') {
          router.push({
            pathname: "/admin/master-basis-data/sosial"
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
          <span className={mng.base__subtitle}>Kelompok A: Unit pengolahan hasil/ pabrik </span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Kapasitas terpasang</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Rasio kapasitas terpasang terhadap kapasitas izin
            </div>
          </div>

          <div className="flex flex-col">
            {
              kapasitasTerpasang.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, kapasitasTerpasang, setKapasitasTerpasang, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, kapasitasTerpasang, setKapasitasTerpasang, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 2: Kapasitas terpakai</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Rasio kapasitas terpakai terhadap Kapasitas terpasang
            </div>
          </div>

          <div className="flex flex-col">
            {
              kapasitasTerpakai.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, kapasitasTerpakai, setKapasitasTerpakai, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, kapasitasTerpakai, setKapasitasTerpakai, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok B: Efisiensi Pengolahan </span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Tingkat Efisiensi Pengolahan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
            Prosentase pencapaian rendemen. Rendemen standar didasarkan pada standar badan litbang
            </div>
          </div>

          <div className="flex flex-col">
            {
              efisiensi.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, efisiensi, setEfisiensi, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, efisiensi, setEfisiensi, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok C: Bahan penolong </span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Bahan penolong yang digunakan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Sesuai rekomendasi teknis badan litbang untuk pengolahan masing-masing komoditi.
            </div>
          </div>

          <div className="flex flex-col">
            {
              penolong.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, penolong, setPenolong, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, penolong, setPenolong, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok D: Hasil olah </span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Produk primer</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Standar kualitas produk menurut badan litbang
            </div>
          </div>

          <div className="flex flex-col">
            {
              produkPrimer.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, produkPrimer, setProdukPrimer, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, produkPrimer, setProdukPrimer, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok E: Hasil Samping </span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Pemanfaatan hasil samping</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Persentase pemanfaatan hasil samping
            </div>
          </div>

          <div className="flex flex-col">
            {
              hasilSamping.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, hasilSamping, setHasilSamping, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, hasilSamping, setHasilSamping, i, ii)}/>
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
              Pemanfaatan limbah cair
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
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Kelompok F: Produk dan mutu </span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Produk yang dihasilkan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Jenis produk
            </div>
          </div>

          <div className="flex flex-col">
            {
              hasilProduk.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, hasilProduk, setHasilProduk, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, hasilProduk, setHasilProduk, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 2: Standar mutu yang digunakan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Prosentase pencapaian standar mutu
            </div>
          </div>

          <div className="flex flex-col">
            {
              standarMutu.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, standarMutu, setStandarMutu, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, standarMutu, setStandarMutu, i, ii)}/>
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
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 3: Capaian mutu</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Mutu produk (standar SNI. Apabila standar SNI belum ada, digunakan standar badan litbang).
            </div>
          </div>

          <div className="flex flex-col">
            {
              capaiMutu.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, capaiMutu, setCapaiMutu, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, capaiMutu, setCapaiMutu, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok G: Energi </span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Sumber energi untuk unit pengolahan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Jenis sumber energi
            </div>
          </div>

          <div className="flex flex-col">
            {
              energi.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, energi, setEnergi, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, energi, setEnergi, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok H: Kemitraan Pengolahan </span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Kemitraan pengolahan</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Kemitraan pengolahan dengan pekebun
            </div>
          </div>

          <div className="flex flex-col">
            {
              mitraOlah.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, mitraOlah, setMitraOlah, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, mitraOlah, setMitraOlah, i, ii)}/>
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
export default FormPengolahan;
