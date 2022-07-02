import React, { useState } from 'react';
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormLingkungan = () => {
  const [isError, setIsError] = useState(false);

  const [tidakTerlibat, setTidakTerlibat] = useState('');
  const [orgPengangan, setOrgPengangan] = useState('');
  const [jmlPengangan, setJmlPengangan] = useState('');
  const [teknikPengolahan, setTeknikPengolahan] = useState('');
  const [tidakPantau, setTidakPantau] = useState('');
  const [laporInstansi, setLaporInstansi] = useState('');
  const [mnjLingkungan, setMnjLingkungan] = useState('');
  const [pengangananLmbahPdt, setPengangananLmbahPdt] = useState('');
  const [pengangananLmbahCair, setPengangananLmbahCair] = useState('');
  function tidakTerlibatChange(e) {setTidakTerlibat(e.target.value)}
  function orgPenganganChange(e) {setOrgPengangan(e.target.value)}
  function jmlPenganganChange(e) {setJmlPengangan(e.target.value)}
  function teknikPengolahanChange(e) {setTeknikPengolahan(e.target.value)}
  function tidakPantau(e) {setTidakPantau(e.target.value)}
  function laporInstansi(e) {setLaporInstansi(e.target.value)}
  function mnjLingkungan(e) {setMnjLingkungan(e.target.value)}
  function pengangananLmbahPdt(e) {setPengangananLmbahPdt(e.target.value)}
  function pengangananLmbahCair(e) {setPengangananLmbahCair(e.target.value)}


  const [legalLapor, setLegalLapor] = useState('');

  const setLegalLaporOpt = (e) => {setLegalLapor(e)}

  ////////////////////////// OTHER FUNCTION ////////////////////////////////

  const [btnValid, setBtnValid] = useState(false)

  const storeData = preventDefault(() => {

  })

  function clearData() {

  }

  return (
    <>
      <form>
        <div className={`${["mng.base__formsection"]} border-b-0`}>
          {/* Aspek Laporan : Legalitas */}
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Aspek Laporan : Legalitas</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Kelengkapan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="legalLapor"
                onClick={() => setLegalLaporOpt('Lengkap')}
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="legalLapor"
                onClick={() => setLegalLaporOpt('Tidak Lengkap')}
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
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="legalLaporSampai"
                onClick={() => setLegalLaporSampaiOpt('Tidak Tepat Waktu')}
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
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="mnjLapor"
                onClick={() => setMnjLaporOpt('Tidak Lengkap')}
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
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="mnjLaporSampai"
                onClick={() => setMnjLaporSampaiOpt('Tidak Tepat Waktu')}
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
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kebunLapor"
                onClick={() => setKebunLaporOpt('Tidak Lengkap')}
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
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kebunLaporSampai"
                onClick={() => setKebunLaporSampaiOpt('Tidak Tepat Waktu')}
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
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="olahLapor"
                onClick={() => setOlahLaporOpt('Tidak Lengkap')}
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
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="olahLaporSampai"
                onClick={() => setOlahLaporSampaiOpt('Tidak Tepat Waktu')}
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
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sosialLapor"
                onClick={() => setSosialLaporOpt('Tidak Lengkap')}
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
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sosialLaporSampai"
                onClick={() => setSosialLaporSampaiOpt('Tidak Tepat Waktu')}
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
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="ekoLapor"
                onClick={() => setEkoLaporOpt('Tidak Lengkap')}
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
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="ekoLaporSampai"
                onClick={() => setEkoLaporSampaiOpt('Tidak Tepat Waktu')}
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
                label="Lengkap"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="lingkunganLapor"
                onClick={() => setLingkunganLaporOpt('Tidak Lengkap')}
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
                label="Tepat Waktu"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="lingkunganLaporSampai"
                onClick={() => setLingkunganLaporSampaiOpt('Tidak Tepat Waktu')}
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

          <button className={`${mng["base__btnsimpan"]} ${"float-right mt-1"}`} onClick={storeData} disabled={!btnValid}>
            Simpan dan Lanjutkan
          </button>
        </div>

      </form>
    </>
  );
};

export default FormLingkungan;
