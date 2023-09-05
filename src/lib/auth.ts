// https://github.com/shadcn-ui/taxonomy/blob/main/lib/auth.ts
import { NextAuthOptions } from "next-auth"
import DiscordProvider from 'next-auth/providers/discord'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
    "adapter": PrismaAdapter(db),
    "secret": process.env.NEXTAUTH_SECRET,
    "session": { "strategy": "jwt" },
    "providers": [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
            authorization: { params: { scope: "identify" } },
        })
    ],
    "pages": {
        "signIn": "/en/sign-in"
    },
    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) {
        //     return true
        // },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        // async session({ session, user, token }) {
        //     return session
        // },
        // async jwt({ token, user, account, profile, isNewUser }) {
        //     return token
        // }
    }
}