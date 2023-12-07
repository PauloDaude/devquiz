import PropTypes from 'prop-types';

const Main = props => {
  return (
    <main className="container flex flex-col flex-1 h-full w-full mx-auto">
      {props.children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
