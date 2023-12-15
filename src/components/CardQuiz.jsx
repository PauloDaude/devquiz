// eslint-disable-next-line react/prop-types
const CardQuiz = ({ img, author, title, onClick }) => {
  const cardStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: '90px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#ffbb45'
  };

  const overlayStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)'
  };

  return (
    <div className="flex flex-1 flex-col items-start justify-start min-w-[120px] sm:min-w-[170px] w-full max-w-[160px]">
      <button
        onClick={onClick}
        style={cardStyle}
        className="h-[100px] w-full rounded-2xl relative text-white"
      >
        <div
          style={overlayStyle}
          className="flex items-end rounded-2xl h-full  px-4 py-2"
        >
          <p>{author}</p>
        </div>
      </button>
      <p className="text-sm font-medium mt-1">{title}</p>
    </div>
  );
};

export default CardQuiz;
