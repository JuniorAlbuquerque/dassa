import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { items } from "../Sidebar";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BreadcrumbNavigation() {
  const pathname = usePathname();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items?.map((item) => (
          <Fragment key={item.route}>
            <BreadcrumbItem>
              {pathname === item.route ? (
                <BreadcrumbPage className="font-medium">
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.route}>{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
