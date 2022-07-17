import React, { useState, useEffect } from 'react'
import _ from 'lodash';

const storeManajemen = props => {

  useEffect(() => {

    let manajementReportState = {
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

    let retrievedDataApi = JSON.parse(localStorage.getItem('dataSubmit'));

    if (!_.isEmpty(retrievedDataApi)) {
      let replicateData = {
        retribution: [],
        protectedArea: [],
        conservation: [],
        environmentalMonitoring: [],
        businessPartnership: []
      }

      retrievedDataApi.administrator.forEach((e, i) => {
        const formData = [
          [
            {'title':'Administratur','placeholder':'Jumlah','value':''},
            {'title':'Staf/Karyawan Tetap','placeholder':'Jumlah','value':''},
            {'title':'Tenaga Kerja Bulanan','placeholder':'Jumlah','value':''},
            {'title':'Tenaga Kerja Harian Tetap','placeholder':'Jumlah','value':''},
            {'title':'Tenaga Kerja Harian Lepas','placeholder':'Jumlah','value':''},
            {'title':'Staf Borongan/Musiman','placeholder':'Jumlah','value':''}
          ],
        ]
        replicateData.administrasi = e.administratorName

        formData.forEach((form,ii) => {
          form.forEach((ee, iii) => {
            ee.value = e[Object.keys(e)[iii+1]]
            replicateData.tenagaKerja.push(ee)
          })
        })
      })

      retrievedDataApi.investment.forEach((e, i) => {
        const formData = [
          [
            {'title':'Kegiatan Investasi/Eksploitasi','type':'text','placeholder':'Nama Kegiatan','value':''},
            {'title':'Tahun','placeholder':'YYYY','type':'number','value':''},
            {'title':'Volume','type':'number','placeholder':'Luas Lahan/Unit Barang','value':''},
            {'title':'Nilai Biaya','type':'number','placeholder':'Masukkan Nilai Biaya','value':''}
          ],
        ]
        formData.forEach((form,ii) => {
          form.forEach((ee, iii) => {
            ee.value = e[Object.keys(e)[iii]]
          })
          replicateData.rencanaInvest.push(form)
        })
      })

      localStorage.setItem("manajementReport", JSON.stringify(replicateData));
    } else {
      localStorage.setItem("manajementReport", JSON.stringify(manajementReportState));
    }


  },[])

  return (
    <>
    </>
  );
};
export default storeManajemen;
