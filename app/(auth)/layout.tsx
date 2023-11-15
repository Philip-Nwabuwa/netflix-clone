import { ReactNode } from "react";
import Image from "next/image";
import BgImage from "@/public/login_background.jpg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src="/login_background.jpg"
        width={100}
        height={100}
        alt="Background Image"
        className="hidden sm:flex sm:object-cover -z-10"
      />
      {children}
    </div>
  );
}
