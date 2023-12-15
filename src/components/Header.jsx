import PropTypes from 'prop-types';

import Logo from '../assets/devquiz-full-para-fundo-branco.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const Header = ({ login = 'false' }) => {
  return (
    <header
      className={
        login === 'true'
          ? 'container p-6 max-h-20 max-w-7xl w-full mx-auto hidden sm:flex justify-between'
          : 'container p-6 flex max-h-20 max-w-7xl w-full mx-auto justify-between'
      }
    >
      <img src={Logo} alt="Logo DevQuiz" className="w-[9rem] md:w-[10rem]" />
      {login === 'true' ? (
        <p className="text-sm">Centro de segurança</p>
      ) : (
        <div className="flex justify-center items-center gap-4 md:gap-7">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[1.25rem] md:text-xl"
          />
          <FontAwesomeIcon icon={faBell} className="text-[1.3rem] md:text-xl" />
        </div>
      )}
    </header>
  );
};
export default Header;

Header.propTypes = {
  login: PropTypes.oneOf(['true', 'false'])
};
