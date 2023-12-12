import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import Button from '../components/Button';
import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

import { InputEmail, InputPassword } from '../components/FormFields';

import LoginImg from '../assets/login.svg';

const Login = () => {
  return (
    <>
      <Header login="true" />

      <Main>
        <ContentNavigation back="true" navigation="/welcome" />
        <div className="flex flex-col md:flex-row justify-center md:gap-12 flex-grow md:flex-grow-0 h-full mx-auto xl:max-w-5xl w-full">
          <ContentHeader
            title="Tá pertin já :)"
            subtitle="Só preencher os dados e pronto"
            img={LoginImg}
          />

          <div className="flex flex-col md:mt-14 flex-grow">
            <div className="flex items-center my-4">
              <ContentMain>
                <div className="flex flex-col w-full">
                  <form className="flex flex-col gap-4 w-full">
                    <InputEmail label="Email" />
                    <InputPassword label="Senha" />
                    <div className="flex">
                      <input
                        type="checkbox"
                        name="remember"
                        className="w-4 mr-2 ml-2"
                      />
                      <p className="text-sm">Lembrar senha</p>
                    </div>
                  </form>
                </div>
              </ContentMain>
            </div>
            <ContentFooter>
              <Button
                icon="false"
                style="dark"
                text="Só continuar"
                navigation=""
              />
            </ContentFooter>
          </div>
        </div>
      </Main>

      <Footer />
    </>
  );
};
export default Login;
