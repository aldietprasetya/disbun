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

const FormSosial = () => {
  const [isError, setIsError] = useState(false);

  ////////////////////////// INPUT FORM STATE ////////////////////////////////

  const [asalBenih, setAsalBenih] = useState('');
  const [faskes, setFaskes] = useState('');
  const [tenagaMedis, setTenagaMedis] = useState('');
  const [faspin, setFaspin] = useState('');
  const [fasjal, setFasjal] = useState('');
  const [fasol, setFasol] = useState('');
  const [kegiatanMitra, setKegiatanMitra] = useState('');
  const [presentase, setPresentase] = useState('');
  const [kegiatanLancar, setKegiatanLancar] = useState('');

  ////////////////////////// RADIO BUTTON STATE ////////////////////////////////

  const [bangunFaskesOpt, setBangunFaskesOpt] = useState('');
  const [kualitasFaskesOpt, setKualitasFasketOpt] = useState('');
  const [tenagaMedisOpt, setTenagaMedisOpt] = useState('');
  const [bangunFaspinOpt, setBangunFaspinOpt] = useState('');
  const [kualitasFaspinOpt, setKualitasFaspinOpt] = useState('');
  const [bangunFasjalOpt, setBangunFasjalOpt] = useState('');
  const [kualitasFasjalOpt, setKualitasFasjalOpt] = useState('');
  const [alatFasjalOpt, setAlatFasjalOpt] = useState('');
  const [bangunFasolOpt, setBangunFasolOpt] = useState('');
  const [kualitasFasolOpt, setKualitasFasolOpt] = useState('');
  const [alatFasolOpt, setAlatFasolOpt] = useState('');
  const [bangunFasbudOpt, setBangunFasbudOpt] = useState('');
  const [kualitasFasbudOpt, setKualitasFasbudOpt] = useState('');
  const [alatFasbudOpt, setAlatFasbudOpt] = useState('');
  const [sertifikatBenihOpt, setSertifikatBenihOpt] = useState('');
  const [pembinaanKebonOpt, setPembinaanKebonOpt] = useState('');
  const [kopMasyarakatOpt, seKopMasyarakatOpt] = useState('');
  const [kopKaryawantOpt, seKopKaryawantOpt] = useState('');
  const [pembinaanDilakukan, sePembinaanDilakukan] = useState('');
  const [pembinaanFrekuensi, sePembinaanFrekuensi] = useState('');
  const [mitraOpt, seMitraOpt] = useState('');

  ////////////////////////// Pembangunan Kebun untuk Masyarakat Sekitar ////////////////////////////////

  const [luasKebun, setLuasKebun] = useState([
    [
      {'title':'Jenis Tanaman','placeholder':'masukkan jenis tanaman','type':'text','value':'','isOpt':false},
      {'title':'Kecamatan','placeholder':'masukkan lokasi kecamatan','type':'text','value':'','isOpt':false},
      {'title':'Kabupaten','placeholder':'masukkan lokasi kabupaten','type':'text','value':'','isOpt':false},
      {'title':'Target Keseluruhan (ha)','placeholder':'masukkan luas dalam ha','type':'text','value':'','isOpt':false},
      {'title':'Target sampai tahun ini (ha)','placeholder':'masukkan luas dalam ha','type':'text','value':'','isOpt':false},
      {'title':'Realisasi sampai Saat ini (ha)','placeholder':'masukkan realisasi luas dalam ha','type':'text','value':'','isOpt':false}
    ]
  ])

  function handleBtnLuasKebun() {
    setLuasKebun([...luasKebun,[
      {'title':'Jenis Tanaman','placeholder':'masukkan jenis tanaman','type':'text','value':'','isOpt':false},
      {'title':'Kecamatan','placeholder':'masukkan lokasi kecamatan','type':'text','value':'','isOpt':false},
      {'title':'Kabupaten','placeholder':'masukkan lokasi kabupaten','type':'text','value':'','isOpt':false},
      {'title':'Target Keseluruhan (ha)','placeholder':'masukkan luas dalam ha','type':'text','value':'','isOpt':false},
      {'title':'Target sampai tahun ini (ha)','placeholder':'masukkan luas dalam ha','type':'text','value':'','isOpt':false},
      {'title':'Realisasi sampai Saat ini (ha)','placeholder':'masukkan realisasi luas dalam ha','type':'text','value':'','isOpt':false}
    ]])
  }

  const [rapatTanaman, setRapatTanaman] = useState([
    [
      {
        'sectionTitle': 'Kerapatan Tanaman',
        'sectionData': [
          {'title':'Jenis Tanaman','type':'text','placeholder':'masukkan jenis tanaman','value':''}
        ]
      },
      {
        'sectionTitle': 'Kerapatan Tanaman (% dari populasi standar)',
        'sectionData': [
          {'title':'100%','type':'text','placeholder':'presentase','value':''},
          {'title':'>80%-<100%','type':'text','placeholder':'presentase','value':''},
          {'title':'60-80%','type':'text','placeholder':'presentase','value':''},
          {'title':'<60%','type':'text','placeholder':'presentase','value':''},
          {'title':'Jumlah','type':'text','placeholder':'presentase','value':''}
        ]
      },
    ]
  ])

  function handleBtnRapatTanaman() {
    setRapatTanaman([...rapatTanaman,[
      {
        'sectionTitle': 'Kerapatan Tanaman',
        'sectionData': [
          {'title':'Jenis Tanaman','type':'text','placeholder':'masukkan jenis tanaman','value':''}
        ]
      },
      {
        'sectionTitle': 'Kerapatan Tanaman (% dari populasi standar)',
        'sectionData': [
          {'title':'100%','type':'text','placeholder':'presentase','value':''},
          {'title':'>80%-<100%','type':'text','placeholder':'presentase','value':''},
          {'title':'60-80%','type':'text','placeholder':'presentase','value':''},
          {'title':'<60%','type':'text','placeholder':'presentase','value':''},
          {'title':'Jumlah','type':'text','placeholder':'presentase','value':''}
        ]
      }
    ]])
  }

  const [seragamTanaman, setSeragamTanaman] = useState([
    [
      {
        'sectionTitle': 'Keseragaman Pertumbuhan Tanaman yang Baik',
        'sectionData': [
          {'title':'Jenis Tanaman','type':'text','placeholder':'masukkan jenis tanaman','value':''}
        ]
      },
      {
        'sectionTitle': 'Keseragaman Tanaman (% dari populasi standar)',
        'sectionData': [
          {'title':'100%','type':'text','placeholder':'presentase','value':''},
          {'title':'>80%-<100%','type':'text','placeholder':'presentase','value':''},
          {'title':'60-80%','type':'text','placeholder':'presentase','value':''},
          {'title':'<60%','type':'text','placeholder':'presentase','value':''},
          {'title':'Jumlah','type':'text','placeholder':'presentase','value':''}
        ]
      },
    ]
  ])

  function handleBtnSeragamTanaman() {
    setSeragamTanaman([...seragamTanaman,[
      {
        'sectionTitle': 'Keseragaman Pertumbuhan Tanaman yang Baik',
        'sectionData': [
          {'title':'Jenis Tanaman','type':'text','placeholder':'masukkan jenis tanaman','value':''}
        ]
      },
      {
        'sectionTitle': 'Keseragaman Tanaman (% dari populasi standar)',
        'sectionData': [
          {'title':'100%','type':'text','placeholder':'presentase','value':''},
          {'title':'>80%-<100%','type':'text','placeholder':'presentase','value':''},
          {'title':'60-80%','type':'text','placeholder':'presentase','value':''},
          {'title':'<60%','type':'text','placeholder':'presentase','value':''},
          {'title':'Jumlah','type':'text','placeholder':'presentase','value':''}
        ]
      }
    ]])
  }

  const [opt, setOpt] = useState([
    [
      {
        'sectionTitle': 'Serangan OPT',
        'sectionData': [
          {'title':'Jenis OPT','type':'text','placeholder':'masukkan jenis OPT','value':''}
        ]
      },
      {
        'sectionTitle': 'Serangan OPT (% dari populasi standar)',
        'sectionData': [
          {'title':'100%','type':'text','placeholder':'presentase','value':''},
          {'title':'>80%-<100%','type':'text','placeholder':'presentase','value':''},
          {'title':'60-80%','type':'text','placeholder':'presentase','value':''},
          {'title':'<60%','type':'text','placeholder':'presentase','value':''},
          {'title':'Jumlah','type':'text','placeholder':'presentase','value':''}
        ]
      },
    ]
  ])

  function handleBtnOpt() {
    setOpt([...opt,[
      {
        'sectionTitle': 'Serangan OPT',
        'sectionData': [
          {'title':'Jenis OPT','type':'text','placeholder':'masukkan jenis OPT','value':''}
        ]
      },
      {
        'sectionTitle': 'Serangan OPT (% dari populasi standar)',
        'sectionData': [
          {'title':'100%','type':'text','placeholder':'presentase','value':''},
          {'title':'>80%-<100%','type':'text','placeholder':'presentase','value':''},
          {'title':'60-80%','type':'text','placeholder':'presentase','value':''},
          {'title':'<60%','type':'text','placeholder':'presentase','value':''},
          {'title':'Jumlah','type':'text','placeholder':'presentase','value':''}
        ]
      },
    ]])
  }

  ////////////////////////// Kemitraan Usaha ////////////////////////////////

  const [lembagaEko, setLembagaEko] = useState([
    [
      {'title':'Jenis Lembaga Ekonomi','placeholder':'masukkan jenis lembaga ekonomi','type':'text','value':'','isOpt':false},
      {'title':'Jumlah','placeholder':'masukkan jumlah','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false}
    ]
  ])

  function handleBtnLembagaEko() {
    setLembagaEko([...lembagaEko,[
      {'title':'Jenis Lembaga Ekonomi','placeholder':'masukkan jenis lembaga ekonomi','type':'text','value':'','isOpt':false},
      {'title':'Jumlah','placeholder':'masukkan jumlah','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false}
    ]])
  }

  ////////////////////////// Bantuan Penyediaan Jenis Bibit ////////////////////////////////

  const [jenisBibit, setJenisBibit] = useState([
    [{
      'sectionTitle': 'Bantuan Penyediaan Benih/Bibit Unggul Bersertifikat dan Sarana Produksi untuk Kebun Masyarakat Sekitar',
      'sectionData': [
        {'title':'Jenis Benih/Bibit yang disalurkan','type':'text','placeholder':'masukkan jenis benih/bibit','value':''},
        {'title':'Jumlah yang disalurkan','type':'text','placeholder':'masukkan jumlah benih/bibit dalam kg','value':''},
        {'title':'Jumlah masyarakat sekitar yang dilayani (KK)','type':'text','placeholder':'jumlah dalam satuan kepal keluarga','value':''}
      ]
    },
    {
      'sectionTitle': 'Mekanisme penyaluran',
      'sectionData': [
        {'title':'Cuma-Cuma','type':'text','placeholder':'dalam kg','value':''},
        {'title':'Bayar Sebagian','type':'text','placeholder':'dalam kg','value':''},
        {'title':'Bayar Semua','type':'text','placeholder':'dalam kg','value':''},
        {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''}
      ]
    },]
  ])

  function handleBtnJenisBibit() {
    setJenisBibit([...jenisBibit,[
      {
        'sectionTitle': 'Bantuan Penyediaan Benih/Bibit Unggul Bersertifikat dan Sarana Produksi untuk Kebun Masyarakat Sekitar',
        'sectionData': [
          {'title':'Jenis Benih/Bibit yang disalurkan','type':'text','placeholder':'masukkan jenis benih/bibit','value':''},
          {'title':'Jumlah yang disalurkan','type':'text','placeholder':'masukkan jumlah benih/bibit dalam kg','value':''},
          {'title':'Jumlah masyarakat sekitar yang dilayani (KK)','type':'text','placeholder':'jumlah dalam satuan kepal keluarga','value':''}
        ]
      },
      {
        'sectionTitle': 'Mekanisme penyaluran',
        'sectionData': [
          {'title':'Cuma-Cuma','type':'text','placeholder':'dalam kg','value':''},
          {'title':'Bayar Sebagian','type':'text','placeholder':'dalam kg','value':''},
          {'title':'Bayar Semua','type':'text','placeholder':'dalam kg','value':''},
          {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''}
        ]
      },
    ]])
  }

  ////////////////////////// Penyelenggaraan Pelatihan bagi Masyarakat Sekitar  ////////////////////////////////

  const [latihSekitar, setLatihSekitar] = useState([
    [
      {'title':'Jenis pelatihan','placeholder':'masukkan jenis pelatihan','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Peserta (orang)','placeholder':'jumlah orang','type':'text','value':'','isOpt':false},
      {'title':'Durasi (hari)','placeholder':'durasi','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'keterangan','type':'text','value':'','isOpt':false}
    ]
  ])

  function handleBtnLatihSekitar() {
    setLatihSekitar([...latihSekitar,[
      {'title':'Jenis pelatihan','placeholder':'masukkan jenis pelatihan','type':'text','value':'','isOpt':false},
      {'title':'Jumlah Peserta (orang)','placeholder':'jumlah orang','type':'text','value':'','isOpt':false},
      {'title':'Durasi (hari)','placeholder':'durasi','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'keterangan','type':'text','value':'','isOpt':false}
    ]])
  }

  ////////////////////////// Pemberian beasiswa bagi masyarakat sekitar  ////////////////////////////////

  const [beasiswa, setBeasiswa] = useState([
    [
      {'title':'Jenis Beasiswa','placeholder':'masukkan jenis beasiswa','type':'text','value':'','isOpt':false},
      {'title':'Jumlah (orang)','placeholder':'jumlah','type':'text','value':'','isOpt':false},
      {'title':'Biaya/Tahun/Orang (rp)','placeholder':'masukkan nominal','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false}
    ]
  ])

  function handleBtnBeasiswa() {
    setBeasiswa([...beasiswa,[
      {'title':'Jenis Beasiswa','placeholder':'masukkan jenis beasiswa','type':'text','value':'','isOpt':false},
      {'title':'Jumlah (orang)','placeholder':'jumlah','type':'text','value':'','isOpt':false},
      {'title':'Biaya/Tahun/Orang (rp)','placeholder':'masukkan nominal','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false}
    ]])
  }

  ////////////////////////// Dukungan perusahaan dalam kegiatan gotong royong masyarakat ////////////////////////////////

  const [kegiatangRoyong, setKegiatangRoyong] = useState([
    [
      {'title':'Jenis Kegiatan','placeholder':'masukkan jenis kegiatan','type':'text','value':'','isOpt':false},
      {'title':'Bentuk Keikutsertaan','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false},
      {'title':'Jumlah','placeholder':'masukkan jumlah orang','type':'text','value':'','isOpt':false},
      {'title':'Lokasi Kegiatan','placeholder':'masukkan lokasi','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false}
    ]
  ])

  function handleBtnKegiatangRoyong() {
    setKegiatangRoyong([...kegiatangRoyong,[
      {'title':'Jenis Kegiatan','placeholder':'masukkan jenis kegiatan','type':'text','value':'','isOpt':false},
      {'title':'Bentuk Keikutsertaan','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false},
      {'title':'Jumlah','placeholder':'masukkan jumlah orang','type':'text','value':'','isOpt':false},
      {'title':'Lokasi Kegiatan','placeholder':'masukkan lokasi','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false}
    ]])
  }

  ////////////////////////// Dukungan perusahaan dalam acara adat/keagamaan masyarakat sekitar ////////////////////////////////

  const [kegiatangAdat, setKegiatangAdat] = useState([
    [
      {'title':'Nama Kegiatan','placeholder':'masukkan nama kegiatan','type':'text','value':'','isOpt':false},
      {'title':'Bentuk Keikutsertaan','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false},
      {'title':'Lokasi Kegiatan','placeholder':'masukkan lokasi','type':'text','value':'','isOpt':false}
    ]
  ])

  function handleBtnKegiatangAdat() {
    setKegiatangAdat([...kegiatangAdat,[
      {'title':'Nama Kegiatan','placeholder':'masukkan nama kegiatan','type':'text','value':'','isOpt':false},
      {'title':'Bentuk Keikutsertaan','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false},
      {'title':'Lokasi Kegiatan','placeholder':'masukkan lokasi','type':'text','value':'','isOpt':false}
    ]])
  }

  ////////////////////////// Konflik ////////////////////////////////

  const [konflik, setKonflik] = useState([
    [
      {'title':'Sumber Konflik','placeholder':'sebutkan sumber konflik','type':'text','value':'','isOpt':false},
      {'title':'Bentuk Konflik','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false},
      {'title':'Jumlah (kali)','placeholder':'masukkan jumlah frekuensi','type':'text','value':'','isOpt':false},
      {'title':'Cara Penyelesaian','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false},
      {'title':'Penyelesaian Tuntas/Tidak','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false}
    ]
  ])

  function handleBtnKonflik() {
    setKonflik([...konflik,[
      {'title':'Sumber Konflik','placeholder':'sebutkan sumber konflik','type':'text','value':'','isOpt':false},
      {'title':'Bentuk Konflik','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false},
      {'title':'Jumlah (kali)','placeholder':'masukkan jumlah frekuensi','type':'text','value':'','isOpt':false},
      {'title':'Cara Penyelesaian','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false},
      {'title':'Penyelesaian Tuntas/Tidak','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false}
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
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Sosial</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Fasilitas Kesehatan untuk Masyarakat Sekitar</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan secara khusus membangun fasilitas kesehatan untuk pelayanan masyarakat sekitar?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bangunFaskesOpt"
                onClick={() => setBangunFaskesOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bangunFaskesOpt"
                onClick={() => setBangunFaskesOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan meningkatkan kualitas fasilitas kesehatan yang telah ada untuk melayani masyarakat sekitar?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kualitasFaskesOpt"
                onClick={() => setKualitasFasketOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kualitasFaskesOpt"
                onClick={() => setKualitasFasketOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {kualitasFaskesOpt == 'Iya' ? (
            <div kualitasFaskesOpt="mt-6">
              <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
                <InputForm
                  titleForm="Pilih fasilitas kesehatan yang tersedia"
                  titleName="Pilih fasilitas kesehatan yang tersedia"
                  onChange={(e) => setFaskes(e)}
                  type="text"
                  placeholder="pilih fasilitas kesehatan"
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

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan secara khusus menyediakan tenaga medis/memperbantukan tenaga medis perusahaan untuk melayani masyarakat sekitar?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="tenagaMedisOpt"
                onClick={() => setTenagaMedisOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="tenagaMedisOpt"
                onClick={() => setTenagaMedisOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {tenagaMedisOpt == 'Iya' ? (
            <div kualitasFaskesOpt="mt-6">
              <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
                <InputForm
                  titleForm="Pilih jenis tenaga medis yang tersedia"
                  titleName="Pilih jenis tenaga medis yang tersedia"
                  onChange={(e) => setTenagaMedis(e)}
                  type="text"
                  placeholder="pilih jenis tenaga medis"
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

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Fasilitas Pendidikan untuk Masyarakat Sekitar</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan secara khusus membangun fasilitas pendidikan untuk masyarakat sekitar?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bangunFaspinOpt"
                onClick={() => setBangunFaspinOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bangunFaspinOpt"
                onClick={() => setBangunFaspinOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan meningkatkan fasilitas pendidikan yang telah ada untuk masyarakat sekitar?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kualitasFaspinOpt"
                onClick={() => setKualitasFaspinOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kualitasFaspinOpt"
                onClick={() => setKualitasFaspinOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {kualitasFaspinOpt == 'Iya' ? (
            <div kualitasFaskesOpt="mt-6">
              <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
                <InputForm
                  titleForm="Pilih fasilitas Pendidikan yang tersedia"
                  titleName="Pilih fasilitas Pendidikan yang tersedia"
                  onChange={(e) => setFaspin(e)}
                  type="text"
                  placeholder="pilih fasilitas pendidikan"
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

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Fasilitas Jalan dan Jembatan untuk Masyarakat</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan secara khusus membangun fasilitas jalan umum untuk masyarakat sekitar?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bangunFasjalOpt"
                onClick={() => setBangunFasjalOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bangunFasjalOpt"
                onClick={() => setBangunFasjalOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan meningkatkan fasilitas jalan umum yang telah ada untuk masyarakat sekitar?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kualitasFasjalOpt"
                onClick={() => setKualitasFasjalOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kualitasFasjalOpt"
                onClick={() => setKualitasFasjalOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {kualitasFasjalOpt == 'Iya' ? (
            <div kualitasFaskesOpt="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Jeaskan peningkatan fasilitas jalan umum yang dilakukan perusahaan</span>
                <input type="text" placeholder="jelaskan" value={mnjLingkungan} className={mng.base__inputbase} onChange={(e) => setFasjal(e.target.value)}/>
              </label>
            </div>
          ) : (
            <></>
          )}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan secara khusus menyediakan peralatan untuk perbaikan jalan dan atau jembatan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="alatFasjalOpt"
                onClick={() => setAlatFasjalOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="alatFasjalOpt"
                onClick={() => setAlatFasjalOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Fasilitas Olahraga</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan secara khusus membangun fasilitas olahraga untuk masyarakat sekitar?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bangunFasolOpt"
                onClick={() => setBangunFasolOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bangunFasolOpt"
                onClick={() => setBangunFasolOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan meningkatkan fasilitas olahraga yang telah ada untuk masyarakat sekitar?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kualitasFasolOpt"
                onClick={() => setKualitasFasolOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kualitasFasolOpt"
                onClick={() => setKualitasFasolOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {kualitasFasolOpt == 'Iya' ? (
            <div kualitasFaskesOpt="mt-6">
              <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
                <InputForm
                  titleForm="Pilih fasilitas Olahraga yang tersedia"
                  titleName="Pilih fasilitas Olahraga yang tersedia"
                  onChange={(e) => setFasol(e)}
                  type="text"
                  placeholder="pilih fasilitas olahraga"
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

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan secara khusus menyediakan pelatih dan sarana olahraga?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="alatFasolOpt"
                onClick={() => setAlatFasolOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="alatFasolOpt"
                onClick={() => setAlatFasolOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Fasilitas Seni dan Budaya</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan secara khusus membangun fasilitas seni dan budaya untuk masyarakat sekitar?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bangunFasbudOpt"
                onClick={() => setBangunFasbudOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bangunFasbudOpt"
                onClick={() => setBangunFasbudOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan meningkatkan fasilitas seni dan budaya yang telah ada untuk masyarakat sekitar?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kualitasFasbudOpt"
                onClick={() => setKualitasFasbudOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kualitasFasbudOpt"
                onClick={() => setKualitasFasbudOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan secara khusus menyediakan pelatih dan sarana seni dan budaya?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="alatFasbudOpt"
                onClick={() => setAlatFasbudOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="alatFasbudOpt"
                onClick={() => setAlatFasbudOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

        </div>

        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Pembangunan Kebun untuk Masyarakat Sekitar</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Fasilitas Kesehatan untuk Masyarakat Sekitar</p>
          <div className="flex flex-col">
            {
              luasKebun.map((items, i) => (
                <div className={`${mng["base__formlabel_custom-diamond"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, luasKebun, setLuasKebun)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, luasKebun, setLuasKebun, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }

          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnLuasKebun}>
            + Tambah Data Jenis Tanaman
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-6'}`}>Kualitas Kebun</p>

          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
            <span className={mng.base__inputtitle}>Asal benih</span>
            <input className={mng.base__inputbase} type="text" min='0' placeholder="masukkan keterangan asal benih" value={asalBenih} onChange={(e) => setAsalBenih(e.target.value)}/>
          </label>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki sertifikat benih dari P3GI?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sertifikatBenihOpt"
                onClick={() => setSertifikatBenihOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sertifikatBenihOpt"
                onClick={() => setSertifikatBenihOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {sertifikatBenihOpt == 'Tidak' ? (
            <div kualitasFaskesOpt="mt-6">
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
            </div>
          ) : (
            <></>
          )}

          <div className="flex flex-col">
          {
            rapatTanaman.map((items, i) => (
              <div className={`${mng["base__formlabel_unique1"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, rapatTanaman, setRapatTanaman)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <div className={`${mng["base__formlabel_unique6-firstfull"]} w-full`} key={ii}>
                      <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                      <div className={`${mng["base__formlabel_unique6"]} w-full`}>
                      {
                        item.sectionData.map((child,iii) => (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                            <span className={mng.base__inputtitle}>{child.title}</span>
                            <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, rapatTanaman, setRapatTanaman, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnRapatTanaman}>
            + Tambah Data Jenis Tanaman
          </div>

          <div className="flex flex-col mt-6">
          {
            seragamTanaman.map((items, i) => (
              <div className={`${mng["base__formlabel_unique1"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, seragamTanaman, setSeragamTanaman)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <div className={`${mng["base__formlabel_unique6-firstfull"]} w-full`} key={ii}>
                      <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                      <div className={`${mng["base__formlabel_unique6"]} w-full`}>
                      {
                        item.sectionData.map((child,iii) => (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                            <span className={mng.base__inputtitle}>{child.title}</span>
                            <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, seragamTanaman, setSeragamTanaman, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnSeragamTanaman}>
            + Tambah Data Jenis Tanaman
          </div>

          <div className="flex flex-col mt-6">
          {
            opt.map((items, i) => (
              <div className={`${mng["base__formlabel_unique1"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, opt, setOpt)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <div className={`${mng["base__formlabel_unique6-firstfull"]} w-full`} key={ii}>
                      <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                      <div className={`${mng["base__formlabel_unique6"]} w-full`}>
                      {
                        item.sectionData.map((child,iii) => (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                            <span className={mng.base__inputtitle}>{child.title}</span>
                            <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, opt, setOpt, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnOpt}>
            + Tambah Data Jenis Tanaman
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-6'}`}>Pembinaan Kebun</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah dilakukan pembinaan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pembinaanKebonOpt"
                onClick={() => setPembinaanKebonOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pembinaanKebonOpt"
                onClick={() => setPembinaanKebonOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {pembinaanKebonOpt == 'Iya' ? (
            <>
              <div kualitasFaskesOpt="mt-6">
                <label className={mng.base__formlabel}>
                  <span className={mng.base__inputtitle}>Bagaimana pola pembinaan yang dilakukan? (pilih salah satu)</span>
                  <div className="inline-flex items-center">
                    <InputForm
                      radioButton={true}
                      radioName="pembinaanDilakukan"
                      onClick={() => sePembinaanDilakukan('Pendampingan')}
                      label="Pendampingan"
                    />
                  </div>
                  <div className="mx-10 inline-flex items-center">
                    <InputForm
                      radioButton={true}
                      radioName="pembinaanDilakukan"
                      onClick={() => sePembinaanDilakukan('Lainnya')}
                      label="Lainnya"
                    />
                  </div>
                </label>
              </div>
              <div kualitasFaskesOpt="mt-6">
                <label className={mng.base__formlabel}>
                  <span className={mng.base__inputtitle}>Berapa lama frekuensi pembinaan? (pilih salah satu)</span>
                  <div className="inline-flex items-center">
                    <InputForm
                      radioButton={true}
                      radioName="pembinaanFrekuensi"
                      onClick={() => sePembinaanFrekuensi('Dua minggu sekali')}
                      label="Dua minggu sekali"
                    />
                  </div>
                  <div className="mx-10 inline-flex items-center">
                    <InputForm
                      radioButton={true}
                      radioName="pembinaanFrekuensi"
                      onClick={() => sePembinaanFrekuensi('Satu minggu sekali')}
                      label="Satu minggu sekali"
                    />
                  </div>
                </label>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>

        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Kemitraan Usaha</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Koperasi Masyarakat</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah ada koperasi di sekitar lokasi kebun?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kopMasyarakatOpt"
                onClick={() => seKopMasyarakatOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kopMasyarakatOpt"
                onClick={() => seKopMasyarakatOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {kopMasyarakatOpt == 'Ada' ? (
            <>
              <div kualitasFaskesOpt="mt-6">
                <label className={mng.base__formlabel}>
                  <span className={mng.base__inputtitle}>Apabila, apakah sudah bermitra?</span>
                  <div className="inline-flex items-center">
                    <InputForm
                      radioButton={true}
                      radioName="mitraOpt"
                      onClick={() => seMitraOpt('Sudah')}
                      label="Sudah"
                    />
                  </div>
                  <div className="mx-10 inline-flex items-center">
                    <InputForm
                      radioButton={true}
                      radioName="mitraOpt"
                      onClick={() => seMitraOpt('Belum')}
                      label="Belum"
                    />
                  </div>
                </label>
                {
                  mitraOpt == 'Sudah' ? (
                    <div kualitasFaskesOpt="mt-6">
                      <label className={mng.base__formlabel}>
                        <span className={mng.base__inputtitle}>sebutkan jenis kegiatan yang dimitrakan</span>
                        <input type="text" placeholder="jelaskan" value={kegiatanMitra} className={mng.base__inputbase} onChange={(e) => setKegiatanMitra(e.target.value)}/>
                      </label>
                      <label className={mng.base__formlabel}>
                        <span className={mng.base__inputtitle}>sebutkan jenis kegiatan yang dimitrakan</span>
                        <input type="text" placeholder="jelaskan" value={presentase} className={mng.base__inputbase} onChange={(e) => setPresentase(e.target.value)}/>
                      </label>
                    </div>
                  ) : (
                    <></>
                  )
                }
              </div>
            </>
          ) : (
            <></>
          )}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Koperasi Karyawan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah ada kemitraan dengan koperasi karyawan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kopKaryawantOpt"
                onClick={() => seKopKaryawantOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kopKaryawantOpt"
                onClick={() => seKopKaryawantOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {kopKaryawantOpt == 'Ada' ? (
            <>
              <div kualitasFaskesOpt="mt-6">
                <label className={mng.base__formlabel}>
                  <span className={mng.base__inputtitle}>Apakah kegiatan tersebut berjalan lancar?</span>
                  <input type="text" placeholder="jelaskan" value={kegiatanLancar} className={mng.base__inputbase} onChange={(e) => setKegiatanLancar(e.target.value)}/>
                </label>
              </div>
            </>
          ) : (
            <></>
          )}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Penumbuhan dan Pembinaan Lembaga Ekonomi Masyarakat 3 tahun terakhir</p>
          <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              pelatihan yang dilaksanakan selama 3 tahun terakhir sebelum penilaian usaha perkebunan saat ini. jenis latihan adalah : manajemen usaha,, penanaman, pemberantasan penyakit, dll
            </div>
          </div>
          <div className="flex flex-col mt-6">
            {
              lembagaEko.map((items, i) => (
                <div className={`${mng["base__formlabel_custom-diamond"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, lembagaEko, setLembagaEko)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, lembagaEko, setLembagaEko, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnLembagaEko}>
            + Tambah Data Jenis Tanaman
          </div>

          <div className="flex flex-col mt-6">
          {
            jenisBibit.map((items, i) => (
              <div className={`${mng["base__formlabel_unique1"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, jenisBibit, setJenisBibit)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <div className={`${mng["base__formlabel_custom1"]} w-full`} key={ii}>
                      <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                      <div className={`w-full flex flex-wrap`}>
                      {
                        item.sectionData.map((child,iii) => (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                            <span className={mng.base__inputtitle}>{child.title}</span>
                            <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, jenisBibit, setJenisBibit, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnJenisBibit}>
            + Tambah Data Jenis Bibit yang Disalurkan
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Penyelenggaraan Pelatihan bagi Masyarakat Sekitar </p>
          <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              pelatihan yang dilaksanakan selama 3 tahun terakhir sebelum penilaian usaha perkebunan saat ini. jenis latihan adalah : manajemen usaha,, penanaman, pemberantasan penyakit, dll
            </div>
          </div>
          <div className="flex flex-col mt-6">
            {
              latihSekitar.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]} ${mng["base__formlabel_unique3-firstfull-noSec"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, latihSekitar, setLatihSekitar)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, latihSekitar, setLatihSekitar, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]}`} onClick={handleBtnLatihSekitar}>
            + Tambah Data Jenis Bibit yang Disalurkan
          </div>
        </div>

        <div className={`${mng["base__formsection"]}`}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Penumbuhan dan Pembinaan Lembaga Ekonomi Masyarakat 3 tahun terakhir</p>
          <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              beaasiswa yang diberikan selama 3 tahun terakhir sebelum penilaian usaha perkebunan saat ini. jenis beasiswa adalah : untuk pendidikan SD, SLP, SLA, Perguruan Tinggi
            </div>
          </div>
          <div className="flex flex-col mt-6">
            {
              beasiswa.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]} ${mng["base__formlabel_unique3-firstfull-noSec"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, beasiswa, setBeasiswa)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, beasiswa, setBeasiswa, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>
          <div className={`${mng["base__btn"]}`} onClick={handleBtnBeasiswa}>
            + Tambah Data Jenis Pelatihan
          </div>

          <div className="flex flex-col mt-6">
            {
              kegiatangRoyong.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kegiatangRoyong, setKegiatangRoyong)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, kegiatangRoyong, setKegiatangRoyong, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>
          <div className={`${mng["base__btn"]}`} onClick={handleBtnKegiatangRoyong}>
            + Tambah Data Jenis Kegiatan
          </div>

          <div className="flex flex-col mt-6">
            {
              kegiatangAdat.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kegiatangAdat, setKegiatangAdat)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, kegiatangAdat, setKegiatangAdat, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>
          <div className={`${mng["base__btn"]}`} onClick={handleBtnKegiatangAdat}>
            + Tambah Data Kegiatan
          </div>
        </div>

        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Konflik</span>
          <div className="flex flex-col mt-6">
            {
              konflik.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, konflik, setKonflik)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, konflik, setKonflik, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>
          <div className={`${mng["base__btn"]}`} onClick={handleBtnKonflik}>
            + Tambah Data Jenis Pelatihan
          </div>
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

export default FormSosial;
