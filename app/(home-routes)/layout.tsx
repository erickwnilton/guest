import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

interface privateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({children}: privateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if(!session) {
    redirect("/")
  }

  return <>{children}</>
}