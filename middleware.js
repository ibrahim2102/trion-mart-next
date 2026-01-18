import { withAuth } from "next-auth/middleware";
import { authOptions } from "./lib/auth";

export default withAuth({
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: ({ token, req }) => {
      // Allow access if token exists
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};