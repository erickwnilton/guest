"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { NewUserInput } from "@/types/formUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForRegisterUser } from "@/schemas/userSchema";
import { notifyError, notifySuccess } from "@/utils/toastMessages";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export function FormNewClient() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [document, setDocument] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfimrPassword, setShowConfirnPassword] =
    useState<boolean>(false);

  const { register, handleSubmit } = useForm<NewUserInput>({
    resolver: yupResolver(schemaForRegisterUser),
  });

  function formatDocument(value: string) {
    const document = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    return value.replace(document, "$1.$2.$3-$4");
  }

  const RegistrationFormData = async () => {
    try {
      const addNewUser = await api.post("/user", {
        name,
        mail,
        document,
        password,
      });

      if (addNewUser) {
        notifySuccess();
        router.push("/");
      }
    } catch (error) {
      notifyError();
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className="m-auto w-[500px]">
        <div className="h-full m-5">
          <h1 className="text-xl font-medium text-gray-800">
            Informações Pessoais
          </h1>
          <form className="mt-10" onSubmit={handleSubmit(RegistrationFormData)}>
            <label className="text-lg font-light text-gray-800 flex flex-col">
              Nome
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                {...register("name")}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-10 border-[1px] rounded-lg bg-inherit font-light placeholder:pl-2 text-gray-800"
              />
            </label>
            <div className="mt-5">
              <label className="text-lg font-light text-gray-800 flex flex-col">
                Email
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu email"
                  {...register("mail")}
                  onChange={(e) => setMail(e.target.value)}
                  className="w-full h-10 border-[1px] rounded-lg bg-inherit font-light placeholder:pl-2 text-gray-800"
                />
              </label>
            </div>
            <div className="mt-8">
              <label className="text-lg font-light text-gray-800 flex flex-col">
                CPF
                <input
                  type="text"
                  id="document"
                  value={document}
                  placeholder="000.000.000-00"
                  {...register("document")}
                  onChange={(e) => setDocument(formatDocument(e.target.value))}
                  className="w-full sm:w-[300px] h-10 border-[1px] rounded-lg bg-inherit font-light placeholder:pl-2 text-gray-800"
                />
              </label>
            </div>
            <div className="block mt-8 sm:flex sm:gap-2">
              <label className="flex flex-col relative text-lg font-light text-gray-800">
                Senha
                <div className="w-full relative">
                  <input
                    id="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-10 pr-10 border-[1px] rounded-lg bg-inherit font-light placeholder:pl-2"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeIcon width={20} height={20} />
                    ) : (
                      <EyeSlashIcon width={20} height={20} />
                    )}
                  </button>
                </div>
              </label>
              <div className="flex flex-col mt-5 sm:mt-0">
                <label className="flex flex-col text-lg font-light text-gray-800">
                  Confirmar senha
                  <div className="w-full relative">
                    <input
                      id="confirmPassword"
                      placeholder="Confirme sua senha"
                      {...register("confirmPassword")}
                      type={showConfimrPassword ? "text" : "password"}
                      className="w-full h-10 pr-10 border-[1px] rounded-lg bg-inherit font-light placeholder:pl-2"
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-2"
                      onClick={() =>
                        setShowConfirnPassword(!showConfimrPassword)
                      }
                    >
                      {showConfimrPassword ? (
                        <EyeIcon width={20} height={20} />
                      ) : (
                        <EyeSlashIcon width={20} height={20} />
                      )}
                    </button>
                  </div>
                </label>
              </div>
            </div>
            <div className="mt-10">
              <button
                className="w-full h-10 rounded-lg bg-black text-white"
                type="submit"
              >
                Criar conta
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center mt-5 gap-2">
            <span className="text-gray-800 font-light">
              Já tem um cadastro?
            </span>
            <Link href="/signin">
              <span className="text-[#3486fa] font-light underline underline-offset-4">
                Acesse sua conta
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
