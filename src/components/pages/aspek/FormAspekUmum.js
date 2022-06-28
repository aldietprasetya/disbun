import React, { useState } from 'react';
import MyMap from 'src/components/googleMap/MyMap';
import InputForm from '../admin/infografis/InputForm';

const FormAspekUmum = (props) => {
  const [isError, setIsError] = useState(false);
  return (
    <>
      {/* Periode Pengisian */}
      <div className="pb-4">
        <div className="mt-6 text-base text-blue-600">
          <a href="/admin/infografis">Periode Pengisian</a>
        </div>
        {/* Form GRID */}
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Bulan"
            titleName="bulanPeriode"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Bulan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>

        {/* Form Kantor Pusat */}
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
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
            } block h-[150px] w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4 focus:border-green-600 focus:outline-none`}
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
              } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
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
                } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
              />
            </div>
          </div>
        </div>

        {/* Form Kantor Perwakilan */}
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
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
            } block h-[150px] w-full rounded border bg-white-2  py-3 px-4 placeholder:text-primary-gray-4 focus:border-green-600 focus:outline-none`}
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
              } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
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
                } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
              />
            </div>
          </div>
        </div>

        {/* Form Kantor Kebun */}
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
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
            } block h-[150px] w-full rounded border bg-white-2  py-3 px-4 placeholder:text-primary-gray-4 focus:border-green-600 focus:outline-none`}
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
              } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
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
                } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
              />
            </div>
          </div>
        </div>

        {/* Form Koordinat */}
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Koordinat Kantor Kebun (Longitude)"
            titleName="longitude"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Longitude"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>

        {/* Form Lokasi Kebun */}
        <div className="mt-4 text-primary-black-2">Lokasi Kebun</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Kota/Kabupaten"
            titleName="cityId"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kota / Kab"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
          />
        </div>
      </div>

      {/* Legalitas */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-6 text-base text-blue-600">
          <a href="/admin/infografis">Legalitas</a>
        </div>
        <div className="mt-4 text-base text-primary-black-2">
          Hak Guna Usaha (HGU)
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Nama Persil"
            titleName="parcelName"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nama Persil"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        {/* Form GRID */}
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Nomor SK HGU"
            titleName="skHguNo"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nomor SK HGU"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Tanggal SK HGU"
            titleName="skHguDate"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Nomor Sertifikat HGU"
            titleName="certifHguNo"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nomor Sertifikat HGU"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Tanggal Sertifikat HGU"
            titleName="certifHguDate"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Luas Lahan (Ha)"
            titleName="area"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Tanggal Expirasi"
            titleName="expDate"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Komoditas"
            titleName="comodity"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Komoditas Lahan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Keterangan"
            titleName="description"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Hak Guna Usaha
        </button>
      </div>

      <div className="mt-4">
        <div className="text-base text-primary-black-2">
          Izin Usaha Perkebunan (IUP)
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Jenis IUP"
            titleName="iupType"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
        </div>
        {/* Form GRID */}
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Nomor IUP"
            titleName="iupNo"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nomor SK HGU"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Tanggal Penetapan IUP"
            titleName="iupDate"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Luas Lahan (Ha)"
            titleName="area"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pejabat yang Menetapkan"
            titleName="certifierId"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pejabat"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Komoditas"
            titleName="comodity"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Komoditas Perkebunan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Keterangan"
            titleName="description"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Izin Usaha Perkebunan
        </button>
      </div>

      <div className="flex w-full justify-end">
        <button
          className="mt-12 w-[40%] items-end rounded-md bg-primary-green p-4 text-sm font-bold text-white disabled:bg-[#D5DBDA]"
          disabled
        >
          Simpan dan Lanjutkan
        </button>
      </div>
    </>
  );
};

export default FormAspekUmum;
