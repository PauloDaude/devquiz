import PropTypes from 'prop-types';

const Main = props => {
  return (
    <main className="container flex flex-col flex-1 w-full h-full mx-auto mb-14 sm:mb-0">
      {props.children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
