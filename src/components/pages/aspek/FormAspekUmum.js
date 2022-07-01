import Head from 'next/head'
import React, { useState } from 'react';
import {useRouter} from 'next/router'
import MyMap from 'src/components/googleMap/MyMap';
import InputForm from '../admin/infografis/InputForm';
import mng from '../../../styles/Managemen.module.scss'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const FormAspekUmum = (props) => {
  const [isError, setIsError] = useState(false);

  ////////////////////////// Legalitas ////////////////////////////////

  const [legalitas, setLegalitas] = useState([
    [ {'title':'Nama Persil','placeholder':'Nama Persil','type':'text','value':'','isOpt':false}, {'title':'Nomor SK HGU','placeholder':'Nomor SK HGU','type':'text','value':'','isOpt':false}, {'title':'Tanggal SK HGU','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Nomor Sertifikat HGU','type':'text','placeholder':'Nomor Sertifikat HGU','value':'','isOpt':false}, {'title':'Tanggal Sertifikat HGU','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Luas Lahan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Tanggal Expirasi','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Komoditas','type':'text','placeholder':'Komoditas Lahan','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]
  ])

  function handleBtnAddLegalitas() {
    setLegalitas([...legalitas,[ {'title':'Nama Persil','placeholder':'Nama Persil','type':'text','value':'','isOpt':false}, {'title':'Nomor SK HGU','placeholder':'Nomor SK HGU','type':'text','value':'','isOpt':false}, {'title':'Tanggal SK HGU','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Nomor Sertifikat HGU','type':'text','placeholder':'Nomor Sertifikat HGU','value':'','isOpt':false}, {'title':'Tanggal Sertifikat HGU','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Luas Lahan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Tanggal Expirasi','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Komoditas','type':'text','placeholder':'Komoditas Lahan','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]])
  }

  function legalitasRemoveLabel(i) {
    setLegalitas(legalitas.filter((item, idx) => idx != i))
  }

  function legalitasChange(e, index, index2) {
    let stet = legalitas
    let set = setLegalitas
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// Izin Usaha Perkebunan (IUP) ////////////////////////////////

  const [izin, setIzin] = useState([
    [ {'title':'jenis IUP','placeholder':'Pilih jenis IUP','type':'text','value':'','isOpt':true}, {'title':'Nomor IUP','placeholder':'Nomor SK HGU','type':'text','value':'','isOpt':false}, {'title':'Tanggal Penetapan IUP','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Luas Lahan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Pejabat yang Menetapkan','type':'text','placeholder':'Pejabat','value':'','isOpt':true}, {'title':'Komoditas','type':'text','placeholder':'Komoditas Perkebunan','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]
  ])

  function handleBtnAddIzin() {
    setIzin([...izin,[ {'title':'jenis IUP','placeholder':'Pilih jenis IUP','type':'text','value':'','isOpt':true}, {'title':'Nomor IUP','placeholder':'Nomor SK HGU','type':'text','value':'','isOpt':false}, {'title':'Tanggal Penetapan IUP','type':'text','placeholder':'DD/MM/YYYY','value':'','isOpt':false}, {'title':'Luas Lahan (Ha)','type':'text','placeholder':'Luas Lahan dalam Ha','value':'','isOpt':false}, {'title':'Pejabat yang Menetapkan','type':'text','placeholder':'Pejabat','value':'','isOpt':true}, {'title':'Komoditas','type':'text','placeholder':'Komoditas Perkebunan','value':'','isOpt':false}, {'title':'Keterangan','type':'text','placeholder':'Keterangan','value':'','isOpt':false} ]])
  }

  function izinRemoveLabel(i) {
    setIzin(izin.filter((item, idx) => idx != i))
  }

  function izinChange(e, index, index2) {
    let stet = izin
    let set = setIzin
    const { name, value } = e.target;
    const list = [...stet];
    list.forEach((item, i) => {
      if (i == index) {
        item.forEach((item2, ii) => {
          if (ii == index2) {
            item2.value = value
          }
        });
      }
    });
    set(list);
  }

  ////////////////////////// OTHER FUNCTION ////////////////////////////////

  const [btnValid, setBtnValid] = useState(false)

  const router = useRouter()

  const storeData = preventDefault(() => {
    localStorage.setItem("dataSubmit", JSON.stringify(dataSubmit));
    router.push({
      pathname: "/beranda/laporan/konfirmasi"
    })
  })

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
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
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Bulan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            }`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Tahun"
            titleName="tahunPediode"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Tahun"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            }`}
            selectionArea={true}
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
            // onChange={handleChange}
            type="text"
            // values={values.email}
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
            // onChange={handleChange}
            type="text"
            // values={values.email}
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
              // onChange={handleChange}
              type="text"
              // values={values.email}
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
                // onChange={handleChange}
                type="text"
                // values={values.email}
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
            // onChange={handleChange}
            type="text"
            // values={values.email}
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
              // onChange={handleChange}
              type="text"
              // values={values.email}
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
                // onChange={handleChange}
                type="text"
                // values={values.email}
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
            // onChange={handleChange}
            type="text"
            // values={values.email}
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
              // onChange={handleChange}
              type="text"
              // values={values.email}
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
                // onChange={handleChange}
                type="text"
                // values={values.email}
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
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Longitude"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Koordinat Kantor Kebun (Latitude)"
            titleName="latitude"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Latitude"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6">
          <MyMap />
        </div>

        {/* Form Nama Kebun */}
        <div className="mt-6">
          <InputForm
            titleForm="Nama Kebun"
            titleName="gardenName"
            // onChange={handleChange}
            type="text"
            // values={values.email}
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
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nama Perusahaan Perkebunan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>

        {/* Form Lokasi Kebun */}
        <div className="mt-4 text-primary-black-2">Lokasi Kebun</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Kota/Kabupaten"
            titleName="cityId"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kota / Kab"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
          />
          <InputForm
            titleForm="Kecamatan"
            titleName="districtId"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kecamatan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
          />
          <InputForm
            titleForm="Kelurahan/Desa"
            titleName="villageId"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kel/Desa"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
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
                <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => legalitasRemoveLabel(i)}>
                  do_not_disturb_on
                </span>
                :
                <></>
              }
              {
                items.map((item,ii) => (
                  <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                    <span className={mng.base__inputtitle}>{item.title}</span>
                    <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => legalitasChange(e, i, ii)}/>
                  </label>
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
                <span className={`${"material-symbols-outlined"} ${mng["base__formlabel_icondelinvest"]}`} onClick={() => izinRemoveLabel(i)}>
                  do_not_disturb_on
                </span>
                :
                <></>
              }
              {
                items.map((item,ii) => (
                  <>
                  {
                    item.isOpt ? (
                      <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                        <InputForm
                          titleForm={item.title}
                          titleName={item.title}
                          onChange={(e) => izinChange(e, i, ii)}
                          type="text"
                          placeholder={item.placeholder}
                          className={`${
                            isError && 'border-primary-red-1 bg-primary-red-2'
                          }`}
                          selectionArea={true}
                        />
                      </label>
                    ) : (
                      <label className={`${mng["base__formlabel"]} ${mng["base__formlabel_twin-label"]}`} key={ii}>
                        <span className={mng.base__inputtitle}>{item.title}</span>
                        <input className={mng.base__inputbase} type={item.type} min='0' placeholder={item.placeholder} value={item.value} onChange={(e) => izinChange(e, i, ii)}/>
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

        <button className={`${mng["base__btnsimpan"]} ${"float-right mt-1"}`} onClick={storeData} disabled={!btnValid}>
          Simpan dan Lanjutkan
        </button>
      </div>
    </>
  );
};

export default FormAspekUmum;
