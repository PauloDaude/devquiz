import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ContentFooter = ({ page }) => {
  return (
    <div className="flex flex-1 w-full p-4 items-end justify-center">
      {page === 'welcome' ? (
        <div className="flex flex-col justify-center items-center my-4 gap-4 w-full">
          <button className="flex justify-center items-center bg-gray-bg w-full p-4 rounded-full font-bold shadow-gray">
            Já tenho uma conta
          </button>
          <button className="flex justify-center items-center bg-black text-white w-full p-4 rounded-full font-bold shadow-yellow gap-2">
            <FontAwesomeIcon icon={faBolt} style={{ color: '#ffffff' }} />
            Bora cadastrar
          </button>
        </div>
      ) : (
        <h1>das</h1>
      )}
    </div>
  );
};

ContentFooter.propTypes = {
  page: PropTypes.string
  // ou PropTypes.oneOf(['welcome', 'normal'])
};

export default ContentFooter;
