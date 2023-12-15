import {
  faCirclePlus,
  faHouse,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBarFooter = () => {
  return (
    <div className="flex justify-between fixed bottom-0 left-0 w-full bg-white text-gray-400 py-4 px-16 bg-opacity-2">
      <FontAwesomeIcon icon={faHouse} size="lg" />
      <FontAwesomeIcon icon={faCirclePlus} size="lg" />
      <FontAwesomeIcon icon={faUser} size="lg" />
    </div>
  );
};
export default NavBarFooter;
