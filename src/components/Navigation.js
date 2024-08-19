import Link from "next/link";
import React from "react";

const navigations = [
  {
    name: "فروشگاه",
    href: "/store",
  },
  {
    name: "درباره ی ما",
    href: "/about",
  },
  {
    name: "حساب کاربری",
    href: "/account",
  },
];

async function Navigation() {
  return (
    <div className=" text-lg z-10 ">
      <ul className="flex items-center justify-center gap-16">
        {navigations.map((navaigate) => (
          <li className="hover:text-blue-400 font-semibold transition-all duration-100">
            <Link href={navaigate.href}>{navaigate.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
