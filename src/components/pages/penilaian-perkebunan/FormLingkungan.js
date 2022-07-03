import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import InputFileButton from 'src/components/customInput/InputFileButton';
import InputForm from '../admin/infografis/InputForm';
import mng from 'src/styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormLingkungan = () => {
  const [isError, setIsError] = useState(false);

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

  const [btnValid, setBtnValid] = useState(false)

  const storeData = preventDefault(() => {

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
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="petugasLingkungan"
                onClick={() => setPetugasLingkungan('Tidak')}
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
                    radioName="petugasLingkungan"
                    onClick={() => setPetugasLingkungan('Iya')}
                    label="Iya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="petugasLingkungan"
                    onClick={() => setPetugasLingkungan('Tidak')}
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
                label="Ada dan memadai"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sarana"
                onClick={() => setSarana('Ada tetapi tidak memadai')}
                label="Ada tetapi tidak memadai"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sarana"
                onClick={() => setSarana('Tidak ada')}
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
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="konservasi"
                onClick={() => setKonservasi('Tidak')}
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
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="berbatasan"
                onClick={() => setBerbatasan('Tidak')}
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
                    label="Iya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="upayaRehab"
                    onClick={() => setUpayaRehab('Tidak')}
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
          <span className={mng.base__subtitle}>KAWASAN LINDUNG, SUMBER AIR, SUNGAI DAN REHABILITASI LAHAN KRITIS</span>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah di lokasi kebun Saudara terdapat atau berbatasan dengan kawasan lindung, lahan kritis atau hutan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="berbatasan"
                onClick={() => setBerbatasan('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="berbatasan"
                onClick={() => setBerbatasan('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
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
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bukaLahan"
                onClick={() => setBukaLahan('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {bukaLahan == 'Iya' ? (
            <div className="mt-6">
              <div className="flex flex-col">
                {
                  kegiatanLahan.map((items, i) => (
                    <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                      {
                        items.map((item,ii) => (
                          <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]} w-full`} key={ii}>
                            <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                            <div className={`${mng["base__formlabel_twin"]} w-full`}>
                            {
                              item.sectionData.map((child,iii) => (
                                <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
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
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="penangananKebakaran"
                onClick={() => setPenangananKebakaran('Tidak')}
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
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="petugasPenangananKebakaran"
                onClick={() => setPetugasPenangananKebakaran('Tidak')}
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
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemPengamanan"
                onClick={() => setSistemPengamanan('Tidak')}
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
                    label="Iya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="sistemBerfungsi"
                    onClick={() => setSistemBerfungsi('Tidak')}
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
                label="Tanah Mineral"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="jenisLahan"
                onClick={() => setJenisLahan('Pasang Surut')}
                label="Pasang Surut"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="jenisLahan"
                onClick={() => setJenisLahan('Gambut')}
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
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pantauLingkunganOpt"
                onClick={() => setPantauLingkunganOpt('Tidak')}
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
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pantauInstansi"
                onClick={() => setPantauInstansi('Tidak')}
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
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sertifikat"
                onClick={() => setSertifikat('Tidak')}
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
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="limbahPadat"
                onClick={() => setLimbahPadat('Tidak')}
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
                  onChange={(e) => setPengangananLmbahPdt(e)}
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
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="limbahCair"
                onClick={() => setLimbahCair('Tidak')}
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
                  onChange={(e) => setPengangananLmbahCair(e)}
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

          <button className={`${mng["base__btnsimpan"]} ${"float-right mt-1"}`} onClick={storeData} disabled={!btnValid}>
            Simpan dan Lanjutkan
          </button>
        </div>

      </form>
    </>
  );
};

export default FormLingkungan;
