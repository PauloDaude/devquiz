import PropTypes from 'prop-types';

const ContentHeader = ({ children, title, subtitle, img }) => {
  return title ? (
    <div className="flex flex-col gap-3 px-4 sm:justify-center">
      <h1 className="font-bold text-[2rem] leading-8 sm:text-center">
        {title}
      </h1>
      <p className="font-medium sm:text-center">{subtitle}</p>
      {img && (
        <img src={img} className="max-w-[26.625rem] my-8 hidden md:block" />
      )}
    </div>
  ) : (
    <div className="flex flex-col gap-3 px-4 sm:justify-center">{children}</div>
  );
};

ContentHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.node
};

export default ContentHeader;
