import React, { useState, useEffect } from 'react'
import _ from 'lodash';

const storeManajemen = props => {

  useEffect(() => {

    let sosialReportState = {
      retribution: [
        [ {'title':'Jenis Pajak/Retribusi','type':'text','placeholder':'Jenis Pajak/Retrbusi','value':''}, {'title':'Nilai (Rp)','placeholder':'Nilai Pajak/Retribusi','type':'text','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]
      ],
      protectedArea: [
        [ {'title':'Luas Kawasan Lindung (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Dikelola Sejak tahun','placeholder':'YYYY','type':'text','value':''}, {'title':'Usaha Pelestarian','type':'textarea','placeholder':'Tulis usaha pelestarian yang dilakukan.','value':''} ]
      ],
      conservation: [
        [ {'title':'Jenis Kegiatan Konservasi','type':'text','placeholder':'Jenis Pajak/Retrbusi','value':''}, {'title':'Luas (Ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]
      ],
      environmentalMonitoring: [
        [ {'title':'Masalah Lingkungan','type':'text','placeholder':'Jenis Masalah Lingkungan','value':''}, {'title':'Waktu kejadian','placeholder':'DD/MM/YYYY','type':'text','value':''}, {'title':'Frekuensi (kali)','type':'text','placeholder':'Jumlah','value':''}, {'title':'Upaya Penyelesaian','type':'text','placeholder':'Deskripsi Upaya','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]
      ],
      businessPartnership: [
        [ {'title':'Nama Kelompok Tani','type':'text','placeholder':'Nama Poktan','value':''}, {'title':'Nomor','placeholder':'Nomor','type':'text','value':''}, {'title':'Waktu Perjanjian','type':'text','placeholder':'DD/MM/YYYY','value':''}, {'title':'Lamanya perjanjian','type':'text','placeholder':'Durasi','value':''}, {'title':'Jenis perjanjian','type':'text','placeholder':'Jenis Perjanjian','value':''} ]
      ],
    }

    let retrievedDataApi = JSON.parse(localStorage.getItem('dataSubmitSosial'));

    if (!_.isEmpty(retrievedDataApi)) {
      let replicateData = {
        retribution: [],
        protectedArea: [],
        conservation: [],
        environmentalMonitoring: [],
        businessPartnership: []
      }

      retrievedDataApi.retribution.forEach((e, i) => {
        const formData = [
          [ {'title':'Jenis Pajak/Retribusi','type':'text','placeholder':'Jenis Pajak/Retrbusi','value':''}, {'title':'Nilai (Rp)','placeholder':'Nilai Pajak/Retribusi','type':'text','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]
        ]
        formData.forEach((form,ii) => {
          form.forEach((ee, iii) => {
            ee.value = e[Object.keys(e)[iii]]
          })
          replicateData.retribution.push(form)
        })
      })

      const dataArr = []
      Object.entries(retrievedDataApi.protectedArea).forEach(entry => {
        const [key, value] = entry;
        dataArr.push(value)
      });

      const formDatat = [
        [ {'title':'Luas Kawasan Lindung (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':''}, {'title':'Dikelola Sejak tahun','placeholder':'YYYY','type':'text','value':''}, {'title':'Usaha Pelestarian','type':'textarea','placeholder':'Tulis usaha pelestarian yang dilakukan.','value':''} ]
      ]
      formDatat.forEach((item2, ii) => {
        item2.forEach((t, ii) => {
          t.value = dataArr[ii]
        });
        replicateData.protectedArea.push(item2)
      });

      retrievedDataApi.conservation.forEach((e, i) => {
        const formData = [
          [ {'title':'Jenis Kegiatan Konservasi','type':'text','placeholder':'Jenis Pajak/Retrbusi','value':''}, {'title':'Luas (Ha)','placeholder':'Luas Lahan dalam Ha','type':'text','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]
        ]
        formData.forEach((form,ii) => {
          form.forEach((ee, iii) => {
            ee.value = e[Object.keys(e)[iii]]
          })
          replicateData.conservation.push(form)
        })
      })

      retrievedDataApi.environmentalMonitoring.forEach((e, i) => {
        const formData = [
          [ {'title':'Masalah Lingkungan','type':'text','placeholder':'Jenis Masalah Lingkungan','value':''}, {'title':'Waktu kejadian','placeholder':'DD/MM/YYYY','type':'text','value':''}, {'title':'Frekuensi (kali)','type':'text','placeholder':'Jumlah','value':''}, {'title':'Upaya Penyelesaian','type':'text','placeholder':'Deskripsi Upaya','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''} ]
        ]
        formData.forEach((form,ii) => {
          form.forEach((ee, iii) => {
            ee.value = e[Object.keys(e)[iii]]
          })
          replicateData.environmentalMonitoring.push(form)
        })
      })

      retrievedDataApi.businessPartnership.forEach((e, i) => {
        const formData = [
          [ {'title':'Nama Kelompok Tani','type':'text','placeholder':'Nama Poktan','value':''}, {'title':'Nomor','placeholder':'Nomor','type':'text','value':''}, {'title':'Waktu Perjanjian','type':'text','placeholder':'DD/MM/YYYY','value':''}, {'title':'Lamanya perjanjian','type':'text','placeholder':'Durasi','value':''}, {'title':'Jenis perjanjian','type':'text','placeholder':'Jenis Perjanjian','value':''} ]
        ]
        formData.forEach((form,ii) => {
          form.forEach((ee, iii) => {
            ee.value = e[Object.keys(e)[iii]]
          })
          replicateData.businessPartnership.push(form)
        })
      })

      localStorage.setItem("sosialReport", JSON.stringify(replicateData));
    } else {
      localStorage.setItem("sosialReport", JSON.stringify(sosialReportState));
    }


  },[])

  return (
    <>
    </>
  );
};
export default storeManajemen;
