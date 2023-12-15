import PropTypes from 'prop-types';

import Logo from '../assets/devquiz-full-para-fundo-branco.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const SearchInput = () => {
  return (
    <>
      <div className="w-full items-center px-2 text-gray-label bg-gray-bg rounded gap-3 max-w-[250px] hidden sm:flex">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-[1.25rem] sm:text-base hidden sm:block text-gray-label"
        />
        <input
          type="text"
          className="w-full bg-gray bg-gray-bg rounded placeholder:text-sm text-black text-sm py-1"
          placeholder="Pesquisar quiz"
        />
      </div>
    </>
  );
};

const Header = ({ login = 'false' }) => {
  const headerClass =
    login === 'true'
      ? 'container p-6 max-h-20 max-w-7xl w-full mx-auto sm:flex justify-between items-center hidden'
      : 'container p-6 flex max-h-20 max-w-7xl w-full mx-auto justify-between items-center';

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
        <div className="flex justify-end items-center gap-4 md:gap-7 w-4/6">
          <SearchInput />
          <nav className="hidden sm:flex gap-10 justify-end min-w-[310px]">
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
          </nav>
          <Link to="/welcome" className="hover:text-red-600 transition-all">
            Sair
          </Link>
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
