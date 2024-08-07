import type { Metadata } from "next";
import { LayoutPublic } from "@/services/layouts/LayoutPublic";
import { FormNewClient } from "@/components/formNewClient";

export const metadata: Metadata = {
  title: "Guest | cadastre-se",
};

export default function SignUp() {
  return (
    <LayoutPublic>
      <div className="w-screen h-screen bg-white md:bg-gray-50 flex flex-col md:flex-row">
        <div className="flex w-full md:w-[60%] items-center justify-center">
          <div className="max-w-md m-4">
            <h1 className="text-3xl mt-10 text-center font-bold tracking-tight text-gray-800 md:text-left sm:text-4xl">
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
        <div className="h-full pb-10 md:pb-0 lg:w-[40%] bg-white md:rounded-l-lg">
          <FormNewClient />
        </div>
      </div>
    </LayoutPublic>
  );
}
