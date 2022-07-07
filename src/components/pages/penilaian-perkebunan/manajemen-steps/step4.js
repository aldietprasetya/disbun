import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import InputFileButton from 'src/components/customInput/InputFileButton';
import InputForm from '../../admin/infografis/InputForm';
import mng from 'src/styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormManajemenStep4 = () => {
  ////////////////////////// INPUT FORM STATE ////////////////////////////////

  const [kodeLaporKebun, setKodeLaporKebun] = useState('');
  const [kodeLaporKebunProv, setKodeLaporKebunProv] = useState('');
  const [kodeLaporKebunKab, setKodeLaporKebunKab] = useState('');
  const [kodeLaporBPS, setKodeLaporBPS] = useState('');

  ////////////////////////// RADIO BUTTON STATE ////////////////////////////////

  const [pekerjaAnak, setPekerjaAnak] = useState('');

  const [pelaksanaLaporKebun, setPelaksanaLaporKebun] = useState('');
  const [pelaksanaLaporKebunProv, setPelaksanaLaporKebunProv] = useState('');
  const [pelaksanaLaporKebunKab, setPelaksanaLaporKebunKab] = useState('');
  const [pelaksanaLaporBPS, setPelaksanaLaporBPS] = useState('');

  const [sediaInfoLingkungan, setSediaInfoLingkungan] = useState('');
  const [aksesInfoLingkungan, setAksesInfoLingkungan] = useState('');

  const [sediaInfoSosial, setSediaInfoSosial] = useState('');
  const [aksesInfoSosial, setAksesInfoSosial] = useState('');

  const [sediaInfoHukum, setSediaInfoHukum] = useState('');
  const [aksesInfoHukum, setAksesInfoHukum] = useState('');

  ////////////////////////// Jumlah Pegawai ////////////////////////////////

  const [kantorPusat, setKantorPusat] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Staff','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Bulanan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Tetap','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Lepas','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Musiman/Borongan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }
    ]
  ])
  const [kantor, setKantor] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Staff','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Bulanan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Tetap','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Lepas','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Musiman/Borongan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }
    ]
  ])
  const [kantorLapangan, setKantorLapangan] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Staff','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Bulanan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Tetap','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Lepas','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Musiman/Borongan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }
    ]
  ])
  const [kantorPabrik, setKantorPabrik] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Staff','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Bulanan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Tetap','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Lepas','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Musiman/Borongan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }
    ]
  ])
  const [kantorLain, setKantorLain] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Staff','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Bulanan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Tetap','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Lepas','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Musiman/Borongan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }
    ]
  ])

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
        {/* Tenaga Kerja Anak */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Tenaga Kerja Anak</span>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan mempekerjakan tenaga kerja anak, baik secara insidentil maupun secara tetap?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pekerjaAnak"
                onClick={() => setPekerjaAnak('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pekerjaAnak"
                onClick={() => setPekerjaAnak('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Jumlah Pegawai</p>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tingkat : Kantor Direksi (Pusat)</p>
          <div className="flex flex-col">
            {
              kantorPusat.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kantorPusat, setKantorPusat)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kantorPusat, setKantorPusat, i, ii, iii)}/>
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

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tingkat : Kebun (Kantor)</p>
          <div className="flex flex-col">
            {
              kantor.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kantor, setKantor)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_tri"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kantor, setKantor, i, ii, iii)}/>
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

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tingkat : Kebun (Lapangan)</p>
          <div className="flex flex-col">
            {
              kantorLapangan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kantorLapangan, setKantorLapangan)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_tri"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kantorLapangan, setKantorLapangan, i, ii, iii)}/>
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

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tingkat : Pabrik</p>
          <div className="flex flex-col">
            {
              kantorPabrik.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kantorPabrik, setKantorPabrik)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_tri"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kantorPabrik, setKantorPabrik, i, ii, iii)}/>
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

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tingkat : Kegiatan Lainnya</p>
          <div className="flex flex-col">
            {
              kantorLain.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kantorLain, setKantorLain)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_tri"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kantorLain, setKantorLain, i, ii, iii)}/>
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

        {/* Pelaporan dan Transparansi Informasi */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Pelaporan dan Transparansi Informasi</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pelaporan</p>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pelaporan Kepada : Ditjen Perkebunan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Nomor/Kode pelaporan</span>
            <input type="text" placeholder="masukkan keterngan" value={kodeLaporKebun} className={mng.base__inputbase} onChange={(e) => setKodeLaporKebun(e.target.value)}/>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Pelaksanaan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebun"
                onClick={() => setPelaksanaLaporKebun('Periodik')}
                label="Periodik"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebun"
                onClick={() => setPelaksanaLaporKebun('Kadang-Kadang')}
                label="Kadang-Kadang"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebun"
                onClick={() => setPelaksanaLaporKebun('Tidak Melapor')}
                label="Tidak Melapor"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pelaporan Kepada : Dinas Perkebunan Provinsi</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Nomor/Kode pelaporan</span>
            <input type="text" placeholder="masukkan keterngan" value={kodeLaporKebunProv} className={mng.base__inputbase} onChange={(e) => setKodeLaporKebunProv(e.target.value)}/>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Pelaksanaan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebunProv"
                onClick={() => setPelaksanaLaporKebunProv('Periodik')}
                label="Periodik"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebunProv"
                onClick={() => setPelaksanaLaporKebunProv('Kadang-Kadang')}
                label="Kadang-Kadang"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebunProv"
                onClick={() => setPelaksanaLaporKebunProv('Tidak Melapor')}
                label="Tidak Melapor"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pelaporan Kepada : Dinas Perkebunan Kabupaten</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Nomor/Kode pelaporan</span>
            <input type="text" placeholder="masukkan keterngan" value={kodeLaporKebunKab} className={mng.base__inputbase} onChange={(e) => setKodeLaporKebunKab(e.target.value)}/>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Pelaksanaan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebunKab"
                onClick={() => setPelaksanaLaporKebunKab('Periodik')}
                label="Periodik"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebunKab"
                onClick={() => setPelaksanaLaporKebunKab('Kadang-Kadang')}
                label="Kadang-Kadang"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebunKab"
                onClick={() => setPelaksanaLaporKebunKab('Tidak Melapor')}
                label="Tidak Melapor"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pelaporan Kepada : BPS</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Nomor/Kode pelaporan</span>
            <input type="text" placeholder="masukkan keterngan" value={kodeLaporBPS} className={mng.base__inputbase} onChange={(e) => setKodeLaporBPS(e.target.value)}/>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Pelaksanaan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporBPS"
                onClick={() => setPelaksanaLaporBPS('Periodik')}
                label="Periodik"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporBPS"
                onClick={() => setPelaksanaLaporBPS('Kadang-Kadang')}
                label="Kadang-Kadang"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporBPS"
                onClick={() => setPelaksanaLaporBPS('Tidak Melapor')}
                label="Tidak Melapor"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Transparansi Informasi</p>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Informasi Lingkungan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketersediaan Informasi</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sediaInfoLingkungan"
                onClick={() => setSediaInfoLingkungan('Cetakan')}
                label="Cetakan"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sediaInfoLingkungan"
                onClick={() => setSediaInfoLingkungan('Elektronik')}
                label="Elektronik"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Akses Bagi Masyarakat</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="aksesInfoLingkungan"
                onClick={() => setAksesInfoLingkungan('Mudah')}
                label="Mudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="aksesInfoLingkungan"
                onClick={() => setAksesInfoLingkungan('Sulit')}
                label="Sulit"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Informasi Sosial</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketersediaan Informasi</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sediaInfoSosial"
                onClick={() => setSediaInfoSosial('Cetakan')}
                label="Cetakan"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sediaInfoSosial"
                onClick={() => setSediaInfoSosial('Elektronik')}
                label="Elektronik"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Akses Bagi Masyarakat</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="aksesInfoSosial"
                onClick={() => setAksesInfoSosial('Mudah')}
                label="Mudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="aksesInfoSosial"
                onClick={() => setAksesInfoSosial('Sulit')}
                label="Sulit"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Informasi Hukum</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketersediaan Informasi</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sediaInfoHukum"
                onClick={() => setSediaInfoHukum('Cetakan')}
                label="Cetakan"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sediaInfoHukum"
                onClick={() => setSediaInfoHukum('Elektronik')}
                label="Elektronik"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Akses Bagi Masyarakat</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="aksesInfoHukum"
                onClick={() => setAksesInfoHukum('Mudah')}
                label="Mudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="aksesInfoHukum"
                onClick={() => setAksesInfoHukum('Sulit')}
                label="Sulit"
              />
            </div>
          </label>

        </div>

      </form>

    </>
  );
};
export default FormManajemenStep4;
