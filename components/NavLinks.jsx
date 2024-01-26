import React from "react";
import Link from "next/link";

const links = [
  {
    label: "Novidades",
    href: "/news",
  },
  {
    label: "Exames",
    href: "/exams",
  },

  {
    label: "Perfil",
    href: "/profile",
  },
];

const NavLinks = () => {
  return (
    <ul className="menu  text-base-content">
      {links.map((link) => {
        return (
          <li key={link.href}>
            <Link href={link.href} className="capitalize">
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
