import { Encard } from '@/components/Encard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Projets() {
  return (
    <div className="flex w-full flex-col items-center">
      {[
        ['Climatisation passive',
          'Nous avons développé un système de climatisation passive pour les bâtiments.\n Fonctionnant uniquement à l\'eau, il permet de rafraîchir les pièces en été.',
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
