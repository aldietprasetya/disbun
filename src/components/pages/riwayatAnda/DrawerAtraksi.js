import React from 'react';
import { Icon } from '@iconify/react';
import FormAtraksi from '../elementDTW/FormAtraksi';

const DrawerAtraksi = ({ isOpen, handleClose }) => {
  return (
    <div
      className={`absolute top-0 right-0 z-50 h-[100vh] w-[600px] overflow-auto ${
        isOpen ? '-translate-x-[480px]' : 'translate-x-[850px]'
      } no-scrollbar border-l bg-white transition`}
    >
      <div className="p-7">
        <div className="flex items-center justify-between border-b pb-5">
          <Icon
            onClick={handleClose}
            icon="akar-icons:circle-chevron-right"
            className="cursor-pointer text-xl text-[#A0ACB7]"
          />
        </div>
        <div className="mt-5">
          <div className="text-2xl font-semibold">Atraksi</div>
          <FormAtraksi />
        </div>
      </div>
    </div>
  );
};

export default DrawerAtraksi;
