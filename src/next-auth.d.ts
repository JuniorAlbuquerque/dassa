import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      store_org: string;
    } & DefaultSession["user"];
  }
}
