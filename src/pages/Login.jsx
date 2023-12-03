import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

const Login = () => {
  const page = 'login';
  return (
    <>
      <ContentNavigation page={page} />
      <ContentHeader
        title="Cria tua conta ae :)"
        subtitle="Só preencher os dados e pronto"
      />
      <ContentMain page={page} />
    </>
  );
};
export default Login;
