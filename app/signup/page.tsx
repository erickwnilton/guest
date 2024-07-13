import Link from "next/link";
import { FormNewClient } from "@/components/formNewClient";

export default function SignUp() {
  return (
    <section className="w-screen h-screen bg-gray-100 flex flex-col md:flex-row">
      <div className="flex w-full md:w-[60%] items-center justify-center">
        <div className="max-w-md m-4">
          <h1 className="text-4xl mt-10 text-center font-bold tracking-tight text-gray-800 md:text-left sm:text-4xl">
            Cadastre-se
          </h1>
          <p className="mt-6 text-sm text-center text-gray-600 md:text-lg md:text-left lg:leading-8">
            Se torne um de nossos clientes; e como resultado <br />
            alcance um maior controle de{" "}
            <strong className="underline underline-offset-4">
              produtividade
            </strong>{" "}
            em seu negócio.
          </p>
        </div>
      </div>
      <div className="h-full lg:w-[40%] rounded-t-lg bg-[#fff] md:rounded-none md:rounded-l-lg">
        <FormNewClient />
      </div>
    </section>
  );
}
