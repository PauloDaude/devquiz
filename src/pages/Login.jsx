import axios from 'axios';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import Button from '../components/Button';
import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

import { InputEmail, InputPassword } from '../components/FormFields';
import { useFormik } from 'formik';
import { schemaLogin } from '../validations/registerValidation';

import LoginImg from '../assets/login.svg';

const onSubmit = async ({ email, password }, actions) => {
  console.log(email);
  console.log(password);

  await new Promise(resolve => setTimeout(resolve, 500));

  actions.resetForm();

  try {
    const response = await axios.post('http://127.0.0.1:5000', {
      email: email,
      password: password
    });

    if (response.status === 200) {
      console.log('Login bem sucedido!');
    } else {
      console.log('Dados de login inválidos! Tente novamente.');
    }
  } catch (err) {
    console.error('Erro ao tentar fazer o login', err.message);
  }
};

const Login = () => {
  const { values, isSubmitting, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validationSchema: schemaLogin,
      onSubmit
    });

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
                  <form
                    onSubmit={handleSubmit}
                    method="post"
                    className="flex flex-col gap-4 w-full"
                  >
                    <InputEmail
                      label="Email"
                      value={values.email}
                      onChange={handleChange}
                      error={errors.email ? errors.email : null}
                    />
                    <InputPassword
                      label="Senha"
                      value={values.password}
                      onChange={handleChange}
                      error={errors.password ? errors.password : null}
                    />
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
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
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
