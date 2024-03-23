import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { ButtonLogout } from "@/components/buttonLogout";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);
  
  return (
    <div>
      <h1>Bem vindo a home, {session?.user.name}</h1>
      <ButtonLogout />
    </div>
  )
}