import React, { useState } from 'react';
import MenuFloating from '../../MenuFloating';
import CustomLink from '../../CustomLink';
import { Icon } from '@iconify/react';
import TableFooter from 'src/components/table/TableFooter';

const TableElementDTW = ({ headerTable, data, handleOpenDetail }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(null);
  const handleMenuOpen = (id) => {
    if (menuIsOpen !== id) {
      setMenuIsOpen(id);
    } else {
      setMenuIsOpen(null);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="border-b bg-white">
            <tr className="bg-[#EEEEEE]">
              {headerTable?.map((header) => {
                return (
                  <th
                    key={header}
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium uppercase text-gray-900"
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
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}
                >
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-light text-gray-900">
                    {item.namaDTW}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-light text-gray-900">
                    {item.kotaKab}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-light text-gray-900">
                    {item.jenisPengajuan}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4 text-xs font-light text-gray-900">
                    <div className="w-fit rounded bg-[#E9EDF5] p-1">
                      {item.waktuPengajuan}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-light text-gray-900">
                    <div
                      className={`flex w-fit items-center gap-2 rounded py-1 px-2 ${
                        item.statusPengajuan === 'diajukan'
                          ? 'bg-[#FFF6E3] text-[#FEB423]'
                          : item.statusPengajuan === 'draft'
                          ? 'bg-[#E1EAFF] text-[#3267E3]'
                          : 'bg-[#ECF8F1] text-[#27AE60]'
                      }`}
                    >
                      <Icon icon="ci:dot-04-l" />
                      <div>{item.statusPengajuan}</div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs font-light text-gray-900 ">
                    <div className="relative">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleMenuOpen(item.id)}
                      >
                        <Icon
                          icon="carbon:overflow-menu-horizontal"
                          className="text-lg"
                        />
                      </div>
                      <MenuFloating isOpen={menuIsOpen === item.id}>
                        <div className="w-full px-2 py-3">
                          <div
                            className="mb-4 flex gap-3"
                            onClick={handleOpenDetail}
                          >
                            <img src="/icon/search-status.svg" alt="eyes" />
                            <div className="cursor-pointer">Lihat Detail</div>
                          </div>
                          <div className="flex w-full gap-3">
                            <img src="/icon/export.svg" alt="eyes" />
                            <div className="cursor-pointer">Export</div>
                          </div>
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
        <TableFooter />
      </div>
    </div>
  );
};

export default TableElementDTW;
