import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

function useOutside({ ref, callbacks }) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callbacks();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

const TextWithSelect = ({
  valueSelected,
  defaultValue,
  children,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnChange, setIsOnChange] = useState(false);

  const wrapperRef = useRef(null);
  useOutside({ ref: wrapperRef, callbacks: () => setIsOpen(false) });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setIsOnChange(false);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [valueSelected]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full rounded border bg-[#F7F7F7] px-3 text-sm placeholder:text-sm"
    >
      <div className="flex cursor-pointer items-center justify-between py-2">
        <input
          type="text"
          className="w-full bg-[#F7F7F7] focus:outline-none"
          placeholder={defaultValue}
          value={valueSelected}
          onChange={(e) => {
            onChange(e);
            setIsOnChange(true);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        <Icon
          icon="carbon:chevron-down"
          className={`${isOpen && 'rotate-180'} transition`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {children && (
        <div
          className={`absolute left-0 top-11 ${
            isOpen || isOnChange ? 'block' : 'hidden'
          } z-10 h-fit w-full rounded border bg-white`}
        >
          <div
            className="max-h-44 overflow-x-hidden overflow-y-scroll"
            onClick={() => setIsOpen(false)}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextWithSelect;
