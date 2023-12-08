import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import PropTypes from 'prop-types';

const Button = ({ style, text, icon = 'false', navigation }) => {
  const navigate = useNavigate();

  if (style === 'light') {
    return (
      <button
        className="flex justify-center items-center bg-gray-bg w-full sm:max-w-[21.4375rem] p-4 mb-4 sm:mb-0 rounded-full font-bold shadow-gray gap-2 hover:bg-gray-200 transition-all"
        onClick={() => navigate(navigation)}
      >
        {icon === 'google' && (
          <FontAwesomeIcon icon={faGoogle} style={{ color: '#000' }} />
        )}
        <p className={icon === 'google' ? 'text-sm' : 'text-sm sm:text-base'}>
          {text}
        </p>
      </button>
    );
  } else {
    return (
      <button
        className="flex justify-center items-center bg-black text-white w-full sm:max-w-[21.4375rem] p-4 rounded-full font-bold shadow-yellow gap-2 hover:bg-[#1e2029] transition-all"
        onClick={() => navigate(navigation)}
      >
        {icon === 'true' && (
          <FontAwesomeIcon icon={faBolt} style={{ color: '#ffffff' }} />
        )}
        <p className="text-sm sm:text-base">{text}</p>
      </button>
    );
  }
};

Button.propTypes = {
  style: PropTypes.oneOf(['light', 'dark']),
  text: PropTypes.string,
  icon: PropTypes.oneOf(['true', 'false'])
};
Button.propTypes = {
  navigation: PropTypes.string
};

export default Button;
