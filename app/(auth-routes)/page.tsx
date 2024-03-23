import { AuthPage } from "@/template/auth";
import { FormLogin } from "@/components/formLogin";

export default function Home() {
  return (
    <main>
     <AuthPage title="Login" button="Entrar" buttonContent="Não possui conta?">
      <FormLogin name="Email" label="Senha" button="Entrar"/>
     </AuthPage>
    </main>
  );
}
