import Link from "next/link";
import Image from "next/image";

import ltlImage from '@/assets/ltl_transparent.png';
import logoImage from '@/assets/logo.png';
import ltlbImage from '@/assets/ltlb_full_transparent.png'

export default function Header() {
    return (
        <header className="border-b p-4 flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="h-8 w-44 relative">
                    <Image
                        src={ltlbImage}
                        alt="ltlb logo"
                        fill
                        objectFit="contain"
                    />
                </div>
            </Link>
            <nav className="hidden">
                {[
                    ["Projets", "/projets"],
                ].map(([label, href]) => (
                    <a href={href} className="">
                        {label}
                    </a>
                ))}
            </nav>
        </header>
    );
}