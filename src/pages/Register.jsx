import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

import Button from '../components/Button';
import {
  InputCountry,
  InputDate,
  InputName,
  InputPhone
} from '../components/RegisterFields';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Register = () => {
  return (
    <>
      <Header login="true" />

      <Main>
        <ContentNavigation back="true" />
        <ContentHeader
          title="Cria tua conta ae :)"
          subtitle="Só preencher os dados e pronto"
        />

        <div className="flex items-center my-4">
          <ContentMain>
            <form className="flex flex-col gap-4 w-full">
              <InputName label="Nome completo" />
              <InputDate label="Data de nascimento" />
              <InputPhone label="Número" />
              <InputCountry label="País" type="select" />
            </form>
          </ContentMain>
        </div>

        <ContentFooter>
          <Button style="dark" text="Só continuar" />
        </ContentFooter>
      </Main>

      <Footer />
    </>
  );
};
export default Register;
