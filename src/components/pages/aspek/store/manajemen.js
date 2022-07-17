import React, { useState, useEffect } from 'react'
import _ from 'lodash';

const storeManajemen = props => {

  useEffect(() => {

    let manajementReportState = {
      administrasi : '',
      komisaris: [
        {'title':'Komisaris Utama','placeholder':'Nama Komisaris Utama','value':''},
        {'title':'Komisaris','placeholder':'Nama Komisaris','value':''}
      ],
      direksi: [
        {'title':'Direktur Utama','placeholder':'Nama Direktur Utama','value':''},
        {'title':'Direktur','placeholder':'Nama Direktur','value':''}
      ],
      tenagaKerja: [
        {'title':'Administratur','placeholder':'Jumlah','value':''},
        {'title':'Staf/Karyawan Tetap','placeholder':'Jumlah','value':''},
        {'title':'Tenaga Kerja Bulanan','placeholder':'Jumlah','value':''},
        {'title':'Tenaga Kerja Harian Tetap','placeholder':'Jumlah','value':''},
        {'title':'Tenaga Kerja Harian Lepas','placeholder':'Jumlah','value':''},
        {'title':'Staf Borongan/Musiman','placeholder':'Jumlah','value':''}
      ],
      rencanaInvest: [
        [
          {'title':'Kegiatan Investasi/Eksploitasi','type':'text','placeholder':'Nama Kegiatan','value':''},
          {'title':'Tahun','placeholder':'YYYY','type':'number','value':''},
          {'title':'Volume','type':'number','placeholder':'Luas Lahan/Unit Barang','value':''},
          {'title':'Nilai Biaya','type':'number','placeholder':'Masukkan Nilai Biaya','value':''}
        ],
      ]
    }

    let retrievedDataApi = JSON.parse(localStorage.getItem('dataSubmit'));

    if (!_.isEmpty(retrievedDataApi)) {
      let replicateData = {
        administrasi : '',
        komisaris: [],
        direksi: [],
        tenagaKerja: [],
        rencanaInvest: []
      }

      Object.entries(retrievedDataApi.commissioner[0]).forEach((entry, i) => {
        const formData = [
          {'title':'Komisaris Utama','placeholder':'Nama Komisaris Utama','value':''}
        ]
        const [key, value] = entry;
        formData.forEach((form,ii) => {
          form.title = (key === 'majorCommissionerName' ? 'Komisaris Utama' : 'Komisaris')
          form.value = value
          replicateData.komisaris.push(form)
        })
      });

      Object.entries(retrievedDataApi.director[0]).forEach((entry, i) => {
        const formData = [
          {'title':'Direktur Utama','placeholder':'Nama Direktur Utama','value':''}
        ]
        const [key, value] = entry;
        formData.forEach((form,ii) => {
          form.title = (key === 'majorDirectorName' ? 'Direktur Utama' : 'Direktur')
          form.value = value
          replicateData.direksi.push(form)
        })
      });

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
