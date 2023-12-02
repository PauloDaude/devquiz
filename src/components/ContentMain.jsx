import welcome from '../assets/welcome.svg';
import PropTypes from 'prop-types';

const ContentMain = ({ page }) => {
  return (
    <div className="flex flex-1 w-full p-4 items-center justify-center">
      {page === 'welcome' ? (
        <div className="flex">
          <img src={welcome} />
        </div>
      ) : (
        <h1>das</h1>
      )}
    </div>
  );
};

ContentMain.propTypes = {
  page: PropTypes.string
  // ou PropTypes.oneOf(['welcome', 'normal'])
};

export default ContentMain;
