import React, { useState } from 'react';
import MenuFloating from '../../MenuFloating';
import CustomLink from '../../CustomLink';

const TablePengajuan = ({ headerTable, data }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(null);
  const handleMenuOpen = (id) => {
    if (menuIsOpen) {
      setMenuIsOpen(null);
    } else {
      setMenuIsOpen(id);
    }
  };

  const renderStatusPengajuan = (status) => {
    switch (status) {
      case 'ditolak':
        return (
          <div className="flex items-center justify-center rounded-lg bg-[#EB5757] p-1 text-xs text-white">
            Ditolak
          </div>
        );
      case 'disetujui':
        return (
          <div className="flex items-center justify-center rounded-lg bg-[#048577] p-1 text-xs text-white">
            Disetujui
          </div>
        );
      case 'pending':
        return (
          <div className="flex items-center justify-center rounded-lg bg-[#868686] p-1 text-xs text-white">
            Pending
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-lg">
        <table className="min-w-full">
          <thead className="border-b bg-white">
            <tr>
              {headerTable?.map((header) => {
                return (
                  <th
                    key={header}
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#E2EFED]'
                  } border-b`}
                >
                  <td className="whitespace-nowrap0 px-6 py-4 text-sm font-light text-gray-900">
                    {item.namaDTW}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {item.kotaKab}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {item.nib}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {item.jenisDTW}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    {`${item.namaPengelola.slice(0, 16)}...`}
                  </td>
                  <td className="whitespace-nowrap px-14 py-4 text-sm font-light text-gray-900">
                    {renderStatusPengajuan(item.statusPengajuan)}
                  </td>
                  <td className="whitespace-nowrap px-8 py-4 text-sm font-light text-gray-900 ">
                    <div className="relative">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleMenuOpen(item.id)}
                      >
                        <img src="/icon/tri-dot.svg" alt="icon-action" />
                      </div>
                      <MenuFloating isOpen={menuIsOpen === item.id}>
                        <div className="flex gap-2 border-b py-2 px-4">
                          <img src="/icon/eyes-icon.svg" alt="eyes" />
                          <CustomLink href="/manajemen-basis-data/koleksi-dtw/lihat-detail">
                            <div className="cursor-pointer">Lihat Detail</div>
                          </CustomLink>
                        </div>
                        <div className="flex gap-2 py-2 px-4">
                          <img src="/icon/edit-icon.svg" alt="eyes" />
                          <div className="cursor-pointer">Ubah data</div>
                        </div>
                      </MenuFloating>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* footer */}
        <div className="flex items-center justify-between bg-white p-6">
          {/* left */}
          <div className="flex items-center gap-2">
            <div className="text-xs">Menampilkan</div>
            <div>
              <select className="form-select  appearance-none rounded border px-3 py-1 text-xs focus:outline-none">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="text-xs">dari 4 baris</div>
          </div>
          {/* right */}
          <div className="flex items-center">
            <div className="mr-3 text-xs">Prev</div>
            <div className="flex gap-[1px]">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-[#038575] text-white">
                <div className="text-xs ">1</div>
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-[#038575] text-white">
                <div className="text-xs ">2</div>
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full border bg-[#038575] text-white">
                <div className="text-xs ">3</div>
              </div>
            </div>
            <div className="ml-3 text-xs">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePengajuan;
