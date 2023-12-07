import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

import end from '../assets/end.svg';
import Button from '../components/Button';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Welcome = () => {
  return (
    <>
      <Header />

      <Main>
        <ContentNavigation />

        <ContentHeader
          title="Seja muito bem vindo!"
          subtitle="Agora é só aproveitar o DevQuiz! 😎"
        />

        <ContentMain>
          <div className="flex">
            <img src={end} />
          </div>
        </ContentMain>

        <ContentFooter>
          <Button style="dark" text="Boraaaa!" />
        </ContentFooter>
      </Main>

      <Footer />
    </>
  );
};

export default Welcome;
