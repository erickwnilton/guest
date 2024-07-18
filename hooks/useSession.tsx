import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/services/nextAuthOptions";

export async function useSession() {
  const session = await getServerSession(nextAuthOptions);

  return session;
}
