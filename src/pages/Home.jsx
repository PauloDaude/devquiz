import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import CardQuiz from '../components/CardQuiz';

import NavBarFooter from '../components/NavBarFooter';

const Home = () => {
  const quizzes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <>
      <Header />

      <Main>
        <ContentNavigation home="true" />

        <ContentHeader
          title="Bem vindo 👋"
          subtitle="Escolha um dos quizzes abaixo para jogar"
        />

        <ContentMain>
          <div className="flex flex-col items-start sm:items-center w-full h-full py-4">
            <h3 className="text-lg font-semibold">Galeria de Quizzes</h3>
            <div className="flex sm:justify-center w-full flex-wrap gap-3 mt-1 sm:mt-4">
              {quizzes.map(quiz => (
                <CardQuiz key={quiz} />
              ))}
            </div>
          </div>
        </ContentMain>

        <NavBarFooter />
      </Main>

      <Footer />
    </>
  );
};

export default Home;
