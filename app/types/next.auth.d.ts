import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      "id": string
      "name": string
      "mail": string
      "document": string
      "profileImage": string
      "role": string
      company: {
        "name": string
        "cnpj": string
        "primaryColor": string
        "secundaryColor": string
        "image": string
      }
    }
  }
}