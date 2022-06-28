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
            className={`${className}`}
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
              className={`${className}`}
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
            <div className="flex items-center justify-center rounded-md border bg-white-2 py-3 px-4 text-sm">
              +62
            </div>
            <input
              name={titleName}
              onChange={onChange}
              onBlur={onBlur}
              value={values}
              type={type}
              placeholder={placeholder}
              className={`${className}`}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default LoginForm;
