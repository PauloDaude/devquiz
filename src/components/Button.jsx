import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import Reload from '../assets/reload.svg';

import PropTypes from 'prop-types';

const Button = ({
  style,
  text,
  icon = 'false',
  navigation,
  handleSubmit,
  isSubmitting
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (navigation) {
      navigate(navigation);
    } else if (handleSubmit) {
      handleSubmit();
    }
  };

  if (style === 'light') {
    return (
      <button
        className="flex justify-center items-center bg-gray-bg w-full sm:max-w-[21.4375rem] p-4 mb-4 sm:mb-0 rounded-full font-bold shadow-gray gap-2 hover:bg-gray-200 transition-all"
        disabled={isSubmitting}
        onClick={handleButtonClick}
        type="button"
      >
        {icon === 'google' && (
          <FontAwesomeIcon icon={faGoogle} style={{ color: '#000' }} />
        )}
        {isSubmitting ? (
          <img src={Reload} />
        ) : (
          <p className={icon === 'google' ? 'text-sm' : 'text-sm sm:text-base'}>
            {text}
          </p>
        )}
      </button>
    );
  } else {
    return (
      <button
        className="flex justify-center items-center bg-black text-white w-full sm:max-w-[21.4375rem] p-4 rounded-full font-bold shadow-yellow gap-2 hover:bg-[#1e2029] transition-all"
        onClick={handleButtonClick}
        disabled={isSubmitting}
        type="button"
      >
        {icon === 'true' && (
          <FontAwesomeIcon icon={faBolt} style={{ color: '#ffffff' }} />
        )}
        <p className={icon === 'google' ? 'text-sm' : 'text-sm sm:text-base'}>
          {isSubmitting ? <img src={Reload} className="h-5" /> : text}
        </p>
      </button>
    );
  }
};

Button.propTypes = {
  style: PropTypes.oneOf(['light', 'dark']),
  text: PropTypes.string,
  icon: PropTypes.oneOf(['true', 'false']),
  handleSubmit: PropTypes.func,
  navigation: PropTypes.string,
  isSubmitting: PropTypes.bool
};

export default Button;
