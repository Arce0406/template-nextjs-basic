import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return {
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    image: session?.user?.image || "",
  }
}