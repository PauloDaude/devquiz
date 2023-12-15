import PropTypes from 'prop-types';

const Main = props => {
  return (
    <main
      className={
        props.profile === 'true'
          ? 'container flex flex-col flex-1 w-full h-full mx-auto mb-14 sm:mb-0 sm:max-w-[768px]'
          : 'container flex flex-col flex-1 w-full h-full mx-auto mb-14 sm:mb-0'
      }
    >
      {props.children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  profile: PropTypes.string
};

export default Main;
