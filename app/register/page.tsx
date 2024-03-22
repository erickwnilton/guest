import { AuthPage } from "@/template/auth";
import { FormRegister } from "@/components/formRegister";

export default function Register() {
  return (
    <AuthPage title="Criar conta" button="Cadastre-se" buttonContent="Possui conta?">
      <FormRegister name="Nome" email="Email" document="CPF" role="Cargo" password="Senha" confirmPassword="Confirme sua senha" button="Cadastre-se"/>
    </AuthPage>
  )
}