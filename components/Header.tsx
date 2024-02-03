'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import clsx from "clsx";

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="border-b p-4 sm:px-8 flex items-center justify-between">
            <Link href="/" className="flex items-center" prefetch>
                <div className="h-8 w-32 relative">
                    <Image
                        src="/assets/logos/ltlb_full_transparent.png"
                        alt="ltlb logo"
                        fill
                        objectFit="contain"
                    />
                </div>
            </Link>
            <nav className="flex items-center divide-x text-sm sm:text-base">
                {[
                    ["L'asso", "/"],
                    ["Agenda", "/agenda"],
                    ["Nos Projets", "/projets"],
                    ["Nous rencontrer", "/nous-rencontrer"],
                ].map(([label, href]) => (
                    <Link
                        key={String(href)}
                        href={href}
                        className={clsx(
                            'px-2',
                            pathname === href && "text-energy-yellow-600"
                        )}
                        prefetch>
                        {label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}