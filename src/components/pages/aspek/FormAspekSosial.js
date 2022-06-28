import React, { useState } from 'react';
import InputForm from '../admin/infografis/InputForm';

const FormAspekSosial = () => {
  const [isError, setIsError] = useState(false);
  return (
    <>
      <div className="mt-6 text-base text-blue-600">
        <a href="/pelaporan-perkebunan/aspek-sosial">Pajak dan Retribusi</a>
      </div>

      <div className="border-b border-primary-gray-2 mt-6 pb-6">
        <div>
          <InputForm
            titleForm="Jenis Pajak/Retribusi"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Pajak/Retrbusi"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Nilai (Rp)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nilai Pajak/Retribusi"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Jenis Pajak dan Retribusi Lainnya
        </button>
      </div>

      <div className="border-b border-primary-gray-2 mt-6 pb-6">
        <div className="text-base text-blue-600">
          <a href="/pelaporan-perkebunan/aspek-sosial">Kawasan Lindung (Hutan Lindung, Sungai, Danau, dsb.)</a>
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Luas Kawasan Lindung (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Dikelola Sejak tahun"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="YYYY"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4">
          <InputForm
            titleForm="Usaha Pelestarian"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Tulis usaha pelestarian yang dilakukan."
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full h-[150px] focus:outline outline-bg-primary-green rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            textArea="true"
          />
        </div>
      </div>

      <div className="border-b border-primary-gray-2 mt-6 pb-6">
        <div className="text-base text-blue-600">
          <a href="/pelaporan-perkebunan/aspek-sosial">Konservasi</a>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Jenis Kegiatan Konservasi"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Pajak/Retrbusi"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Jenis Kegiatan Konservasi
        </button>
      </div>

      <div className="border-b border-primary-gray-2 mt-6 pb-6">
        <div className="text-base text-blue-600">
          <a href="/pelaporan-perkebunan/aspek-sosial">Pengawasan Lingkungan</a>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Masalah Lingkungan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Masalah Lingkungan"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Waktu kejadian"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-2 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Frekuensi (kali)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-2 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Upaya Penyelesaian"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Deskripsi Upaya"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Jenis Masalah Lingkungan
        </button>
      </div>

      <div className="mt-6">
        <div className="text-base text-blue-600">
          <a href="/pelaporan-perkebunan/aspek-sosial">Kemitraan Usaha Dengan Petani Perkebunan Rakyat</a>
        </div>
        <div className="mt-4 text-base text-primary-black-2">Perjanjian Kerjasama</div>
        <div className="mt-6 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Nama Kelompok Tani"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nama Poktan"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Nomor"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nomor"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Waktu Perjanjian"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Lamanya perjanjian"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Durasi"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Jenis perjanjian"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Perjanjian"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Kemitraan Usaha Lainnya
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
  )
};

export default FormAspekSosial;
