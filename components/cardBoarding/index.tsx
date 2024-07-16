"use client";

import Link from "next/link";
import { useState } from "react";
import { api } from "@/services/api";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function CardBoarding() {
  const router = useRouter();
  const { data: session } = useSession();
  const { register, handleSubmit } = useForm();
  const [selectedRole, setSelectedRole] = useState("");

  const ChangeUserRole = async () => {
    try {
      const userId = await api.put(`/user/${session?.user.id}`, {
        role: selectedRole,
      });

      if (userId.data) {
        if (selectedRole === "client") {
          router.push("/client");
        } else if (selectedRole === "company") {
          router.push("/company");
        }
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  return (
    <div className="w-full h-full p-5">
      <div className="mt-2">
        <h1 className="text-lg font-medium font-sans tracking-tight text-gray-800">
          Tipo de serviço que você busca:
        </h1>
      </div>
      <div className="mt-[50px]">
        <form onSubmit={handleSubmit(ChangeUserRole)}>
          <select
            {...register("role", { required: true })}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="border-[1px] w-full h-[50px] rounded-md "
          >
            <option value="client">Cliente</option>
            <option value="company">Empresa</option>
          </select>
          <div className="mt-10">
            <button
              type="submit"
              className="w-full h-10 rounded-lg bg-black text-white"
            >
              Acessar
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center mt-3">
        <Link href="/signin">
          <span className="underline underline-offset-4 hover:text-yellow-500 delay-75">
            Voltar
          </span>
        </Link>
      </div>
    </div>
  );
}
