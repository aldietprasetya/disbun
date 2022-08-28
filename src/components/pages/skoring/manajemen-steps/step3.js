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

const FormManajemenStep3 = () => {
  const [isError, setIsError] = useState(false);

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState([])

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
      {
        'sectionTitle': '',
        'sectionData': [{
          'title': 'Komoditas',
          'type': 'text',
          'placeholder': 'masukkan jenis komoditas',
          'value': ''
        }]
      }, {
        'sectionTitle': '',
        'sectionData': [
          {
            'title': 'Jenis produksi',
            'type': 'text',
            'placeholder': 'masukkan jenis produksi',
            'value': ''
          }, {
            'title': 'vol tahun 1',
            'type': 'text',
            'placeholder': 'masukkan volume dalam satuan ku',
            'value': ''
          }, {
            'title': 'nilai tahun 1',
            'type': 'text',
            'placeholder': 'masukkan nilai dalam satuan rupiah',
            'value': ''
          }, {
            'title': 'vol tahun 2',
            'type': 'text',
            'placeholder': 'masukkan volume dalam satuan ku',
            'value': ''
          }, {
            'title': 'nilai tahun 2',
            'type': 'text',
            'placeholder': 'masukkan nilai dalam satuan rupiah',
            'value': ''
          }, {
            'title': 'vol tahun 3',
            'type': 'text',
            'placeholder': 'masukkan volume dalam satuan ku',
            'value': ''
          }, {
            'title': 'nilai tahun 3',
            'type': 'text',
            'placeholder': 'masukkan nilai dalam satuan rupiah',
            'value': ''
          },
        ]
      },
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

  useEffect(() => {
    if (initialLoad) {
      localStorage.removeItem("mnjPart3Nilai");
      let retrievedObject = JSON.parse(localStorage.getItem('mnjPart3NilaiReport'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
          "jaminSehat": [],
          "formJmlKaryawanFasilitas": [],
          "orgKaryawan": [],
          "jmlKaryawanJmsostek": [],
          "bonusKaryawan": [],
          "bonusKaryawanHarian": [],
          "saranaPendidikan": [],

          "localDistribution": [],
          "exportDistribution": [],
          "sellingDestination": [],
          "sellingLocation": [],
          "marketingManagement": [],
          "localSelling": [],
          "exportSelling": [],
          "pricing": [],
        }

        setTimeout(() => {

          retrievedObject.pricing.forEach((dt,index) => {
            const formstr = _.cloneDeep(harga)
            formstr.forEach((dtFrm, i) => {
              dtFrm[0].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.comodity
              })
              dtFrm[1].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.details[0].firstCost
                arr[1].value = dt.details[0].secondCost
                arr[2].value = dt.details[0].thirdCost
              })
              dtFrm[2].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.details[1].firstCost
                arr[1].value = dt.details[1].secondCost
                arr[2].value = dt.details[1].thirdCost
              })
              dtFrm[3].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.details[2].firstCost
                arr[1].value = dt.details[2].secondCost
                arr[2].value = dt.details[2].thirdCost
              })
              dtFrm[4].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.details[3].firstCost
                arr[1].value = dt.details[3].secondCost
                arr[2].value = dt.details[3].thirdCost
              })
              dtFrm[5].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.details[4].firstCost
                arr[1].value = dt.details[4].secondCost
                arr[2].value = dt.details[4].thirdCost
              })
              dtFrm[6].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.details[5].firstCost
                arr[1].value = dt.details[5].secondCost
                arr[2].value = dt.details[5].thirdCost
              })
              dtFrm[7].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.details[6].firstCost
                arr[1].value = dt.details[6].secondCost
                arr[2].value = dt.details[6].thirdCost
              })
              replicateData.pricing.push(dtFrm)
            })
          })

          retrievedObject.exportSelling.forEach((dt,index) => {
            const formstr = _.cloneDeep(ekspor)
            formstr.forEach((dtFrm, i) => {
              dtFrm[0].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.comodity
              })
              dtFrm[1].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.details[0].productionType
                arr[1].value = dt.details[0].firstVolume
                arr[2].value = dt.details[0].firstValue
                arr[3].value = dt.details[0].secondVolume
                arr[4].value = dt.details[0].secondValue
                arr[5].value = dt.details[0].thirdVolume
                arr[6].value = dt.details[0].thirdValue
              })
              replicateData.exportSelling.push(dtFrm)
            })
          })

          retrievedObject.localSelling.forEach((dt,index) => {
            const formstr = _.cloneDeep(lokal)
            formstr.forEach((dtFrm, i) => {
              dtFrm[0].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.comodity
              })
              dtFrm[1].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.details[0].productionType
                arr[1].value = dt.details[0].firstVolume
                arr[2].value = dt.details[0].firstValue
                arr[3].value = dt.details[0].secondVolume
                arr[4].value = dt.details[0].secondValue
                arr[5].value = dt.details[0].thirdVolume
                arr[6].value = dt.details[0].thirdValue
              })
              replicateData.localSelling.push(dtFrm)
            })
          })

          retrievedObject.marketingManagement.forEach((dt,index) => {
            const formstr = _.cloneDeep(komoditasNilaiUsaha)
            formstr.forEach((dtFrm, i) => {
              dtFrm[0].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.comodity
              })
              dtFrm[1].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.firstExchange
                arr[1].value = dt.firstDescription
              })
              dtFrm[2].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.secondExchange
                arr[1].value = dt.secondDescription
              })
              dtFrm[3].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.thirdExchange
                arr[1].value = dt.thirdDescription
              })
              replicateData.marketingManagement.push(dtFrm)
            })
          })

          retrievedObject.sellingDestination.forEach((dt,index) => {
            const formstr = _.cloneDeep(jualHasil)
            formstr.forEach((dtFrm, i) => {
              dtFrm[0].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.comodity
              })
              dtFrm[1].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.firstLocalDestionation
                arr[1].value = dt.firstExportDestionation
              })
              dtFrm[2].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.secondLocalDestionation
                arr[1].value = dt.secondExportDestionation
              })
              dtFrm[3].sectionData.forEach((secData, ii, arr) => {
                arr[0].value = dt.thirdLocalDestionation
                arr[1].value = dt.thirdExportDestionation
              })
              replicateData.sellingDestination.push(dtFrm)
            })
          })

          retrievedObject.sellingLocation.forEach((e,index) => {
            const formstr = _.cloneDeep(lokasiPemasaran)
            formstr.forEach((dtFrm, i) => {
              dtFrm[0].value = e.comodity
              dtFrm[1].value = e.firstYear
              dtFrm[2].value = e.firstYearCityId
              dtFrm[3].value = e.secondYear
              dtFrm[4].value = e.secondYearCityId
              dtFrm[5].value = e.thirdYear
              dtFrm[6].value = e.thirdYearCityId
              replicateData.sellingLocation.push(dtFrm)
            })
          })

          retrievedObject.exportDistribution.forEach((e, i) => {
            const formstr = _.cloneDeep(jualEkspor)
            formstr.forEach((dtFrm, i) => {
              dtFrm[0].value = e.comodity
              dtFrm[1].value = e.enterprise_customer
              dtFrm[2].value = e.enterprise_agency_customer
              dtFrm[3].value = e.anotherMethod
              replicateData.exportDistribution.push(dtFrm)
            })
          })

          retrievedObject.localDistribution.forEach((e, i) => {
            const formstr = _.cloneDeep(jualLokal)
            formstr.forEach((dtFrm, i) => {
              dtFrm[0].value = e.comodity
              dtFrm[1].value = e.enterprise_customer
              dtFrm[2].value = e.enterprise_agency_customer
              dtFrm[3].value = e.anotherMethod
              replicateData.localDistribution.push(dtFrm)
            })
          })

          const formSaranaPendidikan = _.cloneDeep(saranaPendidikan)
          formSaranaPendidikan.forEach((dtFrm, i) => {
            dtFrm[0].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = retrievedObject.employeeFacility.sdDistance
              arr[1].value = retrievedObject.employeeFacility.sdTravelTime
            })
            dtFrm[1].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = retrievedObject.employeeFacility.sltpDistance
              arr[1].value = retrievedObject.employeeFacility.sltpTravelTime
            })
            dtFrm[2].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = retrievedObject.employeeFacility.sltaDistance
              arr[1].value = retrievedObject.employeeFacility.sltaTravelTime
            })
            dtFrm[3].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = retrievedObject.employeeFacility.collegeDistance
              arr[1].value = retrievedObject.employeeFacility.collegeTravelTime
            })
            replicateData.saranaPendidikan.push(dtFrm)
          })

          const formBonusKaryawanHarian = _.cloneDeep(bonusKaryawanHarian)
          formBonusKaryawanHarian.forEach((dtFrm, i) => {
            dtFrm[0].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = retrievedObject.bonus.details[0].bonusNominal
              arr[1].value = retrievedObject.bonus.details[0].bonusRecipentPercentage
              arr[2].value = retrievedObject.bonus.details[0].thrNominal
              arr[3].value = retrievedObject.bonus.details[0].thrRecipentPercentage
            })
            dtFrm[1].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = retrievedObject.bonus.details[1].bonusNominal
              arr[1].value = retrievedObject.bonus.details[1].bonusRecipentPercentage
              arr[2].value = retrievedObject.bonus.details[1].thrNominal
              arr[3].value = retrievedObject.bonus.details[1].thrRecipentPercentage
            })
            dtFrm[2].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = retrievedObject.bonus.details[2].bonusNominal
              arr[1].value = retrievedObject.bonus.details[2].bonusRecipentPercentage
              arr[2].value = retrievedObject.bonus.details[2].thrNominal
              arr[3].value = retrievedObject.bonus.details[2].thrRecipentPercentage
            })
            replicateData.bonusKaryawanHarian.push(dtFrm)
          })

          const formBonusKaryawan = _.cloneDeep(bonusKaryawan)
          formBonusKaryawan.forEach((dtFrm, i) => {
            dtFrm[0].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = retrievedObject.bonus.details[0].bonusNominal
              arr[1].value = retrievedObject.bonus.details[0].bonusRecipentPercentage
              arr[2].value = retrievedObject.bonus.details[0].thrNominal
              arr[3].value = retrievedObject.bonus.details[0].thrRecipentPercentage
            })
            dtFrm[1].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = retrievedObject.bonus.details[1].bonusNominal
              arr[1].value = retrievedObject.bonus.details[1].bonusRecipentPercentage
              arr[2].value = retrievedObject.bonus.details[1].thrNominal
              arr[3].value = retrievedObject.bonus.details[1].thrRecipentPercentage
            })
            dtFrm[2].sectionData.forEach((secData, ii, arr) => {
              arr[0].value = retrievedObject.bonus.details[2].bonusNominal
              arr[1].value = retrievedObject.bonus.details[2].bonusRecipentPercentage
              arr[2].value = retrievedObject.bonus.details[2].thrNominal
              arr[3].value = retrievedObject.bonus.details[2].thrRecipentPercentage
            })
            replicateData.bonusKaryawan.push(dtFrm)
          })

          const formJmlKaryawanJmsostek = _.cloneDeep(jmlKaryawanJmsostek)
          formJmlKaryawanJmsostek.forEach((dtFrm, i) => {
            dtFrm[0].value = retrievedObject.employeeCooperative.empolyeeCount
            dtFrm[1].value = retrievedObject.employeeCooperative.employeePercentage
            replicateData.jmlKaryawanJmsostek.push(dtFrm)
          })

          const formOrgKaryawan = _.cloneDeep(orgKaryawan)
          formOrgKaryawan.forEach((dtFrm, i) => {
            dtFrm[0].value = retrievedObject.employeeOrganization.organizationName
            dtFrm[1].value = retrievedObject.employeeOrganization.activity
            replicateData.orgKaryawan.push(dtFrm)
          })

          const formJaminSehat = _.cloneDeep(jaminSehat)
          formJaminSehat.forEach((dtFrm, i) => {
            dtFrm[0].sectionData[0].value = retrievedObject.healthBenefit.permanentEmployeeReimbursement
            dtFrm[1].sectionData[0].value = retrievedObject.healthBenefit.contractEmployeeReimbursement
            replicateData.jaminSehat.push(dtFrm)
          })

          const formJmlKaryawanFasilitas = _.cloneDeep(jmlKaryawanFasilitas)
          formJmlKaryawanFasilitas.forEach((dtFrm, i) => {
            dtFrm[0].value = retrievedObject.housingBenefit.employeePercentage
            dtFrm[1].value = retrievedObject.housingBenefit.housingPercentage
            dtFrm[2].value = retrievedObject.housingBenefit.reimbursementPercentage
            replicateData.formJmlKaryawanFasilitas.push(dtFrm)
          })


          setJmlKaryawanFasilitas(replicateData.formJmlKaryawanFasilitas)
          setJaminSehat(replicateData.jaminSehat)
          setOrgKaryawan(replicateData.orgKaryawan)
          setJmlKaryawanJmsostek(replicateData.jmlKaryawanJmsostek)
          setBonusKaryawan(replicateData.bonusKaryawan)
          setBonusKaryawanHarian(replicateData.bonusKaryawanHarian)
          setSaranaPendidikan(replicateData.saranaPendidikan)

          setJualLokal(replicateData.localDistribution)
          setJualEkspor(replicateData.exportDistribution)

          setLokasiPemasaran(replicateData.sellingLocation)
          setJualHasil(replicateData.sellingDestination)

          setKomoditasNilaiUsaha(replicateData.marketingManagement)
          setLokal(replicateData.localSelling)
          setEkspor(replicateData.exportSelling)
          setHarga(replicateData.pricing)

          setPerlengakapanSelamat(retrievedObject.healthBenefit.safetyEquipmentType)
          setPerlengakapanGunakan(retrievedObject.healthBenefit.hasSafetyTraining)

          setJenisJamsostek(retrievedObject.healthBenefit.jamsostekType)

          setUsahaKoperasiDilaksanakan(retrievedObject.employeeCooperative.usahaKoperasiDilaksanakan)
          setAlasanTidakKoperasi(retrievedObject.employeeCooperative.reason)

          setJenisAset(retrievedObject.employeeCooperative.assetType)

          setKesepakatanKerja(retrievedObject.employeeOrganization.kkbActivity)

          setJenisRumahIbadah(retrievedObject.employeeOrganization.worshipPlaceType)

          setJenisFasilitasOlahraga(retrievedObject.employeeOrganization.sportFacilityType)
          setJenisFasilitasHiburan(retrievedObject.employeeOrganization.entertainmentFacilityType)

          setSistemPromosi(retrievedObject.promotion.description)

          setGantiKesehatanOpt(retrievedObject.healthBenefit.hasReimbursement)

          setKeselamatanKerjaOpt(retrievedObject.healthBenefit.hasWrittenTerm)
          setKeselamatanKerjaSosialisasikanOpt(retrievedObject.healthBenefit.isTermSocialized)
          setPerlengkapanKeselamatanKerjaOpt(retrievedObject.healthBenefit.hasSafetyEquipment)
          setPerlengkapanDigunakanOpt(retrievedObject.healthBenefit.isSafetyEquipmentUsed)
          setPelatihanSelamatOpt(retrievedObject.healthBenefit.hasSafetyTraining)
          setRekamanCelakaOpt(retrievedObject.healthBenefit.hasAccidentRecording)

          setJaminanSosialOpt(retrievedObject.healthBenefit.employeeJoinJamsostek)

          setKoperasiBdnHukumOpt(retrievedObject.employeeCooperative.hasCooperative)
          setKoperasiSesuaiOpt(retrievedObject.employeeCooperative.obeyRule)

          setHibahJualSahamOpt(retrievedObject.employeeCooperative.cooperativeHasShare)
          setAsetDigunakanOpt(retrievedObject.employeeCooperative.cooperativeUsingAsset)

          setOrgKaryawanOpt(retrievedObject.employeeOrganization.hasEmployeeOrganization)
          setKesepakatanKerjaOpt(retrievedObject.employeeOrganization.hasKkb)

          setPoliklinikOpt(retrievedObject.employeeOrganization.hasHospital)
          setTenagaMedisOpt(retrievedObject.employeeOrganization.hasMedicalPersonel)

          setTunjanganPendidikanOpt(retrievedObject.employeeOrganization.hasEducationalAllowance)

          setRumahIbadahOpt(retrievedObject.employeeOrganization.hasWorshipPlace)

          setFasilitasOlahragaOpt(retrievedObject.employeeOrganization.hasSportFacility)
          setFasilitasHiburanOpt(retrievedObject.employeeOrganization.hasEntertainmentFacility)

          setBursaOpt(retrievedObject.promotion.hasPromotionSystem)
          setSistemPromosiOpt(retrievedObject.promotion.hasPromotionSystem)

          setBentukPemasaran(retrievedObject.marketingManagement[0].marketingType)
          setBiayaSewaOpt(retrievedObject.housingBenefit.hasReimbursement)
          setBonusOpt(retrievedObject.bonus.hasBonus)


          // setPenentuanHargaJualProd(retrievedObject.reportInformation[3].frequency)
          //
          // setTidakJamsostek(retrievedObject.reportInformation[1].frequency)
          //


        }, 250)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {
    let data = {
      "healthBenefit": {
          "hasReimbursement": gantiKesehatanOpt,
          "permanentEmployeeReimbursement": jaminSehat[0][0].sectionData[0].value,
          "contractEmployeeReimbursement": jaminSehat[0][1].sectionData[0].value,
          "hasWrittenTerm": keselamatanKerjaOpt,
          "termFile": {},
          "isTermSocialized": keselamatanKerjaSosialisasikanOpt,
          "pamphletFile": {},
          "hasSafetyEquipment": perlengkapanKeselamatanKerjaOpt,
          "safetyEquipmentType": perlengakapanSelamat,
          "isSafetyEquipmentUsed": perlengkapanDigunakanOpt,
          "safetyEquipmentUsage": perlengakapanGunakan,
          "hasSafetyTraining": pelatihanSelamatOpt,
          "recordingFile": {},
          "hasAccidentRecording": rekamanCelakaOpt,
          "employeeJoinJamsostek": jaminanSosialOpt,
          "jamsostekType": jenisJamsostek
      },
      "housingBenefit": {
          "hasReimbursement": biayaSewaOpt,
          "employeePercentage": jmlKaryawanFasilitas[0][0].value,
          "housingPercentage": jmlKaryawanFasilitas[0][1].value,
          "reimbursementPercentage": jmlKaryawanFasilitas[0][2].value
      },
      "bonus": {
        "hasBonus": bonusOpt,
        "details": [
          {
              "employmentType": "Karyawan",
              "year": 1,
              "bonusNominal": bonusKaryawan[0][0].sectionData[0].value,
              "bonusRecipentPercentage": bonusKaryawan[0][0].sectionData[1].value,
              "thrNominal": bonusKaryawan[0][0].sectionData[2].value,
              "thrRecipentPercentage": bonusKaryawan[0][0].sectionData[3].value
          },
          {
              "employmentType": "Karyawan",
              "year": 2,
              "bonusNominal": bonusKaryawan[0][1].sectionData[0].value,
              "bonusRecipentPercentage": bonusKaryawan[0][1].sectionData[1].value,
              "thrNominal": bonusKaryawan[0][1].sectionData[2].value,
              "thrRecipentPercentage": bonusKaryawan[0][1].sectionData[3].value
          },
          {
              "employmentType": "Karyawan",
              "year": 3,
              "bonusNominal": bonusKaryawan[0][2].sectionData[0].value,
              "bonusRecipentPercentage": bonusKaryawan[0][2].sectionData[1].value,
              "thrNominal": bonusKaryawan[0][2].sectionData[2].value,
              "thrRecipentPercentage": bonusKaryawan[0][2].sectionData[3].value
          },
          {
              "employmentType": "Harian Lepas",
              "year": 1,
              "bonusNominal": bonusKaryawanHarian[0][0].sectionData[0].value,
              "bonusRecipentPercentage": bonusKaryawanHarian[0][0].sectionData[1].value,
              "thrNominal": bonusKaryawanHarian[0][0].sectionData[2].value,
              "thrRecipentPercentage": bonusKaryawanHarian[0][0].sectionData[3].value
          },
          {
              "employmentType": "Harian Lepas",
              "year": 2,
              "bonusNominal": bonusKaryawanHarian[0][1].sectionData[0].value,
              "bonusRecipentPercentage": bonusKaryawanHarian[0][1].sectionData[1].value,
              "thrNominal": bonusKaryawanHarian[0][1].sectionData[2].value,
              "thrRecipentPercentage": bonusKaryawanHarian[0][1].sectionData[3].value
          },
          {
              "employmentType": "Harian Lepas",
              "year": 3,
              "bonusNominal": bonusKaryawanHarian[0][2].sectionData[0].value,
              "bonusRecipentPercentage": bonusKaryawanHarian[0][2].sectionData[1].value,
              "thrNominal": bonusKaryawanHarian[0][2].sectionData[2].value,
              "thrRecipentPercentage": bonusKaryawanHarian[0][2].sectionData[3].value
          }
        ]
      },
      "promotion": {
          "hasPromotionSystem": sistemPromosiOpt,
          "description": sistemPromosi
      },
      "employeeOrganization": {
          "hasEmployeeOrganization": orgKaryawanOpt,
          "hasKkb": kesepakatanKerjaOpt,
          "organizationName": orgKaryawan[0][0].value,
          "activity": orgKaryawan[0][1].value,
          "kkbActivity": kesepakatanKerja
      },
      "employeeCooperative": {
          "hasCooperative": koperasiBdnHukumOpt,
          "cooperativeType": usahaKoperasiDilaksanakan,
          "empolyeeCount": jmlKaryawanJmsostek[0][0].value,
          "employeePercentage": jmlKaryawanJmsostek[0][1].value,
          "obeyRule": koperasiSesuaiOpt,
          "reason": alasanTidakKoperasi,
          "cooperativeHasShare": hibahJualSahamOpt,
          "cooperativeUsingAsset": asetDigunakanOpt,
          "assetType": jenisAset
      },
      "employeeFacility": {
            "hasHospital": poliklinikOpt,
            "hasMedicalPersonel": tenagaMedisOpt,
            "hasWorshipPlace": rumahIbadahOpt,
            "worshipPlaceType": jenisRumahIbadah,
            "hasSportFacility": fasilitasOlahragaOpt,
            "sportFacilityType": jenisFasilitasOlahraga,
            "hasEntertainmentFacility": fasilitasHiburanOpt,
            "entertainmentFacilityType": jenisFasilitasHiburan,
            "hasEducationalAllowance": tunjanganPendidikanOpt,
            "sdDistance": saranaPendidikan[0][0].sectionData[0].value,
            "sdTravelTime": saranaPendidikan[0][0].sectionData[1].value,
            "sltpDistance": saranaPendidikan[0][1].sectionData[0].value,
            "sltpTravelTime": saranaPendidikan[0][1].sectionData[1].value,
            "sltaDistance": saranaPendidikan[0][2].sectionData[0].value,
            "sltaTravelTime": saranaPendidikan[0][2].sectionData[1].value,
            "collegeDistance": saranaPendidikan[0][3].sectionData[0].value,
            "collegeTravelTime": saranaPendidikan[0][3].sectionData[1].value
        },
      "localDistribution": [],
      "exportDistribution": [],
      "sellingDestination": [],
      "sellingLocation": [],
      "marketingManagement": [],
      "localSelling": [],
      "exportSelling": [],
      "pricing": [],
    }

    harga.forEach((item, i, arr) => {
      let inv = {
        "comodity": arr[0][0].sectionData[0].value,
        "details": [
          {
              "costType": arr[0][1].sectionTitle,
              "firstCost": arr[0][1].sectionData[0].value,
              "secondCost": arr[0][1].sectionData[1].value,
              "thirdCost": arr[0][1].sectionData[2].value
          },
          {
              "costType": arr[0][2].sectionTitle,
              "firstCost": arr[0][2].sectionData[0].value,
              "secondCost": arr[0][2].sectionData[1].value,
              "thirdCost": arr[0][2].sectionData[2].value
          },
          {
              "costType": arr[0][3].sectionTitle,
              "firstCost": arr[0][3].sectionData[0].value,
              "secondCost": arr[0][3].sectionData[1].value,
              "thirdCost": arr[0][3].sectionData[2].value
          },
          {
              "costType": arr[0][4].sectionTitle,
              "firstCost": arr[0][4].sectionData[0].value,
              "secondCost": arr[0][4].sectionData[1].value,
              "thirdCost": arr[0][4].sectionData[2].value
          },
          {
              "costType": arr[0][5].sectionTitle,
              "firstCost": arr[0][5].sectionData[0].value,
              "secondCost": arr[0][5].sectionData[1].value,
              "thirdCost": arr[0][5].sectionData[2].value
          },
          {
              "costType": arr[0][6].sectionTitle,
              "firstCost": arr[0][6].sectionData[0].value,
              "secondCost": arr[0][6].sectionData[1].value,
              "thirdCost": arr[0][6].sectionData[2].value
          },
          {
              "costType": arr[0][7].sectionTitle,
              "firstCost": arr[0][7].sectionData[0].value,
              "secondCost": arr[0][7].sectionData[1].value,
              "thirdCost": arr[0][7].sectionData[2].value
          }
        ]
      }
      data.pricing.push(inv)
    });

    ekspor.forEach((item, i) => {
      let inv = {}
      inv.details = []
      item.forEach((e, i, arr) => {
        if (e.sectionData.length < 2) {
          inv.comodity = arr[0].sectionData[0].value
        } else {
          let detailObj = {
            "productionType": arr[1].sectionData[0].value,
            "firstVolume": arr[1].sectionData[1].value,
            "firstValue": arr[1].sectionData[2].value,
            "secondVolume": arr[1].sectionData[3].value,
            "secondValue": arr[1].sectionData[4].value,
            "thirdVolume": arr[1].sectionData[5].value,
            "thirdValue": arr[1].sectionData[6].value,
          }
          inv.details.push(detailObj)
        }
      });
      data.exportSelling.push(inv)
    });

    lokal.forEach((item, i) => {
      let inv = {}
      inv.details = []
      item.forEach((e, i, arr) => {
        if (e.sectionData.length < 2) {
          inv.comodity = arr[0].sectionData[0].value
        } else {
          let detailObj = {
            "productionType": arr[1].sectionData[0].value,
            "firstVolume": arr[1].sectionData[1].value,
            "firstValue": arr[1].sectionData[2].value,
            "secondVolume": arr[1].sectionData[3].value,
            "secondValue": arr[1].sectionData[4].value,
            "thirdVolume": arr[1].sectionData[5].value,
            "thirdValue": arr[1].sectionData[6].value,
          }
          inv.details.push(detailObj)
        }
      });
      data.localSelling.push(inv)
    });

    jualHasil.forEach((item, i) => {
      let inv = {}
      item.forEach((e, i, arr) => {
        inv.comodity = arr[0].sectionData[0].value
        inv.firstLocalDestionation = arr[1].sectionData[0].value
        inv.firstExportDestionation = arr[1].sectionData[1].value
        inv.secondLocalDestionation = arr[2].sectionData[0].value
        inv.secondExportDestionation = arr[2].sectionData[1].value
        inv.thirdLocalDestionation = arr[3].sectionData[0].value
        inv.thirdExportDestionation = arr[3].sectionData[1].value
      });
      data.sellingDestination.push(inv)
    });

    komoditasNilaiUsaha.forEach((item, i) => {
      let inv = {}
      item.forEach((e, i, arr) => {
        inv.marketingType = bentukPemasaran
        inv.isJoiningComodityExchange = bursaOpt
        inv.comodity = arr[0].sectionData[0].value
        inv.firstExchange = arr[1].sectionData[0].value
        inv.firstDescription = arr[1].sectionData[1].value
        inv.secondExchange = arr[2].sectionData[0].value
        inv.secondDescription = arr[2].sectionData[1].value
        inv.thirdExchange = arr[3].sectionData[0].value
        inv.thirdDescription = arr[3].sectionData[1].value
      });
      data.marketingManagement.push(inv)
    });

    lokasiPemasaran.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.comodity = item[0].value
        inv.firstYear = item[1].value
        inv.firstYearCityId = item[2].value
        inv.secondYear = item[3].value
        inv.secondYearCityId = item[4].value
        inv.thirdYear = item[5].value
        inv.thirdYearCityId = item[6].value
      });
      data.sellingLocation.push(inv)
    });

    jualLokal.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.comodity = item[0].value
        inv.enterprise_customer = item[1].value
        inv.enterprise_agency_customer = item[2].value
        inv.anotherMethod = item[3].value
      });
      data.localDistribution.push(inv)
    });

    jualEkspor.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.comodity = item[0].value
        inv.enterprise_customer = item[1].value
        inv.enterprise_agency_customer = item[2].value
        inv.anotherMethod = item[3].value
      });
      data.exportDistribution.push(inv)
    });

    setDataSubmit(data)

  }, [perlengakapanSelamat,perlengakapanGunakan,jenisJamsostek,tidakJamsostek,usahaKoperasiDilaksanakan,alasanTidakKoperasi,jenisAset,kesepakatanKerja
    ,jenisRumahIbadah,jenisFasilitasOlahraga,jenisFasilitasHiburan,bentukPemasaran,sistemPromosi,penentuanHargaJualProd,gantiKesehatanOpt,keselamatanKerjaOpt
    ,keselamatanKerjaSosialisasikanOpt,perlengkapanKeselamatanKerjaOpt,perlengkapanDigunakanOpt,pelatihanSelamatOpt,rekamanCelakaOpt,jaminanSosialOpt,biayaSewaOpt
    ,bonusOpt,koperasiBdnHukumOpt,koperasiSesuaiOpt,hibahJualSahamOpt,asetDigunakanOpt,orgKaryawanOpt,kesepakatanKerjaOpt,poliklinikOpt,tenagaMedisOpt
    ,tunjanganPendidikanOpt,rumahIbadahOpt,fasilitasOlahragaOpt,fasilitasHiburanOpt,bursaOpt,sistemPromosiOpt,jaminSehat,jmlKaryawanJmsostek
    ,jmlKaryawanFasilitas,bonusKaryawan,bonusKaryawanHarian,orgKaryawan,komoditasNilaiUsaha,karyawanAnggKoperasi,saranaPendidikan,lokal,ekspor,harga
    ,jualLokal,jualEkspor,jualHasil,lokasiPemasaran])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      localStorage.setItem("mnjPart3Nilai", JSON.stringify(dataSubmit));
    }
  },[dataPass,dataSubmit])

  function clearData() {

  }

  return (
    <>
      <Head>
        
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
                radioValue={gantiKesehatanOpt}
                selected={gantiKesehatanOpt == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="gantiKesehatanOpt"
                onClick={() => setGantiKesehatanOpt('Tidak')}
                radioValue={gantiKesehatanOpt}
                selected={gantiKesehatanOpt == 'Tidak'}
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
                radioValue={keselamatanKerjaOpt}
                selected={keselamatanKerjaOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="keselamatanKerjaOpt"
                onClick={() => setKeselamatanKerjaOpt('Tidak')}
                radioValue={keselamatanKerjaOpt}
                selected={keselamatanKerjaOpt == 'Tidak'}
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
                    radioValue={keselamatanKerjaSosialisasikanOpt}
                    selected={keselamatanKerjaSosialisasikanOpt == 'Sudah'}
                    label="Sudah"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="keselamatanKerjaSosialisasikanOpt"
                    onClick={() => setKeselamatanKerjaSosialisasikanOpt('Belum')}
                    radioValue={keselamatanKerjaSosialisasikanOpt}
                    selected={keselamatanKerjaSosialisasikanOpt == 'Belum'}
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
                radioValue={perlengkapanKeselamatanKerjaOpt}
                selected={perlengkapanKeselamatanKerjaOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="perlengkapanKeselamatanKerjaOpt"
                onClick={() => setPerlengkapanKeselamatanKerjaOpt('Tidak')}
                radioValue={perlengkapanKeselamatanKerjaOpt}
                selected={perlengkapanKeselamatanKerjaOpt == 'Tidak'}
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
                radioValue={perlengkapanDigunakanOpt}
                selected={perlengkapanDigunakanOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="perlengkapanDigunakanOpt"
                onClick={() => setPerlengkapanDigunakanOpt('Tidak')}
                radioValue={perlengkapanDigunakanOpt}
                selected={perlengkapanDigunakanOpt == 'Tidak'}
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
                radioValue={pelatihanSelamatOpt}
                selected={pelatihanSelamatOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelatihanSelamatOpt"
                onClick={() => setPelatihanSelamatOpt('Tidak')}
                radioValue={pelatihanSelamatOpt}
                selected={pelatihanSelamatOpt == 'Tidak'}
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
                radioValue={rekamanCelakaOpt}
                selected={rekamanCelakaOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="rekamanCelakaOpt"
                onClick={() => setRekamanCelakaOpt('Tidak')}
                radioValue={rekamanCelakaOpt}
                selected={rekamanCelakaOpt == 'Tidak'}
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
                radioValue={jaminanSosialOpt}
                selected={jaminanSosialOpt == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="jaminanSosialOpt"
                onClick={() => setJaminanSosialOpt('Tidak')}
                radioValue={jaminanSosialOpt}
                selected={jaminanSosialOpt == 'Tidak'}
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
                  values={jenisJamsostek}
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
                radioValue={biayaSewaOpt}
                selected={biayaSewaOpt == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="biayaSewaOpt"
                onClick={() => setBiayaSewaOpt('Tidak')}
                radioValue={biayaSewaOpt}
                selected={biayaSewaOpt == 'Tidak'}
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
                radioValue={biayaSewaOpt}
                selected={biayaSewaOpt == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bonusOpt"
                onClick={() => setBonusOpt('Tidak')}
                radioValue={biayaSewaOpt}
                selected={biayaSewaOpt == 'Tidak'}
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
                radioValue={koperasiBdnHukumOpt}
                selected={koperasiBdnHukumOpt == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="koperasiBdnHukumOpt"
                onClick={() => setKoperasiBdnHukumOpt('Tidak')}
                radioValue={koperasiBdnHukumOpt}
                selected={koperasiBdnHukumOpt == 'Tidak'}
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
                  values={usahaKoperasiDilaksanakan}
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
                    radioValue={koperasiSesuaiOpt}
                    selected={koperasiSesuaiOpt == 'Iya'}
                    label="Iya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="koperasiSesuaiOpt"
                    onClick={() => setKoperasiSesuaiOpt('Tidak')}
                    radioValue={koperasiSesuaiOpt}
                    selected={koperasiSesuaiOpt == 'Tidak'}
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
                radioValue={hibahJualSahamOpt}
                selected={hibahJualSahamOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="hibahJualSahamOpt"
                onClick={() => setHibahJualSahamOpt('Tidak')}
                radioValue={hibahJualSahamOpt}
                selected={hibahJualSahamOpt == 'Tidak'}
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
                radioValue={asetDigunakanOpt}
                selected={asetDigunakanOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="asetDigunakanOpt"
                onClick={() => setAsetDigunakanOpt('Tidak')}
                radioValue={asetDigunakanOpt}
                selected={asetDigunakanOpt == 'Tidak'}
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
                radioValue={orgKaryawanOpt}
                selected={orgKaryawanOpt == 'Sudah'}
                label="Sudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="orgKaryawanOpt"
                onClick={() => setOrgKaryawanOpt('Belum')}
                radioValue={orgKaryawanOpt}
                selected={orgKaryawanOpt == 'Belum'}
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
                radioValue={kesepakatanKerjaOpt}
                selected={kesepakatanKerjaOpt == 'Sudah'}
                label="Sudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="kesepakatanKerjaOpt"
                onClick={() => setKesepakatanKerjaOpt('Belum')}
                radioValue={kesepakatanKerjaOpt}
                selected={kesepakatanKerjaOpt == 'Belum'}
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
                radioValue={poliklinikOpt}
                selected={poliklinikOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="poliklinikOpt"
                onClick={() => setPoliklinikOpt('Tidak')}
                radioValue={poliklinikOpt}
                selected={poliklinikOpt == 'Tidak'}
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
                radioValue={tenagaMedisOpt}
                selected={tenagaMedisOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="tenagaMedisOpt"
                onClick={() => setTenagaMedisOpt('Tidak')}
                radioValue={tenagaMedisOpt}
                selected={tenagaMedisOpt == 'Tidak'}
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
                radioValue={tunjanganPendidikanOpt}
                selected={tunjanganPendidikanOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="tunjanganPendidikanOpt"
                onClick={() => setTunjanganPendidikanOpt('Tidak')}
                radioValue={tunjanganPendidikanOpt}
                selected={tunjanganPendidikanOpt == 'Tidak'}
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
                radioValue={rumahIbadahOpt}
                selected={rumahIbadahOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="rumahIbadahOpt"
                onClick={() => setRumahIbadahOpt('Tidak')}
                radioValue={rumahIbadahOpt}
                selected={rumahIbadahOpt == 'Tidak'}
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
                radioValue={fasilitasOlahragaOpt}
                selected={fasilitasOlahragaOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="fasilitasOlahragaOpt"
                onClick={() => setFasilitasOlahragaOpt('Tidak')}
                radioValue={fasilitasOlahragaOpt}
                selected={fasilitasOlahragaOpt == 'Tidak'}
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
                radioValue={fasilitasHiburanOpt}
                selected={fasilitasHiburanOpt == 'Ada'}
                label="Ada"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="fasilitasHiburanOpt"
                onClick={() => setFasilitasHiburanOpt('Tidak')}
                radioValue={fasilitasHiburanOpt}
                selected={fasilitasHiburanOpt == 'Tidak'}
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
                                values={item.value}
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
              values={bentukPemasaran}
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
                radioValue={bursaOpt}
                selected={bursaOpt == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="bursaOpt"
                onClick={() => setBursaOpt('Tidak')}
                radioValue={bursaOpt}
                selected={bursaOpt == 'Tidak'}
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
                radioValue={sistemPromosiOpt}
                selected={sistemPromosiOpt == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemPromosiOpt"
                onClick={() => setSistemPromosiOpt('Tidak')}
                radioValue={sistemPromosiOpt}
                selected={sistemPromosiOpt == 'Tidak'}
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
