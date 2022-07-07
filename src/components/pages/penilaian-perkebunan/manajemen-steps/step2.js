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

const FormManajemenStep2 = () => {

  ////////////////////////// INPUT FORM STATE ////////////////////////////////

  const [presentasePutusKerja, setPresentasePutusKerja] = useState('');

  ////////////////////////// RADIO BUTTON STATE ////////////////////////////////

  const [sistemRekrutPegawaiOpt, setSistemRekrutPegawaiOpt] = useState('');
  const [sistemRekrutPegawaiTerapkanOpt, setSistemRekrutPegawaiTerapkanOpt] = useState('');
  const [sistemGajiPegawaiOpt, setSistemGajiPegawaiOpt] = useState('');
  const [sistemGajiPegawaiTerapkanOpt, setSistemGajiPegawaiTerapkanOpt] = useState('');
  const [jenjangKarirOpt, setJenjangKarirOpt] = useState('');
  const [jenjangKarirTerapkanOpt, setJenjangKarirTerapkanOpt] = useState('');
  const [putusKerjaOpt, setPutusKerjaOpt] = useState('');
  const [putusKerjaGantiOpt, setPutusKerjaGantiOpt] = useState('');

  ////////////////////////// Ganti Tenaga Kerja Asing jadi Tenaga Kerja Indo ////////////////////////////////

  const [gantiTenaga, setGantiTenaga] = useState([
    [
      { 'sectionTitle': 'Bidang : Manajemen Sumber Daya Manusia', 'sectionData': [ {'title':'Posisi','type':'text','placeholder':'tulis posisi','value':''}, {'title':'Terhitung mulai Tanggal','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Jumlah','type':'text','placeholder':'tulis jumlah','value':''} ] }, { 'sectionTitle': 'Bidang : Manajemen Produksi', 'sectionData': [ {'title':'Posisi','type':'text','placeholder':'tulis posisi','value':''}, {'title':'Terhitung mulai Tanggal','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Jumlah','type':'text','placeholder':'tulis jumlah','value':''} ] }, { 'sectionTitle': 'Bidang : Manajemen Pemasaran', 'sectionData': [ {'title':'Posisi','type':'text','placeholder':'tulis posisi','value':''}, {'title':'Terhitung mulai Tanggal','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Jumlah','type':'text','placeholder':'tulis jumlah','value':''} ] }, { 'sectionTitle': 'Bidang : Manajemen Keuangan', 'sectionData': [ {'title':'Posisi','type':'text','placeholder':'tulis posisi','value':''}, {'title':'Terhitung mulai Tanggal','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Jumlah','type':'text','placeholder':'tulis jumlah','value':''} ] }, { 'sectionTitle': 'Bidang : Manajemen Informasi', 'sectionData': [ {'title':'Posisi','type':'text','placeholder':'tulis posisi','value':''}, {'title':'Terhitung mulai Tanggal','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Jumlah','type':'text','placeholder':'tulis jumlah','value':''} ] }, { 'sectionTitle': 'Bidang : Lainnya (sebutkan jenisnya)', 'sectionData': [ {'title':'Posisi','type':'text','placeholder':'tulis posisi','value':''}, {'title':'Terhitung mulai Tanggal','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Jumlah','type':'text','placeholder':'tulis jumlah','value':''} ] }, { 'sectionTitle': 'Bidang : Teknis Tanaman', 'sectionData': [ {'title':'Posisi','type':'text','placeholder':'tulis posisi','value':''}, {'title':'Terhitung mulai Tanggal','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Jumlah','type':'text','placeholder':'tulis jumlah','value':''} ] }, { 'sectionTitle': 'Bidang : Teknis Pabrik', 'sectionData': [ {'title':'Posisi','type':'text','placeholder':'tulis posisi','value':''}, {'title':'Terhitung mulai Tanggal','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Jumlah','type':'text','placeholder':'tulis jumlah','value':''} ] }, { 'sectionTitle': 'Bidang : Lingkungan', 'sectionData': [ {'title':'Posisi','type':'text','placeholder':'tulis posisi','value':''}, {'title':'Terhitung mulai Tanggal','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Jumlah','type':'text','placeholder':'tulis jumlah','value':''} ] }
    ]
  ])

  ////////////////////////// Latar belakang pendidikan Pimpinan Perusahaan ////////////////////////////////

  const [latarPendidikan, setLatarPendidikan] = useState([
    [
      { 'sectionTitle': 'Jabatan : Komisaris', 'sectionData': [ {'title':'Nama','type':'text','placeholder':'masukkan nama lengkap','value':''}, {'title':'Pendidikan','type':'text','placeholder':'masukkan pendidikan terakhir','value':''}, {'title':'Pengalaman Kerja Jabatan Setingkat (thn)','type':'text','placeholder':'masukkan dalam satuan tahun','value':''}, {'title':'Jenis Kursus','type':'text','placeholder':'masukkan jenis kursus yang diikuti','value':''}, {'title':'Durasi','type':'text','placeholder':'maasukkan durasi kursus','value':''} ] }, { 'sectionTitle': 'Jabatan : Direksi', 'sectionData': [ {'title':'Nama','type':'text','placeholder':'masukkan nama lengkap','value':''}, {'title':'Pendidikan','type':'text','placeholder':'masukkan pendidikan terakhir','value':''}, {'title':'Pengalaman Kerja Jabatan Setingkat (thn)','type':'text','placeholder':'masukkan dalam satuan tahun','value':''}, {'title':'Jenis Kursus','type':'text','placeholder':'masukkan jenis kursus yang diikuti','value':''}, {'title':'Durasi','type':'text','placeholder':'maasukkan durasi kursus','value':''} ] }, { 'sectionTitle': 'Jabatan : Administratur/Manajer', 'sectionData': [ {'title':'Nama','type':'text','placeholder':'masukkan nama lengkap','value':''}, {'title':'Pendidikan','type':'text','placeholder':'masukkan pendidikan terakhir','value':''}, {'title':'Pengalaman Kerja Jabatan Setingkat (thn)','type':'text','placeholder':'masukkan dalam satuan tahun','value':''}, {'title':'Jenis Kursus','type':'text','placeholder':'masukkan jenis kursus yang diikuti','value':''}, {'title':'Durasi','type':'text','placeholder':'maasukkan durasi kursus','value':''} ] }
    ]
  ])

  ////////////////////////// Kursus yang diikuti oleh Petugas/Karyawan Perusahaan (3tahun terakhir) ////////////////////////////////

  const [jenisKursus, setJenisKursus] = useState([
    [
      { 'sectionTitle': 'Jenis Kursus : Manajemen', 'sectionData': [ {'title':'Jumlah Orang','type':'text','placeholder':'masukkan jumlah dalam satuan orang','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }, { 'sectionTitle': 'Jenis Kursus : Tanaman', 'sectionData': [ {'title':'Jumlah Orang','type':'text','placeholder':'masukkan jumlah dalam satuan orang','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }, { 'sectionTitle': 'Jenis Kursus : Pabrik', 'sectionData': [ {'title':'Jumlah Orang','type':'text','placeholder':'masukkan jumlah dalam satuan orang','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }, { 'sectionTitle': 'Jenis Kursus : Lingkungan', 'sectionData': [ {'title':'Jumlah Orang','type':'text','placeholder':'masukkan jumlah dalam satuan orang','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }
    ]
  ])

  const [jenisKursusLainnya, setJenisKursusLainnya] = useState([])

  function handleBtnJenisKursusLainnya() {
    setJenisKursusLainnya([...jenisKursusLainnya,[
      { 'sectionTitle': 'Jenis Kursus : Lainnya', 'sectionData': [ {'title':'Jumlah Orang','type':'text','placeholder':'masukkan jumlah dalam satuan orang','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }
    ]])
  }

  ////////////////////////// Pelatihan yang diikuti oleh Petugas/Karyawan Perusahaan ////////////////////////////////

  const [jenisPelatihan, setJenisPelatihan] = useState([
    [
      { 'sectionTitle': 'Bidang : Manajemen', 'sectionData': [ {'title':'Jumlah (orang)','type':'text','placeholder':'masukkan jumlah orang','value':''}, {'title':'Durasi (hari)','type':'text','placeholder':'masukkan durasi hari','value':''}, {'title':'Lokasi','type':'text','placeholder':'masukkan lokasi','value':''}, {'title':'Promosi Posisi','type':'text','placeholder':'masukkan posisi','value':''}, {'title':'Terhitung Mulai Tanggal/tahun','type':'text','placeholder':'DD/MM/YYY','value':''} ] }, { 'sectionTitle': 'Bidang : Budidaya', 'sectionData': [ {'title':'Jumlah (orang)','type':'text','placeholder':'masukkan jumlah orang','value':''}, {'title':'Durasi (hari)','type':'text','placeholder':'masukkan durasi hari','value':''}, {'title':'Lokasi','type':'text','placeholder':'masukkan lokasi','value':''}, {'title':'Promosi Posisi','type':'text','placeholder':'masukkan posisi','value':''}, {'title':'Terhitung Mulai Tanggal/tahun','type':'text','placeholder':'DD/MM/YYY','value':''} ] }, { 'sectionTitle': 'Bidang : Pengolahan', 'sectionData': [ {'title':'Jumlah (orang)','type':'text','placeholder':'masukkan jumlah orang','value':''}, {'title':'Durasi (hari)','type':'text','placeholder':'masukkan durasi hari','value':''}, {'title':'Lokasi','type':'text','placeholder':'masukkan lokasi','value':''}, {'title':'Promosi Posisi','type':'text','placeholder':'masukkan posisi','value':''}, {'title':'Terhitung Mulai Tanggal/tahun','type':'text','placeholder':'DD/MM/YYY','value':''} ] }, { 'sectionTitle': 'Bidang : Lingkungan', 'sectionData': [ {'title':'Jumlah (orang)','type':'text','placeholder':'masukkan jumlah orang','value':''}, {'title':'Durasi (hari)','type':'text','placeholder':'masukkan durasi hari','value':''}, {'title':'Lokasi','type':'text','placeholder':'masukkan lokasi','value':''}, {'title':'Promosi Posisi','type':'text','placeholder':'masukkan posisi','value':''}, {'title':'Terhitung Mulai Tanggal/tahun','type':'text','placeholder':'DD/MM/YYY','value':''} ] }, { 'sectionTitle': 'Bidang : Pengolahan', 'sectionData': [ {'title':'Jumlah (orang)','type':'text','placeholder':'masukkan jumlah orang','value':''}, {'title':'Durasi (hari)','type':'text','placeholder':'masukkan durasi hari','value':''}, {'title':'Lokasi','type':'text','placeholder':'masukkan lokasi','value':''}, {'title':'Promosi Posisi','type':'text','placeholder':'masukkan posisi','value':''}, {'title':'Terhitung Mulai Tanggal/tahun','type':'text','placeholder':'DD/MM/YYY','value':''} ] }
    ]
  ])

  const [jenisPelatihanLainnya, setJenisPelatihanLainnya] = useState([])

  function handleBtnJenisPelatihanLainnya() {
    setJenisPelatihanLainnya([...jenisPelatihanLainnya,[
      { 'sectionTitle': 'Pelatihan Lainnya', 'sectionData': [ {'title':'Jumlah (orang)','type':'text','placeholder':'masukkan jumlah orang','value':''}, {'title':'Durasi (hari)','type':'text','placeholder':'masukkan durasi hari','value':''}, {'title':'Lokasi','type':'text','placeholder':'masukkan lokasi','value':''}, {'title':'Promosi Posisi','type':'text','placeholder':'masukkan posisi','value':''}, {'title':'Terhitung Mulai Tanggal/tahun','type':'text','placeholder':'DD/MM/YYY','value':''} ] }
    ]])
  }

  ////////////////////////// Penggunaan Tenaga kerja Asing (3 tahun terakhir) ////////////////////////////////

  const [tka, setTka] = useState([
    [
      {'title':'Nama','placeholder':'masukkan nama lengkap','type':'text','value':'','isOpt':false}, {'title':'Jabatan','placeholder':'tulis jabatan','type':'text','value':'','isOpt':false}, {'title':'Pendidikan Terakhir','placeholder':'masukkan pendidikan terakhir','type':'text','value':'','isOpt':false}, {'title':'Kewarganegaraan','placeholder':'tulis kewarganegaraan','type':'text','value':'','isOpt':false}, {'title':'No/Tgl Ijin Kerja Tenaga Asing','placeholder':'masukkan no/tgl ijin kerja','type':'text','value':'','isOpt':false}, {'title':'Masa Berlaku','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':false}
    ]
  ])

  function handleBtnTka() {
    setTka([...tka,[
      {'title':'Nama','placeholder':'masukkan nama lengkap','type':'text','value':'','isOpt':false}, {'title':'Jabatan','placeholder':'tulis jabatan','type':'text','value':'','isOpt':false}, {'title':'Pendidikan Terakhir','placeholder':'masukkan pendidikan terakhir','type':'text','value':'','isOpt':false}, {'title':'Kewarganegaraan','placeholder':'tulis kewarganegaraan','type':'text','value':'','isOpt':false}, {'title':'No/Tgl Ijin Kerja Tenaga Asing','placeholder':'masukkan no/tgl ijin kerja','type':'text','value':'','isOpt':false}, {'title':'Masa Berlaku','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':false}
    ]])
  }

  ////////////////////////// Upah dan Tunjangan yang diterima Karyawan paling rendah 3 tahun terakhir ////////////////////////////////

  const [tunjangan, setTunjangan] = useState([
    [
      { 'sectionTitle': 'Standar Upah', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }, { 'sectionTitle': 'Realisasi Upah', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }, { 'sectionTitle': 'Realisasi Tunjangan : Beras', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }, { 'sectionTitle': 'Realisasi Tunjangan : Kesehatan', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }, { 'sectionTitle': 'Realisasi Tunjangan : Perumahan', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }, { 'sectionTitle': 'Realisasi Tunjangan : Makan', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }, { 'sectionTitle': 'Realisasi Tunjangan : Transport', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }
    ]
  ])

  const [tunjanganLainnya, setTunjanganLainnya] = useState([])

  function handleBtnTunjanganLainnya() {
    setTunjanganLainnya([...tunjanganLainnya,[
      { 'sectionTitle': 'Realisasi Tunjangan Lainnya', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }
    ]])
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
        {/* Manajemen SDM */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Manajemen SDM</span>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki sistem dan prosedur perekrutan pegawai?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemRekrutPegawaiOpt"
                onClick={() => setSistemRekrutPegawaiOpt('Ya')}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemRekrutPegawaiOpt"
                onClick={() => setSistemRekrutPegawaiOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {sistemRekrutPegawaiOpt == 'Ya' ? (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Apakah diterapkan sepenuhnya?</span>
                <div className="inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="sistemRekrutPegawaiTerapkanOpt"
                    onClick={() => setSistemRekrutPegawaiTerapkanOpt('Ya')}
                    label="Ya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="sistemRekrutPegawaiTerapkanOpt"
                    onClick={() => setSistemRekrutPegawaiTerapkanOpt('Tidak')}
                    label="Tidak"
                  />
                </div>
              </label>
            </div>
          ) : <></>}


          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki sistem penggajian dan insentif?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemGajiPegawaiOpt"
                onClick={() => setSistemGajiPegawaiOpt('Ya')}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemGajiPegawaiOpt"
                onClick={() => setSistemGajiPegawaiOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {sistemGajiPegawaiOpt == 'Ya' ? (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Apakah diterapkan sepenuhnya?</span>
                <div className="inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="sistemGajiPegawaiTerapkanOpt"
                    onClick={() => setSistemGajiPegawaiTerapkanOpt('Ya')}
                    label="Ya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="sistemGajiPegawaiTerapkanOpt"
                    onClick={() => setSistemGajiPegawaiTerapkanOpt('Tidak')}
                    label="Tidak"
                  />
                </div>
              </label>
            </div>
          ) : <></>}


          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki sistem jenjang karir dan penilaian prestasi kerja?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="jenjangKarirOpt"
                onClick={() => setJenjangKarirOpt('Ya')}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="jenjangKarirOpt"
                onClick={() => setJenjangKarirOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {jenjangKarirOpt == 'Ya' ? (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Apakah diterapkan sepenuhnya?</span>
                <div className="inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="sistemGajiPegawaiTerapkanOpt"
                    onClick={() => setSistemGajiPegawaiTerapkanOpt('Ya')}
                    label="Ya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="sistemGajiPegawaiTerapkanOpt"
                    onClick={() => setSistemGajiPegawaiTerapkanOpt('Tidak')}
                    label="Tidak"
                  />
                </div>
              </label>
            </div>
          ) : <></>}


          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah terjadi kasus keluarnya (turnover)/pemutusan hubungan kerja karyawan tetap?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="putusKerjaOpt"
                onClick={() => setPutusKerjaOpt('Ya')}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="putusKerjaOpt"
                onClick={() => setPutusKerjaOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {putusKerjaOpt == 'Ya' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]}`}>
                <span className={mng.base__inputtitle}>Presentase/Tahun</span>
                <input className={mng.base__inputbase} type='text' placeholder='presentase kasus turnover' value={presentasePutusKerja} onChange={(e) => setPresentasePutusKerja(e.target.value)}/>
              </label>
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${'mt-4 font-bold'}`}>Latar belakang pendidikan Pimpinan Perusahaan</p>
          <div className="flex flex-col mt-4">
            {
              latarPendidikan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <div className={`w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstFormFull"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, latarPendidikan, setLatarPendidikan, i, ii, iii)}/>
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

          <p className={`${mng["base__formtitle"]} ${'mt-4 font-bold'}`}>Kursus yang diikuti oleh Petugas/Karyawan Perusahaan (3tahun terakhir)</p>
          <div className="flex flex-col mt-4">
            {
              jenisKursus.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <div className={`w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, jenisKursus, setJenisKursus, i, ii, iii)}/>
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

          <div className="flex flex-col mt-4">
            {
              jenisKursusLainnya.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, jenisKursusLainnya, setJenisKursusLainnya)}>
                      do_not_disturb_on
                    </span>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, jenisKursusLainnya, setJenisKursusLainnya, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnJenisKursusLainnya}>
            + Tambah Jenis Kursus Lainnya
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-4 font-bold'}`}>Pelatihan yang diikuti oleh Petugas/Karyawan Perusahaan</p>
          <div className="flex flex-col mt-4">
            {
              jenisPelatihan.map((items, i) => (
                <div className={`${mng["base__formlabel_custom5"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_custom5-sec"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, jenisPelatihan, setJenisPelatihan, i, ii, iii)}/>
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
          <div className="flex flex-col mt-4">
            {
              jenisPelatihanLainnya.map((items, i) => (
                <div className={`${mng["base__formlabel_custom5"]}`} key={i}>
                  {
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, jenisPelatihanLainnya, setJenisPelatihanLainnya)}>
                      do_not_disturb_on
                    </span>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_custom5-sec"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, jenisPelatihanLainnya, setJenisPelatihanLainnya, i, ii, iii)}/>
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
          <div className={`${mng["base__btn"]}`} onClick={handleBtnJenisPelatihanLainnya}>
            + Tambah Jenis Pelatihan Lainnya
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-4 font-bold'}`}>Alih Keterampilan</p>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Penggunaan Tenaga kerja Asing (3 tahun terakhir)</p>
          <div className="flex flex-col">
            {
              tka.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, tka, setTka)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, tka, setTka, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }

          </div>

          <div className={`${mng["base__btn"]} mb-6`} onClick={handleBtnTka}>
            + Tambah Data Jenis Kegiatan
          </div>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>apakah ada posisi dari tenaga kerja asing (tKA) diganti menjadi Tenaga Kerja Indonesia (TKI) selama 3 tahun terakhir?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="putusKerjaGantiOpt"
                onClick={() => setPutusKerjaGantiOpt('Ya')}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="putusKerjaGantiOpt"
                onClick={() => setPutusKerjaGantiOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {putusKerjaGantiOpt == 'Ya' ? (
            <div className="mt-6">
              <div className="flex flex-col">
                {
                  gantiTenaga.map((items, i) => (
                    <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                      {
                        items.map((item,ii) => (
                          <div className={`w-full`} key={ii}>
                            <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                            <div className={`${mng["base__formlabel_tri"]} w-full`}>
                            {
                              item.sectionData.map((child,iii) => (
                                <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                                  <span className={mng.base__inputtitle}>{child.title}</span>
                                  <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, gantiTenaga, setGantiTenaga, i, ii, iii)}/>
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

        </div>

        {/* Kesejahteraan Karyawan */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Kesejahteraan Karyawan</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4 font-bold'}`}>Upah dan Tunjangan yang diterima Karyawan paling rendah 3 tahun terakhir</p>

          <div className="flex flex-col mt-4">
            {
              tunjangan.map((items, i) => (
                <div className={`${mng["base__formlabel_tri"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <div className={`w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} ${mng["base__formlabel_tri-custom"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, tunjangan, setTunjangan, i, ii, iii)}/>
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
          <div className="flex flex-col mt-4">
            {
              tunjanganLainnya.map((items, i) => (
                <div className={`${mng["base__formlabel_tri"]}`} key={i}>
                  {
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, tunjanganLainnya, setTunjanganLainnya)}>
                      do_not_disturb_on
                    </span>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} ${mng["base__formlabel_tri-custom"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, tunjanganLainnya, setTunjanganLainnya, i, ii, iii)}/>
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
          <div className={`${mng["base__btn"]}`} onClick={handleBtnTunjanganLainnya}>
            + Tambah Realisasi Tunjangan Lainnya
          </div>
        </div>

      </form>

    </>
  );
};
export default FormManajemenStep2;
