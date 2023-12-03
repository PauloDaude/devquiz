import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

const Register = () => {
  const page = 'register';
  return (
    <>
      <ContentNavigation page={page} />
      <ContentHeader
        title="Tá pertin já :)"
        subtitle="Só preencher os dados e pronto"
      />
      <ContentMain page={page} />
      <ContentFooter page={page} />
    </>
  );
};
export default Register;
