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

const FormManajemenStep2 = () => {
  const [isError, setIsError] = useState(false);

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState([])

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

  useEffect(() => {
    if (initialLoad) {
      localStorage.removeItem("mnjPart2Nilai");
      let retrievedObject = JSON.parse(localStorage.getItem('mnjPart2NilaiReport'));

      if (!_.isEmpty(retrievedObject)) {

        let replicateData = {
          "leaderEducationBackground": [],
          "employeeCourse": [],
          "employeeCourseOth": [],
          "employeeTraining": [],
          "employeeTrainingOth": [],
          "tkaUsage": [],
          "tkaSubtitution": [],
          "employeeMinimumSalary": [],
          "employeeMinimumSalaryOth": []
        }

        const formJenisKursus = _.cloneDeep(jenisKursus)
        formJenisKursus.forEach((dtFrm, i1) => {
          dtFrm.forEach((sec, i2, arr) => {
            sec.sectionData.forEach((secData,i3,arr2) => {
              arr2[0].value = retrievedObject.employeeCourse[i2].numberOfPeople
              arr2[1].value = retrievedObject.employeeCourse[i2].description
            })
          })
          replicateData.employeeCourse.push(dtFrm)
        })

        retrievedObject.employeeCourse.forEach((e, i, arr) => {
          const dataArr = []
          if (e.course == 'Lainnya') {
            const formstrTka = {
              'sectionTitle': 'Jenis Kursus : Lainnya',
              'sectionData': [
                {'title':'Jumlah Orang','type':'text','placeholder':'masukkan jumlah dalam satuan orang','value':arr[i].numberOfPeople},
                {'title':'Keterangan','type':'text','placeholder':'keterangan','value':arr[i].description}
              ]
            }
            dataArr.push(formstrTka)
            replicateData.employeeCourseOth.push(dataArr)
          }
        })

        const formJenisPelatihan = _.cloneDeep(jenisPelatihan)
        formJenisPelatihan.forEach((dtFrm, i1) => {
          dtFrm.forEach((sec, i2, arr) => {
            sec.sectionData.forEach((secData,i3,arr2) => {
              arr2[0].value = retrievedObject.employeeTraining[i2].numberOfPeople
              arr2[1].value = retrievedObject.employeeTraining[i2].duration
              arr2[2].value = retrievedObject.employeeTraining[i2].location
              arr2[3].value = retrievedObject.employeeTraining[i2].positionPromotion
              arr2[4].value = retrievedObject.employeeTraining[i2].startDate
            })
          })
          replicateData.employeeTraining.push(dtFrm)
        })

        retrievedObject.employeeTraining.forEach((e, i, arr) => {
          const dataArr = []
          if (e.trainingField == 'Pelatihan Lainnya') {
            const formstrTka = {
              'sectionTitle': 'Pelatihan Lainnya',
              'sectionData': [
                {'title':'Jumlah (orang)','type':'text','placeholder':'masukkan jumlah orang','value':arr[i].numberOfPeople},
                {'title':'Durasi (hari)','type':'text','placeholder':'masukkan durasi hari','value':arr[i].duration},
                {'title':'Lokasi','type':'text','placeholder':'masukkan lokasi','value':arr[i].location},
                {'title':'Promosi Posisi','type':'text','placeholder':'masukkan posisi','value':arr[i].positionPromotion},
                {'title':'Terhitung Mulai Tanggal/tahun','type':'text','placeholder':'DD/MM/YYY','value':arr[i].startDate}
              ]
            }
            dataArr.push(formstrTka)
            replicateData.employeeTrainingOth.push(dataArr)
          }
        })

        const formTunjangan = _.cloneDeep(tunjangan)
        formTunjangan.forEach((dtFrm, i1) => {
          dtFrm.forEach((sec, i2, arr) => {
            sec.sectionData.forEach((secData,i3,arr2) => {
              arr2[0].value = retrievedObject.employeeMinimumSalary[i2].firstYearValue
              arr2[1].value = retrievedObject.employeeMinimumSalary[i2].secondYearValue
              arr2[2].value = retrievedObject.employeeMinimumSalary[i2].thirdYearValue
              arr2[3].value = retrievedObject.employeeMinimumSalary[i2].description
            })
          })
          replicateData.employeeMinimumSalary.push(dtFrm)
        })

        retrievedObject.employeeMinimumSalary.forEach((e, i, arr) => {
          const dataArr = []
          if (e.type == 'Realisasi Tunjangan Lainnya') {
            const formstrTka = {
              'sectionTitle': 'Realisasi Tunjangan Lainnya',
              'sectionData': [
                {'title':'Tahun 1','type':'text','placeholder':'masukkan nominal','value':arr[i].firstYearValue},
                {'title':'Tahun 2','type':'text','placeholder':'masukkan nominal','value':arr[i].secondYearValue},
                {'title':'Tahun 3','type':'text','placeholder':'masukkan nominal','value':arr[i].thirdYearValue},
                {'title':'Keterangan','type':'text','placeholder':'keterangan','value':arr[i].description}
              ]
            }
            dataArr.push(formstrTka)
            replicateData.employeeMinimumSalaryOth.push(dataArr)
          }
        })

        const formGantiTenaga = _.cloneDeep(gantiTenaga)
        formGantiTenaga.forEach((dtFrm, i, arr) => {

          arr[0][0].sectionData[0].value = retrievedObject.tkaSubtitution.details[0].position
          arr[0][0].sectionData[1].value = retrievedObject.tkaSubtitution.details[0].tmt
          arr[0][0].sectionData[2].value = retrievedObject.tkaSubtitution.details[0].numberOfPeople

          arr[0][1].sectionData[0].value = retrievedObject.tkaSubtitution.details[1].position
          arr[0][1].sectionData[1].value = retrievedObject.tkaSubtitution.details[1].tmt
          arr[0][1].sectionData[2].value = retrievedObject.tkaSubtitution.details[1].numberOfPeople

          arr[0][2].sectionData[0].value = retrievedObject.tkaSubtitution.details[2].position
          arr[0][2].sectionData[1].value = retrievedObject.tkaSubtitution.details[2].tmt
          arr[0][2].sectionData[2].value = retrievedObject.tkaSubtitution.details[2].numberOfPeople

          arr[0][3].sectionData[0].value = retrievedObject.tkaSubtitution.details[3].position
          arr[0][3].sectionData[1].value = retrievedObject.tkaSubtitution.details[3].tmt
          arr[0][3].sectionData[2].value = retrievedObject.tkaSubtitution.details[3].numberOfPeople

          arr[0][4].sectionData[0].value = retrievedObject.tkaSubtitution.details[4].position
          arr[0][4].sectionData[1].value = retrievedObject.tkaSubtitution.details[4].tmt
          arr[0][4].sectionData[2].value = retrievedObject.tkaSubtitution.details[4].numberOfPeople

          arr[0][5].sectionData[0].value = retrievedObject.tkaSubtitution.details[5].position
          arr[0][5].sectionData[1].value = retrievedObject.tkaSubtitution.details[5].tmt
          arr[0][5].sectionData[2].value = retrievedObject.tkaSubtitution.details[5].numberOfPeople

          arr[0][6].sectionData[0].value = retrievedObject.tkaSubtitution.details[6].position
          arr[0][6].sectionData[1].value = retrievedObject.tkaSubtitution.details[6].tmt
          arr[0][6].sectionData[2].value = retrievedObject.tkaSubtitution.details[6].numberOfPeople

          arr[0][7].sectionData[0].value = retrievedObject.tkaSubtitution.details[7].position
          arr[0][7].sectionData[1].value = retrievedObject.tkaSubtitution.details[7].tmt
          arr[0][7].sectionData[2].value = retrievedObject.tkaSubtitution.details[7].numberOfPeople

          arr[0][8].sectionData[0].value = retrievedObject.tkaSubtitution.details[8].position
          arr[0][8].sectionData[1].value = retrievedObject.tkaSubtitution.details[8].tmt
          arr[0][8].sectionData[2].value = retrievedObject.tkaSubtitution.details[8].numberOfPeople

          replicateData.tkaSubtitution.push(dtFrm)
        })

        const formLatarPendidikan = _.cloneDeep(latarPendidikan)
        formLatarPendidikan.forEach((dtFrm, i, arr) => {

          arr[0][0].sectionData[0].value = retrievedObject.leaderEducationBackground[0].name
          arr[0][0].sectionData[1].value = retrievedObject.leaderEducationBackground[0].education
          arr[0][0].sectionData[2].value = retrievedObject.leaderEducationBackground[0].expereienceYears
          arr[0][0].sectionData[3].value = retrievedObject.leaderEducationBackground[0].course
          arr[0][0].sectionData[4].value = retrievedObject.leaderEducationBackground[0].duration

          arr[0][1].sectionData[0].value = retrievedObject.leaderEducationBackground[1].name
          arr[0][1].sectionData[1].value = retrievedObject.leaderEducationBackground[1].education
          arr[0][1].sectionData[2].value = retrievedObject.leaderEducationBackground[1].expereienceYears
          arr[0][1].sectionData[3].value = retrievedObject.leaderEducationBackground[1].course
          arr[0][1].sectionData[4].value = retrievedObject.leaderEducationBackground[1].duration

          arr[0][2].sectionData[0].value = retrievedObject.leaderEducationBackground[2].name
          arr[0][2].sectionData[1].value = retrievedObject.leaderEducationBackground[2].education
          arr[0][2].sectionData[2].value = retrievedObject.leaderEducationBackground[2].expereienceYears
          arr[0][2].sectionData[3].value = retrievedObject.leaderEducationBackground[2].course
          arr[0][2].sectionData[4].value = retrievedObject.leaderEducationBackground[2].duration
          replicateData.leaderEducationBackground.push(dtFrm)
        })

        retrievedObject.tkaUsage.forEach((e, i) => {
          const formstrTka = _.cloneDeep(tka)
          formstrTka.forEach((dtFrm, i, arr) => {
            arr[0][0].value = e.name
            arr[0][1].value = e.position
            arr[0][2].value = e.education
            arr[0][3].value = e.nationality
            arr[0][4].value = e.tkaNo
            arr[0][5].value = e.expDate
            replicateData.tkaUsage.push(dtFrm)
          })
        })

        setGantiTenaga(replicateData.tkaSubtitution)
        setJenisPelatihan(replicateData.employeeTraining)
        setJenisPelatihanLainnya(replicateData.employeeTrainingOth)
        setLatarPendidikan(replicateData.leaderEducationBackground)
        setJenisKursus(replicateData.employeeCourse)
        setJenisKursusLainnya(replicateData.employeeCourseOth)
        setTka(replicateData.tkaUsage)
        setTunjangan(replicateData.employeeMinimumSalary)
        setTunjanganLainnya(replicateData.employeeMinimumSalaryOth)


        setPresentasePutusKerja(retrievedObject.hrManagement.hasRecruitmentSystem)
        setSistemRekrutPegawaiOpt(retrievedObject.hrManagement.isRecruitmentSystemImplemented)
        setSistemRekrutPegawaiTerapkanOpt(retrievedObject.hrManagement.hasPaytollSystem)
        setSistemGajiPegawaiOpt(retrievedObject.hrManagement.isPayrollSystemImplemented)
        setSistemGajiPegawaiTerapkanOpt(retrievedObject.hrManagement.hasKpiSystem)
        setJenjangKarirOpt(retrievedObject.hrManagement.isKpiSystemImplemented)
        setJenjangKarirTerapkanOpt(retrievedObject.hrManagement.hasTurnover)
        setPutusKerjaOpt(retrievedObject.hrManagement.turnoverPercentage)
        setPutusKerjaGantiOpt(retrievedObject.tkaSubtitution.subtitutionInThreeYears)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {

    let data = {
        "hrManagement": {
            "hasRecruitmentSystem": sistemRekrutPegawaiOpt,
            "isRecruitmentSystemImplemented": sistemRekrutPegawaiTerapkanOpt,
            "hasPaytollSystem": sistemGajiPegawaiOpt,
            "isPayrollSystemImplemented": sistemGajiPegawaiTerapkanOpt,
            "hasKpiSystem": jenjangKarirOpt,
            "isKpiSystemImplemented": jenjangKarirTerapkanOpt,
            "hasTurnover": putusKerjaOpt,
            "turnoverPercentage": presentasePutusKerja
        },
        "leaderEducationBackground": [],
        "employeeCourse": [],
        "employeeTraining": [],
        "tkaUsage": [],
        "tkaSubtitution": {
          "subtitutionInThreeYears": putusKerjaGantiOpt,
          "details":[]
        },
        "employeeMinimumSalary": []
    }

    gantiTenaga.forEach((item, i) => {
      item.forEach((e, ii, arr) => {
        let detailObj = {}
        e.sectionData.forEach((secData, iii, arr2) => {
          detailObj.field = e.sectionTitle.split(' : ')[1]
          detailObj.position = arr2[0].value
          detailObj.tmt = arr2[1].value
          detailObj.numberOfPeople = arr2[2].value
        })
        data.tkaSubtitution.details.push(detailObj)
      });
    });

    latarPendidikan.forEach((item, i) => {
      item.forEach((e, ii, arr) => {
        let detailObj = {}
        e.sectionData.forEach((secData, iii, arr2) => {
          detailObj.position = e.sectionTitle.split(' : ')[1]
          detailObj.name = arr2[0].value
          detailObj.education = arr2[1].value
          detailObj.expereienceYears = arr2[2].value
          detailObj.course = arr2[3].value
          detailObj.duration = arr2[4].value
        })
        data.leaderEducationBackground.push(detailObj)
      });
    });

    jenisKursus.forEach((item, i) => {
      item.forEach((e, ii, arr) => {
        let detailObj = {}
        e.sectionData.forEach((secData, iii, arr2) => {
          detailObj.course = e.sectionTitle.split(': ')[1]
          detailObj.numberOfPeople = arr2[0].value
          detailObj.description = arr2[1].value
        })
        data.employeeCourse.push(detailObj)
      });
    });

    jenisKursusLainnya.forEach((item, i) => {
      item.forEach((e, ii, arr) => {
        let detailObj = {}
        e.sectionData.forEach((secData, iii, arr2) => {
          detailObj.course = e.sectionTitle.split(': ')[1]
          detailObj.numberOfPeople = arr2[0].value
          detailObj.description = arr2[1].value
        })
        data.employeeCourse.push(detailObj)
      });
    });

    jenisPelatihan.forEach((item, i) => {
      item.forEach((e, ii, arr) => {
        let detailObj = {}
        e.sectionData.forEach((secData, iii, arr2) => {
          detailObj.trainingField = e.sectionTitle.split(': ')[1]
          detailObj.numberOfPeople = arr2[0].value
          detailObj.duration = arr2[1].value
          detailObj.location = arr2[2].value
          detailObj.positionPromotion = arr2[3].value
          detailObj.startDate = arr2[4].value
        })
        data.employeeTraining.push(detailObj)
      });
    });

    jenisPelatihanLainnya.forEach((item, i) => {
      item.forEach((e, ii, arr) => {
        let detailObj = {}
        e.sectionData.forEach((secData, iii, arr2) => {
          detailObj.trainingField = 'Pelatihan Lainnya'
          detailObj.numberOfPeople = arr2[0].value
          detailObj.duration = arr2[1].value
          detailObj.location = arr2[2].value
          detailObj.positionPromotion = arr2[3].value
          detailObj.startDate = arr2[4].value
        })
        data.employeeTraining.push(detailObj)
      });
    });

    tunjangan.forEach((item, i) => {
      item.forEach((e, ii, arr) => {
        let detailObj = {}
        e.sectionData.forEach((secData, iii, arr2) => {
          detailObj.type = e.sectionTitle
          detailObj.firstYearValue = arr2[0].value
          detailObj.secondYearValue = arr2[1].value
          detailObj.thirdYearValue = arr2[2].value
          detailObj.description = arr2[3].value
        })
        data.employeeMinimumSalary.push(detailObj)
      });
    });

    tunjanganLainnya.forEach((item, i) => {
      item.forEach((e, ii, arr) => {
        let detailObj = {}
        e.sectionData.forEach((secData, iii, arr2) => {
          detailObj.type = 'Realisasi Tunjangan Lainnya'
          detailObj.firstYearValue = arr2[0].value
          detailObj.secondYearValue = arr2[1].value
          detailObj.thirdYearValue = arr2[2].value
          detailObj.description = arr2[3].value
        })
        data.employeeMinimumSalary.push(detailObj)
      });
    });

    tka.forEach((item, i) => {
      let inv = {}
      item.forEach((e, i, arr) => {
        inv.name = arr[0].value
        inv.position = arr[1].value
        inv.education = arr[2].value
        inv.nationality = arr[3].value
        inv.tkaNo = arr[4].value
        inv.expDate = arr[5].value
      });
      data.tkaUsage.push(inv)
    });

    setDataSubmit(data)

  }, [gantiTenaga,latarPendidikan,jenisKursus,jenisKursusLainnya,jenisPelatihan,jenisPelatihanLainnya,tka,tunjangan,tunjanganLainnya,presentasePutusKerja
    ,sistemRekrutPegawaiOpt,sistemRekrutPegawaiTerapkanOpt,sistemGajiPegawaiOpt,sistemGajiPegawaiTerapkanOpt
    ,jenjangKarirOpt,jenjangKarirTerapkanOpt,putusKerjaOpt,putusKerjaGantiOpt])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      localStorage.setItem("mnjPart2Nilai", JSON.stringify(dataSubmit));
    }
  },[dataPass,dataSubmit])

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
                radioValue={sistemRekrutPegawaiOpt}
                selected={sistemRekrutPegawaiOpt == 'Ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemRekrutPegawaiOpt"
                onClick={() => setSistemRekrutPegawaiOpt('Tidak')}
                radioValue={sistemRekrutPegawaiOpt}
                selected={sistemRekrutPegawaiOpt == 'Tidak'}
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
                    radioValue={sistemRekrutPegawaiTerapkanOpt}
                    selected={sistemRekrutPegawaiTerapkanOpt == 'Ya'}
                    label="Ya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="sistemRekrutPegawaiTerapkanOpt"
                    onClick={() => setSistemRekrutPegawaiTerapkanOpt('Tidak')}
                    radioValue={sistemRekrutPegawaiTerapkanOpt}
                    selected={sistemRekrutPegawaiTerapkanOpt == 'Tidak'}
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
                radioValue={sistemGajiPegawaiOpt}
                selected={sistemGajiPegawaiOpt == 'Ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sistemGajiPegawaiOpt"
                onClick={() => setSistemGajiPegawaiOpt('Tidak')}
                radioValue={sistemGajiPegawaiOpt}
                selected={sistemGajiPegawaiOpt == 'Tidak'}
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
                    radioValue={sistemGajiPegawaiTerapkanOpt}
                    selected={sistemGajiPegawaiTerapkanOpt == 'Ya'}
                    label="Ya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="sistemGajiPegawaiTerapkanOpt"
                    onClick={() => setSistemGajiPegawaiTerapkanOpt('Tidak')}
                    radioValue={sistemGajiPegawaiTerapkanOpt}
                    selected={sistemGajiPegawaiTerapkanOpt == 'Tidak'}
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
                radioValue={jenjangKarirOpt}
                selected={jenjangKarirOpt == 'Ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="jenjangKarirOpt"
                onClick={() => setJenjangKarirOpt('Tidak')}
                radioValue={jenjangKarirOpt}
                selected={jenjangKarirOpt == 'Tidak'}
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
                    radioName="jenjangKarirTerapkanOpt"
                    onClick={() => setJenjangKarirTerapkanOpt('Ya')}
                    radioValue={jenjangKarirTerapkanOpt}
                    selected={jenjangKarirTerapkanOpt == 'Ya'}
                    label="Ya"
                  />
                </div>
                <div className="mx-10 inline-flex items-center">
                  <InputForm
                    radioButton={true}
                    radioName="jenjangKarirTerapkanOpt"
                    onClick={() => setJenjangKarirTerapkanOpt('Tidak')}
                    radioValue={jenjangKarirTerapkanOpt}
                    selected={jenjangKarirTerapkanOpt == 'Tidak'}
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
                radioValue={putusKerjaOpt}
                selected={putusKerjaOpt == 'Ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="putusKerjaOpt"
                onClick={() => setPutusKerjaOpt('Tidak')}
                radioValue={putusKerjaOpt}
                selected={putusKerjaOpt == 'Tidak'}
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
                radioValue={putusKerjaGantiOpt}
                selected={putusKerjaGantiOpt == 'Ya'}
                label="Ya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="putusKerjaGantiOpt"
                onClick={() => setPutusKerjaGantiOpt('Tidak')}
                radioValue={putusKerjaGantiOpt}
                selected={putusKerjaGantiOpt == 'Tidak'}
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
