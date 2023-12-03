import Button from '../components/Button';
import ContentFooter from '../components/ContentFooter';
import ContentHeader from '../components/ContentHeader';
import ContentMain from '../components/ContentMain';
import ContentNavigation from '../components/ContentNavigation';
import FormField from '../components/FormField';

const Register = () => {
  return (
    <>
      <ContentNavigation back="true" />
      <ContentHeader
        title="Tá pertin já :)"
        subtitle="Só preencher os dados e pronto"
      />

      <ContentMain>
        <div className="flex flex-col gap-4">
          <FormField label="Nome completo " type="text" />
          <FormField label="Data de nascimento" type="date" />
          <FormField label="Número" type="number" />
          <FormField label="País" type="select" />
        </div>
      </ContentMain>

      <ContentFooter>
        <Button style="dark" text="Só continuar" />
      </ContentFooter>
    </>
  );
};
export default Register;
