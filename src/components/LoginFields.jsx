import PropTypes from 'prop-types';

export const InputEmail = ({ label }) => {
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

InputEmail.propTypes = {
  label: PropTypes.string.isRequired
};
