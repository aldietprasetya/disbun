import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import _ from 'lodash';
import InputFileButton from 'src/components/customInput/InputFileButton';
import InputForm from '../admin/infografis/InputForm';
import mng from 'src/styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormLingkungan = () => {
  const [isError, setIsError] = useState(false);

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState({})

  ////////////////////////// INPUT FORM STATE ////////////////////////////////

  const [tidakTerlibat, setTidakTerlibat] = useState('');
  const [orgPengangan, setOrgPengangan] = useState('');
  const [jmlPengangan, setJmlPengangan] = useState('');
  const [teknikPengolahan, setTeknikPengolahan] = useState('');
  const [tidakPantauAlasan, setTidakPantauAlasan] = useState('');
  const [tidakPantau, setTidakPantau] = useState('');
  const [laporInstansi, setLaporInstansi] = useState('');
  const [mnjLingkungan, setMnjLingkungan] = useState('');
  const [pengangananLmbahPdt, setPengangananLmbahPdt] = useState('');
  const [pengangananLmbahCair, setPengangananLmbahCair] = useState('');

  ////////////////////////// Kelola Lingkungan ////////////////////////////////

  const [kelolaLingkungan, setKelolaLingkungan] = useState([
    [
      {
        'sectionTitle': '',
        'sectionData': [
          {'title':'Tahun','type':'text','placeholder':'.YYY','value':''},
        ]
      },
      {
        'sectionTitle': 'Tindakan Konservasi',
        'sectionData': [
          {'title':'Kegiatan yang dilaksanakan','type':'text','placeholder':'.masukkan jenis kegiatan','value':''},
          {'title':'Rencana (unit)','type':'text','placeholder':'masukkan dalam satuan unit','value':''},
          {'title':'Realisasi (unit)','type':'text','placeholder':'.masukkan dalam satuan unit','value':''},
        ]
      },
    ]
  ])

  function handleBtnAddKelolaLingkungan() {
    setKelolaLingkungan([...kelolaLingkungan,[ {
      'sectionTitle': '',
      'sectionData': [
        {'title':'Tahun','type':'text','placeholder':'.YYY','value':''},
      ]
    },
    {
      'sectionTitle': 'Tindakan Konservasi',
      'sectionData': [
        {'title':'Kegiatan yang dilaksanakan','type':'text','placeholder':'.masukkan jenis kegiatan','value':''},
        {'title':'Rencana (unit)','type':'text','placeholder':'masukkan dalam satuan unit','value':''},
        {'title':'Realisasi (unit)','type':'text','placeholder':'.masukkan dalam satuan unit','value':''},
      ]
    }, ]])
  }

  ////////////////////////// Jenis Kegiatan ////////////////////////////////

  const [jenisKegiatan, setJenisKegiatan] = useState([
    [
      {'title':'Jenis Kegiatan','placeholder':'.masukkan jenis kegiatan','type':'text','value':'','isOpt':false},
      {'title':'Frekuensi (Tetap/Insidentil)','placeholder':'masukkan keterangan frekuensi','type':'text','value':'','isOpt':false},
    ]
  ])

  function handleBtnAddJenisKegiatan() {
    setJenisKegiatan([...jenisKegiatan,[
      {'title':'Jenis Kegiatan','placeholder':'.masukkan jenis kegiatan','type':'text','value':'','isOpt':false},
      {'title':'Frekuensi (Tetap/Insidentil)','placeholder':'masukkan keterangan frekuensi','type':'text','value':'','isOpt':false},
    ]])
  }

  ////////////////////////// Pantau Lingkungan ////////////////////////////////

  const [pantauLingkungan, setPantauLingkungan] = useState([
    [
      {'title':'Uraian','placeholder':'.masukkan uraian','type':'text','value':'','isOpt':false},
      {'title':'Frekuensi dalam 1 tahun','placeholder':'.masukkan frekuensi','type':'text','value':'','isOpt':false},
      {'title':'Cara Pemantauan (periodik/insidentil)','placeholder':'.masukkan keterangan','type':'text','value':'','isOpt':false},
    ]
  ])

  function handleBtnAddPantauLingkungan() {
    setPantauLingkungan([...pantauLingkungan,[
      {'title':'Uraian','placeholder':'.masukkan uraian','type':'text','value':'','isOpt':false},
      {'title':'Frekuensi dalam 1 tahun','placeholder':'.masukkan frekuensi','type':'text','value':'','isOpt':false},
      {'title':'Cara Pemantauan (periodik/insidentil)','placeholder':'.masukkan keterangan','type':'text','value':'','isOpt':false},
    ]])
  }

  ////////////////////////// Kegiatan Pembukaan Lahan ////////////////////////////////

  const [kegiatanLahan, setKegiatanLahan] = useState([
    [
      {
        'sectionTitle': 'Areal (ha)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'.luas dalam ha','value':''},{'title':'Tahun 2','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Tahun 3','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Total','type':'text','placeholder':'.total dalam ha','value':''}]
      },
      {
        'sectionTitle': 'Mekanis (ha)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'.luas dalam ha','value':''},{'title':'Tahun 2','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Tahun 3','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Total','type':'text','placeholder':'.total dalam ha','value':''}]
      },
      {
        'sectionTitle': 'Kimiawi (ha)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'.luas dalam ha','value':''},{'title':'Tahun 2','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Tahun 3','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Total','type':'text','placeholder':'.total dalam ha','value':''}]
      },
      {
        'sectionTitle': 'Pembakaran (ha)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'.luas dalam ha','value':''},{'title':'Tahun 2','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Tahun 3','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Total','type':'text','placeholder':'.total dalam ha','value':''}]
      },
    ]
  ])

  function handleBtnKegiatanLahan() {
    setKegiatanLahan([...kegiatanLahan,[
      {
        'sectionTitle': 'Areal (ha)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'.luas dalam ha','value':''},{'title':'Tahun 2','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Tahun 3','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Total','type':'text','placeholder':'.total dalam ha','value':''}]
      },
      {
        'sectionTitle': 'Mekanis (ha)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'.luas dalam ha','value':''},{'title':'Tahun 2','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Tahun 3','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Total','type':'text','placeholder':'.total dalam ha','value':''}]
      },
      {
        'sectionTitle': 'Kimiawi (ha)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'.luas dalam ha','value':''},{'title':'Tahun 2','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Tahun 3','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Total','type':'text','placeholder':'.total dalam ha','value':''}]
      },
      {
        'sectionTitle': 'Pembakaran (ha)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'.luas dalam ha','value':''},{'title':'Tahun 2','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Tahun 3','type':'text','placeholder':'..luas dalam ha','value':''},{'title':'Total','type':'text','placeholder':'.total dalam ha','value':''}]
      },
    ]])
  }

  ////////////////////////// RADIO BUTTON STATE ////////////////////////////////

  const [petugasLingkungan, setPetugasLingkungan] = useState('');
  const [unitPetugas, setUnitPetugas] = useState('');
  const [sarana, setSarana] = useState('');
  const [konservasi, setKonservasi] = useState('');
  const [berbatasan, setBerbatasan] = useState('');
  const [upayaRehab, setUpayaRehab] = useState('');
  const [bukaLahan, setBukaLahan] = useState('');
  const [penangananKebakaran, setPenangananKebakaran] = useState('');
  const [petugasPenangananKebakaran, setPetugasPenangananKebakaran] = useState('');
  const [sistemPengamanan, setSistemPengamanan] = useState('');
  const [sistemBerfungsi, setSistemBerfungsi] = useState('');
  const [jenisLahan, setJenisLahan] = useState('');
  const [pantauLingkunganOpt, setPantauLingkunganOpt] = useState('');
  const [pantauInstansi, setPantauInstansi] = useState('');
  const [sertifikat, setSertifikat] = useState('');
  const [limbahPadat, setLimbahPadat] = useState('');
  const [limbahCair, setLimbahCair] = useState('');

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
      let retrievedObject = JSON.parse(localStorage.getItem('lingkunganNilai'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
          "kelolaLingkungan": [],
          "jenisKegiatan": [],
          "pantauLingkungan": [],
          "kegiatanLahan": [],
        }

        retrievedObject[0].criticalArea.details.forEach((e, i) => {
          const formData = _.cloneDeep(jenisKegiatan)
          formData.forEach((form,ii) => {
            form.forEach((ee, iii) => {
              ee.value = e[Object.keys(e)[iii]]
            })
            replicateData.jenisKegiatan.push(form)
          })
        })

        retrievedObject[0].environmentMonitoring.details.forEach((e, i) => {
          const formData = _.cloneDeep(pantauLingkungan)
          formData.forEach((form,ii) => {
            form.forEach((ee, iii) => {
              ee.value = e[Object.keys(e)[iii]]
            })
            replicateData.pantauLingkungan.push(form)
          })
        })

        retrievedObject[0].amdal.details.forEach((e, i) => {
          const formData = _.cloneDeep(kelolaLingkungan)
          let moveArr = []
          Object.keys(e).forEach(key => {
            moveArr.push(e[key])
          });
          formData.forEach((form,i2) => {
            form.forEach((formData, i3) => {
              formData.sectionData.forEach((secData, i4) => {
                secData.value = moveArr[i4]
              })
            })
            replicateData.kelolaLingkungan.push(form)
          })
        })

        const formData = _.cloneDeep(kegiatanLahan)
        formData.forEach((dtFrm, i) => {
          dtFrm.forEach((dt) => {
            dt.sectionData.forEach((data, i2) => {
              data.value = retrievedObject[0].landClearing.details[i2].area
            })
          })
          replicateData.kegiatanLahan.push(dtFrm)
        })


        setPetugasLingkungan(retrievedObject[0].amdal.hasAmdalPersonel)
        setUnitPetugas(retrievedObject[0].amdal.isOrganized)
        setSarana(retrievedObject[0].amdal.isEnvironmentalInfrastructureSuficient)
        setKonservasi(retrievedObject[0].amdal.needConservation)
        setKelolaLingkungan(replicateData.kelolaLingkungan)

        setBerbatasan(retrievedObject[0].criticalArea.isNearCriticalArea)
        setUpayaRehab(retrievedObject[0].criticalArea.joinReforestation)
        setTidakPantau(retrievedObject[0].criticalArea.reason)
        setJenisKegiatan(replicateData.jenisKegiatan)

        setBukaLahan(retrievedObject[0].landClearing.didLandClearing)
        setKegiatanLahan(replicateData.kegiatanLahan)

        setPenangananKebakaran(retrievedObject[0].fireManagement.hasFireManagement)
        setOrgPengangan(retrievedObject[0].fireManagement.organizationType)
        setPetugasPenangananKebakaran(retrievedObject[0].fireManagement.hasFireManagementPersonel)
        setJmlPengangan(retrievedObject[0].fireManagement.fireManagementCount)
        setSistemPengamanan(retrievedObject[0].fireManagement.hasWarning)
        setSistemBerfungsi(retrievedObject[0].fireManagement.isWarningUsable)

        setJenisLahan(retrievedObject[0].landProcessing.landType)
        setTeknikPengolahan(retrievedObject[0].landProcessing.technique)

        setPantauLingkunganOpt(retrievedObject[0].environmentMonitoring.didEnvironmentMonitoring)
        setTidakPantauAlasan(retrievedObject[0].environmentMonitoring.reason)
        setPantauInstansi(retrievedObject[0].environmentMonitoring.isReported)
        setLaporInstansi(retrievedObject[0].environmentMonitoring.reportDescription)
        setPantauLingkungan(replicateData.pantauLingkungan)

        setSertifikat(retrievedObject[0].iso14000Certification.isCertified)

        setLimbahPadat(retrievedObject[0].wasteManagement.produceSolidWaste)
        setPengangananLmbahPdt(retrievedObject[0].wasteManagement.solidWasteManagement)
        setLimbahCair(retrievedObject[0].wasteManagement.produceLiquidWaste)
        setPengangananLmbahCair(retrievedObject[0].wasteManagement.liquidWasteManagement)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])


  useEffect(() => {

    let data = [{
      "amdal": {
          "hasAmdalPersonel": petugasLingkungan,
          "isOrganized": unitPetugas,
          "isEnvironmentalInfrastructureSuficient": sarana,
          "needConservation": konservasi,
          "details": []
      },
      "criticalArea": {
          "isNearCriticalArea": berbatasan,
          "joinReforestation": upayaRehab,
          "reason": tidakPantau,
          "details": []
      },
      "landClearing": {
          "didLandClearing": bukaLahan,
          "details": []
      },
      "fireManagement": {
          "hasFireManagement": penangananKebakaran,
          "organizationType": orgPengangan,
          "hasFireManagementPersonel": petugasPenangananKebakaran,
          "fireManagementCount": jmlPengangan,
          "hasWarning": sistemPengamanan,
          "isWarningUsable": sistemBerfungsi
      },
      "landProcessing": {
          "landType": jenisLahan,
          "technique": teknikPengolahan
      },
      "environmentMonitoring": {
          "didEnvironmentMonitoring": pantauLingkunganOpt,
          "reason": tidakPantauAlasan,
          "isReported": pantauInstansi,
          "reportDescription": laporInstansi,
          "details": []
      },
      "iso14000Certification": {
        "description": "Melaksanakan Standar lain selain ISO",
        "isCertified": sertifikat,
        "file": {}
      },
      "wasteManagement": {
        "produceSolidWaste": limbahPadat,
        "solidWasteManagement": pengangananLmbahPdt,
        "produceLiquidWaste": limbahCair,
        "liquidWasteManagement": pengangananLmbahCair
      }
    }]

    jenisKegiatan.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.activity = item[0].value
        inv.frequency = item[1].value
      });
      data[0].criticalArea.details.push(inv)
    });

    pantauLingkungan.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.description = item[0].value
        inv.frequency = item[1].value
        inv.method = item[2].value
      });
      data[0].environmentMonitoring.details.push(inv)
    });

    kelolaLingkungan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.year = arr[0].sectionData[0].value
        dataTemp.activity = arr[1].sectionData[0].value
        dataTemp.plannedUnit = arr[1].sectionData[1].value
        dataTemp.realUnit = arr[1].sectionData[2].value
      });
      data[0].amdal.details.push(dataTemp)
    });

    kegiatanLahan.forEach((item, i) => {
      item.forEach((e, i, arr) => {
        e.sectionData.forEach((dt, i2, arr2) => {
          let dataTemp = {}
          dataTemp.clearingType = e.sectionTitle
          dataTemp.year = dt.title
          dataTemp.area = dt.value
          data[0].landClearing.details.push(dataTemp)
        })
      });
    });

    setDataSubmit(data)

  }, [tidakTerlibat,orgPengangan,jmlPengangan,teknikPengolahan,tidakPantauAlasan,tidakPantau,laporInstansi
    ,mnjLingkungan,pengangananLmbahPdt,pengangananLmbahCair,kelolaLingkungan,jenisKegiatan,pantauLingkungan
    ,kegiatanLahan,petugasLingkungan,unitPetugas,sarana,konservasi,berbatasan,upayaRehab,bukaLahan,penangananKebakaran
    ,petugasPenangananKebakaran,sistemPengamanan,sistemBerfungsi,jenisLahan,pantauLingkunganOpt,pantauInstansi
    ,sertifikat,limbahPadat,limbahCair])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(() => {
    localStorage.setItem("lingkunganNilai", JSON.stringify(dataSubmit));

  })

  function clearData() {

  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>

      <form>
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>AMDAL</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Kelembagaan yang menangani lingkungan (termasuk kebakaran)</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah di kebun Saudara ada unit kerja dan atau petugas yang khusus menangani lingkungan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="petugasLingkungan"
                onClick={() => setPetugasLingkungan('Ada')}
                radioValue={petugasLingkungan}
                selected={petugasLingkungan == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="petugasLingkungan"
                onClick={() => setPetugasLingkungan('Tidak')}
                radioValue={petugasLingkungan}
                selected={petugasLingkungan == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {petugasLingkungan == 'Ada' ? (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Apabila ada, apakah dalam bentuk unit organisasi?</span>
                <div className="inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="unitPetugas"
                    onClick={() => setUnitPetugas('Iya')}
                    radioValue={unitPetugas}
                    selected={unitPetugas == 'Iya'}
                    label="Iya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="unitPetugas"
                    onClick={() => setUnitPetugas('Tidak')}
                    radioValue={unitPetugas}
                    selected={unitPetugas == 'Tidak'}
                    label="Tidak"
                  />
                </div>
              </label>
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Sarana dan Prasarana</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah organisasi yang menangani lingkungan memiliki sarana dan prasarana yang memadai?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sarana"
                onClick={() => setSarana('Ada dan memadai')}
                radioValue={sarana}
                selected={sarana == 'Ada dan memadai'}
                label="Ada dan memadai"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sarana"
                onClick={() => setSarana('Ada tetapi tidak memadai')}
                radioValue={sarana}
                selected={sarana == 'Ada tetapi tidak memadai'}
                label="Ada tetapi tidak memadai"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sarana"
                onClick={() => setSarana('Tidak ada')}
                radioValue={sarana}
                selected={sarana == 'Tidak ada'}
                label="Tidak ada"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pelaksanaan Pengelolaan Lingkungan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah kondisi fisik wilayah dan jenis tanaman yang diusahakan kebun memerlukan tindakan konservasi?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="konservasi"
                onClick={() => setKonservasi('Iya')}
                radioValue={konservasi}
                selected={konservasi == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="konservasi"
                onClick={() => setKonservasi('Tidak')}
                radioValue={konservasi}
                selected={konservasi == 'Tidak'}
                label="AdaTidak"
              />
            </div>
          </label>
          {konservasi == 'Iya' ? (
            <div className="mt-6">
              <div className="flex flex-col">
                {
                  kelolaLingkungan.map((items, i) => (
                    <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                      {
                        i > 0 ?
                        <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kelolaLingkungan, setKelolaLingkungan)}>
                          do_not_disturb_on
                        </span>
                        :
                        <></>
                      }
                      {
                        items.map((item,ii) => (
                          <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]} w-full`} key={ii}>
                            <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                            <div className={`${mng["base__formlabel_twin"]} w-full`}>
                            {
                              item.sectionData.map((child,iii) => (
                                <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                                  <span className={mng.base__inputtitle}>{child.title}</span>
                                  <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kelolaLingkungan, setKelolaLingkungan, i, ii, iii)}/>
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

              <div className={`${mng["base__btn"]}`} onClick={handleBtnAddKelolaLingkungan}>
                + Tambah Data Tahun Selanjutnya
              </div>
            </div>
          ) : <></>}

        </div>


        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>KAWASAN LINDUNG, SUMBER AIR, SUNGAI DAN REHABILITASI LAHAN KRITIS</span>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah di lokasi kebun Saudara terdapat atau berbatasan dengan kawasan lindung, lahan kritis atau hutan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="berbatasan"
                onClick={() => setBerbatasan('Iya')}
                radioValue={berbatasan}
                selected={berbatasan == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="berbatasan"
                onClick={() => setBerbatasan('Tidak')}
                radioValue={berbatasan}
                selected={berbatasan == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {berbatasan == 'Iya' ? (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Apakah perusahaan melakukan pengawasan/pengamanan terhadap areal kawasan lindung/kawasan sekitar sumber air/sungai/danau, ikut terlibat dalam upaya rehabilitasi atau reboisasi?</span>
                <div className="inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="upayaRehab"
                    onClick={() => setUpayaRehab('Iya')}
                    radioValue={upayaRehab}
                    selected={upayaRehab == 'Iya'}
                    label="Iya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="upayaRehab"
                    onClick={() => setUpayaRehab('Tidak')}
                    radioValue={upayaRehab}
                    selected={upayaRehab == 'Tidak'}
                    label="Tidak"
                  />
                </div>
              </label>
              <div className="flex flex-col">
                {
                  jenisKegiatan.map((items, i) => (
                    <div className={`${mng["base__formlabel_custom-diamond"]}`} key={i}>
                    {
                      i > 0 ?
                      <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, jenisKegiatan, setJenisKegiatan)}>
                        do_not_disturb_on
                      </span>
                      :
                      <></>
                    }
                    {
                      items.map((item,ii) => (
                        <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                          <span className={mng.base__inputtitle}>{item.title}</span>
                          <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, jenisKegiatan, setJenisKegiatan, i, ii)}/>
                        </label>
                      ))
                    }
                    </div>
                  ))
                }

              </div>

              <div className={`${mng["base__btn"]}`} onClick={handleBtnAddJenisKegiatan}>
                + Tambah Data Jenis Kegiatan
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Apabila tidak, jelaskan</span>
                <input type="text" placeholder="masukkan keterngan" value={tidakPantau} className={mng.base__inputbase} onChange={(e) => setTidakPantau(e.target.value)}/>
              </label>
            </div>
          )}

        </div>


        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>PEMBAKARAN, KEBAKARAN LAHAN & KEBUN</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pembukaan dan Pembersihan Lahan serta Peremajaan Tanaman</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah dalam tiga tahun terakhir ada kegiatan pembukaan lahan dalam rangka persiapan untuk penanaman?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bukaLahan"
                onClick={() => setBukaLahan('Ada')}
                radioValue={bukaLahan}
                selected={bukaLahan == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bukaLahan"
                onClick={() => setBukaLahan('Tidak')}
                radioValue={bukaLahan}
                selected={bukaLahan == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {bukaLahan == 'Ada' ? (
            <div className="mt-6">
              <div className="flex flex-col">
                {
                  kegiatanLahan.map((items, i) => (
                    <div className={`w-full`} key={i}>
                      {
                        items.map((item,ii) => (
                          <div className={`w-full`} key={ii}>
                            <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                            <div className={`${mng["base__formlabel_fours"]} w-full flex`}>
                            {
                              item.sectionData.map((child,iii) => (
                                <label className={`${mng["base__formlabel"]}`} key={iii}>
                                  <span className={mng.base__inputtitle}>{child.title}</span>
                                  <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kegiatanLahan, setKegiatanLahan, i, ii, iii)}/>
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
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Organisasi dan Petugas Kebakaran</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan Saudara memiliki unit/organisasi penanganan kebakaran?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="penangananKebakaran"
                onClick={() => setPenangananKebakaran('Iya')}
                radioValue={penangananKebakaran}
                selected={penangananKebakaran == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="penangananKebakaran"
                onClick={() => setPenangananKebakaran('Tidak')}
                radioValue={penangananKebakaran}
                selected={penangananKebakaran == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {penangananKebakaran == 'Iya' ? (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Sebutkan organisasi penanganan kebakaran yang ada</span>
                <input type="text" placeholder="masukkan keterngan" value={orgPengangan} className={mng.base__inputbase} onChange={(e) => setOrgPengangan(e.target.value)}/>
              </label>
            </div>
          ) : (
            <></>
          )}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah ada petugas khusus yang melaksanakan penanganan kebakaran?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="petugasPenangananKebakaran"
                onClick={() => setPetugasPenangananKebakaran('Iya')}
                radioValue={petugasPenangananKebakaran}
                selected={petugasPenangananKebakaran == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="petugasPenangananKebakaran"
                onClick={() => setPetugasPenangananKebakaran('Tidak')}
                radioValue={petugasPenangananKebakaran}
                selected={petugasPenangananKebakaran == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {penangananKebakaran == 'Iya' ? (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Berapa jumlah petugas khusus penanganan kebakaran?</span>
                <input type="text" placeholder="masukkan jumlah dalam satuan orang" value={jmlPengangan} className={mng.base__inputbase} onChange={(e) => setJmlPengangan(e.target.value)}/>
              </label>
            </div>
          ) : (
            <></>
          )}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Sistem Peringatan Dini Kebakaran</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah ada sistem pengamanan dini?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemPengamanan"
                onClick={() => setSistemPengamanan('Iya')}
                radioValue={sistemPengamanan}
                selected={sistemPengamanan == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemPengamanan"
                onClick={() => setSistemPengamanan('Tidak')}
                radioValue={sistemPengamanan}
                selected={sistemPengamanan == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {sistemPengamanan == 'Iya' ? (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Apakah sistem tersebut berfungsi secara maksimal?</span>
                <div className="inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="sistemBerfungsi"
                    onClick={() => setSistemBerfungsi('Iya')}
                    radioValue={sistemBerfungsi}
                    selected={sistemBerfungsi == 'Iya'}
                    label="Iya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="sistemBerfungsi"
                    onClick={() => setSistemBerfungsi('Tidak')}
                    radioValue={sistemBerfungsi}
                    selected={sistemBerfungsi == 'Tidak'}
                    label="Tidak"
                  />
                </div>
              </label>
            </div>
          ) : (
            <></>
          )}

        </div>


        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>PEMANFAATAN LAHAN</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pengolahan dan Penggunaan Lahan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Secara umum jenis lahan kebun saudara terdiri dari (pilih yang sesuai)</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="jenisLahan"
                onClick={() => setJenisLahan('Tanah Mineral')}
                radioValue={jenisLahan}
                selected={jenisLahan == 'Tanah Mineral'}
                label="Tanah Mineral"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="jenisLahan"
                onClick={() => setJenisLahan('Pasang Surut')}
                radioValue={jenisLahan}
                selected={jenisLahan == 'Pasang Surut'}
                label="Pasang Surut"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="jenisLahan"
                onClick={() => setJenisLahan('Gambut')}
                radioValue={jenisLahan}
                selected={jenisLahan == 'Gambut'}
                label="Gambut"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Jelaskan teknik pengolahan lahan yang saudara lakukan</span>
            <input type="text" placeholder="Nama Administratur/Manager" value={teknikPengolahan} className={mng.base__inputbase} onChange={(e) => setTeknikPengolahan(e.target.value)}/>
          </label>
        </div>


        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>PELAPORAN DAN PEMANTAUAN LINGKUNGAN</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pemantauan Lingkungan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah dilaksanakan pemantauan lingkungan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pantauLingkunganOpt"
                onClick={() => setPantauLingkunganOpt('Iya')}
                radioValue={pantauLingkunganOpt}
                selected={pantauLingkunganOpt == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pantauLingkunganOpt"
                onClick={() => setPantauLingkunganOpt('Tidak')}
                radioValue={pantauLingkunganOpt}
                selected={pantauLingkunganOpt == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {pantauLingkunganOpt == 'Iya' ? (
            <div className="mt-6">

              <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
                <div className="flex items-center">
                  <img src="/icon/info-circle.svg" className="w-6" />
                  <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                    Perhatian!
                  </div>
                </div>
                <div className="px-8 text-xs">
                  uraian berupa BOD, COD, Erosi, Pestisida, dll
                </div>
              </div>

              {
                pantauLingkungan.map((items, i) => (
                  <div className={`${mng["base__formlabel_custom-diamond"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, pantauLingkungan, setPantauLingkungan)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                        <span className={mng.base__inputtitle}>{item.title}</span>
                        <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, pantauLingkungan, setPantauLingkungan, i, ii)}/>
                      </label>
                    ))
                  }
                  </div>
                ))
              }

              <div className={`${mng["base__btn"]}`} onClick={handleBtnAddPantauLingkungan}>
                + Tambah Data Uraian
              </div>

            </div>
          ) : (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Kalau tidak, sebutkan alasannya</span>
                <input type="text" placeholder="masukkan keterangan" value={tidakPantauAlasan} className={mng.base__inputbase} onChange={(e) => setTidakPantauAlasan(e.target.value)}/>
              </label>
            </div>
          )}


          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah hasil pemantauan tersebut dilaporkan kepada instansi terkait?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pantauInstansi"
                onClick={() => setPantauInstansi('Iya')}
                radioValue={pantauInstansi}
                selected={pantauInstansi == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pantauInstansi"
                onClick={() => setPantauInstansi('Tidak')}
                radioValue={pantauInstansi}
                selected={pantauInstansi == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {pantauInstansi == 'Iya' ? (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Kepada instansi mana dilaporkan dan berapa durasi frekuensinya?</span>
                <input type="text" placeholder="masukkan keterangan" value={laporInstansi} className={mng.base__inputbase} onChange={(e) => setLaporInstansi(e.target.value)}/>
              </label>
            </div>
          ) : (
            <></>
          )}

        </div>


        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>ISO 14000</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Penerapan manajemen lingkungan (ISO 14000) seperti clean product (produk bersih), zero waste dan lain sebagainya</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan sudah memiliki sertifikat ISO 14000?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sertifikat"
                onClick={() => setSertifikat('Iya')}
                radioValue={sertifikat}
                selected={sertifikat == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sertifikat"
                onClick={() => setSertifikat('Tidak')}
                radioValue={sertifikat}
                selected={sertifikat == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {sertifikat == 'Tidak' ? (
            <div className="mt-6">
              <div className="flex w-full items-center justify-between mb-3">
                <div>
                  <div className=" text-sm font-semibold">
                    Lampiran Dokumen Lengkap HGU
                  </div>
                  <div className="text-[11px] text-[#B3B3B3]">
                    Format dokumen: .jpg .jpeg .png
                  </div>
                </div>
                <InputFileButton />
              </div>
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Apakah melaksanakan manajemen lingkungan selain ISO 14000?</span>
                <input type="text" placeholder="jelaskan" value={mnjLingkungan} className={mng.base__inputbase} onChange={(e) => setMnjLingkungan(e.target.value)}/>
              </label>
            </div>
          ) : (
            <></>
          )}
        </div>


        <div className={`${mng["base__formsection"]} border-b-0`}>
          <span className={mng.base__subtitle}>PENGOLAHAN LIMBAH</span>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pengolahan Limbah Padat</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah dari kebun Saudara menghasilkan limbah padat?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="limbahPadat"
                onClick={() => setLimbahPadat('Iya')}
                radioValue={limbahPadat}
                selected={limbahPadat == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="limbahPadat"
                onClick={() => setLimbahPadat('Tidak')}
                radioValue={limbahPadat}
                selected={limbahPadat == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {limbahPadat == 'Iya' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
                <InputForm
                  titleForm="Bagaimana Penanganan Limbah padat tersebut? (pilih yang sesuai)"
                  titleName="Bagaimana Penanganan Limbah padat tersebut? (pilih yang sesuai)"
                  onChange={(e) => setPengangananLmbahPdt(e.target.value)}
                  values={pengangananLmbahPdt}
                  type="text"
                  placeholder="pilih opsi yang sesuai"
                  className={`${
                    isError && 'border-primary-red-1 bg-primary-red-2'
                  }`}
                  selectionArea={true}
                />
              </label>
            </div>
          ) : (
            <></>
          )}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pengolahan Limbah Cair</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah dari kebun Saudara dihasilkan limbah cair?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="limbahCair"
                onClick={() => setLimbahCair('Iya')}
                radioValue={limbahCair}
                selected={limbahCair == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="limbahCair"
                onClick={() => setLimbahCair('Tidak')}
                radioValue={limbahCair}
                selected={limbahCair == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {limbahCair == 'Iya' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
                <InputForm
                  titleForm="Bagaimana Penanganan Limbah Cair tersebut? (pilih yang sesuai)"
                  titleName="Bagaimana Penanganan Limbah Cair tersebut? (pilih yang sesuai)"
                  onChange={(e) => setPengangananLmbahCair(e.target.value)}
                  values={pengangananLmbahCair}
                  type="text"
                  placeholder="pilih opsi yang sesuai"
                  className={`${
                    isError && 'border-primary-red-1 bg-primary-red-2'
                  }`}
                  selectionArea={true}
                />
              </label>
            </div>
          ) : (
            <></>
          )}

        </div>


        <div className='flex justify-end items-center mt-9 pt-0.5'>
          {/*
            <div className={`${mng["base__btnclear"]} ${"mt-1"}`} onClick={clearData}>
              <span className="ml-1.5">Clear data</span>
            </div>
          */}

          <button className={`${mng["base__btnsimpan"]} ${"float-right mt-1"}`} onClick={storeData} >
            Simpan dan Lanjutkan
          </button>
        </div>

      </form>
    </>
  );
};

export default FormLingkungan;
