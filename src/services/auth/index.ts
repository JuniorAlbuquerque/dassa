import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../db";
import { AuthController } from "@/server/controllers/auth";
import { revalidateTag } from "next/cache";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth",
    error: "/auth",
    verifyRequest: "/auth",
    newUser: "/app",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await AuthController.login({
          email: credentials?.email!,
          password: credentials?.password!,
        });

        revalidateTag("products");
        revalidateTag("product-variants");
        revalidateTag("inventory");

        if (!user) {
          return null;
        }

        return {
          ...user,
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      session.user = token as any;

      return session;
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          store_org: u.store_org,
        };
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
