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

const FormManajemenStep4 = () => {

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState([])

  ////////////////////////// INPUT FORM STATE ////////////////////////////////

  const [kodeLaporKebun, setKodeLaporKebun] = useState('');
  const [kodeLaporKebunProv, setKodeLaporKebunProv] = useState('');
  const [kodeLaporKebunKab, setKodeLaporKebunKab] = useState('');
  const [kodeLaporBPS, setKodeLaporBPS] = useState('');

  ////////////////////////// RADIO BUTTON STATE ////////////////////////////////

  const [pekerjaAnak, setPekerjaAnak] = useState('');

  const [pelaksanaLaporKebun, setPelaksanaLaporKebun] = useState('');
  const [pelaksanaLaporKebunProv, setPelaksanaLaporKebunProv] = useState('');
  const [pelaksanaLaporKebunKab, setPelaksanaLaporKebunKab] = useState('');
  const [pelaksanaLaporBPS, setPelaksanaLaporBPS] = useState('');

  const [sediaInfoLingkungan, setSediaInfoLingkungan] = useState('');
  const [aksesInfoLingkungan, setAksesInfoLingkungan] = useState('');

  const [sediaInfoSosial, setSediaInfoSosial] = useState('');
  const [aksesInfoSosial, setAksesInfoSosial] = useState('');

  const [sediaInfoHukum, setSediaInfoHukum] = useState('');
  const [aksesInfoHukum, setAksesInfoHukum] = useState('');

  ////////////////////////// Jumlah Pegawai ////////////////////////////////

  const [kantorPusat, setKantorPusat] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Staff','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Bulanan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Tetap','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Lepas','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Musiman/Borongan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }
    ]
  ])
  const [kantor, setKantor] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Staff','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Bulanan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Tetap','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Lepas','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Musiman/Borongan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }
    ]
  ])
  const [kantorLapangan, setKantorLapangan] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Staff','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Bulanan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Tetap','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Lepas','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Musiman/Borongan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }
    ]
  ])
  const [kantorPabrik, setKantorPabrik] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Staff','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Bulanan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Tetap','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Lepas','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Musiman/Borongan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }
    ]
  ])
  const [kantorLain, setKantorLain] = useState([
    [
      { 'sectionTitle': '', 'sectionData': [ {'title':'Staff','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Bulanan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Tetap','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Harian Lepas','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }, { 'sectionTitle': '', 'sectionData': [ {'title':'Musiman/Borongan','placeholder':'masukkan total','type':'text','value':'','isOpt':false}, {'title':'Pria','placeholder':'masukkan jumlah pria','type':'text','value':'','isOpt':false}, {'title':'Wanita','placeholder':'masukkan jumlah wanita','type':'text','value':'','isOpt':false}, ] }
    ]
  ])

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
      localStorage.removeItem("mnjPart4Nilai");
      let retrievedObject = JSON.parse(localStorage.getItem('mnjPart4NilaiReport'));

      if (!_.isEmpty(retrievedObject)) {

        setTimeout(() => {

          console.log(retrievedObject)

          setPekerjaAnak(retrievedObject.childWorker.hasChildWorker)

          setPelaksanaLaporKebun(retrievedObject.reportInformation[0].frequency)
          setPelaksanaLaporKebunProv(retrievedObject.reportInformation[1].frequency)
          setPelaksanaLaporKebunKab(retrievedObject.reportInformation[2].frequency)
          setPelaksanaLaporBPS(retrievedObject.reportInformation[3].frequency)

          setSediaInfoLingkungan(retrievedObject.informationTransparency[0].media)
          setAksesInfoLingkungan(retrievedObject.informationTransparency[0].publicAccess)

          setSediaInfoSosial(retrievedObject.informationTransparency[1].media)
          setAksesInfoSosial(retrievedObject.informationTransparency[1].publicAccess)

          setSediaInfoHukum(retrievedObject.informationTransparency[2].media)
          setAksesInfoHukum(retrievedObject.informationTransparency[2].publicAccess)

          setKodeLaporKebun(retrievedObject.reportInformation[0].reporTo)
          setKodeLaporKebunProv(retrievedObject.reportInformation[1].reporTo)
          setKodeLaporKebunKab(retrievedObject.reportInformation[2].reporTo)
          setKodeLaporBPS(retrievedObject.reportInformation[3].reporTo)

          setKantorPusat([ [{ 'sectionTitle': '', 'sectionData': [{ 'title': 'Staff', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[0].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[0].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[0].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Bulanan', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[1].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[1].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[1].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Harian Tetap', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[2].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[2].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[2].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Harian Lepas', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[3].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[3].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[3].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Musiman/Borongan', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[4].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[4].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[4].totalFemale, 'isOpt': false }, ] }] ])

          setKantor([ [{ 'sectionTitle': '', 'sectionData': [{ 'title': 'Staff', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[5].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[5].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[5].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Bulanan', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[6].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[6].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[6].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Harian Tetap', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[7].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[7].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[7].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Harian Lepas', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[8].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[8].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[8].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Musiman/Borongan', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[9].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[9].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[9].totalFemale, 'isOpt': false }, ] }] ])

          setKantorLapangan([ [{ 'sectionTitle': '', 'sectionData': [{ 'title': 'Staff', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[9].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[9].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[9].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Bulanan', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[10].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[10].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[10].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Harian Tetap', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[11].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[11].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[11].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Harian Lepas', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[12].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[12].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[12].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Musiman/Borongan', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[13].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[13].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[13].totalFemale, 'isOpt': false }, ] }] ])

          setKantorPabrik([ [{ 'sectionTitle': '', 'sectionData': [{ 'title': 'Staff', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[14].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[14].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[14].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Bulanan', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[15].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[15].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[15].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Harian Tetap', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[16].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[16].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[16].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Harian Lepas', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[17].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[17].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[17].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Musiman/Borongan', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[18].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[18].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[18].totalFemale, 'isOpt': false }, ] }] ])

          setKantorLain([ [{ 'sectionTitle': '', 'sectionData': [{ 'title': 'Staff', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[19].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[19].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[19].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Bulanan', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[20].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[20].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[20].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Harian Tetap', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[21].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[21].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[21].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Harian Lepas', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[22].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[22].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[22].totalFemale, 'isOpt': false }, ] }, { 'sectionTitle': '', 'sectionData': [{ 'title': 'Musiman/Borongan', 'placeholder': 'masukkan total', 'type': 'text', 'value': retrievedObject.childWorker.details[23].totalEmployee, 'isOpt': false }, { 'title': 'Pria', 'placeholder': 'masukkan jumlah pria', 'type': 'text', 'value': retrievedObject.childWorker.details[23].totalMale, 'isOpt': false }, { 'title': 'Wanita', 'placeholder': 'masukkan jumlah wanita', 'type': 'text', 'value': retrievedObject.childWorker.details[23].totalFemale, 'isOpt': false }, ] }] ])

        }, 250)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {

    let data = {
      "childWorker": {
        "hasChildWorker": pekerjaAnak,
        "details": [
          {
              "level": "Kantor Direksi",
              "employeeType": "Staff",
              "totalEmployee": kantorPusat[0][0].sectionData[0].value,
              "totalMale": kantorPusat[0][0].sectionData[1].value,
              "totalFemale": kantorPusat[0][0].sectionData[2].value
          },
          {
              "level": "Kantor Direksi",
              "employeeType": "Bulanan",
              "totalEmployee": kantorPusat[0][1].sectionData[0].value,
              "totalMale": kantorPusat[0][1].sectionData[1].value,
              "totalFemale": kantorPusat[0][1].sectionData[2].value
          },
          {
              "level": "Kantor Direksi",
              "employeeType": "Harian Tetap",
              "totalEmployee": kantorPusat[0][2].sectionData[0].value,
              "totalMale": kantorPusat[0][2].sectionData[1].value,
              "totalFemale": kantorPusat[0][2].sectionData[0].value
          },
          {
              "level": "Kantor Direksi",
              "employeeType": "Harian Lepas",
              "totalEmployee": kantorPusat[0][3].sectionData[0].value,
              "totalMale": kantorPusat[0][3].sectionData[1].value,
              "totalFemale": kantorPusat[0][3].sectionData[2].value
          },
          {
              "level": "Kantor Direksi",
              "employeeType": "Musiman/Borongan",
              "totalEmployee": kantorPusat[0][4].sectionData[0].value,
              "totalMale": kantorPusat[0][4].sectionData[1].value,
              "totalFemale": kantorPusat[0][4].sectionData[0].value
          },
          {
              "level": "Kebun (Lapangan)",
              "employeeType": "Staff",
              "totalEmployee": kantor[0][0].sectionData[0].value,
              "totalMale": kantor[0][0].sectionData[1].value,
              "totalFemale": kantor[0][0].sectionData[2].value
          },
          {
              "level": "Kebun (Lapangan)",
              "employeeType": "Bulanan",
              "totalEmployee": kantor[0][1].sectionData[0].value,
              "totalMale": kantor[0][1].sectionData[1].value,
              "totalFemale": kantor[0][1].sectionData[2].value
          },
          {
              "level": "Kebun (Lapangan)",
              "employeeType": "Harian Tetap",
              "totalEmployee": kantor[0][2].sectionData[0].value,
              "totalMale": kantor[0][2].sectionData[1].value,
              "totalFemale": kantor[0][2].sectionData[2].value
          },
          {
              "level": "Kebun (Lapangan)",
              "employeeType": "Harian Lepas",
              "totalEmployee": kantor[0][3].sectionData[0].value,
              "totalMale": kantor[0][3].sectionData[1].value,
              "totalFemale": kantor[0][3].sectionData[2].value
          },
          {
              "level": "Kebun (Lapangan)",
              "employeeType": "Musiman/Borongan",
              "totalEmployee": kantor[0][4].sectionData[0].value,
              "totalMale": kantor[0][4].sectionData[1].value,
              "totalFemale": kantor[0][4].sectionData[2].value
          },
          {
              "level": "Kebun (Kantor)",
              "employeeType": "Staff",
              "totalEmployee": kantorLapangan[0][0].sectionData[0].value,
              "totalMale": kantorLapangan[0][0].sectionData[1].value,
              "totalFemale": kantorLapangan[0][0].sectionData[2].value
          },
          {
              "level": "Kebun (Kantor)",
              "employeeType": "Bulanan",
              "totalEmployee": kantorLapangan[0][1].sectionData[0].value,
              "totalMale": kantorLapangan[0][1].sectionData[1].value,
              "totalFemale": kantorLapangan[0][1].sectionData[2].value
          },
          {
              "level": "Kebun (Kantor)",
              "employeeType": "Harian Tetap",
              "totalEmployee": kantorLapangan[0][2].sectionData[0].value,
              "totalMale": kantorLapangan[0][2].sectionData[1].value,
              "totalFemale": kantorLapangan[0][2].sectionData[2].value
          },
          {
              "level": "Kebun (Kantor)",
              "employeeType": "Harian Lepas",
              "totalEmployee": kantorLapangan[0][3].sectionData[0].value,
              "totalMale": kantorLapangan[0][3].sectionData[1].value,
              "totalFemale": kantorLapangan[0][3].sectionData[2].value
          },
          {
              "level": "Kebun (Kantor)",
              "employeeType": "Musiman/Borongan",
              "totalEmployee": kantorLapangan[0][4].sectionData[0].value,
              "totalMale": kantorLapangan[0][4].sectionData[1].value,
              "totalFemale": kantorLapangan[0][4].sectionData[2].value
          },
          {
              "level": "Pabrik",
              "employeeType": "Staff",
              "totalEmployee": kantorPabrik[0][0].sectionData[0].value,
              "totalMale": kantorPabrik[0][0].sectionData[1].value,
              "totalFemale": kantorPabrik[0][0].sectionData[2].value
          },
          {
              "level": "Pabrik",
              "employeeType": "Bulanan",
              "totalEmployee": kantorPabrik[0][1].sectionData[0].value,
              "totalMale": kantorPabrik[0][1].sectionData[1].value,
              "totalFemale": kantorPabrik[0][1].sectionData[2].value
          },
          {
              "level": "Pabrik",
              "employeeType": "Harian Tetap",
              "totalEmployee": kantorPabrik[0][2].sectionData[0].value,
              "totalMale": kantorPabrik[0][2].sectionData[1].value,
              "totalFemale": kantorPabrik[0][2].sectionData[2].value
          },
          {
              "level": "Pabrik",
              "employeeType": "Harian Lepas",
              "totalEmployee": kantorPabrik[0][3].sectionData[0].value,
              "totalMale": kantorPabrik[0][3].sectionData[1].value,
              "totalFemale": kantorPabrik[0][3].sectionData[2].value
          },
          {
              "level": "Pabrik",
              "employeeType": "Musiman/Borongan",
              "totalEmployee": kantorPabrik[0][4].sectionData[0].value,
              "totalMale": kantorPabrik[0][4].sectionData[1].value,
              "totalFemale": kantorPabrik[0][4].sectionData[2].value
          },
          {
              "level": "Kegiatan Lainnya",
              "employeeType": "Staff",
              "totalEmployee": kantorLain[0][0].sectionData[0].value,
              "totalMale": kantorLain[0][0].sectionData[1].value,
              "totalFemale": kantorLain[0][0].sectionData[2].value
          },
          {
              "level": "Kegiatan Lainnya",
              "employeeType": "Bulanan",
              "totalEmployee": kantorLain[0][1].sectionData[0].value,
              "totalMale": kantorLain[0][1].sectionData[1].value,
              "totalFemale": kantorLain[0][1].sectionData[2].value
          },
          {
              "level": "Kegiatan Lainnya",
              "employeeType": "Harian Tetap",
              "totalEmployee": kantorLain[0][2].sectionData[0].value,
              "totalMale": kantorLain[0][2].sectionData[1].value,
              "totalFemale": kantorLain[0][2].sectionData[2].value
          },
          {
              "level": "Kegiatan Lainnya",
              "employeeType": "Harian Lepas",
              "totalEmployee": kantorLain[0][3].sectionData[0].value,
              "totalMale": kantorLain[0][3].sectionData[1].value,
              "totalFemale": kantorLain[0][3].sectionData[2].value
          },
          {
              "level": "Kegiatan Lainnya",
              "employeeType": "Musiman/Borongan",
              "totalEmployee": kantorLain[0][4].sectionData[0].value,
              "totalMale": kantorLain[0][4].sectionData[1].value,
              "totalFemale": kantorLain[0][4].sectionData[2].value
          }
        ]
      },
      "reportInformation": [
        {
          "reporTo": kodeLaporKebun,
          "reportCode": "01",
          "frequency": pelaksanaLaporKebun
        },
        {
          "reporTo": kodeLaporKebunProv,
          "reportCode": "01",
          "frequency": pelaksanaLaporKebunProv
        },
         {
          "reporTo": kodeLaporKebunKab,
          "reportCode": "01",
          "frequency": pelaksanaLaporKebunKab
          },
         {
          "reporTo": kodeLaporBPS,
          "reportCode": "01",
          "frequency": pelaksanaLaporBPS
          }
      ],
      "informationTransparency": [
         {
          "topic": "Informasi Lingkungan",
          "media": sediaInfoLingkungan,
          "publicAccess": aksesInfoLingkungan
          },
         {
          "topic": "Informasi Sosial",
          "media": sediaInfoSosial,
          "publicAccess": aksesInfoSosial
          },
         {
          "topic": "Informasi Hukum",
          "media": sediaInfoHukum,
          "publicAccess": aksesInfoHukum
          }
      ]
    }

    setDataSubmit(data)

  }, [kodeLaporKebun,kodeLaporKebunProv,kodeLaporKebunKab,kodeLaporBPS,pekerjaAnak,pelaksanaLaporKebun
    ,pelaksanaLaporKebunProv,pelaksanaLaporKebunKab,pelaksanaLaporBPS,sediaInfoLingkungan,aksesInfoLingkungan,sediaInfoSosial
    ,aksesInfoSosial,sediaInfoHukum,aksesInfoHukum,kantorPusat,kantor,kantorLapangan,kantorPabrik,kantorLain])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      localStorage.setItem("mnjPart4Nilai", JSON.stringify(dataSubmit));
    }
  },[dataPass,dataSubmit])

  function clearData() {

  }

  return (
    <>
      <Head>
        
      </Head>

      <form>
        {/* Tenaga Kerja Anak */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Tenaga Kerja Anak</span>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Apakah perusahaan mempekerjakan tenaga kerja anak, baik secara insidentil maupun secara tetap?</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pekerjaAnak"
                onClick={() => setPekerjaAnak('Iya')}
                radioValue={pekerjaAnak}
                selected={pekerjaAnak == 'Iya'}
                label="Iya"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pekerjaAnak"
                onClick={() => setPekerjaAnak('Tidak')}
                radioValue={pekerjaAnak}
                selected={pekerjaAnak == 'Tidak'}
                label="Tidak"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Jumlah Pegawai</p>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tingkat : Kantor Direksi (Pusat)</p>
          <div className="flex flex-col">
            {
              kantorPusat.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kantorPusat, setKantorPusat)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kantorPusat, setKantorPusat, i, ii, iii)}/>
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

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tingkat : Kebun (Kantor)</p>
          <div className="flex flex-col">
            {
              kantor.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kantor, setKantor)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_tri"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kantor, setKantor, i, ii, iii)}/>
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

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tingkat : Kebun (Lapangan)</p>
          <div className="flex flex-col">
            {
              kantorLapangan.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kantorLapangan, setKantorLapangan)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_tri"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kantorLapangan, setKantorLapangan, i, ii, iii)}/>
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

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tingkat : Pabrik</p>
          <div className="flex flex-col">
            {
              kantorPabrik.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kantorPabrik, setKantorPabrik)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_tri"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kantorPabrik, setKantorPabrik, i, ii, iii)}/>
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

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Tingkat : Kegiatan Lainnya</p>
          <div className="flex flex-col">
            {
              kantorLain.map((items, i) => (
                <div className={`${mng["base__formlabel_twin"]}`} key={i}>
                  {
                    i > 0 ?
                    <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, kantorLain, setKantorLain)}>
                      do_not_disturb_on
                    </span>
                    :
                    <></>
                  }
                  {
                    items.map((item,ii) => (
                      <div className={`${mng["base__formlabel_tri"]} w-full`} key={ii}>
                        <p className={`${mng["base__formtitle"]} ${"mt-0"}`}>{item.sectionTitle}</p>
                        <div className={`${mng["base__formlabel_tri"]} w-full`}>
                        {
                          item.sectionData.map((child,iii) => (
                            <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={iii}>
                              <span className={mng.base__inputtitle}>{child.title}</span>
                              <input className={mng.base__inputbase} type={child.type} min='0' placeholder={child.placeholder} value={child.value} onChange={(e) => formSectionChange(e, kantorLain, setKantorLain, i, ii, iii)}/>
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

        {/* Pelaporan dan Transparansi Informasi */}
        <div className={`${mng["base__formsection"]}`}>
          <span className={mng.base__subtitle}>Pelaporan dan Transparansi Informasi</span>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pelaporan</p>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pelaporan Kepada : Ditjen Perkebunan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Nomor/Kode pelaporan</span>
            <input type="text" placeholder="masukkan keterngan" value={kodeLaporKebun} className={mng.base__inputbase} onChange={(e) => setKodeLaporKebun(e.target.value)}/>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Pelaksanaan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebun"
                onClick={() => setPelaksanaLaporKebun('Periodik')}
                radioValue={pelaksanaLaporKebun}
                selected={pelaksanaLaporKebun == 'Periodik'}
                label="Periodik"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebun"
                onClick={() => setPelaksanaLaporKebun('Kadang-Kadang')}
                radioValue={pelaksanaLaporKebun}
                selected={pelaksanaLaporKebun == 'Kadang-Kadang'}
                label="Kadang-Kadang"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebun"
                onClick={() => setPelaksanaLaporKebun('Tidak Melapor')}
                radioValue={pelaksanaLaporKebun}
                selected={pelaksanaLaporKebun == 'Tidak Melapor'}
                label="Tidak Melapor"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pelaporan Kepada : Dinas Perkebunan Provinsi</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Nomor/Kode pelaporan</span>
            <input type="text" placeholder="masukkan keterngan" value={kodeLaporKebunProv} className={mng.base__inputbase} onChange={(e) => setKodeLaporKebunProv(e.target.value)}/>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Pelaksanaan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebunProv"
                onClick={() => setPelaksanaLaporKebunProv('Periodik')}
                radioValue={pelaksanaLaporKebunProv}
                selected={pelaksanaLaporKebunProv == 'Periodik'}
                label="Periodik"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebunProv"
                onClick={() => setPelaksanaLaporKebunProv('Kadang-Kadang')}
                radioValue={pelaksanaLaporKebunProv}
                selected={pelaksanaLaporKebunProv == 'Kadang-Kadang'}
                label="Kadang-Kadang"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebunProv"
                onClick={() => setPelaksanaLaporKebunProv('Tidak Melapor')}
                radioValue={pelaksanaLaporKebunProv}
                selected={pelaksanaLaporKebunProv == 'Tidak Melapor'}
                label="Tidak Melapor"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pelaporan Kepada : Dinas Perkebunan Kabupaten</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Nomor/Kode pelaporan</span>
            <input type="text" placeholder="masukkan keterngan" value={kodeLaporKebunKab} className={mng.base__inputbase} onChange={(e) => setKodeLaporKebunKab(e.target.value)}/>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Pelaksanaan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebunKab"
                onClick={() => setPelaksanaLaporKebunKab('Periodik')}
                radioValue={pelaksanaLaporKebunKab}
                selected={pelaksanaLaporKebunKab == 'Periodik'}
                label="Periodik"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebunKab"
                onClick={() => setPelaksanaLaporKebunKab('Kadang-Kadang')}
                radioValue={pelaksanaLaporKebunKab}
                selected={pelaksanaLaporKebunKab == 'Kadang-Kadang'}
                label="Kadang-Kadang"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporKebunKab"
                onClick={() => setPelaksanaLaporKebunKab('Tidak Melapor')}
                radioValue={pelaksanaLaporKebunKab}
                selected={pelaksanaLaporKebunKab == 'Tidak Melapor'}
                label="Tidak Melapor"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Pelaporan Kepada : BPS</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Nomor/Kode pelaporan</span>
            <input type="text" placeholder="masukkan keterngan" value={kodeLaporBPS} className={mng.base__inputbase} onChange={(e) => setKodeLaporBPS(e.target.value)}/>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Pelaksanaan Pelaporan</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporBPS"
                onClick={() => setPelaksanaLaporBPS('Periodik')}
                radioValue={pelaksanaLaporBPS}
                selected={pelaksanaLaporBPS == 'Periodik'}
                label="Periodik"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporBPS"
                onClick={() => setPelaksanaLaporBPS('Kadang-Kadang')}
                radioValue={pelaksanaLaporBPS}
                selected={pelaksanaLaporBPS == 'Kadang-Kadang'}
                label="Kadang-Kadang"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="pelaksanaLaporBPS"
                onClick={() => setPelaksanaLaporBPS('Tidak Melapor')}
                radioValue={pelaksanaLaporBPS}
                selected={pelaksanaLaporBPS == 'Tidak Melapor'}
                label="Tidak Melapor"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Transparansi Informasi</p>
          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Informasi Lingkungan</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketersediaan Informasi</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sediaInfoLingkungan"
                onClick={() => setSediaInfoLingkungan('Cetakan')}
                radioValue={sediaInfoLingkungan}
                selected={sediaInfoLingkungan == 'Cetakan'}
                label="Cetakan"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sediaInfoLingkungan"
                onClick={() => setSediaInfoLingkungan('Elektronik')}
                radioValue={sediaInfoLingkungan}
                selected={sediaInfoLingkungan == 'Elektronik'}
                label="Elektronik"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Akses Bagi Masyarakat</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="aksesInfoLingkungan"
                onClick={() => setAksesInfoLingkungan('Mudah')}
                radioValue={aksesInfoLingkungan}
                selected={aksesInfoLingkungan == 'Mudah'}
                label="Mudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="aksesInfoLingkungan"
                onClick={() => setAksesInfoLingkungan('Sulit')}
                radioValue={aksesInfoLingkungan}
                selected={aksesInfoLingkungan == 'Sulit'}
                label="Sulit"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Informasi Sosial</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketersediaan Informasi</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sediaInfoSosial"
                onClick={() => setSediaInfoSosial('Cetakan')}
                radioValue={sediaInfoSosial}
                selected={sediaInfoSosial == 'Cetakan'}
                label="Cetakan"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sediaInfoSosial"
                onClick={() => setSediaInfoSosial('Elektronik')}
                radioValue={sediaInfoSosial}
                selected={sediaInfoSosial == 'Elektronik'}
                label="Elektronik"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Akses Bagi Masyarakat</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="aksesInfoSosial"
                onClick={() => setAksesInfoSosial('Mudah')}
                radioValue={aksesInfoSosial}
                selected={aksesInfoSosial == 'Mudah'}
                label="Mudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="aksesInfoSosial"
                onClick={() => setAksesInfoSosial('Sulit')}
                radioValue={aksesInfoSosial}
                selected={aksesInfoSosial == 'Sulit'}
                label="Sulit"
              />
            </div>
          </label>

          <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Informasi Hukum</p>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Ketersediaan Informasi</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sediaInfoHukum"
                onClick={() => setSediaInfoHukum('Cetakan')}
                radioValue={sediaInfoHukum}
                selected={sediaInfoHukum == 'Cetakan'}
                label="Cetakan"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="sediaInfoHukum"
                onClick={() => setSediaInfoHukum('Elektronik')}
                radioValue={sediaInfoHukum}
                selected={sediaInfoHukum == 'Elektronik'}
                label="Elektronik"
              />
            </div>
          </label>
          <label className={mng.base__formlabel}>
            <span className={mng.base__inputtitle}>Akses Bagi Masyarakat</span>
            <div className="inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="aksesInfoHukum"
                onClick={() => setAksesInfoHukum('Mudah')}
                radioValue={aksesInfoHukum}
                selected={aksesInfoHukum == 'Mudah'}
                label="Mudah"
              />
            </div>
            <div className="mx-10 inline-flex items-center">
              <InputForm
                radioButton={true}
                radioName="aksesInfoHukum"
                onClick={() => setAksesInfoHukum('Sulit')}
                radioValue={aksesInfoHukum}
                selected={aksesInfoHukum == 'Sulit'}
                label="Sulit"
              />
            </div>
          </label>

        </div>

      </form>

    </>
  );
};
export default FormManajemenStep4;
