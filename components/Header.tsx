'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import clsx from "clsx";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ConditionalWrapper } from "@/lib/utils";
import { Menu } from "lucide-react"

const routes = [
    ["L'asso", "/"],
    ["Agenda", "/agenda"],
    ["Nos Projets", "/projets"],
    ["Nous rencontrer", "/nous-rencontrer"],
]

function matchPathName(pathname: string): typeof routes[0] | undefined {
    const matchingRoutes = routes.filter(([, href]) => pathname.startsWith(href))
    const bestMatchingRoute = matchingRoutes?.sort((a, b) => b[1].length - a[1].length)[0]
    return bestMatchingRoute
}

function NavItems({ classNameNav, classNameItem, sheetClose = false }: { classNameNav?: string, classNameItem?: string, sheetClose?: boolean }) {
    const pathname = usePathname()
    const matchPath = matchPathName(pathname)
    return (
        <nav className={clsx("", classNameNav)}>
            {routes.map(([label, href]) => (
                <ConditionalWrapper
                    key={String(href)}
                    wrapper={sheetClose && (children => <SheetClose asChild>{children}</SheetClose>)}
                >
                    <Link
                        href={href}
                        className={clsx(
                            'py-2',
                            matchPath && matchPath[1] === href && "text-energy-yellow-600",
                            classNameItem,
                        )}
                        prefetch>
                        {label}
                    </Link>
                </ConditionalWrapper>
            ))
            }
        </nav >
    )
}

export default function Header() {
    const pathname = usePathname()
    const matchPath = matchPathName(pathname)
    return (
        <header className="border-b flex items-center justify-between h-12 sticky top-0 bg-background z-50 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <Link href="/" className="flex items-center" prefetch>
                <div className="h-8 w-32 relative m-4">
                    <Image
                        src="/assets/logos/ltlb_full_transparent.png"
                        alt="ltlb logo"
                        fill
                        className="object-contain"
                    />
                </div>
            </Link>
            <Sheet>
                <SheetTrigger className="flex sm:hidden items-center" asChild>
                    <Button variant="ghost">
                        <span>{matchPath ? matchPath[0] : 'unmatch'}</span>
                        <Menu className="ml-2" />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-full max-w-[400px] sm:max-w-[540px] p-0">
                    <SheetHeader className="p-4">
                        <SheetTitle className="mb-4">Menu</SheetTitle>
                        <SheetDescription>
                        </SheetDescription>
                    </SheetHeader>
                    <div className="inset-x-0">
                        <NavItems
                            classNameNav="flex flex-col justify-center text-end divide-y inset-y-0"
                            classNameItem="py-2 text-xl px-8"
                            sheetClose
                        />
                    </div>
                </SheetContent>
            </Sheet>
            <NavItems
                classNameNav="hidden sm:flex h-full items-center text-sm divide-x"
                classNameItem="px-2 h-full flex items-center"
            />
        </header>
    );
}