import PropTypes from 'prop-types';

const ContentMain = props => {
  return (
    <div className="flex flex-1 w-full h-full p-4 items-start justify-center">
      {props.children}
    </div>
  );
};

ContentMain.propTypes = {
  children: PropTypes.node
};

export default ContentMain;
