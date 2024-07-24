import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/auth/nextAuthOptions";

export async function useSession() {
  const session = await getServerSession(nextAuthOptions);

  return session;
}
