import Image from 'next/image'
import Link from 'next/link';

export default function Projets() {
  return (
    <main className='flex flex-col items-center'>

      <h2 className='my-4'>
        Climatisation passive
      </h2>

      <div className='w-full max-w-xl h-64 relative'>
        <Image
          src={'/assets/pics/clim_2.jpg'}
          alt="clim passive"
          fill
          className="object-cover"
        />
      </div>
      <div className='flex flex-col w-full max-w-xl mt-4 px-2 sm:px-0'>
        <p>
          Le Low-tech Lab Bordeaux vous propose de mettre à la disposition de vos villes une climatisation passive. Ce système, facilement installable dans les espaces urbains, permet de refroidir l'air ambiant, sans électricité et sans polluer !
          <br />

        </p>

        <Link
          href="https://jeparticipe.gironde.fr/project/budget-participatif-2023/collect/proposez-vos-projets/proposals/zone-de-fraicheur-urbaine"
          className='flex flex-col p-4 justify-center items-center bg-energy-yellow-50  hover:bg-energy-yellow-100 rounded-lg my-4 border border-dashed border-orange-bp'
        >
          <div
            className='w-64 h-64 relative mb-4'
          >
            <Image
              src="/assets/bp/votez_square.webp"
              alt="votez pour ce projet sur le budget participatif de Gironde"
              fill
            />
          </div>
          Votez pour ce projet sur le budget participatif de Gironde !
        </Link>
        <p>
          Avec le changement climatique, la température a tendance à être de plus en plus forte l’été. En ville ce phénomène est accentué de par le manque d’espaces végétalisés et la concentration de personnes, ce qui engendre une plus forte consommation d’énergie et donc une plus forte chaleur.
          <br />

          L'association a développé cette année un prototype de climatisation passive, et souhaite le mettre à disposition de chacun·e via le budget participatif de Gironde.
          <br />
          Cette climatisation, facilement réalisable et à faible coût, est composé d'un ensemble de tubes en terre cuite et d'un système de circulation d'eau. Il refroidit l'air grâce à l'évaporation de cette eau.
        </p>

        <div className='flex justify-center mt-4'>
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
    </main>
  );
}
