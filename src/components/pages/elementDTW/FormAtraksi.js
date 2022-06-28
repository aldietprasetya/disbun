import React from 'react';
import CustomSelect from '../../customInput/CustomSelect';
import TextField from '../../customInput/TextField';
import InputFileButton from '../../customInput/InputFileButton';

const FormAtraksi = () => {
  return (
    <>
      <div className="py-5">
        <div className="mt-4">
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">Jenis Atraksi</div>
            <CustomSelect
              defaultValue="Pilih jenis atraksi"
              listOption={['atraksi a', 'atraksi b']}
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">Potensi</div>
            <TextField name="potensiDtw" placeholder="Tulis potensi DTW" />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">Kondisi</div>
            <textarea
              name="nib"
              type="text"
              rows={6}
              placeholder="Tulis detail kondisi DTW"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">Tingkat Keunikan</div>
            <CustomSelect
              defaultValue="Pilih tingkat keunikan"
              listOption={['atraksi a', 'atraksi b']}
            />
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className=" text-xs font-medium">Kapasitas Pengunjung</div>
              <div className="mb-2 text-[11px] text-[#B3B3B3]">
                Pisah dengan ";" (semicolon)
              </div>
              <textarea
                name="nib"
                type="text"
                rows={6}
                placeholder="Ex: Area situs <100 orang; luar situs >1000 orang"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
            <div className="w-full">
              <div className=" text-xs font-medium">Rata-rata Pengunjung</div>
              <div className="mb-2 text-[11px] text-[#B3B3B3]">
                Pisah dengan ";" (semicolon)
              </div>
              <textarea
                name="nib"
                type="text"
                rows={6}
                placeholder="Ex: Area situs <100 orang; luar situs >1000 orang"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className=" text-xs font-medium">Informasi Tiket Masuk</div>
              <div className="mb-2 text-[11px] text-[#B3B3B3]">
                Pisah dengan ";" (semicolon)
              </div>
              <textarea
                name="nib"
                type="text"
                rows={6}
                placeholder="Ex: Weekday: Rp4.000/org; Weekend: Rp6000/org; Perahu: Rp10.000"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
            <div className="w-full">
              <div className=" text-xs font-medium">Profil Pengunjung</div>
              <div className="mb-2 text-[11px] text-[#B3B3B3]">
                Pisah dengan ";" (semicolon)
              </div>
              <textarea
                name="nib"
                type="text"
                rows={6}
                placeholder="Ex. Kategori: Jamaah, Kel Organisasi; Asal: Dominan dari Jawa Timur dan Jawa Tengah; Aktifitas: Ziarah, Ritual, Tawasulan"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Foto Wisatawan dan Nomor Kendaraan Yang di gunakan wisatawan.
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Jam Operasi</div>
              <div className="flex w-full gap-3">
                <TextField name="jamMulai" placeholder="Dimulai" />
                <TextField name="jamSelesai" placeholder="Selesai" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">Paket Wisata</div>
            <textarea
              name="nib"
              rows={6}
              placeholder="Tulis detail paket wisata"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">
              Program / Kegiatan Unggulan di Daya Tarik Wisata
            </div>
            <textarea
              name="nib"
              rows={6}
              placeholder="Tulis detail kondisi DTW"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Foto Wisatawan Sedang Melakukan Kegiatan Wisata
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png
                </div>
              </div>
              <InputFileButton />
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

export default FormAtraksi;
