import PropTypes from 'prop-types';

const ContentFooter = ({ children, double = 'false' }) => {
  return (
    <div className="flex flex-1 w-full p-4 items-end sm:items-start justify-center m-auto">
      {double === 'true' ? (
        <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:gap-4">
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

ContentFooter.propTypes = {
  double: PropTypes.oneOf(['true', 'false']),
  children: PropTypes.node
};

export default ContentFooter;
