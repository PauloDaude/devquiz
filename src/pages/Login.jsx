import Button from '../components/Button';
import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

import { InputEmail, InputPassword } from '../components/LoginFields';

const Login = () => {
  return (
    <>
      <ContentNavigation back="true" />

      <ContentHeader
        title="Tá pertin já :)"
        subtitle="Só preencher os dados e pronto"
      />

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
                <span className="text-sm">Lembrar senha</span>
              </div>
            </form>
            <div className="flex flex-col items-center gap-2 mt-10">
              <span className="text-gray-main">Outra opção de login</span>
              <Button icon="google" style="light" text="Continuar com Google" />
            </div>
          </div>
        </ContentMain>
      </div>

      <ContentFooter>
        <Button icon="false" style="dark" text="Só continuar" />
      </ContentFooter>
    </>
  );
};
export default Login;
