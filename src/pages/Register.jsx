import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';

import Button from '../components/Button';
import {
  InputEmail,
  InputPassword,
  InputConfirmPassword,
  InputCountry,
  InputName
} from '../components/FormFields';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import RegisterImg from '../assets/register.svg';

import { useFormik } from 'formik';
import { schema } from '../validations/registerValidation';

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await Promise(resolve => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Register = () => {
  const {
    values,
    errors,
    // isSubmitting,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      country: 'Brazil'
    },
    validationSchema: schema,
    onSubmit
  });

  return (
    <>
      <Header login="true" />

      <Main>
        <ContentNavigation back="true" navigation="/welcome" />
        <div className="flex flex-col md:flex-row justify-center md:gap-12 flex-grow md:flex-grow-0 xl:max-w-5xl mx-auto w-full">
          <ContentHeader
            title="Cria tua conta ae :)"
            subtitle="Só preencher os dados e pronto"
            img={RegisterImg}
          />

          <div className="flex flex-col flex-grow">
            <div className="flex items-center my-4">
              <ContentMain>
                <form
                  className="flex flex-col gap-4 w-full"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <InputEmail
                    label="Email*"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email ? errors.email : null}
                  />
                  <InputPassword
                    label="Senha*"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />
                  <InputConfirmPassword
                    label="Confirme a senha*"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : null
                    }
                  />
                  <InputName
                    label="Nome completo*"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name && touched.name ? errors.name : null}
                  />
                  <InputCountry
                    label="País"
                    type="select"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </form>
              </ContentMain>
            </div>

            <ContentFooter>
              <Button
                style="dark"
                text="Só continuar"
                handleSubmit={handleSubmit}
              />
            </ContentFooter>
          </div>
        </div>
      </Main>

      <Footer />
    </>
  );
};
export default Register;
