import React, { useState } from 'react';

const TabOption = ({ isActive, title, handleChangeTab }) => {
  return (
    <div
      onClick={handleChangeTab}
      className={`${
        isActive
          ? 'border-[#048577]  bg-emerald-50 text-[#048577]'
          : 'border-[#818282] bg-white text-[#818282]'
      } flex w-36 cursor-pointer items-center justify-center rounded-md border p-2 text-xs hover:bg-emerald-50`}
    >
      <div>{title}</div>
    </div>
  );
};

const Tabs = ({ optionTabs, handleChangeTab, tabSelected }) => {
  return (
    <div className="mt-3 flex gap-9 py-3 px-6">
      {optionTabs?.map((opt) => {
        return (
          <TabOption
            isActive={tabSelected === opt.id}
            key={opt.id}
            title={opt.title}
            handleChangeTab={() => handleChangeTab(opt.id)}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
