import React from 'react';
import {
  faCirclePlus,
  faHouse,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// eslint-disable-next-line react/prop-types
const NavBarButton = ({ icon, endpoint, target }) => {
  const isActive = endpoint === target;

  return (
    <button className={isActive ? 'text-yellow-main' : 'text-gray-400'}>
      <FontAwesomeIcon icon={icon} size="lg" />
    </button>
  );
};

const NavBarFooter = () => {
  const endpoint = window.location.pathname;

  return (
    <div className="flex justify-between fixed bottom-0 left-0 w-full bg-white py-4 px-16 bg-opacity-2 shadow-inner sm:hidden">
      <NavBarButton icon={faHouse} endpoint={endpoint} target="/home" />
      <NavBarButton icon={faCirclePlus} endpoint={endpoint} target="/create" />
      <NavBarButton icon={faUser} endpoint={endpoint} target="/profile" />
    </div>
  );
};

export default NavBarFooter;
