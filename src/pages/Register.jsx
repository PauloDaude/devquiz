import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

import Button from '../components/Button';
import { InputCountry, InputName } from '../components/RegisterFields';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import RegisterImg from '../assets/register.svg';
import { InputEmail, InputPassword } from '../components/LoginFields';

const Register = () => {
  return (
    <>
      <Header login="true" />

      <Main>
        <ContentNavigation back="true" navigation="/welcome" />
        <div className="flex flex-col md:flex-row justify-center md:gap-12">
          <ContentHeader
            title="Cria tua conta ae :)"
            subtitle="Só preencher os dados e pronto"
            img={RegisterImg}
          />

          <div className="flex flex-col">
            <div className="flex items-center my-4">
              <ContentMain>
                <form className="flex flex-col gap-4 w-full">
                  <InputEmail label="Email*" />
                  <InputPassword label="Senha*" />
                  <InputName label="Nome completo*" />
                  <InputCountry label="País" type="select" />
                </form>
              </ContentMain>
            </div>

            <ContentFooter>
              <Button style="dark" text="Só continuar" />
            </ContentFooter>
          </div>
        </div>
      </Main>

      <Footer />
    </>
  );
};
export default Register;
