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

const FormKebun = () => {
  const [isError, setIsError] = useState(false);

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState([])

  ////////////////////////// INPUT FORM STATE ////////////////////////////////

  const [sumberPupukOrg, setSumberPupukOrg] = useState('')
  const [pedomanPemupukan, setPedomanPemupukan] = useState('')
  const [pedomanPemupukanJelaskan, setPedomanPemupukanJelaskan] = useState('')
  const [asalBenihNegeri, setAsalBenihNegeri] = useState('')

  const [sumberOpt, setSumberOpt] = useState('')
  const [sertifikatPeroleh, setSertifikatPeroleh] = useState('')
  const [noSuratIjin, setNoSuratIjin] = useState('')
  const [imporAsal, setImporAsal] = useState('')
  const [jmlPerlTanamOpt, setJmlPerlTanamOpt] = useState('')
  const [jmlPetugasPerlTanamOpt, setJmlPetugasPerlTanamOpt] = useState('')
  const [jenisPelatOpt, setJenisPelatOpt] = useState('')
  const [instansiLenggaraOpt, setInstansiLenggaraOpt] = useState('')
  const [jenisLaborOpt, setJenisLaborOpt] = useState('')
  const [agensHayati, setAgensHayati] = useState('')
  const [jenisKimia, setJenisKimia] = useState('')
  const [jenisAlatJml, setJenisAlatJml] = useState('')

  ////////////////////////// RADIO BUTTON STATE ////////////////////////////////

  const [pupukOrganik, setPupukOrganik] = useState('');

  const [asalTanaman, setAsalTanaman] = useState('');
  const [bersertifikat, setBersertifikat] = useState('');
  const [laksanaPengamatan, setLaksanaPengamatan] = useState('');
  const [detilLaksana, setDetilLaksana] = useState('');
  const [kendaliOpt, setKendaliOpt] = useState('');
  const [kegPerlTanam, setKegPerlTanam] = useState('');
  const [pelatPerlTanam, setPelatPerlTanam] = useState('');
  const [oprPerlTanam, setOprPerlTanam] = useState('');
  const [labPerlTanam, setLabPerlTanam] = useState('');
  const [agensOpt, setAgensOpt] = useState('');
  const [labAgensOpt, setLabAgensOpt] = useState('');
  const [labAgensFungsiOpt, setLabAgensFungsiOpt] = useState('');
  const [dangerKimia, setDangerKimia] = useState('');

  ////////////////////////// JENIS TANAMAN ////////////////////////////////

  const [tanaman, setTanaman] = useState([
    [
      {'title':'Jenis Tanaman','type':'text','placeholder':'masukkan jenis tanaman','value':''},
      {'title':'Luas lahan','placeholder':'masukkan luas dalam ha','type':'text','value':''},
      {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''},
    ],
  ])

  function handleBtnAddTanaman() {
    setTanaman([...tanaman,[
      {'title':'Jenis Tanaman','type':'text','placeholder':'masukkan jenis tanaman','value':''},
      {'title':'Luas lahan','placeholder':'masukkan luas dalam ha','type':'text','value':''},
      {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''},
    ]])
  }

  ////////////////////////// JENIS PEMANFAATAN KEBUN ////////////////////////////////

  const [pemanfaatanKebun, setPemanfaatanKebun] = useState([
    [
      {'title':'Jenis pemanfaatan kebun','type':'text','placeholder':'masukkan jenis pemanfaatan kebun','value':''},
      {'title':'Luas lahan','placeholder':'masukkan luas dalam ha','type':'text','value':''},
      {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''},
    ],
  ])

  function handleBtnAddPemanfaatanKebun() {
    setPemanfaatanKebun([...pemanfaatanKebun,[
      {'title':'Jenis pemanfaatan kebun','type':'text','placeholder':'masukkan jenis pemanfaatan kebun','value':''},
      {'title':'Luas lahan','placeholder':'masukkan luas dalam ha','type':'text','value':''},
      {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''},
    ]])
  }

  ////////////////////////// JENIS PEMANFAATAN BANGUNAN ////////////////////////////////

  const [pemanfaatanBangunan, setPemanfaatanBangunan] = useState([
    [
      {'title':'Jenis pemanfaatan Tanah/Bangunan','type':'text','placeholder':'masukkan jenis pemanfaatan tanah','value':''},
      {'title':'Luas lahan','placeholder':'masukkan luas dalam ha','type':'text','value':''},
      {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''},
    ],
  ])

  function handleBtnAddPemanfaatanBangunan() {
    setPemanfaatanBangunan([...pemanfaatanBangunan,[
      {'title':'Jenis pemanfaatan Tanah/Bangunan','type':'text','placeholder':'masukkan jenis pemanfaatan tanah','value':''},
      {'title':'Luas lahan','placeholder':'masukkan luas dalam ha','type':'text','value':''},
      {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''},
    ]])
  }

  ////////////////////////// TANAH YANG BELUM DITANAMI ////////////////////////////////

  const [tanahBelumDitanami, setTanahBelumDitanami] = useState([
    {'title':'Luas lahan','type':'text','placeholder':'masukkan luas dalam ha','value':''},
    {'title':'keterangan','placeholder':'masukkan keterangan','type':'text','value':''},
  ])

  function tanahBelumDitanamiChange(e, index) {
    addToRowChange(setTanahBelumDitanami, tanahBelumDitanami, e, index)
  }

  ////////////////////////// TANAH YANG TIDAK DAPAT DITANAMI ////////////////////////////////

  const [tanahTidakDapatDitanami, setTanahTidakDapatDitanami] = useState([
    {'title':'Luas lahan','type':'text','placeholder':'masukkan luas dalam ha','value':''},
    {'title':'keterangan','placeholder':'masukkan keterangan','type':'text','value':''},
  ])

  function tanahTidakDapatDitanamiChange(e, index) {
    addToRowChange(setTanahTidakDapatDitanami, tanahTidakDapatDitanami, e, index)
  }

  ////////////////////////// TANAH GARAPAN ////////////////////////////////

  const [tanahGarapan, setTanahGarapan] = useState([
    {'title':'Luas lahan','type':'text','placeholder':'masukkan luas dalam ha','value':''},
    {'title':'keterangan','placeholder':'masukkan keterangan','type':'text','value':''},
  ])

  function tanahGarapanChange(e, index) {
    addToRowChange(setTanahGarapan, tanahGarapan, e, index)
  }

  ////////////////////////// TANAH INSTANSI LAIN ////////////////////////////////

  const [tanahInstansi, setTanahInstansi] = useState([
    {'title':'Luas lahan','type':'text','placeholder':'masukkan luas dalam ha','value':''},
    {'title':'keterangan','placeholder':'masukkan keterangan','type':'text','value':''},
  ])

  function tanahInstansiChange(e, index) {
    addToRowChange(setTanahInstansi, tanahInstansi, e, index)
  }

  ////////////////////////// KESERAGAMAN TANAMAN ////////////////////////////////

  const [seragamTanam, setSeragamTanam] = useState([
    [
      {
        'sectionTitle': 'Tanaman selain Tebu',
        'sectionData': [{'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':''}]
      },
      {
        'sectionTitle': 'Komposisi TBM',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi TM',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi TT/TR',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi Jumlah',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
    ],
  ])

  function handleBtnAddSeragamTanaman() {
    setSeragamTanam([...seragamTanam,[
      {
        'sectionTitle': 'Tanaman selain Tebu',
        'sectionData': [{'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':''}]
      },
      {
        'sectionTitle': 'Komposisi TBM',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi TM',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi TT/TR',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi Jumlah',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
    ]])
  }

  ////////////////////////// TANAMAN TEBU ////////////////////////////////

  const [tanamanTebu, setTanamanTebu] = useState([
    [
      {
        'sectionTitle': 'Komposisi Plant Care',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi Ratoon',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
      {
        'sectionTitle': 'Komposisi Jumlah',
        'sectionData': [{'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':''},{'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':''}]
      },
    ],
  ])

  ////////////////////////// KESERAGAMAN TANAMAN ////////////////////////////////

  const [komoditas, setKomoditas] = useState([
    [
      {
        'sectionTitle': 'Kerapatan tanaman (tanaman tahunan)',
        'sectionData': [{'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur 0-3 tahun',
        'sectionData': [
          {'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},
          {'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},
          {'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},
          {'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur 4-8 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur 9-16 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur 17-25 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur >25 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
    ],
  ])

  function handleBtnAddKomoditas() {
    setKomoditas([...komoditas,[
      {
        'sectionTitle': 'Kerapatan tanaman (tanaman tahunan)',
        'sectionData': [{'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur 0-3 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur 4-8 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur 9-16 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur 17-25 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
      {
        'sectionTitle': 'Kelompok umur >25 tahun',
        'sectionData': [{'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':''},{'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':''},{'title':'Jumlah','type':'text','placeholder':'masukkan total','value':''}]
      },
    ]])
  }

  ////////////////////////// TAHUN TANAM ////////////////////////////////

  const [tahunTanam, setTahunTanam] = useState([
    [
      {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
      {'title':'Tahun tanam','placeholder':'YYY','type':'text','value':''},
      {'title':'TBM (Ha)','type':'text','placeholder':'masukkan dalam ha','value':''},
      {'title':'TM (Ha)','type':'text','placeholder':'masukkan dalam ha','value':''},
      {'title':'TR (Ha)','type':'text','placeholder':'masukkan dalam ha','value':''},
    ],
  ])

  function handleBtnAddTahunTanam() {
    setTahunTanam([...tahunTanam,[
      {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
      {'title':'Tahun tanam','placeholder':'YYY','type':'text','value':''},
      {'title':'TBM (Ha)','type':'text','placeholder':'masukkan dalam ha','value':''},
      {'title':'TM (Ha)','type':'text','placeholder':'masukkan dalam ha','value':''},
      {'title':'TR (Ha)','type':'text','placeholder':'masukkan dalam ha','value':''},
    ]])
  }

  ////////////////////////// KOMODITAS PEMUPUKAN ////////////////////////////////

  const [komoditasPemupukan, setKomoditasPemupukan] = useState([
    [
      {'title':'komoditas','type':'text','placeholder':'masukkan komoditas','value':''},
      {'title':'TM/TBM/TT/PC/R','placeholder':'masukkan jenis','type':'text','value':''},
      {'title':'Jenis Pupuk','type':'text','placeholder':'masukkan jenis pupuk','value':''},
      {'title':'Dosis (kg/ha/th)','type':'text','placeholder':'masukkan dosis','value':''},
      {'title':'frekuensi/tahun','type':'text','placeholder':'masukkan frekuensi dalam satu tahun','value':''},
      {'title':'Waktu aplikasi (bulan)','type':'text','placeholder':'masukkan waktu dalam bulan','value':''},
    ],
  ])

  function handleBtnAddKomoditasPemupukan() {
    setKomoditasPemupukan([...komoditasPemupukan,[
      {'title':'komoditas','type':'text','placeholder':'masukkan komoditas','value':''},
      {'title':'TM/TBM/TT/PC/R','placeholder':'masukkan jenis','type':'text','value':''},
      {'title':'Jenis Pupuk','type':'text','placeholder':'masukkan jenis pupuk','value':''},
      {'title':'Dosis (kg/ha/th)','type':'text','placeholder':'masukkan dosis','value':''},
      {'title':'frekuensi/tahun','type':'text','placeholder':'masukkan frekuensi dalam satu tahun','value':''},
      {'title':'Waktu aplikasi (bulan)','type':'text','placeholder':'masukkan waktu dalam bulan','value':''},
    ]])
  }

  ////////////////////////// KETERSEDIAAN PEMUPUKAN ////////////////////////////////

  const [komoditasKetersediaanPemupukan, setKomoditasKetersediaanPemupukan] = useState([
    [
      {'title':'komoditas','type':'text','placeholder':'masukkan komoditas','value':''},
      {'title':'Jenis','placeholder':'masukkan jenis TBM/TM dll','type':'text','value':''},
      {'title':'Dosis Anjuran','type':'text','placeholder':'masukkan dosis dalam kg/ha/th','value':''},
      {'title':'kebutuhan total per tahun','type':'text','placeholder':'masukkan total dalam ton','value':''},
      {'title':'Asal pupuk','type':'text','placeholder':'masukkan asal penerimaan pupuk','value':''},
      {'title':'ketersediaan','type':'text','placeholder':'masukkan keterangan sulit/mudah','value':''},
    ],
  ])

  function handleBtnAddKomoditasKetersediaanPemupukan() {
    setKomoditasKetersediaanPemupukan([...komoditasKetersediaanPemupukan,[
      {'title':'komoditas','type':'text','placeholder':'masukkan komoditas','value':''},
      {'title':'Jenis','placeholder':'masukkan jenis TBM/TM dll','type':'text','value':''},
      {'title':'Dosis Anjuran','type':'text','placeholder':'masukkan dosis dalam kg/ha/th','value':''},
      {'title':'kebutuhan total per tahun','type':'text','placeholder':'masukkan total dalam ton','value':''},
      {'title':'Asal pupuk','type':'text','placeholder':'masukkan asal penerimaan pupuk','value':''},
      {'title':'ketersediaan','type':'text','placeholder':'masukkan keterangan sulit/mudah','value':''}
    ]])
  }

  ////////////////////////// PENGAMATAN OPT ////////////////////////////////

  const [orgPengganggu, setOrgPengganggu] = useState([
    [
      {'title':'Hama','type':'textarea','placeholder':'Jelaskan','value':''},
      {'title':'Penyakit','placeholder':'Jelaskan','type':'textarea','value':''},
      {'title':'Gulma','type':'textarea','placeholder':'Jelaskan','value':''},
    ],
  ])

  const [komoditasOpt, setKomoditasOpt] = useState([
    [
      {
        'sectionTitle': 'Pelaksanaan Pengendalian Organisme Pengganggu Tumbuhan (OPT)',
        'sectionData': [{'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''}]
      },
      {
        'sectionTitle': 'Pelaksanaan Pengendalian Organisme Pengganggu Tumbuhan (OPT)',
        'sectionData': [
          {'title':'Luas Serangan','type':'text','placeholder':'masukkan luas dalam ha','value':''},
          {'title':'jenis oPT','type':'text','placeholder':'masukkan jenis opt','value':''},
          {'title':'Luas serangan Ringan (ha)','type':'text','placeholder':'masukkan luas dalam ha','value':''},
          {'title':'Luas serangan Berat (ha)','type':'text','placeholder':'masukkan luas dalam ha','value':''},
          {'title':'Luas area pengendalian','type':'text','placeholder':'masukkan luas dalam ha','value':''},
          {'title':'Cara','type':'text','placeholder':'masukkan keterangan cara','value':''},
          {'title':'Dosis','type':'text','placeholder':'masukkan dosis','value':''},
          {'title':'Hasil','type':'text','placeholder':'masukkan keterangan hasil','value':''},
        ]
      },
    ],
  ])

  function handleBtnAddKomoditasOpt() {
    setKomoditasOpt([...komoditasOpt,[
      {
        'sectionTitle': 'Pelaksanaan Pengendalian Organisme Pengganggu Tumbuhan (OPT)',
        'sectionData': [{'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''}]
      },
      {
        'sectionTitle': 'Pelaksanaan Pengendalian Organisme Pengganggu Tumbuhan (OPT)',
        'sectionData': [
          {'title':'Luas Serangan','type':'text','placeholder':'masukkan luas dalam ha','value':''},
          {'title':'jenis oPT','type':'text','placeholder':'masukkan jenis opt','value':''},
          {'title':'Luas serangan Ringan (ha)','type':'text','placeholder':'masukkan luas dalam ha','value':''},
          {'title':'Luas serangan Berat (ha)','type':'text','placeholder':'masukkan luas dalam ha','value':''},
          {'title':'Luas area pengendalian','type':'text','placeholder':'masukkan luas dalam ha','value':''},
          {'title':'Cara','type':'text','placeholder':'masukkan keterangan cara','value':''},
          {'title':'Dosis','type':'text','placeholder':'masukkan dosis','value':''},
          {'title':'Hasil','type':'text','placeholder':'masukkan keterangan hasil','value':''},
        ]
      },
    ]])
  }

  ////////////////////////// PRODUKSI & PRODUKTIVITAS ////////////////////////////////

  const [produksiProduktivitas, setProduksiProduktivitas] = useState([
    [
      {'title':'Jenis Tanaman','type':'text','placeholder':'masukkan jenis tanaman','value':''},
      {'title':'Jenis Produk','placeholder':'masukkan jenis produk','type':'text','value':''},
      {'title':'Produksi tahun 1 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'Produksi tahun 2 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'Produksi tahun 3 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'produktivitas tahun 1 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'produktivitas tahun 2 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'produktivitas tahun 3 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
    ],
  ])

  function handleBtnAddProduksiProduktivitas() {
    setProduksiProduktivitas([...produksiProduktivitas,[
      {'title':'Jenis Tanaman','type':'text','placeholder':'masukkan jenis tanaman','value':''},
      {'title':'Jenis Produk','placeholder':'masukkan jenis produk','type':'text','value':''},
      {'title':'Produksi tahun 1 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'Produksi tahun 2 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'Produksi tahun 3 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'produktivitas tahun 1 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'produktivitas tahun 2 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
      {'title':'produktivitas tahun 3 (ton)','type':'text','placeholder':'masukkan dalam ton','value':''},
    ]])
  }

  ////////////////////////// DISERTIFIKASI CABANG USAHA TANI ////////////////////////////////

  const [disertifikasi, setDisertifikasi] = useState([
    [
      {
        'sectionTitle': 'Ternak',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Tambak',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Hutan Lebah',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Hutan Sengon',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Tanaman Pangan/Palawija',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Hortikultura',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Agrowisata',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
    ],
  ])

  function handleBtnDisertifikasi() {
    setDisertifikasi([...disertifikasi,[
      {
        'sectionTitle': 'Ternak',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Tambak',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Hutan Lebah',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Hutan Sengon',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Tanaman Pangan/Palawija',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Hortikultura',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
      {
        'sectionTitle': 'Agrowisata',
        'sectionData': [{'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':''},{'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':''},{'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':''}]
      },
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

  function addToRowChange(set, stet, e, index) {
    const { value } = e.target;
    const list = [...stet];

    list[index] = { ...list[index], value };
    set(list);
  }

  useEffect(() => {
    if (initialLoad) {
      let retrievedObject = JSON.parse(localStorage.getItem('kebunNilai'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
            "tanahBelumDitanami": [
              {'title':'Luas lahan','type':'text','placeholder':'masukkan luas dalam ha','value':retrievedObject.landUsage[0].area},
              {'title':'keterangan','placeholder':'masukkan keterangan','type':'text','value':retrievedObject.landUsage[0].description}
            ],
            "tanahTidakDapatDitanami": [
              {'title':'Luas lahan','type':'text','placeholder':'masukkan luas dalam ha','value':retrievedObject.landUsage[1].area},
              {'title':'keterangan','placeholder':'masukkan keterangan','type':'text','value':retrievedObject.landUsage[1].description}
            ],
            "tanahGarapan": [
              {'title':'Luas lahan','type':'text','placeholder':'masukkan luas dalam ha','value':retrievedObject.landUsage[2].area},
              {'title':'keterangan','placeholder':'masukkan keterangan','type':'text','value':retrievedObject.landUsage[2].description}
            ],
            "tanahInstansi": [
              {'title':'Luas lahan','type':'text','placeholder':'masukkan luas dalam ha','value':retrievedObject.landUsage[3].area},
              {'title':'keterangan','placeholder':'masukkan keterangan','type':'text','value':retrievedObject.landUsage[3].description}
            ],
            "tanamanTebu": [
              [
                {
                  'sectionTitle': 'Komposisi Plant Care',
                  'sectionData': [
                    {'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':retrievedObject.plantSugarcane.plantCareArea},
                    {'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':retrievedObject.plantSugarcane.plantCarePecentage}
                  ]
                },
                {
                  'sectionTitle': 'Komposisi Ratoon',
                  'sectionData': [
                    {'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':retrievedObject.plantSugarcane.ratoonArea},
                    {'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':retrievedObject.plantSugarcane.ratoonPecentage}
                  ]
                },
                {
                  'sectionTitle': 'Komposisi Jumlah',
                  'sectionData': [
                    {'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':retrievedObject.plantSugarcane.totalArea},
                    {'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':retrievedObject.plantSugarcane.totalPercentage}
                  ]
                },
              ]
            ],
            "plantSugarcane": [
              {
                'sectionTitle': 'Komposisi Plant Care',
                'sectionData': [
                  {'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':retrievedObject.plantSugarcane.plantCareArea},
                  {'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':retrievedObject.plantSugarcane.plantCarePecentage}
                ]
              },
              {
                'sectionTitle': 'Komposisi Ratoon',
                'sectionData': [
                  {'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':retrievedObject.plantSugarcane.ratoonArea},
                  {'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':retrievedObject.plantSugarcane.ratoonPecentage}
                ]
              },
              {
                'sectionTitle': 'Komposisi Jumlah',
                'sectionData': [
                  {'title':'Luas (Ha)','type':'text','placeholder':'masukkan luas total dalam ha','value':retrievedObject.plantSugarcane.totalArea},
                  {'title':'Presentase (%)','type':'text','placeholder':'masukkan presentase total','value':retrievedObject.plantSugarcane.totalPercentage}
                ]
              },
            ],
            "plantArea": [],
            "gardenUsage": [],
            "buildingUsage": [],
            "plantVarieties": [],
            "soilDensity": [],
            "plantingYear": [],
            "plantingMaintenance": [],
            "fertilizationGuidance": [],
            "pestControl": [],
            "opt": [],
            "production": [],
            "diversification": []
        }

        retrievedObject.soilDensity.forEach((e, i) => {
          const formData = [ { 'sectionTitle': 'Kerapatan tanaman (tanaman tahunan)', 'sectionData': [{'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':e.comodity}] }, { 'sectionTitle': 'Kelompok umur 0-3 tahun', 'sectionData': [ {'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':e.details[0].area}, {'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':e.details[1].area}, {'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':e.details[2].area}, {'title':'Jumlah','type':'text','placeholder':'masukkan total','value':e.details[3].area}] }, { 'sectionTitle': 'Kelompok umur 4-8 tahun', 'sectionData': [ {'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':e.details[4].area}, {'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':e.details[5].area}, {'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':e.details[6].area}, {'title':'Jumlah','type':'text','placeholder':'masukkan total','value':e.details[7].area} ] }, { 'sectionTitle': 'Kelompok umur 9-16 tahun', 'sectionData': [ {'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':e.details[8].area}, {'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':e.details[9].area}, {'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':e.details[10].area}, {'title':'Jumlah','type':'text','placeholder':'masukkan total','value':e.details[11].area} ] }, { 'sectionTitle': 'Kelompok umur 17-25 tahun', 'sectionData': [ {'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':e.details[12].area}, {'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':e.details[13].area}, {'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':e.details[14].area}, {'title':'Jumlah','type':'text','placeholder':'masukkan total','value':e.details[15].area} ] }, { 'sectionTitle': 'Kelompok umur >25 tahun', 'sectionData': [ {'title':'Kerapatan >80%','type':'text','placeholder':'masukkan total','value':e.details[16].area}, {'title':'Kerapatan 60-80%','type':'text','placeholder':'masukkan total','value':e.details[17].area}, {'title':'Kerapatan <60%','type':'text','placeholder':'masukkan total','value':e.details[18].area}, {'title':'Jumlah','type':'text','placeholder':'masukkan total','value':e.details[19].area} ] } ]
          replicateData.soilDensity.push(formData)
        })

        retrievedObject.diversification.forEach((e, i) => {
          const formData = [ { 'sectionTitle': 'Ternak', 'sectionData': [ {'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':e[0].area}, {'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':e[0].production}, {'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':e[0].value} ] }, { 'sectionTitle': 'Tambak', 'sectionData': [ {'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':e[1].area}, {'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':e[1].production}, {'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':e[1].value} ] }, { 'sectionTitle': 'Hutan Lebah', 'sectionData': [ {'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':e[2].area}, {'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':e[2].production}, {'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':e[2].value} ] }, { 'sectionTitle': 'Hutan Sengon', 'sectionData': [ {'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':e[3].area}, {'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':e[3].production}, {'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':e[3].value} ] }, { 'sectionTitle': 'Tanaman Pangan/Palawija', 'sectionData': [ {'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':e[4].area}, {'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':e[4].production}, {'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':e[4].value} ] }, { 'sectionTitle': 'Hortikultura', 'sectionData': [ {'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':e[5].area}, {'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':e[5].production}, {'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':e[5].value} ] }, { 'sectionTitle': 'Agrowisata', 'sectionData': [ {'title':'Luas/Satuan usaha','type':'text','placeholder':'produk','value':e[6].area}, {'title':'Produksi (satuan)','type':'text','placeholder':'produk','value':e[6].production}, {'title':'Nilai (rp/thn)','type':'text','placeholder':'produk','value':e[6].value} ] } ]
          replicateData.diversification.push(formData)
        })

        retrievedObject.opt.forEach((e, i) => {
          const formData = _.cloneDeep(komoditasOpt)
          let moveArr = []
          let moveFormArr = []
          Object.keys(e).forEach(key => {
            moveArr.push(e[key])
          });
          formData.forEach((form,i2) => {
            form.forEach((formData, i3) => {
              formData.sectionData.forEach((secData, i4, arr) => {
                moveFormArr.push(secData)
                moveFormArr.forEach((item,iItem) => {
                  secData.value = moveArr[iItem]
                })
              })
            })
            replicateData.opt.push(form)
          })
        })

        retrievedObject.plantVarieties.forEach((e, i) => {
          const formData = _.cloneDeep(seragamTanam)
          let moveArr = []
          let moveFormArr = []
          Object.keys(e).forEach(key => {
            moveArr.push(e[key])
          });
          formData.forEach((form,i2) => {
            form.forEach((formData, i3) => {
              formData.sectionData.forEach((secData, i4, arr) => {
                moveFormArr.push(secData)
                moveFormArr.forEach((item,iItem) => {
                  secData.value = moveArr[iItem]
                })
              })
            })
            replicateData.plantVarieties.push(form)
          })
        })

        retrievedObject.fertilizationGuidance.forEach((dt,i,arr) => {
          const formKomoditasKetersediaanPemupukan = _.cloneDeep(komoditasKetersediaanPemupukan)
          formKomoditasKetersediaanPemupukan.forEach((dtFrm, i) => {
            dtFrm[0].value = dt.comodity
            dtFrm[1].value = dt.landType
            dtFrm[2].value = dt.dose
            dtFrm[3].value = dt.annualNeed
            dtFrm[4].value = dt.source
            dtFrm[5].value = dt.availability
            replicateData.fertilizationGuidance.push(dtFrm)
          })
        })

        retrievedObject.production.forEach((dt,i,arr) => {
          const formProduksiProduktivitas = _.cloneDeep(produksiProduktivitas)
          formProduksiProduktivitas.forEach((dtFrm, i) => {
            dtFrm[0].value = dt.plantType
            dtFrm[1].value = dt.productType
            dtFrm[2].value = dt.firstYearProduction
            dtFrm[3].value = dt.secondYearProduction
            dtFrm[4].value = dt.thirdYearProduction
            dtFrm[5].value = dt.firstYearProductivity
            dtFrm[6].value = dt.secondYearProductivity
            dtFrm[7].value = dt.thirdYearProductivity
            replicateData.production.push(dtFrm)
          })
        })

        retrievedObject.plantingMaintenance.details.forEach((dt,i,arr) => {
          const formTahunTanam = _.cloneDeep(komoditasPemupukan)
          formTahunTanam.forEach((dtFrm, i) => {
            dtFrm[0].value = dt.comodity
            dtFrm[1].value = dt.landType
            dtFrm[2].value = dt.fertilizerType
            dtFrm[3].value = dt.dose
            dtFrm[4].value = dt.frequency
            dtFrm[5].value = dt.duration
            replicateData.plantingMaintenance.push(dtFrm)
          })
        })

        retrievedObject.plantingYear.forEach((dt,i,arr) => {
          const formTahunTanam = _.cloneDeep(tahunTanam)
          formTahunTanam.forEach((dtFrm, i) => {
            dtFrm[0].value = dt.comodity
            dtFrm[1].value = dt.plantingYear
            dtFrm[2].value = dt.tbmArea
            dtFrm[3].value = dt.tmArea
            dtFrm[4].value = dt.trArea
            replicateData.plantingYear.push(dtFrm)
          })
        })

        retrievedObject.buildingUsage.forEach((dt,i,arr) => {
          const formPemanfaatanBangunan = _.cloneDeep(pemanfaatanBangunan)
          formPemanfaatanBangunan.forEach((dtFrm, i) => {
            dtFrm[0].value = dt.buildingUsageType
            dtFrm[1].value = dt.area
            dtFrm[2].value = dt.description
            replicateData.buildingUsage.push(dtFrm)
          })
        })

        retrievedObject.gardenUsage.forEach((dt,i,arr) => {
          const formPemanfaatanKebun = _.cloneDeep(pemanfaatanKebun)
          formPemanfaatanKebun.forEach((dtFrm, i) => {
            dtFrm[0].value = dt.gardenUsageType
            dtFrm[1].value = dt.area
            dtFrm[2].value = dt.description
            replicateData.gardenUsage.push(dtFrm)
          })
        })

        retrievedObject.plantArea.forEach((dt,i,arr) => {
          const formTanaman = _.cloneDeep(tanaman)
          formTanaman.forEach((dtFrm, i) => {
            dtFrm[0].value = dt.plantType
            dtFrm[1].value = dt.area
            dtFrm[2].value = dt.description
            replicateData.plantArea.push(dtFrm)
          })
        })

        const formOrgPengganggu = _.cloneDeep(orgPengganggu)
        formOrgPengganggu.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.pestControl.pestDescription
          dtFrm[1].value = retrievedObject.pestControl.diseaseDescription
          dtFrm[2].value = retrievedObject.pestControl.weedDescription
          replicateData.pestControl.push(dtFrm)
        })

        setAsalTanaman(retrievedObject.plantMaterial.source)
        setImporAsal(retrievedObject.plantMaterial.countryId)
        setNoSuratIjin(retrievedObject.plantMaterial.licenceNo)
        setBersertifikat(retrievedObject.plantMaterial.isCertified)
        setSertifikatPeroleh(retrievedObject.plantMaterial.certifSource)

        setPupukOrganik(retrievedObject.plantingMaintenance.isUsingOrganicFertilizer)
        setSumberPupukOrg(retrievedObject.plantingMaintenance.fertilizerSource)
        setPedomanPemupukan(retrievedObject.fertilizationGuidance[0].guidanceSource)
        setPedomanPemupukanJelaskan(retrievedObject.fertilizationGuidance[0].description)

        setLaksanaPengamatan(retrievedObject.pestControl.isMonitoringDone)
        setDetilLaksana(retrievedObject.pestControl.monitoringMethod)
        setKendaliOpt(retrievedObject.pestControl.isOptDone)
        setSumberOpt(retrievedObject.pestControl.optSource)
        setOrgPengganggu(replicateData.pestControl)

        setKegPerlTanam(retrievedObject.plantProtection.hasPlantProtectionDivision)
        setJmlPerlTanamOpt(retrievedObject.plantProtection.divisionNumber)
        setPelatPerlTanam(retrievedObject.plantProtection.joinProtectionTraining)
        setJenisPelatOpt(retrievedObject.plantProtection.staffNumber)
        setInstansiLenggaraOpt(retrievedObject.plantProtection.trainingType)
        setOprPerlTanam(retrievedObject.plantProtection.hasOperationalProtectionInstrument)
        setJenisAlatJml(retrievedObject.plantProtection.protectionInstrumentType)
        setLabPerlTanam(retrievedObject.plantProtection.hasLabProtectionInstrument)
        setJenisLaborOpt(retrievedObject.plantProtection.labInstrumentType)
        setAgensOpt(retrievedObject.plantProtection.useBiologicalAgent)
        setAgensHayati(retrievedObject.plantProtection.biologicalAgentType)
        setLabAgensOpt(retrievedObject.plantProtection.hasBiologicalLab)
        setLabAgensFungsiOpt(retrievedObject.plantProtection.isBiologicalLabUsable)
        setDangerKimia(retrievedObject.plantProtection.useHarmfulChemical)
        setJenisKimia(retrievedObject.plantProtection.harmfulChemicalType)
        setJmlPetugasPerlTanamOpt(retrievedObject.plantProtection.staffNumber)

        setTanaman(replicateData.plantArea)
        setPemanfaatanKebun(replicateData.gardenUsage)
        setPemanfaatanBangunan(replicateData.buildingUsage)
        setTahunTanam(replicateData.plantingYear)
        setProduksiProduktivitas(replicateData.production)
        setKomoditasKetersediaanPemupukan(replicateData.fertilizationGuidance)
        setSeragamTanam(replicateData.plantVarieties)
        setKomoditasOpt(replicateData.opt)
        setDisertifikasi(replicateData.diversification)
        setKomoditas(replicateData.soilDensity)

        setTanahBelumDitanami(replicateData.tanahBelumDitanami)
        setTanahTidakDapatDitanami(replicateData.tanahTidakDapatDitanami)
        setTanahGarapan(replicateData.tanahGarapan)
        setTanahInstansi(replicateData.tanahInstansi)
        setTanamanTebu(replicateData.tanamanTebu)
        setKomoditasPemupukan(replicateData.plantingMaintenance)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {

    let data = {
        "plantMaterial": {
            "source": asalTanaman,
            "countryId": imporAsal,
            "licenceNo": noSuratIjin,
            "isCertified": bersertifikat,
            "certifSource": sertifikatPeroleh
        },
        "plantArea": [],
        "gardenUsage": [],
        "buildingUsage": [],
        "landUsage": [
            {
                "landUsage": "Tanah yang ditanami",
                "area": tanahBelumDitanami[0].value,
                "description": tanahBelumDitanami[1].value
            },
            {
                "landUsage": "Tanah yang tidak dapat ditanami",
                "area": tanahTidakDapatDitanami[0].value,
                "description": tanahTidakDapatDitanami[1].value
            },
            {
                "landUsage": "Tanah garapan rakyat",
                "area": tanahGarapan[0].value,
                "description": tanahGarapan[1].value
            },
            {
                "landUsage": "Dipakai instansi lain",
                "area": tanahInstansi[0].value,
                "description": tanahInstansi[1].value
            }
        ],
        "plantVarieties": [],
        "plantSugarcane": {
            "plantCareArea": tanamanTebu[0][0].sectionData[0].value,
            "plantCarePecentage": tanamanTebu[0][0].sectionData[1].value,
            "ratoonArea": tanamanTebu[0][1].sectionData[0].value,
            "ratoonPecentage": tanamanTebu[0][1].sectionData[1].value,
            "totalArea": tanamanTebu[0][2].sectionData[0].value,
            "totalPercentage": tanamanTebu[0][2].sectionData[1].value
        },
        "soilDensity": [],
        "plantingYear": [],
        "plantingMaintenance": {
            "isUsingOrganicFertilizer": pupukOrganik,
            "fertilizerSource": sumberPupukOrg,
            "details": []
        },
        "fertilizationGuidance": [],
        "pestControl": {
            "isMonitoringDone": laksanaPengamatan,
            "monitoringMethod": detilLaksana,
            "pestDescription": orgPengganggu[0][0].value,
            "weedDescription": orgPengganggu[0][2].value,
            "diseaseDescription": orgPengganggu[0][1].value,
            "isOptDone": kendaliOpt,
            "optSource": sumberOpt
        },
        "opt": [],
        "plantProtection": {
            "hasPlantProtectionDivision": kegPerlTanam,
            "divisionNumber": jmlPerlTanamOpt,
            "joinProtectionTraining": pelatPerlTanam,
            "staffNumber": jmlPetugasPerlTanamOpt,
            "trainingType": jenisPelatOpt,
            "organizer": instansiLenggaraOpt,
            "hasOperationalProtectionInstrument": oprPerlTanam,
            "protectionInstrumentType": jenisAlatJml,
            "hasLabProtectionInstrument": labPerlTanam,
            "labInstrumentType": jenisLaborOpt,
            "useBiologicalAgent": agensOpt,
            "biologicalAgentType": agensHayati,
            "hasBiologicalLab": labAgensOpt,
            "isBiologicalLabUsable": labAgensFungsiOpt,
            "useHarmfulChemical": dangerKimia,
            "harmfulChemicalType": jenisKimia
        },
        "production": [],
        "diversification": []
    }

    komoditas.forEach((item, i) => {
      let objData = {}
      objData.details = []
      item.forEach((e, i, arr) => {

        if (e.sectionData.length < 2) {
          objData.comodity = arr[0].sectionData[0].value
        } else {
          e.sectionData.forEach((secData,iSec, arrSec) => {
            let objDetails = {
              ageCategory: e.sectionTitle,
              densityLevel: secData.title,
              area: secData.value
            }
            objData.details.push(objDetails)
          })
        }
      });
      data.soilDensity.push(objData)
    });

    disertifikasi.forEach((item, i) => {
      let arrData = []
      item.forEach((e, i, arr) => {
        let obj = {
          branch : e.sectionTitle,
          area : e.sectionData[0].value,
          production : e.sectionData[1].value,
          value : e.sectionData[2].value
        }
        arrData.push(obj)
      });
      data.diversification.push(arrData)
    });

    komoditasOpt.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.comodity = arr[0].sectionData[0].value
        dataTemp.attackedArea = arr[1].sectionData[0].value
        dataTemp.optType = arr[1].sectionData[1].value
        dataTemp.lightAttackedArea = arr[1].sectionData[2].value
        dataTemp.weightAttackedArea = arr[1].sectionData[3].value
        dataTemp.method = arr[1].sectionData[4].value
        dataTemp.dose = arr[1].sectionData[5].value
        dataTemp.result = arr[1].sectionData[6].value
      });
      data.opt.push(dataTemp)
    });

    seragamTanam.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.plantType = arr[0].sectionData[0].value
        dataTemp.tbmArea = arr[1].sectionData[0].value
        dataTemp.tbmPercentage = arr[1].sectionData[1].value
        dataTemp.tmArea = arr[2].sectionData[0].value
        dataTemp.tmPercentage = arr[2].sectionData[1].value
        dataTemp.trArea = arr[3].sectionData[0].value
        dataTemp.trPercentage = arr[3].sectionData[1].value
        dataTemp.totalArea = arr[4].sectionData[0].value
        dataTemp.totalPercentage = arr[4].sectionData[1].value
      });
      data.plantVarieties.push(dataTemp)
    });

    komoditasKetersediaanPemupukan.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.guidanceSource = pedomanPemupukan
        inv.description = pedomanPemupukanJelaskan
        inv.comodity = item[0].value
        inv.landType = item[1].value
        inv.dose = item[2].value
        inv.annualNeed = item[3].value
        inv.source = item[4].value
        inv.availability = item[5].value
      });
      data.fertilizationGuidance.push(inv)
    });

    produksiProduktivitas.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.plantType = item[0].value
        inv.productType = item[1].value
        inv.firstYearProduction = item[2].value
        inv.secondYearProduction = item[3].value
        inv.thirdYearProduction = item[4].value
        inv.firstYearProductivity = item[5].value
        inv.secondYearProductivity = item[6].value
        inv.thirdYearProductivity = item[7].value
      });
      data.production.push(inv)
    });

    komoditasPemupukan.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.comodity = item[0].value
        inv.landType = item[1].value
        inv.fertilizerType = item[2].value
        inv.dose = item[3].value
        inv.frequency = item[4].value
        inv.duration = item[5].value
      });
      data.plantingMaintenance.details.push(inv)
    });

    tahunTanam.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.comodity = item[0].value
        inv.plantingYear = item[1].value
        inv.tbmArea = item[2].value
        inv.tmArea = item[3].value
        inv.trArea = item[4].value
      });
      data.plantingYear.push(inv)
    });

    pemanfaatanBangunan.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.buildingUsageType = item[0].value
        inv.area = item[1].value
        inv.description = item[2].value
      });
      data.buildingUsage.push(inv)
    });

    pemanfaatanKebun.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.gardenUsageType = item[0].value
        inv.area = item[1].value
        inv.description = item[2].value
      });
      data.gardenUsage.push(inv)
    });

    tanaman.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.plantType = item[0].value
        inv.area = item[1].value
        inv.description = item[2].value
      });
      data.plantArea.push(inv)
    });

    setDataSubmit(data)

  }, [asalTanaman,bersertifikat,sumberOpt,laksanaPengamatan,detilLaksana,kendaliOpt,sumberPupukOrg,pupukOrganik,pedomanPemupukan,pedomanPemupukanJelaskan
    ,sertifikatPeroleh,asalBenihNegeri,noSuratIjin,imporAsal,jmlPerlTanamOpt,jmlPetugasPerlTanamOpt,jenisPelatOpt,instansiLenggaraOpt,jenisLaborOpt
    ,agensHayati,jenisKimia,jenisAlatJml,kegPerlTanam,pelatPerlTanam,oprPerlTanam,labPerlTanam,agensOpt,labAgensOpt,labAgensFungsiOpt,dangerKimia
    ,tanaman,pemanfaatanKebun,pemanfaatanBangunan,tanahBelumDitanami,tanahTidakDapatDitanami,tanahGarapan,tanahInstansi,seragamTanam,tanamanTebu
    ,komoditas,tahunTanam,komoditasPemupukan,komoditasKetersediaanPemupukan,orgPengganggu,komoditasOpt,produksiProduktivitas,disertifikasi])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(() => {
    localStorage.setItem("kebunNilai", JSON.stringify(dataSubmit));
  })

  function clearData() {

  }

  return (
    <>
      <Head>

      </Head>
      <span className={mng.base__subtitle}>Bahan Tanaman</span>

      <form>
        <div className={mng.base__formsection}>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Asal bahan tanaman</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="asalTanaman"
                onClick={() => setAsalTanaman('import')}
                radioValue={asalTanaman}
                selected={asalTanaman == 'import'}
                label="Import"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="asalTanaman"
                onClick={() => setAsalTanaman('negeri')}
                radioValue={asalTanaman}
                selected={asalTanaman == 'negeri'}
                label="Dalam Negeri"
              />
            </div>
          </label>
          {asalTanaman == 'import' ? (
            <>
              <div className="mt-6 mb-2 text-sm font-semibold text-black">
                Apabila impor, dari mana asal negaranya?
              </div>
              <div className="grid w-full grid-cols-2 gap-2">
                <InputForm
                  titleForm="Negara Asal"
                  titleName="email"
                  onChange={(e) => setImporAsal(e.target.value)}
                  type="text"
                  values={imporAsal}
                  placeholder="Pilih Negara Asal"
                  className={`${
                    isError && 'border-primary-red-1 bg-primary-red-2'
                  } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-sm`}
                  selectionArea={true}
                />
                <InputForm
                  titleForm="Nomor Surat Ijin"
                  titleName="email"
                  onChange={(e) => setNoSuratIjin(e.target.value)}
                  values={noSuratIjin}
                  type="text"
                  placeholder="masukan nomor surat ijin impor"
                  className={`${
                    isError && 'border-primary-red-1 bg-primary-red-2'
                  } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-sm`}
                  iconEmail={true}
                />
              </div>
            </>
          ) : asalTanaman == 'negeri' ? (
            <div className="mt-6">
              <InputForm
                titleForm="Apabila dari dalam negeri. dari mana sumber benihnya?"
                titleName="email"
                onChange={(e) => setAsalBenihNegeri(e.target.value)}
                values={asalBenihNegeri}
                type="text"
                placeholder="masukkan keterangan sumber"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) :
            <></>
          }
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah bahan tanaman bersertifikat?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bersertifikat"
                onClick={() => setBersertifikat('ya')}
                radioValue={bersertifikat}
                selected={bersertifikat == 'ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bersertifikat"
                onClick={() => setBersertifikat('tidak')}
                radioValue={bersertifikat}
                selected={bersertifikat == 'tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {bersertifikat == 'ya' ? (
            <div className="mt-6">
              <InputForm
                titleForm="Dari mana sertifikat diperoleh?"
                titleName="email"
                onChange={(e) => setSertifikatPeroleh(e.target.value)}
                values={sertifikatPeroleh}
                type="text"
                placeholder="masukkan keterangan sumber"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-6 text-black placeholder:text-base`}
                iconEmail={true}
              />
            </div>
          ) : <></>}
        </div>

        <span className={mng.base__subtitle}>Pemanfaatan Lahan</span>

        <div className={mng.base__formsection}>
          <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              Luas sesuai HGU atau HGU dalam proses pemberian,
              perpanjangan/pembaharuan
            </div>
          </div>
          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Tanah yang digunakan untuk tanaman dan sarana pendukung</p>
          <p className={`${mng["base__formtitle"]} ${"font-semibold"}`}>Areal  yang ditanami</p>
          <p className={mng.base__formtitle}>Tanaman</p>

          <div className="flex flex-col">
            {
              tanaman.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
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
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, tanaman, setTanaman, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddTanaman}>
            + Tambah Data Jenis Tanaman
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-6'}`}>Kebun Pembibitan/Persemaian/Entrys</p>

          <div className="flex flex-col">
            {
              pemanfaatanKebun.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, pemanfaatanKebun, setPemanfaatanKebun)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, pemanfaatanKebun, setPemanfaatanKebun, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddPemanfaatanKebun}>
            + Tambah Data Jenis Pemanfaatan Kebun
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-6'}`}>Tanah/Bangunan</p>

          <div className="flex flex-col">
            {
              pemanfaatanBangunan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, pemanfaatanBangunan, setPemanfaatanBangunan)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, pemanfaatanBangunan, setPemanfaatanBangunan, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddPemanfaatanBangunan}>
            + Tambah Data Jenis Pemanfaatan Kebun
          </div>

          <p className={`${mng["base__formtitle"]} ${"font-semibold mt-6"}`}>Tanah yang belum ditanami</p>

          <div className="flex flex-row">
            <div className={`${mng["base__formlabel_twin"]} ${'w-full'}`}>
              {
                tanahBelumDitanami.map((item, i) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_no-m"]} ${mng["base__formlabel_twin-label"]}`} key={i}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tanahBelumDitanamiChange(e, i)}/>
                  </label>
                ))
              }
            </div>
          </div>

          <p className={`${mng["base__formtitle"]} ${"font-semibold"}`}>Tanah yang tidak dapat ditanami</p>

          <div className="flex flex-row">
            <div className={`${mng["base__formlabel_twin"]} ${'w-full'}`}>
              {
                tanahTidakDapatDitanami.map((item, i) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_no-m"]} ${mng["base__formlabel_twin-label"]}`} key={i}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tanahTidakDapatDitanamiChange(e, i)}/>
                  </label>
                ))
              }
            </div>
          </div>

          <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>Penggunaan Lain</p>

          <p className={`${mng["base__formtitle"]} ${"font-semibold"}`}>Tanah garapan rakyat</p>

          <div className="flex flex-row">
            <div className={`${mng["base__formlabel_twin"]} ${'w-full'}`}>
              {
                tanahGarapan.map((item, i) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_no-m"]} ${mng["base__formlabel_twin-label"]}`} key={i}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tanahGarapanChange(e, i)}/>
                  </label>
                ))
              }
            </div>
          </div>

          <p className={`${mng["base__formtitle"]} ${"font-semibold"}`}>Dipakai instansi lain</p>

          <div className="flex flex-row">
            <div className={`${mng["base__formlabel_twin"]} ${'w-full'}`}>
              {
                tanahInstansi.map((item, i) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_no-m"]} ${mng["base__formlabel_twin-label"]}`} key={i}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => tanahInstansiChange(e, i)}/>
                  </label>
                ))
              }
            </div>
          </div>

        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Keragaman Tanaman</span>
          <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>Komposisi tanaman tahun terakhir sebelum penilaian usaha perkebunan saat ini</p>

          <div className="flex flex-col">
            {
              seragamTanam.map((items, i) => (
                <div className={`${mng["base__formlabel_unique1"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, seragamTanam, setSeragamTanam)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_unique1-label"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, seragamTanam, setSeragamTanam, i, ii, iii)}/>
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

          <div className={mng.base__btn} onClick={handleBtnAddSeragamTanaman}>
            + Tambah Data Jenis Tanaman
          </div>

          <p className={`${mng["base__formtitle"]} ${"mt-6"}`}>Khusus untuk tanaman Tebu</p>

          <div className="flex flex-col">
            {
              tanamanTebu.map((items, i) => (
                <div className={`${mng["base__formlabel_unique1"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <div key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_unique1-label"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, tanamanTebu, setTanamanTebu, i, ii, iii)}/>
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

          <div className="flex flex-col">
            {
              komoditas.map((items, i) => (
                <div className={`${mng["base__formlabel_unique1"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, komoditas, setKomoditas)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_unique1-sec"]}`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_unique1-label"]} ${mng["base__formlabel_unique1-label-4"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, komoditas, setKomoditas, i, ii, iii)}/>
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

          <div className={mng.base__btn} onClick={handleBtnAddKomoditas}>
            + Tambah Data Jenis Tanaman
          </div>

          <p className={`${mng["base__formtitle"]} ${"mt-6"}`}>Tahun Tanam</p>
          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Luas areal menurut tahun tanam</p>
          <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              Luas sesuai HGU atau HGU dalam proses pemberian,
              perpanjangan/pembaharuan
            </div>
          </div>

          <div className="flex flex-col mt-3">
            {
              tahunTanam.map((items, i) => (
                <div className={`${mng["base__formlabel_unique2"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, tahunTanam, setTahunTanam)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, tahunTanam, setTahunTanam, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddTahunTanam}>
            + Tambah Data Jenis Tanaman
          </div>

        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Pemeliharaan Tanaman</span>
          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Pemupukan (yang dilakukan tahun terakhir sebelum penilaian usaha perkebunan saat ini)</p>
          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Pupuk Organik</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah sudah menggunakan pupuk organik?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pupukOrganik"
                onClick={() => setPupukOrganik('sudah')}
                radioValue={pupukOrganik}
                selected={pupukOrganik == 'sudah'}
                label="Sudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pupukOrganik"
                onClick={() => setPupukOrganik('belum')}
                radioValue={pupukOrganik}
                selected={pupukOrganik == 'belum'}
                label="Belum"
              />
            </div>
          </label>
          {pupukOrganik == 'sudah' ? (
            <div className="mt-6">
              <InputForm
                titleForm="Sebutkan sumbernya"
                titleName="sumberPupukOrg"
                onChange={(e) => setSumberPupukOrg(e.target.value)}
                values={sumberPupukOrg}
                type="text"
                placeholder="berikan keterangan sumber"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Pelaksanaan pemupukan</p>

          <div className="flex flex-col">
            {
              komoditasPemupukan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, komoditasPemupukan, setKomoditasPemupukan)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, komoditasPemupukan, setKomoditasPemupukan, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]} ${'mb-6'}`} onClick={handleBtnAddKomoditasPemupukan}>
            + Tambah Data Komoditas
          </div>

          <InputForm
            titleForm="Sumber pedoman pemupukan yang dipakai"
            onChange={(e) => setPedomanPemupukan(e.target.value)}
            type="text"
            values={pedomanPemupukan}
            placeholder="pilih yang sesuai"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
            selectionArea={true}
          />

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Jelaskan</span>
            <input type="text" placeholder="Jelaskan" className={mng.base__inputbase} value={pedomanPemupukanJelaskan} onChange={(e) => setPedomanPemupukanJelaskan(e.target.value)}/>
          </label>

          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Kebutuhan dan ketersediaan pupuk di lokasi kebun</p>

          <div className="flex flex-col">
            {
              komoditasKetersediaanPemupukan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, komoditasKetersediaanPemupukan, setKomoditasKetersediaanPemupukan)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, komoditasKetersediaanPemupukan, setKomoditasKetersediaanPemupukan, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={`${mng["base__btn"]} ${'mb-6'}`} onClick={handleBtnAddKomoditasKetersediaanPemupukan}>
            + Tambah Data Komoditas
          </div>

          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Penerapan Pengendalian Hama Terpadu (PHT)</p>
          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Pengamatan OPT</p>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah dilaksanakan pengamatan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="laksanaPengamatan"
                onClick={() => setLaksanaPengamatan('iya')}
                radioValue={laksanaPengamatan}
                selected={laksanaPengamatan == 'iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="laksanaPengamatan"
                onClick={() => setLaksanaPengamatan('tidak')}
                radioValue={laksanaPengamatan}
                selected={laksanaPengamatan == 'tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {laksanaPengamatan == 'iya' ? (
            <div className="mt-6">
              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Bagaimana pelaksanaannya?</span>
                <div className="inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="detilLaksana"
                    onClick={() => setDetilLaksana('Secara Periodik')}
                    radioValue={detilLaksana}
                    selected={detilLaksana == 'Secara Periodik'}
                    label="Secara Periodik"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="detilLaksana"
                    onClick={() => setDetilLaksana('Secara Insidentil')}
                    radioValue={detilLaksana}
                    selected={detilLaksana == 'Secara Insidentil'}
                    label="Secara Insidentil"
                  />
                </div>
              </label>
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Jenis Organisme Pengganggu</p>

          <div className="flex flex-col">
            {
              orgPengganggu.map((items, i) => (
                <div className={`flex`} key={i}>
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_tris"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, orgPengganggu, setOrgPengganggu, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah dilaksanakan pengendalian OPT?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kendaliOpt"
                onClick={() => setKendaliOpt('iya')}
                radioValue={kendaliOpt}
                selected={kendaliOpt == 'iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kendaliOpt"
                onClick={() => setKendaliOpt('tidak')}
                radioValue={kendaliOpt}
                selected={kendaliOpt == 'tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {kendaliOpt == 'iya' ? (
            <div className="mt-6">
              <InputForm
                titleForm="Sebutkan sumbernya"
                titleName="Sebutkan sumbernya"
                onChange={(e) => setSumberOpt(e.target.value)}
                values={sumberOpt}
                type="text"
                placeholder="berikan keterangan sumber"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

          <div className="flex flex-col">
            {
              komoditasOpt.map((items, i) => (
                <div className={`${mng["base__formlabel_unique1"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, komoditasOpt, setKomoditasOpt)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_unique1-firstfull"]}`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, komoditasOpt, setKomoditasOpt, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]} mb-6`} onClick={handleBtnAddKomoditasOpt}>
            + Tambah Data Komoditas
          </div>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki bagian yang bertanggungjawab terhadap kegiatan perlindungan tanaman?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kegPerlTanam"
                onClick={() => setKegPerlTanam('iya')}
                radioValue={kegPerlTanam}
                selected={kegPerlTanam == 'iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kegPerlTanam"
                onClick={() => setKegPerlTanam('tidak')}
                radioValue={kegPerlTanam}
                selected={kegPerlTanam == 'tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {kegPerlTanam == 'iya' ? (
            <div className="mt-4 mb-4">
              <InputForm
                titleForm="Berapa jumlahnya?"
                titleName="Berapa jumlahnya?"
                onChange={(e) => setJmlPerlTanamOpt(e.target.value)}
                values={jmlPerlTanamOpt}
                type="text"
                placeholder="masukkan jumlah bagian"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah sudah ada petugas yang pernah mengikuti pelatihan perlindungan tanaman?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelatPerlTanam"
                onClick={() => setPelatPerlTanam('Sudah')}
                radioValue={pelatPerlTanam}
                selected={pelatPerlTanam == 'Sudah'}
                label="Sudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelatPerlTanam"
                onClick={() => setPelatPerlTanam('Belum')}
                radioValue={pelatPerlTanam}
                selected={pelatPerlTanam == 'Belum'}
                label="Belum"
              />
            </div>
          </label>
          {pelatPerlTanam == 'Sudah' ? (
            <>
            <div className="mt-3">
              <InputForm
                titleForm="Berapa jumlah petugas yang pernah mengikuti pelatihan perlindungan tanaman?"
                titleName="Berapa jumlah petugas yang pernah mengikuti pelatihan perlindungan tanaman?"
                onChange={(e) => setJmlPetugasPerlTanamOpt(e.target.value)}
                values={jmlPetugasPerlTanamOpt}
                type="text"
                placeholder="masukkan keterangan jumlah petugas"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
            <div className="mt-3">
              <InputForm
                titleForm="Apa jenis pelatihannya?"
                titleName="Apa jenis pelatihannya?"
                onChange={(e) => setJenisPelatOpt(e.target.value)}
                values={jenisPelatOpt}
                type="text"
                placeholder="masukkan keterangan jenis pelatihan"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
            <div className="mt-3">
              <InputForm
                titleForm="Sebutkan Instansi Penyelenggara"
                titleName="Sebutkan Instansi Penyelenggara"
                onChange={(e) => setInstansiLenggaraOpt(e.target.value)}
                values={instansiLenggaraOpt}
                type="text"
                placeholder="masukkan keterangan instansi"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
            </>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Sarana Operasional Proteksi Tanaman</p>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki peralatan operasional perlindungan tanaman?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="oprPerlTanam"
                onClick={() => setOprPerlTanam('iya')}
                radioValue={oprPerlTanam}
                selected={oprPerlTanam == 'iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="oprPerlTanam"
                onClick={() => setOprPerlTanam('tidak')}
                radioValue={oprPerlTanam}
                selected={oprPerlTanam == 'tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {oprPerlTanam == 'iya' ? (
            <div className="mt-4 mb-4">
              <InputForm
                titleForm="sebutkan jenis alat dan jumlahnya"
                titleName="sebutkan jenis alat dan jumlahnya"
                onChange={(e) => setJenisAlatJml(e.target.value)}
                values={jenisAlatJml}
                type="text"
                placeholder="masukkan keteangan jenis alat dan jumlah"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki peralatan laboratorium perlindungan tanaman?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="labPerlTanam"
                onClick={() => setLabPerlTanam('iya')}
                radioValue={labPerlTanam}
                selected={labPerlTanam == 'iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="labPerlTanamv"
                onClick={() => setLabPerlTanam('tidak')}
                radioValue={labPerlTanam}
                selected={labPerlTanam == 'tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {labPerlTanam == 'iya' ? (
            <div className="mt-4">
              <InputForm
                titleForm="Sebutkan jenis laboratorium yang dimiliki"
                titleName="Sebutkan jenis laboratorium yang dimiliki"
                onChange={(e) => setJenisLaborOpt(e.target.value)}
                values={jenisLaborOpt}
                type="text"
                placeholder="masukkan jenis laboratorium"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${"mt-3"}`}>Bahan Pengendalian OPT (Organisme Pengganggu Tumbuhan)</p>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan menggunakan agens hayati untuk pengedalian OPT?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="agensOpt"
                onClick={() => setAgensOpt('iya')}
                radioValue={agensOpt}
                selected={agensOpt == 'iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="agensOpt"
                onClick={() => setAgensOpt('tidak')}
                radioValue={agensOpt}
                selected={agensOpt == 'tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {agensOpt == 'iya' ? (
            <div className="mt-4 mb-4">
              <InputForm
                titleForm="Sebutkan jenis dan jumlah agens hayati yang telah digunakan"
                titleName="Sebutkan jenis dan jumlah agens hayati yang telah digunakan"
                onChange={(e) => setAgensHayati(e.target.value)}
                values={agensHayati}
                type="text"
                placeholder="masukkan keterangan jenis dan jumlah"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki laboratorium agens hayati?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="labAgensOpt"
                onClick={() => setLabAgensOpt('iya')}
                radioValue={labAgensOpt}
                selected={labAgensOpt == 'iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="labAgensOpt"
                onClick={() => setLabAgensOpt('tidak')}
                radioValue={labAgensOpt}
                selected={labAgensOpt == 'tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {labAgensOpt == 'iya' ? (
            <label className={mng.base__formlabel}>
              <span className={mng.base__inputtitle}>Apabila iya, apakah berfungsi?</span>
              <div className="inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="labAgensFungsiOpt"
                  onClick={() => setLabAgensFungsiOpt('Berfungsi')}
                  radioValue={labAgensFungsiOpt}
                  selected={labAgensFungsiOpt == 'Berfungsi'}
                  label="Berfungsi"
                />
              </div>
              <div className="mx-10 inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="labAgensFungsiOpt"
                  onClick={() => setLabAgensFungsiOpt('Tidak')}
                  radioValue={labAgensFungsiOpt}
                  selected={labAgensFungsiOpt == 'Tidak'}
                  label="Tidak"
                />
              </div>
            </label>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan menggunakan bahan kimia pertanian yang tergolong berbahaya? (tipe 1A/1B WHO, dll)</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="dangerKimia"
                onClick={() => setDangerKimia('iya')}
                radioValue={dangerKimia}
                selected={dangerKimia == 'iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="dangerKimia"
                onClick={() => setDangerKimia('tidak')}
                radioValue={dangerKimia}
                selected={dangerKimia == 'tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {dangerKimia == 'iya' ? (
            <div className="mt-4">
              <InputForm
                titleForm="Sebutkan jenis bahan kimia yang digunakan"
                titleName="Sebutkan jenis bahan kimia yang digunakan"
                onChange={(e) => setJenisKimia(e.target.value)}
                values={jenisKimia}
                type="text"
                placeholder="masukkan keterangan jenis bahan kimia"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
                iconEmail={true}
              />
            </div>
          ) : <></>}

        </div>

        <div className={mng.base__formsection}>
          <span className={mng.base__subtitle}>Produksi dan Produktivitas 3 tahun terakhir</span>
          <div className="flex flex-col mt-3">
            {
              produksiProduktivitas.map((items, i) => (
                <div className={`${mng["base__formlabel_unique2"]}`} key={i}>
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

          <div className={mng.base__btn} onClick={handleBtnAddProduksiProduktivitas}>
            + Tambah Data Jenis Tanaman
          </div>
        </div>

        <div className={`${mng["base__formsection"]} border-b-0`}>
          <span className={mng.base__subtitle}>Diversifikasi Cabang Usaha Tani</span>
          <div className="flex flex-col">
            {
              disertifikasi.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
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
                      <div key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`flex`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, disertifikasi, setDisertifikasi, i, ii, iii)}/>
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

          <div className={mng.base__btn} onClick={handleBtnDisertifikasi}>
            + Tambah Data Jenis Cabang Usaha Tani
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

export default FormKebun;
