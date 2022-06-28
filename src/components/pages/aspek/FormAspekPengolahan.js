import React, { useState } from 'react';
import InputForm from '../admin/infografis/InputForm';


const FormAspekPengolahan = () => {
  const [isError, setIsError] = useState(false);
  return (
    <>
      <div className="mt-6 text-base text-blue-600">
        <a href="/admin/infografis">Jenis dan Kapasitas</a>
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Jenis UPH"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Jenis UPH"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Jumlah (unit)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Luas/Volume"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas bangunan (m2)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Luas"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
          iconEmail="true"
        />
      </div>

      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-6 text-base text-blue-600">
          <a href="/admin/infografis">Sumber Bahan Baku</a>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Jenis UPH"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Tanaman"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 text-base text-primary-black-2">
          Asal Bahan Baku
        </div>
        <div className="mt-6 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Kab/Kota"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Kab/Kota"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
          />
          <InputForm
            titleForm="Volume"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Volume"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
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
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Jenis dan Kapasitas Lainnya
        </button>
      </div>

      <div className="border-b border-primary-gray-2 pb-6">
        <div className="mt-6 text-base text-blue-600">
          <a href="/admin/infografis">Jenis Mutu Akhir</a>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Jenis UPH"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Tanaman"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 text-base text-primary-black-2">
          Asal Bahan Baku (Kg)
        </div>
        <div className="mt-6 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Sendiri (Kg)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
          />
          <InputForm
            titleForm="Kebun Seinduk (Kg)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Beli (kg)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jumlah"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 text-base text-primary-black-2">
          Hasil Olah
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Jenis Mutu Akhir"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Mutu Akhir"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Volume Produksi (kg)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Volume"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Hasil Olah Lainnya
        </button>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Jenis Mutu Akhir UPH Lainnya
        </button>
      </div>

      <div className="mt-6">
        <div className="text-base text-blue-600">
          <a href="/admin/infografis">Pemasaran</a>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Komoditas"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Komoditas"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Jenis Mutu"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Jenis Mutu"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Lokal/Ekspor"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih Jenis Pemasaran"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Biaya Produksi (Rp/Kg)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nilai Produksi"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Harga Jual (Rp/Kg)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nilai Jual"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
          />

          <InputForm
            titleForm="Keterangan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${isError && 'border-primary-red-1 bg-primary-red-2'
              } mb-4 w-full  rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Pemasaran Komoditas Lainnya
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

export default FormAspekPengolahan;
