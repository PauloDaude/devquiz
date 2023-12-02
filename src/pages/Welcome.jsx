import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

const Welcome = () => {
  return (
    <>
      <ContentNavigation page="welcome" />
      <ContentHeader
        title="Prove o que sabe com o DevQuiz! 🧠"
        subtitle="Te garanto que tu vai gostar de jogar hehe"
      />
      <ContentMain page="welcome" />
      <ContentFooter page="welcome" />
    </>
  );
};

export default Welcome;
