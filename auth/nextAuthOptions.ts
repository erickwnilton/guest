import { api } from "@/services/api";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        mail: { label: "mail", type: "email" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const response = await api.post("/login", {
            mail: credentials?.mail,
            password: credentials?.password,
          });

          if (!response.data || !response.data.user) {
            return console.log("nao encontrou os dados");
          } else {
            const user = response.data.user;

            return user;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/signin",
    newUser: "/signup",
    signOut: "/",
  },

  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
};
