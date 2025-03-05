import { headers } from "next/headers";

export function getPathname(): string {
//   const headersList = headers();
//   const referer = headersList.get("referer");

//   if (!referer) return "/";

//   try {
//     return new URL(referer).pathname;
//   } catch {
//     return "/";
//   }
    return "/"
}