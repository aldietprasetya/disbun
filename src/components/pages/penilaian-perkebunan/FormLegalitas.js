import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router'
import { useSession } from "next-auth/react";
import _ from 'lodash';
import axios from 'axios';
import { appConfig } from 'src/config';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import InputForm from '../admin/infografis/InputForm';
import InputFileButton from 'src/components/customInput/InputFileButton';
import mng from '../../../styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormLegalitas = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { data: session } = useSession();

  const [isError, setIsError] = useState(false);

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState({})
  const [cityId, setCityId] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [villageId, setVillageId] = useState('');

  const iklimOpt = [
    { id:1, value: 'Tropis', label: 'Tropis' },
    { id:2, value: 'Subtropis', label: 'Subtropis' },
    { id:3, value: 'Sedang', label: 'Sedang' },
    { id:4, value: 'Dingin', label: 'Dingin' }
  ];

  let [year, setYear] = useState([]);
  let [hgu, setHgu] = useState([]);
  let [kota, setKota] = useState([]);
  let [iup, setIup] = useState([]);
  let [kebun, setKebun] = useState([]);
  useEffect(() => {
    if (session) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${session.user.accessToken}`

      let hguArr = []
      let yearArr = []
      let kotaArr = []
      let iupArr = []
      let kebunArr = []
      const getHgu = axios.get(`${appConfig.baseUrl}/hgu-types`);
      getHgu.then(dt => {
        dt.data.data.acquiredHguTypes.forEach((item, i) => {
          const val = {
            id: item.id,
            value: item.hgu_name,
            label: item.hgu_name
          }
          hguArr.push(val)
        });
        setHgu(hguArr)
      })

      const getKota = axios.get(`${appConfig.baseUrl}/cities`);
      getKota.then(dt => {
        dt.data.data.acquiredCities.forEach((item, i) => {
          const val = {
            id: item.id,
            value: item.city,
            label: item.city
          }
          kotaArr.push(val)
        });
        setKota(kotaArr)
      })

      const getIup = axios.get(`${appConfig.baseUrl}/company-statuses`);
      getIup.then(
        function(dt) {
          dt.data.data.acquiredCompanyStatuses.forEach((item, i) => {
            const val = {
              id: item.id,
              value: item.company_status_name,
              label: item.company_status_name
            }
            iupArr.push(val)
          });
          setIup(iupArr)
        },
        function(err) {
          console.log(err)
        }
      )

      const getYear = axios.get(`${appConfig.baseUrl}/evaluation-periods`);
      getYear.then(
        function(dt) {
          dt.data.data.evaluationPeriod.forEach((item, i) => {
            const val = {
              id: item.id,
              value: item.evaluation_period,
              label: item.evaluation_period
            }
            yearArr.push(val)
          });
          setYear(yearArr)
        },
        function(err) {
          console.log(err)
        }
      )

      const getKeb = axios.get(`${appConfig.baseUrl}/gardens`);
      getKeb.then(
        function(dt) {
          dt.data.data.acquiredGardens.forEach((item, i) => {
            const val = {
              id: item.id,
              value: (item.garden_name + "/" + item.factory_name),
              label: (item.garden_name + "/" + item.factory_name)
            }
            kebunArr.push(val)
          });
          setKebun(kebunArr)
        },
        function(err) {
          console.log(err)
        }
      )
    }
  }, [session])

  let [kecamatan, setKecamatan] = useState([]);
  useEffect(() => {
    setDistrictId('')
    setVillageId('')

    if (cityId != '') {
      let kecamatanArr = []
      const fetch = axios.get(`${appConfig.baseUrl}/districts/${cityId.id}`);
      fetch.then(dt => {
        dt.data.data.acquiredDistrict.forEach((item, i) => {
          const val = {
            id: item.id,
            value: item.district,
            label: item.district
          }
          kecamatanArr.push(val)
        });
        setKecamatan(kecamatanArr)
      })
    }
  },[cityId])

  let [desa, setDesa] = useState([]);
  useEffect(() => {
    setVillageId('')

    if (districtId != '') {
      let desaArr = []
      const fetch = axios.get(`${appConfig.baseUrl}/villages/${districtId.id}`);
      fetch.then(dt => {
        dt.data.data.acquiredVillage.forEach((item, i) => {
          const val = {
            id: item.id,
            value: item.village,
            label: item.village
          }
          desaArr.push(val)
        });
        setDesa(desaArr)
      })
    }
  },[districtId])

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
    [ {'title':'Kota/Kabupaten','placeholder':'Pilih Kota/Kab.','type':'text','value':'','isOpt':'kota'}, {'title':'kecamatan','placeholder':'Pilih Kecamatan','type':'text','value':'','isOpt':'kecamatan'}, {'title':'Kelurahan/Desa','placeholder':'Pilih Kel/Desa','type':'text','value':'','isOpt':'desa'} ]
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
      {'title':'Luas Lahan (Ha)','placeholder':'Luas Lahan dalam Ha','type':'number','value':'','isOpt':'normal'},
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
      {'title':'Luas Lahan (Ha)','placeholder':'Luas Lahan dalam Ha','type':'number','value':'','isOpt':'normal'},
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
    [ { 'sectionTitle': 'Tanah', 'sectionData': [ {'title':'Jenis Tanah','type':'text','placeholder':'Pilih Jenis Tanah','value':'','isOpt':'opt'}, {'title':'Ketinggian dari Muka air laut (m)','type':'number','placeholder':'Nilai Ketinggian','value':'','isOpt':'normal'}, ] }, { 'sectionTitle': 'Lereng Datar (0-8 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':'normal'}, {'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':'','isOpt':'normal'}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':'normal'}, ] }, { 'sectionTitle': 'Lereng Landai (8-15 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':'normal'}, {'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':'','isOpt':'normal'}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':'normal'}, ] }, { 'sectionTitle': 'Lereng Berombak (15-24 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':'normal'}, {'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':'','isOpt':'normal'}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':'normal'}, ] }, { 'sectionTitle': 'Lereng Berbukit (24-45 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':'normal'}, {'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':'','isOpt':'normal'}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':'normal'}, ] }, { 'sectionTitle': 'Lereng Bergunung (>45 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':'normal'}, {'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':'','isOpt':'normal'}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':'normal'}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Tekstur Tanah','type':'text','placeholder':'Tekstur Tanah','value':'','isOpt':'normal'}, {'title':'Drainase','type':'text','placeholder':'Kondisi Drainase','value':'','isOpt':'normal'}, {'title':'Kedalaman efektif solum (m)','type':'number','placeholder':'Nilai Kedalaman dalam meter','value':'','isOpt':'normal'}, {'title':'Sumber Informasi','type':'text','placeholder':'Sumber Informasi','value':'','isOpt':'normal'}, ] } ]
  ])

  const [gambut, setGambut] = useState([
    [ {'title':'Ketebalan gambut (m)','placeholder':'Nilai Ketebalan Gambut (m)','type':'number','value':'','isOpt':'normal'}, {'title':'Tingkat dekomposisi','placeholder':'Pilih Tingkat Dekomposisi','type':'text','value':'','isOpt':'opt'}, {'title':'Lapisan Tanah di Bawah Gambut','placeholder':'Lapisan tanah di bawah gambut','type':'textarea','value':'','isOpt':'normal'}, ]
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
    [{ 'sectionTitle': 'Kelas Kesesuaian Lahan', 'sectionData': [ {'title':'Jenis Komoditas','type':'text','placeholder':'Tulis Komoditas Tanaman','value':''}, ] }, { 'sectionTitle': 'Kelas Lahan S1', 'sectionData': [ {'title':'Lokasi','type':'text','placeholder':'Masukkan lokasi','value':''}, {'title':'Luas (Ha)','type':'number','placeholder':'Luas dalam Ha','value':''}, {'title':'Ditetapkan Oleh','type':'text','placeholder':'Yang Menetapkan','value':''}, ] }, { 'sectionTitle': 'Kelas Lahan S2', 'sectionData': [ {'title':'Lokasi','type':'text','placeholder':'Masukkan lokasi','value':''}, {'title':'Luas (Ha)','type':'number','placeholder':'Luas dalam Ha','value':''}, {'title':'Ditetapkan Oleh','type':'text','placeholder':'Yang Menetapkan','value':''}, ] }, { 'sectionTitle': 'Kelas Lahan S3', 'sectionData': [ {'title':'Lokasi','type':'text','placeholder':'Masukkan lokasi','value':''}, {'title':'Luas (Ha)','type':'number','placeholder':'Luas dalam Ha','value':''}, {'title':'Ditetapkan Oleh','type':'text','placeholder':'Yang Menetapkan','value':''}, ] }]
  ])

  function handleBtnAddSesuaiLahan() {
    setSesuaiLahan([...sesuaiLahan,[{ 'sectionTitle': 'Kelas Kesesuaian Lahan', 'sectionData': [ {'title':'Jenis Komoditas','type':'text','placeholder':'Tulis Komoditas Tanaman','value':''}, ] }, { 'sectionTitle': 'Kelas Lahan S1', 'sectionData': [ {'title':'Lokasi','type':'text','placeholder':'Masukkan lokasi','value':''}, {'title':'Luas (Ha)','type':'number','placeholder':'Luas dalam Ha','value':''}, {'title':'Ditetapkan Oleh','type':'text','placeholder':'Yang Menetapkan','value':''}, ] }, { 'sectionTitle': 'Kelas Lahan S2', 'sectionData': [ {'title':'Lokasi','type':'text','placeholder':'Masukkan lokasi','value':''}, {'title':'Luas (Ha)','type':'number','placeholder':'Luas dalam Ha','value':''}, {'title':'Ditetapkan Oleh','type':'text','placeholder':'Yang Menetapkan','value':''}, ] }, { 'sectionTitle': 'Kelas Lahan S3', 'sectionData': [ {'title':'Lokasi','type':'text','placeholder':'Masukkan lokasi','value':''}, {'title':'Luas (Ha)','type':'number','placeholder':'Luas dalam Ha','value':''}, {'title':'Ditetapkan Oleh','type':'text','placeholder':'Yang Menetapkan','value':''}, ] }]])
  }

  ////////////////////////// Data Tahun ////////////////////////////////

  const [dataTahun, setDataTahun] = useState([
    [{ 'sectionTitle': '', 'sectionData': [ {'title':'Tahun','type':'number','placeholder':'YYYY','value':''}, ] }, { 'sectionTitle': 'Januari', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Februari', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Maret', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'April', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Mei', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Juni', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Juli', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Agustus', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'September', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Oktober', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'November', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Desember', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Rata-rata/Bulan CH≥60 mm','type':'number','placeholder':'automated','value':''}, {'title':'rata-rata HH dengan CH≥60 mm','type':'number','placeholder':'automated','value':''}, {'title':'Rata-rata/Bulan CH<60 mm','type':'number','placeholder':'automated','value':''}, {'title':'rata-rata HH dengan CH<60 mm','type':'number','placeholder':'automated','value':''}, ] }]
  ])

  function handleBtnAddDataTahun() {
    setDataTahun([...dataTahun,[
      { 'sectionTitle': '', 'sectionData': [ {'title':'Tahun','type':'number','placeholder':'YYYY','value':''}, ] }, { 'sectionTitle': 'Januari', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Februari', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Maret', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'April', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Mei', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Juni', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Juli', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Agustus', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'September', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Oktober', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'November', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': 'Desember', 'sectionData': [ {'title':'Curah Hujan (mm)','type':'number','placeholder':'Nilai curah hujan','value':''}, {'title':'Jumlah Hari Hujan','type':'number','placeholder':'Jumlah','value':''}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Rata-rata/Bulan CH≥60 mm','type':'number','placeholder':'automated','value':''}, {'title':'rata-rata HH dengan CH≥60 mm','type':'number','placeholder':'automated','value':''}, {'title':'Rata-rata/Bulan CH<60 mm','type':'number','placeholder':'automated','value':''}, {'title':'rata-rata HH dengan CH<60 mm','type':'number','placeholder':'automated','value':''}, ] }
    ]])
  }

  ////////////////////////// OTHER FUNCTION ////////////////////////////////

  function removeLabel(i,state,setState) {
    setState(state.filter((item, idx) => idx != i))
  }

  function formRegularChange(e, state, setState, index, index2) {
    const list = [...state];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = e
          }
        });
      }
    });
    setState(list);
  }

  function formSectionChange(e, state, setState, index, index2, index3) {
    const list = [...state];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.sectionData.forEach((item3, iii) => {
              if (iii == index3) {
                item3.value = e
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
      let retrievedObject = JSON.parse(localStorage.getItem('legalitasNilai'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
          "identitas": [],
          "kantorPusat": [],
          "kantorWakil": [],
          "lokasi": [],
          "lingkupUsaha": [],
          "skRencana": [],
          "skTugas": [],
          "skUsahaBudi": [],
          "skUsahaIndustri": [],
          "skUsahaTani": [],
          "skUsahaDaftar": [],
          "skUsahaKebun": [],
          "iklim": [],
          "hkUsaha": [],
          "hguProses": [],
          "kelolaLingkungan": [],
          "dataTahun": [],
          "tanahIklim": [],
          "gambut": [],
        }

        const formIdentitas = _.cloneDeep(identitas)
        formIdentitas.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.companyName
          dtFrm[1].value = retrievedObject.companyStatusId
          replicateData.identitas.push(dtFrm)
        })

        const formKantorPusat = _.cloneDeep(kantorPusat)
        formKantorPusat.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.centerAddress
          dtFrm[1].value = retrievedObject.centerPhone
          dtFrm[2].value = retrievedObject.centerFax
          replicateData.kantorPusat.push(dtFrm)
        })

        const formKantorWakil = _.cloneDeep(kantorWakil)
        formKantorWakil.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.representativeAddress
          dtFrm[1].value = retrievedObject.representativePhone
          dtFrm[2].value = retrievedObject.representativeFax
          replicateData.kantorWakil.push(dtFrm)
        })

        const formLokasi = _.cloneDeep(lokasi)
        formLokasi.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.gardenCity
          dtFrm[1].value = retrievedObject.gardenDistrict
          dtFrm[2].value = retrievedObject.gardenVillage
          replicateData.lokasi.push(dtFrm)
        })

        const formLingkup = _.cloneDeep(lingkupUsaha)
        formLingkup.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.comodity
          dtFrm[1].value = retrievedObject.comodityProcessing
          dtFrm[2].value = retrievedObject.processingProduct
          replicateData.lingkupUsaha.push(dtFrm)
        })

        const formSkRencana = _.cloneDeep(skRencana)
        formSkRencana.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.skPirTrans.no
          dtFrm[1].value = retrievedObject.skPirTrans.date
          dtFrm[2].value = retrievedObject.skPirTrans.licensor
          // dtFrm[3].value = retrievedObject.skPirTrans.file
          replicateData.skRencana.push(dtFrm)
        })

        const formSkTugas = _.cloneDeep(skTugas)
        formSkTugas.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.skPirBun.no
          dtFrm[1].value = retrievedObject.skPirBun.date
          dtFrm[2].value = retrievedObject.skPirBun.licensor
          // dtFrm[3].value = retrievedObject.skPirBun.file
          replicateData.skTugas.push(dtFrm)
        })

        const formSkUsahaBudi = _.cloneDeep(skUsahaBudi)
        formSkUsahaBudi.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.iup.no
          dtFrm[1].value = retrievedObject.iup.date
          dtFrm[2].value = retrievedObject.iup.licensor
          // dtFrm[3].value = retrievedObject.iup.file
          replicateData.skUsahaBudi.push(dtFrm)
        })

        const formSkUsahaIndustri = _.cloneDeep(skUsahaIndustri)
        formSkUsahaIndustri.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.skBpkm.no
          dtFrm[1].value = retrievedObject.skBpkm.date
          dtFrm[2].value = retrievedObject.skBpkm.licensor
          // dtFrm[3].value = retrievedObject.skBpkm.file
          replicateData.skUsahaIndustri.push(dtFrm)
        })

        const formSkUsahaTani = _.cloneDeep(skUsahaTani)
        formSkUsahaTani.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.spup.no
          dtFrm[1].value = retrievedObject.spup.date
          dtFrm[2].value = retrievedObject.spup.licensor
          // dtFrm[3].value = retrievedObject.spup.file
          replicateData.skUsahaTani.push(dtFrm)
        })

        const formSkUsahaDaftar = _.cloneDeep(skUsahaDaftar)
        formSkUsahaDaftar.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.skBudidayaPerkebunan.no
          dtFrm[1].value = retrievedObject.skBudidayaPerkebunan.date
          dtFrm[2].value = retrievedObject.skBudidayaPerkebunan.licensor
          // dtFrm[3].value = retrievedObject.skBudidayaPerkebunan.file
          replicateData.skUsahaDaftar.push(dtFrm)
        })

        const formSkUsahaKebun = _.cloneDeep(skUsahaKebun)
        formSkUsahaKebun.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.skIndustriPerkebunan.no
          dtFrm[1].value = retrievedObject.skIndustriPerkebunan.date
          dtFrm[2].value = retrievedObject.skIndustriPerkebunan.licensor
          // dtFrm[3].value = retrievedObject.skIndustriPerkebunan.file
          replicateData.skUsahaKebun.push(dtFrm)
        })

        const formIklim = _.cloneDeep(iklim)
        formIklim.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.climates[0].climateType
          dtFrm[1].value = retrievedObject.climates[0].rainfallSource
          replicateData.iklim.push(dtFrm)
        })

        retrievedObject.legalities.forEach((e, i) => {
          const formData = _.cloneDeep(hkUsaha)
          formData.forEach((form,ii) => {
            form.forEach((ee, iii) => {
              if (ee.title != 'Lampiran Dokumen Lengkap HGU') {
                ee.value = e[Object.keys(e)[iii]]
              }
            })
            replicateData.hkUsaha.push(form)
          })
        })

        retrievedObject.pendingLegalities.forEach((e, i) => {
          const formData = _.cloneDeep(hguProses)
          formData.forEach((form,ii) => {
            form.forEach((ee, iii) => {
              if (ee.title != 'Lampiran Berkas HGU Dalam Proses') {
                ee.value = e[Object.keys(e)[iii]]
              }
            })
            replicateData.hguProses.push(form)
          })
        })

        retrievedObject.landSuitabilities.forEach((e, i) => {
          const formData = _.cloneDeep(sesuaiLahan)
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
            replicateData.kelolaLingkungan.push(form)
          })
        })

        retrievedObject.climates.forEach((e, i) => {
          const formData = _.cloneDeep(dataTahun)
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
            replicateData.dataTahun.push(form)
          })
        })

        const formGambut = _.cloneDeep(gambut)
        formGambut.forEach((dtFrm, i) => {
          dtFrm[0].value = retrievedObject.land.peatDepth
          dtFrm[1].value = retrievedObject.land.decompositionLevel
          dtFrm[2].value = retrievedObject.land.landUnderPeat
          replicateData.gambut.push(dtFrm)
        })

        setPeriodeThnPenilaian(retrievedObject.periodId)
        setNamaKebun(retrievedObject.gardenId)

        setIdentitas(replicateData.identitas)
        setKantorPusat(replicateData.kantorPusat)
        setKantorWakil(replicateData.kantorWakil)

        setLokasi(replicateData.lokasi)

        setLingkupUsaha(replicateData.lingkupUsaha)

        setHkUsaha(replicateData.hkUsaha)

        setHguProses(replicateData.hguProses)

        setSkRencana(replicateData.skRencana)

        setSkTugas(replicateData.skTugas)

        setSkUsahaBudi(replicateData.skUsahaBudi)

        setSkUsahaIndustri(replicateData.skUsahaIndustri)

        setSkUsahaTani(replicateData.skUsahaTani)

        setSkUsahaDaftar(replicateData.skUsahaDaftar)

        setSkUsahaKebun(replicateData.skUsahaKebun)

        setTanahIklim([ [{ 'sectionTitle': 'Tanah', 'sectionData': [{ 'title': 'Jenis Tanah', 'type': 'text', 'placeholder': 'Pilih Jenis Tanah', 'value': retrievedObject.land.landType, 'isOpt': 'opt' }, { 'title': 'Ketinggian dari Muka air laut (m)', 'type': 'number', 'placeholder': 'Nilai Ketinggian', 'value': retrievedObject.land.msal, 'isOpt': 'normal' }, ] }, { 'sectionTitle': 'Lereng Datar (0-8 %)', 'sectionData': [{ 'title': 'Luas (Ha)', 'type': 'number', 'placeholder': 'Luas Lahan dalam Ha', 'value': retrievedObject.land.flatArea, 'isOpt': 'normal' }, { 'title': 'Persentase (%)', 'type': 'number', 'placeholder': 'Persentase', 'value': retrievedObject.land.flatPercentage, 'isOpt': 'normal' }, { 'title': 'Keterangan', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.land.flatDescription, 'isOpt': 'normal' }, ] }, { 'sectionTitle': 'Lereng Landai (8-15 %)', 'sectionData': [{ 'title': 'Luas (Ha)', 'type': 'number', 'placeholder': 'Luas Lahan dalam Ha', 'value': retrievedObject.land.slopeArea, 'isOpt': 'normal' }, { 'title': 'Persentase (%)', 'type': 'number', 'placeholder': 'Persentase', 'value': retrievedObject.land.slopePercentage, 'isOpt': 'normal' }, { 'title': 'Keterangan', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.land.slopeDescription, 'isOpt': 'normal' }, ] }, { 'sectionTitle': 'Lereng Berombak (15-24 %)', 'sectionData': [{ 'title': 'Luas (Ha)', 'type': 'number', 'placeholder': 'Luas Lahan dalam Ha', 'value': retrievedObject.land.midArea, 'isOpt': 'normal' }, { 'title': 'Persentase (%)', 'type': 'number', 'placeholder': 'Persentase', 'value': retrievedObject.land.midPercentage, 'isOpt': 'normal' }, { 'title': 'Keterangan', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.land.midDescription, 'isOpt': 'normal' }, ] }, { 'sectionTitle': 'Lereng Berbukit (24-45 %)', 'sectionData': [{ 'title': 'Luas (Ha)', 'type': 'number', 'placeholder': 'Luas Lahan dalam Ha', 'value': retrievedObject.land.steeptArea, 'isOpt': 'normal' }, { 'title': 'Persentase (%)', 'type': 'number', 'placeholder': 'Persentase', 'value': retrievedObject.land.steepPercentage, 'isOpt': 'normal' }, { 'title': 'Keterangan', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.land.steepDescription, 'isOpt': 'normal' }, ] }, { 'sectionTitle': 'Lereng Bergunung (>45 %)', 'sectionData': [{ 'title': 'Luas (Ha)', 'type': 'number', 'placeholder': 'Luas Lahan dalam Ha', 'value': retrievedObject.land.verySteepArea, 'isOpt': 'normal' }, { 'title': 'Persentase (%)', 'type': 'number', 'placeholder': 'Persentase', 'value': retrievedObject.land.verySteepPercentage, 'isOpt': 'normal' }, { 'title': 'Keterangan', 'type': 'text', 'placeholder': 'Keterangan', 'value': retrievedObject.land.verySteepDescription, 'isOpt': 'normal' }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Tekstur Tanah', 'type': 'text', 'placeholder': 'Tekstur Tanah', 'value': retrievedObject.land.texture, 'isOpt': 'normal' }, { 'title': 'Drainase', 'type': 'text', 'placeholder': 'Kondisi Drainase', 'value': retrievedObject.land.drainage, 'isOpt': 'normal' }, { 'title': 'Kedalaman efektif solum (m)', 'type': 'number', 'placeholder': 'Nilai Kedalaman dalam meter', 'value': retrievedObject.land.solumDepth, 'isOpt': 'normal' }, { 'title': 'Sumber Informasi', 'type': 'text', 'placeholder': 'Sumber Informasi', 'value': retrievedObject.land.source, 'isOpt': 'normal' }, ] }] ])
        setGambut(replicateData.gambut)

        setIklim(replicateData.iklim)

        setSesuaiLahan(replicateData.kelolaLingkungan)

        setDataTahun(replicateData.dataTahun)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {
    let data = {
      "companyName": identitas[0][0].value,
      "periodId": periodeThnPenilaian,
      "companyStatusId": identitas[0][1].value,
      "centerAddress": kantorPusat[0][0].value,
      "centerPhone": kantorPusat[0][1].value,
      "centerFax": kantorPusat[0][2].value,
      "representativeAddress": kantorWakil[0][0].value,
      "representativePhone": kantorWakil[0][1].value,
      "representativeFax": kantorWakil[0][2].value,
      "gardenId": namaKebun,

      "gardenCity": lokasi[0][0].value,
      "gardenDistrict": lokasi[0][1].value,
      "gardenVillage": lokasi[0][2].value,

      "comodity": lingkupUsaha[0][0].value,
      "comodityProcessing": lingkupUsaha[0][1].value,
      "processingProduct": lingkupUsaha[0][2].value,
      "legalities": [],
      "pendingLegalities": [],
      "skPirTrans": {},
      "skPirBun": {},
      "iup": {},
      "skBpkm": {},
      "spup": {},
      "skBudidayaPerkebunan": {},
      "skIndustriPerkebunan": {},
      "land": {},
      "landSuitabilities": [],
      "climates": []
    }

    hkUsaha.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.skHguNo = item[0].value
        inv.skHguDate = item[1].value
        inv.plantType = item[2].value
        inv.area = Number(item[3].value)
        inv.expDate = item[4].value
        inv.certifHguNo = item[5].value
        inv.hguTypeId = item[6].value
        inv.file = item[7].value
      });
      data.legalities.push(inv)
    });

    hguProses.forEach((item, i) => {
      let inv = {}
      item.forEach(() => {
        inv.skHguNo = item[0].value
        inv.description = item[1].value
        inv.file = item[2].value
      });
      data.pendingLegalities.push(inv)
    });

    skRencana.forEach((item, i) => {
      data.skPirTrans.no = item[0].value
      data.skPirTrans.date = item[1].value
      data.skPirTrans.licensor = item[2].value
      data.skPirTrans.file = item[3].value
    });

    skTugas.forEach((item, i) => {
      data.skPirBun.no = item[0].value
      data.skPirBun.date = item[1].value
      data.skPirBun.licensor = item[2].value
      data.skPirBun.file = item[3].value
    });

    skUsahaBudi.forEach((item, i) => {
      data.iup.no = item[0].value
      data.iup.date = item[1].value
      data.iup.licensor = item[2].value
      data.iup.file = item[3].value
    });

    skUsahaIndustri.forEach((item, i) => {
      data.skBpkm.no = item[0].value
      data.skBpkm.date = item[1].value
      data.skBpkm.licensor = item[2].value
      data.skBpkm.file = item[3].value
    });

    skUsahaTani.forEach((item, i) => {
      data.spup.no = item[0].value
      data.spup.date = item[1].value
      data.spup.licensor = item[2].value
      data.spup.file = item[3].value
    });

    skUsahaDaftar.forEach((item, i) => {
      data.skBudidayaPerkebunan.no = item[0].value
      data.skBudidayaPerkebunan.date = item[1].value
      data.skBudidayaPerkebunan.licensor = item[2].value
      data.skBudidayaPerkebunan.file = item[3].value
    });

    skUsahaKebun.forEach((item, i) => {
      data.skIndustriPerkebunan.no = item[0].value
      data.skIndustriPerkebunan.date = item[1].value
      data.skIndustriPerkebunan.licensor = item[2].value
      data.skIndustriPerkebunan.file = item[3].value
    });

    sesuaiLahan.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.comodity = arr[0].sectionData[0].value
        dataTemp.s1Location = arr[1].sectionData[0].value
        dataTemp.s1Area = arr[1].sectionData[1].value
        dataTemp.s1Publisher = arr[1].sectionData[2].value
        dataTemp.s2Location = arr[2].sectionData[0].value
        dataTemp.s2Area = arr[2].sectionData[1].value
        dataTemp.s2Publisher = arr[2].sectionData[2].value
        dataTemp.s3Location = arr[3].sectionData[0].value
        dataTemp.s3Area = arr[3].sectionData[1].value
        dataTemp.s3Publisher = arr[3].sectionData[2].value
      });
      data.landSuitabilities.push(dataTemp)
    });

    dataTahun.forEach((item, i) => {
      let dataTemp = {}
      item.forEach((e, i, arr) => {
        dataTemp.climateType = iklim[0][0].value
        dataTemp.rainfallSource = iklim[0][1].value
        dataTemp.year = Number(arr[0].sectionData[0].value)

        dataTemp.januaryRainfall = Number(arr[1].sectionData[0].value)
        dataTemp.januaryRainfallDays = Number(arr[1].sectionData[1].value)

        dataTemp.februaryRainfall = Number(arr[2].sectionData[0].value)
        dataTemp.februaryRainfallDays = Number(arr[2].sectionData[1].value)

        dataTemp.marchRainfall = Number(arr[3].sectionData[0].value)
        dataTemp.marchRainfallDays = Number(arr[3].sectionData[1].value)

        dataTemp.aprilRainfall = Number(arr[4].sectionData[0].value)
        dataTemp.aprilRainfallDays = Number(arr[4].sectionData[1].value)

        dataTemp.mayRainfall = Number(arr[5].sectionData[0].value)
        dataTemp.mayRainfallDays = Number(arr[5].sectionData[1].value)

        dataTemp.juneRainfall = Number(arr[6].sectionData[0].value)
        dataTemp.juneRainfallDays = Number(arr[6].sectionData[1].value)

        dataTemp.julyRainfall = Number(arr[7].sectionData[0].value)
        dataTemp.julyRainfallDays = Number(arr[7].sectionData[1].value)

        dataTemp.augustRainfall = Number(arr[8].sectionData[0].value)
        dataTemp.augustRainfallDays = Number(arr[8].sectionData[1].value)

        dataTemp.septemberRainfall = Number(arr[9].sectionData[0].value)
        dataTemp.septemberRainfallDays = Number(arr[9].sectionData[1].value)

        dataTemp.octoberRainfall = Number(arr[10].sectionData[0].value)
        dataTemp.octoberRainfallDays = Number(arr[10].sectionData[1].value)

        dataTemp.novemberRainfall = Number(arr[11].sectionData[0].value)
        dataTemp.novemberRainfallDays = Number(arr[11].sectionData[1].value)

        dataTemp.decemberRainfall = Number(arr[12].sectionData[0].value)
        dataTemp.decemberRainfallDays = Number(arr[12].sectionData[1].value)

        dataTemp.avgRainfallHigh = Number(arr[13].sectionData[0].value)
        dataTemp.avgRainfallLow = Number(arr[13].sectionData[1].value)
        dataTemp.avgDayHigh = Number(arr[13].sectionData[2].value)
        dataTemp.avgDayLow = Number(arr[13].sectionData[3].value)
      });
      data.climates.push(dataTemp)
    });

    tanahIklim.forEach((item, i) => {
      item.forEach((e, i, arr) => {
        data.land.landType = arr[0].sectionData[0].value
        data.land.msal = Number(arr[0].sectionData[1].value)
        data.land.flatArea = Number(arr[1].sectionData[0].value)
        data.land.flatPercentage = Number(arr[1].sectionData[1].value)
        data.land.flatDescription = arr[1].sectionData[2].value
        data.land.slopeArea = Number(arr[2].sectionData[0].value)
        data.land.slopePercentage = Number(arr[2].sectionData[1].value)
        data.land.slopeDescription = arr[2].sectionData[2].value
        data.land.midArea = Number(arr[3].sectionData[0].value)
        data.land.midPercentage = Number(arr[3].sectionData[1].value)
        data.land.midDescription = arr[3].sectionData[2].value
        data.land.steeptArea = Number(arr[4].sectionData[0].value)
        data.land.steepPercentage = Number(arr[4].sectionData[1].value)
        data.land.steepDescription = arr[4].sectionData[2].value
        data.land.verySteepArea = Number(arr[5].sectionData[0].value)
        data.land.verySteepPercentage = Number(arr[5].sectionData[1].value)
        data.land.verySteepDescription = arr[5].sectionData[2].value
        data.land.texture = arr[6].sectionData[0].value
        data.land.drainage = arr[6].sectionData[1].value
        data.land.solumDepth = Number(arr[6].sectionData[2].value)
        data.land.source = arr[6].sectionData[3].value
      })
    });

    gambut.forEach((item, i) => {
      data.land.peatDepth = Number(item[0].value)
      data.land.decompositionLevel = item[1].value
      data.land.landUnderPeat = item[2].value
    })

    setDataSubmit(data)

  }, [identitas,periodeThnPenilaian,namaKebun,kantorPusat,kantorWakil
    ,lokasi,lingkupUsaha,hkUsaha,hguProses,skRencana,skTugas,skUsahaBudi
    ,skUsahaIndustri,skUsahaTani,skUsahaDaftar,skUsahaKebun
    ,tanahIklim,gambut,iklim,sesuaiLahan,dataTahun])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  function getBase64(file) {
    return new Promise(function(resolve) {
      if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var base64 = e.target.result.toString().replace(/^data:(.*,)?/, '');
          resolve(base64)
        };
        reader.readAsDataURL(file);
      }
    })
  }

  const storeData = preventDefault(async () => {
    localStorage.setItem("legalitasNilai", JSON.stringify(dataSubmit));

    let data = _.cloneDeep([dataSubmit]);

    data[0].legalities.forEach(async (item, i) => {
      if (item.file) {
        let id = item.hguTypeId.id
        let file = {
          fileName: item.file[0].name,
          data: await getBase64(item.file[0])
        }
        item.hguTypeId = id
        item.file = file
      }
    });
    data[0].pendingLegalities.forEach(async (item, i) => {
      if (item.file) {
        let file = {
          fileName: item.file[0].name,
          data: await getBase64(item.file[0])
        }
        item.file = file
      }
    });
    if (data[0].skPirTrans.file) {
      data[0].skPirTrans.file = {
        fileName: data[0].skPirTrans.file[0].name,
        data: await getBase64(data[0].skPirTrans.file[0])
      }
    }
    if (data[0].skPirBun.file) {
      data[0].skPirBun.file = {
        fileName: data[0].skPirBun.file[0].name,
        data: await getBase64(data[0].skPirBun.file[0])
      }
    }
    if (data[0].iup.file) {
      data[0].iup.file = {
        fileName: data[0].iup.file[0].name,
        data: await getBase64(data[0].iup.file[0])
      }
    }
    if (data[0].skBpkm.file) {
      data[0].skBpkm.file = {
        fileName: data[0].skBpkm.file[0].name,
        data: await getBase64(data[0].skBpkm.file[0])
      }
    }
    if (data[0].spup.file) {
      data[0].spup.file = {
        fileName: data[0].spup.file[0].name,
        data: await getBase64(data[0].spup.file[0])
      }
    }
    if (data[0].skIndustriPerkebunan.file) {
      data[0].skIndustriPerkebunan.file = {
        fileName: data[0].skIndustriPerkebunan.file[0].name,
        data: await getBase64(data[0].skIndustriPerkebunan.file[0])
      }
    }

    data[0].periodId = data[0].periodId.id
    data[0].gardenId = data[0].gardenId.id
    data[0].companyStatusId = data[0].companyStatusId.id
    data[0].land.landType = data[0].land.landType.value
    data[0].land.decompositionLevel = data[0].land.decompositionLevel.value

    delete data[0].gardenDistrict
    delete data[0].gardenCity
    delete data[0].gardenVillage

    data[0].climates.forEach((item, i) => {
      item.climateType = item.climateType.value
    });

    console.log(data[0])

    const res = axios.post(
      `${appConfig.baseUrl}/evaluations`,
      data[0]
    );

    res.then(
      function(dt) {

        if (dt.data.status == 'success') {
          if (_.isEmpty(dt.data.data)) {
            localStorage.setItem("evaluationId", dt.data.data.addedEvaluation.evaluationId);
          }
          router.push({
            pathname: "/user/penilaian-perkebunan/manajemen"
          })
        }

      },
      function(err) {

        enqueueSnackbar('', {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          content: (key, message) => (
            <CustomComponent
              id={key}
              message="Mohon pastikan form yang anda isi telah lengkap."
              variant="error"
              title="Gagal Submit!"
            />
          ),
        });

      }
    )

  })

  function clearData() {

  }

  return (
    <>
      <form>

        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Periode Pengisian</span>

          <label className={`${mng["base__formlabel"]}`}>
            <InputForm
              titleForm="Periode Tahun Penilaian"
              titleName="Periode Tahun Penilaian"
              onChange={(e) => setPeriodeThnPenilaian(e)}
              type="text"
              values={periodeThnPenilaian}
              placeholder="Pilih Periode Tahun Penilaian"
              selectArea={true}
              options={year}
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
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={iup}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, identitas, setIdentitas, i, ii)}/>
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
                              onChange={(e) => formRegularChange(e.target.value, kantorPusat, setKantorPusat, i, ii)}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} float-left w-[47%] pr-2`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <textarea className={`${mng["base__inputbase"]} min-h-[153px]`} type={item.type} rows="20" placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, kantorPusat, setKantorPusat, i, ii)}></textarea>
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
                              onChange={(e) => formRegularChange(e.target.value, kantorWakil, setKantorWakil, i, ii)}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } w-full rounded  bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} float-left w-[47%] pr-2`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <textarea className={`${mng["base__inputbase"]} min-h-[153px]`} type={item.type} rows="20" placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, kantorWakil, setKantorWakil, i, ii)}></textarea>
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
              onChange={(e) => setNamaKebun(e)}
              type="text"
              values={namaKebun}
              placeholder="Nama Perusahaan Perkebunan"
              selectArea={true}
              options={kebun}
            />
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Lokasi Kebun</p>
          <div className="flex flex-col">
            {
              lokasi.map((items, i) => (
                <div className={`${mng["base__formlabel_tri"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <>
                      {
                        item.isOpt == 'kota' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => {
                                formRegularChange(e, lokasi, setLokasi, i, ii);
                                setCityId(e);
                              }}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={kota}
                            />
                          </label>
                        ) : item.isOpt == 'kecamatan' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => {
                                formRegularChange(e, lokasi, setLokasi, i, ii);
                                setDistrictId(e);
                              }}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={kecamatan}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => {
                                formRegularChange(e, lokasi, setLokasi, i, ii);
                                setVillageId(e);
                              }}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={desa}
                            />
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


          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Lingkup Usaha (Pilih Salah Satu dan Lengkapi)</p>
          <div className="flex flex-col">
            {
              lingkupUsaha.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-lastfull"]}`} key={i}>
                {
                  items.map((item,ii) => (
                    <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                      <span className={mng.base__inputtitle}>{item.title}</span>
                      <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, lingkupUsaha, setLingkupUsaha, i, ii)}/>
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
                          <div className="w-full">
                            <div className="flex w-full items-center justify-between mb-3">
                              <div>
                                <div className=" text-sm font-semibold">
                                  Lampiran Berkas HGU Dalam Proses
                                </div>
                                <div className="text-[11px] text-[#B3B3B3]">
                                  Format dokumen: .jpg .jpeg .png
                                </div>
                              </div>
                              <InputFileButton
                                handleImage={(img) => {
                                  formRegularChange(img, hkUsaha, setHkUsaha, i, ii);
                                }}
                              />
                            </div>
                            {
                              item.value[0] ? (
                                <div className="flex items-center mt-6 mb-3 pb-4 border-b border-[#EDEDED]">
                                  <img src="/images/auth/gallery.svg" className="w-[24px] mr-3" />
                                  <div>
                                    <p className="text-sm">{item.value[0].path}</p>
                                    <p className="text-xs	text-[#27AE60]">Uploaded</p>
                                  </div>
                                  <div className="ml-auto flex">
                                    <div className="border border-[#CDD3D8] text-[11px] px-2 py-1 font-semibold">{((item.value[0].size) / 1048576).toFixed(2)}MB</div>
                                    <img onClick={() => formRegularChange('', hkUsaha, setHkUsaha, i, ii)} src="/images/auth/close-circle.svg" className="w-[16px] cursor-pointer ml-3" />
                                  </div>
                                </div>
                              ) : <></>
                            }
                          </div>
                        ) : item.isOpt == 'opt' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e, hkUsaha, setHkUsaha, i, ii)}
                              type="text"
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={hgu}
                            />
                          </label>
                        ) : item.isOpt == 'cal' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <InputForm
                              titleForm={item.title}
                              titleName={item.title}
                              onChange={(e) => formRegularChange(e.target.value, hkUsaha, setHkUsaha, i, ii)}
                              type="date"
                              values={item.value}
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } ${mng["base__inputbase"]} w-full rounded  bg-white-2 py-2 px-3 text-sm uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, hkUsaha, setHkUsaha, i, ii)}/>
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
                          <div className="w-full">
                            <div className="flex w-full items-center justify-between mb-3">
                              <div>
                                <div className=" text-sm font-semibold">
                                  Lampiran Berkas HGU Dalam Proses
                                </div>
                                <div className="text-[11px] text-[#B3B3B3]">
                                  Format dokumen: .jpg .jpeg .png
                                </div>
                              </div>
                              <InputFileButton
                                handleImage={(img) => {
                                  formRegularChange(img, hguProses, setHguProses, i, ii);
                                }}
                              />
                            </div>
                            {
                              item.value[0] ? (
                                <div className="flex items-center mt-6 mb-3 pb-4 border-b border-[#EDEDED]">
                                  <img src="/images/auth/gallery.svg" className="w-[24px] mr-3" />
                                  <div>
                                    <p className="text-sm">{item.value[0].path}</p>
                                    <p className="text-xs	text-[#27AE60]">Uploaded</p>
                                  </div>
                                  <div className="ml-auto flex">
                                    <div className="border border-[#CDD3D8] text-[11px] px-2 py-1 font-semibold">{((item.value[0].size) / 1048576).toFixed(2)}MB</div>
                                    <img onClick={() => formRegularChange('', hguProses, setHguProses, i, ii)} src="/images/auth/close-circle.svg" className="w-[16px] cursor-pointer ml-3" />
                                  </div>
                                </div>
                              ) : <></>
                            }
                          </div>
                        ) : item.isOpt == 'textarea' ? (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <textarea className={`${mng["base__inputbase"]} min-h-[140px]`} type={item.type} rows="20" placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, hguProses, setHguProses, i, ii)}></textarea>
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, hguProses, setHguProses, i, ii)}/>
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
                              onChange={(e) => formRegularChange(e.target.value, skRencana, setSkRencana, i, ii)}
                              type="date"
                              values={item.value}
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } ${mng["base__inputbase"]} w-full rounded  bg-white-2 py-2 px-3 text-sm uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="w-full">
                            <div className="flex w-full items-center justify-between mb-3">
                              <div>
                                <div className=" text-sm font-semibold">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-[#B3B3B3]">
                                  {item.placeholder}
                                </div>
                              </div>
                              <InputFileButton
                                handleImage={(img) => {
                                  formRegularChange(img, skRencana, setSkRencana, i, ii);
                                }}
                              />
                            </div>
                            {
                              item.value[0] ? (
                                <div className="flex items-center mt-6 mb-3 pb-4 border-b border-[#EDEDED]">
                                  <img src="/images/auth/gallery.svg" className="w-[24px] mr-3" />
                                  <div>
                                    <p className="text-sm">{item.value[0].path}</p>
                                    <p className="text-xs	text-[#27AE60]">Uploaded</p>
                                  </div>
                                  <div className="ml-auto flex">
                                    <div className="border border-[#CDD3D8] text-[11px] px-2 py-1 font-semibold">{((item.value[0].size) / 1048576).toFixed(2)}MB</div>
                                    <img onClick={() => formRegularChange('', skRencana, setSkRencana, i, ii)} src="/images/auth/close-circle.svg" className="w-[16px] cursor-pointer ml-3" />
                                  </div>
                                </div>
                              ) : <></>
                            }
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, skRencana, setSkRencana, i, ii)}/>
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
                              onChange={(e) => formRegularChange(e.target.value, skTugas, setSkTugas, i, ii)}
                              type="date"
                              values={item.value}
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } ${mng["base__inputbase"]} w-full rounded  bg-white-2 py-2 px-3  text-sm uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="w-full">
                            <div className="flex w-full items-center justify-between mb-3">
                              <div>
                                <div className=" text-sm font-semibold">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-[#B3B3B3]">
                                  {item.placeholder}
                                </div>
                              </div>
                              <InputFileButton
                                handleImage={(img) => {
                                  formRegularChange(img, skTugas, setSkTugas, i, ii);
                                }}
                              />
                            </div>
                            {
                              item.value[0] ? (
                                <div className="flex items-center mt-6 mb-3 pb-4 border-b border-[#EDEDED]">
                                  <img src="/images/auth/gallery.svg" className="w-[24px] mr-3" />
                                  <div>
                                    <p className="text-sm">{item.value[0].path}</p>
                                    <p className="text-xs	text-[#27AE60]">Uploaded</p>
                                  </div>
                                  <div className="ml-auto flex">
                                    <div className="border border-[#CDD3D8] text-[11px] px-2 py-1 font-semibold">{((item.value[0].size) / 1048576).toFixed(2)}MB</div>
                                    <img onClick={() => formRegularChange('', skTugas, setSkTugas, i, ii)} src="/images/auth/close-circle.svg" className="w-[16px] cursor-pointer ml-3" />
                                  </div>
                                </div>
                              ) : <></>
                            }
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, skTugas, setSkTugas, i, ii)}/>
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
                              onChange={(e) => formRegularChange(e.target.value, skUsahaBudi, setSkUsahaBudi, i, ii)}
                              type="date"
                              values={item.value}
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } ${mng["base__inputbase"]} w-full rounded  bg-white-2 py-2 px-3  text-sm uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="w-full">
                            <div className="flex w-full items-center justify-between mb-3">
                              <div>
                                <div className=" text-sm font-semibold">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-[#B3B3B3]">
                                  {item.placeholder}
                                </div>
                              </div>
                              <InputFileButton
                                handleImage={(img) => {
                                  formRegularChange(img, skUsahaBudi, setSkUsahaBudi, i, ii);
                                }}
                              />
                            </div>
                            {
                              item.value[0] ? (
                                <div className="flex items-center mt-6 mb-3 pb-4 border-b border-[#EDEDED]">
                                  <img src="/images/auth/gallery.svg" className="w-[24px] mr-3" />
                                  <div>
                                    <p className="text-sm">{item.value[0].path}</p>
                                    <p className="text-xs	text-[#27AE60]">Uploaded</p>
                                  </div>
                                  <div className="ml-auto flex">
                                    <div className="border border-[#CDD3D8] text-[11px] px-2 py-1 font-semibold">{((item.value[0].size) / 1048576).toFixed(2)}MB</div>
                                    <img onClick={() => formRegularChange('', skUsahaBudi, setSkUsahaBudi, i, ii)} src="/images/auth/close-circle.svg" className="w-[16px] cursor-pointer ml-3" />
                                  </div>
                                </div>
                              ) : <></>
                            }
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, skUsahaBudi, setSkUsahaBudi, i, ii)}/>
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
                              onChange={(e) => formRegularChange(e.target.value, skUsahaIndustri, setSkUsahaIndustri, i, ii)}
                              type="date"
                              values={item.value}
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } ${mng["base__inputbase"]} w-full rounded  bg-white-2 py-2 px-3  text-sm uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="w-full">
                            <div className="flex w-full items-center justify-between mb-3">
                              <div>
                                <div className=" text-sm font-semibold">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-[#B3B3B3]">
                                  {item.placeholder}
                                </div>
                              </div>
                              <InputFileButton
                                handleImage={(img) => {
                                  formRegularChange(img, skUsahaIndustri, setSkUsahaIndustri, i, ii);
                                }}
                              />
                            </div>
                            {
                              item.value[0] ? (
                                <div className="flex items-center mt-6 mb-3 pb-4 border-b border-[#EDEDED]">
                                  <img src="/images/auth/gallery.svg" className="w-[24px] mr-3" />
                                  <div>
                                    <p className="text-sm">{item.value[0].path}</p>
                                    <p className="text-xs	text-[#27AE60]">Uploaded</p>
                                  </div>
                                  <div className="ml-auto flex">
                                    <div className="border border-[#CDD3D8] text-[11px] px-2 py-1 font-semibold">{((item.value[0].size) / 1048576).toFixed(2)}MB</div>
                                    <img onClick={() => formRegularChange('', skUsahaIndustri, setSkUsahaIndustri, i, ii)} src="/images/auth/close-circle.svg" className="w-[16px] cursor-pointer ml-3" />
                                  </div>
                                </div>
                              ) : <></>
                            }
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, skUsahaIndustri, setSkUsahaIndustri, i, ii)}/>
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
                              onChange={(e) => formRegularChange(e.target.value, skUsahaTani, setSkUsahaTani, i, ii)}
                              type="date"
                              values={item.value}
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } ${mng["base__inputbase"]} w-full rounded  bg-white-2 py-2 px-3  text-sm uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="w-full">
                            <div className="flex w-full items-center justify-between mb-3">
                              <div>
                                <div className=" text-sm font-semibold">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-[#B3B3B3]">
                                  {item.placeholder}
                                </div>
                              </div>
                              <InputFileButton
                                handleImage={(img) => {
                                  formRegularChange(img, skUsahaTani, setSkUsahaTani, i, ii);
                                }}
                              />
                            </div>
                            {
                              item.value[0] ? (
                                <div className="flex items-center mt-6 mb-3 pb-4 border-b border-[#EDEDED]">
                                  <img src="/images/auth/gallery.svg" className="w-[24px] mr-3" />
                                  <div>
                                    <p className="text-sm">{item.value[0].path}</p>
                                    <p className="text-xs	text-[#27AE60]">Uploaded</p>
                                  </div>
                                  <div className="ml-auto flex">
                                    <div className="border border-[#CDD3D8] text-[11px] px-2 py-1 font-semibold">{((item.value[0].size) / 1048576).toFixed(2)}MB</div>
                                    <img onClick={() => formRegularChange('', skUsahaTani, setSkUsahaTani, i, ii)} src="/images/auth/close-circle.svg" className="w-[16px] cursor-pointer ml-3" />
                                  </div>
                                </div>
                              ) : <></>
                            }
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, skUsahaTani, setSkUsahaTani, i, ii)}/>
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
                              onChange={(e) => formRegularChange(e.target.value, skUsahaDaftar, setSkUsahaDaftar, i, ii)}
                              type="date"
                              values={item.value}
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } ${mng["base__inputbase"]} w-full rounded  bg-white-2 py-2 px-3  text-sm uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="w-full">
                            <div className="flex w-full items-center justify-between mb-3">
                              <div>
                                <div className=" text-sm font-semibold">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-[#B3B3B3]">
                                  {item.placeholder}
                                </div>
                              </div>
                              <InputFileButton
                                handleImage={(img) => {
                                  formRegularChange(img, skUsahaDaftar, setSkUsahaDaftar, i, ii);
                                }}
                              />
                            </div>
                            {
                              item.value[0] ? (
                                <div className="flex items-center mt-6 mb-3 pb-4 border-b border-[#EDEDED]">
                                  <img src="/images/auth/gallery.svg" className="w-[24px] mr-3" />
                                  <div>
                                    <p className="text-sm">{item.value[0].path}</p>
                                    <p className="text-xs	text-[#27AE60]">Uploaded</p>
                                  </div>
                                  <div className="ml-auto flex">
                                    <div className="border border-[#CDD3D8] text-[11px] px-2 py-1 font-semibold">{((item.value[0].size) / 1048576).toFixed(2)}MB</div>
                                    <img onClick={() => formRegularChange('', skUsahaDaftar, setSkUsahaDaftar, i, ii)} src="/images/auth/close-circle.svg" className="w-[16px] cursor-pointer ml-3" />
                                  </div>
                                </div>
                              ) : <></>
                            }
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, skUsahaDaftar, setSkUsahaDaftar, i, ii)}/>
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
                              onChange={(e) => formRegularChange(e.target.value, skUsahaKebun, setSkUsahaKebun, i, ii)}
                              type="date"
                              values={item.value}
                              placeholder={item.placeholder}
                              id="datePicker"
                              className={`${
                                isError && 'border-primary-red-1 bg-primary-red-2'
                              } ${mng["base__inputbase"]} w-full rounded  bg-white-2 py-2 px-3  text-sm uppercase text-primary-gray-4`}
                              iconEmail="true"
                            />
                          </label>
                        ) : item.isOpt == 'unggah' ? (
                          <div className="w-full">
                            <div className="flex w-full items-center justify-between mb-3">
                              <div>
                                <div className=" text-sm font-semibold">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-[#B3B3B3]">
                                  {item.placeholder}
                                </div>
                              </div>
                              <InputFileButton
                                handleImage={(img) => {
                                  formRegularChange(img, skUsahaKebun, setSkUsahaKebun, i, ii);
                                }}
                              />
                            </div>
                            {
                              item.value[0] ? (
                                <div className="flex items-center mt-6">
                                  <img src="/images/auth/gallery.svg" className="w-[24px] mr-3" />
                                  <div>
                                    <p className="text-sm">{item.value[0].path}</p>
                                    <p className="text-xs	text-[#27AE60]">Uploaded</p>
                                  </div>
                                  <div className="ml-auto flex">
                                    <div className="border border-[#CDD3D8] text-[11px] px-2 py-1 font-semibold">{((item.value[0].size) / 1048576).toFixed(2)}MB</div>
                                    <img onClick={() => formRegularChange('', skUsahaKebun, setSkUsahaKebun, i, ii)} src="/images/auth/close-circle.svg" className="w-[16px] cursor-pointer ml-3" />
                                  </div>
                                </div>
                              ) : <></>
                            }
                          </div>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, skUsahaKebun, setSkUsahaKebun, i, ii)}/>
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
                                      values={item.value}
                                      placeholder={child.placeholder}
                                      selectArea={true}
                                      options={iklimOpt}
                                    />
                                  </label>
                                ) : (
                                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                                    <span className={mng.base__inputtitle}>{child.title}</span>
                                    <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e.target.value, tanahIklim, setTanahIklim, i, ii, iii)}/>
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
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={iklimOpt}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, gambut, setGambut, i, ii)}/>
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
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e.target.value, sesuaiLahan, setSesuaiLahan, i, ii, iii)}/>
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
                              values={item.value}
                              placeholder={item.placeholder}
                              selectArea={true}
                              options={iklimOpt}
                            />
                          </label>
                        ) : (
                          <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                            <span className={mng.base__inputtitle}>{item.title}</span>
                            <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, iklim, setIklim, i, ii)}/>
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
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e.target.value, dataTahun, setDataTahun, i, ii, iii)}/>
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

          <button className={`${mng["base__btnsimpan"]} ${"float-right mt-1"}`} onClick={storeData}>
            Simpan dan Lanjutkan
          </button>
        </div>

      </form>
    </>
  );
};
export default FormLegalitas;
