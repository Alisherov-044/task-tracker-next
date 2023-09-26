"use client";
import { usePathname } from "next/navigation";

export function useRouter() {
  const pathname = usePathname();

  const hasRoute = (routes: string[]) => {
    return routes.includes(pathname);
  };

  return { pathname, hasRoute };
}
