import React, { useState } from 'react';
import InputFileButton from 'src/components/customInput/InputFileButton';
import InputForm from '../admin/infografis/InputForm';
const FormManajemen = () => {
  const [isError, setIsError] = useState(false);
  return (
    <>
      <div className="mt-6 text-base text-blue-600">
        <a href="/penilaian-perkebunan/manajemen">
          Visi dan Misi Perusahaan serta Organisasi Perusahaan
        </a>
      </div>
      <div className="mt-6 items-center">
        <div className="mt-2 text-sm font-semibold text-black">
          Apakah perusahaan mempunyai Visi?
        </div>
        <div className="mt-4 text-primary-black-2">
          Visi dan Misi Perusahaan
        </div>
        <div className="inline-flex items-center">
          <InputForm
            radioButton={true}
            radioName="visi-perusahaan"
            label="Iya"
            value="ya"
          />
          <div className="mx-10 inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="visi-perusahaan"
              label="Tidak"
              value="tidak"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 items-center">
        <div className="mt-2 text-sm font-semibold text-black">
          Apakah perusahaan mempunyai Misi?
        </div>
        <div className="inline-flex items-center">
          <InputForm
            radioButton={true}
            radioName="misi-perusahaan"
            label="Iya"
          />
          <div className="mx-10 inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="misi-perusahaan"
              label="Tidak"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 items-center">
        <InputForm
          titleForm="Visi Perusahaan"
          titleName="email"
          textArea="true"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Visi Perusahaan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } block h-[150px] w-full rounded border bg-white-2  py-3 px-6 text-black placeholder:text-base focus:border-green-600 focus:outline-none`}
        />
      </div>
      <div className="mt-6 items-center">
        <InputForm
          titleForm="Misi Perusahaan"
          titleName="email"
          textArea="true"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Misi Perusahaan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } block h-[150px] w-full rounded border bg-white-2  py-3 px-6 text-black placeholder:text-base focus:border-green-600 focus:outline-none`}
        />
      </div>
      <div className="mt-4 text-sm text-primary-black-2">
        Organisasi Perusahaan
      </div>
      <div className="mt-2 text-sm text-primary-black-2">
        Struktur Organisasi
      </div>
      <div className="mt-6 items-center">
        <div className="mt-2 text-sm font-semibold text-black">
          Apakah perusahaan memiliki struktur organisasi?
        </div>
        <div className="inline-flex items-center">
          <InputForm
            radioButton={true}
            radioName="strk-org-perusahaan"
            label="Iya"
            value="ya"
          />
          <div className="mx-10 inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="strk-org-perusahaan"
              label="Tidak"
              value="tidak"
            />
          </div>
        </div>
        <div className="mt-2 text-sm font-semibold text-black">
          Apakah struktur organisasi sudah sesuai dengan kebutuhan perusahaan?
        </div>
        <div className="inline-flex items-center">
          <InputForm
            radioButton={true}
            radioName="strk-org-perusahaan-sesuai"
            label="Iya"
            value="ya"
          />
          <div className="mx-10 inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="strk-org-perusahaan-sesuai"
              label="Tidak"
              value="tidak"
            />
          </div>
        </div>
      </div>

      <div className="mt-2 text-sm text-primary-black-2">
        {"Uraian Pekerjaan (Job description)"}
      </div>
      <div className="mt-6 items-center">
        <div className="mt-2 text-sm font-semibold text-black">
          Apakah masing-masing Direksi, memiliki job description ?
        </div>
        <div className="inline-flex items-center">
          <InputForm
            radioButton={true}
            radioName="direksi-job-desc"
            label="Iya"
            value="ya"
          />
          <div className="mx-10 inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="direksi-job-desc"
              label="Tidak"
              value="tidak"
            />
          </div>
        </div>
        <div className="mt-2 text-sm font-semibold text-black">
          Apakah masing-masing manajer tingkat menengah memiliki job description ?
        </div>
        <div className="inline-flex items-center">
          <InputForm
            radioButton={true}
            radioName="mngr-menengah-job-desc"
            label="Iya"
            value="ya"
          />
          <div className="mx-10 inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="mngr-menengah-job-desc"
              label="Tidak"
              value="tidak"
            />
          </div>
        </div>
        <div className="mt-2 text-sm font-semibold text-black">
          Apakah masing-masing manajer operasional memiliki job description?
        </div>
        <div className="inline-flex items-center">
          <InputForm
            radioButton={true}
            radioName="mngr-opr-job-desc"
            label="Iya"
            value="ya"
          />
          <div className="mx-10 inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="mngr-opr-job-desc"
              label="Tidak"
              value="tidak"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 text-base text-blue-600">
        <a href="/penilaian-perkebunan/manajemen">
          Perencanaan Tahunan dan Lima Tahunan
        </a>
      </div>
      <div className="mt-4 text-primary-black-2">
        Rencana Tahunan dan Realisasi
      </div>
      <div className="mt-4 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
        <div className="flex items-center">
          <img src="/icon/info-circle.svg" className="w-6" />
          <div className="mx-2 text-sm font-semibold text-primary-blue-1">
            Perhatian !
          </div>
        </div>
        <div className="px-6 text-xs">
          {"Rencana 1 (satu) tahun sebelum pelaksanaan penilaian usaha perkebunan saat ini"}
        </div>
      </div>


      <div className="mt-4 text-primary-black-2">
        Kegiatan: Pembukaan Lahan Baru
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan dalam ha"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Realisasi s.d Akhir Tahun"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan dalam ha"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">Kegiatan: Replanting</div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan dalam ha"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Realisasi s.d Akhir Tahun"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan dalam ha"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Kegiatan: Pembangunan Pabrik
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Presentase yang dibangun (%)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan jumlah presentase"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Realisasi s.d Akhir Tahun"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan dalam ha"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Kegiatan: Pembangunan Gedung
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Nominal  biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Realisasi s.d Akhir Tahun"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan dalam ha"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Kegiatan: Pembangunan Perumahan
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Jumlah unit"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan jumlah dalam unit"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Realisasi s.d Akhir Tahun"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan jumlah dalam unit"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {'Kegiatan: Pengadaan mesin & kendaraan'}
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Jumlah unit"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan jumlah dalam unit"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Realisasi s.d Akhir Tahun"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan jumlah dalam unit"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {'Kegiatan: Kursus untuk karyawan '}
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Frekuensi kegiatan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan jumlah frekuensi"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Realisasi s.d Akhir Tahun"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan jumlah frekuensi"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {'Kegiatan: Pembangunan/Pemeliharan Sarana Pendukung'}
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Satuan rencana"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan data sesuai satuan rencana"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Realisasi s.d Akhir Tahun"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan data sesuai satuan rencana"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div>Rencana Lima Tahun</div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Tahun Periode"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan data tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Sampai dengan tahun"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan data tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {'Kegiatan: Pembukaan Lahan Baru'}
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas dalam ha"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">{'Kegiatan: Replanting'}</div>
      <div className="mt-6">
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas dalam ha"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {'Kegiatan: Pembangunan Pabrik'}
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Presentase yang dibangun (%)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan presentase"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {'Kegiatan: Pembangunan Gedung '}
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Nominal biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {'Kegiatan: Pembangunan Perumahan'}
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Jumlah unit"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan jumlah dalam unit"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {'Kegiatan: Pengadaan mesin & kendaraan'}
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Jumlah unit"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan jumlah dalam unit"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {'Kegiatan: Kursus untuk karyawan '}
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Frekuensi kegiatan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan data dalam frekuensi"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {'Kegiatan: Pembangunan/Pemelihaan Sarana Pendukung'}
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Satuan rencana"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan data sesuai satuan rencana"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Rencana Lima Tahunan
      </div>
      <div className="mt-4 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
        <div className="flex items-center">
          <img src="/icon/info-circle.svg" className="w-6" />
          <div className="mx-2 text-sm font-semibold text-primary-blue-1">
            Perhatian !
          </div>
        </div>
        <div className="px-6 text-xs">
          {"Rencana dari tahun pencacahan penilaian usaha perkebunan s/d 5 tahun yang akan datang."}
        </div>
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Tahun Periode"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Sampai dengan tahun"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan data tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Kegiatan: Pembukaan Lahan Baru
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas dalam ha"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Kegiatan: Replanting
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas dalam ha"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Kegiatan: Pembangunan Pabrik
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Presentase yang dibangun (%)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan presentase"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Kegiatan: Pembangunan Gedung
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Nominal biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {"Kegiatan: Pengadaan mesin & kendaraan"}
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Jumlah unit"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan jumlah dalam unit"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {"Kegiatan: Kursus untuk karyawan "}
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Frekuensi kegiatan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan data dalam frekuensi"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        {"Kegiatan: Pembangunan/Pemelihaan Sarana Pendukung "}
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Satuan rencana"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan data sesuai satuan rencana"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Ketersediaan Data Tertulis"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Placeholder"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          selectionArea="true"
        />
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>

      <div className="mt-6 text-base text-blue-600">
        <a>Manajemen Keuangan</a>
      </div>
      <div className="mt-4 text-primary-black-2">
        Kondisi Keuangan
      </div>
      <div className="mt-4 text-primary-black-2">
        Neraca dan Laporan Rugi/Laba (3 tahun terakhir)
      </div>
      <div className="mt-6 items-center">
        <div className="mt-2 text-sm font-semibold text-black">
          Apakah perusahaan membuat neraca?
        </div>
        <div className="mt-4 text-primary-black-2">
          Visi dan Misi Perusahaan
        </div>
        <div className="inline-flex items-center">
          <InputForm
            radioButton={true}
            radioName="neraca-perusahaan"
            label="Iya"
            value="ya"
          />
          <div className="mx-10 inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="neraca-perusahaan"
              label="Tidak"
              value="tidak"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 items-center">
        <div className="mt-2 text-sm font-semibold text-black">
          Apakah neraca dan laporan R/L diperiksa oleh Akuntan Publik?
        </div>
        <div className="mt-4 text-primary-black-2">
          Visi dan Misi Perusahaan
        </div>
        <div className="inline-flex items-center">
          <InputForm
            radioButton={true}
            radioName="akuntan-publik"
            label="Iya"
            value="ya"
          />
          <div className="mx-10 inline-flex items-center">
            <InputForm
              radioButton={true}
              radioName="akuntan-publik"
              label="Tidak"
              value="tidak"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 text-primary-black-2">
        Investasi
      </div>
      <div className="mt-4 text-primary-black-2">
        Profil Investasi 3 (Tiga) Tahun Terakhir
      </div>
      <div className="mt-4 text-primary-black-2">
        Kegiatan: Kebun
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 1"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 2"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 3"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Kegiatan: Pabrik
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 1"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 2"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 3"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Kegiatan: Bangunan
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 1"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 2"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 3"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Kegiatan: Mesin dan Kendaraan
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 1"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 2"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 3"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Kegiatan: Prasarana Lain
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 1"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 2"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Tahun 3"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Luas Lahan (ha)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan luas lahan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nilai Biaya (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai biaya"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Data"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Investasi Kebun, Pabrik, Prasarana dan Sarana
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Jenis Tanaman"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan jenis tanaman"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Tahun"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Jumlah Investasi Untuk Pembangunan (Nominal Pembiayaan)
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Kebun (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Pabrik (Rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Prasarana & Sarana (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
        + Tambah Data Investasi Tahun Lainnya
      </button>
      <div className="mt-4 text-primary-black-2">
        Sumber Pembiayaan Kebun
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Pembiayaan Sampai Dengan Saat Ini"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan sumber pembiayaan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Fasilitas Kredit PBSN
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Total Kredit yang Diterima"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Tahun Periode"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Keterangan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Total Pengembalian di Akhir Periode"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Sumber Pembiayaan Bank"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan sumber pembiayaan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Fasilitas Kredit PIR-Trans
      </div>
      <div className="mt-4 grid w-full grid-cols-3 gap-2">
        <InputForm
          titleForm="Total Kredit yang Diterima"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Tahun Periode"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan tahun"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Keterangan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Total Pengembalian di Akhir Periode"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Sumber Pembiayaan Bank"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan sumber pembiayaan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Kredit Lainnya
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Sumber Bank Pemberi"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nama bank"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Plafon Kredit
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Volume/Nilai (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Keterangan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Realisasi Pencairan
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Tanaman (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Keterangan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Sarana (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Keterangan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Prasarana (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Keterangan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Realisasi Fisik
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Tanaman (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Keterangan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Sarana (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nilai dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Keterangan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Prasarana (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Keterangan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="keterangan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Pengembalian
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Waktu Mulai"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="DD/MM/YYY"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Tenggat Pengembalian"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="DD/MM/YYY"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Total Pengembalian"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan total dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
        + Tambah Kredit Lainnya
      </button>
      <div className="mt-4 text-primary-black-2">
        Swadana
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="Nominal Biaya (Rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Fasilitas Penanaman Modal
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Nama Perusahaan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nama perusahaan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Nama Perusahaan Patungan"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nama perusahaan"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Penanaman Modal Asing (PMA)
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="No. SPPMA"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nomor SPPMA"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Tahun Pertama (%)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan data dalam presentase"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Tahun Saat Pencacahan (%)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan data dalam presentase"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Komposisi Modal
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Rencana (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Realisasi (Rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
        + Tambah Penanaman Modal Asing Lainnnya
      </button>
      <div className="mt-4 text-primary-black-2">
        Investasi
      </div>
      <div className="mt-6">
        <InputForm
          titleForm="No. & Tgl. SP-PPMDN"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nomor dan tanggal"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <div className="mt-4 text-primary-black-2">
        Penanaman Modal Dalam Negeri (PMDN)
      </div>
      <div className="mt-4 grid w-full grid-cols-2 gap-2">
        <InputForm
          titleForm="Rencana (rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
        <InputForm
          titleForm="Realisasi (Rp)"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="masukkan nominal dalam rupiah"
          className={`${isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-6 text-black placeholder:text-base`}
          iconEmail="true"
        />
      </div>
      <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
        + Tambah Penanaman Modal Dalam Negeri Lainnnya
      </button>
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
export default FormManajemen;
