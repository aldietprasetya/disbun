import React from 'react';
import TextField from 'src/components/customInput/TextField';
import CustomSelect from 'src/components/customInput/CustomSelect';

const FormPembangunan = () => {
  return (
    <>
      <div className="py-5">
        <div className="font-light text-[#3267E3]">
          Detail Rencana Pembangunan
        </div>
        <div className="mt-4">
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">NIB</div>
            <TextField name="nib" placeholder="Masukan nib anda" />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">Nama Pemilik DTW</div>
            <TextField name="nib" placeholder="Tulis nama pemilik DTW" />
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Status Kepemilikan Lahan
              </div>
              <CustomSelect
                defaultValue="Pilih kategori"
                listOption={['Sedang', 'Berkembang', 'Maju']}
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Luas Wilayah DTW (Dalam Hektar)
              </div>
              <TextField name="nib" placeholder="Tulis nama pemilik DTW" />
            </div>
          </div>
          <div className="">
            <div className="mb-2 text-xs font-medium">Status Pengelolaan</div>
            <CustomSelect
              defaultValue="Pilih status pengelolaan"
              listOption={['Sedang', 'Berkembang', 'Maju']}
            />
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

export default FormPembangunan;
