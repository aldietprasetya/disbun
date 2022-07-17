import React, { useState, useEffect } from 'react'
import _ from 'lodash';

const storeOlah = props => {

  useEffect(() => {

    let olahReportState = {
      capacity: [
        [ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis UPH','type':'text','placeholder':'Jenis UPH','value':''}, {'title':'Jumlah (unit)','type':'text','placeholder':'Luas/Volume','value':''}, {'title':'Luas bangunan (m2)','type':'text','placeholder':'Luas','value':''}, ] }, { 'sectionTitle': 'Total Kapasitas', 'sectionData': [ {'title':'Terpasang (kg/hari)','type':'text','placeholder':'Jumlah','value':''}, {'title':'terpakai (kg/hari)','type':'text','placeholder':'Jumlah','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}, ] }, ]
      ],
      material: [[ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis UPH','type':'text','placeholder':'Jenis Tanaman','value':'','isOpt':false}, ] }, { 'sectionTitle': 'Asal Bahan Baku', 'sectionData': [ {'title':'Kab/Kota','type':'text','placeholder':'Pilih Kab/Kota','value':'','isOpt':true}, {'title':'Volume','type':'text','placeholder':'Volume','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ] }, ]],
      quality: [
        [
          {
            'sectionTitle': '',
            'sectionData': [
              {'title':'Jenis UPH','type':'text','placeholder':'Jenis Tanaman','value':''}
            ]
          },
          {
            'sectionTitle': 'Asal Bahan Baku (Kg)',
            'sectionData': [
              {'title':'Sendiri (Kg)','type':'text','placeholder':'Jumlah','value':''},
              {'title':'Kebun Seinduk (Kg)','type':'text','placeholder':'Jumlah','value':''},
              {'title':'Beli (kg)','type':'text','placeholder':'Jumlah','value':''},
            ]
          },
          {
            'sectionTitle': 'Hasil Olah',
            'sectionData': [
              [
                {'title':'Jenis Mutu Akhir','type':'text','placeholder':'Jumlah','value':''},
                {'title':'Volume Produksi (kg)','type':'text','placeholder':'Volume','value':''}
              ],
              [
                {'title':'Jenis Mutu Akhir','type':'text','placeholder':'Jumlah','value':''},
                {'title':'Volume Produksi (kg)','type':'text','placeholder':'Volume','value':''}
              ]
            ]
          },
        ],
      ],
      marketing: [
        [ {'title':'Komoditas','placeholder':'Jenis Komoditas','type':'text','value':'','isOpt':false}, {'title':'Jenis Mutu','placeholder':'Jenis Mutu','type':'text','value':'','isOpt':false}, {'title':'Lokal/Ekspor','type':'text','placeholder':'Pilih Jenis Pemasaran','value':'','isOpt':true}, {'title':'Biaya Produksi (Rp/Kg)','type':'text','placeholder':'Nilai Produksi','value':'','isOpt':false}, {'title':'Harga Jual (Rp/Kg)','type':'text','placeholder':'Nilai Jual','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
      ],
    }

    let retrievedDataApi = JSON.parse(localStorage.getItem('dataSubmitOlah'));

    if (!_.isEmpty(retrievedDataApi)) {
      let replicateData = {
        capacity: [],
        material: [],
        quality: [],
        marketing: [],
      }

      retrievedDataApi.capacity.forEach((e, i) => {
        const formData = [
          [ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis UPH','type':'text','placeholder':'Jenis UPH','value':''}, {'title':'Jumlah (unit)','type':'text','placeholder':'Luas/Volume','value':''}, {'title':'Luas bangunan (m2)','type':'text','placeholder':'Luas','value':''}, ] }, { 'sectionTitle': 'Total Kapasitas', 'sectionData': [ {'title':'Terpasang (kg/hari)','type':'text','placeholder':'Jumlah','value':''}, {'title':'terpakai (kg/hari)','type':'text','placeholder':'Jumlah','value':''}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':''}, ] }, ]
        ]
        let moveArr = []
        Object.keys(e).forEach(key => {
          moveArr.push(e[key])
        });
        formData.forEach((form,i2) => {
          form.forEach((formData, i3) => {
            formData.sectionData.forEach((secData, i4) => {
              secData.value = moveArr[i4]
            })
          })
          replicateData.capacity.push(form)
        })
      })

      retrievedDataApi.material.forEach((e, i) => {
        const formData = [[ { 'sectionTitle': '', 'sectionData': [ {'title':'Jenis UPH','type':'text','placeholder':'Jenis Tanaman','value':'','isOpt':false}, ] }, { 'sectionTitle': 'Asal Bahan Baku', 'sectionData': [ {'title':'Kab/Kota','type':'text','placeholder':'Pilih Kab/Kota','value':'','isOpt':true}, {'title':'Volume','type':'text','placeholder':'Volume','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ] }, ]]
        let moveArr = []
        Object.keys(e).forEach(key => {
          moveArr.push(e[key])
        });
        formData.forEach((form,i2) => {
          form.forEach((formData, i3) => {
            formData.sectionData.forEach((secData, i4) => {
              secData.value = moveArr[i4]
            })
          })
          replicateData.material.push(form)
        })
      })

      retrievedDataApi.marketing.forEach((e, i) => {
        const formData = [
          [ {'title':'Komoditas','placeholder':'Jenis Komoditas','type':'text','value':'','isOpt':false}, {'title':'Jenis Mutu','placeholder':'Jenis Mutu','type':'text','value':'','isOpt':false}, {'title':'Lokal/Ekspor','type':'text','placeholder':'Pilih Jenis Pemasaran','value':'','isOpt':true}, {'title':'Biaya Produksi (Rp/Kg)','type':'text','placeholder':'Nilai Produksi','value':'','isOpt':false}, {'title':'Harga Jual (Rp/Kg)','type':'text','placeholder':'Nilai Jual','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false}, ]
        ]
        formData.forEach((form,ii) => {
          form.forEach((ee, iii) => {
            ee.value = e[Object.keys(e)[iii]]
          })
          replicateData.marketing.push(form)
        })
      })

      retrievedDataApi.quality.forEach((e, i) => {
        const formData = [
          [
            {
              'sectionTitle': '',
              'sectionData': [
                {'title':'Jenis UPH','type':'text','placeholder':'Jenis Tanaman','value':''}
              ]
            },
            {
              'sectionTitle': 'Asal Bahan Baku (Kg)',
              'sectionData': [
                {'title':'Sendiri (Kg)','type':'text','placeholder':'Jumlah','value':''},
                {'title':'Kebun Seinduk (Kg)','type':'text','placeholder':'Jumlah','value':''},
                {'title':'Beli (kg)','type':'text','placeholder':'Jumlah','value':''},
              ]
            },
            {
              'sectionTitle': 'Hasil Olah',
              'sectionData': [
                [
                  {'title':'Jenis Mutu Akhir','type':'text','placeholder':'Jumlah','value':''},
                  {'title':'Volume Produksi (kg)','type':'text','placeholder':'Volume','value':''}
                ]
              ]
            },
          ],
        ]
        let moveArr = []
        Object.keys(e).forEach(key => {
          moveArr.push(e[key])
        });
        let insideArr = []
        moveArr.forEach((e) => {
          if (Array.isArray(e)) {
            insideArr.push(e)
          }
        })
        let arrData = []
        Object.entries(insideArr[0][0]).forEach(entry => {
          const [key, value] = entry;
          arrData.push(value)
        });

        formData.forEach((form,i2) => {
          form.forEach((formData, i3) => {
            formData.sectionData.forEach((secData, i4) => {

              if (Array.isArray(secData)) {
                secData.forEach((data, i5) => {
                  data.value = arrData[i5]
                })
              }
              secData.value = moveArr[i4]
            })
          })
          replicateData.quality.push(form)
        })
      })

      localStorage.setItem("olahReport", JSON.stringify(replicateData));
    } else {
      localStorage.setItem("olahReport", JSON.stringify(olahReportState));
    }


  },[])

  return (
    <>
    </>
  );
};
export default storeOlah;
