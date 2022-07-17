import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import _ from 'lodash';
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'
import ChildStore from './store/kebun'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormAspekKebun = () => {
  const [isError, setIserror] = useState(false);

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState({})

  ////////////////////////// PEMANFAATAN LAHAN HGU ////////////////////////////////

  const [tanaman, setTanaman] = useState([])

  function handleBtnAddTanaman() {
    setTanaman([...tanaman,[ {'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':'','isOpt':false}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  ////////////////////////// PEMBIBITAN ////////////////////////////////

  const [bibit, setBibit] = useState([])

  function handleBtnAddBibit() {
    setBibit([...bibit,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  ////////////////////////// KEBUN INDUK ENTRES ////////////////////////////////

  const [kebun, setKebun] = useState([])

  function handleBtnAddKebun() {
    setKebun([...kebun,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  ////////////////////////// EMPLASMEN ////////////////////////////////

  const [emplasmen, setEmplasmen] = useState([])

  function handleBtnAddEmplasmen() {
    setEmplasmen([...emplasmen,[ {'title':'Jenis Emplasmen','placeholder':'Pilih Jenis Emplasmen','type':'text','value':'','isOpt':true}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]])
  }

  ////////////////////////// JALAN JEMBATAN ////////////////////////////////

  const [jalanJembatan, setJalanJembatan] = useState([])

  function handleBtnAddJalanJembatan() {
    setJalanJembatan([...jalanJembatan,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  ////////////////////////// AREAL CADANGAN ////////////////////////////////

  const [cadangan, setCadangan] = useState([])

  function handleBtnAddCadangan() {
    setCadangan([...cadangan,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  ////////////////////////// AREAL KONSERVASI ////////////////////////////////

  const [konservasi, setKonservasi] = useState([])

  function handleBtnAddKonservasi() {
    setKonservasi([...konservasi,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  ////////////////////////// Areal Tidak Mungkin Ditanami (TMD) ////////////////////////////////

  const [tmd, setTmd] = useState([])

  function handleBtnAddTmd() {
    setTmd([...tmd,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  ////////////////////////// Areal Sawah ////////////////////////////////

  const [sawah, setSawah] = useState([])

  function handleBtnAddSawah() {
    setSawah([...sawah,[ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]])
  }

  ////////////////////////// Pihak Ketiga ////////////////////////////////

  const [pihakKetiga, setPihakKetiga] = useState([])

  function handleBtnAddPihakKetiga() {
    setPihakKetiga([...pihakKetiga,[ {'title':'Jenis Pihak Ketiga','placeholder':'Pilih Jenis Pihak Ketiga','type':'text','value':'','isOpt':true}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]])
  }

  ////////////////////////// Lain-lain ////////////////////////////////

  const [lainnya, setLainnya] = useState([])

  function handleBtnAddLainnya() {
    setLainnya([...lainnya,[ {'title':'Jenis Areal Lain-lain','placeholder':'Jenis Areal','type':'text','value':'','isOpt':false}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]])
  }

  ////////////////////////// Topografi ////////////////////////////////

  const [topografi, setTopografi] = useState([])

  function handleBtnAddTopografi() {
    setTopografi([...topografi,[ { 'sectionTitle': 'Lereng Datar (0-8 %)', 'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Landai (8-15 %)', 'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Agak Curam (15-24 %)', 'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Curam (24-45 %)', 'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Sangat Curam (>45 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tipe Iklim','type':'text','placeholder':'Tipe Iklim','value':''}, {'title':'Curah Hujan (mm)','type':'text','placeholder':'Jumlah','value':''}, {'title':'Waktu Laporan','type':'text','placeholder':'MM/YYYY','value':''}, ] } ]])
  }

  ////////////////////////// Penanaman Baru ////////////////////////////////

  const [tanamBaru, setTanamBaru] = useState([])

  function handleBtnAddTanamBaru() {
    setTanamBaru([...tanamBaru,[ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Tahun Tanam','placeholder':'YYYY','type':'text','value':'','isOpt':false}, {'title':'Luas yang Digunakan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Jumlah Pohon','type':'text','placeholder':'Jumlah','value':'','isOpt':false} ]])
  }

  ////////////////////////// Komposisi Tanaman ////////////////////////////////

  const [komposisi, setKomposisi] = useState([])

  function handleBtnAddKomposisi() {
    setKomposisi([...komposisi,[ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'TBM (Ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':'','isOpt':false}, {'title':'TM (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'TTR (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false} ]])
  }

  ////////////////////////// Pemupukan ////////////////////////////////

  const [pemupukan, setPemupukan] = useState([])

  function handleBtnAddPemupukan() {
    setPemupukan([...pemupukan,[ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Luas yang Dipupuk (Ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':'','isOpt':false}, {'title':'Jenis pupuk','type':'text','placeholder':'Jenis Pupuk','value':'','isOpt':false}, {'title':'Dosis (kg/Ha)','type':'text','placeholder':'Jumlah Dosis','value':'','isOpt':false}, {'title':'Jumlah pupuk (Kg)','type':'text','placeholder':'Jumlah Pupuk','value':'','isOpt':false} ]])
  }

  ////////////////////////// Pengendalian Hama Penyakit ////////////////////////////////

  const [hamaKendali, setHamaKendali] = useState([])

  function handleBtnAddHamaKendali() {
    setHamaKendali([...hamaKendali,[ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':''}, {'title':'Jenis Hama Penyakit','type':'text','placeholder':'Jenis Hama Penyakit','value':''}, {'title':'Luas Serangan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Luas yang dikendalikan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, ] }, { 'sectionTitle': 'Luas Cara Pengendalian', 'sectionData': [ {'title':'Chemical (ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Hayati (ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Mekanis (ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''} ] } ]])
  }

  ////////////////////////// Diversifikasi Usaha Tani ////////////////////////////////

  const [disertifikasi, setDisertifikasi] = useState([])

  function handleBtnAddDisertifikasi() {
    setDisertifikasi([...disertifikasi,[ {'title':'Cabang Diversifikasi','placeholder':'Jenis Diversifikasi','type':'text','value':'','isOpt':false}, {'title':'Luas/volume','placeholder':'Luas/Volume','type':'text','value':'','isOpt':false}, {'title':'Produksi (Ton)','type':'text','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'Nilai (Rp)','type':'text','placeholder':'Nilai dalam Rupiah','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]])
  }

  ////////////////////////// Produksi dan Produktivitas ////////////////////////////////

  const [produksiProduktivitas, setProduksiProduktivitas] = useState([])

  function handleBtnAddProduksiProduktivitas() {
    setProduksiProduktivitas([...produksiProduktivitas,[ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Luas TM (ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':'','isOpt':false}, {'title':'Luas yang dipanen (ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Produksi mentah (kg)','type':'text','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'produksi kering (kg)','type':'text','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'Produktivitas (kg/ha/tahun)','type':'text','placeholder':'Nilai Produktivitas','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]])
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
      let retrievedObject = JSON.parse(localStorage.getItem('KebunReport'));

      if (!_.isEmpty(retrievedObject)) {
        setTanaman(retrievedObject.plant)
        setBibit(retrievedObject.seed)
        setKebun(retrievedObject.sprout)
        setEmplasmen(retrievedObject.emplacement)
        setJalanJembatan(retrievedObject.road)
        setCadangan(retrievedObject.backupArea)
        setKonservasi(retrievedObject.conservationArea)
        setTmd(retrievedObject.tmd)
        setSawah(retrievedObject.riceField)
        setPihakKetiga(retrievedObject.thirdParty)
        setLainnya(retrievedObject.other)
        setTopografi(retrievedObject.topography)
        setTanamBaru(retrievedObject.newPlanting)
        setKomposisi(retrievedObject.composition)
        setPemupukan(retrievedObject.fertilization)
        setHamaKendali(retrievedObject.pestControl)
        setDisertifikasi(retrievedObject.diversification)
        setProduksiProduktivitas(retrievedObject.productivity)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {
    setDataSubmit({
      "plant": tanaman,
      "seed": bibit,
      "sprout": kebun,
      "emplacement": emplasmen,
      "road": jalanJembatan,
      "backupArea": cadangan,
      "conservationArea": konservasi,
      "tmd": tmd,
      "riceField": sawah,
      "thirdParty": pihakKetiga,
      "other": lainnya,
      "topography": topografi,
      "newPlanting": tanamBaru,
      "composition": komposisi,
      "fertilization": pemupukan,
      "pestControl": hamaKendali,
      "diversification": disertifikasi,
      "productivity": produksiProduktivitas
    })

  }, [tanaman,bibit,kebun,emplasmen,jalanJembatan,cadangan,konservasi
    ,tmd,sawah,pihakKetiga,lainnya,topografi,tanamBaru
    ,komposisi,pemupukan,hamaKendali,disertifikasi,produksiProduktivitas])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(() => {
    localStorage.setItem("KebunReport", JSON.stringify(dataSubmit));
    let data = {
      "plant": [],
      "seed": [],
      "sprout": [],
      "emplacement": [],
      "road": [],
      "backupArea": [],
      "conservationArea": [],
      "tmd": [],
      "riceField": [],
      "thirdParty": [],
      "other": [],
      "topography": [],
      "newPlanting": [],
      "composition": [],
      "fertilization": [],
      "pestControl": [],
      "diversification": [],
      "productivity": []
    }

    tanaman.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.plantType = item[0].value
        dataTemp.villageId = item[1].value
        dataTemp.description = item[2].value
        dataTemp.area = item[3].value
      });
      data.plant.push(dataTemp)
    });

    bibit.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.villageId = item[0].value
        dataTemp.area = item[1].value
        dataTemp.description = item[2].value
      });
      data.seed.push(dataTemp)
    });

    kebun.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.villageId = item[0].value
        dataTemp.area = item[1].value
        dataTemp.description = item[2].value
      });
      data.sprout.push(dataTemp)
    });

    emplasmen.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.emplacementType = item[0].value
        dataTemp.villageId = item[1].value
        dataTemp.area = item[2].value
        dataTemp.description = item[3].value
      });
      data.emplacement.push(dataTemp)
    });

    jalanJembatan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.villageId = item[0].value
        dataTemp.area = item[1].value
        dataTemp.description = item[2].value
      });
      data.road.push(dataTemp)
    });

    cadangan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.villageId = item[0].value
        dataTemp.area = item[1].value
        dataTemp.description = item[2].value
      });
      data.backupArea.push(dataTemp)
    });

    konservasi.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.villageId = item[0].value
        dataTemp.area = item[1].value
        dataTemp.description = item[2].value
      });
      data.conservationArea.push(dataTemp)
    });

    tmd.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.villageId = item[0].value
        dataTemp.area = item[1].value
        dataTemp.description = item[2].value
      });
      data.tmd.push(dataTemp)
    });

    sawah.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.villageId = item[0].value
        dataTemp.area = item[1].value
        dataTemp.description = item[2].value
      });
      data.riceField.push(dataTemp)
    });

    pihakKetiga.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.thirdPartyType = item[0].value
        dataTemp.villageId = item[1].value
        dataTemp.area = item[2].value
        dataTemp.description = item[3].value
      });
      data.thirdParty.push(dataTemp)
    });

    lainnya.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.thirdPartyType = item[0].value
        dataTemp.villageId = item[1].value
        dataTemp.area = item[2].value
        dataTemp.description = item[3].value
      });
      data.other.push(dataTemp)
    });

    tanamBaru.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.plantType = item[0].value
        dataTemp.year = item[1].value
        dataTemp.area = item[2].value
        dataTemp.plantCount = item[3].value
      });
      data.newPlanting.push(dataTemp)
    });

    komposisi.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.plantType = item[0].value
        dataTemp.tbm = item[1].value
        dataTemp.tm = item[2].value
        dataTemp.ttr = item[3].value
      });
      data.composition.push(dataTemp)
    });

    pemupukan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.plantType = item[0].value
        dataTemp.area = item[1].value
        dataTemp.fertilizerType = item[2].value
        dataTemp.dose = item[3].value
        dataTemp.fertilizerAmount = item[4].value
      });
      data.fertilization.push(dataTemp)
    });

    disertifikasi.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.diversificationType = item[0].value
        dataTemp.area = item[1].value
        dataTemp.totalProduction = item[2].value
        dataTemp.value = item[3].value
        dataTemp.description = item[4].value
      });
      data.diversification.push(dataTemp)
    });

    produksiProduktivitas.forEach((item, i) => {
      let dataTemp = {}
      item.forEach(() => {
        dataTemp.plantType = item[0].value
        dataTemp.landArea = item[1].value
        dataTemp.harvestArea = item[2].value
        dataTemp.rawProduction = item[3].value
        dataTemp.dryProduction = item[4].value
        dataTemp.productivity = item[5].value
        dataTemp.description = item[6].value
      });
      data.productivity.push(dataTemp)
    });

    topografi.forEach((item, i) => {
      let dataTemp = {
        flat:{},
        slope:{},
        midSteep:{},
        steep:{},
        verySteep:{},
      }
      item.forEach((item2, ii, arr) => {
        dataTemp.flat.area = arr[0].sectionData[0].value
        dataTemp.flat.percentage = arr[0].sectionData[1].value
        dataTemp.flat.description = arr[0].sectionData[2].value

        dataTemp.slope.area = arr[1].sectionData[0].value
        dataTemp.slope.percentage = arr[1].sectionData[1].value
        dataTemp.slope.description = arr[1].sectionData[2].value

        dataTemp.midSteep.area = arr[2].sectionData[0].value
        dataTemp.midSteep.percentage = arr[2].sectionData[1].value
        dataTemp.midSteep.description = arr[2].sectionData[2].value

        dataTemp.steep.area = arr[3].sectionData[0].value
        dataTemp.steep.percentage = arr[3].sectionData[1].value
        dataTemp.steep.description = arr[3].sectionData[2].value

        dataTemp.verySteep.area = arr[4].sectionData[0].value
        dataTemp.verySteep.percentage = arr[4].sectionData[1].value
        dataTemp.verySteep.description = arr[4].sectionData[2].value
        dataTemp.verySteep.climateType = arr[4].sectionData[3].value
        dataTemp.verySteep.rainfall = arr[4].sectionData[4].value
        dataTemp.verySteep.reportDate = arr[4].sectionData[5].value
      });
      data.topography.push(dataTemp)
    });

    hamaKendali.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.plantType = arr[0].sectionData[0].value
        dataTemp.pestType = arr[0].sectionData[1].value
        dataTemp.attackedArea = arr[0].sectionData[2].value
        dataTemp.controlledArea = arr[0].sectionData[3].value
        dataTemp.chemicalArea = arr[1].sectionData[0].value
        dataTemp.biologicalArea = arr[1].sectionData[1].value
        dataTemp.mechanicalArea = arr[1].sectionData[2].value
      });
      data.pestControl.push(dataTemp)
    });

    localStorage.setItem("dataSubmitKebun", JSON.stringify(data));

    router.push({
      pathname: "/pelaporan-perkebunan/aspek-pengolahan/"
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

          <span className={mng.base__subtitle}>Pemanfaatan Lahan HGU</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tanaman</p>

          <div className="flex flex-col">
            {
              tanaman.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, tanaman, setTanaman)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, tanaman, setTanaman, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, tanaman, setTanaman, i, ii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddTanaman}>
            + Tambah Data Komoditas
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pembibitan</p>
          <div className="flex flex-col mt-3">
            {
              bibit.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, bibit, setBibit)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, bibit, setBibit, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, bibit, setBibit, i, ii)}/>
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

          <div className={mng.base__btn} onClick={handleBtnAddBibit}>
            + Tambah Data Jenis Tanaman
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Kebun Induk Entres</p>
          <div className="flex flex-col mt-3">
            {
              kebun.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kebun, setKebun)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, kebun, setKebun, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, kebun, setKebun, i, ii)}/>
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

          <div className={mng.base__btn} onClick={handleBtnAddKebun}>
            + Tambah Data Jenis Tanaman
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Emplasmen</p>

          <div className="flex flex-col">
            {
              emplasmen.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, emplasmen, setEmplasmen)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, emplasmen, setEmplasmen, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, emplasmen, setEmplasmen, i, ii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddEmplasmen}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Jalan/Jembatan</p>
          <div className="flex flex-col mt-3">
            {
              jalanJembatan.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, jalanJembatan, setJalanJembatan)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, jalanJembatan, setJalanJembatan, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, jalanJembatan, setJalanJembatan, i, ii)}/>
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

          <div className={mng.base__btn} onClick={handleBtnAddJalanJembatan}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Areal Cadangan</p>
          <div className="flex flex-col mt-3">
            {
              cadangan.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, cadangan, setCadangan)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, cadangan, setCadangan, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, cadangan, setCadangan, i, ii)}/>
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

          <div className={mng.base__btn} onClick={handleBtnAddCadangan}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Areal Konservasi</p>
          <div className="flex flex-col mt-3">
            {
              konservasi.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
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
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, konservasi, setKonservasi, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, konservasi, setKonservasi, i, ii)}/>
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

          <div className={mng.base__btn} onClick={handleBtnAddKonservasi}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Areal Tidak Mungkin Ditanami (TMD)</p>
          <div className="flex flex-col mt-3">
            {
              tmd.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, tmd, setTmd)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, tmd, setTmd, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, tmd, setTmd, i, ii)}/>
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

          <div className={mng.base__btn} onClick={handleBtnAddTmd}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Areal Sawah</p>
          <div className="flex flex-col mt-3">
            {
              sawah.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, sawah, setSawah)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, sawah, setSawah, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, sawah, setSawah, i, ii)}/>
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

          <div className={mng.base__btn} onClick={handleBtnAddSawah}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pihak Ketiga</p>

          <div className="flex flex-col">
            {
              pihakKetiga.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, pihakKetiga, setPihakKetiga)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, pihakKetiga, setPihakKetiga, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, pihakKetiga, setPihakKetiga, i, ii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddPihakKetiga}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Lain-lain</p>

          <div className="flex flex-col">
            {
              lainnya.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, lainnya, setLainnya)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, lainnya, setLainnya, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, lainnya, setLainnya, i, ii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddLainnya}>
            + Tambah Areal Pemanfaatan
          </div>

        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Topografi</span>
          <div className="flex flex-col">
            {
              topografi.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, topografi, setTopografi)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`flex flex-wrap`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, topografi, setTopografi, i, ii, iii)}/>
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

          {/* <div className={mng.base__btn} onClick={handleBtnAddTopografi}>
            + Tambah Data Jenis Cabang Usaha Tani
          </div> */}

        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Penanaman Baru</span>

          <div className="flex flex-col">
            {
              tanamBaru.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, tanamBaru, setTanamBaru)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, tanamBaru, setTanamBaru, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddTanamBaru}>
            + Tambah Jenis Penanaman Baru
          </div>
        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Komposisi Tanaman</p>

          <div className="flex flex-col">
            {
              komposisi.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]} ${mng["base__formlabel_unique3-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, komposisi, setKomposisi)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, komposisi, setKomposisi, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddKomposisi}>
            + Tambah Jenis Penanaman Baru
          </div>
        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pemupukan</p>

          <div className="flex flex-col">
            {
              pemupukan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, pemupukan, setPemupukan)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, pemupukan, setPemupukan, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddPemupukan}>
            + Tambah Jenis Penanaman Baru
          </div>
        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pengendalian Hama Penyakit</p>

          <div className="flex flex-col">
            {
              hamaKendali.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, hamaKendali, setHamaKendali)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_unique3-secnormal"]}`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_unique3"]} ${mng["base__formlabel_unique3-firstfull"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, hamaKendali, setHamaKendali, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddHamaKendali}>
            + Tambah Jenis Penanaman Baru
          </div>
        </div>

        <div className={mng.base__formsection}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Diversifikasi Usaha Tani</p>

          <div className="flex flex-col">
            {
              disertifikasi.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, disertifikasi, setDisertifikasi)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, disertifikasi, setDisertifikasi, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddDisertifikasi}>
            + Tambah Jenis Penanaman Baru
          </div>
        </div>

        <div className={`${["mng.base__formsection"]} border-b-0`}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Produksi dan Produktivitas</p>

          <div className="flex flex-col">
            {
              produksiProduktivitas.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, produksiProduktivitas, setProduksiProduktivitas)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, produksiProduktivitas, setProduksiProduktivitas, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddProduksiProduktivitas}>
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
  );
};

export default FormAspekKebun;
