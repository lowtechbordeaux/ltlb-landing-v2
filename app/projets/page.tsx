import Card from '@/components/Card'

export default function Projets() {
  return (
    <main className='flex flex-col items-center'>

      <h2 className='my-4'>
        Projets en cours
      </h2>

      <div className='flex flex-col space-y-4 w-full max-w-xl items-center'>
        {[
          ['Climatisation passive',
            'Nous avons développé un système de climatisation passive pour les bâtiments.\n Fonctionnant uniquement à l\'eau, il permet de rafraîchir les pièces en été.',
            '/assets/pics/clim_1.jpg',
            'clim passive',
            '/projets/climatisation-passive'
          ],
          ['Tiny House Low-tech',
            'Nous avons pour projet de construire une tiny house completement équipée de low-techs',
            '/assets/pics/tiny_1.jpg',
            'tiny house low tech',
            '/projets/tiny-house-low-tech'
          ],
        ].map(([title, description, image, alt, href]) => (
          <Card
            key={String(title)}
            title={title}
            description={description}
            image={image}
            alt={alt}
            href={href}
          />
        ))}

      </div>

    </main >
  );
}
