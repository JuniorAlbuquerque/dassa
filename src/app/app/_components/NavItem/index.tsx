import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

type NavItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

export const NavItem: FunctionComponent<NavItemProps> = ({
  href,
  icon,
  label,
}) => {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-3 text-base",
        "text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
        {
          "text-primary hover:text-primary/80": pathname === href,
        }
      )}
      href={href}
    >
      {icon}
      {label}
    </Link>
  );
};
