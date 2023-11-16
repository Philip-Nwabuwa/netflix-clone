import { getServerSession } from "next-auth"
import { authOptions } from "../utils/authOptions"

const page = async () => {
  const session = await getServerSession(authOptions)
  return (
    <section>
      Hello
    </section>
  )
}

export default page