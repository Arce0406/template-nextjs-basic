import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { LogIn } from "lucide-react"

export default function UserLogInButton() {
    return (
        <Link href="/sign-in" className={buttonVariants({ variant: "ghost", size: "icon" })}>
            <LogIn className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            <span className="sr-only">Log In</span>
        </Link>
    )
}