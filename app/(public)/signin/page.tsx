import type { Metadata } from "next";
import { LayoutPublic } from "@/services/layouts/LayoutPublic";
import { FormEnterClient } from "@/components/formEnterClient";

export const metadata: Metadata = {
  title: "Guest | login",
};

export default function SignIn() {
  return (
    <LayoutPublic>
      <div className="w-screen h-screen bg-white md:bg-gray-50 flex flex-col md:flex-row">
        <div className="flex w-full md:w-[60%] items-center justify-center">
          <div className="max-w-md m-4">
            <h1 className="text-3xl text-center mt-10 md:mt-0 font-bold tracking-tight text-gray-800 md:text-left sm:text-5xl">
              Entrar
            </h1>
            <p className="mt-4 text-sm text-center text-gray-600 md:text-lg md:text-left lg:leading-8">
              Entre com suas credenciais para acessar <br /> a sua conta. É bom
              ter você conosco.
            </p>
          </div>
        </div>
        <div className="h-full lg:w-[40%] bg-white md:rounded-l-lg">
          <FormEnterClient />
        </div>
      </div>
    </LayoutPublic>
  );
}
