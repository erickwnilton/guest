"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { NewUserInput } from "@/types/formUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForRegisterUser } from "@/schemas/userSchema";

export function FormNewClient() {
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [document, setDocument] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { register, handleSubmit } = useForm<NewUserInput>({
    resolver: yupResolver(schemaForRegisterUser),
  });

  function formatDocument(value: string) {
    const document = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    return value.replace(document, "$1.$2.$3-$4");
  }

  function RegistrationFormData() {
    console.log();
  }

  return (
    <div className="flex w-full h-full">
      <div className="m-auto w-[500px]">
        <div className="h-full m-5">
          <h1 className="text-xl font-bold text-gray-100">
            Informações Pessoais
          </h1>
          <form className="mt-10" onSubmit={handleSubmit(RegistrationFormData)}>
            <label className="text-lg font-light text-gray-200 flex flex-col">
              Nome
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                {...register("name")}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-10 border-2 rounded-lg bg-inherit font-light placeholder:pl-2 text-gray-200"
              />
            </label>
            <div className="mt-5">
              <label className="text-lg font-light text-gray-200 flex flex-col">
                Email
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu email"
                  {...register("mail")}
                  onChange={(e) => setMail(e.target.value)}
                  className="w-full h-10 border-2 rounded-lg bg-inherit font-light placeholder:pl-2 text-gray-200"
                />
              </label>
            </div>
            <div className="mt-8">
              <label className="text-lg font-light text-gray-200 flex flex-col">
                CPF
                <input
                  type="text"
                  id="document"
                  value={document}
                  placeholder="000.000.000-00"
                  {...register("document")}
                  onChange={(e) => setDocument(formatDocument(e.target.value))}
                  className="w-full sm:w-[300px] h-10 border-2 rounded-lg bg-inherit font-light placeholder:pl-2 text-gray-200"
                />
              </label>
            </div>
            <div className="block mt-8 sm:flex sm:gap-2">
              <label className="flex flex-col text-lg font-light text-gray-200">
                Senha
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                  {...register("password")}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 border-2 rounded-lg bg-inherit font-light placeholder:pl-2"
                />
              </label>
              <div className="flex flex-col mt-5 sm:mt-0">
                <label className="flex flex-col text-lg font-light text-gray-200">
                  Confirmar senha
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirme sua senha"
                    {...register("confirmPassword")}
                    className="w-full h-10 border-2 rounded-lg bg-inherit font-light placeholder:pl-2"
                  />
                </label>
              </div>
            </div>
            <div className="mt-10">
              <button
                className="w-full h-10 rounded-lg bg-yellow-500 text-white"
                type="submit"
              >
                Cadastrar-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
