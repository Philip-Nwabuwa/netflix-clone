"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { SetStateAction, useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signIn("email", { email });
  };

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-semibold text-white">Log In</h1>
      <div className="space-y-4 mt-5">
        <Input
          type="email"
          name="email"
          onChange={handleEmailChange}
          placeholder="example@gmail.com"
          className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 inline-block "
        />
        <Button
          type="submit"
          variant={"destructive"}
          className="w-full bg-[#e50914]"
        >
          Log In
        </Button>
      </div>
    </form>
  );
};

export default SignIn;
