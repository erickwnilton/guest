"use client"

import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


export function ButtonLogout() {
  const router = useRouter();

  async function logout() {
    await signOut({
      redirect: false
    })

    router.replace("/");
  }

  return (
    <Button onClick={logout}>
      sair
    </Button>
  )
}