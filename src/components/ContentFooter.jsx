import PropTypes from 'prop-types';
import Button from './Button';

const ContentFooter = ({ page }) => {
  return (
    <div className="flex flex-1 w-full p-4 items-end justify-center">
      {page === 'welcome' ? (
        <div className="flex flex-col justify-center items-center  w-full">
          <Button style="light" text="Já tenho uma conta" />
          <Button style="dark" text="Bora cadastrar" />
        </div>
      ) : page === 'register' ? (
        <Button style="dark" text="Bora cadastrar" />
      ) : (
        <h1>ola</h1>
      )}
    </div>
  );
};

ContentFooter.propTypes = {
  page: PropTypes.string
  // ou PropTypes.oneOf(['welcome', 'normal'])
};

export default ContentFooter;
