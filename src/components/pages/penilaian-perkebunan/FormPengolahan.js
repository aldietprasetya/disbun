import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import _ from 'lodash';
import InputFileButton from 'src/components/customInput/InputFileButton';
import InputForm from '../admin/infografis/InputForm';
import mng from 'src/styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormPengolahan = () => {
  const [isError, setIsError] = useState(false);

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState([])

  ////////////////////////// INPUT FORM STATE ////////////////////////////////

  const [sumberEnergi, setSumberEnergi] = useState('');
  const [izinProduk, setIzinProduk] = useState('');
  const [hasilProduk, setHasilProduk] = useState('');
  const [sistemMutu, setSistemMutu] = useState('');
  const [sistemMutuLain, setSistemMutuLain] = useState('');
  const [waktuDibutuhkan, setWaktuDibutuhkan] = useState('');

  ////////////////////////// RADIO BUTTON STATE ////////////////////////////////

  const [produkHilirOpt, setProdukHilirOpt] = useState('');
  const [sistemMutuOpt, setSistemMutuOpt] = useState('');
  const [sistemIsoOpt, setSistemIsoOpt] = useState('');
  const [sistemIsoLainOpt, setSistemIsoLainOpt] = useState('');
  const [sertifikatOpt, setSertifikatOpt] = useState('');

  ////////////////////////// Apabila kebun milik pabrik ////////////////////////////////

  const [kebunPabrik, setKebunPabrik] = useState([
    [
      {'title':'Komoditas','placeholder':'masukkan komoditas','type':'text','value':'','isOpt':false},
      {'title':'Jumlah (unit)','placeholder':'masukkan jumlah dalam unit','type':'text','value':'','isOpt':false},
      {'title':'Desa','placeholder':'pilih desa','type':'text','value':'','isOpt':true},
      {'title':'Kecamatan','placeholder':'masukkan kecamatan','type':'text','value':'','isOpt':false},
      {'title':'Kabupaten','placeholder':'masukkan kabupaten','type':'text','value':'','isOpt':false},
      {'title':'Kapasitas Ijin','placeholder':'masukkan kapasitas','type':'text','value':'','isOpt':false},
      {'title':'Kapasitas Terpasang','placeholder':'masukkan kapasitas','type':'text','value':'','isOpt':false},
      {'title':'Kapasitas Terpakai','placeholder':'masukkan kapasitas','type':'text','value':'','isOpt':false},
      {'title':'Instansi Pemberi Ijin','placeholder':'masukkan nama instansi','type':'text','value':'','isOpt':false},
      {'title':'No & Tanggal pemberian ijin','placeholder':'masukkan nomor dan tanggal','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'nama pabrik & lokasi serta penjelasan asal bahan baku dari kebun lain','type':'textArea','value':'','isOpt':false}
    ]
  ])

  function handleBtnKebunPabrik() {
    setKebunPabrik([...kebunPabrik,[
      {'title':'Komoditas','placeholder':'masukkan komoditas','type':'text','value':'','isOpt':false},
      {'title':'Jumlah (unit)','placeholder':'masukkan jumlah dalam unit','type':'text','value':'','isOpt':false},
      {'title':'Desa','placeholder':'pilih desa','type':'text','value':'','isOpt':true},
      {'title':'Kecamatan','placeholder':'masukkan kecamatan','type':'text','value':'','isOpt':false},
      {'title':'Kabupaten','placeholder':'masukkan kabupaten','type':'text','value':'','isOpt':false},
      {'title':'Kapasitas Ijin','placeholder':'masukkan kapasitas','type':'text','value':'','isOpt':false},
      {'title':'Kapasitas Terpasang','placeholder':'masukkan kapasitas','type':'text','value':'','isOpt':false},
      {'title':'Kapasitas Terpakai','placeholder':'masukkan kapasitas','type':'text','value':'','isOpt':false},
      {'title':'Instansi Pemberi Ijin','placeholder':'masukkan nama instansi','type':'text','value':'','isOpt':false},
      {'title':'No & Tanggal pemberian ijin','placeholder':'masukkan nomor dan tanggal','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'nama pabrik & lokasi serta penjelasan asal bahan baku dari kebun lain','type':'text','value':'','isOpt':false}
    ]])
  }

  ////////////////////////// Apabila kebun tidak milik pabrik ////////////////////////////////

  const [produksiKebun, setProduksiKebun] = useState([
    [
      {'title':'Diolahkan di pabrik lain segroup','placeholder':'Jumlah sesuai jenis','type':'text','value':'','isOpt':false},
      {'title':'Diolahkan di pabrik lain dengan kontrak','placeholder':'jumlah sesuai jenis','type':'text','value':'','isOpt':false},
      {'title':'Diolahkan di pabrik lain tanpa kontrak','placeholder':'jumlah sesuai jenis','type':'text','value':'','isOpt':false},
      {'title':'Dijual','placeholder':'jumlah sesuai jenis','type':'text','value':'','isOpt':false},
    ]
  ])

  ////////////////////////// Tingkat Efisiensi Proses Pengolahan 3 tahun terakhir Sebelum Penilaian Usaha Perkebunan Saat Ini ////////////////////////////////

  const [efisiensi, setEfisiensi] = useState([
    [
      {
        'sectionTitle': '',
        'sectionData': [
          {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
        ]
      },
      {
        'sectionTitle': 'Volume bahan masuk (ton) Tebu',
        'sectionData': [
          {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':''}
        ]
      },
      {
        'sectionTitle': 'Rendemen sesuai kondisi setempat/standar (%)',
        'sectionData': [
          {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':''}
        ]
      },
      {
        'sectionTitle': 'Taksasi produksi (ton) = 1x2',
        'sectionData': [
          {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':''}
        ]
      },
      {
        'sectionTitle': 'Realisasi produksi (ton) SHS % Tebu',
        'sectionData': [
          {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':''}
        ]
      },
      {
        'sectionTitle': 'Rendemen yang dicapai = 4/1 (%)',
        'sectionData': [
          {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':''}
        ]
      }
    ]
  ])

  function handleBtnAddEfisiensi() {
    setEfisiensi([...efisiensi,[ {
      'sectionTitle': '',
      'sectionData': [
        {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
      ]
    },
    {
      'sectionTitle': 'Volume bahan masuk (ton) Tebu',
      'sectionData': [
        {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':''}
      ]
    },
    {
      'sectionTitle': 'Rendemen sesuai kondisi setempat/standar (%)',
      'sectionData': [
        {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':''}
      ]
    },
    {
      'sectionTitle': 'Taksasi produksi (ton) = 1x2',
      'sectionData': [
        {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':''}
      ]
    },
    {
      'sectionTitle': 'Realisasi produksi (ton) SHS % Tebu',
      'sectionData': [
        {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':''}
      ]
    },
    {
      'sectionTitle': 'Rendemen yang dicapai = 4/1 (%)',
      'sectionData': [
        {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':''},{'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':''}
      ]
    } ]])
  }

  ////////////////////////// Bahan Penolong yang Digunakan ////////////////////////////////

  const [bhnPenolong, setBhnPenolong] = useState([
    [
      {
        'sectionTitle': '',
        'sectionData': [
          {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
        ]
      },
      {
        'sectionTitle': 'Kapur Tohor',
        'sectionData': [
          {'title':'Dosis Anjuran (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''},{'title':'Dosis yang digunakan (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''}
        ]
      },
      {
        'sectionTitle': 'Flokulan',
        'sectionData': [
          {'title':'Dosis Anjuran (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''},{'title':'Dosis yang digunakan (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''}
        ]
      },
      {
        'sectionTitle': 'Belerang',
        'sectionData': [
          {'title':'Dosis Anjuran (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''},{'title':'Dosis yang digunakan (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''}
        ]
      },
      {
        'sectionTitle': 'Phospat',
        'sectionData': [
          {'title':'Dosis Anjuran (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''},{'title':'Dosis yang digunakan (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''}
        ]
      }
    ]
  ])

  function handleBtnAddBhnPenolong() {
    setBhnPenolong([...bhnPenolong,[ {
      'sectionTitle': '',
      'sectionData': [
        {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
      ]
    },
    {
      'sectionTitle': 'Kapur Tohor',
      'sectionData': [
        {'title':'Dosis Anjuran (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''},{'title':'Dosis yang digunakan (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''}
      ]
    },
    {
      'sectionTitle': 'Flokulan',
      'sectionData': [
        {'title':'Dosis Anjuran (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''},{'title':'Dosis yang digunakan (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''}
      ]
    },
    {
      'sectionTitle': 'Belerang',
      'sectionData': [
        {'title':'Dosis Anjuran (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''},{'title':'Dosis yang digunakan (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''}
      ]
    },
    {
      'sectionTitle': 'Phospat',
      'sectionData': [
        {'title':'Dosis Anjuran (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''},{'title':'Dosis yang digunakan (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':''}
      ]
    } ]])
  }

  ////////////////////////// Hasil Olah 3 tahun terakhir  Sebelum Klasifikasi saat ini ////////////////////////////////

  const [produksiPrimer, setProduksiPrimer] = useState([
    [
      {'title':'Jenis Hasil Olah','placeholder':'masukkan jenis hasil olah','type':'text','value':'','isOpt':false},
      {'title':'Jenis Mutu Akhir','placeholder':'masukkan jenis mutu akhir','type':'text','value':'','isOpt':false},
      {'title':'Volume Produksi tahun 1','placeholder':'masukkan volume','type':'text','value':'','isOpt':false},
      {'title':'Presentase Produksi tahun 1','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Volume Produksi tahun 2','placeholder':'masukkan volume','type':'text','value':'','isOpt':false},
      {'title':'Presentase Produksi tahun 2','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Volume Produksi tahun 3','placeholder':'masukkan volume','type':'text','value':'','isOpt':false},
      {'title':'Presentase Produksi tahun 3','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'keterangan','type':'text','value':'','isOpt':false},
    ]
  ])

  function handleBtnProduksiPrimer() {
    setProduksiPrimer([...produksiPrimer,[
      {'title':'Jenis Hasil Olah','placeholder':'masukkan jenis hasil olah','type':'text','value':'','isOpt':false},
      {'title':'Jenis Mutu Akhir','placeholder':'masukkan jenis mutu akhir','type':'text','value':'','isOpt':false},
      {'title':'Volume Produksi tahun 1','placeholder':'masukkan volume','type':'text','value':'','isOpt':false},
      {'title':'Presentase Produksi tahun 1','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Volume Produksi tahun 2','placeholder':'masukkan volume','type':'text','value':'','isOpt':false},
      {'title':'Presentase Produksi tahun 2','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Volume Produksi tahun 3','placeholder':'masukkan volume','type':'text','value':'','isOpt':false},
      {'title':'Presentase Produksi tahun 3','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'keterangan','type':'text','value':'','isOpt':false},
    ]])
  }

  ////////////////////////// Hasil Olah 3 tahun terakhir  Sebelum Klasifikasi saat ini ////////////////////////////////

  const [produksiHilir, setProduksiHilir] = useState([
    [
      {'title':'Jenis Hasil Olah','placeholder':'masukkan jenis hasil olah','type':'text','value':'','isOpt':false},
      {'title':'Jenis Mutu Akhir','placeholder':'masukkan jenis mutu akhir','type':'text','value':'','isOpt':false},
      {'title':'Volume Produksi tahun 1','placeholder':'masukkan volume','type':'text','value':'','isOpt':false},
      {'title':'Presentase Produksi tahun 1','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Volume Produksi tahun 2','placeholder':'masukkan volume','type':'text','value':'','isOpt':false},
      {'title':'Presentase Produksi tahun 2','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Volume Produksi tahun 3','placeholder':'masukkan volume','type':'text','value':'','isOpt':false},
      {'title':'Presentase Produksi tahun 3','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Volume rata-rata','placeholder':'masukkan volume rata-rata','type':'text','value':'','isOpt':false},
      {'title':'Presentase rata-rata','placeholder':'masukkan presentase rata-rata','type':'text','value':'','isOpt':false},
    ]
  ])

  function handleBtnProduksiHilir() {
    setProduksiHilir([...produksiHilir,[
      {'title':'Jenis Hasil Olah','placeholder':'masukkan jenis hasil olah','type':'text','value':'','isOpt':false},
      {'title':'Jenis Mutu Akhir','placeholder':'masukkan jenis mutu akhir','type':'text','value':'','isOpt':false},
      {'title':'Volume Produksi tahun 1','placeholder':'masukkan volume','type':'text','value':'','isOpt':false},
      {'title':'Presentase Produksi tahun 1','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Volume Produksi tahun 2','placeholder':'masukkan volume','type':'text','value':'','isOpt':false},
      {'title':'Presentase Produksi tahun 2','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Volume Produksi tahun 3','placeholder':'masukkan volume','type':'text','value':'','isOpt':false},
      {'title':'Presentase Produksi tahun 3','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Volume rata-rata','placeholder':'masukkan volume rata-rata','type':'text','value':'','isOpt':false},
      {'title':'Presentase rata-rata','placeholder':'masukkan presentase rata-rata','type':'text','value':'','isOpt':false},
    ]])
  }

  ////////////////////////// Pemanfaatan Hasil Samping tahun terakhir Sebelum Penilaian Usaha Perkebunan saat ini ////////////////////////////////

  const [hasilSamping, setHasilSamping] = useState([
    [
      {
        'sectionTitle': 'Hasil Samping',
        'sectionData': [
          {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
        ]
      },
      {
        'sectionTitle': 'Diolah',
        'sectionData': [
          {'title':'Jenis','type':'text','placeholder':'masukkan jenis yang diolah','value':''},
          {'title':'Jumlah','type':'text','placeholder':'masukkan jumlah yang diolah','value':''},
          {'title':'Diolah Sendiri (%)','type':'text','placeholder':'masukkan presentase','value':''},
          {'title':'Diolah Pihak Lain (%)','type':'text','placeholder':'masukkan presentase','value':''},
          {'title':'Jenis Hasil','type':'text','placeholder':'masukan jenis hasil olahan','value':''},
        ]
      },
      {
        'sectionTitle': 'Tidak diolah',
        'sectionData': [
          {'title':'Dimanfaatkan kebun (%)','type':'text','placeholder':'masukkan presentase','value':''},
          {'title':'Dijual (%)','type':'text','placeholder':'masukkan presentase','value':''},
          {'title':'Tidak Dimanfaatkan (%)','type':'text','placeholder':'masukkan presentase','value':''},
        ]
      },
    ]
  ])

  function handleBtnAddHasilSamping() {
    setHasilSamping([...hasilSamping,[{
      'sectionTitle': 'Hasil Samping',
      'sectionData': [
        {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
      ]
    },
    {
      'sectionTitle': 'Diolah',
      'sectionData': [
        {'title':'Jenis','type':'text','placeholder':'masukkan jenis yang diolah','value':''},
        {'title':'Jumlah','type':'text','placeholder':'masukkan jumlah yang diolah','value':''},
        {'title':'Diolah Sendiri (%)','type':'text','placeholder':'masukkan presentase','value':''},
        {'title':'Diolah Pihak Lain (%)','type':'text','placeholder':'masukkan presentase','value':''},
        {'title':'Jenis Hasil','type':'text','placeholder':'masukan jenis hasil olahan','value':''},
      ]
    },
    {
      'sectionTitle': 'Tidak diolah',
      'sectionData': [
        {'title':'Dimanfaatkan kebun (%)','type':'text','placeholder':'masukkan presentase','value':''},
        {'title':'Dijual (%)','type':'text','placeholder':'masukkan presentase','value':''},
        {'title':'Tidak Dimanfaatkan (%)','type':'text','placeholder':'masukkan presentase','value':''},
      ]
    }]])
  }

  ////////////////////////// Limbah Cair ////////////////////////////////

  const [limbahCair, setLimbahCair] = useState([
    [
      {
        'sectionTitle': 'Limbah Cair',
        'sectionData': [
          {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
        ]
      },
      {
        'sectionTitle': 'Diolah',
        'sectionData': [
          {'title':'Jenis','type':'text','placeholder':'masukkan jenis yang diolah','value':''},
          {'title':'Jumlah','type':'text','placeholder':'masukkan jumlah yang diolah','value':''},
          {'title':'Diolah Sendiri (%)','type':'text','placeholder':'masukkan presentase','value':''},
          {'title':'Diolah Pihak Lain (%)','type':'text','placeholder':'masukkan presentase','value':''},
          {'title':'Jenis Hasil','type':'text','placeholder':'masukan jenis hasil olahan','value':''},
        ]
      },
      {
        'sectionTitle': 'Tidak diolah',
        'sectionData': [
          {'title':'Dimanfaatkan kebun (%)','type':'text','placeholder':'masukkan presentase','value':''},
          {'title':'Dijual (%)','type':'text','placeholder':'masukkan presentase','value':''},
          {'title':'Tidak Dimanfaatkan (%)','type':'text','placeholder':'masukkan presentase','value':''},
        ]
      },
    ]
  ])

  function handleBtnAddLimbahCair() {
    setLimbahCair([...limbahCair,[{
      'sectionTitle': 'Limbah Cair',
      'sectionData': [
        {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
      ]
    },
    {
      'sectionTitle': 'Diolah',
      'sectionData': [
        {'title':'Jenis','type':'text','placeholder':'masukkan jenis yang diolah','value':''},
        {'title':'Jumlah','type':'text','placeholder':'masukkan jumlah yang diolah','value':''},
        {'title':'Diolah Sendiri (%)','type':'text','placeholder':'masukkan presentase','value':''},
        {'title':'Diolah Pihak Lain (%)','type':'text','placeholder':'masukkan presentase','value':''},
        {'title':'Jenis Hasil','type':'text','placeholder':'masukan jenis hasil olahan','value':''},
      ]
    },
    {
      'sectionTitle': 'Tidak diolah',
      'sectionData': [
        {'title':'Dimanfaatkan kebun (%)','type':'text','placeholder':'masukkan presentase','value':''},
        {'title':'Dijual (%)','type':'text','placeholder':'masukkan presentase','value':''},
        {'title':'Tidak Dimanfaatkan (%)','type':'text','placeholder':'masukkan presentase','value':''},
      ]
    }]])
  }

  ////////////////////////// Limbah Padat ////////////////////////////////

  const [limbahPadat, setLimbahPadat] = useState([
    [
      {
        'sectionTitle': 'Limbah Padat',
        'sectionData': [
          {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
        ]
      },
      {
        'sectionTitle': 'Diolah',
        'sectionData': [
          {'title':'Jenis','type':'text','placeholder':'masukkan jenis yang diolah','value':''},
          {'title':'Jumlah','type':'text','placeholder':'masukkan jumlah yang diolah','value':''},
          {'title':'Diolah Sendiri (%)','type':'text','placeholder':'masukkan presentase','value':''},
          {'title':'Diolah Pihak Lain (%)','type':'text','placeholder':'masukkan presentase','value':''},
          {'title':'Jenis Hasil','type':'text','placeholder':'masukan jenis hasil olahan','value':''},
        ]
      },
      {
        'sectionTitle': 'Tidak diolah',
        'sectionData': [
          {'title':'Dimanfaatkan kebun (%)','type':'text','placeholder':'masukkan presentase','value':''},
          {'title':'Dijual (%)','type':'text','placeholder':'masukkan presentase','value':''},
          {'title':'Tidak Dimanfaatkan (%)','type':'text','placeholder':'masukkan presentase','value':''},
        ]
      },
    ]
  ])

  function handleBtnAddLimbahPadat() {
    setLimbahPadat([...limbahPadat,[{
      'sectionTitle': 'Limbah Padat',
      'sectionData': [
        {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':''},
      ]
    },
    {
      'sectionTitle': 'Diolah',
      'sectionData': [
        {'title':'Jenis','type':'text','placeholder':'masukkan jenis yang diolah','value':''},
        {'title':'Jumlah','type':'text','placeholder':'masukkan jumlah yang diolah','value':''},
        {'title':'Diolah Sendiri (%)','type':'text','placeholder':'masukkan presentase','value':''},
        {'title':'Diolah Pihak Lain (%)','type':'text','placeholder':'masukkan presentase','value':''},
        {'title':'Jenis Hasil','type':'text','placeholder':'masukan jenis hasil olahan','value':''},
      ]
    },
    {
      'sectionTitle': 'Tidak diolah',
      'sectionData': [
        {'title':'Dimanfaatkan kebun (%)','type':'text','placeholder':'masukkan presentase','value':''},
        {'title':'Dijual (%)','type':'text','placeholder':'masukkan presentase','value':''},
        {'title':'Tidak Dimanfaatkan (%)','type':'text','placeholder':'masukkan presentase','value':''},
      ]
    }]])
  }

  ////////////////////////// Produk dan Mutu ////////////////////////////////

  const [mutu, setMutu] = useState([
    [
      {'title':'jenis produk','type':'text','placeholder':'masukkan jenis produk','value':'','isOpt':false},
      {'title':'Volume tahun 1 (ton)','type':'text','placeholder':'masukkan volume','value':'','isOpt':false},
      {'title':'Sesuai Standar Tahun 1 (%)','type':'text','placeholder':'masukkan presentase','value':'','isOpt':false},
      {'title':'Volume tahun 2 (ton)','type':'text','placeholder':'masukkan volume','value':'','isOpt':false},
      {'title':'Sesuai Standar Tahun 2 (%)','type':'text','placeholder':'masukkan presentase','value':'','isOpt':false},
      {'title':'Volume tahun 3 (ton)','type':'text','placeholder':'masukkan volume','value':'','isOpt':false},
      {'title':'Sesuai Standar Tahun 3 (%)','type':'text','placeholder':'masukkan presentase','value':'','isOpt':false},
    ]
  ])

  function handleBtnAddMutu() {
    setMutu([...mutu,[
      {'title':'jenis produk','type':'text','placeholder':'masukkan jenis produk','value':'','isOpt':false},
      {'title':'Volume tahun 1 (ton)','type':'text','placeholder':'masukkan volume','value':'','isOpt':false},
      {'title':'Sesuai Standar Tahun 1 (%)','type':'text','placeholder':'masukkan presentase','value':'','isOpt':false},
      {'title':'Volume tahun 2 (ton)','type':'text','placeholder':'masukkan volume','value':'','isOpt':false},
      {'title':'Sesuai Standar Tahun 2 (%)','type':'text','placeholder':'masukkan presentase','value':'','isOpt':false},
      {'title':'Volume tahun 3 (ton)','type':'text','placeholder':'masukkan volume','value':'','isOpt':false},
      {'title':'Sesuai Standar Tahun 3 (%)','type':'text','placeholder':'masukkan presentase','value':'','isOpt':false},
    ]])
  }

  ////////////////////////// Kemitraan Pengolahan ////////////////////////////////

  const [mitraOlah, setMitraOlah] = useState([
    [
      {'title':'Komoditas','placeholder':'masukkan jenis komoditas','type':'text','value':'','isOpt':false},
      {'title':'Jenis Bahan Olahan','placeholder':'masukkan jenis bahan','type':'text','value':'','isOpt':false},
      {'title':'Asal Bahan Olah','placeholder':'masukkan asal bahan','type':'text','value':'','isOpt':false},
      {'title':'Diolah Sendiri (%)','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Diolah Kemitraan (%)','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Diolah Tanpa Kontrak (%)','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Dijual tanpa diolah (%)','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false}
    ]
  ])

  function handleBtnAddMitraOlah() {
    setMitraOlah([...mitraOlah,[
      {'title':'Komoditas','placeholder':'masukkan jenis komoditas','type':'text','value':'','isOpt':false},
      {'title':'Jenis Bahan Olahan','placeholder':'masukkan jenis bahan','type':'text','value':'','isOpt':false},
      {'title':'Asal Bahan Olah','placeholder':'masukkan asal bahan','type':'text','value':'','isOpt':false},
      {'title':'Diolah Sendiri (%)','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Diolah Kemitraan (%)','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Diolah Tanpa Kontrak (%)','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Dijual tanpa diolah (%)','placeholder':'masukkan presentase','type':'text','value':'','isOpt':false},
      {'title':'Keterangan','placeholder':'masukkan keterangan','type':'text','value':'','isOpt':false}
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
      let retrievedObject = JSON.parse(localStorage.getItem('olahNilai'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
          "processingUnit": [],
          "unownedGarden": [],
          "processingEfficiency": [],
          "auxilliaryMaterial": [],
          "lastThreeYearsProcessing": [],
          "downstreamProduct": [],
          "sideResult": [],
          "solidWaste": [],
          "liquidWaste": [],
          "qualityAchievement": [],
          "processingPartnership": []
        }

        retrievedObject.auxilliaryMaterial.forEach((e, i, arr) => {
          const formData = [ { 'sectionTitle': '', 'sectionData': [ {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':e.comodity}, ] }, { 'sectionTitle': 'Kapur Tohor', 'sectionData': [ {'title':'Dosis Anjuran (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':e.details[0].standardYieldPercentage}, {'title':'Dosis yang digunakan (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':e.details[0].taxation} ] }, { 'sectionTitle': 'Flokulan', 'sectionData': [ {'title':'Dosis Anjuran (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':e.details[1].standardYieldPercentage}, {'title':'Dosis yang digunakan (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':e.details[1].taxation} ] }, { 'sectionTitle': 'Belerang', 'sectionData': [ {'title':'Dosis Anjuran (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':e.details[2].standardYieldPercentage}, {'title':'Dosis yang digunakan (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':e.details[2].taxation} ] }, { 'sectionTitle': 'Phospat', 'sectionData': [ {'title':'Dosis Anjuran (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':e.details[3].standardYieldPercentage}, {'title':'Dosis yang digunakan (satuan)','type':'text','placeholder':'masukkan dosis sesuai satuan','value':e.details[3].taxation} ] } ]
          replicateData.auxilliaryMaterial.push(formData)
        })

        retrievedObject.processingEfficiency.forEach((e, i, arr) => {
          const formData = [ { 'sectionTitle': '', 'sectionData': [ {'title':'Komoditas','type':'text','placeholder':'masukkan jenis komoditas','value':e.comodity}, ] }, { 'sectionTitle': 'Volume bahan masuk (ton) Tebu', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[0].inputVolume}, {'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[1].inputVolume}, {'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[2].inputVolume} ] }, { 'sectionTitle': 'Rendemen sesuai kondisi setempat/standar (%)', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[0].standardYieldPercentage}, {'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[1].standardYieldPercentage}, {'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[2].standardYieldPercentage} ] }, { 'sectionTitle': 'Taksasi produksi (ton) = 1x2', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[0].taxation}, {'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[1].taxation}, {'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[2].taxation} ] }, { 'sectionTitle': 'Realisasi produksi (ton) SHS % Tebu', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[0].realProductionPercentage}, {'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[1].realProductionPercentage}, {'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[2].realProductionPercentage} ] }, { 'sectionTitle': 'Rendemen yang dicapai = 4/1 (%)', 'sectionData': [ {'title':'Tahun 1','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[0].realYieldPercentage}, {'title':'Tahun 2','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[1].realYieldPercentage}, {'title':'Tahun 3','type':'text','placeholder':'masukkan sesuai satuan','value':e.details[2].realYieldPercentage} ] } ]
          replicateData.processingEfficiency.push(formData)
        })

        retrievedObject.liquidWaste.forEach((e, i) => {
          const formData = _.cloneDeep(limbahCair)
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
            replicateData.liquidWaste.push(form)
          })
        })

        retrievedObject.solidWaste.forEach((e, i) => {
          const formData = _.cloneDeep(limbahPadat)
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
            replicateData.solidWaste.push(form)
          })
        })

        retrievedObject.sideResult.forEach((e, i) => {
          const formData = _.cloneDeep(hasilSamping)
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
            replicateData.sideResult.push(form)
          })
        })

        retrievedObject.processingPartnership.forEach((dt,index) => {
          const formMitraOlah = _.cloneDeep(mitraOlah)
          formMitraOlah.forEach((dtFrm, i) => {
            dtFrm[0].value = dt.comodity
            dtFrm[1].value = dt.materialType
            dtFrm[2].value = dt.rawMaterialType
            dtFrm[3].value = dt.selfProcessedPercentage
            dtFrm[4].value = dt.partnerProcessedPercentage
            dtFrm[5].value = dt.processedWithContractPercentage
            dtFrm[6].value = dt.processedWithoutContractPercentage
            dtFrm[7].value = dt.description
            replicateData.processingPartnership.push(dtFrm)
          })
        })

        retrievedObject.qualityAchievement.forEach((dt,index) => {
          const formMutu = _.cloneDeep(mutu)
          formMutu.forEach((dtFrm, i) => {
            dtFrm[0].value = dt.productType
            dtFrm[1].value = dt.firstYearVolume
            dtFrm[2].value = dt.firstYearPercentage
            dtFrm[3].value = dt.secondYearVolume
            dtFrm[4].value = dt.secondYearPercentage
            dtFrm[5].value = dt.thirdYearVolume
            dtFrm[6].value = dt.thirdYearPercentage
            replicateData.qualityAchievement.push(dtFrm)
          })
        })

        retrievedObject.downstreamProduct.forEach((dt,index) => {
          const formProduksiHilir = _.cloneDeep(produksiHilir)
          formProduksiHilir.forEach((dtFrm, i) => {
            dtFrm[0].value = dt.processingType
            dtFrm[1].value = dt.qualityType
            dtFrm[2].value = dt.firstYearVolume
            dtFrm[3].value = dt.firstYearPercentage
            dtFrm[4].value = dt.secondYearVolume
            dtFrm[5].value = dt.secondYearPercentage
            dtFrm[6].value = dt.thirdYearVolume
            dtFrm[7].value = dt.thirdYearPercentage
            dtFrm[8].value = dt.avgVolume
            dtFrm[9].value = dt.avgPercentage
            replicateData.downstreamProduct.push(dtFrm)
          })
        })

        retrievedObject.processingUnit.forEach((dt,index) => {
          const formKebunPabrik = _.cloneDeep(kebunPabrik)
          formKebunPabrik.forEach((dtFrm, i) => {
            dtFrm[0].value = dt.comodity
            dtFrm[1].value = dt.unit
            dtFrm[2].value = dt.cityId
            dtFrm[3].value = dt.disctrictId
            dtFrm[4].value = dt.villageId
            dtFrm[5].value = dt.certifiedArea
            dtFrm[6].value = dt.installedArea
            dtFrm[7].value = dt.usedArea
            dtFrm[8].value = dt.certifier
            dtFrm[9].value = dt.certifNo
            dtFrm[10].value = dt.description
            replicateData.processingUnit.push(dtFrm)
          })
        })

        retrievedObject.lastThreeYearsProcessing.forEach((dt,index) => {
          const formLatihSekitar = _.cloneDeep(produksiPrimer)
          formLatihSekitar.forEach((dtFrm, i) => {
            dtFrm[0].value = dt.processingType
            dtFrm[1].value = dt.qualityType
            dtFrm[2].value = dt.firstYearVolume
            dtFrm[3].value = dt.firstYearPercentage
            dtFrm[4].value = dt.secondYearVolume
            dtFrm[5].value = dt.secondYearPercentage
            dtFrm[6].value = dt.thirdYearVolume
            dtFrm[7].value = dt.thirdYearPercentage
            dtFrm[8].value = dt.description
            replicateData.lastThreeYearsProcessing.push(dtFrm)
          })
        })

        const formProduksiKebun = _.cloneDeep(produksiKebun)
        formProduksiKebun.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.unownedGarden.sameGroupUnit
          dtFrm[1].value = retrievedObject.unownedGarden.otherFactoryWithContractUnit
          dtFrm[2].value = retrievedObject.unownedGarden.otherFactoryWithoutContractUnit
          dtFrm[3].value = retrievedObject.unownedGarden.soldUnit
          replicateData.unownedGarden.push(dtFrm)
        })

        setSumberEnergi(retrievedObject.energySource.villageId)
        setIzinProduk(retrievedObject.productAndQuality.certificateType)
        setHasilProduk(retrievedObject.productAndQuality.product)
        setSistemMutu(retrievedObject.productAndQuality.qualityManagement)
        setSistemMutuLain(retrievedObject.productAndQuality.otherStandard)
        setWaktuDibutuhkan(retrievedObject.productAndQuality.rspoDescription)

        setProdukHilirOpt('')
        setSistemMutuOpt(retrievedObject.productAndQuality.isImplementingManagement)
        setSistemIsoOpt(retrievedObject.productAndQuality.isImplementingIso9000)
        setSistemIsoLainOpt(retrievedObject.productAndQuality.isImplementingOtherStandard)
        setSertifikatOpt(retrievedObject.productAndQuality.isImplementingRspo)

        setKebunPabrik(replicateData.processingUnit)
        setProduksiKebun(replicateData.unownedGarden)
        setEfisiensi(replicateData.processingEfficiency)
        setBhnPenolong(replicateData.auxilliaryMaterial)
        setProduksiPrimer(replicateData.lastThreeYearsProcessing)
        setProduksiHilir(replicateData.downstreamProduct)
        setHasilSamping(replicateData.sideResult)
        setLimbahCair(replicateData.liquidWaste)
        setLimbahPadat(replicateData.solidWaste)
        setMutu(replicateData.qualityAchievement)
        setMitraOlah(replicateData.processingPartnership)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {

    let data = {
      "processingUnit": [],
      "unownedGarden": {
        "sameGroupUnit": produksiKebun[0][0].value,
        "otherFactoryWithContractUnit": produksiKebun[0][1].value,
        "otherFactoryWithoutContractUnit": produksiKebun[0][2].value,
        "soldUnit": produksiKebun[0][3].value
      },
      "processingEfficiency": [],
      "auxilliaryMaterial": [],
      "lastThreeYearsProcessing": [],
      "downstreamProduct": [],
      "sideResult": [],
      "solidWaste": [],
      "liquidWaste": [],
      "productAndQuality": {
          "certificateType": izinProduk,
          "product": hasilProduk,
          "isImplementingManagement": sistemMutuOpt,
          "qualityManagement": sistemMutu,
          "isImplementingIso9000": sistemIsoOpt,
          "file": {},
          "isImplementingOtherStandard": sistemIsoLainOpt,
          "otherStandard": sistemMutuLain,
          "isImplementingRspo": sertifikatOpt,
          "rspoDescription": waktuDibutuhkan
      },
      "qualityAchievement": [],
      "energySource": {
          "villageId": sumberEnergi
      },
      "processingPartnership": []
    }

    limbahCair.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.comodity = arr[0].sectionData[0].value
        dataTemp.processingType = arr[1].sectionData[0].value
        dataTemp.processedTotal = arr[1].sectionData[1].value
        dataTemp.selfProcessedPercentage = arr[1].sectionData[2].value
        dataTemp.otherPartyPercentage = arr[1].sectionData[3].value
        dataTemp.resultType = arr[1].sectionData[4].value
        dataTemp.unprocessedUsedPercentage = arr[2].sectionData[0].value
        dataTemp.unprocessedSoldPercentage = arr[2].sectionData[1].value
        dataTemp.unprocessedUnusedPercentage = arr[2].sectionData[2].value
      });
      data.liquidWaste.push(dataTemp)
    });

    limbahPadat.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.comodity = arr[0].sectionData[0].value
        dataTemp.processingType = arr[1].sectionData[0].value
        dataTemp.processedTotal = arr[1].sectionData[1].value
        dataTemp.selfProcessedPercentage = arr[1].sectionData[2].value
        dataTemp.otherPartyPercentage = arr[1].sectionData[3].value
        dataTemp.resultType = arr[1].sectionData[4].value
        dataTemp.unprocessedUsedPercentage = arr[2].sectionData[0].value
        dataTemp.unprocessedSoldPercentage = arr[2].sectionData[1].value
        dataTemp.unprocessedUnusedPercentage = arr[2].sectionData[2].value
      });
      data.solidWaste.push(dataTemp)
    });

    hasilSamping.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.comodity = arr[0].sectionData[0].value
        dataTemp.processingType = arr[1].sectionData[0].value
        dataTemp.processedTotal = arr[1].sectionData[1].value
        dataTemp.selfProcessedPercentage = arr[1].sectionData[2].value
        dataTemp.otherPartyPercentage = arr[1].sectionData[3].value
        dataTemp.resultType = arr[1].sectionData[4].value
        dataTemp.unprocessedUsedPercentage = arr[2].sectionData[0].value
        dataTemp.unprocessedSoldPercentage = arr[2].sectionData[1].value
        dataTemp.unprocessedUnusedPercentage = arr[2].sectionData[2].value
      });
      data.sideResult.push(dataTemp)
    });

    bhnPenolong.forEach((item, i) => {
      let dataTemp = {}
      let details = []
      let details1 = {}
      let details2 = {}
      let details3 = {}
      let details4 = {}
      item.forEach((e, i, arr) => {
        dataTemp.comodity = arr[0].sectionData[0].value
        details1.material = arr[1].sectionTitle
        details1.standardYieldPercentage = arr[1].sectionData[0].value
        details1.taxation = arr[1].sectionData[1].value

        details2.material = arr[2].sectionTitle
        details2.standardYieldPercentage = arr[2].sectionData[0].value
        details2.taxation = arr[2].sectionData[1].value

        details3.material = arr[3].sectionTitle
        details3.standardYieldPercentage = arr[3].sectionData[0].value
        details3.taxation = arr[3].sectionData[1].value

        details4.material = arr[4].sectionTitle
        details4.standardYieldPercentage = arr[4].sectionData[0].value
        details4.taxation = arr[4].sectionData[1].value
      });
      details.push(details1, details2, details3, details4)
      dataTemp.details = details
      data.auxilliaryMaterial.push(dataTemp)
    });

    efisiensi.forEach((item, i) => {
      let dataTemp = {}
      let details = []
      let details1 = {}
      let details2 = {}
      let details3 = {}
      item.forEach((e, i, arr) => {
        dataTemp.comodity = arr[0].sectionData[0].value
        details1.year = 1
        details1.inputVolume = arr[1].sectionData[0].value
        details1.standardYieldPercentage = arr[2].sectionData[0].value
        details1.taxation = arr[3].sectionData[0].value
        details1.realProductionPercentage = arr[4].sectionData[0].value
        details1.realYieldPercentage = arr[5].sectionData[0].value
        details2.year = 2
        details2.inputVolume = arr[1].sectionData[1].value
        details2.standardYieldPercentage = arr[2].sectionData[1].value
        details2.taxation = arr[3].sectionData[1].value
        details2.realProductionPercentage = arr[4].sectionData[1].value
        details2.realYieldPercentage = arr[5].sectionData[1].value
        details3.year = 3
        details3.inputVolume = arr[1].sectionData[2].value
        details3.standardYieldPercentage = arr[2].sectionData[2].value
        details3.taxation = arr[3].sectionData[2].value
        details3.realProductionPercentage = arr[4].sectionData[2].value
        details3.realYieldPercentage = arr[5].sectionData[2].value
      });
      details.push(details1, details2, details3)
      dataTemp.details = details
      data.processingEfficiency.push(dataTemp)
    });

    mitraOlah.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.comodity = item[0].value
        inv.materialType = item[1].value
        inv.rawMaterialType = item[2].value
        inv.selfProcessedPercentage = item[3].value
        inv.partnerProcessedPercentage = item[4].value
        inv.processedWithContractPercentage = item[5].value
        inv.processedWithoutContractPercentage = item[6].value
        inv.description = item[7].value
      });
      data.processingPartnership.push(inv)
    });

    mutu.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.productType = item[0].value
        inv.firstYearVolume = item[1].value
        inv.firstYearPercentage = item[2].value
        inv.secondYearVolume = item[3].value
        inv.secondYearPercentage = item[4].value
        inv.thirdYearVolume = item[5].value
        inv.thirdYearPercentage = item[6].value
      });
      data.qualityAchievement.push(inv)
    });

    produksiHilir.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.processingType = item[0].value
        inv.qualityType = item[1].value
        inv.firstYearVolume = item[2].value
        inv.firstYearPercentage = item[3].value
        inv.secondYearVolume = item[4].value
        inv.secondYearPercentage = item[5].value
        inv.thirdYearVolume = item[6].value
        inv.thirdYearPercentage = item[7].value
        inv.avgVolume = item[8].value
        inv.avgPercentage = item[9].value
      });
      data.downstreamProduct.push(inv)
    });

    produksiPrimer.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.processingType = item[0].value
        inv.qualityType = item[1].value
        inv.firstYearVolume = item[2].value
        inv.firstYearPercentage = item[3].value
        inv.secondYearVolume = item[4].value
        inv.secondYearPercentage = item[5].value
        inv.thirdYearVolume = item[6].value
        inv.thirdYearPercentage = item[7].value
        inv.description = item[8].value
      });
      data.lastThreeYearsProcessing.push(inv)
    });

    kebunPabrik.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.comodity = item[0].value
        inv.unit = item[1].value
        inv.cityId = item[2].value
        inv.disctrictId = item[3].value
        inv.villageId = item[4].value
        inv.certifiedArea = item[5].value
        inv.installedArea = item[6].value
        inv.usedArea = item[7].value
        inv.certifier = item[8].value
        inv.certifNo = item[9].value
        inv.description = item[10].value
      });
      data.processingUnit.push(inv)
    });

    setDataSubmit(data)

  }, [sumberEnergi,izinProduk,hasilProduk,sistemMutu,sistemMutuLain,waktuDibutuhkan
    ,produkHilirOpt,sistemMutuOpt,sistemIsoOpt,sistemIsoLainOpt,sertifikatOpt,kebunPabrik,produksiKebun
    ,efisiensi,bhnPenolong,produksiPrimer,produksiHilir,hasilSamping,limbahCair,limbahPadat,mutu,mitraOlah])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(() => {
    localStorage.setItem("olahNilai", JSON.stringify(dataSubmit));
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
          <span className={mng.base__subtitle}>Unit Pengolahan Hasil : Lokasi, Kapasitas Ijin, Kapasitas terpasang, Kapasitas terpakai dan Perijinan</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Apabila kebun milik pabrik</p>
          <div className="mt-2 mb-3 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              satuan disesuaikan dengan jenisnya, seperti ekor, ton, liter, dll
            </div>
          </div>
          <div className="flex flex-col">
            {
              kebunPabrik.map((items, i) => (
                <div className={`${mng["base__formlabel_custom2"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kebunPabrik, setKebunPabrik)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <>
                        {
                          item.type == 'textArea' ? (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                              <span className={mng.base__inputtitle}>{item.title}</span>
                              <textarea className={mng.base__inputbase} type={item.type} rows="20" placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, kebunPabrik, setKebunPabrik, i, ii)}></textarea>
                            </label>
                          ):(
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                              <span className={mng.base__inputtitle}>{item.title}</span>
                              <input className={mng.base__inputbase} type={item.type} placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, kebunPabrik, setKebunPabrik, i, ii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnKebunPabrik}>
            + Tambah Data Jenis dan Unit Pengolahan
          </div>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Apabila kebun tidak milik pabrik</p>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tindakan terhadap produksi kebun</p>
          <div className="mt-2 mb-3 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              satuan disesuaikan dengan jenisnya, seperti ekor, ton, liter, dll
            </div>
          </div>

          <div className="flex flex-col">
            {
              produksiKebun.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, produksiKebun, setProduksiKebun, i, ii)}/>
                    </label>
                  ))
                }
                </div>
              ))
            }

          </div>

        </div>


        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Tingkat Efisiensi Proses Pengolahan 3 tahun terakhir Sebelum Penilaian Usaha Perkebunan Saat Ini</span>
          <div className="mt-2 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              pertanyaan selanjutnya tidak perlu diisi apabila kebun tidak memiliki unit pengolahan
            </div>
          </div>

          <div className="flex flex-col">
            {
              efisiensi.map((items, i) => (
                <div className={`${mng["base__formlabel_unique3"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, efisiensi, setEfisiensi)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={` ${mng["base__formlabel_unique3-firstSecFull"]}`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_unique3"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, efisiensi, setEfisiensi, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]} mt-0`} onClick={handleBtnAddEfisiensi}>
            + Tambah Data Komoditas
          </div>

        </div>


        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Bahan Penolong yang Digunakan</span>

          <div className="flex flex-col">
            {
              bhnPenolong.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, bhnPenolong, setBhnPenolong)}>
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
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, bhnPenolong, setBhnPenolong, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddBhnPenolong}>
            + Tambah Data Komoditas
          </div>
        </div>


        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Hasil Olah 3 tahun terakhir  Sebelum Klasifikasi saat ini</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Produksi Primer</p>
          {
            produksiPrimer.map((items, i) => (
              <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
              {
                i > 0 ?
                <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, produksiPrimer, setProduksiPrimer)}>
                  do_not_disturb_on
                </span>
                :
                <></>
              }
              {
                items.map((item,ii) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, produksiPrimer, setProduksiPrimer, i, ii)}/>
                  </label>
                ))
              }
              </div>
            ))
          }

          <div className={`${mng["base__btn"]}`} onClick={handleBtnProduksiPrimer}>
            + Tambah Data Jenis Hasil Olah
          </div>
        </div>


        <div className={`${mng["base__formsection"]}`}>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Produk Hilir</p>
          <div className="mt-2 mb-3 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
            <div className="flex items-center">
              <img src="/icon/info-circle.svg" className="w-6" />
              <div className="mx-2 text-sm font-semibold text-primary-blue-1">
                Perhatian!
              </div>
            </div>
            <div className="px-8 text-xs">
              khusus untuk kelapa sawit, di kolom 3 diisi dengan kandungan Asam Lemak Bebas Produk Hilir
            </div>
          </div>

          {
            produksiHilir.map((items, i) => (
              <div className={`${mng["base__formlabel_twin"]}`} key={i}>
              {
                i > 0 ?
                <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, produksiHilir, setProduksiHilir)}>
                  do_not_disturb_on
                </span>
                :
                <></>
              }
              {
                items.map((item,ii) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, produksiHilir, setProduksiHilir, i, ii)}/>
                  </label>
                ))
              }
              </div>
            ))
          }

          <div className={`${mng["base__btn"]}`} onClick={handleBtnProduksiHilir}>
            + Tambah Data Komoditas
          </div>

          <label className={`${mng["base__formlabel"]} mt-6`}>
            <span className={mng.base__inputtitle}>Apakah produk hilir diolah sendiri? (dalam 1 manajemen)</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="produkHilirOpt"
                onClick={() => setProdukHilirOpt('Iya')}
                radioValue={produkHilirOpt}
                selected={produkHilirOpt == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="produkHilirOpt"
                onClick={() => setProdukHilirOpt('Tidak')}
                radioValue={produkHilirOpt}
                selected={produkHilirOpt == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>

        </div>


        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Pemanfaatan Hasil Samping tahun terakhir Sebelum Penilaian Usaha Perkebunan saat ini</span>
          <div className="flex flex-col">
            {
              hasilSamping.map((items, i) => (
                <div className={`${mng["base__formlabel_custom3"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, hasilSamping, setHasilSamping)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_custom3-section"]}`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_custom3-section-row"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, hasilSamping, setHasilSamping, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]} mt-0`} onClick={handleBtnAddHasilSamping}>
            + Tambah Data Komoditas
          </div>
        </div>


        <div className={`${mng["base__formsection"]}`}>
          <div className="flex flex-col">
            {
              limbahCair.map((items, i) => (
                <div className={`${mng["base__formlabel_custom3"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, limbahCair, setLimbahCair)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_custom3-section"]}`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_custom3-section-row"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, limbahCair, setLimbahCair, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]} mt-0`} onClick={handleBtnAddLimbahCair}>
            + Tambah Data Komoditas
          </div>
        </div>


        <div className={`${mng["base__formsection"]}`}>
          <div className="flex flex-col">
            {
              limbahPadat.map((items, i) => (
                <div className={`${mng["base__formlabel_custom3"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, limbahPadat, setLimbahPadat)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_custom3-section"]}`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_custom3-section-row"]}`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, limbahPadat, setLimbahPadat, i, ii, iii)}/>
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

          <div className={`${mng["base__btn"]} mt-0`} onClick={handleBtnAddLimbahPadat}>
            + Tambah Data Komoditas
          </div>
        </div>


        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Produk dan Mutu</span>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Jenis Produk</p>
          <label className={`${mng["base__formlabel"]}`}>
            <span className={mng.base__inputtitle}>Berdasarkan izin</span>
            <input className={mng.base__inputbase} type='text' placeholder='masukkan jenis produk berdasarkan izin' value={izinProduk} onChange={(e) => setIzinProduk(e.target.value)}/>
          </label>
          <label className={`${mng["base__formlabel"]}`}>
            <span className={mng.base__inputtitle}>Yang dihasilkan</span>
            <input className={mng.base__inputbase} type='text' placeholder='masukkan jenis produk berdasarkan hasil' value={hasilProduk} onChange={(e) => setHasilProduk(e.target.value)}/>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Penerapan Sistem Manajemen Mutu</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan Saudara sudah menerapkan sistem manajemen mutu?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemMutuOpt"
                onClick={() => setSistemMutuOpt('Sudah')}
                radioValue={sistemMutuOpt}
                selected={sistemMutuOpt == 'Sudah'}
                label="Sudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemMutuOpt"
                onClick={() => setSistemMutuOpt('Belum')}
                radioValue={sistemMutuOpt}
                selected={sistemMutuOpt == 'Belum'}
                label="Belum"
              />
            </div>
          </label>
          {sistemMutuOpt == 'Sudah' ? (
            <div className="mt-6 mb-6">
              <label className={`${mng["base__formlabel"]}`}>
                <span className={mng.base__inputtitle}>Apabila sudah, sebutkan</span>
                <input className={mng.base__inputbase} type='text' placeholder='masukkan keterangan' value={sistemMutu} onChange={(e) => setSistemMutu(e.target.value)}/>
              </label>
            </div>
          ) : (
            <></>
          )}
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan Saudara sudah menerapkan sistem manajemen mutu ISO 9000?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemIsoOpt"
                onClick={() => setSistemIsoOpt('Sudah')}
                radioValue={sistemIsoOpt}
                selected={sistemIsoOpt == 'Sudah'}
                label="Sudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemIsoOpt"
                onClick={() => setSistemIsoOpt('Belum')}
                radioValue={sistemIsoOpt}
                selected={sistemIsoOpt == 'Belum'}
                label="Belum"
              />
            </div>
          </label>
          {sistemIsoOpt == 'Sudah' ? (
            <div className="mt-6 mb-4">
              <div className="flex w-full items-center justify-between mb-3">
                <div>
                  <div className=" text-sm font-semibold">
                    Lampiran Sertifikat ISO 9000
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
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan Saudara sudah menerapkan manajemen mutu selain ISO 9000? (misal SNI, kendali mutu, dll)</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemIsoLainOpt"
                onClick={() => setSistemIsoLainOpt('Sudah')}
                radioValue={sistemIsoLainOpt}
                selected={sistemIsoLainOpt == 'Sudah'}
                label="Sudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemIsoLainOpt"
                onClick={() => setSistemIsoLainOpt('Belum')}
                radioValue={sistemIsoLainOpt}
                selected={sistemIsoLainOpt == 'Belum'}
                label="Belum"
              />
            </div>
          </label>
          {sistemIsoLainOpt == 'Sudah' ? (
            <div className="mt-6 mb-6">
              <label className={`${mng["base__formlabel"]}`}>
                <span className={mng.base__inputtitle}>Sebutkan manajemen mutu yang diterapkan selain ISO 9000</span>
                <input className={mng.base__inputbase} type='text' placeholder='sebutkan' value={sistemMutuLain} onChange={(e) => setSistemMutuLain(e.target.value)}/>
              </label>
            </div>
          ) : (
            <></>
          )}
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan Saudara sudah memperoleh sertifikat RSPO (Roundtable Sustainable Palm Oil)?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sertifikatOpt"
                onClick={() => setSertifikatOpt('Sudah')}
                radioValue={sertifikatOpt}
                selected={sertifikatOpt == 'Sudah'}
                label="Sudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sertifikatOpt"
                onClick={() => setSertifikatOpt('Belum')}
                radioValue={sertifikatOpt}
                selected={sertifikatOpt == 'Belum'}
                label="Belum"
              />
            </div>
          </label>
          {sertifikatOpt == 'Sudah' ? (
            <div className="mt-6">
              <label className={`${mng["base__formlabel"]}`}>
                <span className={mng.base__inputtitle}>Apabila sudah, jelaskan keterangan waktu diperoleh dan penjelasan lainnya yang dibutuhkan</span>
                <input className={mng.base__inputbase} type='text' placeholder='sebutkan' value={waktuDibutuhkan} onChange={(e) => setWaktuDibutuhkan(e.target.value)}/>
              </label>
            </div>
          ) : (
            <></>
          )}

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Capaian Mutu</p>
          {
            mutu.map((items, i) => (
              <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
              {
                i > 0 ?
                <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, mutu, setMutu)}>
                  do_not_disturb_on
                </span>
                :
                <></>
              }
              {
                items.map((item,ii) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, mutu, setMutu, i, ii)}/>
                  </label>
                ))
              }
              </div>
            ))
          }

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddMutu}>
            + Tambah Data Jenis Produk
          </div>
        </div>


        <div className={`${mng["base__formsection"]} `}>
          <span className={mng.base__subtitle}>Energi</span>

          <InputForm
            titleForm="Sumber energi yang digunakan berasal dari (pilih yang sesuai)"
            onChange={(e) => setSumberEnergi(e.target.value)}
            type="text"
            values={sumberEnergi}
            placeholder="pilih desa"
            values={sumberEnergi}
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-sm`}
            selectionArea={true}
          />
        </div>


        <div className={`${mng["base__formsection"]} border-b-0`}>
          <span className={mng.base__subtitle}>Kemitraan Pengolahan</span>

          {
            mitraOlah.map((items, i) => (
              <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
              {
                i > 0 ?
                <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, mitraOlah, setMitraOlah)}>
                  do_not_disturb_on
                </span>
                :
                <></>
              }
              {
                items.map((item,ii) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e, mitraOlah, setMitraOlah, i, ii)}/>
                  </label>
                ))
              }
              </div>
            ))
          }

          <div className={`${mng["base__btn"]}`} onClick={handleBtnAddMitraOlah}>
            + Tambah Data Komoditas
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

export default FormPengolahan;
