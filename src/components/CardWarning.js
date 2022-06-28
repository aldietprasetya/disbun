import React from 'react';
import { Icon } from '@iconify/react';

const CardWarning = ({ text }) => {
  return (
    <div className="relative mt-4 flex w-full items-start gap-2 overflow-hidden rounded bg-[#F0F3FF] px-2 py-3">
      <div className="mt-[2px] ">
        <Icon icon="dashicons:warning" className="text-lg text-[#3267E3]" />
      </div>
      <div className="text-sm">
        <div className="text-[#3267E3]">Penting!</div>
        <div className="mt-1 text-[#404040]">{text}</div>
      </div>
      <div className="absolute -right-16 -top-5">
        <img src="/icon/warning-icon.svg" className="w-36 opacity-10" />
      </div>
    </div>
  );
};

export default CardWarning;
