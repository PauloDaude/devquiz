import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Header = ({ page = null }) => {
  return (
    <div>
      <nav className="flex p-4 items-center mx-auto box-border h-14">
        <div className="w-4 h-auto">
          {page ? '' : <FontAwesomeIcon icon={faArrowLeft} />}
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  page: PropTypes.string // ou PropTypes.oneOf(['welcome', 'normal'])
};

export default Header;
