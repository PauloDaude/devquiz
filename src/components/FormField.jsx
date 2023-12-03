import { useState } from 'react';
import PropTypes from 'prop-types';

const FormField = ({ label, type }) => {
  const [date, setDate] = useState();
  const dateChangeHandler = event => {
    const newValue = event.target.value;
    const numericValue = newValue.replace(/\D/g, '');

    if (numericValue.length >= 0 && numericValue.length <= 8) {
      let formattedDate = '';
      for (let i = 0; i < numericValue.length; i++) {
        if (i === 2 || i === 4) {
          formattedDate += '/';
        }
        formattedDate += numericValue[i];
      }
      setDate(formattedDate);
    }
  };

  return (
    <form className="w-full" onSubmit="">
      <div className="flex flex-col w-full box-border h-14 bg-gray-bg px-4 py-2 rounded-2xl">
        <label className="text-xs text-gray-label" htmlFor="input">
          {label}
          {type === 'date' ? (
            <input
              className="w-full h-auto bg-transparent text-black font-normal text-base"
              type="text"
              name="input"
              value={date}
              onChange={dateChangeHandler}
            />
          ) : (
            <input
              className="w-full h-auto bg-transparent text-black font-normal text-base"
              type={type}
              name="input"
            />
          )}
        </label>
      </div>
    </form>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'date', 'number', 'select', 'password'])
};

export default FormField;
