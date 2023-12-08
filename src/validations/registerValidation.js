import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('*Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter ao menos 6 caracteres')
    .matches(passwordRules, { message: 'É necessário uma senha mais forte' })
    .required('*Campo obrigatório'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('*Campo obrigatório'),
  name: yup
    .string()
    .matches(/^[a-zA-Z]+ [a-zA-Z]+$/, { message: 'Digite o nome completo' })
    .required('*Campo obrigatório')
});
