import ContentMain from '../components/ContentMain';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Error from '../assets/error-page.svg';

const NotFound = () => {
  return (
    <>
      <Header login="true" />

      <Main>
        <ContentMain>
          <div className="flex flex-col justify-center items-center h-full gap-3">
            <h1 className="text-5xl">Error 404</h1>
            <p className="text-xl">Página não econtrada :(</p>
            <img
              src={Error}
              alt="Página não encontrada"
              className="w-[40rem] mt-10"
            />
          </div>
        </ContentMain>
      </Main>

      <Footer />
    </>
  );
};
export default NotFound;
