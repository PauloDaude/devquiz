import { useMemo } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

import countryList from 'react-select-country-list';

export const InputName = ({ label }) => {
  return (
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
        />
      </label>
    </div>
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

export const InputCountry = ({ label }) => {
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

InputName.propTypes = {
  label: PropTypes.string.isRequired
};

InputDate.propTypes = {
  label: PropTypes.string.isRequired
};

InputPhone.propTypes = {
  label: PropTypes.string.isRequired
};

InputCountry.propTypes = {
  label: PropTypes.string.isRequired
};
