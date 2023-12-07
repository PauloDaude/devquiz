import PropTypes from 'prop-types';
import Logo from '../assets/devquiz-full-para-fundo-branco.svg';

const Header = ({ login = 'false' }) => {
  return (
    <header className="flex justify-between p-6 max-h-20">
      <img src={Logo} alt="Logo DevQuiz" className="w-[187px]" />
      {login === 'true' ? (
        <p className="text-sm">Centro de segurança</p>
      ) : (
        <p></p>
      )}
    </header>
  );
};
export default Header;

Header.propTypes = {
  login: PropTypes.oneOf(['true', 'false'])
};
