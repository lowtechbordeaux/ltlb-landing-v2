import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return null
    return (
        <Link
            href="https://jeparticipe.gironde.fr/project/budget-participatif-2023/collect/proposez-vos-projets/proposals/zone-de-fraicheur-urbaine"
            className='flex px-4 py-2 sm:py-2 justify-center items-center bg-orange-bp  hover:bg-energy-yellow-400 border border-dashed'
            target='_blank'
        >
            <Image src="/assets/logos/bee.webp" alt="bee" width={28} height={28} className='mr-4' />

            <span className='font-light text-center text-xs sm:text-sm'>Il est temps de voter pour le budget participatif de Gironde !</span>
        </Link>
    );
}