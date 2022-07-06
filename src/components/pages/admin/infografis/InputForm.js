import React from 'react';
import { Icon } from '@iconify/react';

function InputForm({
  titleForm = '',
  titleName = '',
  onChange,
  onBlur,
  values,
  type,
  iconPassword = '',
  iconEmail = '',
  phoneNumber = '',
  onClick = () => {},
  icon = '',
  placeholder = '',
  className = '',
  classes = '',
  star = false,
  margin = 'mb-2',
  textArea = '',
  selectionArea = '',
  radioName = '',
  radioId = '',
  radioValue = '',
  label = '',
  radioButton = '',
  id = '',
}) {
  return (
    <>
      <div>
        <div className={`${margin} text-sm font-semibold text-black`}>
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
            className={`${className} placeholder:text-sm placeholder:font-normal`}
            id={id}
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
              className={`${className} placeholder:text-sm placeholder:font-normal`}
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
            <div className="flex items-center justify-center rounded-md bg-white-2 py-3 px-4 text-sm">
              +62
            </div>
            <input
              name={titleName}
              onChange={onChange}
              onBlur={onBlur}
              value={values}
              type={type}
              placeholder={placeholder}
              className={`${className} placeholder:text-sm placeholder:font-normal`}
            />
          </div>
        )}
        {textArea && (
          <textarea className={`${className} placeholder:text-sm placeholder:font-normal`} placeholder={placeholder} />
        )}
        {selectionArea && (
          <select
            className="
              form-select
              m-0
              block
              w-full
              rounded-md
              border-white-2
              border-solid
              bg-white-2 bg-clip-padding
              bg-no-repeat px-4 py-3
              leading-4
              text-sm
              text-gray-400
              transition
              ease-in-out
              h-[48px]
              cursor-pointer
              placeholder:text-primary-gray-4
              focus:border-primary-green border focus:bg-white focus:text-gray-700 focus:outline-none
            "
            aria-label="Default select example"
            onChange={onChange}
          >
            <option disabled selected hidden>
              {placeholder}
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        )}
        {radioButton && (
          <>
            <input
              className="form-radio mr-2 h-4 w-4 rounded-full border border-primary-gray-3 text-primary-green"
              type="radio"
              name={radioName}
              id={radioId}
              value={radioValue}
              onClick={onClick}
            />
            <label className="">{label}</label>
          </>
        )}
        {/* {textArea && (
          <textarea>S</textarea>
        )} */}
      </div>
    </>
  );
}

export default InputForm;
