import logoPython from '../assets/python-logo.png';

const CardQuiz = () => {
  const cardStyle = {
    backgroundImage: `url(${logoPython})`,
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
    <div className="flex flex-1 flex-col items-start justify-end min-w-[120px] sm:min-w-[170px] w-full max-w-[160px]">
      <button
        style={cardStyle}
        className="h-[100px] w-full rounded-2xl relative text-white"
      >
        <div
          style={overlayStyle}
          className="flex items-end rounded-2xl h-full  px-4 py-2"
        >
          <p>Paulo D.</p>
        </div>
      </button>
      <p className="text-sm font-medium mt-1">Teste seu nível de Python</p>
    </div>
  );
};

export default CardQuiz;
