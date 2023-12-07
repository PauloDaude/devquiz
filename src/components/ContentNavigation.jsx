import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ContentNavigation = ({ back = 'false', navigation }) => {
  return (
    <div className="flex p-4 items-center justify-start box-border h-14 ">
      {back === 'true' && (
        <>
          <Link to={navigation} className="flex flex-row items-center">
            <FontAwesomeIcon icon={faArrowLeft} />
            <div className="hidden sm:block ml-2">Voltar</div>
          </Link>
        </>
      )}
    </div>
  );
};

ContentNavigation.propTypes = {
  back: PropTypes.oneOf(['true', 'false'])
};

ContentNavigation.propTypes = {
  navigation: PropTypes.string
};

export default ContentNavigation;
