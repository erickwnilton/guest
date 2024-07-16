export default function Recover() {
  return (
    <section className="w-screen h-screen bg-gray-200 md:bg-gray-100 flex flex-col md:flex-row">
      <div className="flex w-full md:w-[60%] items-center justify-center">
        <div className="max-w-md m-4">
          <h1 className="text-4xl text-center mt-10 md:mt-0 font-bold tracking-tighttext-gray-800 md:text-left">
            Esqueceu sua senha?
          </h1>
          <p className="mt-4 text-sm text-center text-gray-600 md:text-lg md:text-left lg:leading-8">
            Basta preencher seu email cadastrado conosco e <br />
            enviaremos um link para redefinir sua senha.
          </p>
        </div>
      </div>
      <div className="h-full lg:w-[40%] rounded-t-lg bg-[#fff] md:rounded-none md:rounded-l-lg"></div>
    </section>
  );
}
