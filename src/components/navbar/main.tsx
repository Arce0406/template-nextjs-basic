import Brand from "@/components/navbar/brand"
import { cn } from "@/lib/utils"
import UserNav from "@/components/auth/user-nav"
import SiteLinks from "@/components/navbar/links"
import { Search } from "@/components/navbar/search"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/themes/theme-toggle"
import { LanguageToggle } from "@/components/i18n/language-toggle"

export default function Navbar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div
            className={cn("border-b", className)}
            {...props}
        >
            <div className="flex h-16 items-center px-4 py-2">
                <Brand />
                <Separator orientation="vertical"></Separator>
                <SiteLinks className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <Search />
                    <LanguageToggle></LanguageToggle>
                    <ModeToggle></ModeToggle>
                </div>
                <Separator orientation="vertical" className="mx-6"></Separator>
                <UserNav />
            </div>
        </div>
    )
}
