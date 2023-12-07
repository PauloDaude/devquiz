import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

const Button = ({ style, text, icon = 'false' }) => {
  if (style === 'light') {
    return (
      <button className="flex justify-center items-center bg-gray-bg w-full p-4 mb-4 rounded-full font-bold shadow-gray gap-2">
        {icon === 'google' && (
          <FontAwesomeIcon icon={faGoogle} style={{ color: '#000' }} />
        )}
        <span className="text-sm">{text}</span>
      </button>
    );
  } else {
    return (
      <button className="flex justify-center items-center bg-black text-white w-full p-4 rounded-full font-bold shadow-yellow gap-2">
        {icon === 'true' && (
          <FontAwesomeIcon icon={faBolt} style={{ color: '#ffffff' }} />
        )}
        {text}
      </button>
    );
  }
};

Button.propTypes = {
  style: PropTypes.oneOf(['light', 'dark']),
  text: PropTypes.string,
  icon: PropTypes.oneOf(['true', 'false'])
  // ou PropTypes.oneOf(['welcome', 'normal'])
};

export default Button;
