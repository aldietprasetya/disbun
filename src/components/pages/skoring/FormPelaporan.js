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

const FormPelaporan = () => {
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

  const [pemilikanIzin, setPemilikanIzin] = useState([
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
      let retrievedObject = JSON.parse(localStorage.getItem('skoringPelaporan'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
          "skor": [],
        }

        const formPemilikanIzin = _.cloneDeep(pemilikanIzin)
        formPemilikanIzin.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject[0].criteriaId
          dtFrm[1].value = retrievedObject[0].subCategoryId
          replicateData.skor.push(dtFrm)
        })

        setPemilikanIzin(replicateData.skor)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {
    let data = []

    pemilikanIzin.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.criteriaId = item[0].value
        dataTemp.subCategoryId = Number(item[1].value)
      });
      data.push(dataTemp)
    });

    setDataSubmit(data)

  }, [pemilikanIzin])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(async () => {
    localStorage.setItem("skoringPelaporan", JSON.stringify(dataSubmit));

    router.push({
      pathname: "/admin/master-basis-data/konfirmasi"
    })
  })

  return (
    <>
      <form>

        <div className={`${mng["base__formsection"]}`}>

          <div className="rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right-bottom bg-no-repeat bg-contain p-3 mb-4 mt-10">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Variabel Penilaian
              </div>
            </div>
            <div className="px-8 text-xs">
            Pelaporan tentang:<br/>
            - Legalitas<br/>
            - Manajemen<br/>
            - Kebun<br/>
            - Pengolahan Hasil<br/>
            - Sosial<br/>
            - Ekonomi Wilayah<br/>
            - Lingkungan
            </div>
          </div>

          <div className="flex flex-col">
            {
              pemilikanIzin.map((items, i) => (
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
                              onChange={(e) => formRegularChange(e, pemilikanIzin, setPemilikanIzin, i, ii)}
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
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, pemilikanIzin, setPemilikanIzin, i, ii)}/>
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
export default FormPelaporan;
