import { useMemo, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import countryList from 'react-select-country-list';

export const InputEmail = ({ label, value, onChange, onBlur, error }) => {
  return (
    <>
      <div className="flex flex-col w-full box-border h-14 bg-gray-bg px-4 py-2 rounded-2xl">
        <label
          className="text-xs text-gray-label focus-within:text-yellow-main"
          htmlFor="email"
        >
          {label}
          <input
            className="w-full h-auto bg-transparent text-black font-normal text-base"
            type="email"
            name="email"
            id="email"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </label>
      </div>
      {error && <p className="text-xs -mt-3 pl-4 text-red-500">{error}</p>}
    </>
  );
};

export const InputPassword = ({ label, value, onChange, onBlur, error }) => {
  const [view, setView] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full box-border h-14 bg-gray-bg px-4 py-2 rounded-2xl">
        <label
          className="flex flex-wrap text-xs text-gray-label focus-within:text-yellow-main"
          htmlFor="password"
        >
          <p className="w-full">{label}</p>
          <div className="flex justify-between w-full">
            <input
              className="w-full h-auto bg-transparent text-black font-normal text-base"
              type={view === false ? 'password' : 'text'}
              name="password"
              id="password"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            <div
              className="flex items-center justify-end ml-1 text-black cursor-pointer"
              onClick={() => setView(!view)}
            >
              {view === false ? (
                <FontAwesomeIcon icon={faEyeSlash} size="lg" />
              ) : (
                <FontAwesomeIcon icon={faEye} size="lg" />
              )}
            </div>
          </div>
        </label>
      </div>
      {error && <p className="text-xs -mt-3 pl-4 text-red-500">{error}</p>}
    </>
  );
};

export const InputConfirmPassword = ({
  label,
  value,
  onChange,
  onBlur,
  error
}) => {
  const [view, setView] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full box-border h-14 bg-gray-bg px-4 py-2 rounded-2xl">
        <label
          className="flex flex-wrap text-xs text-gray-label focus-within:text-yellow-main"
          htmlFor="confirmPassword"
        >
          <p className="w-full">{label}</p>
          <div className="flex justify-between w-full">
            <input
              className="w-full h-auto bg-transparent text-black font-normal text-base"
              type={view === false ? 'password' : 'text'}
              name="confirmPassword"
              id="confirPassword"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            <div
              className="flex items-center justify-end ml-1 text-black cursor-pointer"
              onClick={() => setView(!view)}
            >
              {view === false ? (
                <FontAwesomeIcon icon={faEyeSlash} size="lg" />
              ) : (
                <FontAwesomeIcon icon={faEye} size="lg" />
              )}
            </div>
          </div>
        </label>
      </div>
      {error && <p className="text-xs -mt-3 pl-4 text-red-500">{error}</p>}
    </>
  );
};

export const InputName = ({ label, value, onChange, onBlur, error }) => {
  return (
    <>
      <div className="flex flex-col w-full box-border h-14 bg-gray-bg px-4 py-2 rounded-2xl">
        <label
          className="text-xs text-gray-label focus-within:text-yellow-main"
          htmlFor="name"
        >
          {label}
          <input
            className="w-full h-auto bg-transparent text-black font-normal text-base"
            type="text"
            name="name"
            id="name"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </label>
      </div>
      {error && <p className="text-xs -mt-3 pl-4 text-red-500">{error}</p>}
    </>
  );
};

export const InputDate = ({ label }) => {
  return (
    <div className="flex flex-col w-full box-border h-14 bg-gray-bg px-4 py-2 rounded-2xl">
      <label
        className="text-xs text-gray-label focus-within:text-yellow-main"
        htmlFor="date"
      >
        {label}
        <InputMask
          className="w-full h-auto bg-transparent text-black font-normal text-base"
          type="text"
          name="date"
          mask="99/99/9999"
          maskChar="_"
          id="date"
        />
      </label>
    </div>
  );
};

export const InputPhone = ({ label }) => {
  return (
    <div className="flex flex-col w-full box-border h-14 bg-gray-bg px-4 py-2 rounded-2xl">
      <label
        className="text-xs text-gray-label focus-within:text-yellow-main"
        htmlFor="phone"
      >
        {label}
        <InputMask
          className="w-full h-auto bg-transparent text-black font-normal text-base"
          type="text"
          name="phone"
          mask="(99) 99999-9999"
          maskChar="_"
          id="phone"
        />
      </label>
    </div>
  );
};

export const InputCountry = ({ label, value, onChange, onBlur }) => {
  const options = useMemo(() => countryList().getLabels(), []);

  return (
    <div className="flex flex-col w-full box-border h-14 bg-gray-bg px-4 py-2 rounded-2xl">
      <label
        className="text-xs text-gray-label focus-within:text-yellow-main"
        htmlFor="country"
      >
        {label}
        <select
          className="w-full h-auto bg-transparent text-black font-normal text-base"
          name="country"
          id="country"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          <option value="Brazil">Brasil</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

InputEmail.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string
};

InputPassword.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string
};

InputConfirmPassword.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string
};

InputName.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string
};

InputDate.propTypes = {
  label: PropTypes.string.isRequired
};

InputPhone.propTypes = {
  label: PropTypes.string.isRequired
};

InputCountry.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};
