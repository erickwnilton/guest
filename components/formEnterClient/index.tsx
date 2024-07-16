"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export function FormEnterClient() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const HandleUserData = async () => {
    const result = await signIn("credentials", {
      mail,
      password,
      redirect: false,
    });

    if (result?.error) {
      return null;
    } else {
      router.replace("/onBoarding");
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className="m-auto w-[500px]">
        <div className="m-5">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(HandleUserData)}
          >
            <label className="text-lg font-light text-gray-800 flex flex-col">
              Email
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                {...register("mail", { required: true })}
                onChange={(e) => setMail(e.target.value)}
                className="w-full h-10 border-[1px] rounded-lg bg-inherit font-light placeholder:pl-2 text-gray-800"
              />
            </label>
            <label>
              Senha
              <div className="w-full relative">
                <input
                  id="password"
                  placeholder="Digite sua senha"
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 border-[1px] rounded-lg bg-inherit font-light placeholder:pl-2 text-gray-800"
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
            <div className="flex items-end justify-end">
              <Link href="/recover">
                <span className="text-[#3486fa] font-light underline underline-offset-4">
                  Esqueceu sua senha?
                </span>
              </Link>
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="w-full h-10 rounded-lg bg-black text-white"
              >
                Acessar
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center mt-5 gap-2">
            <span className="text-gray-800 font-light">
              Ainda não tem cadastro?
            </span>
            <Link href="/signup">
              <span className="text-[#3486fa] font-light underline underline-offset-4">
                Crie sua conta
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
