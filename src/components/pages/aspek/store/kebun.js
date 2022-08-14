import React, { useState, useEffect } from 'react'
import _ from 'lodash';

const storeKebun = props => {

  useEffect(() => {

    let kebunReportState = {
      "plant": [
        [ {'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':'','isOpt':false}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
      ],
      "seed": [
        [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
      ],
      "sprout": [
        [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
      ],
      "emplacement": [
        [ {'title':'Jenis Emplasmen','placeholder':'Pilih Jenis Emplasmen','type':'text','value':'','isOpt':'selEmplasmen'}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':'selKec'}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]
      ],
      "road": [
        [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
      ],
      "backupArea": [
        [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
      ],
      "conservationArea": [
        [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
      ],
      "tmd": [
        [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
      ],
      "riceField": [
        [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
      ],
      "thirdParty": [
        [ {'title':'Jenis Pihak Ketiga','placeholder':'Pilih Jenis Pihak Ketiga','type':'text','value':'','isOpt':'selPihakKetiga'}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':'selKec'}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]
      ],
      "other": [
        [ {'title':'Jenis Areal Lain-lain','placeholder':'Jenis Areal','type':'text','value':'','isOpt':false}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]
      ],
      "topography": [
        [ { 'sectionTitle': 'Lereng Datar (0-8 %)', 'sectionData': [{'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Landai (8-15 %)', 'sectionData': [{'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Agak Curam (15-24 %)', 'sectionData': [{'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Curam (24-45 %)', 'sectionData': [{'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Sangat Curam (>45 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tipe Iklim','type':'text','placeholder':'Tipe Iklim','value':''}, {'title':'Curah Hujan (mm)','type':'number','placeholder':'Jumlah','value':''}, {'title':'Waktu Laporan','type':'text','placeholder':'MM/YYYY','value':''}, ] } ]
      ],
      "newPlanting": [
        [ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Tahun Tanam','placeholder':'YYYY','type':'number','value':'','isOpt':false}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Jumlah Pohon','type':'number','placeholder':'Jumlah','value':'','isOpt':false} ]
      ],
      "composition": [
        [ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'TBM (Ha)','placeholder':'Luas Lahan dalam Ha','type':'number','value':'','isOpt':false}, {'title':'TM (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'TTR (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false} ]
      ],
      "fertilization": [
        [ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Luas yang Dipupuk (Ha)','placeholder':'Luas Lahan dalam Ha','type':'number','value':'','isOpt':false}, {'title':'Jenis pupuk','type':'text','placeholder':'Jenis Pupuk','value':'','isOpt':false}, {'title':'Dosis (kg/Ha)','type':'number','placeholder':'Jumlah Dosis','value':'','isOpt':false}, {'title':'Jumlah pupuk (Kg)','type':'number','placeholder':'Jumlah Pupuk','value':'','isOpt':false} ]
      ],
      "pestControl": [
        [ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':''}, {'title':'Jenis Hama Penyakit','type':'text','placeholder':'Jenis Hama Penyakit','value':''}, {'title':'Luas Serangan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Luas yang dikendalikan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''}, ] }, { 'sectionTitle': 'Luas Cara Pengendalian', 'sectionData': [ {'title':'Chemical (ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Hayati (ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Mekanis (ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''} ] } ]
      ],
      "diversification": [
        [ {'title':'Cabang Diversifikasi','placeholder':'Jenis Diversifikasi','type':'text','value':'','isOpt':false}, {'title':'Luas/volume','placeholder':'Luas/Volume','type':'number','value':'','isOpt':false}, {'title':'Produksi (Ton)','type':'number','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'Nilai (Rp)','type':'number','placeholder':'Nilai dalam Rupiah','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]
      ],
      "productivity": [
        [ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Luas TM (ha)','placeholder':'Luas Lahan dalam Ha','type':'number','value':'','isOpt':false}, {'title':'Luas yang dipanen (ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Produksi mentah (kg)','type':'number','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'produksi kering (kg)','type':'number','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'Produktivitas (kg/ha/tahun)','type':'number','placeholder':'Nilai Produktivitas','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]
      ]
    }

    let retrievedDataApi = JSON.parse(localStorage.getItem('dataSubmitKebun'));

    if (!_.isEmpty(retrievedDataApi) || retrievedDataApi != undefined) {
      let replicateData = {
        "plant": [],
        "seed": [],
        "sprout": [],
        "emplacement": [],
        "road": [],
        "backupArea": [],
        "conservationArea": [],
        "tmd": [],
        "riceField": [],
        "thirdParty": [],
        "other": [],
        "topography": [],
        "newPlanting": [],
        "composition": [],
        "fertilization": [],
        "pestControl": [],
        "diversification": [],
        "productivity": []
      }

      retrievedDataApi.plant.forEach((e, i) => {
        const formData = [
          [ {'title':'Jenis Tanaman','type':'text','placeholder':'Jenis Tanaman','value':'','isOpt':false}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
        ]
        setToForm(formData,replicateData.plant, e)
      })

      retrievedDataApi.seed.forEach((e, i) => {
        const formData = [
          [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
        ]
        setToForm(formData,replicateData.seed, e)
      })

      retrievedDataApi.sprout.forEach((e, i) => {
        const formData = [
          [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
        ]
        setToForm(formData,replicateData.sprout, e)
      })

      retrievedDataApi.emplacement.forEach((e, i) => {
        const formData = [
          [ {'title':'Jenis Emplasmen','placeholder':'Pilih Jenis Emplasmen','type':'text','value':'','isOpt':'selEmplasmen'}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':'selKec'}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]
        ]
        setToForm(formData,replicateData.emplacement, e)
      })

      retrievedDataApi.road.forEach((e, i) => {
        const formData = [
          [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
        ]
        setToForm(formData,replicateData.road, e)
      })

      retrievedDataApi.backupArea.forEach((e, i) => {
        const formData = [
          [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
        ]
        setToForm(formData,replicateData.backupArea, e)
      })

      retrievedDataApi.conservationArea.forEach((e, i) => {
        const formData = [
          [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
        ]
        setToForm(formData,replicateData.conservationArea, e)
      })

      retrievedDataApi.tmd.forEach((e, i) => {
        const formData = [
          [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
        ]
        setToForm(formData,replicateData.tmd, e)
      })

      retrievedDataApi.riceField.forEach((e, i) => {
        const formData = [
          [ {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
        ]
        setToForm(formData,replicateData.riceField, e)
      })

      retrievedDataApi.thirdParty.forEach((e, i) => {
        const formData = [
          [ {'title':'Jenis Pihak Ketiga','placeholder':'Pilih Jenis Pihak Ketiga','type':'text','value':'','isOpt':'selPihakKetiga'}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':'selKec'}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]
        ]
        setToForm(formData,replicateData.thirdParty, e)
      })

      retrievedDataApi.other.forEach((e, i) => {
        const formData = [
          [ {'title':'Jenis Areal Lain-lain','placeholder':'Jenis Areal','type':'text','value':'','isOpt':false}, {'title':'Kec/Desa','placeholder':'Pilih Kec/Desa','type':'text','value':'','isOpt':true}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Masukkan Nilai Biaya','value':'','isOpt':false}, ]
        ]
        setToForm(formData,replicateData.other, e)
      })

      retrievedDataApi.newPlanting.forEach((e, i) => {
        const formData = [
          [ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Tahun Tanam','placeholder':'YYYY','type':'number','value':'','isOpt':false}, {'title':'Luas yang Digunakan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Jumlah Pohon','type':'number','placeholder':'Jumlah','value':'','isOpt':false} ]
        ]
        setToForm(formData,replicateData.newPlanting, e)
      })

      retrievedDataApi.composition.forEach((e, i) => {
        const formData = [
          [ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'TBM (Ha)','placeholder':'Luas Lahan dalam Ha','type':'number','value':'','isOpt':false}, {'title':'TM (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'TTR (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false} ]
        ]
        setToForm(formData,replicateData.composition, e)
      })

      retrievedDataApi.fertilization.forEach((e, i) => {
        const formData = [
          [ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Luas yang Dipupuk (Ha)','placeholder':'Luas Lahan dalam Ha','type':'number','value':'','isOpt':false}, {'title':'Jenis pupuk','type':'text','placeholder':'Jenis Pupuk','value':'','isOpt':false}, {'title':'Dosis (kg/Ha)','type':'number','placeholder':'Jumlah Dosis','value':'','isOpt':false}, {'title':'Jumlah pupuk (Kg)','type':'number','placeholder':'Jumlah Pupuk','value':'','isOpt':false} ]
        ]
        setToForm(formData,replicateData.fertilization, e)
      })

      retrievedDataApi.diversification.forEach((e, i) => {
        const formData = [
          [ {'title':'Cabang Diversifikasi','placeholder':'Jenis Diversifikasi','type':'text','value':'','isOpt':false}, {'title':'Luas/volume','placeholder':'Luas/Volume','type':'number','value':'','isOpt':false}, {'title':'Produksi (Ton)','type':'number','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'Nilai (Rp)','type':'number','placeholder':'Nilai dalam Rupiah','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]
        ]
        setToForm(formData,replicateData.diversification, e)
      })

      retrievedDataApi.productivity.forEach((e, i) => {
        const formData = [
          [ {'title':'Jenis Tanaman','placeholder':'Jenis Tanaman','type':'text','value':'','isOpt':false}, {'title':'Luas TM (ha)','placeholder':'Luas Lahan dalam Ha','type':'number','value':'','isOpt':false}, {'title':'Luas yang dipanen (ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Produksi mentah (kg)','type':'number','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'produksi kering (kg)','type':'number','placeholder':'Jumlah Produksi','value':'','isOpt':false}, {'title':'Produktivitas (kg/ha/tahun)','type':'number','placeholder':'Nilai Produktivitas','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]
        ]
        setToForm(formData,replicateData.productivity, e)
      })

      retrievedDataApi.topography.forEach((e, i) => {
        const formData = [
          [ { 'sectionTitle': 'Lereng Datar (0-8 %)', 'sectionData': [{'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Landai (8-15 %)', 'sectionData': [{'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Agak Curam (15-24 %)', 'sectionData': [{'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Curam (24-45 %)', 'sectionData': [{'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''},{'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':''},{'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}] }, { 'sectionTitle': 'Lereng Sangat Curam (>45 %)', 'sectionData': [ {'title':'Luas (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Persentase (%)','type':'number','placeholder':'Persentase','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}, {'title':'Tipe Iklim','type':'text','placeholder':'Tipe Iklim','value':''}, {'title':'Curah Hujan (mm)','type':'number','placeholder':'Jumlah','value':''}, {'title':'Waktu Laporan','type':'text','placeholder':'MM/YYYY','value':''}, ] } ]
        ]
        let moveArr = []
        Object.keys(e).forEach(key => {
          moveArr.push(e[key])
        });
        formData.forEach((form,i2) => {
          form.forEach((formData, i3) => {
            let moveArr2 = []
            Object.keys(moveArr[i3]).forEach(key => {
              moveArr2.push(moveArr[i3][key])
            });
            formData.sectionData.forEach((secData, i4) => {
              secData.value = moveArr2[i4]
            })
          })
          replicateData.topography.push(form)
        })
      })

      retrievedDataApi.pestControl.forEach((e, i) => {
        const formData = [{
          'sectionTitle': '',
          'sectionData': [{
            'title': 'Jenis Tanaman',
            'type': 'text',
            'placeholder': 'Jenis Tanaman',
            'value': e.plantType
          }, {
            'title': 'Jenis Hama Penyakit',
            'type': 'text',
            'placeholder': 'Jenis Hama Penyakit',
            'value': e.pestType
          }, {
            'title': 'Luas Serangan (Ha)',
            'type': 'number',
            'placeholder': 'Luas Lahan dalam Ha',
            'value': e.attackedArea
          }, {
            'title': 'Luas yang dikendalikan (Ha)',
            'type': 'number',
            'placeholder': 'Luas Lahan dalam Ha',
            'value': e.controlledArea
          }, ]
        }, {
          'sectionTitle': 'Luas Cara Pengendalian',
          'sectionData': [{
            'title': 'Chemical (ha)',
            'type': 'number',
            'placeholder': 'Luas Lahan dalam Ha',
            'value': e.chemicalArea
          }, {
            'title': 'Hayati (ha)',
            'type': 'number',
            'placeholder': 'Luas Lahan dalam Ha',
            'value': e.biologicalArea
          }, {
            'title': 'Mekanis (ha)',
            'type': 'number',
            'placeholder': 'Luas Lahan dalam Ha',
            'value': e.mechanicalArea
          }]
        }]
        replicateData.pestControl.push(formData)
      })

      localStorage.setItem("KebunReport", JSON.stringify(replicateData));
    } else {
      localStorage.setItem("KebunReport", JSON.stringify(kebunReportState));
    }


  },[])

  function setToForm(formData, replicate, item) {
    formData.forEach((form,ii) => {
      form.forEach((ee, iii) => {
        ee.value = item[Object.keys(item)[iii]]
      })
      replicate.push(form)
    })
  }

  return (
    <>
    </>
  );
};
export default storeKebun;
