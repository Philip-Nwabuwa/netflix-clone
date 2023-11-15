import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import GoogleIcon from "@/public/google.svg";

const page = () => {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Log In</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
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

      <div className="text-gray-500 text-sm mt-2">
        New to Netflix
        <Link className="text-white hover:underline" href="/sign-up">
          Sign up now!
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <Button variant="outline" size="icon">
          <Image
            priority
            src={GoogleIcon}
            alt={"Google Log in button"}
            className="w-6 h-6"
          />
        </Button>
        <Button variant="outline" size="icon">
          <Github className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default page;
