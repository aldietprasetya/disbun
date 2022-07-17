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

const FormManajemenStep1 = () => {
  const [isError, setIsError] = useState(false);

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
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="visiOpt"
                onClick={() => setVisiOpt('Tidak')}
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
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="misiOpt"
                onClick={() => setMisiOpt('Tidak')}
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
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="strukturOrgOpt"
                onClick={() => setStrukturOrgOpt('Tidak')}
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
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kebutuhanOrgOpt"
                onClick={() => setKebutuhanOrgOpt('Tidak')}
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
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="direksiJobOpt"
                onClick={() => setDireksiJobOpt('Tidak')}
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
                  label="Ya"
                />
              </div>
              <div className="mx-10 inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="direksiJobTertulisOpt"
                  onClick={() => setDireksiJobTertulisOpt('Tidak')}
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
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="managerJobOpt"
                onClick={() => setManagerJobOpt('Tidak')}
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
                  label="Ya"
                />
              </div>
              <div className="mx-10 inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="managerJobTertulisOpt"
                  onClick={() => setManagerJobTertulisOpt('Tidak')}
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
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="managerOperaOpt"
                onClick={() => setManagerOperaOpt('Tidak')}
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
                  label="Ya"
                />
              </div>
              <div className="mx-10 inline-flex items-center">
                <InputForm
                  radioButton={true}
                  radioName="managerOperaTertulisOpt"
                  onClick={() => setManagerOperaTertulisOpt('Tidak')}
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
                        <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formSectionChange(e, periodeRencana, setPeriodeRencana, i, ii)}/>
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
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kegiatanRencana, setKegiatanRencana, i, ii, iii)}/>
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
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="neracaOpt"
                onClick={() => setNeracaOpt('Tidak')}
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
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="neracaDiperiksaOpt"
                onClick={() => setNeracaDiperiksaOpt('Tidak')}
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
