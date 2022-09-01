import React, { useState } from 'react';
import MenuFloating from 'src/components/MenuFloating';
import { Icon } from '@iconify/react';
import TableFooter from 'src/components/table/TableFooter';
import table from 'src/styles/Table.module.scss'
import Page from 'src/components/Page';
import eventBus from "src/state";

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

  const [detailIsOpen, setDetailIsOpen] = useState(false);
  const handleDetailOpen = (item) => {
    eventBus.dispatch("detilApply", item);
    setDetailIsOpen(true);
    setTimeout(() => {
      setMenuIsOpen(false);
    },100)
  };

  function changeState(e) {
    if (e == 'Diajukan') {
      return <div className="bg-[#FEF6F6] inline-flex px-[8px] py-[2px] items-center justify-center rounded text-[#EE5C52] font-medium text-xs">
        <span className="w-[6px] h-[6px] bg-[#EE5C52] mr-1.5 rounded-sm"></span>{e}
      </div>
    }
    if (e == 'Ditunda') {
      return <div className="bg-[#FFF6E3] inline-flex px-[8px] py-[2px] items-center justify-center rounded text-[#FCBD0F] font-medium text-xs">
        <span className="w-[6px] h-[6px] bg-[#FCBD0F] mr-1.5 rounded-sm"></span>{e}
      </div>
    }
    if (e == 'Diterima') {
      return <div className="bg-[#ECF8F1] inline-flex px-[8px] py-[2px] items-center justify-center rounded text-[#27AE60] font-medium text-xs">
        <span className="w-[6px] h-[6px] bg-[#27AE60] mr-1.5 rounded-sm"></span>{e}
      </div>
    }
  }

  return (
    <div className="flex min-h-[70vh] flex-col border ">
      <div className="bg-white">
        <table className={table.table}>
          <thead className={table.table__head}>
            <tr className={table.table__head_row}>
              {headerTable?.map((header, index) => {
                return (
                  <th
                    key={index}
                    scope="col"
                    className={`${table.table__head_col} ${table.table__head_col_action} ${table.table__head_col_statcenter}`}
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
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}` }
                >
                  <td className={`${table.table__body_col}`}>
                    {item.perusahaan}
                  </td>
                  <td className={`${table.table__body_col}`}>
                    {item.kebun}
                  </td>
                  <td className={`${table.table__body_col}`}>
                    {item.kabKota}
                  </td>
                  <td className={`${table.table__body_col} text-left`}>
                    {item.jenis}
                  </td>
                  <td className={`${table.table__body_col} text-left`}>
                    <span className="bg-[#E9EDF5] rounded px-[10px] py-[2px]">{item.date}</span>
                  </td>
                  <td className={`${table.table__body_col}`}>
                    {changeState(item.status)}
                  </td>
                  <td className={`${table.table__body_col} text-left`}>
                    {item.skor}
                  </td>

                  <td className="whitespace-nowrap px-8 py-3 text-xs font-light text-gray-900 ">
                    <div className="relative">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleMenuOpen(index)}
                      >
                        <Icon
                          icon="carbon:overflow-menu-horizontal"
                          className="text-lg"
                        />
                      </div>
                      <MenuFloating isOpen={menuIsOpen === index}>
                        <div className="w-full px-2 py-3">
                          <div className="mb-4 flex gap-3">
                            <img src="/icon/search-status.svg" alt="eyes" />
                            <div className="cursor-pointer"
                              onClick={() => handleDetailOpen(item)}
                            >Lihat Detail</div>
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
