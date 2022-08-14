import React from 'react';
import { Icon } from '@iconify/react';

function LoginForm({
  titleForm = '',
  titleName = '',
  onChange,
  onBlur,
  values,
  type,
  iconPassword = false,
  iconEmail = true,
  phoneNumber = false,
  onClick = () => {},
  icon = '',
  placeholder = '',
  className = '',
  classes = '',
  star = false,
  margin = 'mb-2',
}) {
  return (
    <>
      <div className="mt-6">
        <div className={`${margin} text-sm font-semibold`}>
          {titleForm}
          {star && <span className="text-red-400">*</span>}
        </div>
        {iconEmail && (
          <input
            name={titleName}
            onChange={onChange}
            onBlur={onBlur}
            value={values}
            type={type}
            placeholder={placeholder}
            className={`${className} h-[48px] placeholder:text-sm placeholder:font-normal border-transparent focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green`}
          />
        )}
        {iconPassword && (
          <div className={`${classes}`}>
            <input
              name={titleName}
              onChange={onChange}
              onBlur={onBlur}
              value={values}
              type={type}
              placeholder={placeholder}
              className={`${className} h-[48px] placeholder:text-sm placeholder:font-normal border-transparent focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green`}
            />
            <Icon
              onClick={onClick}
              icon={icon}
              style={{
                fontSize: '24px',
                color: 'rgba(158, 158, 158, 1)',
              }}
              className="ml-3 cursor-pointer"
            />
          </div>
        )}
        {phoneNumber && (
          <div className="flex gap-3">
            <div className="flex items-center justify-center rounded-md bg-white-2 py-3 px-4 text-sm bg-[#F7F7F7] border-[#EDEDED]">
              +62
            </div>
            <input
              name={titleName}
              onChange={onChange}
              onBlur={onBlur}
              value={values}
              type={type}
              placeholder={placeholder}
              className={`${className} h-[48px] placeholder:text-sm placeholder:font-normal border-transparent  focus:outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green`}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default LoginForm;
