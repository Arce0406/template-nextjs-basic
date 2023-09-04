"use client";

import { Metadata } from "next"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { SocialMediaIcons } from "@/components/social-media-icons"
import { signIn } from "next-auth/react"

// SEO
export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
}

export default function SignInPage() {
    return (
        <div className="container relative hidden min-h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <Link
                href="/examples/authentication"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute right-4 top-4 md:right-8 md:top-8"
                )}
            >
                Sign up
            </Link>
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    VSinger Introduce Project
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Sign in with
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Currently we only accept registrations using OAuth2.
                        </p>
                    </div>
                    <div className={cn("grid gap-6")}>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    continue with
                                </span>
                            </div>
                        </div>
                        <Button variant="outline" type="button" onClick={() => { signIn("discord") }}>
                            <SocialMediaIcons.discord className="mr-2 h-4 w-4" />
                            Discord
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}