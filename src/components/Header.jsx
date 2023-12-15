import PropTypes from 'prop-types';

import Logo from '../assets/devquiz-full-para-fundo-branco.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ login = 'false' }) => {
  const headerClass =
    login === 'true'
      ? 'container p-6 max-h-20 max-w-7xl w-full mx-auto hidden sm:flex justify-between'
      : 'container p-6 flex max-h-20 max-w-7xl w-full mx-auto justify-between';

  const navClass = isActive =>
    isActive ? 'text-yellow-main' : 'transition-all hover:text-yellow-main';

  return (
    <header className={headerClass}>
      <Link to="/home">
        <img
          src={Logo}
          alt="Logo DevQuiz"
          className="w-[9rem] md:w-[10rem] cursor-pointer"
        />
      </Link>

      {login === 'true' ? (
        <p className="text-sm">Centro de segurança</p>
      ) : (
        <div className="flex justify-center items-center gap-4 md:gap-7">
          <nav className="hidden sm:flex gap-10">
            <NavLink
              to="/home"
              className={({ isActive }) => navClass(isActive)}
            >
              Home
            </NavLink>
            <NavLink
              to="/create"
              className={({ isActive }) => navClass(isActive)}
            >
              Criar Quiz
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => navClass(isActive)}
            >
              Perfil
            </NavLink>
            <Link to="/welcome" className="hover:text-red-600 transition-all">
              Sair
            </Link>
          </nav>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[1.25rem] md:text-xl sm:hidden"
          />
          <FontAwesomeIcon
            icon={faBell}
            className="text-[1.3rem] md:text-xl sm:hidden"
          />
        </div>
      )}
    </header>
  );
};
export default Header;

Header.propTypes = {
  login: PropTypes.oneOf(['true', 'false'])
};
