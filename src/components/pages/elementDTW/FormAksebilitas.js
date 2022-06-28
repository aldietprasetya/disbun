import React from 'react';
import TextField from '../../customInput/TextField';

const FormAksebilitas = () => {
  return (
    <>
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Detail Aksebilitas Menuju Daya Tarik Wisata
        </div>
        <div className="mt-4">
          <div className="mb-4">
            <div className=" text-xs font-medium">
              Jarak Lokasi dari Kota/Kabupaten Terdekat
            </div>
            <div className="mb-2 text-[11px] text-[#B3B3B3]">
              Pisah dengan ";" (semicolon)
            </div>
            <textarea
              name="nib"
              type="text"
              rows={6}
              placeholder="Ex: Ibukota Prov: 99 km (2 jam 40 menit); Kota Terdekat: Tasikmalaya, 37 km (1 jam); Keramaian Terdekat: Panjalu, area wisata"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
          <div className="mb-4">
            <div className=" text-xs font-medium">Destinasi Terdekat</div>
            <div className="mb-2 text-[11px] text-[#B3B3B3]">
              Pisah dengan ";" (semicolon)
            </div>
            <textarea
              name="nib"
              type="text"
              rows={6}
              placeholder="Ex: Ibukota Prov: 99 km (2 jam 40 menit); Kota Terdekat: Tasikmalaya, 37 km (1 jam); Keramaian Terdekat: Panjalu, area wisata"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">Transportasi Publik</div>
            <TextField
              name="transportasiPublik"
              placeholder="Tulis transportasi publik menuju DTW"
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">
              Status Jalan Menuju DTW
            </div>
            <TextField
              name="transportasiPublik"
              placeholder="Ex: Jln. Provinsi"
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">Petunjuk Jalan</div>
            <textarea
              name="nib"
              type="text"
              rows={6}
              placeholder="Ex: Ada beberapa di jalan utama"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">Tingkat Keunikan</div>
            <input
              name="nib"
              type="text"
              placeholder="Pilih tingkat keunikan"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Kapasitas Pengunjung
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
              <div className="mb-2 text-xs font-medium">
                Rata-Rata Pengunjung
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
              <div className="mb-2 text-xs font-medium">Status Wisata Desa</div>
              <input
                name="nib"
                type="text"
                placeholder="Pilih status desa wisata"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Kategori Fasilitas Penunjang DTW
              </div>
              <input
                name="nib"
                type="text"
                placeholder="Pilih kategori"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
          </div>
          <div>
            <div className="mb-2 text-xs font-medium">
              Deskripsi Daya Tarik Wisata
            </div>
            <textarea
              name="nib"
              rows={6}
              placeholder="Tulis deskripsi tentang DTW"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">Letak Geografis</div>
        <div className="mt-4">
          <div className=" flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Longitude</div>
              <input
                name="nib"
                type="text"
                placeholder="Longitude"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Latitude</div>
              <input
                name="nib"
                type="text"
                placeholder="Latitude"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Kategori Letak Geografis
              </div>
              <input
                name="nib"
                type="text"
                placeholder="Kategori letak geografis"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">Lokasi Administratif</div>
        <div className="mt-4">
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Kota/Kabupaten</div>
              <input
                name="nib"
                type="text"
                placeholder="Masukan nib anda"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Kecamatan</div>
              <input
                name="nib"
                type="text"
                placeholder="Masukan nib anda"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Kelurahan/Desa</div>
              <input
                name="nib"
                type="text"
                placeholder="Masukan nib anda"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
          </div>
          <div>
            <div className="mb-2 text-xs font-medium">Alamat</div>
            <textarea
              name="nib"
              rows={6}
              placeholder="Masukan nib anda"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Identitas Pengelola Daya Tarik Wisata
        </div>
        <div className="mt-4">
          <div className=" flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Nama Pengelola</div>
              <input
                name="nib"
                type="text"
                placeholder="Masukan nib anda"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Nomor Telpon</div>
              <input
                name="nib"
                type="text"
                placeholder="Masukan nib anda"
                className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
              />
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

export default FormAksebilitas;
