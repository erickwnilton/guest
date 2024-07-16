import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";

export async function useSession() {
  const session = await getServerSession(nextAuthOptions);

  return session;
}
