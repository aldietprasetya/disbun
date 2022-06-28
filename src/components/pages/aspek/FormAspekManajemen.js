import React, { useState } from 'react';
import InputForm from '../admin/infografis/InputForm';

const FormAspekManajemen = () => {
  const [isError, setIsError] = useState(false);
  return (
    <>
      <div className="mt-6 text-base text-blue-600">
        <a href="/admin/infografis">Struktur Organisasi dan Nama Pengelola</a>
      </div>
      <div className="border-b border-primary-gray-2 mt-4 pb-6">
        <div className="text-base text-primary-black-2">
          Susunan Komisaris
        </div>
        {/* Form Nama Perushaan */}
        <div className="mt-6">
          <InputForm
            titleForm="Komisaris Utama"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nama Komisaris Utama"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Komisaris"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nama Komisaris"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Komisaris
        </button>
      </div>


      {/* Section 2 */}
      <div className="border-b border-primary-gray-2 mt-6 pb-6">
        <div className="text-base text-primary-black-2">
          Susunan Direksi
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Direktur Utama"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nama Direktur Utama"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Direktur"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nama Direktur"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Direktur
        </button>
      </div>

      <div className="border-b border-primary-gray-2 mt-6 pb-6">
        <div className="text-base text-primary-black-2">
          Susunan Administrasi
        </div>
        {/* Form Nama Perushaan */}
        <div className="mt-6">
          <InputForm
            titleForm="Administratur/Manager"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nama Administratur/Manager"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
      </div>


      {/* Section 3 */}
      <div className="border-b border-primary-gray-2 mt-6 pb-6">
        <div className="text-base text-primary-black-2">Tenaga Kerja</div>
        <div className="mt-6 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Administratur"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Staf"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Tenaga Kerja Bulanan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Tenaga Kerja Harian Tetap"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Tenaga Kerja Harian Lepas"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Staf Borongan/Musiman"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="text-base text-blue-600">
          <a href="/aspek/manajemen">Rencana Investasi/Eksploitasi</a>
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Kegiatan Investasi/Eksploitasi"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nama Kegiatan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-4 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Tahun"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Volume"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan/Unit Barang"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Nilai Biaya"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Masukkan Nilai Biaya"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Kegiatan Investasi/Eksploitasi
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

export default FormAspekManajemen;
