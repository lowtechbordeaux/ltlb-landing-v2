import { Encard } from '@/components/Encard';

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
        <Encard title={title} image={image} href={href}>
          <p>
            {description}
          </p>
        </Encard>
      ))}

    </div >
  );
}
