import { AuthLoginData } from "@/models/Auth";
import { prisma } from "@/services/db";
import { compare } from "bcryptjs";

export class AuthController {
  static async login(data: AuthLoginData) {
    if (!data?.email || !data.password) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user || !(await compare(data.password, user.password!))) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      store_org: user.store_orgId,
    };
  }
}
