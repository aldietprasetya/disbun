import React from 'react';
import { Icon } from '@iconify/react';

const DrawerDetail = ({ isOpen, handleClose, handleOpenDetail }) => {
  return (
    <div
      className={`absolute top-0 right-0 z-50 h-[100vh] w-[480px] ${
        isOpen ? 'translate-x-0' : 'translate-x-[850px]'
      } border-l bg-white transition`}
    >
      <div className="p-7">
        <div className="flex items-center justify-between border-b pb-5">
          <div className="text-[16px] font-medium">Detail</div>
          <Icon
            onClick={handleClose}
            icon="ant-design:close-circle-twotone"
            className="cursor-pointer text-xl text-[#A0ACB7]"
          />
        </div>
        <div className="border-b py-3">
          <div className="mb-2 text-[#3267E3]">Detail Pengajuan</div>
          <div>
            <div className="mb-3 flex items-center">
              <div className="w-[130px] text-[#9E9E9E]">Nama DTW</div>
              <div className="font-medium">: Nama DTW yang diajukan 1</div>
            </div>
            <div className="mb-3 flex items-center">
              <div className="w-[130px] text-[#9E9E9E]">Kota/Kab</div>
              <div className="font-medium">: Kabupaten Bandung Barat</div>
            </div>
            <div className="mb-3 flex items-center">
              <div className="w-[130px] text-[#9E9E9E]">NIB</div>
              <div className="font-medium">: 0123456789</div>
            </div>

            <div className="mb-3 flex items-center">
              <div className="w-[130px] text-[#9E9E9E]">Jenis Pengajuan</div>
              <div className="font-medium">: Elemen DTW</div>
            </div>
            <div className="mb-3 flex items-center">
              <div className="w-[130px] text-[#9E9E9E]">Waktu Pengajuan</div>
              <div className="font-medium">
                :{' '}
                <span className="rounded-md bg-[#E9EDF5] py-1 px-2 text-xs font-light">
                  11:10:14 AM, Feb 10, 2022
                </span>
              </div>
            </div>
            <div className="mb-3 flex items-center">
              <div className="w-[130px] text-[#9E9E9E]">Status Pengajuan</div>
              <div className="flex font-medium">
                :{' '}
                <span
                  className={`ml-1 flex w-fit items-center gap-1 rounded-lg bg-[#FFF6E3] px-2 py-1 text-[#FEB423]`}
                >
                  <Icon icon="ci:dot-04-l" />
                  <div className="text-xs">Diajukan</div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b py-3">
          <div className="mb-2 text-[#3267E3]">Data Penunjang</div>
          <div>
            <table className="w-full">
              <thead className="border-b bg-white">
                <tr className="bg-[#EEEEEE] tracking-wide text-[#757575]">
                  <th
                    scope="col"
                    className="p-2 text-left text-xs font-medium uppercase"
                  >
                    Kebutuhan dasar
                  </th>
                  <th
                    scope="col"
                    className="text-center text-xs font-medium uppercase"
                  >
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className={`${'bg-white'}`}>
                  <td className="whitespace-nowrap p-2 text-xs font-medium text-gray-900">
                    Informasi Umum
                  </td>
                  <td className="whitespace-nowrap py-2 text-center text-xs font-light text-gray-900">
                    <button
                      onClick={() => handleOpenDetail('informasi-umum')}
                      className="rounded-md border border-primary-green px-5 py-1 text-primary-green"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
                <tr className={`${'bg-[#FAFAFA]'}`}>
                  <td className="whitespace-nowrap p-2 text-xs font-medium text-gray-900">
                    Atraksi
                  </td>
                  <td className="whitespace-nowrap py-2 text-center text-xs font-light text-gray-900">
                    <button
                      onClick={() => handleOpenDetail('atraksi')}
                      className="rounded-md border border-primary-green px-5 py-1 text-primary-green"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
                <tr className={`${'bg-white'}`}>
                  <td className="whitespace-nowrap p-2 text-xs font-medium text-gray-900">
                    Aksesibilitas
                  </td>
                  <td className="whitespace-nowrap py-2 text-center text-xs font-light text-gray-900">
                    <button
                      onClick={() => handleOpenDetail('aksebilitas')}
                      className="rounded-md border border-primary-green px-5 py-1 text-primary-green"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
                <tr className={`${'bg-[#FAFAFA]'}`}>
                  <td className="whitespace-nowrap p-2 text-xs font-medium text-gray-900">
                    Amenitas & Fasilitas
                  </td>
                  <td className="whitespace-nowrap py-2 text-center text-xs font-light text-gray-900">
                    <button
                      onClick={() => handleOpenDetail('amenitas')}
                      className="rounded-md border border-primary-green px-5 py-1 text-primary-green"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
                <tr className={`${'bg-white'}`}>
                  <td className="whitespace-nowrap p-2 text-xs font-medium text-gray-900">
                    Lain-lain
                  </td>
                  <td className="whitespace-nowrap py-2 text-center text-xs font-light text-gray-900">
                    <button
                      onClick={() => handleOpenDetail('lain-lain')}
                      className="rounded-md border border-primary-green px-5 py-1 text-primary-green"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerDetail;
