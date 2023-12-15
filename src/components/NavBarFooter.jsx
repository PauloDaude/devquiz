import React from 'react';
import {
  faCirclePlus,
  faHouse,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NavBarButton = ({ icon, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'text-yellow-main' : 'text-gray-400'
      }
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </NavLink>
  );
};

const NavBarFooter = () => {
  return (
    <div className="flex justify-between fixed bottom-0 left-0 w-full bg-white py-4 px-16 bg-opacity-2 shadow-inner sm:hidden">
      <NavBarButton icon={faHouse} to="/home" />
      <NavBarButton icon={faCirclePlus} to="/create" />
      <NavBarButton icon={faUser} to="/profile" />
    </div>
  );
};

export default NavBarFooter;
