import React, { useState, useEffect } from 'react'
import _ from 'lodash';

const storeGenerals = props => {

  useEffect(() => {

    let generalReportState = {
      "companyName": '',
      "periodMonthId": '',
      "periodYearId": '',
      "centerAddress": '',
      "centerPhone": '',
      "centerFax": '',
      "representativeAddress": '',
      "representativePhone": '',
      "representativeFax": '',
      "gardenAddress": '',
      "gardenPhone": '',
      "gardenFax": '',
      "latitude": '',
      "longitude": '',
      "gardenName": '',
      "factoryName": '',
      "cityId": '',
      "districtId": '',
      "villageId": '',
      "legalities": [
        [ {'title':'Nama Persil','placeholder':'Nama Persil','type':'text','value':'','isOpt':false}, {'title':'Nomor SK HGU','placeholder':'Nomor SK HGU','type':'text','value':'','isOpt':false}, {'title':'Tanggal SK HGU','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Nomor Sertifikat HGU','type':'text','placeholder':'Nomor Sertifikat HGU','value':'','isOpt':false}, {'title':'Tanggal Sertifikat HGU','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Luas Lahan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Tanggal Expirasi','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Komoditas','type':'text','placeholder':'Komoditas Lahan','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]
      ],
      "iup": [
        [ {'title':'jenis IUP','placeholder':'Pilih jenis IUP','type':'text','value':'','isOpt':true}, {'title':'Nomor IUP','placeholder':'Nomor SK HGU','type':'text','value':'','isOpt':false}, {'title':'Tanggal Penetapan IUP','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Luas Lahan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Pejabat yang Menetapkan','type':'text','placeholder':'Pejabat','value':'','isOpt':false}, {'title':'Komoditas','type':'text','placeholder':'Komoditas Perkebunan','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]
      ],
    }

    let retrievedDataApi = JSON.parse(localStorage.getItem('dataSubmitGeneral'));

    if (!_.isEmpty(retrievedDataApi)) {
      let replicateData = {
        "companyName": retrievedDataApi.companyName,
        "periodMonthId": retrievedDataApi.periodMonthId,
        "periodYearId": retrievedDataApi.periodYearId,
        "centerAddress": retrievedDataApi.centerAddress,
        "centerPhone": retrievedDataApi.centerPhone,
        "centerFax": retrievedDataApi.centerFax,
        "representativeAddress": retrievedDataApi.representativeAddress,
        "representativePhone": retrievedDataApi.representativePhone,
        "representativeFax": retrievedDataApi.representativeFax,
        "gardenAddress": retrievedDataApi.gardenAddress,
        "gardenPhone": retrievedDataApi.gardenPhone,
        "gardenFax": retrievedDataApi.gardenFax,
        "latitude": retrievedDataApi.latitude,
        "longitude": retrievedDataApi.longitude,
        "gardenName": retrievedDataApi.gardenName,
        "factoryName": retrievedDataApi.factoryName,
        "cityId": retrievedDataApi.cityId,
        "districtId": retrievedDataApi.districtId,
        "villageId": retrievedDataApi.villageId,
        "legalities": [],
        "iup": [],
      }

      retrievedDataApi.legalities.forEach((e, i) => {
        const formData = [
          [ {'title':'Nama Persil','placeholder':'Nama Persil','type':'text','value':'','isOpt':false}, {'title':'Nomor SK HGU','placeholder':'Nomor SK HGU','type':'text','value':'','isOpt':false}, {'title':'Tanggal SK HGU','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Nomor Sertifikat HGU','type':'text','placeholder':'Nomor Sertifikat HGU','value':'','isOpt':false}, {'title':'Tanggal Sertifikat HGU','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Luas Lahan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Tanggal Expirasi','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Komoditas','type':'text','placeholder':'Komoditas Lahan','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]
        ]
        formData.forEach((form,ii) => {
          form.forEach((ee, iii) => {
            ee.value = e[Object.keys(e)[iii]]
          })
          replicateData.legalities.push(form)
        })
      })

      retrievedDataApi.iup.forEach((e, i) => {
        const formData = [
          [ {'title':'jenis IUP','placeholder':'Pilih jenis IUP','type':'text','value':'','isOpt':true}, {'title':'Nomor IUP','placeholder':'Nomor SK HGU','type':'text','value':'','isOpt':false}, {'title':'Tanggal Penetapan IUP','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Luas Lahan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Pejabat yang Menetapkan','type':'text','placeholder':'Pejabat','value':'','isOpt':false}, {'title':'Komoditas','type':'text','placeholder':'Komoditas Perkebunan','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]
        ]
        formData.forEach((form,ii) => {
          form.forEach((ee, iii) => {
            ee.value = e[Object.keys(e)[iii]]
          })
          replicateData.iup.push(form)
        })
      })

      localStorage.setItem("generalReport", JSON.stringify(replicateData));
    } else {
      localStorage.setItem("generalReport", JSON.stringify(generalReportState));
    }


  },[])

  return (
    <>
    </>
  );
};
export default storeGenerals;
