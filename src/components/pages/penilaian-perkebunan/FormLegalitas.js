import React, { useState } from 'react';
import InputFileButton from 'src/components/customInput/InputFileButton';
import InputForm from '../admin/infografis/InputForm';

const FormLegalitas = () => {
  const [isError, setIsError] = useState(false);
  return (
    <>
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

      <div className="mt-2 pb-6 border-b border-primary-gray-2">
        <div className="text-base text-blue-600">
          <a href="/admin/infografis">Identitas Perusahaan/Kebun</a>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Nama Perusahaan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nama Perusahaan Perkebunan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Status Perusahaan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nama Perusahaan Perkebunan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Alamat Kantor Pusat"
            titleName="email"
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
              titleForm="Nomor Telepon Kantor Pusat"
              titleName="email"
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
                titleForm="Nomor Fax Kantor Pusat"
                titleName="email"
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
          <InputForm
            titleForm="Alamat Kantor Perwakilan"
            titleName="email"
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
              titleName="email"
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
                titleName="email"
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
        <div className="mt-6">
          <InputForm
            titleForm="Nama Kebun/Pabrik"
            titleName="email"
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
        <div className="mt-4 text-base text-primary-black-2">Lokasi Kebun</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Kota/Kabupaten"
            titleName="email"
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
            titleName="email"
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
            titleName="email"
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
        <div className="mt-4 text-base text-primary-black-2">
          Lingkup Usaha (Pilih Salah Satu dan Lengkapi)
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Budidaya Komoditi"
            titleName="email"
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
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Pengolahan Komoditi"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Komoditi"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Produk Pengolahan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Produk Pengolahan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
      </div>

      <div className="mt-2 pb-6 border-b border-primary-gray-2">
        <div className="mt-6 text-base text-blue-600">
          <a href="/admin/infografis">Legalitas Usaha</a>
        </div>
        <div className="mt-4 text-base text-primary-black-2">
          Hak Guna Usaha (HGU)
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="No. SK HGU"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Nomor SK HGU"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Tanggal SK HGU"
            titleName="email"
            // onChange={handleChange}
            type="date"
            id="datePicker"
            // values={values.email}
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4  text-base uppercase text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Jenis Tanaman (dapat lebih dari satu)"
            titleName="email"
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
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Luas Lahan (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Luas Lahan dalam Ha"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Tanggal Berakhirnya HGU"
            titleName="email"
            // onChange={handleChange}
            type="date"
            id="datePicker"
            // values={values.email}
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4  text-base uppercase text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="No. Sertifikat"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Komoditas Lahan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Jenis HGU"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Keterangan"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Lampiran Dokumen Lengkap HGU
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Hak Guna Usaha
        </button>
      </div>

      <div className="mt-2 pb-6 border-b border-primary-gray-2">
        <div className="my-4 text-base text-primary-black-2">
          HGU Dalam Proses
        </div>
        <InputForm
          titleForm="No. SK HGU"
          titleName="email"
          // onChange={handleChange}
          type="text"
          // values={values.email}
          placeholder="Pilih Jenis IUP"
          className={`${
            isError && 'border-primary-red-1 bg-primary-red-2'
          } mb-6 w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
          iconEmail="true"
        />
        <textarea
          placeholder="Berikan penjelasan mengenai perolehan lahan apabila berasal dari kawasan hutan."
          className={`${
            isError && 'border-primary-red-1 bg-primary-red-2'
          } disabled:hover mb-6 h-32 w-full rounded bg-white-2 py-3 px-4 placeholder:text-primary-gray-4`}
        ></textarea>
        <div className="mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Lampiran Berkas HGU Dalam Proses
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah HGU Dalam Proses
        </button>
      </div>

      <div className="mt-2 pb-6 border-b border-primary-gray-2">
        <div className="mt-4 text-base text-primary-black-2">
          Perizinan Usaha Perkebunan
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="No. SK atas Rencana Pembangunan Perkebunan PIR-Trans (SKRP3)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tanggal SK HGU"
            titleName="email"
            // onChange={handleChange}
            type="date"
            id="datePicker"
            // values={values.email}
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3 px-4  text-base uppercase text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pemberi Izin"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pejabat Pemberi Izin"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">Lampiran Copy SKRP3</div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="No. Surat Penugasan sebagai Inti PIR-Bun dari Mentan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tanggal"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pemberi Izin"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Lampiran Copy SK Penugasan sebagai Inti PIR-Bun dari Mentan
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="No. Izin Tetap Usaha Budidaya Perkebunan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tanggal"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pemberi Izin"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Lampiran Copy SK Izin Tetap Usaha Budidaya Perkebunan
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="No. Izin Tetap Usaha industri Perkebunan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tanggal"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pemberi Izin"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Lampiran Copy SK Izin Tetap Usaha Pertanian (dari BKPM)
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="No. Surat Pendaftaran Usaha Perkebunan (SPUP)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tanggal"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pemberi Izin"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Lampiran Copy SK Pendaftaran Usaha Perkebunan (SPUP)
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="No. Izin Usaha Perkebunan (IUP)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tanggal"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pemberi Izin"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Lampiran Copy SK Izin Usaha Perkebunan (IUP)
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
      </div>

      <div className="mt-2 pb-6 border-b border-primary-gray-2">
        <div className="mt-6 text-base text-blue-600">
          <a href="/aspek/umum">Tanah dan Iklim</a>
        </div>
        <div className="mt-4 text-primary-black-2">Tanah</div>
        <div className="mt-4 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Jenis Tanah"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
          />
          <InputForm
            titleForm="Ketinggian dari Muka air laut (m)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Lereng Datar (0-8 %)</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
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
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Lereng Landai (8-15 %)</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
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
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Lereng Berombak (15-24 %)</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
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
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Lereng Berbukit (24-45 %)</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
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
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">
          {'Lereng Bergunung (>45 %)'}
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
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
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tekstur Tanah"
            titleName="email"
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
            titleForm="Drainase"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Kedalaman efektif solum (m)"
            titleName="email"
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
            titleForm="Sumber Informasi"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="No. SK atas Rencana Pembangunan Perkebunan PIR-Trans (SKRP3)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tanggal"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pemberi Izin"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">Lampiran Copy SKRP3</div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="No. Surat Penugasan sebagai Inti PIR-Bun dari Mentan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tanggal"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pemberi Izin"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Lampiran Copy SK Penugasan sebagai Inti PIR-Bun dari Mentan
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="No. Izin Tetap Usaha Budidaya Perkebunan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tanggal"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pemberi Izin"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Lampiran Copy SK Izin Tetap Usaha Budidaya Perkebunan
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="No. Izin Tetap Usaha industri Perkebunan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tanggal"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pemberi Izin"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Lampiran Copy SK Izin Tetap Usaha Pertanian (dari BKPM)
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="No. Surat Pendaftaran Usaha Perkebunan (SPUP)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tanggal"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pemberi Izin"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Lampiran Copy SK Pendaftaran Usaha Perkebunan (SPUP)
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="No. Izin Usaha Perkebunan (IUP)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tanggal"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Pemberi Izin"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } mb-6 w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 mb-4 flex w-full gap-3">
          <div className="flex w-full items-center justify-between">
            <div>
              <div className=" text-sm font-semibold">
                Lampiran Copy SK Izin Usaha Perkebunan (IUP)
              </div>
              <div className="text-[11px] text-[#B3B3B3]">
                Format dokumen: .jpg .jpeg .png
              </div>
            </div>
            <InputFileButton />
          </div>
        </div>
      </div>

      <div className="mt-2 pb-6 border-b border-primary-gray-2">
        <div className="mt-6 text-base text-blue-600">
          <a href="/aspek/umum">Tanah dan Iklim</a>
        </div>
        <div className="mt-4 text-primary-black-2">Tanah</div>
        <div className="mt-4 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Jenis Tanah"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
          />
          <InputForm
            titleForm="Ketinggian dari Muka air laut (m)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Lereng Datar (0-8 %)</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
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
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Lereng Landai (8-15 %)</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
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
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Lereng Berombak (15-24 %)</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
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
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Lereng Berbukit (24-45 %)</div>
        <div className="mt-4 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
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
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">
          {'Lereng Bergunung (>45 %)'}
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Luas (Ha)"
            titleName="email"
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
            titleForm="Persentase (%)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
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
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tekstur Tanah"
            titleName="email"
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
            titleForm="Drainase"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Kedalaman efektif solum (m)"
            titleName="email"
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
            titleForm="Sumber Informasi"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
          <div className="flex items-center">
            <img src="/icon/info-circle.svg" className="w-6" />
            <div className="mx-2 text-sm font-semibold text-primary-blue-1">
              Untuk Lahan Gambut
            </div>
          </div>
          <div className="px-8 text-xs">
            lihat Permentan No. 14/Permentan/PL.110/2/2009 tentang Pemanfaatan
            Lahan Gambut untuk Budidaya Kelapa Sawit
          </div>
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Ketebalan gambut (m)"
            titleName="email"
            iconEmail="true"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } block h-[150px] w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4 focus:border-green-600 focus:outline-none`}
          />
          <InputForm
            titleForm="Tingkat dekomposisi"
            titleName="email"
            selectionArea="true"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } block h-[150px] w-full rounded border bg-white-2 py-3 px-4 placeholder:text-primary-gray-4 focus:border-green-600 focus:outline-none`}
          />
        </div>
        <div className="mt-6">
          <InputForm
            titleForm="Lapisan Tanah di Bawah Gambut"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
      </div>

      <div className="mt-2 pb-6 border-b border-primary-gray-2">
        <div className="mt-4 text-primary-black-2">Kelas Kesesuaian Lahan</div>
        <div className="mt-6">
          <InputForm
            titleForm="Jenis Komoditas"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Pilih jenis IUP"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Kelas Lahan S1</div>
        <div className="mt-6 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Lokasi"
            titleName="email"
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
            titleForm="Luas (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Ditetapkan Oleh"
            titleName="email"
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
        <div className="mt-4 text-primary-black-2">Kelas Lahan S2</div>
        <div className="mt-6 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Lokasi"
            titleName="email"
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
            titleForm="Luas (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Ditetapkan Oleh"
            titleName="email"
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
        <div className="mt-4 text-primary-black-2">Kelas Lahan S3</div>
        <div className="mt-6 grid w-full grid-cols-3 gap-2">
          <InputForm
            titleForm="Lokasi"
            titleName="email"
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
            titleForm="Luas (Ha)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="Persentase"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Ditetapkan Oleh"
            titleName="email"
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
          + Tambah Kesesuaian Lahan Sesuai Komoditas
        </button>
      </div>

      <div className="mt-2">
        <div className="mt-4 text-primary-black-2">Iklim</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Tipe Iklim"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            selectionArea="true"
          />
          <InputForm
            titleForm="Sumber data curah hujan (nama stasiun)"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 rounded-md border bg-primary-blue-2 bg-[url('/icon/info-image.svg')] bg-right bg-no-repeat p-3">
          <div className="flex items-center">
            <img src="/icon/info-circle.svg" className="w-6" />
            <div className="mx-2 text-sm font-semibold text-primary-blue-1">
              Perhatian!
            </div>
          </div>
          <div className="px-8 text-xs">
            {'Masukkan data curah hujan selama 3 (tiga) tahun terakhir.'}
          </div>
        </div>
        <div className="mt-6">
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
        </div>
        <div className="mt-4 text-primary-black-2">Januari</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
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
            titleForm="Jumlah Hari Hujan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Februari</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
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
            titleForm="Jumlah Hari Hujan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Maret</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
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
            titleForm="Jumlah Hari Hujan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">April</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
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
            titleForm="Jumlah Hari Hujan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Mei</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
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
            titleForm="Jumlah Hari Hujan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Juni</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
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
            titleForm="Jumlah Hari Hujan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Juli</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
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
            titleForm="Jumlah Hari Hujan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Agustus</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
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
            titleForm="Jumlah Hari Hujan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">September</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
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
            titleForm="Jumlah Hari Hujan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Oktober</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
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
            titleForm="Jumlah Hari Hujan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">November</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
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
            titleForm="Jumlah Hari Hujan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-4 text-primary-black-2">Desember</div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Curah Hujan (mm)"
            titleName="email"
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
            titleForm="Jumlah Hari Hujan"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="DD/MM/YYYY"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <div className="mt-6 grid w-full grid-cols-2 gap-2">
          <InputForm
            titleForm="Rata-rata/Bulan CH≥60 mm"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="automated"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="rata-rata HH dengan CH≥60 mm"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="automated"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="Rata-rata/Bulan CH<60 mm"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="automated"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
          <InputForm
            titleForm="rata-rata HH dengan CH<60 mm"
            titleName="email"
            // onChange={handleChange}
            type="text"
            // values={values.email}
            placeholder="automated"
            className={`${
              isError && 'border-primary-red-1 bg-primary-red-2'
            } w-full rounded border bg-white-2 py-3  px-4 placeholder:text-primary-gray-4`}
            iconEmail="true"
          />
        </div>
        <button className="mt-6 w-[100%] rounded-md bg-white p-4 text-sm font-bold text-primary-green outline outline-1">
          + Tambah Data Tahun Lainnya
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
export default FormLegalitas;
