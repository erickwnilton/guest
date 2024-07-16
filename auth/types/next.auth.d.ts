import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      mail: string;
      document: string;
      profileImage: string;
      role: string;
      company: {
        id: string;
        name: string;
        cnpj: string;
        image: string;
      };
      product: {
        id: string;
        name: string;
        value: float;
        quantity: integer;
      };
    };
  }
}
