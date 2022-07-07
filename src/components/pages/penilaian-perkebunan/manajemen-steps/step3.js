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

const FormManajemenStep3 = () => {
  const [isError, setIsError] = useState(false);

  ////////////////////////// INPUT FORM STATE ////////////////////////////////

  const [perlengakapanSelamat, setPerlengakapanSelamat] = useState('');
  const [perlengakapanGunakan, setPerlengakapanGunakan] = useState('');

  const [jenisJamsostek, setJenisJamsostek] = useState('');
  const [tidakJamsostek, setTidakJamsostek] = useState('');

  const [usahaKoperasiDilaksanakan, setUsahaKoperasiDilaksanakan] = useState('');
  const [alasanTidakKoperasi, setAlasanTidakKoperasi] = useState('');

  const [jenisAset, setJenisAset] = useState('');

  const [kesepakatanKerja, setKesepakatanKerja] = useState('');

  const [jenisRumahIbadah, setJenisRumahIbadah] = useState('');

  const [jenisFasilitasOlahraga, setJenisFasilitasOlahraga] = useState('');
  const [jenisFasilitasHiburan, setJenisFasilitasHiburan] = useState('');

  const [bentukPemasaran, setBentukPemasaran] = useState('');

  const [sistemPromosi, setSistemPromosi] = useState('');

  const [penentuanHargaJualProd, setPenentuanHargaJualProd] = useState('');

  ////////////////////////// RADIO BUTTON STATE ////////////////////////////////

  const [gantiKesehatanOpt, setGantiKesehatanOpt] = useState('');

  const [keselamatanKerjaOpt, setKeselamatanKerjaOpt] = useState('');
  const [keselamatanKerjaSosialisasikanOpt, setKeselamatanKerjaSosialisasikanOpt] = useState('');
  const [perlengkapanKeselamatanKerjaOpt, setPerlengkapanKeselamatanKerjaOpt] = useState('');
  const [perlengkapanDigunakanOpt, setPerlengkapanDigunakanOpt] = useState('');
  const [pelatihanSelamatOpt, setPelatihanSelamatOpt] = useState('');
  const [rekamanCelakaOpt, setRekamanCelakaOpt] = useState('');

  const [jaminanSosialOpt, setJaminanSosialOpt] = useState('');

  const [biayaSewaOpt, setBiayaSewaOpt] = useState('');

  const [bonusOpt, setBonusOpt] = useState('');

  const [koperasiBdnHukumOpt, setKoperasiBdnHukumOpt] = useState('');
  const [koperasiSesuaiOpt, setKoperasiSesuaiOpt] = useState('');

  const [hibahJualSahamOpt, setHibahJualSahamOpt] = useState('');
  const [asetDigunakanOpt, setAsetDigunakanOpt] = useState('');

  const [orgKaryawanOpt, setOrgKaryawanOpt] = useState('');
  const [kesepakatanKerjaOpt, setKesepakatanKerjaOpt] = useState('');

  const [poliklinikOpt, setPoliklinikOpt] = useState('');
  const [tenagaMedisOpt, setTenagaMedisOpt] = useState('');

  const [tunjanganPendidikanOpt, setTunjanganPendidikanOpt] = useState('');

  const [rumahIbadahOpt, setRumahIbadahOpt] = useState('');

  const [fasilitasOlahragaOpt, setFasilitasOlahragaOpt] = useState('');
  const [fasilitasHiburanOpt, setFasilitasHiburanOpt] = useState('');

  const [bursaOpt, setBursaOpt] = useState('');
  const [sistemPromosiOpt, setSistemPromosiOpt] = useState('');

  ////////////////////////// Tunjangan/Jaminan Kesehatan ////////////////////////////////

  const [jaminSehat, setJaminSehat] = useState([
    [
      { 'sectionTitle': 'Karyawan Tetap', 'sectionData': [{'title':'Biaya yang ditanggung (%)','type':'text','placeholder':'masukkan presentase biaya yang ditanggung','value':''}] }, { 'sectionTitle': 'Karyawan Lepas', 'sectionData': [{'title':'Biaya yang ditanggung (%)','type':'text','placeholder':'masukkan presentase biaya yang ditanggung','value':''}] },
    ],
  ])

  ////////////////////////// Jumlah karyawan yang diikutsertakan dalam program Jaminan Sosial Tenaga Kerja ////////////////////////////////

  const [jmlKaryawanJmsostek, setJmlKaryawanJmsostek] = useState([
    [
      {'title':'Jumlah Karyawan','placeholder':'Jumlah','type':'text','value':'','isOpt':false},{'title':'Persentase (%)','placeholder':'Persentase','type':'text','value':'','isOpt':false},
    ]
  ])

  ////////////////////////// Fasilitas Perumahan/Penggantian Biaya Perumahan ////////////////////////////////

  const [jmlKaryawanFasilitas, setJmlKaryawanFasilitas] = useState([
    [
      {'title':'Karyawan Penerima (%)','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false}, {'title':'Fasilitas Perumahan (%)','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false}, {'title':'Penggantian Biaya (%)','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false}
    ]
  ])

  ////////////////////////// Pemberian bonus kepada karyawan 3 tahun terakhir sebelum klasifikasi saat ini  ////////////////////////////////

  const [bonusKaryawan, setBonusKaryawan] = useState([
    [
      { 'sectionTitle': 'Tahun 1', 'sectionData': [ {'title':'Nominal Bonus Tahunan','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Jumlah Penerima (%)','type':'text','placeholder':'masukkan presentase penerima','value':''}, {'title':'Nominal THR','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Jumlah Penerima (%)','type':'text','placeholder':'masukkan presentase penerima','value':''}, ] }, { 'sectionTitle': 'Tahun 2', 'sectionData': [ {'title':'Nominal Bonus Tahunan','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Jumlah Penerima (%)','type':'text','placeholder':'masukkan presentase penerima','value':''}, {'title':'Nominal THR','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Jumlah Penerima (%)','type':'text','placeholder':'masukkan presentase penerima','value':''}, ] }, { 'sectionTitle': 'Tahun 3', 'sectionData': [ {'title':'Nominal Bonus Tahunan','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Jumlah Penerima (%)','type':'text','placeholder':'masukkan presentase penerima','value':''}, {'title':'Nominal THR','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Jumlah Penerima (%)','type':'text','placeholder':'masukkan presentase penerima','value':''}, ] },
    ],
  ])

  const [bonusKaryawanHarian, setBonusKaryawanHarian] = useState([
    [
      { 'sectionTitle': 'Tahun 1', 'sectionData': [ {'title':'Nominal Bonus Tahunan','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Jumlah Penerima (%)','type':'text','placeholder':'masukkan presentase penerima','value':''}, {'title':'Nominal THR','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Jumlah Penerima (%)','type':'text','placeholder':'masukkan presentase penerima','value':''}, ] }, { 'sectionTitle': 'Tahun 2', 'sectionData': [ {'title':'Nominal Bonus Tahunan','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Jumlah Penerima (%)','type':'text','placeholder':'masukkan presentase penerima','value':''}, {'title':'Nominal THR','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Jumlah Penerima (%)','type':'text','placeholder':'masukkan presentase penerima','value':''}, ] }, { 'sectionTitle': 'Tahun 3', 'sectionData': [ {'title':'Nominal Bonus Tahunan','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Jumlah Penerima (%)','type':'text','placeholder':'masukkan presentase penerima','value':''}, {'title':'Nominal THR','type':'text','placeholder':'masukkan nominal dalam rupiah','value':''}, {'title':'Jumlah Penerima (%)','type':'text','placeholder':'masukkan presentase penerima','value':''}, ] },
    ],
  ])

  ////////////////////////// Organisasi Karyawan ////////////////////////////////

  const [orgKaryawan, setOrgKaryawan] = useState([
    [
      {'title':'Nama Organisasi','placeholder':'masukkan nama organisasi','type':'text','value':'','isOpt':false},
      {'title':'Kegiatan','placeholder':'masukkan kegiatan','type':'text','value':'','isOpt':false}
    ]
  ])

  ////////////////////////// Komoditas dan bursa yang dimasuki pada 3 tahun terakhir sebelum penilaian usaha perkebunan ////////////////////////////////

  const [komoditasNilaiUsaha, setKomoditasNilaiUsaha] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Komoditas','type':'text','placeholder':'masukkan komoditas','value':''}, ] }, { 'sectionTitle': 'Tahun 1', 'sectionData': [ {'title':'Bursa','type':'text','placeholder':'masukkan bursa','value':''}, {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''} ] }, { 'sectionTitle': 'Tahun 2', 'sectionData': [ {'title':'Bursa','type':'text','placeholder':'masukkan bursa','value':''}, {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''} ] }, { 'sectionTitle': 'Tahun 3', 'sectionData': [ {'title':'Bursa','type':'text','placeholder':'masukkan bursa','value':''}, {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''} ] }
    ],
  ])

  function handleBtnAddKomoditasNilaiUsaha() {
    setKomoditasNilaiUsaha([...komoditasNilaiUsaha,[
      { 'sectionTitle': '', 'sectionData': [ {'title':'Komoditas','type':'text','placeholder':'masukkan komoditas','value':''}, ] }, { 'sectionTitle': 'Tahun 1', 'sectionData': [ {'title':'Bursa','type':'text','placeholder':'masukkan bursa','value':''}, {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''} ] }, { 'sectionTitle': 'Tahun 2', 'sectionData': [ {'title':'Bursa','type':'text','placeholder':'masukkan bursa','value':''}, {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''} ] }, { 'sectionTitle': 'Tahun 3', 'sectionData': [ {'title':'Bursa','type':'text','placeholder':'masukkan bursa','value':''}, {'title':'Keterangan','type':'text','placeholder':'masukkan keterangan','value':''} ] }
    ]])
  }

  ////////////////////////// Jumlah karyawan yang menjadi anggota koperasi dari seluruh karyawan ////////////////////////////////

  const [karyawanAnggKoperasi, setKaryawanAnggKoperasi] = useState([
    [
      {'title':'Jumlah Anggota Koperasi','placeholder':'Jumlah','type':'text','value':'','isOpt':false},
      {'title':'Persentase (%)','placeholder':'Persentase','type':'text','value':'','isOpt':false},
      {'title':'Apabila tidak ada koperasi mengapa?','placeholder':'Jelaskan','type':'text','value':'','isOpt':true}
    ]
  ])

  ////////////////////////// Sarana Pendidikan ////////////////////////////////

  const [saranaPendidikan, setSaranaPendidikan] = useState([
    [
      { 'sectionTitle': 'Tingkat SD/Ibtidaiyah', 'sectionData': [ {'title':'Jarak','type':'text','placeholder':'masukkan jarak dalam km','value':''}, {'title':'Waktu Tempuh','type':'text','placeholder':'masukkan durasi waktu tempuh','value':''} ] }, { 'sectionTitle': 'Tingkat SLTP', 'sectionData': [ {'title':'Jarak','type':'text','placeholder':'masukkan jarak dalam km','value':''}, {'title':'Waktu Tempuh','type':'text','placeholder':'masukkan durasi waktu tempuh','value':''} ] }, { 'sectionTitle': 'Tingkat SLTA', 'sectionData': [ {'title':'Jarak','type':'text','placeholder':'masukkan jarak dalam km','value':''}, {'title':'Waktu Tempuh','type':'text','placeholder':'masukkan durasi waktu tempuh','value':''} ] }, { 'sectionTitle': 'Tingkat Perguruan Tinggi', 'sectionData': [ {'title':'Jarak','type':'text','placeholder':'masukkan jarak dalam km','value':''}, {'title':'Waktu Tempuh','type':'text','placeholder':'masukkan durasi waktu tempuh','value':''} ] },
    ],
  ])

  ////////////////////////// Penjualan 3 tahun terakhir sebelum penilaian usaha perkebunan saat ini ////////////////////////////////

  const [lokal, setLokal] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''} ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis produksi','type':'text','placeholder':'masukkan jenis produksi','value':''}, {'title':'vol tahun 1','type':'text','placeholder':'masukkan volume dalam satuan ku','value':''}, {'title':'nilai tahun 1','type':'text','placeholder':'masukkan nilai dalam satuan rupiah','value':''}, {'title':'vol tahun 2','type':'text','placeholder':'masukkan volume dalam satuan ku','value':''}, {'title':'nilai tahun 2','type':'text','placeholder':'masukkan nilai dalam satuan rupiah','value':''}, {'title':'vol tahun 3','type':'text','placeholder':'masukkan volume dalam satuan ku','value':''}, {'title':'nilai tahun 3','type':'text','placeholder':'masukkan nilai dalam satuan rupiah','value':''}, ] },
    ],
  ])

  function handleBtnAddLokal() {
    setLokal([...lokal,[
      { 'sectionTitle': '', 'sectionData': [ {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''} ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis produksi','type':'text','placeholder':'masukkan jenis produksi','value':''}, {'title':'vol tahun 1','type':'text','placeholder':'masukkan volume dalam satuan ku','value':''}, {'title':'nilai tahun 1','type':'text','placeholder':'masukkan nilai dalam satuan rupiah','value':''}, {'title':'vol tahun 2','type':'text','placeholder':'masukkan volume dalam satuan ku','value':''}, {'title':'nilai tahun 2','type':'text','placeholder':'masukkan nilai dalam satuan rupiah','value':''}, {'title':'vol tahun 3','type':'text','placeholder':'masukkan volume dalam satuan ku','value':''}, {'title':'nilai tahun 3','type':'text','placeholder':'masukkan nilai dalam satuan rupiah','value':''}, ] },
    ]])
  }

  const [ekspor, setEkspor] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''} ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis produksi','type':'text','placeholder':'masukkan jenis produksi','value':''}, {'title':'vol tahun 1','type':'text','placeholder':'masukkan volume dalam satuan ku','value':''}, {'title':'nilai tahun 1','type':'text','placeholder':'masukkan nilai dalam satuan rupiah','value':''}, {'title':'vol tahun 2','type':'text','placeholder':'masukkan volume dalam satuan ku','value':''}, {'title':'nilai tahun 2','type':'text','placeholder':'masukkan nilai dalam satuan rupiah','value':''}, {'title':'vol tahun 3','type':'text','placeholder':'masukkan volume dalam satuan ku','value':''}, {'title':'nilai tahun 3','type':'text','placeholder':'masukkan nilai dalam satuan rupiah','value':''}, ] },
    ],
  ])

  function handleBtnAddEkspor() {
    setEkspor([...ekspor,[
      { 'sectionTitle': '', 'sectionData': [ {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''} ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis produksi','type':'text','placeholder':'masukkan jenis produksi','value':''}, {'title':'vol tahun 1','type':'text','placeholder':'masukkan volume dalam satuan ku','value':''}, {'title':'nilai tahun 1','type':'text','placeholder':'masukkan nilai dalam satuan rupiah','value':''}, {'title':'vol tahun 2','type':'text','placeholder':'masukkan volume dalam satuan ku','value':''}, {'title':'nilai tahun 2','type':'text','placeholder':'masukkan nilai dalam satuan rupiah','value':''}, {'title':'vol tahun 3','type':'text','placeholder':'masukkan volume dalam satuan ku','value':''}, {'title':'nilai tahun 3','type':'text','placeholder':'masukkan nilai dalam satuan rupiah','value':''}, ] },
    ]])
  }

  ////////////////////////// Harga ////////////////////////////////

  const [harga, setHarga] = useState([
    [
      { 'sectionTitle': 'Komponen Harga Pokok (3 tahun terakhir)', 'sectionData': [ {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''} ] }, { 'sectionTitle': 'Biaya pemeliharaan tanaman', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }, { 'sectionTitle': 'Biaya Panen', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }, { 'sectionTitle': 'Biaya Angkut', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }, { 'sectionTitle': 'Biaya Olah', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }, { 'sectionTitle': 'Biaya Pemasaran', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }, { 'sectionTitle': 'Biaya Penyusutan', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }, { 'sectionTitle': 'Biaya Lain-Lain', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }
    ],
  ])

  function handleBtnAddHarga() {
    setHarga([...harga,[
      { 'sectionTitle': 'Komponen Harga Pokok (3 tahun terakhir)', 'sectionData': [ {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''} ] }, { 'sectionTitle': 'Biaya pemeliharaan tanaman', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }, { 'sectionTitle': 'Biaya Panen', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }, { 'sectionTitle': 'Biaya Angkut', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }, { 'sectionTitle': 'Biaya Olah', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }, { 'sectionTitle': 'Biaya Pemasaran', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }, { 'sectionTitle': 'Biaya Penyusutan', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }, { 'sectionTitle': 'Biaya Lain-Lain', 'sectionData': [ {'title':'tahun 1','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 2','type':'text','placeholder':'masukkan nominal','value':''}, {'title':'tahun 3','type':'text','placeholder':'masukkan nominal','value':''}, ] }
    ]])
  }

  ////////////////////////// Penjualan lokal ////////////////////////////////

  const [jualLokal, setJualLokal] = useState([
    [
      {'title':'Komoditas','placeholder':'masukkan komoditas','type':'text','value':'','isOpt':false},
      {'title':'Perusahaan > Konsumen (rumah tangga atau industri)','placeholder':'','type':'text','value':'','isOpt':true},
      {'title':'Perusahaan > Lembaga Perantara > Konsumen (rumah tangga atau industri)','placeholder':'','type':'text','value':'','isOpt':true},
      {'title':'Metode penjualan lokal lainnya','placeholder':'masukkan metode lainnya','type':'text','value':'','isOpt':false}
    ]
  ])

  function handleBtnAddJualLokal() {
    setJualLokal([...jualLokal,[
      {'title':'Komoditas','placeholder':'masukkan komoditas','type':'text','value':'','isOpt':false},
      {'title':'Perusahaan > Konsumen (rumah tangga atau industri)','placeholder':'','type':'text','value':'','isOpt':true},
      {'title':'Perusahaan > Lembaga Perantara > Konsumen (rumah tangga atau industri)','placeholder':'','type':'text','value':'','isOpt':true},
      {'title':'Metode penjualan lokal lainnya','placeholder':'masukkan metode lainnya','type':'text','value':'','isOpt':false}
    ]])
  }

  const [jualEkspor, setJualEkspor] = useState([
    [
      {'title':'Komoditas','placeholder':'masukkan komoditas','type':'text','value':'','isOpt':false},
      {'title':'Perusahaan > Konsumen (rumah tangga atau industri)','placeholder':'','type':'text','value':'','isOpt':true},
      {'title':'Perusahaan > Lembaga Perantara > Konsumen (rumah tangga atau industri)','placeholder':'','type':'text','value':'','isOpt':true},
      {'title':'Metode penjualan lokal lainnya','placeholder':'masukkan metode lainnya','type':'text','value':'','isOpt':false}
    ]
  ])

  function handleBtnAddJualEkspor() {
    setJualEkspor([...jualEkspor,[
      {'title':'Komoditas','placeholder':'masukkan komoditas','type':'text','value':'','isOpt':false},
      {'title':'Perusahaan > Konsumen (rumah tangga atau industri)','placeholder':'','type':'text','value':'','isOpt':true},
      {'title':'Perusahaan > Lembaga Perantara > Konsumen (rumah tangga atau industri)','placeholder':'','type':'text','value':'','isOpt':true},
      {'title':'Metode penjualan lokal lainnya','placeholder':'masukkan metode lainnya','type':'text','value':'','isOpt':false}
    ]])
  }

  ////////////////////////// Tujuan Penjualan Hasil ////////////////////////////////

  const [jualHasil, setJualHasil] = useState([
    [
      { 'sectionTitle': 'Tujuan Penjualan Hasil', 'sectionData': [ {'title':'Komoditas','type':'text','placeholder':'masukkan komoditas','value':''} ] }, { 'sectionTitle': 'Tahun 1', 'sectionData': [ {'title':'Tujuan Pasar Lokal','type':'text','placeholder':'masukkan provinsi tujuan','value':''}, {'title':'Tujuan Pasar Ekspor','type':'text','placeholder':'masukkan negara tujuan','value':''} ] }, { 'sectionTitle': 'Tahun 2', 'sectionData': [ {'title':'Tujuan Pasar Lokal','type':'text','placeholder':'masukkan provinsi tujuan','value':''}, {'title':'Tujuan Pasar Ekspor','type':'text','placeholder':'masukkan negara tujuan','value':''} ] }, { 'sectionTitle': 'Tahun 3', 'sectionData': [ {'title':'Tujuan Pasar Lokal','type':'text','placeholder':'masukkan provinsi tujuan','value':''}, {'title':'Tujuan Pasar Ekspor','type':'text','placeholder':'masukkan negara tujuan','value':''} ] }
    ]
  ])

  function handleBtnAddJualHasil() {
    setJualHasil([...jualHasil,[
      { 'sectionTitle': 'Tujuan Penjualan Hasil', 'sectionData': [ {'title':'Komoditas','type':'text','placeholder':'masukkan komoditas','value':''} ] }, { 'sectionTitle': 'Tahun 1', 'sectionData': [ {'title':'Tujuan Pasar Lokal','type':'text','placeholder':'masukkan provinsi tujuan','value':''}, {'title':'Tujuan Pasar Ekspor','type':'text','placeholder':'masukkan negara tujuan','value':''} ] }, { 'sectionTitle': 'Tahun 2', 'sectionData': [ {'title':'Tujuan Pasar Lokal','type':'text','placeholder':'masukkan provinsi tujuan','value':''}, {'title':'Tujuan Pasar Ekspor','type':'text','placeholder':'masukkan negara tujuan','value':''} ] }, { 'sectionTitle': 'Tahun 3', 'sectionData': [ {'title':'Tujuan Pasar Lokal','type':'text','placeholder':'masukkan provinsi tujuan','value':''}, {'title':'Tujuan Pasar Ekspor','type':'text','placeholder':'masukkan negara tujuan','value':''} ] }
    ]])
  }

  ////////////////////////// Lokasi Pemasaran yang menjadi Rujukan (Acuan Pasar) pada 3 tahun terakhir sebelum penilaian usaha perkebunan saat ini ////////////////////////////////

  const [lokasiPemasaran, setLokasiPemasaran] = useState([
    [
      {'title':'Komoditas','placeholder':'masukkan jenis komoditas','type':'text','value':'','isOpt':false}, {'title':'Tahun 1','placeholder':'YYY','type':'text','value':'','isOpt':false}, {'title':'Kota Rujukan','placeholder':'pilih satu atau lebih kota rujukan','type':'text','value':'','isOpt':true}, {'title':'Tahun 2','placeholder':'YYY','type':'text','value':'','isOpt':false}, {'title':'Kota Rujukan','placeholder':'pilih satu atau lebih kota rujukan','type':'text','value':'','isOpt':true}, {'title':'Tahun 3','placeholder':'YYY','type':'text','value':'','isOpt':false}, {'title':'Kota Rujukan','placeholder':'pilih satu atau lebih kota rujukan','type':'text','value':'','isOpt':true}
    ]
  ])

  function handleBtnAddLokasiPemasaran() {
    setLokasiPemasaran([...lokasiPemasaran,[
      {'title':'Komoditas','placeholder':'masukkan jenis komoditas','type':'text','value':'','isOpt':false}, {'title':'Tahun 1','placeholder':'YYY','type':'text','value':'','isOpt':false}, {'title':'Kota Rujukan','placeholder':'pilih satu atau lebih kota rujukan','type':'text','value':'','isOpt':true}, {'title':'Tahun 2','placeholder':'YYY','type':'text','value':'','isOpt':false}, {'title':'Kota Rujukan','placeholder':'pilih satu atau lebih kota rujukan','type':'text','value':'','isOpt':true}, {'title':'Tahun 3','placeholder':'YYY','type':'text','value':'','isOpt':false}, {'title':'Kota Rujukan','placeholder':'pilih satu atau lebih kota rujukan','type':'text','value':'','isOpt':true}
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
        {/* Tunjangan/Jaminan Kesehatan */}
        <div className={`${mng["base__formsection"]}`}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tunjangan/Jaminan Kesehatan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memberikan fasilitas pengobatan atau mengganti biaya kesehatan untuk Karyawan Tetap dan Karyawan Lepas?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="gantiKesehatanOpt"
                onClick={() => setGantiKesehatanOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="gantiKesehatanOpt"
                onClick={() => setGantiKesehatanOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {gantiKesehatanOpt == 'Iya' ? (
            <div className="mt-6">
            {
              jaminSehat.map((items, i) => (
                <div className={`${mng["base__formlabel"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <div className={`w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel"]} ${mng["base__formlabel_tri-custom"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, jaminSehat, setJaminSehat, i, ii, iii)}/>
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
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Keselamatan Kerja</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah ada ketentuan dan peraturan tertulis tentang keselamatan kerja di kebun/pabrik?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="keselamatanKerjaOpt"
                onClick={() => setKeselamatanKerjaOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="keselamatanKerjaOpt"
                onClick={() => setKeselamatanKerjaOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {keselamatanKerjaOpt == 'Ada' ? (
            <div className="mt-6">
              <div className="flex w-full items-center justify-between mb-3">
                <div>
                  <div className=" text-sm font-semibold">
                    Lampiran Peraturan Tertulis tentang Keselamatan Kerja
                  </div>
                  <div className="text-[11px] text-[#B3B3B3]">
                    Format dokumen: .jpg .jpeg .png
                  </div>
                </div>
                <InputFileButton />
              </div>

              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Apakah peraturan tersebut telah disosialisasikan kepada karyawan?</span>
                <div className="inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="keselamatanKerjaSosialisasikanOpt"
                    onClick={() => setKeselamatanKerjaSosialisasikanOpt('Sudah')}
                    label="Sudah"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="keselamatanKerjaSosialisasikanOpt"
                    onClick={() => setKeselamatanKerjaSosialisasikanOpt('Belum')}
                    label="Belum"
                  />
                </div>
              </label>

              <div className="flex w-full items-center justify-between mb-3">
                <div>
                  <div className=" text-sm font-semibold">
                    Lampiran Pamplet
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
            <span className={mng.base__inputtitle}>Apakah ada perlengkapan keselamatan kerja?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="perlengkapanKeselamatanKerjaOpt"
                onClick={() => setPerlengkapanKeselamatanKerjaOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="perlengkapanKeselamatanKerjaOpt"
                onClick={() => setPerlengkapanKeselamatanKerjaOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {perlengkapanKeselamatanKerjaOpt == 'Ada' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]}`}>
                <span className={mng.base__inputtitle}>Jenis perlengkapan</span>
                <input className={mng.base__inputbase} type='text' placeholder='masukkan jenis perlengkapan' value={perlengakapanSelamat} onChange={(e) => setPerlengakapanSelamat(e.target.value)}/>
              </label>
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perlengkapan keselamatan kerja itu digunakan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="perlengkapanDigunakanOpt"
                onClick={() => setPerlengkapanDigunakanOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="perlengkapanDigunakanOpt"
                onClick={() => setPerlengkapanDigunakanOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {perlengkapanDigunakanOpt == 'Ada' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]}`}>
                <span className={mng.base__inputtitle}>Jelaskan penggunaan perlengkapan keselamatan</span>
                <input className={mng.base__inputbase} type='text' placeholder='jelaskan' value={perlengakapanGunakan} onChange={(e) => setPerlengakapanGunakan(e.target.value)}/>
              </label>
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah ada pelatihan keselamatan kerja?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelatihanSelamatOpt"
                onClick={() => setPelatihanSelamatOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelatihanSelamatOpt"
                onClick={() => setPelatihanSelamatOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {pelatihanSelamatOpt == 'Ada' ? (
            <div className="mt-6">
              <div className="flex w-full items-center justify-between mb-3">
                <div>
                  <div className=" text-sm font-semibold">
                    Lampiran Rekaman pelatihan keselamatan kerja
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
            <span className={mng.base__inputtitle}>Apakah ada rekaman kecelakaan kerja yang terjadi selama 3 tahun terakhir?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="rekamanCelakaOpt"
                onClick={() => setRekamanCelakaOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="rekamanCelakaOpt"
                onClick={() => setRekamanCelakaOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Jaminan Sosial Tenaga Kerja</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah karyawan di perusahaan Saudara diikutsertakan dalam program Jaminan Sosial Tenaga Kerja?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="jaminanSosialOpt"
                onClick={() => setJaminanSosialOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="jaminanSosialOpt"
                onClick={() => setJaminanSosialOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {jaminanSosialOpt == 'Iya' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]}`}>
                <InputForm
                  titleForm='Jenis Jamsostek yang diikuti'
                  titleName='Jenis Jamsostek yang diikuti'
                  onChange={(e) => setJenisJamsostek(e.target.value)}
                  type="text"
                  placeholder='pilih jenis jamsostek'
                  className={`${
                    isError && 'border-primary-red-1 bg-primary-red-2'
                  }`}
                  selectionArea={true}
                />
              </label>
              {
                jmlKaryawanJmsostek.map((items, i) => (
                  <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                    {
                      items.map((item,ii) => (
                        <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                          <span className={mng.base__inputtitle}>{item.title}</span>
                          <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, jmlKaryawanJmsostek, setJmlKaryawanJmsostek, i, ii)}/>
                        </label>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          ) : (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]}`}>
                <span className={mng.base__inputtitle}>Apabila tidak, jelaskan alasannya!</span>
                <textarea className={`${mng["base__inputbase"]} min-h-[140px]`} type="text" rows="20" placeholder="Tulis alasan" value={tidakJamsostek} onChange={(e) => setTidakJamsostek(e.target.value)}></textarea>
              </label>
            </div>
          )}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Fasilitas Perumahan/Penggantian Biaya Perumahan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan menyediakan perumahan atau mengganti biaya sewa/kontrak rumah? </span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="biayaSewaOpt"
                onClick={() => setBiayaSewaOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="biayaSewaOpt"
                onClick={() => setBiayaSewaOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {biayaSewaOpt == 'Iya' ? (
            <div className="mt-6">
            {
              jmlKaryawanFasilitas.map((items, i) => (
                <div className={`${mng["base__formlabel_tri"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                        <span className={mng.base__inputtitle}>{item.title}</span>
                        <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, jmlKaryawanFasilitas, setJmlKaryawanFasilitas, i, ii)}/>
                      </label>
                    ))
                  }
                </div>
              ))
            }
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pemberian bonus kepada karyawan 3 tahun terakhir sebelum klasifikasi saat ini</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah peruusahaan memberikan bonus pada karyawan secara teratur?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bonusOpt"
                onClick={() => setBonusOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bonusOpt"
                onClick={() => setBonusOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {bonusOpt == 'Iya' ? (
            <div className="mt-6">
              <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
                <div className="flex items-center">
                  <img src="/icon/info-circle.svg" className="w-6" />
                  <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                    Perhatian!
                  </div>
                </div>
                <div className="px-8 text-xs">
                  Nominal diisi dengan {'<'} satu bulan gaji, dua bulan gaji atau {'>'} dua bulan gaji
                </div>
              </div>
              <span className={`${mng["base__inputtitle"]} text-base font-normal pt-6 pb-3`}>Karyawan</span>
              {
                bonusKaryawan.map((items, i) => (
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
                                <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, bonusKaryawan, setBonusKaryawan, i, ii, iii)}/>
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
              <span className={`${mng["base__inputtitle"]} text-base font-normal pt-6 pb-3`}>Harian Lepas </span>
              {
                bonusKaryawanHarian.map((items, i) => (
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
                                <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, bonusKaryawanHarian, setBonusKaryawanHarian, i, ii, iii)}/>
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
            ) : <></>}

        </div>

        {/* Koperasi Karyawan */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Koperasi Karyawan</span>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah di kebun Saudara ada koperasi karyawan yang sudah berbadan hukum? </span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="koperasiBdnHukumOpt"
                onClick={() => setKoperasiBdnHukumOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="koperasiBdnHukumOpt"
                onClick={() => setKoperasiBdnHukumOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {koperasiBdnHukumOpt == 'Iya' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]}`}>
                <InputForm
                  titleForm='Jenis usaha koperasi yang sudah dilaksanakan'
                  titleName='Jenis usaha koperasi yang sudah dilaksanakan'
                  onChange={(e) => setUsahaKoperasiDilaksanakan(e.target.value)}
                  type="text"
                  placeholder='pilih jenis jamsostek'
                  className={`${
                    isError && 'border-primary-red-1 bg-primary-red-2'
                  }`}
                  selectionArea={true}
                />
              </label>

              <label className={mng.base__formlabel}>
                <span className={mng.base__inputtitle}>Apakah kepengurusan dan pengelolaan koperasi sesuai dengan ketentuan yang berlaku?</span>
                <div className="inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="koperasiSesuaiOpt"
                    onClick={() => setKoperasiSesuaiOpt('Iya')}
                    label="Iya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="koperasiSesuaiOpt"
                    onClick={() => setKoperasiSesuaiOpt('Tidak')}
                    label="Tidak"
                  />
                </div>
              </label>
              {koperasiSesuaiOpt == 'Tidak' ? (
                <div className="mt-6">
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
                    <span className={mng.base__inputtitle}>Apabila tidak ada koperasi mengapa?</span>
                    <textarea className={`${mng["base__inputbase"]} min-h-[140px]`} type="text" rows="20" placeholder="Tulis alasan" value={alasanTidakKoperasi} onChange={(e) => setAlasanTidakKoperasi(e.target.value)}></textarea>
                  </label>
                </div>
              ) : <></>}
            </div>
          ) : <></>}

          <div className="flex flex-col mt-4">
            {
              karyawanAnggKoperasi.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <>
                        {
                          item.isOpt ? (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                              <span className={mng.base__inputtitle}>{item.title}</span>
                              <textarea className={`${mng["base__inputbase"]} min-h-[140px]`} type={item.type} rows="20" placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, karyawanAnggKoperasi, setKaryawanAnggKoperasi, i, ii)}></textarea>
                            </label>
                          ) : (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                              <span className={mng.base__inputtitle}>{item.title}</span>
                              <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, karyawanAnggKoperasi, setKaryawanAnggKoperasi, i, ii)}/>
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

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Penjualan saham perusahaan kepada koperasi karyawan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah ada saham perusahaan yang dijual atau dihibahkan kepada koperasi?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="hibahJualSahamOpt"
                onClick={() => setHibahJualSahamOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="hibahJualSahamOpt"
                onClick={() => setHibahJualSahamOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Penjualan saham perusahaan kepada karyawan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah ada saham perusahaan yang dijual atau dihibahkan kepada koperasi?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="asetDigunakanOpt"
                onClick={() => setAsetDigunakanOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="asetDigunakanOpt"
                onClick={() => setAsetDigunakanOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {asetDigunakanOpt == 'Ada' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]}`}>
                <span className={mng.base__inputtitle}>Jenis Aset</span>
                <input className={mng.base__inputbase} type='text' placeholder='sebutkan jenis aset' value={jenisAset} onChange={(e) => setJenisAset(e.target.value)}/>
              </label>
            </div>
          ) : <></>}

        </div>

        {/* Organisasi Karyawan */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Organisasi Karyawan</span>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan Saudara sudah terbentuk organisasi karyawan seperti SPSI, PERKAPEN, SBSI atau lainnya?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="orgKaryawanOpt"
                onClick={() => setOrgKaryawanOpt('Sudah')}
                label="Sudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="orgKaryawanOpt"
                onClick={() => setOrgKaryawanOpt('Belum')}
                label="Belum"
              />
            </div>
          </label>
          {orgKaryawanOpt == 'Sudah' ? (
            <div className="mt-6">
            {
              orgKaryawan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
                  {
                    items.map((item,ii) => (
                      <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                        <span className={mng.base__inputtitle}>{item.title}</span>
                        <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, orgKaryawan, setOrgKaryawan, i, ii)}/>
                      </label>
                    ))
                  }
                </div>
              ))
            }
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah Kesepakatan Kerja Bersama (KKB) sudah terbentuk?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kesepakatanKerjaOpt"
                onClick={() => setKesepakatanKerjaOpt('Sudah')}
                label="Sudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kesepakatanKerjaOpt"
                onClick={() => setKesepakatanKerjaOpt('Belum')}
                label="Belum"
              />
            </div>
          </label>
          {kesepakatanKerjaOpt == 'Sudah' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]}`}>
                <span className={mng.base__inputtitle}>Jelaskan pelaksanaan Kesepakatan Kerja Bersama</span>
                <textarea className={`${mng["base__inputbase"]} min-h-[140px]`} type="text" rows="20" placeholder="Jelaskan" value={kesepakatanKerja} onChange={(e) => setKesepakatanKerja(e.target.value)}></textarea>
              </label>
            </div>
          ) : <></>}
        </div>

        {/* Fasilitas Sosial untuk Karyawan */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Fasilitas Sosial untuk Karyawan</span>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Kesehatan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan menyediakan sarana kesehatan untuk karyawan seperti rumah sakit/poliklinik?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="poliklinikOpt"
                onClick={() => setPoliklinikOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="poliklinikOpt"
                onClick={() => setPoliklinikOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan menyediakan tenaga medis seperti dokter, bidan, mantri kesehatan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="tenagaMedisOpt"
                onClick={() => setTenagaMedisOpt('Ada')}
                label="Ada"
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


          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Sarana Pendidikan</p>
          <div className="flex flex-col mt-4">
          {
            saranaPendidikan.map((items, i) => (
              <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <div className={`w-full`} key={ii}>
                      <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                      <div className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin"]} w-full`}>
                      {
                        item.sectionData.map((child,iii) => (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                            <span className={mng.base__inputtitle}>{child.title}</span>
                            <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, saranaPendidikan, setSaranaPendidikan, i, ii, iii)}/>
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
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memberikan tunjangan/biaya pendidikan?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="tunjanganPendidikanOpt"
                onClick={() => setTunjanganPendidikanOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="tunjanganPendidikanOpt"
                onClick={() => setTunjanganPendidikanOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>


          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Rumah Ibadah</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah di lokasi kebun atau sekitar kebun yang terjangkau terdapat rumah ibadah?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="rumahIbadahOpt"
                onClick={() => setRumahIbadahOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="rumahIbadahOpt"
                onClick={() => setRumahIbadahOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {rumahIbadahOpt == 'Ada' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]}`}>
                <span className={mng.base__inputtitle}>Jenis Rumah Ibadah</span>
                <input className={mng.base__inputbase} type='text' placeholder='masukkan jenis rumah ibadah' value={jenisRumahIbadah} onChange={(e) => setJenisRumahIbadah(e.target.value)}/>
              </label>
            </div>
          ) : <></>}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Fasilitas Olahraga dan Hiburan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah di lokasi kebun tersedia fasilitas olahraga?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="fasilitasOlahragaOpt"
                onClick={() => setFasilitasOlahragaOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="fasilitasOlahragaOpt"
                onClick={() => setFasilitasOlahragaOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {fasilitasOlahragaOpt == 'Ada' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]}`}>
                <span className={mng.base__inputtitle}>Jenis Fasilitas Olahraga</span>
                <input className={mng.base__inputbase} type='text' placeholder='masukkan jenis fasilitas olahraga' value={jenisFasilitasOlahraga} onChange={(e) => setJenisFasilitasOlahraga(e.target.value)}/>
              </label>
            </div>
          ) : <></>}

          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah di lokasi kebun tersedia fasilitas hiburan/rekreasi?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="fasilitasHiburanOpt"
                onClick={() => setFasilitasHiburanOpt('Ada')}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="fasilitasHiburanOpt"
                onClick={() => setFasilitasHiburanOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {fasilitasHiburanOpt == 'Ada' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]}`}>
                <span className={mng.base__inputtitle}>Jenis Fasilitas Hiburan</span>
                <input className={mng.base__inputbase} type='text' placeholder='masukkan jenis fasilitas hiburan' value={jenisFasilitasHiburan} onChange={(e) => setJenisFasilitasHiburan(e.target.value)}/>
              </label>
            </div>
          ) : <></>}

        </div>

        {/* Manajemen Pemasaran */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Manajemen Pemasaran</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Penjualan 3 tahun terakhir sebelum penilaian usaha perkebunan saat ini</p>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Lokal</p>
          <div className="flex flex-col mt-4">
            {
              lokal.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, lokal, setLokal)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstFormFull"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, lokal, setLokal, i, ii, iii)}/>
                            </label>
                          ))
                        }
                        </div>
                      </div>
                    ))
                  }

                  <div className={`${mng["base__btn"]}`} onClick={handleBtnAddLokal}>
                    + Tambah Komoditas Lokal
                  </div>
                </div>
              ))
            }
          </div>
          <div className={`${mng["base__btn"]} mt-4`} onClick={handleBtnAddLokal}>
            + Tambah Jenis Produksi Lokal
          </div>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Ekspor</p>
          <div className="flex flex-col mt-4">
            {
              ekspor.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, ekspor, setEkspor)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstFormFull"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, ekspor, setEkspor, i, ii, iii)}/>
                            </label>
                          ))
                        }
                        </div>
                      </div>
                    ))
                  }

                  <div className={`${mng["base__btn"]}`} onClick={handleBtnAddEkspor}>
                    + Tambah Komoditas Ekspor
                  </div>
                </div>
              ))
            }
          </div>
          <div className={`${mng["base__btn"]} mt-4`} onClick={handleBtnAddEkspor}>
            + Tambah Jenis Produksi Ekspor
          </div>


          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Harga</p>
          <div className="flex flex-col mt-4">
            {
              harga.map((items, i) => (
                <div className={`${mng["base__formlabel_tri"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, harga, setHarga)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_tri-firstSecFormFull"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, harga, setHarga, i, ii, iii)}/>
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
          <div className={`${mng["base__btn"]} mt-4`} onClick={handleBtnAddHarga}>
            + Tambah Komoditas
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Proses Penentuan Harga Jual Produk</p>
          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
            <span className={mng.base__inputtitle}>Penjelasan</span>
            <textarea className={`${mng["base__inputbase"]} min-h-[140px]`} type="text" rows="20" placeholder="Jelaskan" value={penentuanHargaJualProd} onChange={(e) => setPenentuanHargaJualProd(e.target.value)}></textarea>
          </label>


          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Saluran Pemasaran</p>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Penjualan lokal</p>
          <div className="flex flex-col mt-4">
            {
              jualLokal.map((items, i) => (
                <div className={`${mng["base__formlabel_single"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, jualLokal, setJualLokal)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <>
                      {
                        item.isOpt ? (
                          <label className={mng.base__formlabel}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <div className="inline-flex items-center">
                              <InputForm
                                radioButton={item.title}
                                radioName={item.title}
                                onClick={(e) => formRegularChange(e, jualLokal, setJualLokal, i, ii)}
                                label="Ada"
                              />
                            </div>
                            <div className="mx-10 inline-flex items-center">
                              <InputForm
                                radioButton={item.title}
                                radioName={item.title}
                                onClick={(e) => formRegularChange(e, jualLokal, setJualLokal, i, ii)}
                                label="Tidak"
                              />
                            </div>
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, jualLokal, setJualLokal, i, ii)}/>
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
          <div className={`${mng["base__btn"]} mt-4`} onClick={handleBtnAddJualLokal}>
            + Tambah Komoditas Lokal
          </div>


          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Penjualan Ekspor</p>
          <div className="flex flex-col mt-4">
            {
              jualEkspor.map((items, i) => (
                <div className={`${mng["base__formlabel_single"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, jualEkspor, setJualEkspor)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <>
                      {
                        item.isOpt ? (
                          <label className={mng.base__formlabel}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <div className="inline-flex items-center">
                              <InputForm
                                radioButton={item.title}
                                radioName={item.title}
                                onClick={(e) => formRegularChange(e, jualEkspor, setJualEkspor, i, ii)}
                                label="Ada"
                              />
                            </div>
                            <div className="mx-10 inline-flex items-center">
                              <InputForm
                                radioButton={item.title}
                                radioName={item.title}
                                onClick={(e) => formRegularChange(e, jualEkspor, setJualEkspor, i, ii)}
                                label="Tidak"
                              />
                            </div>
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, jualEkspor, setJualEkspor, i, ii)}/>
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
          <div className={`${mng["base__btn"]} mt-4`} onClick={handleBtnAddJualEkspor}>
            + Tambah Komoditas Ekspor
          </div>

          <div className="flex flex-col mt-4">
            {
              jualHasil.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, jualHasil, setJualHasil)}>
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
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, jualHasil, setJualHasil, i, ii, iii)}/>
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
          <div className={`${mng["base__btn"]} mt-4`} onClick={handleBtnAddJualHasil}>
            + Tambah Komoditas
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Lokasi Pemasaran yang menjadi Rujukan (Acuan Pasar) pada 3 tahun terakhir sebelum penilaian usaha perkebunan saat ini</p>
          <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              pilih satu atau lebih kota rujukan pada kolom
            </div>
          </div>
          <div className="flex flex-col mt-4">
            {
              lokasiPemasaran.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, lokasiPemasaran, setLokasiPemasaran)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <>
                        {
                          item.isOpt ? (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                              <InputForm
                                titleForm={item.title}
                                titleName={item.title}
                                onChange={(e) => formRegularChange(e, lokasiPemasaran, setLokasiPemasaran, i, ii)}
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
                              <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, lokasiPemasaran, setLokasiPemasaran, i, ii)}/>
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
          <div className={`${mng["base__btn"]} mt-4`} onClick={handleBtnAddLokasiPemasaran}>
            + Tambah Komoditas
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Bentuk pemasaran yang dilaksanakan</p>
          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
            <InputForm
              titleForm='Bentuk pemasaran'
              titleName='Bentuk pemasaran'
              onChange={(e) => setBentukPemasaran(e.target.value)}
              type="text"
              placeholder='pilih yang sesuai'
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              }`}
              selectionArea={true}
            />
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pasar Bursa 3 tahun terakhir sebelum penilaian usaha perkebunan saat ini</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan terjun ke bursa (pasar berjangka) komoditas?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bursaOpt"
                onClick={() => setBursaOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bursaOpt"
                onClick={() => setBursaOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {bursaOpt == 'Iya' ? (
            <div className="mt-6">
              <div className="flex flex-col mt-4">
                {
                  komoditasNilaiUsaha.map((items, i) => (
                    <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                      {
                        i > 0 ?
                        <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, komoditasNilaiUsaha, setKomoditasNilaiUsaha)}>
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
                                  <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, komoditasNilaiUsaha, setKomoditasNilaiUsaha, i, ii, iii)}/>
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
              <div className={`${mng["base__btn"]} mt-4`} onClick={handleBtnAddKomoditasNilaiUsaha}>
                + Tambah data Komoditas
              </div>
            </div>
          ) : <></>}


          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Promosi</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan memiliki sistem promosi?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemPromosiOpt"
                onClick={() => setSistemPromosiOpt('Iya')}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemPromosiOpt"
                onClick={() => setSistemPromosiOpt('Tidak')}
                label="Tidak"
              />
            </div>
          </label>
          {sistemPromosiOpt == 'Iya' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`}>
                <span className={mng.base__inputtitle}>Jelaskan</span>
                <textarea className={`${mng["base__inputbase"]} min-h-[140px]`} type="text" rows="20" placeholder="jelaskan sistem promosi yang ada" value={sistemPromosi} onChange={(e) => setSistemPromosi(e.target.value)}></textarea>
              </label>
            </div>
          ):<></>}
        </div>

      </form>

    </>
  );
};
export default FormManajemenStep3;
