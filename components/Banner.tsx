import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <Link
      href="https://www.jadopteunprojet.com/decouvrez-les-projets/detail/low-tech-lab-bordeaux"
      className="flex px-4 py-2 sm:py-2 justify-center items-center bg-blue-jup hover:bg-blue-jup-hover border border-dashed"
      target="_blank"
    >
      <Image
        src="/assets/bp/jup.png"
        alt="jup"
        width={28}
        height={28}
        className="mr-4"
      />

      <span className="font-light text-center text-white text-lg">
        Soutenez notre campagne participative sponsorisée par la ville de
        Bordeaux !
      </span>
    </Link>
  );
}
