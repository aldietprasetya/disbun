import React, { useState } from 'react';
import MenuFloating from 'src/components/MenuFloating';
import { Icon } from '@iconify/react';
import TableFooter from 'src/components/table/TableFooter';
import table from 'src/styles/Table.module.scss'

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

  function changeData(e) {
    if (e == 'Diterima') {
      return <img className="m-auto" src="/images/master/table/icon/check.svg" />
    }
    if (e == 'Ditunda') {
      return <img className="m-auto" src="/images/master/table/icon/wait.svg" />
    }
    if (e == 'Belum Ada Data') {
      return <img className="m-auto" src="/images/master/table/icon/cross.svg" />
    }
  }

  return (
    <div className="flex min-h-[70vh] flex-col border ">
      <div className="overflow-auto bg-white">
        <table className={table.table}>
          <thead className={table.table__head}>
            <tr className={table.table__head_row}>
              {headerTable?.map((header) => {
                return (
                  <th
                    key={header}
                    scope="col"
                    className={table.table__head_col}
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
                  <td className={table.table__body_col}>
                    {item.perusahaan}
                  </td>
                  <td className={table.table__body_col}>
                    {item.kebun}
                  </td>
                  <td className={table.table__body_col}>
                    {item.kabKota}
                  </td>
                  <td className={table.table__body_col}>
                    {changeData(item.data1)}
                  </td>
                  <td className={table.table__body_col}>
                    {changeData(item.data2)}
                  </td>
                  <td className={table.table__body_col}>
                    {changeData(item.data3)}
                  </td>
                  <td className={table.table__body_col}>
                    {changeData(item.data4)}
                  </td>
                  <td className={table.table__body_col}>
                    {changeData(item.data5)}
                  </td>
                  <td className={table.table__body_col}>
                    {changeData(item.data6)}
                  </td>
                  <td className={table.table__body_col}>
                    {changeData(item.data7)}
                  </td>
                  <td className={table.table__body_col}>
                    {changeData(item.data8)}
                  </td>
                  <td className={table.table__body_col}>
                    {changeData(item.data9)}
                  </td>
                  <td className={table.table__body_col}>
                    {changeData(item.data10)}
                  </td>
                  <td className={table.table__body_col}>
                    {changeData(item.data11)}
                  </td>
                  <td className={table.table__body_col}>
                    {changeData(item.data12)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex items-center flex-row font-bold text-xs h-[56px] px-[30px] text-primary-gray-7">
          Keterangan:
          <img className="ml-5 mr-3" src="/images/master/table/icon/check.svg" /> Diterima
          <img className="ml-[33px] mr-3" src="/images/master/table/icon/wait.svg" /> Ditunda
          <img className="ml-[33px] mr-3" src="/images/master/table/icon/cross.svg" /> Belum Ada Data
        </div>
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
