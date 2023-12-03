import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

const Register = () => {
  return (
    <>
      <ContentNavigation page="register" />
      <ContentHeader
        title="Tá pertin já :)"
        subtitle="Só preencher os dados e pronto"
      />
      <ContentMain page="register" />
      <ContentFooter page="register" />
    </>
  );
};
export default Register;
