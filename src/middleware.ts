export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/app", "/app/stock", "/app/stock/new"],
  // matcher: ["/((?!register|api|login).*)"],
};
