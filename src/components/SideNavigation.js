"use client";
import Link from "next/link";
import { GrHome } from "react-icons/gr";
import { FaSignOutAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { signOutaction } from "@/lib/action";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <GrHome className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "سبد خربد",
    href: "/account/cart",
    icon: <MdOutlineShoppingCart className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "اطلاعات کاربر",
    href: "/account/profile",
    icon: <CgProfile className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-l border-primary-900 ">
      <ul className="flex flex-col justify-end gap-2 h-full text-base py-2 px-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex  gap-4  text-primary-200 
         ${pathname === link.href ? "bg-gray-500 rounded-md" : ""} `}
              href={link.href}>
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <form action={signOutaction}>
            <button className=" w-full flex items-center  gap-x-2 hover:bg-gray-500 px-5  py-3 my-5 rounded-md">
              <FaSignOutAlt />
              <p>خروج</p>
            </button>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
