import { getServerSession } from "next-auth"
import { authOptions } from "../utils/authOptions"
import MovieVideo from "@/components/common/MovieVideo"
import RecentlyAdded from "@/components/common/RecentlyAdded"

const page = async () => {
  const session = await getServerSession(authOptions)
  return (
    <section className="p-5 lg:p-0">
      <MovieVideo/>
      <RecentlyAdded/>
    </section>
  )
}

export default page