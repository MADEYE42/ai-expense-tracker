import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ['/'], // Root path is public
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // All paths except those with file extensions and `_next`
    "/", // Root path
    "/(api|trpc)(.*)", // Paths starting with `api` or `trpc`
  ],
};
