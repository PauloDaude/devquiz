import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ContentNavigation = ({ page }) => {
  return (
    <div className="flex p-4 items-center mx-auto box-border h-14 ">
      {page ? '' : <FontAwesomeIcon icon={faArrowLeft} />}
      <div className="hidden md:block ml-2">Voltar</div>
    </div>
  );
};

ContentNavigation.propTypes = {
  page: PropTypes.oneOf(['welcome', 'login', 'register', 'end']) // ou PropTypes.oneOf(['welcome', 'normal'])
};

export default ContentNavigation;
