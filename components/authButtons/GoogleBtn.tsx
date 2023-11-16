"use client"

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image"
import GoogleIcon from "@/public/google.svg";

const GoogleBtn = () => {
  return (
    <div><Button
    onClick={() => {
      signIn("google");
    }}
    variant="outline"
    size="icon"
  >
    <Image
      priority
      src={GoogleIcon}
      alt={"Google Log in button"}
      className="w-6 h-6"
    />
  </Button></div>
  )
}

export default GoogleBtn