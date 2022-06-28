import React, { useState } from 'react';
import InputForm from '../admin/infografis/InputForm';

const FormAspekKebun = () => {
  const [isError, setIserror] = useState(false);
  return (
    <>
      {/* Lahan GHU */}
      <div className="mt-6 text-base text-blue-600">
        <a href="/admin/infografis">Pemanfaatan Lahan GHU</a>
      </div>
      {/* Tanaman */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 text-base text-primary-black-2">Tanaman</div>
        <div className="mt-4 grid w-full grid-cols-2 gap-4">
          <InputForm
            titleForm="Jenis Tanaman"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Tanaman"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Kec/Desa"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kec/Desa"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Luas yang Digunakan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Areal Pemanfaatan
        </button>
      </div>

      {/* Pembibitan */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 text-base text-primary-black-2">Pembibitan</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Kec/Desa"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kec/Desa"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Luas yang Digunakan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Areal Pemanfaatan
        </button>
      </div>

      {/* Kebun Induk Entres */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 text-base text-primary-black-2">
          Kebun Induk Entres
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Kec/Desa"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kec/Desa"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Luas yang Digunakan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Areal Pemanfaatan
        </button>
      </div>

      {/* Emplasmen */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 text-base text-primary-black-2">Emplasmen</div>
        <div className="mt-4 grid w-full grid-cols-2 gap-4">
          <InputForm
            titleForm="Jenis Emplasmen"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Jenis Emplasmen"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Kec/Desa"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kec/Desa"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Luas yang Digunakan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Areal Pemanfaatan
        </button>
      </div>

      {/* Jalan/Jembatan */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 text-base text-primary-black-2">
          Jalan/Jembatan
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Kec/Desa"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kec/Desa"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Luas yang Digunakan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Areal Pemanfaatan
        </button>
      </div>

      {/* Areal Cadangan */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 text-base text-primary-black-2">
          Areal Cadangan
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Kec/Desa"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kec/Desa"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Luas yang Digunakan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Areal Pemanfaatan
        </button>
      </div>

      {/* Areal Konservasi */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 text-base text-primary-black-2">
          Areal Konservasi
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Kec/Desa"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kec/Desa"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Luas yang Digunakan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Areal Pemanfaatan
        </button>
      </div>

      {/* Areal Tidak Mungkin Ditanami (TMD) */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 text-base text-primary-black-2">
          Areal Tidak Mungkin Ditanami (TMD)
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Kec/Desa"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kec/Desa"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Luas yang Digunakan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Areal Pemanfaatan
        </button>
      </div>

      {/* Areal Sawah */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 text-base text-primary-black-2">Areal Sawah</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Kec/Desa"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kec/Desa"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Luas yang Digunakan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Areal Pemanfaatan
        </button>
      </div>

      {/* Pihak Ketiga */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 text-base text-primary-black-2">Pihak Ketiga</div>
        <div className="mt-4 grid w-full grid-cols-2 gap-4">
          <InputForm
            titleForm="Jenis Pihak Ketiga"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Jenis Pihak Ketiga"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Kec/Desa"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kec/Desa"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Luas yang Digunakan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Areal Pemanfaatan
        </button>
      </div>

      {/* lain lain */}
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 text-base text-primary-black-2">Lain-lain</div>
        <div className="mt-4 grid w-full grid-cols-2 gap-4">
          <InputForm
            titleForm="Jenis Areal Lain-lain"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Areal"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Kec/Desa"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kec/Desa"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            selectionArea={true}
          />
          <InputForm
            titleForm="Luas yang Digunakan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Areal Pemanfaatan
        </button>
      </div>

      {/* Topografi */}
      <div className="mt-6 text-base text-blue-600">
        <a href="/admin/infografis">Topografi</a>
      </div>
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 text-base text-primary-black-2">
          Lereng Datar (0-8 %)
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <div className="mt-4 text-base text-primary-black-2">
          Lereng Landai (8-15 %)
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <div className="mt-4 text-base text-primary-black-2">
          Lereng Agak Curam (15-24 %)
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <div className="mt-4 text-base text-primary-black-2">
          Lereng Curam (24-45 %)
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <div className="mt-4 text-base text-primary-black-2">
          {`Lereng Sangat Curam (>45 %)`}
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Tipe Iklim"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Tipe Iklim"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Waktu Laporan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="MM/YY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
      </div>

      {/* Penanaman Baru */}
      <div className="mt-6 text-base text-blue-600">
        <a href="/admin/infografis">Penanaman Baru</a>
      </div>
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 grid w-full grid-cols-2 gap-4">
          <InputForm
            titleForm="Jenis Tanaman"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Areal"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Tahun Tanam"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Luas yang Digunakan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Jumlah Pohon"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Jenis Penanaman Baru
        </button>
      </div>

      {/* Komposisi tanaman */}
      <div className="mt-6 text-base text-blue-600">
        <a href="/admin/infografis">Komposisi Tanaman</a>
      </div>
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <div className="col-span-3">
            <InputForm
              titleForm="Jenis Tanaman"
              titleName="email"
              // onChange={handleChange}
              type="text"
              // values={values.email}
              placeholder="Jenis Tanaman"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
              iconEmail={true}
            />
          </div>
          <InputForm
            titleForm="TBM (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="TM (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="TTR (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Jenis Komposisi Tanaman
        </button>
      </div>

      {/* Pemupukan */}
      <div className="mt-6 text-base text-blue-600">
        <a href="/admin/infografis">Pemupukan</a>
      </div>
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 grid w-full grid-cols-2 gap-4">
          <div className="col-span-2">
            <InputForm
              titleForm="Jenis Tanaman"
              titleName="email"
              // onChange={handleChange}
              type="text"
              // values={values.email}
              placeholder="Jenis Tanaman"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
              iconEmail={true}
            />
          </div>
          <InputForm
            titleForm="Luas Yang Dipupuk (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Jenis Pupuk"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Pupuk"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Dosis (Kg/Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah Dosis"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Jumlah Pupuk (Kg)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah Pupuk"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Jenis Pemupukan
        </button>
      </div>

      {/* Pengendalian Hama */}
      <div className="mt-6 text-base text-blue-600">
        <a href="/admin/infografis">Pengendalian Hama Penyakit</a>
      </div>
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <div className="col-span-3">
            <InputForm
              titleForm="Jenis Tanaman"
              titleName="email"
              // onChange={handleChange}
              type="text"
              // values={values.email}
              placeholder="Jenis Tanaman"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
              iconEmail={true}
            />
          </div>
          <InputForm
            titleForm="Jenis Hama Penyakit"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Hama Penyakit"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Luas Serangan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Luas Yang Dikendalikan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <div className="mt-4 text-base text-primary-black-2">
          Luas Cara Pengendalian
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-4">
          <InputForm
            titleForm="Chemical (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Hayati (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Mekanisme (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Jenis Hama Penyakit
        </button>
      </div>

      {/* Diversifikasi Usaha Tani */}
      <div className="mt-6 text-base text-blue-600">
        <a href="/admin/infografis">Diversifikasi Usaha Tani</a>
      </div>
      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-4 grid w-full grid-cols-2 gap-4">
          <div className="col-span-2">
            <InputForm
              titleForm="Cabang Diserfisikasi"
              titleName="email"
              // onChange={handleChange}
              type="text"
              // values={values.email}
              placeholder="Jenis Diserfisikasi"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
              iconEmail={true}
            />
          </div>
          <InputForm
            titleForm="Luas/Volume"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas/Volume"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Produksi (Ton)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah Produksi"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Nilai (Rp)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nilai dalam Rupiah"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Cabang Diserfisikasi lainnya
        </button>
      </div>

      {/* Produksi dan Produktivitas */}
      <div className="mt-6 text-base text-blue-600">
        <a href="/admin/infografis">Produksi dan Produktivitas</a>
      </div>
      <div className="mt-4">
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="col-span-2">
            <InputForm
              titleForm="Jenis Tanaman"
              titleName="email"
              // onChange={handleChange}
              type="text"
              // values={values.email}
              placeholder="Jenis Tanaman"
              className={`${
                isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
              iconEmail={true}
            />
          </div>
          <InputForm
            titleForm="Luas TM (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Luas Yang Dipanen (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Produksi Mentah (Kg)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah Produksi"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Produksi Kering (Kg)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah Produksi"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Produktivitas (kg/ha/tahun)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nilai Produktivitas"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail={true}
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Jenis Tanaman
        </button>
      </div>

      <div className="flex w-[100%] justify-end">
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

export default FormAspekKebun;
