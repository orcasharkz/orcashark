import { getPath } from "./path";

export const navItems: { name: string; href: string }[] = [
  { name: "HOME", href: getPath().home },
];
