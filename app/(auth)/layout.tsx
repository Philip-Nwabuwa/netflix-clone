import { ReactNode } from "react";
import Image from "next/image";
import BgImage from "@/public/login_background.jpg";
import Logo from "@/public/netflix_logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BgImage}
        fill
        priority
        alt="Background Image"
        className="hidden sm:flex sm:object-cover -z-10"
      />
      <Image
        src={Logo}
        alt="Logo"
        width={120}
        height={120}
        priority
        className="absolute left-4 top-4 object-contain md:left-10 md:top-10"
      />
      {children}
    </div>
  );
}
