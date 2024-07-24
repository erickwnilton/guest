"use client";

import { ReactNode } from "react";
import { useSession } from "next-auth/react";

import Loading from "@/app/(public)/loading/page";

type LayoutProps = {
  children: ReactNode;
};

export function LayoutPrivate({ children }: LayoutProps) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (!session) {
    if (typeof window !== "undefined") {
      window.location.href = "/signin";
    } else {
      return null;
    }
  }

  return <section className="private_section">{children}</section>;
}
