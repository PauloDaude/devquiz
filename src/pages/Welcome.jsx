import Header from '../components/Header';
import Footer from '../components/Footer';

import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

import welcome from '../assets/welcome.svg';
import Button from '../components/Button';
import Main from '../components/Main';

const Welcome = () => {
  return (
    <>
      <Header login="true" />
      <Main>
        <ContentNavigation />

        <ContentHeader
          title="Prove o que sabe com o DevQuiz! 🧠"
          subtitle="Te garanto que tu vai gostar de jogar hehe"
        />

        <ContentMain>
          <div className="flex">
            <img src={welcome} className="w-full sm:max-w-[37.5rem]" />
          </div>
        </ContentMain>

        <ContentFooter double="true">
          <Button style="light" text="Já tenho uma conta" />
          <Button style="dark" text="Bora cadastrar" icon="true" />
        </ContentFooter>
      </Main>
      <Footer />
    </>
  );
};

export default Welcome;
