import Link from "next/link"
import { cn } from "@/lib/utils"

export default function SiteLinks({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center text-base space-x-4 lg:space-x-6", className)}
            {...props}
        >
            <Link href="/" className="font-medium transition-colors hover:text-primary">
                Overview
            </Link>
            <Link href="/" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                Artist
            </Link>
            <Link href="/" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                Blog
            </Link>
            <Link href="/" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                Project
            </Link>
        </nav>
    )
}