import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

export const InputEmail = ({ label }) => {
  return (
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
        />
      </label>
    </div>
  );
};

export const InputPassword = ({ label }) => {
  const [view, setView] = useState(false);

  return (
    <div className="flex flex-col w-full box-border h-14 bg-gray-bg px-4 py-2 rounded-2xl">
      <label
        className="flex flex-wrap text-xs text-gray-label focus-within:text-yellow-main"
        htmlFor="password"
      >
        <span className="w-full">{label}</span>
        <div className="flex justify-between w-full">
          <input
            className="w-full h-auto bg-transparent text-black font-normal text-base"
            type={view === false ? 'password' : 'text'}
            name="password"
            id="password"
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
  );
};

InputEmail.propTypes = {
  label: PropTypes.string.isRequired
};

InputPassword.propTypes = {
  label: PropTypes.string.isRequired
};
