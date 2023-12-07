import Button from '../components/Button';
import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

const Login = () => {
  return (
    <>
      <ContentNavigation back="true" />

      <ContentHeader
        title="Tá pertin já :)"
        subtitle="Só preencher os dados e pronto"
      />

      <ContentMain></ContentMain>

      <ContentFooter>
        <Button icon="false" style="dark" text="Só continuar" />
      </ContentFooter>
    </>
  );
};
export default Login;
