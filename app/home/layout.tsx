import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/authOptions";
import { redirect } from "next/navigation";
import Navbar from "@/components/common/Navbar";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("login");
  }
  return (
    <div>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
