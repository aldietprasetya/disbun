import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import _ from 'lodash';
import InputFileButton from 'src/components/customInput/InputFileButton';
import InputForm from '../../admin/infografis/InputForm';
import mng from 'src/styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormManajemenStep1 = () => {
  const [isError, setIsError] = useState(false);

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState([])

  ////////////////////////// INPUT FORM STATE ////////////////////////////////

  const [visi, setVisi] = useState('');
  const [misi, setMisi] = useState('');
  const [swadana, setSwadana] = useState('');
  const [alasanTdkStructur, setAlasanTdkStructur] = useState('');

  ////////////////////////// RADIO BUTTON STATE ////////////////////////////////

  const [visiOpt, setVisiOpt] = useState('');
  const [misiOpt, setMisiOpt] = useState('');
  const [strukturOrgOpt, setStrukturOrgOpt] = useState('');
  const [kebutuhanOrgOpt, setKebutuhanOrgOpt] = useState('');
  const [direksiJobOpt, setDireksiJobOpt] = useState('');
  const [direksiJobTertulisOpt, setDireksiJobTertulisOpt] = useState('');
  const [managerJobOpt, setManagerJobOpt] = useState('');
  const [managerJobTertulisOpt, setManagerJobTertulisOpt] = useState('');
  const [managerOperaOpt, setManagerOperaOpt] = useState('');
  const [managerOperaTertulisOpt, setManagerOperaTertulisOpt] = useState('');

  const [neracaOpt, setNeracaOpt] = useState('');
  const [neracaDiperiksaOpt, setNeracaDiperiksaOpt] = useState('');

  ////////////////////////// Perencanaan Tahunan dan Lima Tahunan ////////////////////////////////

  const [rencanaTahunan, setRencanaTahunan] = useState([
    [
      { 'sectionTitle': 'Kegiatan: Pembukaan Lahan Baru', 'sectionData': [ {'title':'Luas Lahan (ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Realisasi s.d Akhir Tahun (Ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Replanting', 'sectionData': [ {'title':'Luas Lahan (ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Realisasi s.d Akhir Tahun (Ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Pembangunan Pabrik', 'sectionData': [ {'title':'Luas Lahan (ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Realisasi s.d Akhir Tahun (Ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Pembangunan Gedung', 'sectionData': [ {'title':'Luas Lahan (ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Realisasi s.d Akhir Tahun (Ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Pembangunan Perumahan', 'sectionData': [ {'title':'Luas Lahan (ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Realisasi s.d Akhir Tahun (Ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Pengadaan mesin & kendaraan', 'sectionData': [ {'title':'Luas Lahan (ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Realisasi s.d Akhir Tahun (Ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Kursus untuk karyawan', 'sectionData': [ {'title':'Luas Lahan (ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Realisasi s.d Akhir Tahun (Ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Pembangunan/Pemeliharan Sarana Pendukung', 'sectionData': [ {'title':'Luas Lahan (ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Realisasi s.d Akhir Tahun (Ha)','type':'text','placeholder':'Masukkan luas lahan dalam ha','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }
    ]
  ])

  ////////////////////////// Rencana Lima Tahunan ////////////////////////////////

  const [periodeRencana, setPeriodeRencana] = useState([
    [
      {'title':'Tahun Periode','placeholder':'YYYY','type':'text','value':'','isOpt':false}, {'title':'Sampai dengan tahun','placeholder':'YYYY','type':'text','value':'','isOpt':false}
    ]
  ])

  const [kegiatanRencana, setKegiatanRencana] = useState([
    [
      { 'sectionTitle': 'Kegiatan: Pembukaan Lahan Baru', 'sectionData': [ {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas dalam ha','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Replanting', 'sectionData': [ {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas dalam ha','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Pembangunan Pabrik', 'sectionData': [ {'title':'Presentase yang dibangun (%)','type':'text','placeholder':'masukkan presentase','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Pembangunan Gedung', 'sectionData': [ {'title':'Nominal Biaya (Rp)','type':'text','placeholder':'masukkan nominal dalam rupiah','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Pembangunan Perumahan', 'sectionData': [ {'title':'jumlah unit','type':'text','placeholder':'masukkan jumlah dalam unit','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Pengadaan mesin & kendaraan', 'sectionData': [ {'title':'jumlah unit','type':'text','placeholder':'masukkan jumlah dalam unit','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Kursus untuk karyawan', 'sectionData': [ {'title':'Frekuensi kegiatan','type':'text','placeholder':'masukkan data dalam frekuensi','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }, { 'sectionTitle': 'Kegiatan: Pembangunan/Pemelihaan Sarana Pendukung', 'sectionData': [ {'title':'Satuan Rencana','type':'text','placeholder':'masukkan data sesuai satuan rencana','value':'','isOpt':false}, {'title':'Ketersediaan Data Tertulis','type':'text','placeholder':'Pilih Ketersediaan','value':'','isOpt':true}, {'title':'Sumber Data','type':'text','placeholder':'keterangan','value':'','isOpt':false} ] }
    ]
  ])

  ////////////////////////// Profil Investasi 3 (Tiga) Tahun Terakhir ////////////////////////////////

  const [profilInvest, setProfilInvest] = useState([
    [
      { 'sectionTitle': 'Kegiatan: Kebun', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, ] }, { 'sectionTitle': 'Kegiatan: Pabrik', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, ] }, { 'sectionTitle': 'Kegiatan: Bangunan', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, ] }, { 'sectionTitle': 'Kegiatan: Mesin dan Kendaraan', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, ] }, { 'sectionTitle': 'Kegiatan: Prasarana Lain', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tahun 2','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tahun 3','type':'text','placeholder':'masukkan tahun','value':''}, {'title':'Luas Lahan (ha)','type':'text','placeholder':'masukkan luas lahan','value':''}, {'title':'Nilai Biaya (Rp)','type':'text','placeholder':'masukkan nilai biaya','value':''}, {'title':'Sumber Data','type':'text','placeholder':'Keterangan','value':''} ] }
    ]
  ])

  ////////////////////////// Investasi Kebun, Pabrik, Prasarana dan Sarana ////////////////////////////////

  const [jenisInvest, setJenisInvest] = useState([
    [
      { 'sectionTitle': 'Investasi Kebun, Pabrik, Prasarana dan Sarana', 'sectionData': [ {'title':'Jenis Investasi','type':'text','placeholder':'masukkan jenis investasi','value':''}, {'title':'Tahun','type':'text','placeholder':'YYYY','value':''} ] }, { 'sectionTitle': 'Jumlah Investasi Untuk Pembangunan (Nominal Pembiayaan)', 'sectionData': [ {'title':'Kebun (Rp)','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Pabrik (Rp)','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Prasarana & Sarana (Rp)','type':'text','placeholder':'masukkan nominal','value':''} ] }
    ]
  ])

  function handleBtnJenisInvest() {
    setJenisInvest([...jenisInvest,[
      { 'sectionTitle': 'Investasi Kebun, Pabrik, Prasarana dan Sarana', 'sectionData': [ {'title':'Jenis Investasi','type':'text','placeholder':'masukkan jenis investasi','value':''}, {'title':'Tahun','type':'text','placeholder':'YYYY','value':''} ] }, { 'sectionTitle': 'Jumlah Investasi Untuk Pembangunan (Nominal Pembiayaan)', 'sectionData': [ {'title':'Kebun (Rp)','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Pabrik (Rp)','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Prasarana & Sarana (Rp)','type':'text','placeholder':'masukkan nominal','value':''} ] }
    ]])
  }

  ////////////////////////// Sumber Pembiayaan Kebun ////////////////////////////////

  const [sumberBiaya, setSumberBiaya] = useState([
    [
      { 'sectionTitle': 'Sumber Pembiayaan Kebun', 'sectionData': [ {'title':'Sumber Pembiayaan Sampai Dengan Saat Ini','type':'text','placeholder':'masukkan sumber pembiayaan','value':''} ] }, { 'sectionTitle': 'Fasilitas Kredit PBSN', 'sectionData': [ {'title':'Total Kredit yang Diterima','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun Periode','type':'text','placeholder':'YYYY','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, {'title':'Total Pengembalian di Akhir Periode','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Sumber Pembiayaan Bank','type':'text','placeholder':'masukkan sumber pembiayaan','value':''} ] }, { 'sectionTitle': 'Fasilitas Kredit PIR-Trans', 'sectionData': [ {'title':'Total Kredit yang Diterima','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Tahun Periode','type':'text','placeholder':'YYYY','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, {'title':'Total Pengembalian di Akhir Periode','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'Sumber Pembiayaan Bank','type':'text','placeholder':'masukkan sumber pembiayaan','value':''} ] }
    ]
  ])

  ////////////////////////// Kredit Lainnya ////////////////////////////////

  const [kredit, setKredit] = useState([
    [
      { 'sectionTitle': 'Kredit Lainnya', 'sectionData': [ {'title':'Sumber Bank Pemberi','type':'text','placeholder':'masukkan nama bank','value':''} ] }, { 'sectionTitle': 'Plafon Kredit', 'sectionData': [ {'title':'Volume/Nilai (Rp)','type':'text','placeholder':'masukkan nilai dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }, { 'sectionTitle': 'Realisasi Pencairan', 'sectionData': [ {'title':'Tanaman (Rp)','type':'text','placeholder':'masukkan nilai dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, {'title':'Sarana (rp)','type':'text','placeholder':'masukkan nilai dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, {'title':'Prasarana (rp)','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, ] }, { 'sectionTitle': 'Realisasi Fisik', 'sectionData': [ {'title':'Tanaman (Rp)','type':'text','placeholder':'masukkan nilai dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, {'title':'Sarana (rp)','type':'text','placeholder':'masukkan nilai dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, {'title':'Prasarana (rp)','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, ] }, { 'sectionTitle': 'Pengembalian', 'sectionData': [ {'title':'Waktu Mulai','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Tenggat Pengembalian','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Total Pengembalian','type':'text','placeholder':'masukkan total dalam rupiah','value':''} ] }
    ]
  ])

  function handleBtnKredit() {
    setKredit([...kredit,[
      { 'sectionTitle': 'Kredit Lainnya', 'sectionData': [ {'title':'Sumber Bank Pemberi','type':'text','placeholder':'masukkan nama bank','value':''} ] }, { 'sectionTitle': 'Plafon Kredit', 'sectionData': [ {'title':'Volume/Nilai (Rp)','type':'text','placeholder':'masukkan nilai dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''} ] }, { 'sectionTitle': 'Realisasi Pencairan', 'sectionData': [ {'title':'Tanaman (Rp)','type':'text','placeholder':'masukkan nilai dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, {'title':'Sarana (rp)','type':'text','placeholder':'masukkan nilai dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, {'title':'Prasarana (rp)','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, ] }, { 'sectionTitle': 'Realisasi Fisik', 'sectionData': [ {'title':'Tanaman (Rp)','type':'text','placeholder':'masukkan nilai dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, {'title':'Sarana (rp)','type':'text','placeholder':'masukkan nilai dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, {'title':'Prasarana (rp)','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Keterangan','type':'text','placeholder':'keterangan','value':''}, ] }, { 'sectionTitle': 'Pengembalian', 'sectionData': [ {'title':'Waktu Mulai','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Tenggat Pengembalian','type':'text','placeholder':'DD/MM/YYY','value':''}, {'title':'Total Pengembalian','type':'text','placeholder':'masukkan total dalam rupiah','value':''} ] }
    ]])
  }

  ////////////////////////// Penanaman Modal Asing Lainnnya ////////////////////////////////

  const [modalAsing, setModalAsing] = useState([
    [
      { 'sectionTitle': 'Fasilitas Penanaman Modal', 'sectionData': [ {'title':'Nama Perusahaan','type':'text','placeholder':'masukkan nama perusahaan','value':''}, {'title':'Nama Perusahaan Patungan','type':'text','placeholder':'masukkan nama perusahaan','value':''} ] }, { 'sectionTitle': 'Penanaman Modal Asing (PMA)', 'sectionData': [ {'title':'No. SPPMA','type':'text','placeholder':'masukkan nomor SPPMA','value':''}, {'title':'Tahun Pertama (%)','type':'text','placeholder':'masukkan data dalam presentase','value':''}, {'title':'Tahun Saat Pencacahan (%)','type':'text','placeholder':'masukkan data dalam presentase','value':''} ] }, { 'sectionTitle': 'Komposisi Modal', 'sectionData': [ {'title':'Komposisi Modal','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Realisasi (Rp)','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''} ] }
    ]
  ])

  function handleBtnModalAsing() {
    setModalAsing([...modalAsing,[
      { 'sectionTitle': 'Fasilitas Penanaman Modal', 'sectionData': [ {'title':'Nama Perusahaan','type':'text','placeholder':'masukkan nama perusahaan','value':''}, {'title':'Nama Perusahaan Patungan','type':'text','placeholder':'masukkan nama perusahaan','value':''} ] }, { 'sectionTitle': 'Penanaman Modal Asing (PMA)', 'sectionData': [ {'title':'No. SPPMA','type':'text','placeholder':'masukkan nomor SPPMA','value':''}, {'title':'Tahun Pertama (%)','type':'text','placeholder':'masukkan data dalam presentase','value':''}, {'title':'Tahun Saat Pencacahan (%)','type':'text','placeholder':'masukkan data dalam presentase','value':''} ] }, { 'sectionTitle': 'Komposisi Modal', 'sectionData': [ {'title':'Komposisi Modal','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Realisasi (Rp)','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''} ] }
    ]])
  }

  ////////////////////////// Penanaman Modal Dalam Negeri Lainnnya ////////////////////////////////

  const [modalNegeri, setModalNegeri] = useState([
    [
      { 'sectionTitle': 'Investasi', 'sectionData': [ {'title':'No. & Tgl. SP-PPMDN','type':'text','placeholder':'masukkan nomor dan tanggal','value':''} ] }, { 'sectionTitle': 'Penanaman Modal Dalam Negeri (PMDN)', 'sectionData': [ {'title':'Rencana (Rp)','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Realisasi (Rp)','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''} ] }
    ]
  ])

  function handleBtnModalNegeri() {
    setModalNegeri([...modalNegeri,[
      { 'sectionTitle': 'Investasi', 'sectionData': [ {'title':'No. & Tgl. SP-PPMDN','type':'text','placeholder':'masukkan nomor dan tanggal','value':''} ] }, { 'sectionTitle': 'Penanaman Modal Dalam Negeri (PMDN)', 'sectionData': [ {'title':'Rencana (Rp)','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Realisasi (Rp)','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''} ] }
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

  useEffect(() => {
    if (initialLoad) {
      localStorage.removeItem("mnjPart1Nilai");
      let retrievedObject = JSON.parse(localStorage.getItem('mnjPart1NilaiReport'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
          "rencanaTahunan": [],
          "kegiatanRencana": [],
          "periodeRencana": [],
          "investmentActivity": [],
          "investment": [],
          "funding": [],
          "otherCredit": [],
          "pmdn": [],
          "pma": []
        }

        const formRencanaTahunan = _.cloneDeep(rencanaTahunan)
        formRencanaTahunan.forEach((dtFrm, i, arr) => {

          arr[0][0].sectionData[0].value = retrievedObject.annualPlan[0].dataAvailibility
          arr[0][0].sectionData[1].value = retrievedObject.annualPlan[0].dataSource
          arr[0][0].sectionData[2].value = retrievedObject.annualPlan[0].value
          arr[0][0].sectionData[3].value = retrievedObject.annualPlan[0].realValue

          arr[0][1].sectionData[0].value = retrievedObject.annualPlan[1].dataAvailibility
          arr[0][1].sectionData[1].value = retrievedObject.annualPlan[1].dataSource
          arr[0][1].sectionData[2].value = retrievedObject.annualPlan[1].value
          arr[0][1].sectionData[3].value = retrievedObject.annualPlan[1].realValue

          arr[0][2].sectionData[0].value = retrievedObject.annualPlan[2].dataAvailibility
          arr[0][2].sectionData[1].value = retrievedObject.annualPlan[2].dataSource
          arr[0][2].sectionData[2].value = retrievedObject.annualPlan[2].value
          arr[0][2].sectionData[3].value = retrievedObject.annualPlan[2].realValue

          arr[0][3].sectionData[0].value = retrievedObject.annualPlan[3].dataAvailibility
          arr[0][3].sectionData[1].value = retrievedObject.annualPlan[3].dataSource
          arr[0][3].sectionData[2].value = retrievedObject.annualPlan[3].value
          arr[0][3].sectionData[3].value = retrievedObject.annualPlan[3].realValue

          arr[0][4].sectionData[0].value = retrievedObject.annualPlan[4].dataAvailibility
          arr[0][4].sectionData[1].value = retrievedObject.annualPlan[4].dataSource
          arr[0][4].sectionData[2].value = retrievedObject.annualPlan[4].value
          arr[0][4].sectionData[3].value = retrievedObject.annualPlan[4].realValue

          arr[0][5].sectionData[0].value = retrievedObject.annualPlan[5].dataAvailibility
          arr[0][5].sectionData[1].value = retrievedObject.annualPlan[5].dataSource
          arr[0][5].sectionData[2].value = retrievedObject.annualPlan[5].value
          arr[0][5].sectionData[3].value = retrievedObject.annualPlan[5].realValue

          arr[0][6].sectionData[0].value = retrievedObject.annualPlan[6].dataAvailibility
          arr[0][6].sectionData[1].value = retrievedObject.annualPlan[6].dataSource
          arr[0][6].sectionData[2].value = retrievedObject.annualPlan[6].value
          arr[0][6].sectionData[3].value = retrievedObject.annualPlan[6].realValue

          arr[0][7].sectionData[0].value = retrievedObject.annualPlan[7].dataAvailibility
          arr[0][7].sectionData[1].value = retrievedObject.annualPlan[7].dataSource
          arr[0][7].sectionData[2].value = retrievedObject.annualPlan[7].value
          arr[0][7].sectionData[3].value = retrievedObject.annualPlan[7].realValue

          replicateData.rencanaTahunan.push(dtFrm)
        })

        const formKegiatanRencana = _.cloneDeep(kegiatanRencana)
        formKegiatanRencana.forEach((dtFrm, i) => {
          dtFrm.forEach((formDt, ii, arr) => {

            arr[0].sectionData[0].value = retrievedObject.fiveYearsPlan[0].dataAvailibility
            arr[0].sectionData[1].value = retrievedObject.fiveYearsPlan[0].dataSource
            arr[0].sectionData[2].value = retrievedObject.fiveYearsPlan[0].value

            arr[1].sectionData[0].value = retrievedObject.fiveYearsPlan[1].dataAvailibility
            arr[1].sectionData[1].value = retrievedObject.fiveYearsPlan[1].dataSource
            arr[1].sectionData[2].value = retrievedObject.fiveYearsPlan[1].value

            arr[2].sectionData[0].value = retrievedObject.fiveYearsPlan[2].dataAvailibility
            arr[2].sectionData[1].value = retrievedObject.fiveYearsPlan[2].dataSource
            arr[2].sectionData[2].value = retrievedObject.fiveYearsPlan[2].value

            arr[3].sectionData[0].value = retrievedObject.fiveYearsPlan[3].dataAvailibility
            arr[3].sectionData[1].value = retrievedObject.fiveYearsPlan[3].dataSource
            arr[3].sectionData[2].value = retrievedObject.fiveYearsPlan[3].value

            arr[4].sectionData[0].value = retrievedObject.fiveYearsPlan[4].dataAvailibility
            arr[4].sectionData[1].value = retrievedObject.fiveYearsPlan[4].dataSource
            arr[4].sectionData[2].value = retrievedObject.fiveYearsPlan[4].value

            arr[5].sectionData[0].value = retrievedObject.fiveYearsPlan[5].dataAvailibility
            arr[5].sectionData[1].value = retrievedObject.fiveYearsPlan[5].dataSource
            arr[5].sectionData[2].value = retrievedObject.fiveYearsPlan[5].value

            arr[6].sectionData[0].value = retrievedObject.fiveYearsPlan[6].dataAvailibility
            arr[6].sectionData[1].value = retrievedObject.fiveYearsPlan[6].dataSource
            arr[6].sectionData[2].value = retrievedObject.fiveYearsPlan[6].value

            arr[7].sectionData[0].value = retrievedObject.fiveYearsPlan[7].dataAvailibility
            arr[7].sectionData[1].value = retrievedObject.fiveYearsPlan[7].dataSource
            arr[7].sectionData[2].value = retrievedObject.fiveYearsPlan[7].value

          })
          replicateData.kegiatanRencana.push(dtFrm)
        })

        const formPeriodeRencana = _.cloneDeep(periodeRencana)
        formPeriodeRencana.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.fiveYearsPlan[0].yearStart
          dtFrm[1].value = retrievedObject.fiveYearsPlan[0].yearEnd
          replicateData.periodeRencana.push(dtFrm)
        })

        const formData = [{ 'sectionTitle': 'Kegiatan: Kebun', 'sectionData': [{ 'title': 'Tahun 1', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[0].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[0].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[0].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[0].dataSource }, { 'title': 'Tahun 2', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[1].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[1].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[1].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[1].dataSource }, { 'title': 'Tahun 3', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[2].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[2].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[2].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[2].dataSource }, ] }, { 'sectionTitle': 'Kegiatan: Pabrik', 'sectionData': [{ 'title': 'Tahun 1', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': '' }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[3].year }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': '' }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[3].value }, { 'title': 'Tahun 2', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': '' }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[3].costValue }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': '' }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[3].dataSource }, { 'title': 'Tahun 3', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[4].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[4].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[4].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[4].dataSource }, ] }, { 'sectionTitle': 'Kegiatan: Bangunan', 'sectionData': [{ 'title': 'Tahun 1', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[5].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[5].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[5].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[5].dataSource }, { 'title': 'Tahun 2', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[6].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[6].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[6].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[6].dataSource }, { 'title': 'Tahun 3', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[7].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[7].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[7].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[7].dataSource }, ] }, { 'sectionTitle': 'Kegiatan: Mesin dan Kendaraan', 'sectionData': [{ 'title': 'Tahun 1', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[8].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[8].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[8].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[8].dataSource }, { 'title': 'Tahun 2', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[9].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[9].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[9].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[9].dataSource }, { 'title': 'Tahun 3', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[10].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[10].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[10].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[10].dataSource }, ] }, { 'sectionTitle': 'Kegiatan: Prasarana Lain', 'sectionData': [{ 'title': 'Tahun 1', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[11].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[11].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[11].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[11].dataSource }, { 'title': 'Tahun 2', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[12].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[12].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[12].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[12].dataSource }, { 'title': 'Tahun 3', 'type': 'text', 'placeholder': 'masukkan tahun', 'value': retrievedObject.investmentActivity[13].year }, { 'title': 'Luas Lahan (ha)', 'type': 'text', 'placeholder': 'masukkan luas lahan', 'value': retrievedObject.investmentActivity[13].value }, { 'title': 'Nilai Biaya (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai biaya', 'value': retrievedObject.investmentActivity[13].costValue }, { 'title': 'Sumber Data', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.investmentActivity[13].dataSource }] }]
        replicateData.investmentActivity.push(formData)

        retrievedObject.investment.forEach((dt,index) => {
          const formModalAsing = _.cloneDeep(jenisInvest)
          formModalAsing.forEach((dtFrm, i) => {
            dtFrm[0].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = dt.plantType
              arr[1].value = dt.year
            })
            dtFrm[1].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = dt.gardenInvestment
              arr[1].value = dt.factoryInvestment
              arr[2].value = dt.infrastructureInvestment
            })
            replicateData.investment.push(dtFrm)
          })
        })

        const formSumberBiaya = _.cloneDeep(sumberBiaya)
        formSumberBiaya.forEach((dtFrm, i) => {
          dtFrm[0].sectionData.forEach((secData, ii, arr) => {
            arr[0].value = retrievedObject.funding.source
          })
          dtFrm[1].sectionData.forEach((secData, ii, arr) => {
            arr[0].value = retrievedObject.funding.details[0].creditTotal
            arr[1].value = retrievedObject.funding.details[0].year
            arr[2].value = retrievedObject.funding.details[0].description
            arr[3].value = retrievedObject.funding.details[0].repaymentTotal
            arr[4].value = retrievedObject.funding.details[0].bankFundingSource
          })
          dtFrm[2].sectionData.forEach((secData, ii, arr) => {
            arr[0].value = retrievedObject.funding.details[0].creditTotal
            arr[1].value = retrievedObject.funding.details[0].year
            arr[2].value = retrievedObject.funding.details[0].description
            arr[3].value = retrievedObject.funding.details[0].repaymentTotal
            arr[4].value = retrievedObject.funding.details[0].bankFundingSource
          })
          replicateData.funding.push(dtFrm)
        })

        retrievedObject.otherCredit.forEach((dt,index) => {
          const formData = [{ 'sectionTitle': 'Kredit Lainnya', 'sectionData': [{ 'title': 'Sumber Bank Pemberi', 'type': 'text', 'placeholder': 'masukkan nama bank', 'value': dt.otherCredit }] }, { 'sectionTitle': 'Plafon Kredit', 'sectionData': [{ 'title': 'Volume/Nilai (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai dalam rupiah', 'value': dt.volume }, { 'title': 'Keterangan', 'type': 'text', 'placeholder': 'keterangan', 'value': dt.description }] }, { 'sectionTitle': 'Realisasi Pencairan', 'sectionData': [{ 'title': 'Tanaman (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai dalam rupiah', 'value': dt.details[0].value }, { 'title': 'Keterangan', 'type': 'text', 'placeholder': 'keterangan', 'value': dt.details[0].description }, { 'title': 'Sarana (rp)', 'type': 'text', 'placeholder': 'masukkan nilai dalam rupiah', 'value': dt.details[1].value }, { 'title': 'Keterangan', 'type': 'text', 'placeholder': 'keterangan', 'value': dt.details[1].description }, { 'title': 'Prasarana (rp)', 'type': 'text', 'placeholder': 'masukkan nominal dalam rupiah', 'value': dt.details[2].value }, { 'title': 'Keterangan', 'type': 'text', 'placeholder': 'keterangan', 'value': dt.details[2].description }, ] }, { 'sectionTitle': 'Realisasi Fisik', 'sectionData': [{ 'title': 'Tanaman (Rp)', 'type': 'text', 'placeholder': 'masukkan nilai dalam rupiah', 'value': dt.details[3].value }, { 'title': 'Keterangan', 'type': 'text', 'placeholder': 'keterangan', 'value': dt.details[3].description }, { 'title': 'Sarana (rp)', 'type': 'text', 'placeholder': 'masukkan nilai dalam rupiah', 'value': dt.details[4].value }, { 'title': 'Keterangan', 'type': 'text', 'placeholder': 'keterangan', 'value': dt.details[4].description }, { 'title': 'Prasarana (rp)', 'type': 'text', 'placeholder': 'masukkan nominal dalam rupiah', 'value': dt.details[5].value }, { 'title': 'Keterangan', 'type': 'text', 'placeholder': 'keterangan', 'value': dt.details[5].description }, ] }, { 'sectionTitle': 'Pengembalian', 'sectionData': [{ 'title': 'Waktu Mulai', 'type': 'text', 'placeholder': 'DD/MM/YYY', 'value': dt.repaymentStartDate }, { 'title': 'Tenggat Pengembalian', 'type': 'text', 'placeholder': 'DD/MM/YYY', 'value': dt.repaymantEndDate }, { 'title': 'Total Pengembalian', 'type': 'text', 'placeholder': 'masukkan total dalam rupiah', 'value': dt.repaymentTotal }] }]
          replicateData.otherCredit.push(formData)
        })

        retrievedObject.pmdn.forEach((dt,index) => {
          const formModalAsing = _.cloneDeep(modalNegeri)
          formModalAsing.forEach((dtFrm, i) => {
            dtFrm[0].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = dt.spppmdnNo
            })
            dtFrm[1].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = dt.plannedValue
              arr[1].value = dt.realValue
            })
            replicateData.pmdn.push(dtFrm)
          })
        })

        retrievedObject.pma.forEach((dt,index) => {
          const formModalAsing = _.cloneDeep(modalAsing)
          formModalAsing.forEach((dtFrm, i) => {
            dtFrm[0].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = retrievedObject.financialFacility.companyName
              arr[1].value = retrievedObject.financialFacility.ventureCompanyName
            })
            dtFrm[1].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = dt.sppmaNo
              arr[1].value = dt.firstYearPercentage
              arr[2].value = dt.censusYearPercentage
            })
            dtFrm[2].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = dt.plannedValue
              arr[1].value = dt.realValue
            })
            replicateData.pma.push(dtFrm)
          })
        })

        setModalAsing(replicateData.pma)
        setRencanaTahunan(replicateData.rencanaTahunan)
        setKegiatanRencana(replicateData.kegiatanRencana)
        setPeriodeRencana(replicateData.periodeRencana)
        setProfilInvest(replicateData.investmentActivity)
        setJenisInvest(replicateData.investment)
        setSumberBiaya(replicateData.funding)
        setKredit(replicateData.otherCredit)
        setModalNegeri(replicateData.pmdn)
        setModalAsing(replicateData.pma)

        setVisiOpt(retrievedObject.vision.hasVision)
        setMisiOpt(retrievedObject.vision.hasMission)
        setVisi(retrievedObject.vision.vision)
        setMisi(retrievedObject.vision.mission)

        setStrukturOrgOpt(retrievedObject.organizationStructure.hasStructure)
        setKebutuhanOrgOpt(retrievedObject.organizationStructure.isFullfilled)
        setAlasanTdkStructur(retrievedObject.organizationStructure.reason)

        setDireksiJobOpt(retrievedObject.jobDescription.directorHasJobdesc)
        setDireksiJobTertulisOpt(retrievedObject.jobDescription.isDiretorJobdescWritten)
        setManagerJobOpt(retrievedObject.jobDescription.midManagerHasJobdesc)
        setManagerJobTertulisOpt(retrievedObject.jobDescription.isMidManagerJobdescWritten)
        setManagerOperaOpt(retrievedObject.jobDescription.operationalManagerHasJobdesc)
        setManagerOperaTertulisOpt(retrievedObject.jobDescription.isOperationalManagerJobdescWritten)

        setNeracaOpt(retrievedObject.moneyManagement.hasBalance)
        setNeracaDiperiksaOpt(retrievedObject.moneyManagement.isBalanceVerified)

        setSwadana(retrievedObject.selfFunding.value)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {

    let data = {
      "vision": {
        "hasVision": visiOpt,
        "hasMission": misiOpt,
        "vision": visi,
        "mission": misi
      },
      "organizationStructure": {
        "hasStructure": strukturOrgOpt,
        "isFullfilled": kebutuhanOrgOpt,
        "reason": alasanTdkStructur,
        "file": {}
      },
      "jobDescription": {
        "directorHasJobdesc": direksiJobOpt,
        "isDiretorJobdescWritten": direksiJobTertulisOpt,
        "midManagerHasJobdesc": managerJobOpt,
        "isMidManagerJobdescWritten": managerJobTertulisOpt,
        "operationalManagerHasJobdesc": managerOperaOpt,
        "isOperationalManagerJobdescWritten": managerOperaTertulisOpt
      },
      "moneyManagement": {
        "hasBalance": neracaOpt,
        "isBalanceVerified": neracaDiperiksaOpt,
        "file": {}
      },
      "selfFunding":{
        "value": swadana
      },
      "annualPlan": [],
      "fiveYearsPlan": [],
      "investmentActivity": [ { "activity": "Kebun", "year" : profilInvest[0][0].sectionData[0].value, "yearSequence":1, "dataSource": profilInvest[0][0].sectionData[3].value, "value": profilInvest[0][0].sectionData[1].value, "costValue": profilInvest[0][0].sectionData[2].value },{ "activity": "Kebun", "year" : profilInvest[0][0].sectionData[4].value, "yearSequence":2, "dataSource": profilInvest[0][0].sectionData[7].value, "value": profilInvest[0][0].sectionData[5].value, "costValue": profilInvest[0][0].sectionData[6].value },{ "activity": "Kebun", "year" : profilInvest[0][0].sectionData[8].value, "yearSequence":3, "dataSource": profilInvest[0][0].sectionData[11].value, "value": profilInvest[0][0].sectionData[9].value, "costValue": profilInvest[0][0].sectionData[10].value },{ "activity": "Pabrik", "year" : profilInvest[0][1].sectionData[0].value, "yearSequence":1, "dataSource": profilInvest[0][1].sectionData[3].value, "value": profilInvest[0][1].sectionData[1].value, "costValue": profilInvest[0][1].sectionData[2].value },{ "activity": "Pabrik", "year" : profilInvest[0][1].sectionData[4].value, "yearSequence":2, "dataSource": profilInvest[0][1].sectionData[7].value, "value": profilInvest[0][1].sectionData[5].value, "costValue": profilInvest[0][1].sectionData[6].value },{ "activity": "Pabrik", "year" : profilInvest[0][1].sectionData[8].value, "yearSequence":3, "dataSource": profilInvest[0][1].sectionData[11].value, "value": profilInvest[0][1].sectionData[9].value, "costValue": profilInvest[0][1].sectionData[10].value },{ "activity": "Bangunan", "year" : profilInvest[0][2].sectionData[0].value, "yearSequence":1, "dataSource": profilInvest[0][2].sectionData[3].value, "value": profilInvest[0][2].sectionData[1].value, "costValue": profilInvest[0][2].sectionData[2].value },{ "activity": "Bangunan", "year" : profilInvest[0][2].sectionData[4].value, "yearSequence":2, "dataSource": profilInvest[0][2].sectionData[7].value, "value": profilInvest[0][2].sectionData[5].value, "costValue": profilInvest[0][2].sectionData[6].value },{ "activity": "Bangunan", "year" : profilInvest[0][2].sectionData[8].value, "yearSequence":3, "dataSource": profilInvest[0][2].sectionData[11].value, "value": profilInvest[0][2].sectionData[9].value, "costValue": profilInvest[0][2].sectionData[10].value },{ "activity": "Mesin dan Kendaraan", "year" : profilInvest[0][3].sectionData[0].value, "yearSequence":1, "dataSource": profilInvest[0][3].sectionData[3].value, "value": profilInvest[0][3].sectionData[1].value, "costValue": profilInvest[0][3].sectionData[2].value },{ "activity": "Mesin dan Kendaraan", "year" : profilInvest[0][3].sectionData[4].value, "yearSequence":2, "dataSource": profilInvest[0][3].sectionData[7].value, "value": profilInvest[0][3].sectionData[5].value, "costValue": profilInvest[0][3].sectionData[6].value },{ "activity": "Mesin dan Kendaraan", "year" : profilInvest[0][3].sectionData[8].value, "yearSequence":3, "dataSource": profilInvest[0][3].sectionData[11].value, "value": profilInvest[0][3].sectionData[9].value, "costValue": profilInvest[0][3].sectionData[10].value },{ "activity": "Prasarana Lain", "year" : profilInvest[0][4].sectionData[0].value, "yearSequence":1, "dataSource": profilInvest[0][4].sectionData[3].value, "value": profilInvest[0][4].sectionData[1].value, "costValue": profilInvest[0][4].sectionData[2].value },{ "activity": "Prasarana Lain", "year" : profilInvest[0][4].sectionData[4].value, "yearSequence":2, "dataSource": profilInvest[0][4].sectionData[7].value, "value": profilInvest[0][4].sectionData[5].value, "costValue": profilInvest[0][4].sectionData[6].value },{ "activity": "Prasarana Lain", "year" : profilInvest[0][4].sectionData[8].value, "yearSequence":3, "dataSource": profilInvest[0][4].sectionData[11].value, "value": profilInvest[0][4].sectionData[9].value, "costValue": profilInvest[0][4].sectionData[10].value } ],
      "investment": [],
      "funding": {
        "source": sumberBiaya[0][0].sectionData[0].value,
         "details":[
           {
             "facilityType": "PBSN",
             "year": sumberBiaya[0][1].sectionData[0].value,
             "description" : sumberBiaya[0][1].sectionData[1].value,
             "creditTotal" : sumberBiaya[0][1].sectionData[2].value,
             "repaymentTotal" : sumberBiaya[0][1].sectionData[3].value,
             "bankFundingSource" : sumberBiaya[0][1].sectionData[4].value
           },
           {
             "facilityType": "PIR-TRANS",
             "year": sumberBiaya[0][2].sectionData[0].value,
             "description" : sumberBiaya[0][2].sectionData[1].value,
             "creditTotal" : sumberBiaya[0][2].sectionData[2].value,
             "repaymentTotal" : sumberBiaya[0][2].sectionData[3].value,
             "bankFundingSource" : sumberBiaya[0][2].sectionData[4].value
           }
        ]
      },
      "otherCredit": [],
      "financialFacility":{
        "companyName": modalAsing[0][0].sectionData[0].value,
        "ventureCompanyName": modalAsing[0][0].sectionData[1].value
      },
      "pmdn": [],
      "pma": []
    }

    modalNegeri.forEach((item,i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.spppmdnNo = arr[0].sectionData[0].value
        dataTemp.plannedValue = arr[1].sectionData[0].value
        dataTemp.realValue = arr[1].sectionData[1].value
      });
      data.pmdn.push(dataTemp)
    })

    modalAsing.forEach((item,i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.sppmaNo = arr[1].sectionData[0].value
        dataTemp.firstYearPercentage = arr[1].sectionData[1].value
        dataTemp.censusYearPercentage = arr[1].sectionData[2].value
        dataTemp.plannedValue = arr[2].sectionData[0].value
        dataTemp.realValue = arr[2].sectionData[1].value
      });
      data.pma.push(dataTemp)
    })

    kredit.forEach((item,i) => {
      let dataTemp = {
        "otherCredit": kredit[0][0].sectionData[0].value,
        "volume": kredit[0][1].sectionData[0].value,
        "description": kredit[0][1].sectionData[1].value,
        "repaymentStartDate": kredit[0][4].sectionData[0].value,
        "repaymantEndDate": kredit[0][4].sectionData[1].value,
        "repaymentTotal": kredit[0][4].sectionData[2].value,
        "details":[
          {
           "realization": "Realisaasi Pencairan",
           "target": "Tanaman",
           "description" :kredit[0][2].sectionData[1].value,
           "value" : kredit[0][2].sectionData[0].value
          },
          {
           "realization": "Realisaasi Pencairan",
           "target": "Sarana",
           "description" :kredit[0][2].sectionData[3].value,
           "value" :kredit[0][2].sectionData[2].value
          },
          {
           "realization": "Realisaasi Pencairan",
           "target": "Prasarana",
           "description" : kredit[0][2].sectionData[5].value,
           "value" : kredit[0][2].sectionData[4].value
          },
          {
           "realization": "Realisaasi Fisik",
           "target": "Tanaman",
           "description" : kredit[0][3].sectionData[1].value,
           "value" : kredit[0][3].sectionData[0].value
          },
          {
           "realization": "Realisaasi Fisik",
           "target": "Sarana",
           "description" : kredit[0][3].sectionData[3].value,
           "value" : kredit[0][3].sectionData[2].value
          },
          {
           "realization": "Realisaasi Fisik",
           "target": "Prasarana",
           "description" : kredit[0][3].sectionData[5].value,
           "value" : kredit[0][3].sectionData[4].value
          }
        ]
      }
      data.otherCredit.push(dataTemp)
    })

    jenisInvest.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.plantType = arr[0].sectionData[0].value
        dataTemp.year = arr[0].sectionData[1].value
        dataTemp.gardenInvestment = arr[1].sectionData[0].value
        dataTemp.factoryInvestment = arr[1].sectionData[1].value
        dataTemp.infrastructureInvestment = arr[1].sectionData[2].value
      });
      data.investment.push(dataTemp)
    });

    kegiatanRencana.forEach((item, i) => {
      item.forEach((e, i, arr) => {
        let dataTemp = {}
        e.sectionData.forEach((secData, ii, arr2) => {
          dataTemp.activity = e.sectionTitle.split(': ')[1]
          dataTemp.dataAvailibility = arr2[0].value
          dataTemp.dataSource = arr2[1].value
          dataTemp.value = arr2[2].value
          dataTemp.yearStart = periodeRencana[0][0].value
          dataTemp.yearEnd = periodeRencana[0][1].value
        })
        data.fiveYearsPlan.push(dataTemp)
      });
    });

    rencanaTahunan.forEach((item, i) => {
      item.forEach((e, i, arr) => {
        let dataTemp = {}
        e.sectionData.forEach((secData, ii, arr2) => {
          dataTemp.activity = e.sectionTitle.split(': ')[1]
          dataTemp.dataAvailibility = arr2[0].value
          dataTemp.dataSource = arr2[1].value
          dataTemp.value = arr2[2].value
          dataTemp.realValue = arr2[3].value
        })
        data.annualPlan.push(dataTemp)
      });
    });

    setDataSubmit(data)

  }, [visi,misi,swadana,alasanTdkStructur,visiOpt,misiOpt,strukturOrgOpt,kebutuhanOrgOpt,direksiJobOpt
    ,direksiJobTertulisOpt,managerJobOpt,managerJobTertulisOpt,managerOperaOpt,managerOperaTertulisOpt
    ,neracaOpt,neracaDiperiksaOpt,rencanaTahunan,periodeRencana,kegiatanRencana,profilInvest,jenisInvest
    ,sumberBiaya,kredit,modalAsing,modalNegeri])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      localStorage.setItem("mnjPart1Nilai", JSON.stringify(dataSubmit));
    }
  },[dataPass,dataSubmit])

  function clearData() {

  }

  return (
    <>
      <Head>
        
      </Head>

      <form>
        {/* Visi dan Misi Perusahaan */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Visi dan Misi Perusahaan serta Organisasi Perusahaan</span>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Visi dan Misi Perusahaan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan mempunyai Visi?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="visiOpt"
                onClick={() => setVisiOpt('Ya')}
                radioValue={visiOpt}
                selected={visiOpt == 'Ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="visiOpt"
                onClick={() => setVisiOpt('Tidak')}
                radioValue={visiOpt}
                selected={visiOpt == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {visiOpt == 'Ya' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
                <span className={mng.base__inputtitle}>Visi Perusahaan</span>
                <textarea className={`${mng["base__inputbase"]} min-h-[140px]`} type="text" rows="20" placeholder="Tuliskan visi perusahaan." value={visi} onChange={(e) => setVisi(e.target.value)}></textarea>
              </label>
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan mempunyai Misi?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="misiOpt"
                onClick={() => setMisiOpt('Ya')}
                radioValue={misiOpt}
                selected={misiOpt == 'Ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="misiOpt"
                onClick={() => setMisiOpt('Tidak')}
                radioValue={misiOpt}
                selected={misiOpt == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {misiOpt == 'Ya' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
                <span className={mng.base__inputtitle}>Misi Perusahaan</span>
                <textarea className={`${mng["base__inputbase"]} min-h-[140px]`} type="text" rows="20" placeholder="Tuliskan misi perusahaan." value={misi} onChange={(e) => setMisi(e.target.value)}></textarea>
              </label>
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Organisasi Perusahaan</p>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Struktur Organisasi</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki struktur organisasi?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="strukturOrgOpt"
                onClick={() => setStrukturOrgOpt('Ya')}
                radioValue={strukturOrgOpt}
                selected={strukturOrgOpt == 'Ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="strukturOrgOpt"
                onClick={() => setStrukturOrgOpt('Tidak')}
                radioValue={strukturOrgOpt}
                selected={strukturOrgOpt == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {strukturOrgOpt == 'Ya' ? (
            <div className="mt-6">
              <div className="flex w-full items-center justify-between mb-3">
                <div>
                  <div className=" text-sm font-semibold">
                    Lampiran Struktur Organisasi Perusahaan
                  </div>
                  <div className="text-[11px] text-[#B3B3B3]">
                    Format dokumen: .jpg .jpeg .png
                  </div>
                </div>
                <InputFileButton />
              </div>
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah struktur organisasi sudah sesuai dengan kebutuhan perusahaan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kebutuhanOrgOpt"
                onClick={() => setKebutuhanOrgOpt('Ya')}
                radioValue={kebutuhanOrgOpt}
                selected={kebutuhanOrgOpt == 'Ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kebutuhanOrgOpt"
                onClick={() => setKebutuhanOrgOpt('Tidak')}
                radioValue={kebutuhanOrgOpt}
                selected={kebutuhanOrgOpt == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {kebutuhanOrgOpt == 'Tidak' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
                <span className={mng.base__inputtitle}>Alasan</span>
                <textarea className={`${mng["base__inputbase"]} min-h-[140px]`} type="text" rows="20" placeholder="Tulis alasan" value={alasanTdkStructur} onChange={(e) => setAlasanTdkStructur(e.target.value)}></textarea>
              </label>
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Uraian Pekerjaan (Job description)</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah masing-masing Direksi, memiliki job description?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="direksiJobOpt"
                onClick={() => setDireksiJobOpt('Ya')}
                radioValue={direksiJobOpt}
                selected={direksiJobOpt == 'Ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="direksiJobOpt"
                onClick={() => setDireksiJobOpt('Tidak')}
                radioValue={direksiJobOpt}
                selected={direksiJobOpt == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {direksiJobOpt == 'Ya' ? (
            <div className="mt-6">
            <label className={mng.base__formlabel}>
              <span className={mng.base__inputtitle}>Apabila ya, apakah dinyatakan secara tertulis?</span>
              <div className="inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="direksiJobTertulisOpt"
                  onClick={() => setDireksiJobTertulisOpt('Ya')}
                  radioValue={direksiJobTertulisOpt}
                  selected={direksiJobTertulisOpt == 'Ya'}
                  label="Ya"
                />
              </div>
              <div className="mx-10 inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="direksiJobTertulisOpt"
                  onClick={() => setDireksiJobTertulisOpt('Tidak')}
                  radioValue={direksiJobTertulisOpt}
                  selected={direksiJobTertulisOpt == 'Tidak'}
                  label="Tidak"
                />
              </div>
            </label>
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah masing-masing manajer tingkat menengah memiliki job description?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="managerJobOpt"
                onClick={() => setManagerJobOpt('Ya')}
                radioValue={managerJobOpt}
                selected={managerJobOpt == 'Ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="managerJobOpt"
                onClick={() => setManagerJobOpt('Tidak')}
                radioValue={managerJobOpt}
                selected={managerJobOpt == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {managerJobOpt == 'Ya' ? (
            <div className="mt-6">
            <label className={mng.base__formlabel}>
              <span className={mng.base__inputtitle}>Apabila ya, apakah dinyatakan secara tertulis?</span>
              <div className="inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="managerJobTertulisOpt"
                  onClick={() => setManagerJobTertulisOpt('Ya')}
                  radioValue={managerJobTertulisOpt}
                  selected={managerJobTertulisOpt == 'Ya'}
                  label="Ya"
                />
              </div>
              <div className="mx-10 inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="managerJobTertulisOpt"
                  onClick={() => setManagerJobTertulisOpt('Tidak')}
                  radioValue={managerJobTertulisOpt}
                  selected={managerJobTertulisOpt == 'Tidak'}
                  label="Tidak"
                />
              </div>
            </label>
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah masing-masing manajer operasional memiliki job description?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="managerOperaOpt"
                onClick={() => setManagerOperaOpt('Ya')}
                radioValue={managerOperaOpt}
                selected={managerOperaOpt == 'Ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="managerOperaOpt"
                onClick={() => setManagerOperaOpt('Tidak')}
                radioValue={managerOperaOpt}
                selected={managerOperaOpt == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {managerOperaOpt == 'Ya' ? (
            <div className="mt-6">
            <label className={mng.base__formlabel}>
              <span className={mng.base__inputtitle}>Apabila ya, apakah dinyatakan secara tertulis?</span>
              <div className="inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="managerOperaTertulisOpt"
                  onClick={() => setManagerOperaTertulisOpt('Ya')}
                  radioValue={managerOperaTertulisOpt}
                  selected={managerOperaTertulisOpt == 'Ya'}
                  label="Ya"
                />
              </div>
              <div className="mx-10 inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="managerOperaTertulisOpt"
                  onClick={() => setManagerOperaTertulisOpt('Tidak')}
                  radioValue={managerOperaTertulisOpt}
                  selected={managerOperaTertulisOpt == 'Tidak'}
                  label="Tidak"
                />
              </div>
            </label>
            </div>
          ) : <></>}

        </div>

        {/* Perencanaan Tahunan dan Lima Tahunan */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Perencanaan Tahunan dan Lima Tahunan</span>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Rencana Tahunan dan Realisasi</p>
          <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              Rencana 1 (satu) tahun sebelum pelaksanaan penilaian usaha perkebunan saat ini
            </div>
          </div>

          <div className="flex flex-col mt-4">
            {
              rencanaTahunan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <div className={`w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]} bg-white w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <>
                              {
                                child.isOpt ? (
                                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                                    <InputForm
                                      titleForm={child.title}
                                      titleName={child.title}
                                      onChange={(e) => formSectionChange(e, rencanaTahunan, setRencanaTahunan, i, ii, iii)}
                                      values={child.value}
                                      type="text"
                                      placeholder={child.placeholder}
                                      className={`${
                                        isError && 'border-primary-red-1 bg-primary-red-2'
                                      }`}
                                      selectionArea={true}
                                    />
                                  </label>
                                ) : (
                                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                                    <span className={mng.base__inputtitle}>{child.title}</span>
                                    <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, rencanaTahunan, setRencanaTahunan, i, ii, iii)}/>
                                  </label>
                                )
                              }
                            </>
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


          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Rencana Lima Tahunan</p>
          <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              Rencana dari tahun pencacahan penilaian usaha perkebunan s/d 5 tahun yang akan datang.
            </div>
          </div>

          <div className="flex flex-col mt-4">
            {
              periodeRencana.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                        <span className={mng.base__inputtitle}>{item.title}</span>
                        <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, periodeRencana, setPeriodeRencana, i, ii)}/>
                      </label>
                    ))
                  }
                </div>
              ))
            }
          </div>

          <div className="flex flex-col mt-4">
            {
              kegiatanRencana.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <div className={`w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastFormFull"]} bg-white w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <>
                              {
                                child.isOpt ? (
                                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                                    <InputForm
                                      titleForm={child.title}
                                      titleName={child.title}
                                      onChange={(e) => formSectionChange(e, kegiatanRencana, setKegiatanRencana, i, ii, iii)}
                                      values={child.value}
                                      type="text"
                                      placeholder={child.placeholder}
                                      className={`${
                                        isError && 'border-primary-red-1 bg-primary-red-2'
                                      }`}
                                      selectionArea={true}
                                    />
                                  </label>
                                ) : (
                                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                                    <span className={mng.base__inputtitle}>{child.title}</span>
                                    <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kegiatanRencana, setKegiatanRencana, i, ii, iii)}/>
                                  </label>
                                )
                              }
                            </>
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

        {/* Manajemen Keuangan */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Manajemen Keuangan</span>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Kondisi Keuangan</p>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Neraca dan Laporan Rugi/Laba (3 tahun terakhir)</p>

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan membuat neraca?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="neracaOpt"
                onClick={() => setNeracaOpt('Iya')}
                radioValue={neracaOpt}
                selected={neracaOpt == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="neracaOpt"
                onClick={() => setNeracaOpt('Tidak')}
                radioValue={neracaOpt}
                selected={neracaOpt == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>
          {neracaOpt == 'Iya' ? (
            <div className="mt-6">
              <div className="flex w-full items-center justify-between mb-3">
                <div>
                  <div className=" text-sm font-semibold">
                    Lampiran ringkasan neraca dan laporan R/L 3 tahun terakhir
                  </div>
                  <div className="text-[11px] text-[#B3B3B3]">
                    Format dokumen: .jpg .jpeg .png
                  </div>
                </div>
                <InputFileButton />
              </div>
            </div>
          ) : <></>}
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah neraca dan laporan R/L diperiksa oleh Akuntan Publik?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="neracaDiperiksaOpt"
                onClick={() => setNeracaDiperiksaOpt('Iya')}
                radioValue={neracaDiperiksaOpt}
                selected={neracaDiperiksaOpt == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="neracaDiperiksaOpt"
                onClick={() => setNeracaDiperiksaOpt('Tidak')}
                radioValue={neracaDiperiksaOpt}
                selected={neracaDiperiksaOpt == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>

          <div className="flex flex-col mt-4">
            {
              profilInvest.map((items, i) => (
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
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, profilInvest, setProfilInvest, i, ii, iii)}/>
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
              jenisInvest.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, jenisInvest, setJenisInvest)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_twin-secSectionTris"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, jenisInvest, setJenisInvest, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnJenisInvest}>
            + Tambah Data Investasi Tahun Lainnya
          </div>


          <div className="flex flex-col mt-4">
            {
              sumberBiaya.map((items, i) => (
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
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, sumberBiaya, setSumberBiaya, i, ii, iii)}/>
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
              kredit.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kredit, setKredit)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_twin-firstSecFull"]} ${mng["base__formlabel_twin-firstSecFull-lastfull"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kredit, setKredit, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnKredit}>
            + Tambah Kredit Lainnya
          </div>

          <p className={`${mng["base__formtitle"]} mt-6`}>Swadana</p>
          <label className={`${mng["base__formlabel"]}`}>
            <span className={mng.base__inputtitle}>Nominal Biaya (Rp)</span>
            <input className={mng.base__inputbase} type='text' placeholder='masukkan nominal dalam rupiah' value={swadana} onChange={(e) => setSwadana(e.target.value)}/>
          </label>

          <div className="flex flex-col mt-4">
            {
              modalAsing.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, modalAsing, setModalAsing)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_twin-secSectionFull"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, modalAsing, setModalAsing, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnModalAsing}>
            + Tambah Penanaman Modal Asing Lainnnya
          </div>

          <div className="flex flex-col mt-6">
            {
              modalNegeri.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, modalNegeri, setModalNegeri)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_twin-firstSecFull"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, modalNegeri, setModalNegeri, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnModalNegeri}>
            + Tambah Penanaman Modal Dalam Negeri Lainnnya
          </div>
        </div>

      </form>

    </>
  );
};
export default FormManajemenStep1;
