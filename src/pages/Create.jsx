import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import NavBarFooter from '../components/NavBarFooter';

const Create = () => {
  return (
    <>
      <Header />
      <Main>
        <ContentNavigation back="true" navigation="/home" />
        <ContentMain>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-medium">
              Logo em breve haverá conteúdo aqui! 😉
            </h1>
            <p>No momento essa tela ainda não está disponível</p>
          </div>
        </ContentMain>
        <NavBarFooter />
      </Main>
      <Footer />
    </>
  );
};
export default Create;
