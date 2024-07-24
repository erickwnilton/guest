import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export function LayoutPublic({ children }: LayoutProps) {
  return <section className="public_section">{children}</section>;
}
