import PropTypes from 'prop-types';

const ContentFooter = ({ children, double = 'false' }) => {
  return (
    <div className="flex flex-1 w-full p-4 items-end justify-center">
      {double === 'true' ? (
        <div className="flex flex-col justify-center items-center  w-full">
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
