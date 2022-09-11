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

const FormEkonomi = () => {
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

  const [bayarPajak, setBayarPajak] = useState([
    [
      {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true},
      {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false}
    ]
  ])

  const [serapStaf, setSerapStaf] = useState([
    [
      {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true},
      {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false}
    ]
  ])

  const [serapNoStaf, setSerapNoStaf] = useState([
    [
      {'title':'Penilaian','placeholder':'Pilih Kriteria Penilaian','type':'text','value':'','isOpt':true},
      {'title':'Skor','placeholder':'Skor','type':'number','value':'','isOpt':false}
    ]
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
      let retrievedObject = JSON.parse(localStorage.getItem('skoringEkonomi'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
          "bayarPajak": [],
          "serapStaf": [],
          "serapNoStaf": [],
        }

        const formBayarPajak = _.cloneDeep(bayarPajak)
        formBayarPajak.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.bayarPajak.push(dtFrm)
        })

        const formSerapStaf = _.cloneDeep(serapStaf)
        formSerapStaf.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[1].criteriaId
          dtFrm[1].value = retrievedObject[1].subCategoryId
          replicateData.serapStaf.push(dtFrm)
        })

        const formSerapNoStaf = _.cloneDeep(serapNoStaf)
        formSerapNoStaf.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[2].criteriaId
          dtFrm[1].value = retrievedObject[2].subCategoryId
          replicateData.serapNoStaf.push(dtFrm)
        })

        setBayarPajak(replicateData.bayarPajak)
        setSerapStaf(replicateData.serapStaf)
        setSerapNoStaf(replicateData.serapNoStaf)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {
    let data = []

    bayarPajak.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });

    serapStaf.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });

    serapNoStaf.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });

    setDataSubmit(data)

  }, [bayarPajak,serapStaf,serapNoStaf])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(async () => {
    localStorage.setItem("skoringEkonomi", JSON.stringify(dataSubmit));

    let data = _.cloneDeep(dataSubmit);

    data.forEach((item, i) => {
      item.criteriaId = item.criteriaId.id
    });

    const res = axios.post(
      `${appConfig.baseUrl}/evaluations/${localStorage.getItem('evaluationId')}/scorings/${localStorage.getItem('scoringId')}/economics`,
      {
        score: data
      }
    );

    res.then(
      function(dt) {

        if (dt.data.status == 'success') {
          router.push({
            pathname: "/admin/master-basis-data/lingkungan"
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
          <span className={mng.base__subtitle}>Kelompok A: Pajak dan pendapatan pekerja</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Pembayaran pajak dan retribusi</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Kepatuhan dan waktu pembayaran
            </div>
          </div>

          <div className="flex flex-col">
            {
              bayarPajak.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, bayarPajak, setBayarPajak, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, bayarPajak, setBayarPajak, i, ii)}/>
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
          <span className={mng.base__subtitle}>Kelompok B: Penyerapan tenaga kerja lokal</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 1: Penyerapan tenaga kerja lokal untuk posisi staf</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Perbandingan antara jumlah staf yang berasal dari tenaga kerja lokal terhadap total tenaga staf
            </div>
          </div>

          <div className="flex flex-col">
            {
              serapStaf.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, serapStaf, setSerapStaf, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, serapStaf, setSerapStaf, i, ii)}/>
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

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Subkelompok 2: Penyerapan tenaga lokal untuk posisi non staf</p>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-1">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
              Perbandingan antara jumlah staf yang berasal dari tenaga kerja lokal terhadap total tenaga staf
            </div>
          </div>

          <div className="flex flex-col">
            {
              serapNoStaf.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, serapNoStaf, setSerapNoStaf, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, serapNoStaf, setSerapNoStaf, i, ii)}/>
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
export default FormEkonomi;
