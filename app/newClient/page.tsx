import { FormNewClient } from "@/components/formNewClient";

export default function NewClient() {
  return (
    <section className="flex w-screen h-screen bg-white">
      <div className="flex w-[50%]">
        <div className="m-auto w-[500px] h-[full]">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cadastre-se 📦
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Se torne um de nossos clientes; e como resultado <br />
            terá um maior controle de{" "}
            <strong className="text-yellow-500">produtividade</strong> do seu
            negócio.
          </p>
          <div className="pl-8">
            <ul className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
              <li>
                <strong className="inline font-semibold text-gray-900">
                  Lançamento de produtos;
                </strong>
                <p>
                  Página para registrar e gerenciar os produtos disponíveis em
                  seu estabelecimento. Permite um controle detalhado e
                  atualizado do inventário, facilitando a administração dos
                  itens em estoque.
                </p>
              </li>
              <li>
                <strong className="inline font-semibold text-gray-900">
                  Filiações com empresas;
                </strong>
                <p>
                  Página de filiação com empresas, onde poderá listar e
                  gerenciar as empresas fornecedoras de produtos para o seu
                  estabelecimento.
                </p>
                <p className="underline decoration-solid">
                  Recurso que facilita o acompanhamento e a administração das
                  parcerias comerciais.
                </p>
              </li>
              <li>
                <strong className="inline font-semibold text-gray-900">
                  Fluxo de caixa;
                </strong>
                <p>
                  Página de acesso ao fluxo de caixa, permitindo o controle
                  detalhado das entradas e saídas dos produtos.
                </p>
                <p className="underline decoration-solid">
                  Recurso que facilita o monitoramento financeiro e a gestão do
                  inventário do estabelecimento.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-[#fcfcfc]">
        <FormNewClient />
      </div>
    </section>
  );
}
