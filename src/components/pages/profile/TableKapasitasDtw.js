import React, { useState } from 'react';
import MenuFloating from '../../MenuFloating';
import { Icon } from '@iconify/react';
import TableFooter from 'src/components/table/TableFooter';
import { useRouter } from 'next/router';
import CustomSelect from 'src/components/customInput/CustomSelect';

const dtwCapacity = [
  {
    dtwCapacityLevelId: 1,
    level: 'Level 1',
    percentageCapacity: '100%',
  },
  {
    dtwCapacityLevelId: 2,
    level: 'Level 2',
    percentageCapacity: '75%',
  },
  {
    dtwCapacityLevelId: 3,
    level: 'Level 3',
    percentageCapacity: '50%',
  },
  {
    dtwCapacityLevelId: 4,
    level: 'Level 4',
    percentageCapacity: '25%',
  },
];

const TableKapasitasDtw = ({ headerTable, data, handleChangeCapacity }) => {
  return (
    <div className="flex h-[45vh] flex-col border ">
      <div className="h-[530px] overflow-auto">
        <table className="min-w-full">
          <thead className="border-b bg-white text-[#757575]">
            <tr className="bg-[#EEEEEE]">
              {headerTable?.map((header) => {
                return (
                  <th
                    key={header}
                    scope="col"
                    className=" px-6 py-3 text-left text-xs font-medium uppercase"
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
                  <td className="whitespace-nowrap  px-6 py-3 text-xs font-light text-gray-900">
                    {item.city.city}
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3 text-xs font-light text-gray-900">
                    <CustomSelect
                      valueSelected={item.dtwCapacityLevel.level}
                      defaultValue="Pilih Level"
                      noBorder
                    >
                      {dtwCapacity?.map((capacity, idx) => {
                        return (
                          <div
                            onClick={() =>
                              handleChangeCapacity({
                                dtwCapacityLevel: capacity,
                                city: item.city,
                                dtwCapacityId: item.dtwCapacityId,
                              })
                            }
                            key={idx}
                            className="w-full cursor-pointer px-3 py-2 hover:bg-[#F7F7F7]"
                          >
                            {capacity.level}
                          </div>
                        );
                      })}
                    </CustomSelect>
                  </td>
                  <td className="whitespace-nowrap  px-6 py-3 text-xs font-medium text-gray-900">
                    {item.dtwCapacityLevel.percentageCapacity || 'Not Set'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableKapasitasDtw;
