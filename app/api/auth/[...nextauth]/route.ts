import NextAuth from "next-auth/next";
import { api } from "@/services/api";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        mail: { label: "mail", type: "email"},
        password: { label: "password", type: "password"}
      },

      async authorize(credentials, req) {
        try {
          const response = await api.post("/login", {
            mail: credentials?.mail,
            password: credentials?.password
          })
  
          if(!response.data || !response.data.user) {
            return console.log("Failed to login");
          }
  
          else {
            const user = response.data.user;
  
            return user;
          }
        } catch (error) {
          console.log(`Error during login: ${error}`); 
        }
      },
    })
  ],

  pages: {
    signIn: "/"
  }
}

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions}