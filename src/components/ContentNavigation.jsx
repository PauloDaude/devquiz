import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ContentNavigation = ({ back = 'false' }) => {
  return (
    <div className="flex p-4 items-center justify-start box-border h-14 ">
      {back === 'true' && (
        <>
          <button onClick="">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div className="hidden md:block ml-2">Voltar</div>
        </>
      )}
    </div>
  );
};

ContentNavigation.propTypes = {
  back: PropTypes.oneOf(['true', 'false'])
};

export default ContentNavigation;
