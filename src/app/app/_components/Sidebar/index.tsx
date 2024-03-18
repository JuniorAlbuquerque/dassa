import { HomeIcon, PackageIcon, ShoppingCartIcon } from "lucide-react";
import { NavItem } from "../NavItem";

const items = [
  {
    route: "/app",
    label: "Home",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    route: "/app/stock",
    label: "Inventário",
    icon: <PackageIcon className="h-4 w-4" aria-hidden="true" />,
  },
  {
    route: "/app/products",
    label: "Produtos",
    icon: <PackageIcon className="h-4 w-4" />,
  },
  {
    route: "/app/orders",
    label: "Orders",
    icon: <ShoppingCartIcon className="h-4 w-4" />,
  },
];

export const Sidebar = () => {
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      {items?.map((item) => (
        <NavItem
          key={item.route}
          href={item.route}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </nav>
  );
};
