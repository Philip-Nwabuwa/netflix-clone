import Link from "next/link";
import GoogleBtn from "@/components/authButtons/GoogleBtn";
import GithubBtn from "@/components/authButtons/GithubBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";
import { redirect } from "next/navigation";
import SignIn from "@/components/common/SignIn";

const page = async () => {
  const session = await getServerSession(authOptions)

  if(session){
    return redirect("/home")
  }
  
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <SignIn/>

      <div className="text-gray-500 text-sm mt-2">
        New to Netflix
        <Link className="text-white hover:underline pl-2" href="/sign-up">
          Sign up now!
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GoogleBtn/>
        <GithubBtn/>
      </div>
    </div>
  );
};

export default page;
