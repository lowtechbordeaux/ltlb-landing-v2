import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <Link
            href="https://jeparticipe.gironde.fr/project/budget-participatif-2023/collect/proposez-vos-projets/proposals/zone-de-fraicheur-urbaine"
            className='flex px-4 py-2 sm:py-4 justify-center items-center bg-orange-bp  hover:bg-energy-yellow-400 border-b border-dashed'
        >
            <Image src="/assets/logos/bee.webp" alt="bee" width={32} height={32} className='mr-4 h-8 w-8' />

            <span className='font-light text-center text-sm sm:text-lg'>Il est temps de voter pour le budget participatif de Gironde !</span>
        </Link>
    );
}