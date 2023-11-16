"use client"

import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { Github } from "lucide-react";

const GithubBtn = () => {
  return (
    <div>
      <Button
        onClick={() => {
          signIn("github");
        }}
        variant="outline"
        size="icon"
      >
        <Github className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default GithubBtn;
