import React from 'react';
import InputFileButton from '../../customInput/InputFileButton';
import TextField from '../../customInput/TextField';
import CustomSelect from '../../customInput/CustomSelect';
import { Icon } from '@iconify/react';

const FormLainnya = () => {
  return (
    <>
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Dokumentasi Foto Area Daya Tarik Wisata
        </div>
        <div className="mt-4">
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Foto Tampak Depan DTW
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">Foto Area Dalam DTW</div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Foto Fasilitas Pariwisata, Fasilitas Umum, dan Prasarana Umum
                  di DTW
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Foto Kegiatan Wisatawan di DTW
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
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Dokumentasi Video Promosi
        </div>
        <div className="mt-4">
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">Upload Video Promosi</div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format video: .MP4
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Sertifikasi Daya Tarik Wisata
        </div>
        <div className="mt-4">
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">Sertifikasi CHSE</div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Sertifikat Usaha Pariwisata
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Sertifikat Lainya (Contoh: SNI, Ecolabel)
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Keterlibatan Masyarakat di Daya Tarik Wisata
        </div>
        <div className="mt-4">
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">
              Data Keterlibatan Masyarakat di Daya Tarik Wisata
            </div>
            <textarea
              name="nib"
              rows={6}
              placeholder="Tulis keterlibatan masyarakat di Daya Tarik Wisata"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Foto masyarakat yang sedang beraktivitas di daya tarik wisata
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Dokumen bukti investasi masyarakat di daya tarik wisata
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Covid-19 Prevention di Area Daya Tarik Wisata
        </div>
        <div className="mt-4">
          <div className="mb-4">
            <div className="text-xs font-semibold">
              Informasi telah berafiliasi dengan Peduli Lindungi
            </div>
            <div className="mt-3 flex w-[250px] justify-between ">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-xs">Ada</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-xs">Tidak Ada</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-xs font-semibold">
              Tempat scan check in/out Peduli Lindungi di gerbang masuk-keluar
              DTW
            </div>
            <div className="mt-3 flex w-[250px] justify-between ">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-xs">Ada</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-xs">Tidak Ada</span>
              </div>
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Foto fasilitas protokol kesehatan
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format gambar: .jpg .jpeg .png.
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Foto fasilitas scan barcode PeduliLindungi
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format gambar: .jpg .jpeg .png.
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">
              Jumlah Papan Himbauan 3M di Area DTW
            </div>
            <TextField name="nib" placeholder="Tulis jumlah papan himbauan" />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">
              Lokasi Papan Himbauan 3M di Area DTW
            </div>
            <textarea
              name="nib"
              rows={6}
              placeholder="Tulis lokasi penempatan papan himbauan 3M"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">
              Jumlah Tempat Cuci Tangan Pakai Sabun/Container Hand Sanitizer
            </div>
            <TextField name="nib" placeholder="Tulis jumlah" />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">
              Lokasi penempatan Tempat Cuci Tangan Pakai Sabun/Container Hand
              Sanitizer
            </div>
            <textarea
              name="nib"
              rows={6}
              placeholder="Tulis lokasi penempatan tempat cuci tangan"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Letak DTW dalam dokumen rencana tata ruang dan rencana kepariwisataan
        </div>
        <div className="mt-4">
          <div className="mb-4">
            <div className="text-xs font-semibold">
              Lokasi DTW berada di peruntukan ruang untuk pariwisata, jasa,
              dan/atau perdagangan dalam RTRW kabupaten/kota
            </div>
            <div className="mt-3 flex w-[250px] justify-between ">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-xs">Ada</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-xs">Tidak Ada</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-xs font-semibold">
              Lokasi DTW berada di peruntukan ruang untuk pariwisata, jasa,
              dan/atau perdagangan dalam RDTR bagian wilayah kota/kab.
            </div>
            <div className="mt-3 flex w-[250px] justify-between ">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-xs">Ada</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-xs">Tidak Ada</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-xs font-semibold">
              Lokasi DTW berada di Kawasan Strategis Pariwisata dan Kawasan
              Pengembangan Pariwisata Provinsi Jawa Barat
            </div>
            <div className="mt-3 flex w-[250px] justify-between ">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-xs">Ada</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-xs">Tidak Ada</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="text-xs font-semibold">
              Lokasi DTW berada di Kawasan Strategis Pariwisata dan Kawasan
              Pengembangan Pariwisata Kabupaten/Kota
            </div>
            <div className="mt-3 flex w-[250px] justify-between ">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-xs">Ada</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <span className="text-xs">Tidak Ada</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">
              Rute Jalan Menuju Area DTW
            </div>
            <textarea
              name="nib"
              rows={6}
              placeholder="Tulis rute jalan menuju area DTW"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">Jumlah dan Kualitas SDM</div>
        <div className="mt-4">
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Jumlah SDM (Laki-laki)
              </div>
              <TextField name="longitude" placeholder="Tulis jumlah" />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Jumlah SDM (Perempuan)
              </div>
              <TextField name="latitude" placeholder="Tulis jumlah" />
            </div>
          </div>
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Latar Belakang Pendidikan (Pariwisata)
              </div>
              <TextField name="longitude" placeholder="Tulis jumlah" />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Latar Belakang Pendidikan (Non-Pariwisata)
              </div>
              <TextField name="latitude" placeholder="Tulis jumlah" />
            </div>
          </div>
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tingkat Pendidikan (SD)
              </div>
              <TextField name="longitude" placeholder="Tulis jumlah" />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tingkat Pendidikan (SMP)
              </div>
              <TextField name="latitude" placeholder="Tulis jumlah" />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tingkat Pendidikan (SMA)
              </div>
              <TextField name="latitude" placeholder="Tulis jumlah" />
            </div>
          </div>
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tingkat Pendidikan (D1-D3)
              </div>
              <TextField name="longitude" placeholder="Tulis jumlah" />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tingkat Pendidikan (D4/S1)
              </div>
              <TextField name="latitude" placeholder="Tulis jumlah" />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tingkat Pendidikan (S2-S3)
              </div>
              <TextField name="latitude" placeholder="Tulis jumlah" />
            </div>
          </div>
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Jumlah SDM Berlisensi/Tersertifikasi
              </div>
              <TextField name="longitude" placeholder="Tulis jumlah" />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Jumlah dan Kualitas SDM Lokal
        </div>
        <div className="mt-4">
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Jumlah SDM (Laki-laki)
              </div>
              <TextField name="longitude" placeholder="Tulis jumlah" />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Jumlah SDM (Perempuan)
              </div>
              <TextField name="latitude" placeholder="Tulis jumlah" />
            </div>
          </div>
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Latar Belakang Pendidikan (Pariwisata)
              </div>
              <TextField name="longitude" placeholder="Tulis jumlah" />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Latar Belakang Pendidikan (Non-Pariwisata)
              </div>
              <TextField name="latitude" placeholder="Tulis jumlah" />
            </div>
          </div>
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tingkat Pendidikan (SD)
              </div>
              <TextField name="longitude" placeholder="Tulis jumlah" />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tingkat Pendidikan (SMP)
              </div>
              <TextField name="latitude" placeholder="Tulis jumlah" />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tingkat Pendidikan (SMA)
              </div>
              <TextField name="latitude" placeholder="Tulis jumlah" />
            </div>
          </div>
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tingkat Pendidikan (D1-D3)
              </div>
              <TextField name="longitude" placeholder="Tulis jumlah" />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tingkat Pendidikan (D4/S1)
              </div>
              <TextField name="latitude" placeholder="Tulis jumlah" />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tingkat Pendidikan (S2-S3)
              </div>
              <TextField name="latitude" placeholder="Tulis jumlah" />
            </div>
          </div>
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Jumlah SDM Berlisensi/Tersertifikasi
              </div>
              <TextField name="longitude" placeholder="Tulis jumlah" />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Dokumen Kelengkapan Organisasi Pengelola
        </div>
        <div className="mt-4">
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">Profil Perusahaan</div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Legalisasi Pendirian Usaha
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">Struktur Organisasi</div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Deskripsi Tugas untuk Struktur Organisasi yang Terbentuk
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  Aturan Organisasi (AD/ART)
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Dokumen Standar Prosedur Operasional
        </div>
        <div className="mt-4">
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  SOP untuk Pemandu Wisata
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  SOP untuk Pengelola Kegiatan Wisata
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  SOP untuk Keselamatan dan Keamanan Wisatawan
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  SOP untuk Kebersihan dan Kesehatan
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">
                  SOP untuk Kelestarian Lingkungan
                </div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format dokumen: .jpg .jpeg .png .pdf
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Promosi Daya Tarik Wisata
        </div>
        <div className="mt-4">
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Website Resmi Daya Tarik Wisata
              </div>
              <TextField
                name="longitude"
                placeholder="Tulis domain website resmi DTW"
              />
            </div>
          </div>
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Media Sosial Daya Tarik Wisata
                <span className="ml-1 text-[#9E9E9E]">(Optional)</span>
              </div>
              <div>
                <div className="mb-4 flex gap-3">
                  <div className="flex w-full rounded border  bg-[#F7F7F7] ">
                    <div className="p-[3px]">
                      <img src="/icon/instagram.svg" />
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
                      placeholder="Link Instagram"
                    />
                  </div>
                  <div className="flex w-full rounded border  bg-[#F7F7F7] ">
                    <div className="p-[3px]">
                      <img src="/icon/tiktok.svg" />
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
                      placeholder="Link Tiktok"
                    />
                  </div>
                </div>
                <div className="mb-4 flex gap-3">
                  <div className="flex w-full rounded border  bg-[#F7F7F7] ">
                    <div className="p-[3px]">
                      <img src="/icon/youtube.svg" />
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
                      placeholder="Link Youtube"
                    />
                  </div>
                  <div className="flex w-full rounded border  bg-[#F7F7F7] ">
                    <div className="p-[3px]">
                      <img src="/icon/facebook.svg" />
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
                      placeholder="Link Facebook"
                    />
                  </div>
                </div>
                <div className="mb-4 flex gap-3">
                  <div className="flex w-full rounded border  bg-[#F7F7F7] ">
                    <div className="p-[3px]">
                      <img src="/icon/twitter.svg" />
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
                      placeholder="Link Twitter"
                    />
                  </div>
                  <div className="flex w-full rounded border  bg-[#F7F7F7] ">
                    <div className="p-[3px]">
                      <img src="/icon/tripadvisor.svg" />
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
                      placeholder="Link Tripadvisor"
                    />
                  </div>
                </div>
                <div className="mb-4 flex gap-3">
                  <div className="flex w-full rounded border  bg-[#F7F7F7] ">
                    <div className="p-[3px]">
                      <img src="/icon/traveloka.svg" />
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
                      placeholder="Link Traveloka"
                    />
                  </div>
                  <div className="flex w-full rounded border  bg-[#F7F7F7] ">
                    <div className="p-[3px]">
                      <img src="/icon/tiket.svg" />
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
                      placeholder="Link Tiket.com"
                    />
                  </div>
                </div>
                <div className="mb-4 flex gap-3">
                  <div className="flex w-full rounded border  bg-[#F7F7F7] ">
                    <div className="p-[3px]">
                      <img src="/icon/website.svg" />
                    </div>
                    <input
                      type="text"
                      className="w-full bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
                      placeholder="Link media sosial lainnya"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Prestasi Daya Tarik Wisata
        </div>
        <div className="mt-4">
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Nama Penghargaan</div>
              <TextField
                name="longitude"
                placeholder="Tulis nama penghargaan yang diraih DTW"
              />
            </div>
          </div>
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Instansi/Lembaga Pemberi Penghargaan
              </div>
              <TextField
                name="longitude"
                placeholder="Tulis nama instansi atau lembaga pemberi penghargaan"
              />
            </div>
          </div>
          <div className="mb-4 flex w-full items-center gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Jenis Penghargaan</div>
              <CustomSelect
                defaultValue="Pilih jenis penghargaan"
                listOption={['Sedang', 'Berkembang', 'Maju']}
              />
            </div>
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">
                Tahun Terbit Penghargaan
              </div>
              <CustomSelect
                defaultValue="Pilih tahun"
                listOption={['Sedang', 'Berkembang', 'Maju']}
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-b py-5">
        <div className="font-light text-[#3267E3]">
          Program Tanggung Jawab Sosial Perusahaan (CSR)
        </div>
        <div className="mt-4">
          <div className=" mb-4 flex w-full gap-3">
            <div className="w-full">
              <div className="mb-2 text-xs font-medium">Nama Kegiatan</div>
              <TextField name="longitude" placeholder="Tulis nama kegiatan" />
            </div>
          </div>
          <div className="mb-4 w-full">
            <div className="mb-2 text-xs font-medium">Jenis Kegiatan</div>
            <CustomSelect
              defaultValue="Pilih jenis kegiatan"
              listOption={['Sedang', 'Berkembang', 'Maju']}
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 text-xs font-medium">
              Sasaran organisasi/kelompok masyarakat yang mendapatkan program
              sosial
            </div>
            <textarea
              name="nib"
              rows={6}
              placeholder="Tulis sasaran organisasi/kelompok masyarakat yang mendapatkan program sosial"
              className="w-full rounded border bg-[#F7F7F7] py-2 px-3 text-sm placeholder:text-sm"
            />
          </div>
          <div className="mb-4 flex w-full gap-3">
            <div className="flex w-full items-center justify-between">
              <div>
                <div className=" text-xs font-medium">Foto Kegiatan Sosial</div>
                <div className="text-[11px] text-[#B3B3B3]">
                  Format gambar: .jpg .jpeg .png.
                </div>
              </div>
              <InputFileButton />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <button className="flex w-full justify-center rounded-md border border-primary-green py-3">
          <div className="flex items-center gap-1 text-xs font-semibold text-primary-green">
            <Icon icon="akar-icons:plus" />
            <div>Tambah Kegiatan</div>
          </div>
        </button>
      </div>
      <div className="mt-7 flex w-full justify-end">
        <button className="rounded-md bg-primary-green py-3 px-5 text-white">
          Simpan dan Lanjutkan
        </button>
      </div>
    </>
  );
};

export default FormLainnya;
