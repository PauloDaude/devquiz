import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

const Login = () => {
  return (
    <>
      <ContentNavigation page="login" />
      <ContentHeader
        title="Cria tua conta ae :)"
        subtitle="Só preencher os dados e pronto"
      />
      <ContentMain page="login" />
    </>
  );
};
export default Login;
