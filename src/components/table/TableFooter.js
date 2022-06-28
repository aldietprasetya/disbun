import React from 'react';
import { Icon } from '@iconify/react';

const TableFooter = ({
  dataMeta,
  currentPage,
  handleChangeLimit,
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <div className="flex items-center justify-between bg-white p-6">
      {/* left */}
      <div className="flex items-center gap-2">
        {dataMeta && (
          <div className="text-xs">
            {dataMeta?.page}-{dataMeta?.limit * dataMeta?.page} of{' '}
            {dataMeta?.total}
          </div>
        )}
      </div>
      {/* right */}
      <div className="flex gap-4">
        <div className="flex items-center text-[#687182]">
          <div className="mr-1 text-xs">Rows per page:</div>
          <select
            onChange={(e) => handleChangeLimit(e)}
            className="text-xs focus:outline-none"
          >
            <option className="text-xs" value={10}>
              10
            </option>
            <option className="text-xs" value={20}>
              20
            </option>
            <option className="text-xs" value={30}>
              30
            </option>
            <option className="text-xs" value={40}>
              40
            </option>
            <option className="text-xs" value={50}>
              50
            </option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <div
            onClick={handlePrevPage}
            className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border hover:bg-gray-100"
          >
            <Icon icon="akar-icons:chevron-left" className="text-xs" />
          </div>
          <div>
            <span className="text-xs">{currentPage}</span>
            <span className="mx-1 text-xs">/</span>
            <span className="text-xs">
              {Math.ceil(dataMeta?.total / dataMeta?.limit)}
            </span>
          </div>
          <div
            onClick={handleNextPage}
            className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border hover:bg-gray-100"
          >
            <Icon icon="akar-icons:chevron-right" className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableFooter;
