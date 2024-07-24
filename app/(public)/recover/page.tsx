import { LayoutPublic } from "@/layouts/LayoutPublic";

export default function Recover() {
  return (
    <LayoutPublic>
      <div className="w-screen h-screen bg-white md:bg-gray-50 flex flex-col md:flex-row">
        <div className="flex w-full md:w-[60%] items-center justify-center">
          <div className="max-w-md m-4">
            <h1 className="text-3xl text-center mt-10 md:mt-0 font-bold tracking-tight text-gray-800 md:text-left">
              Esqueceu sua senha?
            </h1>
            <p className="mt-4 text-sm text-center text-yellow-500 md:text-lg md:text-left lg:leading-8">
              Não se preocupe! Basta preencher seu email cadastrado conosco e{" "}
              enviaremos um link para redefinir sua senha.
            </p>
          </div>
        </div>
        <div className="h-full lg:w-[40%] rounded-t-lg bg-white md:rounded-none md:rounded-l-lg"></div>
      </div>
    </LayoutPublic>
  );
}
