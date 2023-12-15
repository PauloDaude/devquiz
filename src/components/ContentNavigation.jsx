/* eslint-disable indent */
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ContentNavigation = ({ back = 'false', navigation, home, profile }) => {
  return (
    <div
      className={
        home === 'true'
          ? 'h-5'
          : profile === 'true'
          ? 'flex p-4 items-start justify-start box-border bg-yellow-main h-24 -mb-14 rounded-b-3xl'
          : 'flex p-4 items-center justify-start box-border h-14'
      }
    >
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
  back: PropTypes.oneOf(['true', 'false']),
  navigation: PropTypes.string,
  home: PropTypes.oneOf(['true', 'false']),
  profile: PropTypes.string
};

export default ContentNavigation;
