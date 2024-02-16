import { Encard } from '@/components/Encard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projets - Low-tech Lab Bordeaux",
  description: "Les projets du Low-tech Lab Bordeaux",
};

export default function Projets() {
  return (
    <div className="flex w-full flex-col items-center">
      {[
        ['Climatisation passive',
          'Nous avons développé un système de climatisation passive pour rafraîchir l\'air ambiant, fonctionnant avec les énergies du soleil et du vent combinées à la circulation d\'eau en circuit fermé.',
          '/assets/pics/clim_2_crop.jpg',
          'clim passive',
          '/projets/climatisation-passive'
        ],
        /*['Tiny House Low-tech',
          'Nous avons pour projet de construire une tiny house completement équipée de low-techs',
          '/assets/pics/tiny_1.jpg',
          'tiny house low tech',
          '/projets/tiny-house-low-tech'
        ],*/
      ].map(([title, description, image, alt, href]) => (
        <Encard title={title} imageSrc={image} href={href} key={href}>
          {description.split('\n').map((line, index) => (
            <p key={index} className="mb-1"> {line} </p>
          ))}
          <Link
            href={href}
            className='flex justify-center mt-4'
          >
            <Button className='bg-orange-bp group-hover:bg-energy-yellow-500'>
              Voir plus
            </Button>
          </Link>
        </Encard>
      ))}

    </div >
  );
}
