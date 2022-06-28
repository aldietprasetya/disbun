import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const CustomSelect = ({
  valueSelected,
  defaultValue,
  children,
  noBorder,
  multipleValue,
  value,
  handleRemoveMultiple,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        !noBorder && 'border bg-[#F7F7F7] px-3'
      } relative w-full rounded  text-sm placeholder:text-sm`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          noBorder ? 'py-1' : 'py-2'
        } flex cursor-pointer items-center justify-between `}
      >
        <div className="flex gap-3">
          {multipleValue ? (
            value.length > 0 ? (
              value?.map((val, index) => {
                return (
                  <div
                    key={val.facility}
                    className="z-10 flex items-center gap-1 rounded bg-gray-200 py-1 px-2 text-xs text-primary-black"
                  >
                    {val.facility}
                    <Icon
                      onClick={() =>
                        handleRemoveMultiple({
                          id: val.dtwHealthProtocolFacilityId,
                          index,
                        })
                      }
                      icon="eva:close-outline"
                      className={``}
                    />
                  </div>
                );
              })
            ) : (
              defaultValue
            )
          ) : (
            <div
              className={`${valueSelected ? 'text-black' : 'text-[#9199A5]'}`}
            >
              {valueSelected ? valueSelected : defaultValue}
            </div>
          )}
        </div>
        <Icon
          icon="carbon:chevron-down"
          className={`${isOpen && 'rotate-180'} transition`}
        />
      </div>
      <div
        className={`absolute left-0 top-11 ${
          isOpen ? 'block' : 'hidden'
        } z-10 h-fit w-full rounded border bg-white`}
      >
        <div
          className="max-h-44 overflow-x-hidden overflow-y-scroll"
          onClick={() => setIsOpen(false)}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
