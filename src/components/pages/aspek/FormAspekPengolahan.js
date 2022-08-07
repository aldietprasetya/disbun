import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import _ from 'lodash';
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'
import ChildStore from './store/olah'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}


const FormAspekPengolahan = () => {
  const [isError, setIsError] = useState(false);

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState({})

  ////////////////////////// Jenis dan Kapasitas ////////////////////////////////

  const [jenisKapasitas, setJenisKapasitas] = useState([])

  function handleBtnAddJenisKapasitas() {
    setJenisKapasitas([...jenisKapasitas,[ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis UPH','type':'text','placeholder':'Jenis UPH','value':''}, {'title':'Jumlah (unit)','type':'text','placeholder':'Luas/Volume','value':''}, {'title':'Luas bangunan (m2)','type':'text','placeholder':'Luas','value':''}, ] }, { 'sectionTitle': 'Total Kapasitas', 'sectionData': [ {'title':'Terpasang (kg/hari)','type':'text','placeholder':'Jumlah','value':''}, {'title':'terpakai (kg/hari)','type':'text','placeholder':'Jumlah','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}, ] }, ]])
  }

  ////////////////////////// Sumber Bahan Baku ////////////////////////////////

  const [bahanBaku, setBahanBaku] = useState([])

  function handleBtnAddJenisBahanBaku() {
    setBahanBaku([...bahanBaku,[ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis UPH','type':'text','placeholder':'Jenis Tanaman','value':'','isOpt':false}, ] }, { 'sectionTitle': 'Asal Bahan Baku', 'sectionData': [ {'title':'Kab/Kota','type':'text','placeholder':'Pilih Kab/Kota','value':'','isOpt':true}, {'title':'Volume','type':'text','placeholder':'Volume','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ] }, ]])
  }

  ////////////////////////// Pemasaran ////////////////////////////////

  const [pemasaran, setPemasaran] = useState([])

  function handleBtnAddPemasaran() {
    setPemasaran([...pemasaran,[ {'title':'Komoditas','placeholder':'Jenis Komoditas','type':'text','value':'','isOpt':false}, {'title':'Jenis Mutu','placeholder':'Jenis Mutu','type':'text','value':'','isOpt':false}, {'title':'Lokal/Ekspor','type':'text','placeholder':'Pilih Jenis Pemasaran','value':'','isOpt':true}, {'title':'Biaya Produksi (Rp/Kg)','type':'text','placeholder':'Nilai Produksi','value':'','isOpt':false}, {'title':'Harga Jual (Rp/Kg)','type':'text','placeholder':'Nilai Jual','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  ////////////////////////// Jenis Mutu Akhir ////////////////////////////////

  const [mutu, setMutu] = useState([])

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
          [
            {'title':'Jenis Mutu Akhir','type':'text','placeholder':'Jumlah','value':''},
            {'title':'Volume Produksi (kg)','type':'text','placeholder':'Volume','value':''}
          ]
        ]
      },
    ]])
  }

  function handleBtnAddMutuOlah(i) {

    // console.log(mutu[i][2].sectionData)

    // setMutu([...mutu[i][2].sectionData,[
    //   {'title':'Jenis Mutu Akhir','type':'text','placeholder':'Jumlah','value':''},
    //   {'title':'Volume Produksi (kg)','type':'text','placeholder':'Volume','value':''}
    // ]])
  }

  function mutuRemoveLabel(i) {
    setMutu(mutu.filter((item, idx) => idx != i))
  }

  function mutuChange(e, index, index2, index3, index4) {
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
                if (Array.isArray(item3)) {
                  item3.forEach((item4, iiii) => {
                    if (iiii == index4) {
                      item4.value = value
                    }
                  })
                } else {
                  item3.value = value
                }
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

  function formSectionChange(e, state, setState, index, index2, index3) {
    const { name, value } = e.target;
    const list = [...state];
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
    setState(list);
  }

  useEffect(() => {
    if (initialLoad) {
      let retrievedObject = JSON.parse(localStorage.getItem('olahReport'));

      if (!_.isEmpty(retrievedObject)) {
        setJenisKapasitas(retrievedObject.capacity)
        setBahanBaku(retrievedObject.material)
        setPemasaran(retrievedObject.marketing)
        setMutu(retrievedObject.quality)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {
    setDataSubmit({
      'capacity': jenisKapasitas,
      'material':bahanBaku,
      'quality':mutu,
      'marketing':pemasaran
    })

  }, [jenisKapasitas,bahanBaku,mutu,pemasaran])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(() => {
    localStorage.setItem("manajementOlah", JSON.stringify(dataSubmit));

    let data = {
      capacity: [],
      material: [],
      quality: [],
      marketing: [],
    }

    jenisKapasitas.forEach((item, i) => {
      let rencanaInv = {}
      item.forEach((e, i, arr) => {
        rencanaInv.uphType = arr[0].sectionData[0].value
        rencanaInv.buildingArea = arr[0].sectionData[1].value
        rencanaInv.total = arr[0].sectionData[2].value
        rencanaInv.installed = arr[1].sectionData[0].value
        rencanaInv.used = arr[1].sectionData[1].value
        rencanaInv.description = arr[1].sectionData[2].value
      });
      data.capacity.push(rencanaInv)
    });

    bahanBaku.forEach((item, i) => {
      let rencanaInv = {}
      item.forEach((e, i, arr) => {
        rencanaInv.uphType = arr[0].sectionData[0].value
        rencanaInv.cityId = arr[1].sectionData[0].value
        rencanaInv.volume = arr[1].sectionData[1].value
        rencanaInv.description = arr[1].sectionData[2].value
      });
      data.material.push(rencanaInv)
    });

    pemasaran.forEach((item, i) => {
      let rencanaInv = {}
      item.forEach(() => {
        rencanaInv.comodity = item[0].value
        rencanaInv.qualityType = item[1].value
        rencanaInv.cost = item[2].value
        rencanaInv.price = item[3].value
        rencanaInv.targetMarketId = item[4].value
        rencanaInv.description = item[5].value
      });
      data.marketing.push(rencanaInv)
    });

    mutu.forEach((item, i) => {
      let rencanaInv = {}
      item.forEach((e, i, arr) => {
        let a = []
        if (Array.isArray(e.sectionData)) {
          let b = {
            qualityType: arr[2].sectionData[0][0].value,
            volume: arr[2].sectionData[0][1].value
          }
          a.push(b)
        }

        rencanaInv.uphType = arr[0].sectionData[0].value
        rencanaInv.selfMaterial = arr[1].sectionData[0].value
        rencanaInv.internalMaterial = arr[1].sectionData[1].value
        rencanaInv.broughtMaterial = arr[1].sectionData[2].value
        rencanaInv.processingResult = a
      });
      data.quality.push(rencanaInv)
    });

    localStorage.setItem("dataSubmitOlah", JSON.stringify(data));

    console.log('Data Send Pengolahan')
    console.log('=========================================================')
    console.log(data)
    console.log('=========================================================')

    router.push({
      pathname: "/user/pelaporan-perkebunan/aspek-sosial/"
    })
  })

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>

      <ChildStore/>

      <form>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Jenis dan Kapasitas</span>

          <div className="flex flex-col">
            {
              jenisKapasitas.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, jenisKapasitas, setJenisKapasitas)}>
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
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, jenisKapasitas, setJenisKapasitas, i, ii, iii)}/>
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
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, bahanBaku, setBahanBaku)}>
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
                                      onChange={(e) => formSectionChange(e, bahanBaku, setBahanBaku, i, ii, iii)}
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
                                    <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, bahanBaku, setBahanBaku, i, ii, iii)}/>
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
                            <>
                              {
                                Array.isArray(child) ? (
                                  <div className="w-full flex relative mt-1">
                                    {
                                      iii > 0 ?
                                      <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => mutuRemoveLabel(i)}>
                                        do_not_disturb_on
                                      </span>
                                      :
                                      <></>
                                    }
                                    {
                                      child.map((child2, iiii) => (
                                        <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iiii}>
                                          <span className={mng.base__inputtitle}>{child2.title}</span>
                                          <input className={mng.base__inputbase} type={child2.type} min='0' placeholder={child2.placeholder} value={child2.value} onChange={(e) => mutuChange(e, i, ii, iii, iiii)}/>
                                        </label>
                                      ))
                                    }
                                  </div>
                                ) : (
                                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                                    <span className={mng.base__inputtitle}>{child.title}</span>
                                    <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => mutuChange(e, i, ii, iii)}/>
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
                  <div className={`${mng["base__btn"]} mb-2`} onClick={() => handleBtnAddMutuOlah(i)}>
                    + Tambah Hasil Olah Lainnya
                  </div>
                </div>
              ))
            }
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
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, pemasaran, setPemasaran)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, pemasaran, setPemasaran, i, ii)}/>
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

          <button className={`${mng["base__btnsimpan"]} ${"float-right mt-1"}`} onClick={storeData}>
            Simpan dan Lanjutkan
          </button>
        </div>

      </form>
    </>
  )
};

export default FormAspekPengolahan;
