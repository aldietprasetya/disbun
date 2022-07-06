import Head from 'next/head'
import React, { useState } from 'react';
import InputForm from '../admin/infografis/InputForm';
import InputFileButton from 'src/components/customInput/InputFileButton';
import mng from '../../../styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormLegalitas = () => {
  const [isError, setIsError] = useState(false);

  ////////////////////////// INPUT FORM STATE ////////////////////////////////

  const [periodeThnPenilaian, setPeriodeThnPenilaian] = useState('');
  const [namaKebun, setNamaKebun] = useState('');

  ////////////////////////// Identitas Perusahaan/Kebun ////////////////////////////////

  const [identitas, setIdentitas] = useState([
    [ {'title':'Nama Perusahaan','placeholder':'Nama Perusahaan Perkebunan','type':'text','value':'','isOpt':false}, {'title':'Status Perusahaan','placeholder':'Status Perusahaan Perkebunan','type':'text','value':'','isOpt':true} ]
  ])

  const [kantorPusat, setKantorPusat] = useState([
    [ {'title':'Alamat Kantor Pusat','placeholder':'Tulis alamat','type':'text','value':'','isOpt':false}, {'title':'Nomor Telepon Kantor Pusat','placeholder':'Masukan nomor telepon','type':'text','value':'','isOpt':true}, {'title':'Nomor Fax Kantor Pusat','placeholder':'Masukan nomor telepon','type':'text','value':'','isOpt':true} ]
  ])

  const [kantorWakil, setKantorWakil] = useState([
    [ {'title':'Alamat Kantor Perwakilan','placeholder':'Tulis alamat','type':'text','value':'','isOpt':false}, {'title':'Nomor Telepon Kantor Pusat','placeholder':'Masukan nomor telepon','type':'text','value':'','isOpt':true}, {'title':'Nomor Fax Kantor Pusat','placeholder':'Masukan nomor telepon','type':'text','value':'','isOpt':true} ]
  ])

  ////////////////////////// Lokasi Kebun ////////////////////////////////

  const [lokasi, setLokasi] = useState([
    [ {'title':'Kota/Kabupaten','placeholder':'Pilih Kota/Kab.','type':'text','value':'','isOpt':true}, {'title':'kecamatan','placeholder':'Pilih Kecamatan','type':'text','value':'','isOpt':true}, {'title':'Kelurahan/Desa','placeholder':'Pilih Kel/Desa','type':'text','value':'','isOpt':true} ]
  ])

  ////////////////////////// Lingkup Usaha (Pilih Salah Satu dan Lengkapi) ////////////////////////////////

  const [lingkupUsaha, setLingkupUsaha] = useState([
    [ {'title':'Budidaya Komoditi','placeholder':'Nama Perusahaan Perkebunan','type':'text','value':'','isOpt':false}, {'title':'Pengolahan Komoditi','placeholder':'Komoditi','type':'text','value':'','isOpt':false}, {'title':'Produk Pengolahan','placeholder':'Produk Pengolahan','type':'text','value':'','isOpt':false} ]
  ])

  ////////////////////////// Hak Guna Usaha (HGU) ////////////////////////////////

  const [hkUsaha, setHkUsaha] = useState([
    [
      {'title':'No. SK HGU','placeholder':'Nomor SK HGU','type':'text','value':'','isOpt':'normal'},
      {'title':'Tanggal SK HGU','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':'cal'},
      {'title':'Jenis Tanaman (dapat lebih dari satu)','placeholder':'Masukkan jenis tanaman','type':'text','value':'','isOpt':'normal'},
      {'title':'Luas Lahan (Ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':'','isOpt':'normal'},
      {'title':'Tanggal Berakhirnya HGU','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':'cal'},
      {'title':'No. Sertifikat','placeholder':'Masukkan nomor sertifikat','type':'text','value':'','isOpt':'normal'},
      {'title':'Jenis HGU','placeholder':'Pilih Jenis HGU','type':'text','value':'','isOpt':'opt'},
      {'title':'Lampiran Dokumen Lengkap HGU','placeholder':'Format dokumen: .jpg .jpeg .png','type':'text','value':'','isOpt':'unggah'}
    ]
  ])

  function handleBtnAddHkUsaha() {
    setHkUsaha([...hkUsaha,[
      {'title':'No. SK HGU','placeholder':'Nomor SK HGU','type':'text','value':'','isOpt':'normal'},
      {'title':'Tanggal SK HGU','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':'cal'},
      {'title':'Jenis Tanaman (dapat lebih dari satu)','placeholder':'Masukkan jenis tanaman','type':'text','value':'','isOpt':'normal'},
      {'title':'Luas Lahan (Ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':'','isOpt':'normal'},
      {'title':'Tanggal Berakhirnya HGU','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':'cal'},
      {'title':'No. Sertifikat','placeholder':'Masukkan nomor sertifikat','type':'text','value':'','isOpt':'normal'},
      {'title':'Jenis HGU','placeholder':'Pilih Jenis HGU','type':'text','value':'','isOpt':'opt'},
      {'title':'Lampiran Dokumen Lengkap HGU','placeholder':'Format dokumen: .jpg .jpeg .png','type':'text','value':'','isOpt':'unggah'}
    ]])
  }

  ////////////////////////// HGU Dalam Proses ////////////////////////////////

  const [hguProses, setHguProses] = useState([
    [ {'title':'No. SK HGU','placeholder':'Masukkan nomor SK','type':'text','value':'','isOpt':'normal'}, {'title':'Keterangan','placeholder':'Berikan penjelasan mengenai prosesnya.','type':'textarea','value':'','isOpt':'textarea'}, {'title':'Lampiran Berkas HGU Dalam Proses','placeholder':'Format dokumen: .jpg .jpeg .png','type':'text','value':'','isOpt':'unggah'} ]
  ])

  function handleBtnAddHguProses() {
    setHguProses([...hguProses,[
      {'title':'No. SK HGU','placeholder':'Masukkan nomor SK','type':'text','value':'','isOpt':'normal'}, {'title':'Keterangan','placeholder':'Berikan penjelasan mengenai prosesnya.','type':'textarea','value':'','isOpt':'textarea'}, {'title':'Lampiran Berkas HGU Dalam Proses','placeholder':'Format dokumen: .jpg .jpeg .png','type':'text','value':'','isOpt':'unggah'}
    ]])
  }

  ////////////////////////// Perizinan Usaha Perkebunan ////////////////////////////////

  const [skRencana, setSkRencana] = useState([
    [ {'title':'No. sK atas Rencana Pembangunan Perkebunan PIR-Trans (SKRP3)','placeholder':'Masukkan nomor SK','type':'text','value':'','isOpt':'normal'}, {'title':'Tanggal','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':'cal'}, {'title':'Pemberi Izin','placeholder':'Pejabat Pemberi Izin','type':'textarea','value':'','isOpt':'normal'}, {'title':'Lampiran Copy SKRP3','placeholder':'Format dokumen: .jpg .jpeg .png','type':'text','value':'','isOpt':'unggah'} ]
  ])

  const [skTugas, setSkTugas] = useState([
    [ {'title':'No. Surat Penugasan sebagai Inti PIR-Bun dari Mentan','placeholder':'Masukkan nomor SK','type':'text','value':'','isOpt':'normal'}, {'title':'Tanggal','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':'cal'}, {'title':'Pemberi Izin','placeholder':'Pejabat Pemberi Izin','type':'textarea','value':'','isOpt':'normal'}, {'title':'Lampiran Copy SK Penugasan sebagai Inti PIR-Bun dari Mentan','placeholder':'Format dokumen: .jpg .jpeg .png','type':'text','value':'','isOpt':'unggah'} ]
  ])

  const [skUsahaBudi, setSkUsahaBudi] = useState([
    [ {'title':'No. Izin Tetap Usaha Budidaya Perkebunan','placeholder':'Masukkan nomor Izin Tetap Usaha Budidaya Perkebunan','type':'text','value':'','isOpt':'normal'}, {'title':'Tanggal','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':'cal'}, {'title':'Pemberi Izin','placeholder':'Pejabat Pemberi Izin','type':'textarea','value':'','isOpt':'normal'}, {'title':'Lampiran Copy SK Izin Tetap Usaha Budidaya Perkebunan','placeholder':'Format dokumen: .jpg .jpeg .png','type':'text','value':'','isOpt':'unggah'} ]
  ])

  const [skUsahaIndustri, setSkUsahaIndustri] = useState([
    [ {'title':'No. Izin Tetap Usaha industri Perkebunan','placeholder':'Masukkan nomor Izin Tetap Usaha industri Perkebunan','type':'text','value':'','isOpt':'normal'}, {'title':'Tanggal','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':'cal'}, {'title':'Pemberi Izin','placeholder':'Pejabat Pemberi Izin','type':'textarea','value':'','isOpt':'normal'}, {'title':'Lampiran Copy SK Izin Tetap Usaha industri Perkebunan','placeholder':'Format dokumen: .jpg .jpeg .png','type':'text','value':'','isOpt':'unggah'} ]
  ])

  const [skUsahaTani, setSkUsahaTani] = useState([
    [ {'title':'No. Izin Tetap Usaha Pertanian (dari BKPM)','placeholder':'Masukkan nomor Izin Tetap Usaha Pertanian (dari BKPM)','type':'text','value':'','isOpt':'normal'}, {'title':'Tanggal','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':'cal'}, {'title':'Pemberi Izin','placeholder':'Pejabat Pemberi Izin','type':'textarea','value':'','isOpt':'normal'}, {'title':'Lampiran Copy SK Izin Tetap Usaha Pertanian (dari BKPM)','placeholder':'Format dokumen: .jpg .jpeg .png','type':'text','value':'','isOpt':'unggah'} ]
  ])

  const [skUsahaDaftar, setSkUsahaDaftar] = useState([
    [ {'title':'No. Surat Pendaftaran Usaha Perkebunan (SPUP)','placeholder':'Masukkan nomor SK','type':'text','value':'','isOpt':'normal'}, {'title':'Tanggal','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':'cal'}, {'title':'Pemberi Izin','placeholder':'Pejabat Pemberi Izin','type':'textarea','value':'','isOpt':'normal'}, {'title':'Lampiran Copy SK Pendaftaran Usaha Perkebunan (SPUP)','placeholder':'Format dokumen: .jpg .jpeg .png','type':'text','value':'','isOpt':'unggah'} ]
  ])

  const [skUsahaKebun, setSkUsahaKebun] = useState([
    [ {'title':'No. Izin Usaha Perkebunan (IUP)','placeholder':'Masukkan nomor Izin Usaha Perkebunan (IUP)','type':'text','value':'','isOpt':'normal'}, {'title':'Tanggal','placeholder':'DD/MM/YYYY','type':'text','value':'','isOpt':'cal'}, {'title':'Pemberi Izin','placeholder':'Pejabat Pemberi Izin','type':'textarea','value':'','isOpt':'normal'}, {'title':'Lampiran Copy SK Izin Usaha Perkebunan (IUP)','placeholder':'Format dokumen: .jpg .jpeg .png','type':'text','value':'','isOpt':'unggah'} ]
  ])

  ////////////////////////// Tanah dan Iklim ////////////////////////////////

  const [tanahIklim, setTanahIklim] = useState([
    [ { 'sectionTitle': 'Tanah', 'sectionData': [ {'title':'Jenis Tanah','type':'text','placeholder':'Pilih Jenis Tanah','value':'','isOpt':'opt'}, {'title':'Ketinggian dari Muka air laut (m)','type':'text','placeholder':'Nilai Ketinggian','value':'','isOpt':'normal'}, ] }, { 'sectionTitle': 'Lereng Datar (0-8 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':'normal'}, {'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':'','isOpt':'normal'}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':'normal'}, ] }, { 'sectionTitle': 'Lereng Landai (8-15 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':'normal'}, {'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':'','isOpt':'normal'}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':'normal'}, ] }, { 'sectionTitle': 'Lereng Berombak (15-24 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':'normal'}, {'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':'','isOpt':'normal'}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':'normal'}, ] }, { 'sectionTitle': 'Lereng Berbukit (24-45 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':'normal'}, {'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':'','isOpt':'normal'}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':'normal'}, ] }, { 'sectionTitle': 'Lereng Bergunung (>45 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':'normal'}, {'title':'Persentase (%)','type':'text','placeholder':'Persentase','value':'','isOpt':'normal'}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':'normal'}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Tekstur Tanah','type':'text','placeholder':'Tekstur Tanah','value':'','isOpt':'normal'}, {'title':'Drainase','type':'text','placeholder':'Kondisi Drainase','value':'','isOpt':'normal'}, {'title':'Kedalaman efektif solum (m)','type':'text','placeholder':'Nilai Kedalaman dalam meter','value':'','isOpt':'normal'}, {'title':'Sumber Informasi','type':'text','placeholder':'Sumber Informasi','value':'','isOpt':'normal'}, ] } ]
  ])

  const [gambut, setGambut] = useState([
    [ {'title':'Ketebalan gambut (m)','placeholder':'Nilai Ketebalan Gambut (m)','type':'text','value':'','isOpt':'normal'}, {'title':'Tingkat dekomposisi','placeholder':'Pilih Tingkat Dekomposisi','type':'text','value':'','isOpt':'opt'}, {'title':'Lapisan Tanah di Bawah Gambut','placeholder':'Lapisan tanah di bawah gambut','type':'textarea','value':'','isOpt':'normal'}, ]
  ])

  ////////////////////////// Iklim ////////////////////////////////

  const [iklim, setIklim] = useState([
    [
      {'title':'Tipe Iklim','placeholder':'Pilih Tipe Iklim','type':'text','value':'','isOpt':'opt'},
      {'title':'Sumber data curah hujan (nama stasiun)','placeholder':'Sumber','type':'text','value':'','isOpt':'normal'},
    ]
  ])

  ////////////////////////// Kelas Kesesuaian Lahan ////////////////////////////////

  const [sesuaiLahan, setSesuaiLahan] = useState([
    [{ 'sectionTitle': 'Kelas Kesesuaian Lahan', 'sectionData': [ {'title':'Jenis Komoditas','type':'text','placeholder':'Tulis Komoditas Tanaman','value':''}, ] }, { 'sectionTitle': 'Kelas Lahan S1', 'sectionData': [ {'title':'Lokasi','type':'text','placeholder':'Masukkan lokasi','value':''}, {'title':'Luas (Ha)','type':'text','placeholder':'Luas dalam Ha','value':''}, {'title':'Ditetapkan Oleh','type':'text','placeholder':'Yang Menetapkan','value':''}, ] }, { 'sectionTitle': 'Kelas Lahan S2', 'sectionData': [ {'title':'Lokasi','type':'text','placeholder':'Masukkan lokasi','value':''}, {'title':'Luas (Ha)','type':'text','placeholder':'Luas dalam Ha','value':''}, {'title':'Ditetapkan Oleh','type':'text','placeholder':'Yang Menetapkan','value':''}, ] }, { 'sectionTitle': 'Kelas Lahan S3', 'sectionData': [ {'title':'Lokasi','type':'text','placeholder':'Masukkan lokasi','value':''}, {'title':'Luas (Ha)','type':'text','placeholder':'Luas dalam Ha','value':''}, {'title':'Ditetapkan Oleh','type':'text','placeholder':'Yang Menetapkan','value':''}, ] }]
  ])

  function handleBtnAddSesuaiLahan() {
    setSesuaiLahan([...sesuaiLahan,[{ 'sectionTitle': 'Kelas Kesesuaian Lahan', 'sectionData': [ {'title':'Jenis Komoditas','type':'text','placeholder':'Tulis Komoditas Tanaman','value':''}, ] }, { 'sectionTitle': 'Kelas Lahan S1', 'sectionData': [ {'title':'Lokasi','type':'text','placeholder':'Masukkan lokasi','value':''}, {'title':'Luas (Ha)','type':'text','placeholder':'Luas dalam Ha','value':''}, {'title':'Ditetapkan Oleh','type':'text','placeholder':'Yang Menetapkan','value':''}, ] }, { 'sectionTitle': 'Kelas Lahan S2', 'sectionData': [ {'title':'Lokasi','type':'text','placeholder':'Masukkan lokasi','value':''}, {'title':'Luas (Ha)','type':'text','placeholder':'Luas dalam Ha','value':''}, {'title':'Ditetapkan Oleh','type':'text','placeholder':'Yang Menetapkan','value':''}, ] }, { 'sectionTitle': 'Kelas Lahan S3', 'sectionData': [ {'title':'Lokasi','type':'text','placeholder':'Masukkan lokasi','value':''}, {'title':'Luas (Ha)','type':'text','placeholder':'Luas dalam Ha','value':''}, {'title':'Ditetapkan Oleh','type':'text','placeholder':'Yang Menetapkan','value':''}, ] }]])
  }

  ////////////////////////// Data Tahun ////////////////////////////////

  const [dataTahun, setDataTahun] = useState([
    [{ 'sectionTitle': '', 'sectionData': [ {'title':'Tahun','type':'text','placeholder':'YYYY','value':''}, ] }, { 'sectionTitle': 'Januari', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Februari', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Maret', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'April', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Mei', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Juni', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Juli', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Agustus', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'September', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Oktober', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'November', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Desember', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Rata-rata/Bulan CH≥60 mm','type':'text','placeholder':'automated','value':''}, {'title':'rata-rata HH dengan CH≥60 mm','type':'text','placeholder':'automated','value':''}, {'title':'Rata-rata/Bulan CH<60 mm','type':'text','placeholder':'automated','value':''}, {'title':'rata-rata HH dengan CH<60 mm','type':'text','placeholder':'automated','value':''}, ] }]
  ])

  function handleBtnAddDataTahun() {
    setDataTahun([...dataTahun,[
      { 'sectionTitle': '', 'sectionData': [ {'title':'Tahun','type':'text','placeholder':'YYYY','value':''}, ] }, { 'sectionTitle': 'Januari', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Februari', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Maret', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'April', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Mei', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Juni', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Juli', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Agustus', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'September', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Oktober', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'November', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Desember', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'text','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'text','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Rata-rata/Bulan CH≥60 mm','type':'text','placeholder':'automated','value':''}, {'title':'rata-rata HH dengan CH≥60 mm','type':'text','placeholder':'automated','value':''}, {'title':'Rata-rata/Bulan CH<60 mm','type':'text','placeholder':'automated','value':''}, {'title':'rata-rata HH dengan CH<60 mm','type':'text','placeholder':'automated','value':''}, ] }
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
          <span className={mng.base__subtitle}>Periode Pengisian</span>

          <label className={`${mng["base__formlabel"]}`}>
            <InputForm
              titleForm="Periode Tahun Penilaian"
              titleName="Periode Tahun Penilaian"
              onChange={(e) => setPeriodeThnPenilaian(e.target.value)}
              type="text"
              placeholder="Pilih Periode Tahun Penilaian"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              }`}
              selectionArea={true}
            />
          </label>

          <span className={mng.base__subtitle}>Identitas Perusahaan/Kebun</span>

          <div className="flex flex-col">
            {
              identitas.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, identitas, setIdentitas, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, identitas, setIdentitas, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>


          <div className="flex flex-col">
            {
              kantorPusat.map((items, i) => (
                <div className={`${mng["base__formlabel_custom4"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} float-right mb-6`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              phoneNumber="true"
                              onChange={(e) => formRegularChange(e, kantorPusat, setKantorPusat, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} float-left w-1/2 pr-2`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <textarea className={`${mng["base__inputbase"]} min-h-[140px]`} type={item.type} rows="20" placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, kantorPusat, setKantorPusat, i, ii)}></textarea>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className="flex flex-col">
            {
              kantorWakil.map((items, i) => (
                <div className={`${mng["base__formlabel_custom4"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} float-right mb-6`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              phoneNumber="true"
                              onChange={(e) => formRegularChange(e, kantorWakil, setKantorWakil, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} float-left w-1/2 pr-2`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <textarea className={`${mng["base__inputbase"]} min-h-[140px]`} type={item.type} rows="20" placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, kantorWakil, setKantorWakil, i, ii)}></textarea>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>


          <div className="flex flex-col">
            {
              identitas.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, identitas, setIdentitas, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, identitas, setIdentitas, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>


          <label className={`${mng["base__formlabel"]}`}>
            <InputForm
              titleForm="Nama Kebun/Pabrik"
              titleName="Nama Kebun/Pabrik"
              onChange={(e) => setNamaKebun(e.target.value)}
              type="text"
              placeholder="Nama Perusahaan Perkebunan"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              }`}
              selectionArea={true}
            />
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Lokasi Kebun</p>
          <div className="flex flex-col">
            {
              lokasi.map((items, i) => (
                <div className={`${mng["base__formlabel_tri"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <InputForm
                        titleForm={item.title}
                        titleName={item.title}
                        onChange={(e) => formRegularChange(e, lokasi, setLokasi, i, ii)}
                        type="text"
                        placeholder={item.placeholder}
                        className={`${
                          isError && 'border-primary-red-1 bg-primary-red-2'
                        }`}
                        selectionArea={true}
                      />
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>


          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Lingkup Usaha (Pilih Salah Satu dan Lengkapi)</p>
          <div className="flex flex-col">
            {
              lingkupUsaha.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, lingkupUsaha, setLingkupUsaha, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }
          </div>

        </div>


        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Legalitas Usaha</span>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Hak Guna Usaha (HGU)</p>

          <div className="flex flex-col">
            {
              hkUsaha.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-custom3rd"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, hkUsaha, setHkUsaha)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == "unggah" ? (
                          <div className="flex w-full items-center justify-between mb-3">
                            <div>
                              <div className=" text-sm font-semibold">
                                Lampiran Berkas HGU Dalam Proses
                              </div>
                              <div className="text-[11px] text-[#B3B3B3]">
                                Format dokumen: .jpg .jpeg .png
                              </div>
                            </div>
                            <InputFileButton />
                          </div>
                        ) : item.isOpt == 'opt' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, hkUsaha, setHkUsaha, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : item.isOpt == 'cal' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, hkUsaha, setHkUsaha, i, ii)}
                              type="date"
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3 px-4  text-small uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, hkUsaha, setHkUsaha, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddHkUsaha}>
            + Tambah Hak Guna Usaha
          </div>
        </div>


        <div className={`${mng["base__formsection"]}`}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>HGU Dalam Proses</p>

          <div className="flex flex-col">
            {
              hguProses.map((items, i) => (
                <div className={`${mng["base__formlabel_single"]}`} key={i}>
                {
                  i > 0 ?
                  <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, hguProses, setHguProses)}>
                    do_not_disturb_on
                  </span>
                  :
                  <></>
                }
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == "unggah" ? (
                          <div className="flex w-full items-center justify-between mb-3">
                            <div>
                              <div className=" text-sm font-semibold">
                                Lampiran Berkas HGU Dalam Proses
                              </div>
                              <div className="text-[11px] text-[#B3B3B3]">
                                Format dokumen: .jpg .jpeg .png
                              </div>
                            </div>
                            <InputFileButton />
                          </div>
                        ) : item.isOpt == 'textarea' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <textarea className={`${mng["base__inputbase"]} h-[140px]`} type={item.type} rows="20" placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, hguProses, setHguProses, i, ii)}></textarea>
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, hguProses, setHguProses, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          <div className={mng.base__btn} onClick={handleBtnAddHguProses}>
            + Tambah HGU dalam proses
          </div>
        </div>


        <div className={`${mng["base__formsection"]}`}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Perizinan Usaha Perkebunan</p>

          <div className="flex flex-col">
            {
              skRencana.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == 'cal' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, skRencana, setSkRencana, i, ii)}
                              type="date"
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3 px-4  text-small uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="flex w-full items-center justify-between mb-3">
                            <div>
                              <div className=" text-sm font-semibold">
                                Lampiran Berkas HGU Dalam Proses
                              </div>
                              <div className="text-[11px] text-[#B3B3B3]">
                                Format dokumen: .jpg .jpeg .png
                              </div>
                            </div>
                            <InputFileButton />
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, skRencana, setSkRencana, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          {/* No. sK atas Rencana Pembangunan Perkebunan PIR-Trans (SKRP3) */}
          <div className="flex flex-col">
            {
              skRencana.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == 'cal' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, skRencana, setSkRencana, i, ii)}
                              type="date"
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3 px-4  text-small uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="flex w-full items-center justify-between mb-3">
                            <div>
                              <div className=" text-sm font-semibold">
                                Lampiran Berkas HGU Dalam Proses
                              </div>
                              <div className="text-[11px] text-[#B3B3B3]">
                                Format dokumen: .jpg .jpeg .png
                              </div>
                            </div>
                            <InputFileButton />
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, skRencana, setSkRencana, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          {/* No. Surat Penugasan sebagai Inti PIR-Bun dari Mentan */}
          <div className="flex flex-col">
            {
              skTugas.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == 'cal' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, skTugas, setSkTugas, i, ii)}
                              type="date"
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3 px-4  text-small uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="flex w-full items-center justify-between mb-3">
                            <div>
                              <div className=" text-sm font-semibold">
                                Lampiran Berkas HGU Dalam Proses
                              </div>
                              <div className="text-[11px] text-[#B3B3B3]">
                                Format dokumen: .jpg .jpeg .png
                              </div>
                            </div>
                            <InputFileButton />
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, skTugas, setSkTugas, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          {/* No. Izin Tetap Usaha Budidaya Perkebunan */}
          <div className="flex flex-col">
            {
              skUsahaBudi.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == 'cal' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, skUsahaBudi, setSkUsahaBudi, i, ii)}
                              type="date"
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3 px-4  text-small uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="flex w-full items-center justify-between mb-3">
                            <div>
                              <div className=" text-sm font-semibold">
                                Lampiran Berkas HGU Dalam Proses
                              </div>
                              <div className="text-[11px] text-[#B3B3B3]">
                                Format dokumen: .jpg .jpeg .png
                              </div>
                            </div>
                            <InputFileButton />
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, skUsahaBudi, setSkUsahaBudi, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          {/* No. Izin Tetap Usaha industri Perkebunan */}
          <div className="flex flex-col">
            {
              skUsahaIndustri.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == 'cal' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, skUsahaIndustri, setSkUsahaIndustri, i, ii)}
                              type="date"
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3 px-4  text-small uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="flex w-full items-center justify-between mb-3">
                            <div>
                              <div className=" text-sm font-semibold">
                                Lampiran Berkas HGU Dalam Proses
                              </div>
                              <div className="text-[11px] text-[#B3B3B3]">
                                Format dokumen: .jpg .jpeg .png
                              </div>
                            </div>
                            <InputFileButton />
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, skUsahaIndustri, setSkUsahaIndustri, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          {/* No. Izin Tetap Usaha Pertanian (dari BKPM) */}
          <div className="flex flex-col">
            {
              skUsahaTani.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == 'cal' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, skUsahaTani, setSkUsahaTani, i, ii)}
                              type="date"
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3 px-4  text-small uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="flex w-full items-center justify-between mb-3">
                            <div>
                              <div className=" text-sm font-semibold">
                                Lampiran Berkas HGU Dalam Proses
                              </div>
                              <div className="text-[11px] text-[#B3B3B3]">
                                Format dokumen: .jpg .jpeg .png
                              </div>
                            </div>
                            <InputFileButton />
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, skUsahaTani, setSkUsahaTani, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          {/* No. Surat Pendaftaran Usaha Perkebunan (SPUP) */}
          <div className="flex flex-col">
            {
              skUsahaDaftar.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == 'cal' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, skUsahaDaftar, setSkUsahaDaftar, i, ii)}
                              type="date"
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3 px-4  text-small uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="flex w-full items-center justify-between mb-3">
                            <div>
                              <div className=" text-sm font-semibold">
                                Lampiran Berkas HGU Dalam Proses
                              </div>
                              <div className="text-[11px] text-[#B3B3B3]">
                                Format dokumen: .jpg .jpeg .png
                              </div>
                            </div>
                            <InputFileButton />
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, skUsahaDaftar, setSkUsahaDaftar, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>

          {/* No. Izin Usaha Perkebunan (IUP) */}
          <div className="flex flex-col">
            {
              skUsahaKebun.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == 'cal' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, skUsahaKebun, setSkUsahaKebun, i, ii)}
                              type="date"
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3 px-4  text-small uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="flex w-full items-center justify-between mb-3">
                            <div>
                              <div className=" text-sm font-semibold">
                                Lampiran Berkas HGU Dalam Proses
                              </div>
                              <div className="text-[11px] text-[#B3B3B3]">
                                Format dokumen: .jpg .jpeg .png
                              </div>
                            </div>
                            <InputFileButton />
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, skUsahaKebun, setSkUsahaKebun, i, ii)}/>
                          </label>
                        )
                      }
                    </>
                  ))
                }
                </div>
              ))
            }
          </div>


        </div>

        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Tanah dan Iklim</span>

          <div className="flex flex-col">
            {
              tanahIklim.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_twin-firstSecFull"]} ${mng["base__formlabel_twin-lastSecFull"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin-sec-tris"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <>
                              {
                                child.isOpt == "opt" ? (
                                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                                    <InputForm
                                      titleForm={child.title}
                                      titleName={child.title}
                                      onChange={(e) => formSectionChange(e, tanahIklim, setTanahIklim, i, ii, iii)}
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
                                    <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, tanahIklim, setTanahIklim, i, ii, iii)}/>
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

          <div className="mt-2 mb-3 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              lihat Permentan No. 14/Permentan/PL.110/2/2009 tentang Pemanfaatan Lahan Gambut untuk Budidaya Kelapa Sawit
            </div>
          </div>

          <div className="flex flex-col">
            {
              gambut.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == "opt" ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, gambut, setGambut, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, gambut, setGambut, i, ii)}/>
                          </label>
                        )
                      }
                    </>

                  ))
                }
                </div>
              ))
            }
          </div>

        </div>


        <div className={`${mng["base__formsection"]}`}>
          <div className="flex flex-col">
            {
              sesuaiLahan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, sesuaiLahan, setSesuaiLahan)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_twin-firstSecFull"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin-sec-tris"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, sesuaiLahan, setSesuaiLahan, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]} mt-0`} onClick={handleBtnAddSesuaiLahan}>
            + Tambah Kesesuaian Lahan Sesuai Komoditas
          </div>
        </div>


        <div className={`${mng["base__formsection"]}`}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Iklim</p>

          <div className="flex flex-col">
            {
              iklim.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == "opt" ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, iklim, setIklim, i, ii)}
                              type="text"
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              }`}
                              selectionArea={true}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, iklim, setIklim, i, ii)}/>
                          </label>
                        )
                      }
                    </>

                  ))
                }
                </div>
              ))
            }
          </div>
        </div>


        <div className={`${mng["base__formsection"]} border-b-0`}>
          <div className="mt-2 mb-3 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              Masukkan data curah hujan selama 3 (tiga) tahun terakhir.
            </div>
          </div>

          <div className="flex flex-col">
            {
              dataTahun.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, dataTahun, setDataTahun)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_twin-firstSecFull"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, dataTahun, setDataTahun, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]} mt-0`} onClick={handleBtnAddDataTahun}>
            + Tambah Data Tahun Lainnya
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
export default FormLegalitas;
