"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { useRouter } from 'next-intl/client';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
    const router = useRouter();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Globe className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    <span className="sr-only">Switch languages</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => { router.push('/', { locale: 'en' }); }}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { router.push('/', { locale: 'ja' }); }}>
                    日本語
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => { router.push('/', { locale: 'zh' }); }}>
                    中文
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
