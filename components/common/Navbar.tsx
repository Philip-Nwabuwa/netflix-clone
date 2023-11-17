"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";
import { useSession } from "next-auth/react";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];

const Navbar = () => {
  const pathName = usePathname();
  const { data: session } = useSession();  
  return (
    <div className="flex w-ful max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix Logo" priority />
        </Link>
        <ul className="lg:flex items-center gap-x-4 ml-14 hidden">
          {links.map((link, index) => (
            <div key={index}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="font-semibold underline text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li className="text-gray-300 font-normal text-sm">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
      <UserNav email={session?.user?.email} userName={session?.user?.name}/>
      </div>
    </div>
  );
};

export default Navbar;
