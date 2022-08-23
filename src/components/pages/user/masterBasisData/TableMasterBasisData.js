import React, { useState } from 'react';
import MenuFloating from 'src/components/MenuFloating';
import { Icon } from '@iconify/react';
import TableFooter from 'src/components/table/TableFooter';

const TableMasterBasisData = ({
  headerTable,
  data,
  dataMeta,
  currentPage,
  handleChangeLimit,
  handleNextPage,
  handlePrevPage,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(null);
  const handleMenuOpen = (id) => {
    if (menuIsOpen !== id) {
      setMenuIsOpen(id);
    } else {
      setMenuIsOpen(null);
    }
  };

  return (
    <div className="flex h-[70vh] flex-col border ">
      <div className="h-[530px] overflow-auto">
        <table className="min-w-full">
          <thead className="border-b bg-white">
            <tr className="bg-[#EEEEEE]">
              {headerTable?.map((header) => {
                return (
                  <th
                    key={header}
                    scope="col"
                    className=" px-6 py-3 text-left text-xs font-medium uppercase text-gray-900"
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
                  key={item.officialName}
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}
                >
                  <td className="whitespace-nowrap  px-6 py-3 text-xs font-light text-gray-900">
                    {item.officialName}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3 text-xs font-light text-gray-900">
                    {item.city}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3 text-xs font-light text-gray-900">
                    {item.nib}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3 text-xs font-light text-gray-900">
                    {item.submissionType}
                  </td>
                  <td className="whitespace-nowrap   px-6 py-3 text-xs font-light text-gray-900">
                    <div
                      className={`w-fit rounded ${
                        item.createdAt && 'bg-[#E9EDF5]'
                      } p-1`}
                    >
                      {item.createdAt ? item.createdAt : '-'}
                    </div>
                  </td>
                  <td className="flex justify-center whitespace-nowrap px-6 py-3 text-center text-xs font-light text-gray-900">
                    <div
                      className={`flex w-fit items-center gap-2
                      rounded py-1 px-2 text-[${item.status.color}]
                      bg-[${item.status.backgroundColor}]`}
                    >
                      <Icon icon="ci:dot-04-l" />
                      <div>{item.status.status}</div>
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-8 py-3 text-xs font-light text-gray-900 ">
                    <div className="relative">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleMenuOpen(item.dtwControlId)}
                      >
                        <Icon
                          icon="carbon:overflow-menu-horizontal"
                          className="text-lg"
                        />
                      </div>
                      <MenuFloating isOpen={menuIsOpen === item.dtwControlId}>
                        <div className="w-full px-2 py-3">
                          <div className="mb-4 flex gap-3">
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
      </div>
      {/* footer */}
      <TableFooter
        dataMeta={dataMeta}
        currentPage={currentPage}
        handleChangeLimit={handleChangeLimit}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
};

export default TableMasterBasisData;
