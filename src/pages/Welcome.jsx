import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

const Welcome = () => {
  const page = 'welcome';
  return (
    <>
      <ContentNavigation page={page} />
      <ContentHeader
        title="Prove o que sabe com o DevQuiz! 🧠"
        subtitle="Te garanto que tu vai gostar de jogar hehe"
      />
      <ContentMain page={page} />
      <ContentFooter page={page} />
    </>
  );
};

export default Welcome;
