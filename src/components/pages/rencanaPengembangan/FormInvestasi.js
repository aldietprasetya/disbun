import React from 'react';
import TextField from 'src/components/customInput/TextField';
import CustomSelect from 'src/components/customInput/CustomSelect';

const FormInvestasi = () => {
  return (
    <>
      <div className="py-5">
        <div className="font-light text-[#3267E3]">
          Detail Rencana Investasi
        </div>
        <div className="mt-4">
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">
              Rencana Pengembangan Investasi
            </div>
            <TextField
              name="nib"
              placeholder="Isi Judul Rencana Pengembangan Investasi DTW"
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">
              Deskripsi Pengembangan
            </div>
            <textarea
              name="nib"
              rows={6}
              placeholder="Tulis rencana pengembangan"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
          <div className="mb-4 w-full">
            <div className="mb-2 text-xs font-medium">
              Kebutuhan Modal Tetap
            </div>
            <div className="flex gap-3">
              <div className="flex items-center justify-center rounded-md border bg-[#F7F7F7] py-2 px-3 text-sm">
                Rp
              </div>
              <TextField name="phonePengelola" placeholder="Masukan Nominal" />
            </div>
          </div>

          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Rencana Pembebasan Lahan
              </div>
              <div className="flex gap-3">
                <div className="flex items-center justify-center rounded-md border bg-[#F7F7F7] py-2 px-3 text-sm">
                  Rp
                </div>
                <TextField
                  name="phonePengelola"
                  placeholder="Masukan Nominal"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Rencana Pembangunan Bangunan
              </div>
              <div className="flex gap-3">
                <div className="flex items-center justify-center rounded-md border bg-[#F7F7F7] py-2 px-3 text-sm">
                  Rp
                </div>
                <TextField
                  name="phonePengelola"
                  placeholder="Masukan Nominal"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Rencana Penyediaan Sarpras
              </div>
              <div className="flex gap-3">
                <div className="flex items-center justify-center rounded-md border bg-[#F7F7F7] py-2 px-3 text-sm">
                  Rp
                </div>
                <TextField
                  name="phonePengelola"
                  placeholder="Masukan Nominal"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Rencana Pembiayaan Lain-lain
              </div>
              <div className="flex gap-3">
                <div className="flex items-center justify-center rounded-md border bg-[#F7F7F7] py-2 px-3 text-sm">
                  Rp
                </div>
                <TextField
                  name="phonePengelola"
                  placeholder="Masukan Nominal"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 w-full">
            <div className="mb-2 text-xs font-medium">
              Kebutuhan Modal Kerja
            </div>
            <div className="flex gap-3">
              <div className="flex items-center justify-center rounded-md border bg-[#F7F7F7] py-2 px-3 text-sm">
                Rp
              </div>
              <TextField name="phonePengelola" placeholder="Masukan Nominal" />
            </div>
          </div>
          <div className="mb-4 w-full">
            <div className="mb-2 text-xs font-medium">
              Kebutuhan Modal Kerja (1 Turn Over)
            </div>
            <div className="flex gap-3">
              <div className="flex items-center justify-center rounded-md border bg-[#F7F7F7] py-2 px-3 text-sm">
                Rp
              </div>
              <TextField name="phonePengelola" placeholder="Masukan Nominal" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7 flex w-full justify-end">
        <button className="rounded-md bg-primary-green py-3 px-5 text-white">
          Simpan dan Lanjutkan
        </button>
      </div>
    </>
  );
};

export default FormInvestasi;
