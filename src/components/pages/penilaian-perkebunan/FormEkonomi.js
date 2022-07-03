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

const FormEkonomi = () => {
  const [isError, setIsError] = useState(false);

  ////////////////////////// INPUT FORM STATE ////////////////////////////////

  const [jenisRetribusiPajak, setJenisRetribusiPajak] = useState('');
  const [alasan, setAlasan] = useState('');

  ////////////////////////// Jenis Pajak ////////////////////////////////

  const [jenisPajak, setJenisPajak] = useState([
    [
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Pajak Pertambahan Nilai (PPN)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Pajak Penghasilan (PPh)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Pajak Bumi dan Bangunan (PBB)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Pajak Ekspor (PE)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Retribusi Wajib Tenaga Kerja',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Retribusi Kesejahteraan Buruh',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Retribusi Air',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Retribusi Jalan',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Lainnya',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
    ]
  ])

  function handleBtnAddJenisPajak() {
    setJenisPajak([...jenisPajak,[
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Pajak Pertambahan Nilai (PPN)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Pajak Penghasilan (PPh)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Pajak Bumi dan Bangunan (PBB)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Pajak Ekspor (PE)',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Retribusi Wajib Tenaga Kerja',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Retribusi Kesejahteraan Buruh',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Retribusi Air',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Retribusi Jalan',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
      {
        'sectionTitle': 'Jenis Pajak atau Retribusi : Lainnya',
        'sectionData': [{'title':'Tahun 1','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan nominal.','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan nominal.','value':''}]
      },
    ]])
  }

  ////////////////////////// Penyerapan Tenaga Lokal untuk Posisi Staf ////////////////////////////////

  const [tahun1, setTahun1] = useState([
    [
      {'title':'Tahun 1','placeholder':'YYY','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Tenaga Kerja Lokal Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Tenaga Kerja Lokal Non Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Pegawai Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Pegawai Non Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
    ]
  ])

  function handleBtnAddTahun1() {
    setTahun1([...tahun1,[
      {'title':'Tahun 1','placeholder':'YYY','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Tenaga Kerja Lokal Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Tenaga Kerja Lokal Non Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Pegawai Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Pegawai Non Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
    ]])
  }

  const [tahun2, setTahun2] = useState([
    [
      {'title':'Tahun 2','placeholder':'YYY','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Tenaga Kerja Lokal Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Tenaga Kerja Lokal Non Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Pegawai Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Pegawai Non Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
    ]
  ])

  function handleBtnAddTahun2() {
    setTahun2([...tahun2,[
      {'title':'Tahun 2','placeholder':'YYY','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Tenaga Kerja Lokal Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Tenaga Kerja Lokal Non Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Pegawai Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Pegawai Non Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
    ]])
  }

  const [tahun3, setTahun3] = useState([
    [
      {'title':'Tahun 3','placeholder':'YYY','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Tenaga Kerja Lokal Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Tenaga Kerja Lokal Non Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Pegawai Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Pegawai Non Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
    ]
  ])

  function handleBtnAddTahun3() {
    setTahun3([...tahun3,[
      {'title':'Tahun 3','placeholder':'YYY','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Tenaga Kerja Lokal Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Tenaga Kerja Lokal Non Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Pegawai Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Pegawai Non Staf','placeholder':'masukkan jumlah dalam satuan orang','type':'text','value':'','isOpt':false},
    ]])
  }

  ////////////////////////// RADIO BUTTON STATE ////////////////////////////////

  const [kontribusi, setKontribusi] = useState('');
  const [bayarPajak, setBayarPajak] = useState('');

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
        <div className={`${mng["base__formsection"]} border-b pb-6`}>
          <span className={mng.base__subtitle}>Pajak dan Pendapatan</span>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan perkebunan mempunyai kontribusi pada penerimaan pajak dan atau retribusi kepada Negara atau daerah?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kontribusi"
                onClick={() => setKontribusi('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kontribusi"
                onClick={() => setKontribusi('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {kontribusi == 'Iya' ? (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Apa jenis pajak dan atau retribusi dan berapa jumlahnya?</span>
                <input type="text" placeholder="Apa jenis pajak dan atau retribusi dan berapa jumlahnya?" value={jenisRetribusiPajak} className={mng.base__inputbase} onChange={(e) => setJenisRetribusiPajak(e.target.value)}/>
              </label>
              <div className="flex flex-col">
                {
                  jenisPajak.map((items, i) => (
                    <div className={``} key={i}>
                      {
                        items.map((item,ii) => (
                          <div className={``} key={ii}>
                            <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                            <div className={`${mng["base__formlabel_tris"]} flex w-full pl-0 pr-0`}>
                            {
                              item.sectionData.map((child,iii) => (
                                <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_tris"]}`} key={iii}>
                                  <span className={mng.base__inputtitle}>{child.title}</span>
                                  <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, jenisPajak, setJenisPajak, i, ii, iii)}/>
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
              <label className={`${mng["base__formlabel"]} mb-4`}>
                <span className={mng.base__inputtitle}>Tuliskan alasannya</span>
                <input type="text" placeholder="Apa jenis pajak dan atau retribusi dan berapa jumlahnya?" value={alasan} className={mng.base__inputbase} onChange={(e) => setAlasan(e.target.value)}/>
              </label>
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan membayar pajak tepat waktu?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bayarPajak"
                onClick={() => setBayarPajak('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bayarPajak"
                onClick={() => setBayarPajak('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

        </div>

        <div className={`${mng["base__formsection"]} border-b-0`}>
          <span className={mng.base__subtitle}>Penyerapan Tenaga Lokal untuk Posisi Staf</span>

          <div className="mt-2 mb-3 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              tenaga kerja lokal adalah tenaga kerja yang berasal dari desa atau kecamatan sekitar kebun
            </div>
          </div>

          {
            tahun1.map((items, i) => (
              <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]} border-b-0 mb-0`} key={i}>
              {
                items.map((item,ii) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, tahun1, setTahun1, i, ii)}/>
                  </label>
                ))
              }
              </div>
            ))
          }

          {
            tahun2.map((items, i) => (
              <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]} border-b-0 mb-0`} key={i}>
              {
                items.map((item,ii) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, tahun2, setTahun2, i, ii)}/>
                  </label>
                ))
              }
              </div>
            ))
          }

          {
            tahun3.map((items, i) => (
              <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]} border-b-0`} key={i}>
              {
                items.map((item,ii) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, tahun3, setTahun3, i, ii)}/>
                  </label>
                ))
              }
              </div>
            ))
          }

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

export default FormEkonomi;
