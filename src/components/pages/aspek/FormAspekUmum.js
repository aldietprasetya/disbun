import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import { useSession } from "next-auth/react";
import _ from 'lodash';
import axios from 'axios';
import { appConfig } from 'src/config';
import { useSnackbar } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';
import MyMap from 'src/components/googleMap/MyMap';
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'
import ChildStore from './store/generals'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormAspekUmum = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { data: session } = useSession();

  const [isError, setIsError] = useState(false);

  const router = useRouter()

  const [initialLoad, setInitialLoad] = useState(true)
  const [btnValid, setBtnValid] = useState(false)
  const [data, setData] = useState(null)
  const [dataPass, setDataPass] = useState({})
  const [dataSubmit, setDataSubmit] = useState({})

  const [companyName, setCompanyName] = useState('');

  const [periodMonthId, setPeriodMonthId] = useState('');
  const [periodYearId, setPeriodYearId] = useState('');

  const [centerAddress, setCenterAddress] = useState('');
  const [centerPhone, setCenterPhone] = useState('');
  const [centerFax, setCenterFax] = useState('');

  const [representativeAddress, setRepresentativeAddress] = useState('');
  const [representativePhone, setRepresentativePhone] = useState('');
  const [representativeFax, setRepresentativeFax] = useState('');

  const [gardenAddress, setGardenAddress] = useState('');
  const [gardenPhone, setGardenPhone] = useState('');
  const [gardenFax, setGardenFax] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const [gardenName, setGardenName] = useState('');
  const [factoryName, setFactoryName] = useState('');
  const [cityId, setCityId] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [villageId, setVillageId] = useState('');

  const locCallback = (e) => {
    setLatitude(e.latLng.lat())
    setLongitude(e.latLng.lng())
  }

  const month = [
    { id:1, value: 'Januari', label: 'Januari' },
    { id:2, value: 'Februari', label: 'Februari' },
    { id:3, value: 'Maret', label: 'Maret' },
    { id:4, value: 'April', label: 'April' },
    { id:5, value: 'Mei', label: 'Mei' },
    { id:6, value: 'Juni', label: 'Juni' },
    { id:7, value: 'Juli', label: 'Juli' },
    { id:8, value: 'Agustus', label: 'Agustus' },
    { id:9, value: 'September', label: 'September' },
    { id:10, value: 'Oktober', label: 'Oktober' },
    { id:11, value: 'November', label: 'November' },
    { id:12, value: 'Desember', label: 'Desember' }
  ];

  let year = []
  let yearArr = generateArrayOfYears()
  yearArr.forEach((item, i) => {
    const val = {
      value: item,
      label: item
    }
    year.push(val)
  });

  let [kota, setKota] = useState([]);
  let [iup, setIup] = useState([]);
  useEffect(() => {
    if (session) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${session.user.accessToken}`

      let kotaArr = []
      let iupArr = []
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

      const getIup = axios.get(`${appConfig.baseUrl}/criterias/legalities`);
      getIup.then(
        function(dt) {
          dt.data.data.legality.criterias.forEach((item, i) => {
            const val = {
              id: item.id,
              value: item.criteria,
              label: item.criteria
            }
            iupArr.push(val)
          });
          setIup(iupArr)
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

  function generateArrayOfYears() {
    var max = new Date().getFullYear() + 5
    var min = max - 20
    var years = []

    for (var i = max; i >= min; i--) {
      years.push(i)
    }
    return years
  }

  ////////////////////////// Legalitas ////////////////////////////////

  const [legalitas, setLegalitas] = useState([])

  function handleBtnAddLegalitas() {
    setLegalitas([...legalitas,[ {'title':'Nama Persil','placeholder':'Nama Persil','type':'text','value':'','isOpt':false}, {'title':'Nomor SK HGU','placeholder':'Nomor SK HGU','type':'number','value':'','isOpt':false}, {'title':'Tanggal SK HGU','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':'cal'}, {'title':'Nomor Sertifikat HGU','type':'number','placeholder':'Nomor Sertifikat HGU','value':'','isOpt':false}, {'title':'Tanggal Sertifikat HGU','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':'cal'}, {'title':'Luas Lahan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Tanggal Expirasi','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':'cal'}, {'title':'Komoditas','type':'number','placeholder':'Komoditas Lahan','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]])
  }

  ////////////////////////// Izin Usaha Perkebunan (IUP) ////////////////////////////////

  const [izin, setIzin] = useState([])

  function handleBtnAddIzin() {
    setIzin([...izin,[ {'title':'jenis IUP','placeholder':'Pilih jenis IUP','type':'text','value':'','isOpt':'sel'}, {'title':'Nomor IUP','placeholder':'Nomor SK HGU','type':'number','value':'','isOpt':false}, {'title':'Tanggal Penetapan IUP','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':'cal'}, {'title':'Luas Lahan (Ha)','type':'number','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Pejabat yang Menetapkan','type':'number','placeholder':'Pejabat','value':'','isOpt':false}, {'title':'Komoditas','type':'text','placeholder':'Komoditas Perkebunan','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]])
  }

  ////////////////////////// OTHER FUNCTION ////////////////////////////////

  function removeLabel(i,state,setState) {
    setState(state.filter((item, idx) => idx != i))
  }

  function formRegularChange(e, state, setState, index, index2, type) {
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

  useEffect(() => {
    if (initialLoad) {
      let retrievedObject = JSON.parse(localStorage.getItem('generalReport'));

      if (!_.isEmpty(retrievedObject)) {
        console.log(retrievedObject)

        setCompanyName(retrievedObject.companyName)

        setPeriodMonthId(retrievedObject.periodMonthId)
        setPeriodYearId(retrievedObject.periodYearId)

        setCenterAddress(retrievedObject.centerAddress)
        setCenterPhone(retrievedObject.centerPhone)
        setCenterFax(retrievedObject.centerFax)

        setRepresentativeAddress(retrievedObject.representativeAddress)
        setRepresentativePhone(retrievedObject.representativePhone)
        setRepresentativeFax(retrievedObject.representativeFax)

        setGardenAddress(retrievedObject.gardenAddress)
        setGardenPhone(retrievedObject.gardenPhone)
        setGardenFax(retrievedObject.gardenFax)

        setLatitude(retrievedObject.latitude)
        setLongitude(retrievedObject.longitude)

        setGardenName(retrievedObject.gardenName)
        setFactoryName(retrievedObject.factoryName)
        setCityId(retrievedObject.cityId)
        setDistrictId(retrievedObject.districtId)
        setVillageId(retrievedObject.villageId)

        setLegalitas(retrievedObject.legalities)
        setIzin(retrievedObject.iup)
      }
    }
    setInitialLoad(false)
  }, [initialLoad])

  useEffect(() => {
    setDataSubmit({
      "companyName": companyName,
      "periodMonthId": periodMonthId,
      "periodYearId": periodYearId,
      "centerAddress": centerAddress,
      "centerPhone": centerPhone,
      "centerFax": centerFax,
      "representativeAddress": representativeAddress,
      "representativePhone": representativePhone,
      "representativeFax": representativeFax,
      "gardenAddress": gardenAddress,
      "gardenPhone": gardenPhone,
      "gardenFax": gardenFax,
      "latitude": latitude,
      "longitude": longitude,
      "gardenName": gardenName,
      "factoryName": factoryName,
      "cityId": cityId,
      "districtId": districtId,
      "villageId": villageId,
      "legalities": legalitas,
      "iup": izin,
    })

  }, [companyName,periodMonthId,periodYearId,centerAddress,centerPhone,centerFax,representativeAddress
    ,representativePhone,representativeFax,gardenAddress,gardenPhone,gardenFax,latitude
    ,longitude,gardenName,factoryName,cityId,districtId,villageId,izin,legalitas])

  useEffect(() => {
    if (!_.isEmpty(dataSubmit)) {
      setDataPass(dataSubmit)
    }
  },[dataPass,dataSubmit])

  const storeData = preventDefault(() => {
    localStorage.setItem("generalReport", JSON.stringify(dataSubmit));
    let dataStore = {
      "companyName": companyName,
      "periodMonthId": periodMonthId,
      "periodYearId": periodYearId,
      "centerAddress": centerAddress,
      "centerPhone": centerPhone,
      "centerFax": centerFax,
      "representativeAddress": representativeAddress,
      "representativePhone": representativePhone,
      "representativeFax": representativeFax,
      "gardenAddress": gardenAddress,
      "gardenPhone": gardenPhone,
      "gardenFax": gardenFax,
      "latitude": latitude,
      "longitude": longitude,
      "gardenName": gardenName,
      "factoryName": factoryName,
      "cityId": cityId,
      "districtId": districtId,
      "villageId": villageId,
      "legalities": [],
      "iup": [],
    }

    let data = {
      "companyName": companyName,
      "periodMonthId": periodMonthId.id,
      "periodYearId": periodYearId.value,
      "centerAddress": centerAddress,
      "centerPhone": centerPhone,
      "centerFax": centerFax,
      "representativeAddress": representativeAddress,
      "representativePhone": representativePhone,
      "representativeFax": representativeFax,
      "legalities": [],
      "iup": [],
    }

    legalitas.forEach((item, i) => {
      console.log('asdasdas',item)
      let legalInv = {}
      item.forEach(() => {
        legalInv.parcelName = item[0].value
        legalInv.skHguNo = Number(item[1].value)
        legalInv.skHguDate = item[2].value
        legalInv.certifHguNo = Number(item[3].value)
        legalInv.certifHguDate = item[4].value
        legalInv.area = Number(item[5].value)
        legalInv.expDate = item[6].value
        legalInv.comodity = Number(item[7].value)
        legalInv.description = item[8].value
      });
      data.legalities.push(legalInv)
      dataStore.legalities.push(legalInv)
    });

    izin.forEach((item, i) => {
      let izinInv = {}
      item.forEach(() => {
        izinInv.iupType = item[0].value
        izinInv.iupNo = Number(item[1].value)
        izinInv.iupDate = item[2].value
        izinInv.area = Number(item[3].value)
        izinInv.certifierId = Number(item[4].value)
        izinInv.comodity = item[5].value
        izinInv.description = item[6].value
      });
      data.iup.push(izinInv)
      dataStore.iup.push(izinInv)
    });

    console.log('dataStore',dataStore)

    localStorage.setItem("dataSubmitGeneral", JSON.stringify(dataStore));

    const res = axios.post(
      `${appConfig.baseUrl}/gardens`,
      {
        "gardenAddress": gardenAddress,
        "gardenPhone": gardenPhone,
        "gardenFax": gardenFax,
        "latitude": latitude,
        "longitude": longitude,
        "gardenName": gardenName,
        "factoryName": factoryName,
        "cityId": cityId.id,
        "districtId": districtId.id,
        "villageId": villageId.id
      }
    );

    res.then(
      function(dt) {
        console.log(dt)
        if (dt.data.status == 'success') {
          console.log(dt.data.data)
          localStorage.setItem("gardenId", dt.data.data.addedGarden.gardenId);

          data.gardenId = dt.data.data.addedGarden.gardenId

          const postReport = axios.post(
            `${appConfig.baseUrl}/reports`,
            data
          );

          postReport.then(
            function(dt) {

              if (dt.data.status == 'success') {
                localStorage.setItem("reportId", dt.data.data.addedReport.reportId);
                router.push({
                  pathname: "/user/pelaporan-perkebunan/aspek-manajemen/"
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



    console.log('Data Send Aspek Umum')
    console.log('=========================================================')
    console.log(dataStore)
    console.log('=========================================================')


  })

  return (
    <>
      <ChildStore/>
      {/* Periode Pengisian */}
      <div className="pb-4">
        <div className="mt-6 text-base text-blue-600">
          <a href="/admin/infografis">Periode Pengisian</a>
        </div>
        {/* Form GRID */}
        <div className="mt-6 grid w-full grid-cols-2 gap-4">
          <InputForm
            titleForm="Bulan"
            titleName="bulanPeriode"
            onChange={(e) => setPeriodMonthId(e)}
            values={periodMonthId}
            placeholder="Pilih Bulan"
            selectArea={true}
            options={month}
          />
          <InputForm
            titleForm="Tahun"
            titleName="tahunPediode"
            onChange={(e) => setPeriodYearId(e)}
            type="text"
            values={periodYearId}
            placeholder="Pilih Tahun"
            selectArea={true}
            options={year}
          />
        </div>
      </div>

      <div className="mt-6 text-base text-blue-600">
        <a href="/aspek/umum">Umum</a>
      </div>
      {/* Form Nama Perushaan */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-6">
          <InputForm
            titleForm="Nama Perusahaan"
            titleName="companyName"
            onChange={(e) => setCompanyName(e.target.value)}
            type="text"
            values={companyName}
            placeholder="Nama Perusahaan Perkebunan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>

        {/* Form Kantor Pusat */}
        <div className="mt-6 grid w-full grid-cols-2 gap-4">
          <InputForm
            titleForm="Alamat Kantor Pusat"
            titleName="centerAddress"
            textArea="true"
            onChange={(e) => setCenterAddress(e.target.value)}
            type="text"
            values={centerAddress}
            placeholder="Tulis Alamat"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } block h-[150px] w-full rounded bg-white-2 py-3 px-4 placeholder:text-primary-gray-4 focus:border-green-600 focus:outline-none`}
          />
          <div>
            <InputForm
              titleForm="Nomor Telepon Kantor Pusat"
              titleName="centerPhone"
              phoneNumber="true"
              onChange={(e) => setCenterPhone(e.target.value)}
              type="text"
              values={centerPhone}
              placeholder="Masukan Nomor Telepon"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            />
            <div className="mt-6">
              <InputForm
                titleForm="Nomor Fax Kantor Pusat"
                titleName="centerFax"
                phoneNumber="true"
                onChange={(e) => setCenterFax(e.target.value)}
                type="text"
                values={centerFax}
                placeholder="Masukan Nomor Telepon"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
              />
            </div>
          </div>
        </div>

        {/* Form Kantor Perwakilan */}
        <div className="mt-6 grid w-full grid-cols-2 gap-4">
          <InputForm
            titleForm="Alamat Kantor Perwakilan"
            titleName="representativeAddress"
            textArea="true"
            onChange={(e) => setRepresentativeAddress(e.target.value)}
            type="text"
            values={representativeAddress}
            placeholder="Tulis Alamat"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } block h-[150px] w-full rounded bg-white-2  py-3 px-4 placeholder:text-primary-gray-4 focus:border-green-600 focus:outline-none`}
          />
          <div>
            <InputForm
              titleForm="Nomor Telepon Kantor Perwakilan"
              titleName="representativePhone"
              phoneNumber="true"
              onChange={(e) => setRepresentativePhone(e.target.value)}
              type="text"
              values={representativePhone}
              placeholder="Masukan Nomor Telepon"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            />
            <div className="mt-6">
              <InputForm
                titleForm="Nomor Fax Kantor Perwakilan"
                titleName="representativeFax"
                phoneNumber="true"
                onChange={(e) => setRepresentativeFax(e.target.value)}
                type="text"
                values={representativeFax}
                placeholder="Masukan Nomor Telepon"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
              />
            </div>
          </div>
        </div>

        {/* Form Kantor Kebun */}
        <div className="mt-6 grid w-full grid-cols-2 gap-4">
          <InputForm
            titleForm="Alamat Kantor Kebun"
            titleName="gardenAddress"
            textArea="true"
            onChange={(e) => setGardenAddress(e.target.value)}
            type="text"
            values={gardenAddress}
            placeholder="Tulis Alamat"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } block h-[150px] w-full rounded bg-white-2  py-3 px-4 placeholder:text-primary-gray-4 focus:border-green-600 focus:outline-none`}
          />
          <div>
            <InputForm
              titleForm="Nomor Telepon Kantor Kebun"
              titleName="gardenPhone"
              phoneNumber="true"
              onChange={(e) => setGardenPhone(e.target.value)}
              type="text"
              values={gardenPhone}
              placeholder="Masukan Nomor Telepon"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            />
            <div className="mt-6">
              <InputForm
                titleForm="Nomor Fax Kantor Kebun"
                titleName="gardenFax"
                phoneNumber="true"
                onChange={(e) => setGardenFax(e.target.value)}
                type="text"
                values={gardenFax}
                placeholder="Masukan Nomor Telepon"
                className={`${
                  isError && 'border-primary-red-1 bg-primary-red-2'
                } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
              />
            </div>
          </div>
        </div>

        {/* Form Koordinat */}
        <div className="mt-6 grid w-full grid-cols-2 gap-4">
          <InputForm
            titleForm="Koordinat Kantor Kebun (Longitude)"
            titleName="longitude"
            onChange={(e) => setLongitude(e.target.value)}
            type="text"
            values={longitude}
            placeholder="Longitude"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Koordinat Kantor Kebun (Latitude)"
            titleName="latitude"
            onChange={(e) => setLatitude(e.target.value)}
            type="text"
            values={latitude}
            placeholder="Latitude"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6">
          <MyMap
            locCallback={locCallback}
            latitude={latitude}
            longitude={longitude}
          />
        </div>

        {/* Form Nama Kebun */}
        <div className="mt-6">
          <InputForm
            titleForm="Nama Kebun"
            titleName="gardenName"
            onChange={(e) => setGardenName(e.target.value)}
            type="text"
            values={gardenName}
            placeholder="Nama Perusahaan Perkebunan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>

        {/* Form Nama Pabrik */}
        <div className="mt-6">
          <InputForm
            titleForm="Nama Pabrik"
            titleName="factoryName"
            onChange={(e) => setFactoryName(e.target.value)}
            type="text"
            values={factoryName}
            placeholder="Nama Perusahaan Perkebunan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>

        {/* Form Lokasi Kebun */}
        <div className="mt-4 text-primary-black-2">Lokasi Kebun</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Kota/Kabupaten"
            titleName="cityId"
            onChange={(e) => setCityId(e)}
            values={cityId}
            placeholder="Pilih Kota / Kab"
            selectArea={true}
            options={kota}
          />
          <InputForm
            titleForm="Kecamatan"
            titleName="districtId"
            onChange={(e) => setDistrictId(e)}
            values={districtId}
            placeholder="Pilih Kecamatan"
            selectArea={true}
            options={kecamatan}
          />
          <InputForm
            titleForm="Kelurahan/Desa"
            titleName="villageId"
            onChange={(e) => setVillageId(e)}
            values={villageId}
            placeholder="Pilih Kel/Desa"
            selectArea={true}
            options={desa}
          />
        </div>
      </div>

      {/* Legalitas */}
      <div className={mng.base__formsection}>
        <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Hak Guna Usaha (HGU)</p>

        <div className="flex flex-col">
          {
            legalitas.map((items, i) => (
              <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
              {
                i > 0 ?
                <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, legalitas, setLegalitas)}>
                  do_not_disturb_on
                </span>
                :
                <></>
              }
              {
                items.map((item,ii) => (
                  <>
                    {
                      item.isOpt == "cal" ? (
                        <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                          <InputForm
                            titleForm={item.title}
                            titleName={item.title}
                            onChange={(e) => formRegularChange(e.target.value, legalitas, setLegalitas, i, ii)}
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
                          <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, legalitas, setLegalitas, i, ii)}/>
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

        <div className={`${mng["base__btn"]}`} onClick={handleBtnAddLegalitas}>
          + Tambah Hak Guna Usaha
        </div>
      </div>

      {/* Izin Usaha Perkebunan (IUP) */}
      <div className={`${["mng.base__formsection"]} border-b-0`}>
        <p className={`${mng["base__formtitle"]} ${'mt-4'}`}>Izin Usaha Perkebunan (IUP)</p>

        <div className="flex flex-col">
          {
            izin.map((items, i) => (
              <div className={`${mng["base__formlabel_twin"]} ${mng["base__formlabel_twin-firstfull"]}`} key={i}>
              {
                i > 0 ?
                <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => removeLabel(i, izin, setIzin)}>
                  do_not_disturb_on
                </span>
                :
                <></>
              }
              {
                items.map((item,ii) => (
                  <>
                  {
                    item.isOpt == "sel" ? (
                      <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                        <InputForm
                          titleForm={item.title}
                          titleName={item.title}
                          onChange={(e) => formRegularChange(e.value, izin, setIzin, i, ii)}
                          type="text"
                          placeholder={item.placeholder}
                          className={`${
                            isError && 'border-primary-red-1 bg-primary-red-2'
                          }`}
                          selectArea={true}
                          options={iup}
                        />
                      </label>
                    ) : item.isOpt == "cal" ? (
                      <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                        <InputForm
                          titleForm={item.title}
                          titleName={item.title}
                          onChange={(e) => formRegularChange(e.target.value, izin, setIzin, i, ii)}
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
                        <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => formRegularChange(e.target.value, izin, setIzin, i, ii)}/>
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

        <div className={`${mng["base__btn"]}`} onClick={handleBtnAddIzin}>
          + Tambah Izin Usaha Perkebunan
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
    </>
  );
};

export default FormAspekUmum;
