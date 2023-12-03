import PropTypes from 'prop-types';

const ContentHeader = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-3 px-4">
      <h1 className="font-bold text-[2rem] leading-8">{title}</h1>
      <p className="font-medium">{subtitle}</p>
    </div>
  );
};

ContentHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
  // ou PropTypes.oneOf(['welcome', 'normal'])
};

export default ContentHeader;