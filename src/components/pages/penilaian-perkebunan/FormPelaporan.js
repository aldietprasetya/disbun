import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import _ from 'lodash';
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormLapor = () => {
  const [isError, setIsError] = useState(false);

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState([])

  const [ket1, setKet1] = useState('');
  const [ket2, setKet2] = useState('');
  const [ket3, setKet3] = useState('');
  const [ket4, setKet4] = useState('');
  const [ket5, setKet5] = useState('');
  const [ket6, setKet6] = useState('');
  const [ket7, setKet7] = useState('');
  function ket1Change(e) {setKet1(e.target.value)}
  function ket2Change(e) {setKet2(e.target.value)}
  function ket3Change(e) {setKet3(e.target.value)}
  function ket4Change(e) {setKet4(e.target.value)}
  function ket5Change(e) {setKet5(e.target.value)}
  function ket6Change(e) {setKet6(e.target.value)}
  function ket7Change(e) {setKet7(e.target.value)}

  const [legalLapor, setLegalLapor] = useState('');
  const [legalLaporSampai, setLegalLaporSampai] = useState('');
  const [mnjLapor, setMnjLapor] = useState('');
  const [mnjLaporSampai, setMnjLaporSampai] = useState('');
  const [kebunLapor, setKebunLapor] = useState('');
  const [kebunLaporSampai, setKebunLaporSampai] = useState('');
  const [olahLapor, setOlahLapor] = useState('');
  const [olahLaporSampai, setOlahLaporSampai] = useState('');
  const [sosialLapor, setSosialLapor] = useState('');
  const [sosialLaporSampai, setSosialLaporSampai] = useState('');
  const [ekoLapor, setEkoLapor] = useState('');
  const [ekoLaporSampai, setEkoLaporSampai] = useState('');
  const [lingkunganLapor, setLingkunganLapor] = useState('');
  const [lingkunganLaporSampai, setLingkunganLaporSampai] = useState('');

  const setLegalLaporOpt = (e) => {setLegalLapor(e)}
  const setLegalLaporSampaiOpt = (e) => {setLegalLaporSampai(e)}
  const setMnjLaporOpt = (e) => {setMnjLapor(e)}
  const setMnjLaporSampaiOpt = (e) => {setMnjLaporSampai(e)}
  const setKebunLaporOpt = (e) => {setKebunLapor(e)}
  const setKebunLaporSampaiOpt = (e) => {setKebunLaporSampai(e)}
  const setOlahLaporOpt = (e) => {setOlahLapor(e)}
  const setOlahLaporSampaiOpt = (e) => {setOlahLaporSampai(e)}
  const setSosialLaporOpt = (e) => {setSosialLapor(e)}
  const setSosialLaporSampaiOpt = (e) => {setSosialLaporSampai(e)}
  const setEkoLaporOpt = (e) => {setEkoLapor(e)}
  const setEkoLaporSampaiOpt = (e) => {setEkoLaporSampai(e)}
  const setLingkunganLaporOpt = (e) => {setLingkunganLapor(e)}
  const setLingkunganLaporSampaiOpt = (e) => {setLingkunganLaporSampai(e)}

  ////////////////////////// OTHER FUNCTION ////////////////////////////////

  useEffect(() => {
    if (initialLoad) {
      let retrievedObject = JSON.parse(localStorage.getItem('laporNilai'));

      if (!_.isEmpty(retrievedObject)) {
        setLegalLapor(retrievedObject[0].reportCompleteness)
        setLegalLaporSampai(retrievedObject[0].reportOntime)
        setKet1(retrievedObject[0].description)

        setMnjLapor(retrievedObject[1].reportCompleteness)
        setMnjLaporSampai(retrievedObject[1].reportOntime)
        setKet2(retrievedObject[1].description)

        setKebunLapor(retrievedObject[2].reportCompleteness)
        setKebunLaporSampai(retrievedObject[2].reportOntime)
        setKet3(retrievedObject[2].description)

        setOlahLapor(retrievedObject[3].reportCompleteness)
        setOlahLaporSampai(retrievedObject[3].reportOntime)
        setKet4(retrievedObject[3].description)

        setSosialLapor(retrievedObject[4].reportCompleteness)
        setSosialLaporSampai(retrievedObject[4].reportOntime)
        setKet5(retrievedObject[4].description)

        setEkoLapor(retrievedObject[5].reportCompleteness)
        setEkoLaporSampai(retrievedObject[5].reportOntime)
        setKet6(retrievedObject[5].description)

        setLingkunganLapor(retrievedObject[6].reportCompleteness)
        setLingkunganLaporSampai(retrievedObject[6].reportOntime)
        setKet7(retrievedObject[6].description)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {

    setDataSubmit([
      {
        "aspect": "Legalitas",
        "reportCompleteness": legalLapor,
        "reportOntime": legalLaporSampai,
        "description": ket1
      },
      {
        "aspect": "Manajemen",
        "reportCompleteness": mnjLapor,
        "reportOntime": mnjLaporSampai,
        "description": ket2
      },
      {
        "aspect": "Kebun",
        "reportCompleteness": kebunLapor,
        "reportOntime": kebunLaporSampai,
        "description": ket3
      },
      {
        "aspect": "Pengolahan Hasil",
        "reportCompleteness": olahLapor,
        "reportOntime": olahLaporSampai,
        "description": ket4
      },
      {
        "aspect": "Sosial",
        "reportCompleteness": sosialLapor,
        "reportOntime": sosialLaporSampai,
        "description": ket5
      },
      {
        "aspect": "Ekonomi WIlayah",
        "reportCompleteness": ekoLapor,
        "reportOntime": ekoLaporSampai,
        "description": ket6
      },
      {
        "aspect": "Linkungan",
        "reportCompleteness": lingkunganLapor,
        "reportOntime": lingkunganLaporSampai,
        "description": ket7
      }
    ])

  }, [legalLapor,legalLaporSampai,mnjLapor,mnjLaporSampai,kebunLapor,kebunLaporSampai,olahLapor
    ,olahLaporSampai,sosialLapor,sosialLaporSampai,ekoLapor,ekoLaporSampai,lingkunganLapor
    ,lingkunganLaporSampai,ket1,ket2,ket3,ket4,ket5,ket6,ket7])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(() => {
    localStorage.setItem("laporNilai", JSON.stringify(dataSubmit));

    console.log('Data Send Pelaporan Nilai')
    console.log('=========================================================')
    console.log(dataSubmit)
    console.log('=========================================================')

    router.push({
      pathname: "/user/penilaian-perkebunan/konfirmasi"
    })
  })

  function clearData() {

  }

  return (
    <>
      <Head>
        
      </Head>

      <form>
        <div className={`${mng["base__formsection"]} border-b-0`}>
          {/* Aspek Laporan : Legalitas */}
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Aspek Laporan : Legalitas</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Kelengkapan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="legalLapor"
                onClick={() => setLegalLaporOpt('Lengkap')}
                radioValue={legalLapor}
                selected={legalLapor == 'Lengkap'}
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="legalLapor"
                onClick={() => setLegalLaporOpt('Tidak Lengkap')}
                radioValue={legalLapor}
                selected={legalLapor == 'Tidak Lengkap'}
                label="Tidak Lengkap"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketepatan Penyampaian Laporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="legalLaporSampai"
                onClick={() => setLegalLaporSampaiOpt('Tepat Waktu')}
                radioValue={legalLaporSampai}
                selected={legalLaporSampai == 'Tepat Waktu'}
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="legalLaporSampai"
                onClick={() => setLegalLaporSampaiOpt('Tidak Tepat Waktu')}
                radioValue={legalLaporSampai}
                selected={legalLaporSampai == 'Tidak Tepat Waktu'}
                label="Tidak Tepat Waktu"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Keterangan (semesteran/tahunan)</span>
            <input type="text" placeholder="Nama Administratur/Manager" value={ket1} className={mng.base__inputbase} onChange={(e) => ket1Change(e)}/>
          </label>

          {/* Aspek Laporan : Manajemen */}
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Aspek Laporan : Manajemen</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Kelengkapan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="mnjLapor"
                onClick={() => setMnjLaporOpt('Lengkap')}
                radioValue={mnjLapor}
                selected={mnjLapor == 'Lengkap'}
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="mnjLapor"
                onClick={() => setMnjLaporOpt('Tidak Lengkap')}
                radioValue={mnjLapor}
                selected={mnjLapor == 'Tidak Lengkap'}
                label="Tidak Lengkap"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketepatan Penyampaian Laporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="mnjLaporSampai"
                onClick={() => setMnjLaporSampaiOpt('Tepat Waktu')}
                radioValue={mnjLaporSampai}
                selected={mnjLaporSampai == 'Tepat Waktu'}
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="mnjLaporSampai"
                onClick={() => setMnjLaporSampaiOpt('Tidak Tepat Waktu')}
                radioValue={mnjLaporSampai}
                selected={mnjLaporSampai == 'Tidak Tepat Waktu'}
                label="Tidak Tepat Waktu"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Keterangan (semesteran/tahunan)</span>
            <input type="text" placeholder="Nama Administratur/Manager" value={ket2} className={mng.base__inputbase} onChange={(e) => ket2Change(e)}/>
          </label>

          {/* Aspek Laporan : Kebun */}
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Aspek Laporan : Kebun</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Kelengkapan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kebunLapor"
                onClick={() => setKebunLaporOpt('Lengkap')}
                radioValue={kebunLapor}
                selected={kebunLapor == 'Lengkap'}
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kebunLapor"
                onClick={() => setKebunLaporOpt('Tidak Lengkap')}
                radioValue={kebunLapor}
                selected={kebunLapor == 'Tidak Lengkap'}
                label="Tidak Lengkap"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketepatan Penyampaian Laporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kebunLaporSampai"
                onClick={() => setKebunLaporSampaiOpt('Tepat Waktu')}
                radioValue={kebunLaporSampai}
                selected={kebunLaporSampai == 'Tepat Waktu'}
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kebunLaporSampai"
                onClick={() => setKebunLaporSampaiOpt('Tidak Tepat Waktu')}
                radioValue={kebunLaporSampai}
                selected={kebunLaporSampai == 'Tidak Tepat Waktu'}
                label="Tidak Tepat Waktu"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Keterangan (semesteran/tahunan)</span>
            <input type="text" placeholder="Nama Administratur/Manager" value={ket3} className={mng.base__inputbase} onChange={(e) => ket3Change(e)}/>
          </label>

          {/* Aspek Laporan : Pengolahan Hasil */}
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Aspek Laporan : Pengolahan Hasil</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Kelengkapan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="olahLapor"
                onClick={() => setOlahLaporOpt('Lengkap')}
                radioValue={olahLapor}
                selected={olahLapor == 'Lengkap'}
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="olahLapor"
                onClick={() => setOlahLaporOpt('Tidak Lengkap')}
                radioValue={olahLapor}
                selected={olahLapor == 'Tidak Lengkap'}
                label="Tidak Lengkap"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketepatan Penyampaian Laporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="olahLaporSampai"
                onClick={() => setOlahLaporSampaiOpt('Tepat Waktu')}
                radioValue={olahLaporSampai}
                selected={olahLaporSampai == 'Tepat Waktu'}
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="olahLaporSampai"
                onClick={() => setOlahLaporSampaiOpt('Tidak Tepat Waktu')}
                radioValue={olahLaporSampai}
                selected={olahLaporSampai == 'Tidak Tepat Waktu'}
                label="Tidak Tepat Waktu"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Keterangan (semesteran/tahunan)</span>
            <input type="text" placeholder="Nama Administratur/Manager" value={ket4} className={mng.base__inputbase} onChange={(e) => ket4Change(e)}/>
          </label>

          {/* Aspek Laporan : Sosial */}
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Aspek Laporan : Sosial</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Kelengkapan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sosialLapor"
                onClick={() => setSosialLaporOpt('Lengkap')}
                radioValue={sosialLapor}
                selected={sosialLapor == 'Lengkap'}
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sosialLapor"
                onClick={() => setSosialLaporOpt('Tidak Lengkap')}
                radioValue={sosialLapor}
                selected={sosialLapor == 'Tidak Lengkap'}
                label="Tidak Lengkap"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketepatan Penyampaian Laporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sosialLaporSampai"
                onClick={() => setSosialLaporSampaiOpt('Tepat Waktu')}
                radioValue={sosialLaporSampai}
                selected={sosialLaporSampai == 'Tepat Waktu'}
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sosialLaporSampai"
                onClick={() => setSosialLaporSampaiOpt('Tidak Tepat Waktu')}
                radioValue={sosialLaporSampai}
                selected={sosialLaporSampai == 'Tidak Tepat Waktu'}
                label="Tidak Tepat Waktu"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Keterangan (semesteran/tahunan)</span>
            <input type="text" placeholder="Nama Administratur/Manager" value={ket5} className={mng.base__inputbase} onChange={(e) => ket5Change(e)}/>
          </label>

          {/* Aspek Laporan : Ekonomi Wilayah */}
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Aspek Laporan : Ekonomi Wilayah</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Kelengkapan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="ekoLapor"
                onClick={() => setEkoLaporOpt('Lengkap')}
                radioValue={ekoLapor}
                selected={ekoLapor == 'Lengkap'}
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="ekoLapor"
                onClick={() => setEkoLaporOpt('Tidak Lengkap')}
                radioValue={ekoLapor}
                selected={ekoLapor == 'Tidak Lengkap'}
                label="Tidak Lengkap"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketepatan Penyampaian Laporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="ekoLaporSampai"
                onClick={() => setEkoLaporSampaiOpt('Tepat Waktu')}
                radioValue={ekoLaporSampai}
                selected={ekoLaporSampai == 'Tepat Waktu'}
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="ekoLaporSampai"
                onClick={() => setEkoLaporSampaiOpt('Tidak Tepat Waktu')}
                radioValue={ekoLaporSampai}
                selected={ekoLaporSampai == 'Tidak Tepat Waktu'}
                label="Tidak Tepat Waktu"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Keterangan (semesteran/tahunan)</span>
            <input type="text" placeholder="Nama Administratur/Manager" value={ket6} className={mng.base__inputbase} onChange={(e) => ket6Change(e)}/>
          </label>

          {/* Aspek Laporan : Lingkungan */}
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Aspek Laporan : Lingkungan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Kelengkapan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="lingkunganLapor"
                onClick={() => setLingkunganLaporOpt('Lengkap')}
                radioValue={lingkunganLapor}
                selected={lingkunganLapor == 'Lengkap'}
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="lingkunganLapor"
                onClick={() => setLingkunganLaporOpt('Tidak Lengkap')}
                radioValue={lingkunganLapor}
                selected={lingkunganLapor == 'Tidak Lengkap'}
                label="Tidak Lengkap"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketepatan Penyampaian Laporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="lingkunganLaporSampai"
                onClick={() => setLingkunganLaporSampaiOpt('Tepat Waktu')}
                radioValue={lingkunganLaporSampai}
                selected={lingkunganLaporSampai == 'Tepat Waktu'}
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="lingkunganLaporSampai"
                onClick={() => setLingkunganLaporSampaiOpt('Tidak Tepat Waktu')}
                radioValue={lingkunganLaporSampai}
                selected={lingkunganLaporSampai == 'Tidak Tepat Waktu'}
                label="Tidak Tepat Waktu"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Keterangan (semesteran/tahunan)</span>
            <input type="text" placeholder="Nama Administratur/Manager" value={ket7} className={mng.base__inputbase} onChange={(e) => ket7Change(e)}/>
          </label>

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

export default FormLapor;
