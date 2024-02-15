import { Encard } from '@/components/Encard';
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Climatisation Passive - Low-tech Lab Bordeaux",
  description: 'Nous avons développé un système de climatisation passive pour les bâtiments.\n Fonctionnant uniquement à l\'eau, il permet de rafraîchir les pièces en été.',
};

export default function Projets() {
  return (
    <div className='flex flex-col items-center'>

      <h2 className='w-full bg-persian-green-800 mb-0 py-4 text-center text-background'>
        Climatisation passive
      </h2>

      <Encard
        imageSrc="/assets/pics/clim_5.jpg"
      >
        <p>
          Découvrez notre <b>climatiseur low-tech</b>,  pour une fraîcheur éco-responsable !
        </p>
        <p>
          Désormais, les journées ensoleillées ne serviront plus qu’à bronzer ; leur soleil alilmentera aussi nos climatiseurs de manière <b>propre et durable</b>. Finies les factures d'électricité salées, bonjour à <b>l'efficacité énergétique du futur</b> !
        </p>
      </Encard>
      <Encard
        imageSrc="/assets/pics/clim_4.jpg"
      >
        <ul className='list-disc list-inside space-y-1'>
          <li>
            Zéro Émission : Notre climatiseur solaire fonctionne grâce à <b>l'énergie du soleil et du vent</b>, réduisant ainsi son impact environnemental.
          </li>
          <li>
            Économies Garanties : Avec le pouvoir du soleil à votre service, dites adieu aux coûts énergétiques élevés.
          </li>
          <li>
            Innovation Durable : Contribuez à façonner un avenir durable en adoptant des technologies innovantes.
          </li>
        </ul>
      </Encard>
      <Encard
        imageComponent={
          <div className='bg-orange-bp w-full h-full'>
            <Image src="/assets/bp/votez_square.webp" alt="vote-bp" fill className="object-contain" />
          </div>
        }
      >
        <p>
          Préparez-vous à un <b>été frais sans compromis</b>. Soutenez notre projet de zones de fraîcheur urbaines en votant pour nous au Budget Participatif du Département de la Gironde.
        </p>
        <Link
          href="https://jeparticipe.gironde.fr/project/budget-participatif-2023/collect/proposez-vos-projets/proposals/zone-de-fraicheur-urbaine"
          target='_blank'
          className='flex justify-center mt-4'
        >
          <Button className='bg-orange-bp hover:bg-energy-yellow-500'>
            Votez !
          </Button>
        </Link>

      </Encard>
      <div
        className="relative w-full max-w-screen-md aspect-square"
      >
        <Image
          src="/assets/pics/clim_schema.jpg"
          alt="schema clim lowtech"
          fill
          className='object-contain'
        />
      </div>

      <div className='flex w-full justify-center bg-persian-green-500'>
        <div className='w-[448px] max-w-full'>
          <iframe
            width="100%"
            height="797"
            src="https://www.youtube.com/embed/TlbgDLtnx5k"
            title="Un climatiseur naturel sans électricité #innovation #environment #shortswithzita"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

        </div>
      </div>
    </div>
  );
}
